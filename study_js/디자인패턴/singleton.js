// 싱글턴 패턴 : 오직 하나의 인스턴스만을 생성해야할 때 필요한 패턴

// class Test {
//     constructor() {}
// }

// const test1 = new Test();
// const test2 = new Test();

// console.log(test1 === test2); // false

// 하나의 인스턴스만 생성하는 방법
class Singleton {
    constructor(data) {
        this.data = data;

        const instance = this.constructor.instance;

        if (instance) {
            return instance;
        }

        // 최초의 인스턴스를 가리킴으로써 새로운 객체를 생성하지 않도록 해줌
        this.constructor.instance = this;
    }
}

const test1 = new Singleton(10);
const test2 = new Singleton(50);

console.log(test1 === test2); // true

// 처음에 만들었던 인스턴스의 데이터를 유지
console.log(test1.data); // 10
console.log(test2.data); // 10
