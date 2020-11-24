class UndirectedGraphBfsPaths {
	constructor(graph, s) {
		this.graph = graph;
		this.s = s;
		this.edgeTo = new Array(graph.V());
		this.distTo = new Array(graph.V());
		this.bfs();
	}

	bfs() {
		const queue = [this.s];
		this.edgeTo[this.s] = this.s;
		this.distTo[this.s] = 0;
		while(queue.length) {
			const x = queue.pop();
			for(let vertex of this.graph.adj(x)) {
				if(this.edgeTo[vertex] === undefined) {
					queue.unshift(vertex);
					this.distTo[vertex] = this.distTo[x] + 1;
					this.edgeTo[vertex] = x;
				}
			}
		}
	}

	hasPathTo(v) {
		return (this.edgeTo[v] !== undefined);
	}

	pathTo(v) {
		if(!this.hasPathTo(v)) return [];
		const path = [];
		for(let x = v; x !== this.s; x = this.edgeTo[x]) {
			path.push(x);
		}
		path.push(this.s);

		return path;
	}
}

module.exports = UndirectedGraphBfsPaths;
