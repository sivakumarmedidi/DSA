class UndirectedGraph {
	constructor(V) {
		this._V = V;
		this._E = 0;
		this.adjMat = new Array(V);
		for(let i = 0; i < V; i++) {
			this.adjMat[i] = new Set();
		}
	}

	V() {
		return this._V;
	}

	E() {
		return this._E;
	}

	addEdge(v, w) {
		this.adjMat[v].add(w);
		this.adjMat[w].add(v);
		this._E++;
	}

	adj(v) {
		return this.adjMat[v];
	}
}

module.exports = UndirectedGraph;
