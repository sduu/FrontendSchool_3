// https://school.programmers.co.kr/learn/courses/30/lessons/42889

// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

// 실패율 === 아직 클리어 못한 플레이어의 수 / 도달한 플레이어 수
// 전체 스테이지의 개수 N
// 스테이지의 번호가 담긴 배열 stages가 매개변수

// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다. (오름차순)

// N    stages                      result
// 5    [2, 1, 2, 6, 2, 4, 3, 3]    [3, 4, 2, 1, 5]
// 4    [4, 4, 4, 4, 4]                [4, 1, 2, 3]

// 스테이지에 도달한 사람의 수
// 1stage === 1
// 2stage === 3
// 3stage === 2
// 4stage === 1
// 5stage === 0

// 실패율
// 1stage === 1/8
// 2stage === 3/7 === 3/(8-1)
// 3stage === 2/4 === 2/(7-3)
// 4stage === 1/2 === 1/(4-2)
// 5stage === 0/1 === 0/(2-1)

// [2, 1, 2, 6, 2, 4, 3, 3].filter((user) => user === 3);
// (2) [3, 3]

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

function solution(N, stages) {
    const 실패율 = [];
    let 유저수 = stages.length;

    for (let i = 1; i <= N; i++) {
        const 도달한사람수 = stages.filter(user => user === i).length;
        // 실패율.push(도달한사람수);

        // 실패율.push(도달한사람수 / 유저수);
        // 유저수 -= 도달한사람수;

        const 확률 = 도달한사람수 / 유저수;
        실패율.push({스테이지: i, 확률});
        유저수 -= 도달한사람수;
    }

    실패율.sort((a, b) => {
        if (a.확률 < b.확률) return 1;
        if (a.확률 > b.확률) return -1;
        if (a.확률 === b.확률) return 0;
    });
    return 실패율.map(object => object.스테이지);
}

console.log(solution(N, stages));
