class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.count = 1;
	}
}


class BST {
	constructor() {
		this.root = null;
	}

	insert(value) {
		this.root = this.__insertHelper(this.root, value);
	}

	size() {
		return this.__size(this.root);
	}

	min() {
		return this.__minHelper(this.root);
	}

	delete(value) {
		this.root = this.__deleteHelper(this.root, value);
	}

	deleteMin() {
		this.root = this.__deleteMinHelper(this.root);
	}

	__size(x) {
		if(x) return x.count;
		return 0;
	}

	__insertHelper(node, value) {
		if(!node) return new Node(value);
		if(node.value < value) {
			node.right = this.__insertHelper(node.right, value);
		} else {
			node.left = this.__insertHelper(node.left, value);
		}

		node.count = this.__size(node.left) + this.__size(node.right) + 1;
		return node;
	}

	__minHelper(x) {
		if(!x) return null;

		while(x.left) {
			x = x.left;
		}

		return x;
	}

	__deleteMinHelper(x) {
		if(!x) return null;
		if(!x.left) return x.right;

		x.left = this.__deleteMinHelper(x.left);
		x.count = this.__size(x.left) + this.__size(x.right) + 1;

		return x;
	}

	__deleteHelper(node, value) {
		if(!node) return null;

		if(node.value > value) {
			node.left = this.__deleteHelper(node.left, value);
		} else if (node.value < value) {
			node.right = this.__deleteHelper(node.right, value);
		} else {
			if(!node.left) return node.right;
			if(!node.right) return node.left;

			let rightMinNode = this.__minHelper(node.right);
			rightMinNode.right = this.__deleteMinHelper(node.right);
			rightMinNode.left = node.left;
			node = rightMinNode;
		}
		node.count = this.__size(node.left) + this.__size(node.right) + 1;
		return node;
	}

	printInOrder() {
		const array = [];
		this.printInOrderHelper(this.root, array);
		console.log(array);
	}

	printInOrderHelper(node, arr) {
		if(node.left) {
			this.printInOrderHelper(node.left, arr);
		}

		arr.push(node.value);

		if (node.right) {
			this.printInOrderHelper(node.right, arr);
		}
	}

	printLevelOrder() {
		const queue = [this.root, null];
		const arr = [];
		while(queue.length > 1) {
			const node = queue.shift();

			if(!node) {
				queue.push(null);
				arr.push(null);
				continue;
			}

			arr.push(node.value);
			if(node.left) { queue.push(node.left); }
			if(node.right) { queue.push(node.right); }
		}
		return arr;
	}
}


const arr = [4, 2, 5, 9, 7, 1, 6];
const bst = new BST();

arr.forEach(a => bst.insert(a));

bst.printInOrder();

bst.printLevelOrder();

console.log(JSON.stringify(bst.root, 0, 4));
