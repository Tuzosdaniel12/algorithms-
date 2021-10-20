//piece of data - value of

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        //create new node
        const newNode = new Node(val)
        //check if head is empty
        !this.head 
            ?
                (this.head = newNode,
                this.tail = this.head)
            :
                (this.tail.next = newNode,
                this.tail = newNode)

        this.length++;
        return this;
    }
    pop(){
        
    }
}

const list = new SinglyLinkedList();

list.push(1)
list.push(2);

console.log(list)
