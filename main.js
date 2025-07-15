import LinkedList from './linkedList.js';

const list = new LinkedList();

list.prepend(50);
list.append(100);

list.printList(); 
console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(1));
console.log(list.contains(100));
console.log(list.find(50));
console.log(list.toString());
