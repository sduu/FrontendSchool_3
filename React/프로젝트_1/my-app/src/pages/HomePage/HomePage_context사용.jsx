import React, {useState, useEffect, useContext} from "react";
import Card from "../../components/Card/Card";
import Cart from "../../components/Cart/Cart";
import styles from "./HomePage.module.css";
import FailLoadData from "../../components/Shared/FailLoadData/FailLoadData";
import {callAPIResponse} from "../../database/callAPI";

export default function HomePage() {
    const [loadData, setLoadData] = useState(null);

    // useEffect(() => {
    //     console.log("로딩중");
    // }, []);

    // useEffect(() => {
    //     if (loadData === null) {
    //         return;
    //     } else {
    //         console.log("로딩 완료!!");
    //         console.log(loadData);
    //     }
    // }, [loadData]);

    useContext(callAPIResponse).then(data => {
        console.log("세팅");
        setLoadData(data);
    });

    return (
        <main className={styles["product"]}>
            {loadData ? (
                <>
                    <ul className={styles["product-list"]}>
                        {loadData.map(item => (
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
