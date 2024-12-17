function findCenter(edges: number[][]): number {
    const collect: Record<string, number> = {}
    for(let i = 0; i< edges.length; i++){
      collect[edges[i][0]]  = collect[edges[i][0]]? collect[edges[i][0]] + 1:1
      
      if(collect[edges[i][0]] > 1){
        return Number(edges[i][0])
      }
      collect[edges[i][1]] = collect[edges[i][1]]? collect[edges[i][1]]+1: 1
      if(collect[edges[i][1]] > 1){
        return Number(edges[i][1])
      }
    }
    return 0
};

findCenter([[1,2],[2,3],[4,2]])