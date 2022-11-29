const tree = {
    root: {
        value: 5,
        left: {
            value: 3,
            left: {
                value: 1,
                left: null,
                right: null,
            },
            right: {
                value: 4,
                left: null,
                right: null,
            },
        },
        right: {
            value: 8,
            left: {
                value: 6,
                left: null,
                right: null,
            },
            right: {
                value: 9,
                left: null,
                right: null,
            },
        },
    },
};

console.log(tree.root.left.left.value); //1

class Node {
    constructor(data) {
        this.data = data;
        // this.child = []; // 2진트리가 아닌 트리를 만들 때 사용할 수 있습니다.
        this.left = null;
        this.right = null;
    }
}

const root = new Node(55);
const node1 = new Node(53);
const node2 = new Node(99);
const node3 = new Node(37);
const node4 = new Node(54);

root.left = node1;
root.right = node2;

node1.left = node3;
node1.right = node4;

console.log(root.left.data); // 53
