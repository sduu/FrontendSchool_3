import React from "react";
import styles from "./One.module.css";
import {useSelector} from "react-redux";

export default function One() {
    const borderRadius = useSelector(({borderRadius}) => borderRadius);
    // console.log(borderRadius);

    return (
        <div className={styles.one} style={{borderRadius}}>
            One
        </div>
    );
}
