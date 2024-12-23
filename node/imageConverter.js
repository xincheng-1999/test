const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFolder = './input_images';
const outputFolder = './output_images';
const maxSize = 1 * 1024 * 1024; // 1MB in bytes

if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

fs.readdirSync(inputFolder).forEach(file => {
    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(outputFolder, path.parse(file).name + '.jpeg');

    sharp(inputPath)
        .jpeg({ quality: 85 })
        .toBuffer()
        .then(data => {
          console.log(outputPath, data.length > maxSize);
          
            if (data.length > maxSize) {
                return sharp(inputPath)
                    .metadata()
                    .then(metadata => {
                        // 计算缩放比例
                        const scaleFactor = Math.sqrt(maxSize / data.length);
                        const newWidth = Math.floor(metadata.width * scaleFactor);
                        const newHeight = Math.floor(metadata.height * scaleFactor);

                        // 调整分辨率并重新压缩
                        return sharp(inputPath)
                            .resize(newWidth, newHeight) // 调整分辨率
                            .jpeg({ quality: 85 }) // 再次压缩
                            .toFile(outputPath);
                    });
            } else {
                // 直接保存压缩后的文件
                return sharp(data).toFile(outputPath);
            }
        })
        .catch(err => console.error(err));
});
