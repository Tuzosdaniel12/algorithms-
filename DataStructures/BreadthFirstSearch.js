

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
		//=======INSERTION BY RECURSION========/
		// const insertNode = (node) =>
		//    newNode.val > node.val
		//         ? helper(node, "right")
		//         : helper(node, "left");
		// const helper = (node, direction) =>
		//     node[direction]
		//         ? insertNode(node[direction])
		//         : node[direction] = newNode;
		// insertNode(this.root);
		// this.size++;
		// return this;
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
    breadthFirstSearch(){
        const data = [];
        const queue = require("./Queues.js");
        let node = this.root;

        queue.enqueue(node)
        while(queue.first){
            node = queue.dequeue();
            data.push(node.val)
            if(node.left)queue.enqueue(node.left);
            if (node.right) queue.enqueue(node.right);
        }
        return data;
    }
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
//            8   12        50
//              9   30          60
//                                  72
//40,11,41,8,12,50,9,30,60,72             
console.log(tree.breadthFirstSearch());

//console.log(tree);