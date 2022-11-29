const 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
const 정렬된배열 = [];

while (입력값.toString()) {
    const 최솟값 = Math.min(...입력값);
    정렬된배열.push(최솟값);
    입력값.splice(입력값.indexOf(최솟값), 1);
}

console.log(정렬된배열);

// 메서드 최소화된 코드
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min_index] > arr[j]) {
                min_index = j;
            }
        }

        //  let temp = arr[min_index];
        // arr[min_index] = arr[i];
        // arr[i] = temp;
        // 구조 분해 할당 변수 교환 트릭 https://ko.javascript.info/destructuring-assignment
        [arr[min_index], arr[i]] = [arr[i], arr[min_index]];
    }
    return 정렬된배열;
}

console.log(selectionSort(입력값));
