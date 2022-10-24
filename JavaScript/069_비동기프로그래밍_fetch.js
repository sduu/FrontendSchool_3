// function 의 await : 비동기 불가능
// async function 의 await : 비동기 가능
// 예외적으로 await이 밖에 감싸여진 함수 없이 사용될 수 있는 것을 top-level-await이라하고, 이건 작동 (생긴지 얼마 안되서 언급하는 책이 거의 없을 것)

let userData = fetch("https://jsonplaceholder.typicode.com/users/3%27").then(response => response.json());
console.log(userData);

userData = await fetch("https://jsonplaceholder.typicode.com/users/3%27").then(response => response.json());
console.log(userData);

async function printImg() {
    const response = await fetch(`https://picsum.photos/200`);
    const blobImg = await response.blob();

    //blob을 담을 img 태그를 만든다.
    const img = document.createElement("img");
    //html body에 위에서 만든 img 태그를 삽입한다.
    document.body.append(img);
    //img 태그의 주소를 설정한다.
    img.src = URL.createObjectURL(blobImg);
}
printImg();

// get 요청
async function get() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
    });
    const data = await response.json();
    console.log(data);
}
get();

// post 요청 - 생성
// JSON.stringify() 메서드는 배열이나 객체를 JSON 포맷의 문자열로 변환해준다.
async function post() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            //문자열로 변환하지 않으면 에러발생
            title: "오늘의 간식",
            body: "고소미",
            userId: 3,
        }),
    });
    const data = await response.json();
    console.log(data);
}
post();

// delete - 삭제
async function delete1() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/3", {method: "DELETE"});
    const data = await response.json();
    console.log(data);
}
delete1();

// put - 수정
async function put() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            title: "오늘의 간식",
            body: "마카다미아 쿠키", //업데이트할 내용
            userId: 1, //1번 user
        }),
    });
    const data = await response.json();
    console.log(data);
}
put();
