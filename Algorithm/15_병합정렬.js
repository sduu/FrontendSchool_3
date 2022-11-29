const 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열) {
    // 분할
    const 입력배열의길이 = 입력배열.length;
    let 결과값 = [];
    if (입력배열의길이 <= 1) {
        return 입력배열;
    }
    const 중간값 = ~~(입력배열의길이 / 2);
    const 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
    const 그룹둘 = 병합정렬(입력배열.slice(중간값));

    // return `그룹하나: ${그룹하나}\n그룹둘: ${그룹둘}\n`;

    // 정복
    while (그룹하나.length != 0 && 그룹둘.length != 0) {
        if (그룹하나[0] < 그룹둘[0]) {
            결과값.push(그룹하나.shift());
        } else {
            결과값.push(그룹둘.shift());
        }
    }
    // while (그룹하나.length != 0) {
    //     결과값.push(그룹하나.shift());
    // }
    // while (그룹둘.length != 0) {
    //     결과값.push(그룹둘.shift());
    // }
    결과값 = [...결과값, ...그룹하나];
    결과값 = [...결과값, ...그룹둘];

    return 결과값;
}

console.log(병합정렬(입력값));
