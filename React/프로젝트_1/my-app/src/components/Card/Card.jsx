import React, {useRef} from "react";
import styles from "./Card.module.css";
import ProductImage from "./ProductImage/ProductImage";
import ProductPrice from "./ProductPrice/ProductPrice";
import ProductName from "./ProductName/ProductName";

export default function Card({productName, price, thumbnailImg}) {
    const likeBtn = useRef();
    const handleLikeBtn = e => {
        // console.log();
        likeBtn.current.classList.toggle("on");
    };

    return (
        <li className={styles["product-item"]}>
            <div className={styles["product-img"]}>
                <ProductImage {...{thumbnailImg, productName}} />
            </div>

            <ProductName {...{productName}} />
            <button ref={likeBtn} onClick={handleLikeBtn} className={`${styles["like-btn"]} on`}></button>

            <ProductPrice {...{price}} />
        </li>
    );
}
