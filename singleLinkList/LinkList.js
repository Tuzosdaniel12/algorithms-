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
            ?(
                this.head = newNode,
                this.tail = this.head
            ):(
                this.tail.next = newNode,
                this.tail = newNode
            )

        this.length++;
        return this;
    }
    pop(){
        if(!this.head ) return undefined;
        let current = this.head;
        let newTail = this.head;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length <= 0){
            this.head = null;
			this.tail = null;
        }
        return current;
    }
    shift(){
        if (!this.head) return undefined;
        let head = this.head
        this.head = head.next
        this.length--;
        if (this.length <= 0) {
			this.head = null;
			this.tail = null;
		}
        return head;
    }
    unshift(val){
        const newHead = new Node(val);
        !this.head 
            ?(
                this.head = newHead,
                this.tail = this.head   
            ):(   
                newHead.next = this.head,
                this.head = newHead 
            )
        
        this.length++;
        return this;
    }
}

const list = new SinglyLinkedList();

list.push(1)
list.push(2);
list.push(3);
list.push(4);

// console.log(list.pop())
// console.log(list.pop());
// console.log(list.pop());


// console.log(list.shift());
list.unshift(0)

console.log(list)
