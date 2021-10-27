//Root- top node in tree structure
//Child- A node directly connected to another node when moving from the root.
//Parent- The converse notion of a child node that
//Siblings A group of nodes with the dame parent
//Leaf - A node with no children that
//Edge- The connection between two nodes

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
        if(!this.root) return this.root = newNode;

        const insertNode = (node) =>{
            
            if(newNode.val > node.val){
                if(node.right){
                    return insertNode(node.right)
                }else{
                    node.right = newNode;
                    return node;
                }
            }else{
                if(node.left){
                    return insertNode(node.left);
                }else{
                    node.left = newNode;
                    return node;
                }
            }
        }
        
        insertNode(this.root);
        return this;
    }
}
const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(11)
tree.insert(12);
tree.insert(8)
tree.insert(9)

console.log(tree)