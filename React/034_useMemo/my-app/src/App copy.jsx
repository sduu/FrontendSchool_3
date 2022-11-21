import {useMemo, useState} from "react";

function 부하() {
    let s = 0;
    for (let i = 0; i < 1000000000; i++) {
        s += i;
    }
    return s;
}

function App() {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    // const result = 부하();
    // const result = useMemo(() => 부하(), []);
    const result = useMemo(() => 부하(), [countTwo]);

    const handleCountUp = () => {
        setCount(count + 1);
        console.log(count);
    };
    const handleCountUpTwo = () => {
        setCountTwo(countTwo + 1);
        console.log(countTwo);
    };

    console.log("랜더링!");

    return (
        <div>
            <h1>계산 결과 : {result}</h1>
            <div>count : {count}</div>
            <button onClick={handleCountUp}>One UP!</button>
            <div>countTwo : {countTwo}</div>
            <button onClick={handleCountUpTwo}>Two UP!</button>
        </div>
    );
}
export default App;
