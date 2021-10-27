//piece of data - value of
//BIG O of SinglyLinkedList
    //insertion - O(1)
    //removal - it depends O(1) or O(n)
    //searching - O(n)
    //Access - O(n)
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		//create new node
		const newNode = new Node(val);
		//check if head is empty
		!this.head
			? ((this.head = newNode), (this.tail = this.head))
			: ((this.tail.next = newNode), (this.tail = newNode));

		this.length++;
		return this;
	}
	//takes last item of node list
	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = this.head;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length <= 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	shift() {
		if (!this.head) return undefined;
		let head = this.head;
		this.head = head.next;
		this.length--;
		if (this.length <= 0) {
			this.head = null;
			this.tail = null;
		}
		return head;
	}
	unshift(val) {
		const newHead = new Node(val);
		!this.head
			? ((this.head = newHead), (this.tail = this.head))
			: ((newHead.next = this.head), (this.head = newHead));

		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null;
		let counter = 0;
		let current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}
	set(index, val) {
		let updateNode = this.get(index);
		if (updateNode) {
			updateNode.val = val;
			return true;
		}
		return false;
	}
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(val);
		if (index === 0) return !!this.unshift(val);

		const newNode = new Node(val);
		const prev = this.get(index - 1);

		newNode.next = prev.next;
		prev.next = newNode;

		this.length++;
		return true;
	}
    remove(index){
        if (index < 0 || index >= this.length) return false;
		if (index === this.length - 1) return !!this.pop();
		if (index === 0) return !!this.shift();

		const prev = this.get(index - 1);
        const remove = prev.next
		prev.next = remove.next
		this.length--;

		return remove;
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next;

    for (let index = 0; index < this.length; index++){
        next = node.next;
        node.next = prev; 
        prev = node;
        node = next;  
    }

        
    return this
    }
}

const list = new SinglyLinkedList();

