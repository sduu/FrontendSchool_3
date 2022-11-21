import React, {useState, useRef, useMemo} from "react";

export default function App() {
    const inputName = useRef(null);
    const inputId = useRef(null);
    const [userInfo, setUserInfo] = useState([]);
    const [name, setName] = useState("");
    const [id, setId] = useState("");

    const getNum = li => {
        console.log("렌더링");
        return li.length;
    };
    const n = useMemo(() => getNum(userInfo), [userInfo]);

    const handleInputName = () => {
        setName(inputName.current.value);
        console.log("렌더링-1");
    };
    const handleInputId = () => {
        setId(inputId.current.value);
        console.log("렌더링-2");
    };
    const handleSubmit = e => {
        e.preventDefault();
        const newInfo = [...userInfo, {name, id}];
        inputName.current.value = "";
        inputId.current.value = "";
        inputName.current.focus();
        setUserInfo(newInfo);
        console.log("렌더링-3");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="이름을 입력하세요" onChange={handleInputName} ref={inputName} />
                <input type="text" placeholder="아이디를 입력하세요" onChange={handleInputId} ref={inputId} />
                <button type="submit">버튼</button>
            </form>
            <ul>
                {userInfo.map(({name, id}, index) => (
                    <li key={index}>
                        <h3>이름 : {name}</h3>
                        <strong>아이디 : {id}</strong>
                    </li>
                ))}
            </ul>
            {/* <span>{getNum(userInfo)}</span> */}
            <span>{n}</span>
        </>
    );
}
