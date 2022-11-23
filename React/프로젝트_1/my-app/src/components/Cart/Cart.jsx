import React from "react";
import styles from "./Cart.module.css";

export default function Cart() {
    // 같은 페이지 내 이동은 a를 사용하지 않습니다. react-router를 사용하셔서 link로 이동하게 해주셔야 합니다.
    return <button type="button" className={`link-btn ${styles["cart-link"]}`}></button>;
}
