const graph= {
  A: ["B","C"],
  B: ["A","D","E"],
  C: ["A","F"],
  D: ["B"],
  E: ["B"],
  F: ["C"]
};

// function dfs(graph,node,visited = new Set()){
//   console.log(node);
//   visited.add(node);
//   for(let n of graph[node]){
//     if(!visited.has(n)){
//       dfs(graph,n,visited);
//     }
//   }
// }
// dfs(graph,"A")

function dfs(graph,start){
  let stack = [start];
  let visited = new Set();

  while(stack.length >0){
    let current = stack.pop();
    if(!visited.has(current)){
      console.log(current);
      visited.add(current);
      for(let i = graph[current].length-1; i>=0; i--){
        let neighbor = graph[current][i];
        if(!visited.has(neighbor)){
          stack.push(neighbor)
        }
      }
    }
  }
}
dfs(graph,"A")