class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(val) {
        this.length = 0;
        this.head = null;
        this.tail = null;
	}
	push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev = this.tail; 
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this
    }
    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
			this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift(){
        if (!this.head) return undefined;
        const removeNode = this.head;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = removeNode.next;
            this.head.prev = null;
            removeNode.next = null;
        }
        this.length--;
        return removeNode;
    }
    pop(){
        if(!this.head) return undefined;
        const removeNode = this.tail;
        if(this.length === 1){
            this.head = null;
			this.tail = null;
        }else{
            this.tail = removeNode.prev
            this.tail.next = null
            removeNode.prev = null
        }
        this.length--;
		return removeNode;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        const half = Math.floor(this.length / 2);
		const isStart = index <= half;
		let count = isStart ? 0 : this.length - 1;
		let current = isStart ? this.head : this.tail;

		while (count != index) {
			current = isStart ? current.next : current.prev;
			count = isStart ? count + 1 : count - 1;
		}
		return current;
    }
    set(index, val){
        const foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val
            return true
        }
        return false;
    }
    remove(index){
        if (index < 0 || index >= this.length) return false;
		if (index === 0) return !!this.shift();
		if (index === this.length - 1) return !!this.pop();
        
        const removeNode = this.get(index);
        
        removeNode.prev.next = removeNode.next;
        removeNode.next.prev = removeNode.prev;

        removeNode.prev = null;
        removeNode.next = null ;
        
        this.length--;
        return removeNode;
    }
    insert(index, val){
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.unshift(val);
		if (index === this.length - 1) return this.push(val);

        const insertNode = new Node(val);
        const prev  = this.get(index - 1);

        insertNode.prev = prev;
        insertNode.next = prev.next; 

        prev.next = insertNode;
        insertNode.next.prev = insertNode;

        this.length++;
		return true;
    
    }
    reverse() {
        let node = this.head;
		this.head = this.tail;
		this.tail = node;

		let prev = null;
		let next;

		for (let index = 0; index < this.length; index++) {
			next = node.next;
			node.next = prev;
            node.prev = next;
			prev = node;
			node = next;
		}
        
        return this
    }
}


const list = new DoublyLinkedList()

list.push(1);
list.push(2);
list.push(3);
list.push(4);

let current = list.head

while(current){
    console.log(current.val);
    current = current.next;
}

list.reverse();

current = list.head;
while (current) {
	console.log(current.val);
	current = current.next;
}
