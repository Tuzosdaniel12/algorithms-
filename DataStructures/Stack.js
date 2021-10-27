class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

//BIG O of Stack - LIFO
//insertion - O(1)
//removal - O(1)
//searching - O(n)
//Access - O(n)

class Stack {
	constructor() {
		this.first = null;
        this.last = null;
        this.size = 0;
	}
    push(val){
        const newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            const temp =  this.first;
            this.first = newNode
            newNode.next = temp;
            
        }
        this.size++;
        return this.size;
    }
    pop(){
        if (!this.first) return null;
		const removeNode = this.first;
        
        if (this.first === this.last) this.last = null;

		this.first = removeNode.next;
		
		this.size--;
		return removeNode.val;
    }
}

module.exports = new Stack();