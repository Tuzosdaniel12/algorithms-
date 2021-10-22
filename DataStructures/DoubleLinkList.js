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
        const removeNode = this.tail;
        if(!this.head) return undefined;
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
}

const DoubleList = new DoublylinkedList();

DoubleList.push(1)
DoubleList.push(2);
DoubleList.push(3);
DoubleList.push(4);

console.log(DoubleList.pop())
console.log(DoubleList)