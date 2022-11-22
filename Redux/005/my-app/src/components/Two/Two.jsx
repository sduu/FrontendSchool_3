import React from "react";
import styles from "./Two.module.css";
import {useSelector} from "react-redux";

export default function Two() {
    const borderRadius = useSelector(({borderRadius}) => borderRadius);

    return (
        <div className={styles.two} style={{borderRadius}}>
            Two
        </div>
    );
}
