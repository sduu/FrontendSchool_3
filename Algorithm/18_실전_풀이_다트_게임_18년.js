// https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/
// https://school.programmers.co.kr/learn/courses/30/lessons/17682
const testcase = [
    "1S2D*3T", // 37
    "1D2S#10S", // 9
    "1D2S0T", // 3
];

function solution(dartResult) {
    let answer = [];
    let result = 0;
    let temp = 0;

    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9) {
            if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
                temp = 10;
                // continue
                i++;
            } else {
                temp = parseInt(dartResult[i]);
            }
        } else if (dartResult[i] == "S") {
            answer.push(temp);
        } else if (dartResult[i] == "D") {
            answer.push(temp ** 2);
        } else if (dartResult[i] == "T") {
            answer.push(temp ** 3);
        } else if (dartResult[i] == "*") {
            answer[answer.length - 1] *= 2;
            answer[answer.length - 2] *= 2;
        } else if (dartResult[i] == "#") {
            answer[answer.length - 1] *= -1;
        }
    }
    for (const value of answer) {
        result += value;
    }
    return result;
}

console.log(solution(testcase[0]));
console.log(solution(testcase[1]));
console.log(solution(testcase[2]));

// 정규표현식을 사용하면 보다 편하게 문자열 parsing 문제를 풀 수 있습니다.
console.log(testcase[0].match(/([0-9]|10)([SDT])([\*\#]?)/g));
console.log(testcase[1].match(/([0-9]|10)([SDT])([\*\#]?)/g));
console.log(testcase[2].match(/([0-9]|10)([SDT])([\*\#]?)/g));

function solution2(dartResult) {
    const 승수 = {S: 1, D: 2, T: 3};
    const answer = dartResult.match(/([0-9]|10)([SDT])([\*\#]?)/g).map(item => {
        return parseInt(item[0]) ** 승수[item[1]];
    });

    return answer.reduce((a, c) => a + c);
}

console.log(solution2(testcase[0]));
console.log(solution2(testcase[1]));
console.log(solution2(testcase[2]));
