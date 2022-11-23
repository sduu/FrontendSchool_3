import React from "react";
import Card from "../../components/Card/Card";
import Cart from "../../components/Cart/Cart";
import FailLoadData from "../../components/Shared/FailLoadData/FailLoadData";
import {data} from "../../database/data";
import styles from "./HomePage.module.css";

export default function HomePage() {
    // console.log(data);
    // const data = null;
    return (
        <main className={styles["product"]}>
            {data ? (
                <>
                    <ul className={styles["product-list"]}>
                        {data.map(item => (
                            <Card key={item.id} {...item} />
                        ))}
                    </ul>
                    <Cart />
                </>
            ) : (
                <FailLoadData />
            )}
        </main>
    );
}
