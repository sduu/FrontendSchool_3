// https://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/
// https://school.programmers.co.kr/learn/courses/30/lessons/42888

// 풀이를 위한 기본 문법
const test = ["A 10 !", "B 20 !", "A 22", "B 20 @", "A 21 @"];
test.forEach(s => {
    const [a, b, c] = s.split(" ");
    // console.log(a, b, c + "\n");
});

// 문제 풀이
const input = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];

function solution(record) {
    let answer = [];
    const 유저정보 = {};

    for (const i of record) {
        const [상태, 아이디, 닉네임] = i.split(" ");
        if (상태 === "Enter") {
            유저정보[아이디] = 닉네임;
            answer.push([아이디, "님이 들어왔습니다."]);
        } else if (상태 === "Leave") {
            answer.push([아이디, "님이 나갔습니다."]);
        } else if (상태 === "Change") {
            유저정보[아이디] = 닉네임;
        }
    }

    answer = answer.map(item => 유저정보[item[0]] + item[1]);

    return answer;
}

console.log(solution(input));
