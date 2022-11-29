// https://school.programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
    var answer = [];
    const zip = (a, b) => a.map((v, i) => [v, b[i]]);
    for ([i, j] of zip(arr1, arr2)) {
        answer.push((i | j).toString(2).padStart(n, "0").replace(/1/g, "#").replace(/0/g, " "));
    }
    return answer;
}

console.log(solution(n, arr1, arr2));

// 이 문제에서 필요한 기초 상식
// 1. 비트 단위 OR 연산자
console.log(28 | 21); // 29

// 2. toString()
const x = 9;
// 9.toString() // (X)
console.log(x.toString()); // '9'
console.log(x.toString(2)); // '1001' (2진수)
console.log(x.toString(8)); // '11' (8진수)
console.log(x.toString(16)); // '9' (16진수)

// 3. replace
// 코딩테스트 노드 버전에 따라 replaceAll 사용 가능 여부가 다름
x.toString(2).replace("1", "#"); // '#000'
x.toString(2).replace(/1/g, "#"); // '#00#'
x.toString(2).replace(/1/g, "#").replace(/0/g, " "); // '#  #'

// 4. padStart()
console.log("1001".padStart(10, "0")); // 0000001001
