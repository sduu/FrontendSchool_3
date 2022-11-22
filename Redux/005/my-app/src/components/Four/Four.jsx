import React from "react";
import styles from "./Four.module.css";
import {useSelector} from "react-redux";

export default function Four() {
    console.log("Four");
    return <div className={styles.four}>Four</div>;
}
