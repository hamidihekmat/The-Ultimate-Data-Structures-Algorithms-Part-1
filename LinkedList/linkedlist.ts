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
  size: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  addFirst(node: ListNode) {
    if (this.first === null) {
      this.first = node;
      this.last = node;
      this.size += 1;
    } else {
      node.next = this.first;
      this.first = node;
      this.size += 1;
    }
  }

  addLast(node: ListNode) {
    if (this.first === null) {
      this.first = node;
      this.last = node;
      this.size++;
    } else {
      this.last.next = node;
      this.last = node;
      this.size += 1;
    }
  }

  deleteFirst() {
    this.first = this.first.next;
    this.size--;
  }

  deleteLast() {
    let node = this.first;
    while (node.next !== this.last) {
      node = node.next;
    }
    node.next = null;
    this.last = node;
    this.size--;
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

  reverse() {
    // [10 -> 20 -> 30 -> null] => [null <- 10 <- 20 <- 30]
    // prev = null, current = 10
    // set current.next (pointer to 20) to point to prev (null) [10 -> null]
    // prev to equal to current , prev = current
    // go to the next loop, current = next (next = current.next) next = 20 (so we need a temporary variable to hold current.next (20))
    let prev = null;
    let current = this.first;
    while (current != null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    const tempFirst = this.first;
    this.first = this.last;
    this.last = tempFirst;
  }

  display() {
    let curr = this.first;
    while (curr != null) {
      console.log(curr);
      curr = curr.next;
    }
  }

  indexOf(value: number) {
    let index = 0;
    let node = this.first;
    while (node !== null) {
      if (node.value === value) {
        return index;
      }
      node = node.next;
      index++;
    }
    return null;
  }

  getKthNode(k: number) {
    if (k > this.size) {
      return;
    }
    if (k === 1) {
      return this.last;
    }
    if (k === this.size) {
      return this.first;
    }
    let pre = this.first;
    let current = this.applyDepth(pre, k);
    while (current != null) {
      pre = pre.next;
      current = current.next;
    }
    console.log(pre);
  }

  applyDepth(node: ListNode, depth: number) {
    if (depth === 0) {
      return node;
    }
    node = node.next;
    return this.applyDepth(node, depth - 1);
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

const node5 = new ListNode();
node4.value = 5;

const node6 = new ListNode();
node4.value = 6;

const linkedlist = new LinkedList();

linkedlist.addFirst(node);
linkedlist.addLast(node2);
linkedlist.addLast(node3);
linkedlist.addLast(node4);
// prev = 1, current = 3
// 1 -> 2 -> 3 -> 4 -> 5 -> null

// linkedlist.display();
console.log(linkedlist.getKthNode(4));
