class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

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
        if (this.first === this.last) {
			this.last = null;
		}

		this.first = removeNode.next;
        removeNode.next = null;
		
		this.size--;
		return removeNode.val;
    }
}


const stack = new Stack()

stack.push(1)
stack.push(2);
stack.push(3);
stack.push(1);

console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);

console.log(stack)