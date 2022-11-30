class ViewManager {
    constructor(textManager, options) {
        if (textManager.constructor !== TextManager) {
            // textManager가 TextManager의 인스턴스가 아니라면
            // throw Error : 사용자 정의 에러. 에러 메시지를 반환하고 프로그램을 종료합니다.
            throw Error("textManager 객체를 전달해야합니다!");
        }

        if (!options.viewerEl || !options.btnEl || !options.inpTxt) {
            // 하나라도 빠져있다면
            throw Error("필요한 요소중에 빈 값이 존재합니다.");
        }

        this.inpTxt = options.inpTxt;
        this.viewerEl = options.viewerEl;
        this.textManager = textManager;

        options.btnEl.addEventListener("click", () => {
            this.changeValue();
        });
    }

    changeValue() {
        this.textManager.setValue({data: this.inpTxt.value});
        this.updateView();
    }

    updateView() {
        this.viewerEl.textContent = this.textManager.getValue();
    }
}
