const UndirectedGraph = require("./UndirectedGraph");
const UndirectedGraphDfsPaths = require("./UndirectedGraphDfsPaths");
const UndirectedGraphBfsPaths = require("./UndirectedGraphBfsPaths");

const graph = new UndirectedGraph(6);
const edges = [[0,2], [0,1], [0,5], [2,1], [2,3], [2,4], [4,3], [3,5]];
edges.forEach(([u,v]) => graph.addEdge(u,v));

const undirectedGraphBfsPaths = new UndirectedGraphBfsPaths(graph, 0);
console.log(undirectedGraphBfsPaths.hasPathTo(2), undirectedGraphBfsPaths.hasPathTo(1), undirectedGraphBfsPaths.hasPathTo(3));
console.log(undirectedGraphBfsPaths.pathTo(2), undirectedGraphBfsPaths.pathTo(1), undirectedGraphBfsPaths.pathTo(3));

const undirectedGraphDfsPaths = new UndirectedGraphDfsPaths(graph, 0);
console.log(undirectedGraphDfsPaths.hasPathTo(2), undirectedGraphDfsPaths.hasPathTo(1), undirectedGraphDfsPaths.hasPathTo(3));
console.log(undirectedGraphDfsPaths.pathTo(2), undirectedGraphDfsPaths.pathTo(1), undirectedGraphDfsPaths.pathTo(3));
