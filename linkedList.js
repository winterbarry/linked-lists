import LinkedNode from './linkedNode.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(data) {
    const newNode = new LinkedNode(data);
    newNode.nextNode = this.head;
    this.head = newNode;
    this.size++;
  }

  append(data) {
    const node = new LinkedNode(data);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }

    this.size++;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.size ? this.head.value : null;
  }

  getTail() {
    if (!this.head) return null;
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current.value;
  }

  at(index) {
    if (index < 0) return null;
    let current = this.head;
    let counter = 0;
    while (current) {
      if (counter === index) return current.value;
      current = current.nextNode;
      counter++;
    }
    return null;
  }

  removeLast() {
    if (!this.head) return null;
    if (!this.head.nextNode) {
      const removedValue = this.head.value;
      this.head = null;
      this.size--;
      return removedValue;
    }

    let current = this.head;
    let previous = null;

    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }

    previous.nextNode = null;
    this.size--;
    return current.value;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let result = '';
    let current = this.head;
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + 'null';
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.nextNode;
    }
  }
}
