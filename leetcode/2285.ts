function maximumImportance(n: number, roads: number[][]): number {
  const map: Record<string, number> = {};

  for (let i = 0; i < roads.length; i++) {
    map[roads[i][0]] = map[roads[i][0]] ? map[roads[i][0]] + 1 : 1;
    map[roads[i][1]] = map[roads[i][1]] ? map[roads[i][1]] + 1 : 1;
  }


  const timeArray = Object.values(map)

  timeArray.sort((a, b) => b - a)
  
  
  let total = 0;
  for (let index = 0; index <  timeArray.length; index++) {
    total += (n-index) * timeArray[index]
  }
  return total;
}

console.log(
  maximumImportance(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 2],
    [1, 3],
    [2, 4],
  ])
);
