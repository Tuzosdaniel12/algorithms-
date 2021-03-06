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
    get(index){
        if(index < 0 || index >= this.length) return null
        const half = Math.floor(this.length/2)
        const isStart = index <= half
        let count = isStart ? 0 : this.length -1;
        let current = isStart ? this.head : this.tail;
        
        while(count != index){
            current = isStart ? current.next : current.prev;
            count = isStart ? count + 1 : count - 1;
        }
        return current;
    }
    set(index, val){
        const found = this.get(index);
        if(found != null){
            found.val = val;
            return true
        }
        return false
    }
    insert(index, val){
        if(index < 0 || index >= this.length) return false
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        const current = new Node(val);
        const prev = this.get(index - 1);
        const next = prev.next;

        prev.next = current;
        current.prev = prev;
        current.next = next;
        next.prev = current;
        this.length++;
        return true
    }
    remove(index){
        if (index < 0 || index >= this.length) return false;
		if (index === 0) return !!this.shift();
		if (index === this.length - 1) return !!this.pop();

        const removeNode = this.get(index);

        removeNode.prev.next = removeNode.next;
        removeNode.next.prev = removeNode.prev;

        removeNode.prev = null;
        removeNode.next = null;
        
        this.length--;
        return removeNode;
    }
}

const DoubleList = new DoublylinkedList();

DoubleList.push(1)
DoubleList.push(2);
DoubleList.push(3);
DoubleList.push(4);

//DoubleList.get(1);
DoubleList.get(2);

// console.log(DoubleList)