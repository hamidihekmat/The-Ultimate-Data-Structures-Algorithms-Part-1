class ListNode {
  value: number;
  next: ListNode | null;
  constructor() {
    this.value = null;
    this.next = null;
  }
}
class LinkedList {
  first: ListNode;
  last: ListNode;
  constructor() {
    this.first = null;
    this.last = null;
  }

  addFirst(node: ListNode) {
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
  }

  addLast(node: ListNode) {
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
  }

  deleteFirst() {
    this.first = this.first.next;
  }

  deleteLast() {
    let node = this.first;
    while (node.next !== this.last) {
      console.log(node);
      node = node.next;
    }
    node.next = null;
    this.last = node;
  }

  contains(value: number) {
    let node = this.first;
    while (node != null) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  indexOf(value: number) {
    let found = false;
    let index = 0;
    let node = this.first;
    while (node !== null) {
      console.log(`Node value ${node.value}`, value);

      if (node.value === value) {
        found = true;
        break;
      }
      node = node.next;
      index++;
    }
    if (found) {
      return index;
    }
    return null;
  }
}

const node = new ListNode();
node.value = 1;

const node2 = new ListNode();
node2.value = 2;

const node3 = new ListNode();
node3.value = 3;

const node4 = new ListNode();
node4.value = 4;

const linkedlist = new LinkedList();

linkedlist.addFirst(node);
linkedlist.addLast(node2);
linkedlist.addLast(node3);
linkedlist.addLast(node4);

console.log(linkedlist.indexOf(3));
