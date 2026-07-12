const graph = {
  A: ["B","C"],
  B: ["A","D","E"],
  C: ["A","F"],
  D: ["B"],
  E: ["B"],
  F: ["C"]
}

function bfs(graph, start){
  let queue = [];
  let visited = new Set();

  queue.push(start);
  visited.add(start);

  while(queue.length >0){
    let current = queue.shift();
    console.log(current);
    for(let neighbor of graph[current]){
      if(!visited.has(neighbor)){
        visited.add(neighbor);
        queue.push(neighbor)
      }
    }
    
  }
}

bfs(graph,"A");