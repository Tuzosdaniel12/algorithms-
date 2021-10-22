class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

class DoublylinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        const newTail = new Node(val);
        if(!this.head){
            this.head = newTail;
            this.tail = newTail;
        }else{
            this.tail.next = newTail;
            newTail.prev = this.tail;
            this.tail = newTail;
        }
        this.length++;
        return this
    }
    pop(){
        if(!this.head) return undefined;
        const removeNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = removeNode.prev;
            this.tail.next = null;
            removeNode.prev = null;
        }
        this.length--;
        return removeNode;
    }
    shift(){
        if (!this.head) return undefined;
        const removeHead = this.head;
        if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = removeHead.next;
			this.head.prev = null;
			removeHead.next = null;
		}
		this.length--;
		return removeHead;
    }
    unshift(val){
        const newNode = new Node(val);
        if (!this.head) {
			this.head = newTail;
			this.tail = newTail;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
        this.length++;
        return this;
    }
}

const DoubleList = new DoublylinkedList();

DoubleList.push(1)
DoubleList.push(2);
DoubleList.push(3);
DoubleList.push(4);

console.log(DoubleList)