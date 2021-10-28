class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor() {
		this.root = null;
	}
	insert(val) {
		const newNode = new Node(val);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		//=======INSERTION BY LOOPING==========/
		let current = this.root;
		while (true) {
			if (val === current.val) return undefined;
			if (val < current.val) {
				if (!current.left) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else {
				if (!current.right) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}
	find(val) {
		if (!this.root) return false;
		let current = this.root;
		let found = false;
		while (!found && current) {
			if (val < current.val) {
				current = current.left;
			} else if (val < current.val) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if (!found) return false;
		return current;
	}
	DepthFirstSearchPreOrder() {
		//pre orders
		const data = [];
		//const queue = require("./Queues.js");
		let current = this.root;

		const preOrder = (node) => {
			data.push(node.val);
			if (node.left) preOrder(node.left);
			if (node.right) preOrder(node.right);
		};
		preOrder(current);

		return data;
	}
	DepthFirstSearchPostOrder(){
		//pre orders
		const data = [];
		//const queue = require("./Queues.js");
		let current = this.root;

		const postOrder = (node) => {
			if (node.left) postOrder(node.left);
			if (node.right) postOrder(node.right);
			data.push(node.val);
		};
		postOrder(current);

		return data;
	};
}

const tree = new Tree();

tree.insert(40);
tree.insert(11);
tree.insert(12);
tree.insert(8);
tree.insert(9);
tree.insert(41);
tree.insert(50);
tree.insert(30);
tree.insert(60);
tree.insert(72);
//                  40
//              11      41
//           8     12      50
//             9     30       60
//                               72

console.log(tree.DepthFirstSearchPreOrder());//40,11,8,9,12,30,41,50,60,72

console.log(tree.DepthFirstSearchPostOrder());//9,8,30,12,11,72,60,50,41,40

//console.log(tree);
