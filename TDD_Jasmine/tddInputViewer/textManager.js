class TextManager {
    constructor() {
        this.value = {data: "Hello Lions!"};
    }

    // 값을 반환
    getValue() {
        return this.value.data;
    }

    // 값을 변경
    setValue(newValue) {
        this.value = newValue;
    }
}
