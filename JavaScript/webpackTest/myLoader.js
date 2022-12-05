// item : myLoader 함수를 통해 처리할 파일
module.exports = function myLoader(item) {
    console.log("hello loader!");

    return item.replace("console.log(", "alert(");
};
