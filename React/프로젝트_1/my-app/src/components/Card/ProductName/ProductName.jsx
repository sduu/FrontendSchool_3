import React from "react";
import styles from "./ProductName.module.css";

export default function ProductName({productName}) {
    return <div className={`${styles["product-name"]} sl-ellipsis`}>{productName}</div>;
}
