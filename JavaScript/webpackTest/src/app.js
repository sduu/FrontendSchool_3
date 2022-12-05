import {plus} from "./plus.js";
import "./style.css";
// import tiger from "./tiger.png";
// import android from "./android.png";

console.log(plus(3, 7));

document.addEventListener("DOMContentLoaded", () => {
    // document.body.innerHTML = `<img src="${tiger}"><img src="${android}">`;
});

// 현재 개발 환경이 어떤 모드인지
console.log(process.env.NODE_ENV);

let env;
if (process.env.NODE_ENV === "development") {
    env = dev;
} else {
    env = pro;
}
console.log(env);
console.log(dotenv_dev);
