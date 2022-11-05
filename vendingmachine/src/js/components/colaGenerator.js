class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector(".list-item");
    }

    // 메서드들을 실행시키는 함수
    async setup() {
        await this.loadData(json => {
            this.colaFactory(json);
        });
    }

    // 구버전
    _loadData(callback) {
        // XML 파일을 서버와 비동기적으로 주고받기위해 등장한게 Ajax인거고 그렇다고 XML만 오갈수 있는게 아니라 JSON같은 다른 파일 포멧도 가능한거고

        // XMLHttpRequest 생성자가 Ajax 통신을 할 때 필요한 인스턴스를 제공해주고 그 인스턴스를 활용해서 통신하는게 Ajax

        // fetch는 그 후 등장

        // asynchronous javascript and xml
        // javascript object notation
        const requestObj = new XMLHttpRequest(); // 서버와 통신하기 위해 객체를 생성합니다.

        // oepn을 하면서 초기화 (준비, 설정)
        requestObj.open("GET", "src/js/item.json"); // 요청 시작

        // readyState 가 변화하면 트리거
        // requestObj.addEventListener("readystatechange", () => {});
        requestObj.onreadystatechange = () => {
            // readyState : 처리 상태를 의미. 통신을 하면 변함
            // 4 : 처리가 끝났음
            // status : 처리 과정 중에 어떤 일이 발생 했다는 의미
            // 200 :처리 과정 중 별 일이 없었음
            if (requestObj.readyState == 4 && requestObj.status === 200) {
                // requestObj.responseText : JSON 데이터를 받아옴
                callback(JSON.parse(requestObj.responseText));
            }
        };

        // oepn은 통신을 준비하는 것, send를 해야 요청을 보내는 것
        // requestObj 은 그 요청 사이에 처리 하는 것
        requestObj.send(null);
    }

    async loadData(callback) {
        const response = await fetch("src/js/item.json");

        // https://developer.mozilla.org/ko/docs/Web/HTTP/Status
        // response.ok : http 상태코드가 200 ~ 299 인 경우 true 반환
        // 상태 코드일 뿐 에러는 아니므로 try catch는 옳지 않을 수 있다.
        if (response.ok) {
            callback(await response.json()); // 응답 본문을 읽으면서 객체형태로 파싱합니다.
        } else {
            alert("통신 에러!" + response.status);
        }
    }

    // <li>
    //     <button type="button" class="btn-item" data-item="">
    //         <img src="src/images/Original_Cola.png" alt="" class="img-item" />
    //         <strong class="tit-item">Original_Cola</strong>
    //         <span class="txt-price">1000원</span>
    //     </button>
    // </li>

    // 콜라 리스트 생성
    colaFactory(data) {
        const docFrag = document.createDocumentFragment();
        data.forEach(el => {
            const item = document.createElement("li");
            const itemTemplate = `
            <button type="button" class="btn-item" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img src="src/images/${el.img}" alt="" class="img-item" />
                <strong class="tit-item">${el.name}</strong>
                <span class="txt-price">${el.cost}원</span>
            </button>
            `;
            item.innerHTML = itemTemplate;
            docFrag.appendChild(item);
        });
        this.itemList.appendChild(docFrag);
    }
}

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export
export default ColaGenerator;
