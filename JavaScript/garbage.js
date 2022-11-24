let me = {age: 30};
let you = me; // 참조 카운트 : 2

me = null; // 참조 카운트 : 1
you = null; // 참조 카운트 : 0

let x = {
    y: {
        z: 1,
    },
};

// x가 참조하는 객체를 object1, y가 참조하고 있는 객체를 object2 라고 함

let a = x; // object1 의 참조 카운트 : 2 ( x, a )
x = 1; // object1 의 참조 카운트 : 1 ( a )

let b = a.y; // object2 의 참조 카운트 : 2 ( a.y, b )
a = 2; // object1 의 참조 카운트 : 0 ( )
// 이렇게 불필요하게 남아있는 object1 객체가 존재하는 경우 메모리 누수(memory leak)가 발생했다고 표현함

function outer() {
    let privateVal = ["test"];

    function getPrivate() {
        return privateVal;
    }

    return getPrivate;
}

const getPrivateDate = outer();
let secretVal = getPrivateDate();
console.log(secretVal);

// 가비지 컬렉터는 참조 연결이 끊긴것이 중요하고 null과 undefined를 구분하지 않는다.
secretVal = null;
secretVal = undefined;

const aespa = ["카리나", "윈터", "지젤", "닝닝"];
const aespa2 = aespa.map(item => item + "💖");

// aespa.forEach((v, i, arr) => (arr[i] = v + "💖"));
aespa.forEach(v => v + "💖");

console.log(aespa);
console.log(aespa2);
