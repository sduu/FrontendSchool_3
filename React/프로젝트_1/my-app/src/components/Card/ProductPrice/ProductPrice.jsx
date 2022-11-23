import React from "react";
import styles from "./ProductPrice.module.css";

export default function ProductPrice({price}) {
    return (
        <>
            <strong className={`${styles["price"]} ${styles["m-price"]}`}>
                {price}
                <span>원</span>
            </strong>
        </>
    );
}
