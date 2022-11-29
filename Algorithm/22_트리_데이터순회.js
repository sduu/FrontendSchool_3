// 데이터 삽입
class Node {
    constructor(data) {
        this.data = data;
        // this.child = []; // 2진트리가 아닌 트리를 만들 때 사용할 수 있습니다.
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(data) {
        const init = new Node(data);
        this.root = init;
        this.length = 0;
    }

    // this.length 와 이름이 같아서 작동하지 않습니다
    // length() {
    //     return this.length;
    // }

    insert(data) {
        const 새로운노드 = new Node(data);
        let 순회용현재노드 = this.root;

        while (순회용현재노드) {
            if (data == 순회용현재노드.data) {
                // 들어온 값이 존재하는 값이면 트리에 값을 추가하지 않습니다.
                return;
            } else if (data < 순회용현재노드.data) {
                // 들어온 데이터가 작은 경우 왼쪽에 븥어야 합니다!
                // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다
                if (!순회용현재노드.left) {
                    순회용현재노드.left = 새로운노드;
                    this.length += 1;
                    return;
                }
                순회용현재노드 = 순회용현재노드.left;
            } else if (data > 순회용현재노드.data) {
                // 들어온 데이터가 작은 경우 오른쪽에 븥어야 합니다!
                // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다
                if (!순회용현재노드.right) {
                    순회용현재노드.right = 새로운노드;
                    this.length += 1;
                    return;
                }
                순회용현재노드 = 순회용현재노드.right;
            }
        }
    }

    // 깊스너큐
    DFS() {
        // 깊이우선탐색, DFS(Depth First Search)
        // Stack 이용!
        let 방문경로 = [];
        let 스택 = [this.root];

        while (스택.length !== 0) {
            let current = 스택.pop();
            if (current.right) {
                스택.push(current.right);
            }
            if (current.left) {
                스택.push(current.left);
            }
            방문경로.push(current.data);
        }

        return 방문경로;
    }

    BFS() {
        // 너비우선탐색, BFS(Breadth First Search)
        // Queue 이용!
        let 방문경로 = [];
        let 스택 = [this.root];

        while (스택.length !== 0) {
            let current = 스택.shift();
            if (current.right) {
                스택.push(current.right);
            }
            if (current.left) {
                스택.push(current.left);
            }
            방문경로.push(current.data);
        }

        return 방문경로;
    }
}

const t = new Tree(5);
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);
t.DFS();
t.BFS();
console.log(t.DFS());
console.log(t.BFS());
