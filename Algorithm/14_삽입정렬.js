const 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
const 정렬된배열 = [];
const 배열의길이 = 입력값.length;

function 삽입값이_들어갈_인덱스(정렬된배열, 삽입값) {
    for (const i in 정렬된배열) {
        if (삽입값 < 정렬된배열[i]) {
            return i;
        }
    }

    return 정렬된배열.length;
}

for (let i = 0; i < 배열의길이; i++) {
    const 삽입값 = 입력값.shift();
    const 인덱스 = 삽입값이_들어갈_인덱스(정렬된배열, 삽입값);
    정렬된배열.splice(인덱스, 0, 삽입값);
}

console.log(정렬된배열);
