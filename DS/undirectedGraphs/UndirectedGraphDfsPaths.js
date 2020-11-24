class UndirectedGraphDfsPaths {
	constructor(graph, s) {
		this.graph = graph;
		this.s = s;
		this.marked = new Array(graph.V());
		this.edgeTo = new Array(graph.V());
		this.dfs(s);
	}

	dfs(v) {
		this.marked[v] = true;
		for(let w of this.graph.adj(v)) {
			if(!this.marked[w]) {
				this.edgeTo[w] = v;
				this.dfs(w);
			}
		}
	}

	hasPathTo(v) {
		return !!this.marked[v];
	}

	pathTo(v) {
		if(!this.hasPathTo(v)) return [];
		const path = [];
		for(let u = v; u !== this.s; u = this.edgeTo[u]) {
			path.push(u);
		}
		path.push(this.s);

		return path;
	}
}

module.exports = UndirectedGraphDfsPaths;
