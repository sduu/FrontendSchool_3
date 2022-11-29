// Double linked list의 기본 형태
const list = {
    head: null,
};

let list1 = {value: 12, next: null, pre: null};
let list2 = {value: 99, next: null, pre: null};
let list3 = {value: 37, next: null, pre: null};
let list4 = {value: 2, next: null, pre: null};

list1.next = list2;
list2.next = list3;
list3.next = list4;

list1.pre = list.head;
list2.pre = list1;
list3.pre = list2;
list4.pre = list3;

console.log(list4.pre.pre.value);

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.pre = null;
    }
}

class DoubleLinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
    }

    append(data) {
        let 새로운노드 = new Node(data);
        this.tail.next = 새로운노드;
        새로운노드.pre = this.tail;
        this.tail = 새로운노드;
    }
}

const l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
