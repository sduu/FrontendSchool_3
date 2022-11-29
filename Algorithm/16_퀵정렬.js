const 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 퀵정렬(입력배열) {
    const 입력배열의길이 = 입력배열.length;
    const 결과값 = [];
    if (입력배열의길이 <= 1) {
        return 입력배열;
    }

    const 피벗값 = 입력배열.shift();
    const 그룹하나 = [];
    const 그룹둘 = [];

    for (let i in 입력배열) {
        if (입력배열[i] < 피벗값) {
            그룹하나.push(입력배열[i]);
        } else {
            그룹둘.push(입력배열[i]);
        }
    }

    return 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(그룹둘));
}

console.log(퀵정렬(입력값));
