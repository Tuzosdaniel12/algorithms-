class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
//BIG O of Queue - FIFO
//insertion - O(1)
//removal - O(1)
//searching - O(n)
//Access - O(n)
class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	enqueue(val) {
		const newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
		return this.size;
	}
	dequeue() {
		if (!this.first) return null;
		const removeNode = this.first;

		if (this.first === this.last) this.last = null;

		this.first = removeNode.next;

		this.size--;
		return removeNode.val;
	}
}

module.exports = new Queue();