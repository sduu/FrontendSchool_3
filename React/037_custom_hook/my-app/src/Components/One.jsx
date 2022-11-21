import React from "react";
import useHojun from "../Hook/useHojun";

function One() {
    const [value, onChange] = useHojun("");
    return (
        <>
            <input type="text" onChange={onChange} />
            <div>{value}</div>
        </>
    );
}
export default One;
