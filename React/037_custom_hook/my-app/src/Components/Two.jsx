import React from "react";
import useHojun from "../Hook/useHojun";

function Two() {
    const [value, onChange] = useHojun("");
    return (
        <>
            <input type="text" onChange={onChange} />
            <div>{value}가 강해졌다 돌격해!</div>
        </>
    );
}
export default Two;
