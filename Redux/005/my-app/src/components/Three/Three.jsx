import React from "react";
import styles from "./Three.module.css";
import {useSelector} from "react-redux";

export default function Three() {
    const borderRadius = useSelector(({borderRadius}) => borderRadius);

    return (
        <div className={styles.three} style={{borderRadius}}>
            Three
        </div>
    );
}
