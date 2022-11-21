import React from "react";
import {useData} from "./data";

// 문제 : props를 사용하지 마시고 data.js 변수를 load해와서
// useContext를 사용하여 다음을 구현합니다.
// 1. Three에서는 7개 아이템에 이름만 출력합니다.
// 2. Four에서는 7개 아이템에 가격만 출력합니다.

function One() {
    return <Two />;
}

function Two() {
    return <Three />;
}

// 7개 아이템에 이름만 출력합니다.
function Three() {
    return (
        <>
            <Four />
            {useData().map(v => (
                <p key={v.id}>{v.productName}</p>
            ))}
        </>
    );
}

// 7개 아이템에 가격만 출력합니다.
function Four() {
    return (
        <div>
            가격
            {useData().map(v => (
                <p key={v.id}>{v.price}</p>
            ))}
        </div>
    );
}

export default function App() {
    return (
        <div>
            <One />
        </div>
    );
}
