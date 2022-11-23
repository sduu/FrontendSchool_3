import React, {useState, useEffect} from "react";
import Card from "../../components/Card/Card";
import Cart from "../../components/Cart/Cart";
import styles from "./HomePage.module.css";

export default function HomePage() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("https://test.api.weniv.co.kr/mall");
                const result = await res.json();
                setItems(result);
                setIsLoaded(true);
            } catch (error) {
                setError(error);
                setIsLoaded(true);
            }
        };
        getData();
    }, []);

    if (error) {
        console.log(error);
        return <div>에러발생!</div>;
    } else if (!isLoaded) {
        return <div>로딩중!</div>;
    } else {
        return (
            <main className={styles["product"]}>
                <ul className={styles["product-list"]}>
                    {items.map(item => (
                        <Card key={item.id} {...item} />
                    ))}
                </ul>
                <Cart />
            </main>
        );
    }
}
