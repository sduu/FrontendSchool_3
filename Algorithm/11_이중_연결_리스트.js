// 정호님 특강
//링크드리스트 등장 배경 :
// 배열은 요소를 추가를 하게 되면 뒤에 있는 걸 쫘르륵 밀어야해서 비효율적

// 더블링크드리스트 등장 배경 :
// 링크드리스트는 다음 노드에 대한 정보만 가지고 있고 이전 노드에 대한 정보가 없음
// 그래서 추가하는 것은 시간복잡도가 O(1)인데 삭제하는 것은 O(n)이다
// 추가할 때 : 원하는 위치의 노드의 next 에 새 노드를 추가
// 삭제할 때 : head에서부터 next로 계속 타고 넘어가서 삭제 (다음 요소만 삭제 가능)
// 원하는 위치의 노드만 가지고는 삭제 불가능 : 노드를 하나 지우면 이전 노드와 그 다음 노드를 이어주는(next) 작업이 필요한데 이전 노드에 대한 정보가 없으니 그게 불가능함 (?)

class _Node {
    constructor(data, prev, next) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

//이중연결리스트 양방향으로 이동가능하며 header와 trailer도 노드로 'data'가 없는 형태로 생성
class DList {
    constructor() {
        this.header = new _Node("header", null, null);
        this.trailer = new _Node("trailer", null, null);
        this.header.next = this.trailer;
        this.trailer.prev = this.header;

        this.length = 0;
    }

    insertBetween(data, prede, succ) {
        let newNode = new _Node(data, prede, succ);
        succ.prev = newNode;
        prede.next = newNode;
        this.length++;
    }

    insertAfter(data, p) {
        if (p == this.trailer) {
            return false;
        } else {
            this.insertBetween(data, p, p.next);
        }
    }

    insertBefore(data, p) {
        if (p == this.header) {
            return false;
        } else {
            this.insertBetween(data, p.prev, p);
        }
    }

    delete(node) {
        if (node == this.header || node == this.trailer) {
            return false;
        }

        let prede = node.prev;
        let succ = node.next;
        prede.next = succ;
        succ.prev = prede;
        this.length--;
        let data = node.data;
        node.prev = null;
        node.next = null;
        node.data = null;
        return data;
    }
}
