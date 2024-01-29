const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3330;

app.get("/video", (req, res) => {
  const videoPath = path.resolve(__dirname, "./video.mp4"); // 替换为您的视频文件路径
  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    // 解析Range头部信息
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    // 计算块的大小
    const chunksize = end - start + 1;
    const file = fs.createReadStream(videoPath, { start, end });

    // 设置必要的头部信息
    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mp4",
    };

    res.writeHead(206, head);
    file.pipe(res);
  } else {
    // 如果没有Range头部，则发送整个视频
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(200, head);
    fs.createReadStream(videoPath).pipe(res);
  }
});
app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
