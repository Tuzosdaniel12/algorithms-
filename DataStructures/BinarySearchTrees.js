//Root- top node in tree structure
//Child- A node directly connected to another node when moving from the root.
//Parent- The converse notion of a child node that
//Siblings A group of nodes with the dame parent
//Leaf - A node with no children that
//Edge- The connection between two nodes
//Insertion - O(log n)
//Searching - O(log n)
class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }
    insert(val){
        const newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
            return this
        }
		//=======INSERTION BY LOOPING==========/
        let current = this.root;
        while(true){
            if(val === current.val) return undefined;
            if(val < current.val){
                if(!current.left){
                    current.left = newNode
                    return this;
                }
                current = current.left;
            }else{
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
    find(val){
        if (!this.root) return false;
        let current = this.root;
        let found = false;
		while (!found && current) {
			if (val < current.val) {
				current = current.left;
			} else if (val < current.val) {
				current = current.right;
			} else{
                found = true;
            }
		}
        if(!found) return false
        return current;
    }
}
const tree = new BinarySearchTree()

tree.insert(40)
tree.insert(11)
tree.insert(12);
tree.insert(8)
tree.insert(9)
tree.insert(41);
tree.insert(50);
tree.insert(30);
tree.insert(60);
tree.insert(72);

console.log(tree.find(30))

console.log(tree)