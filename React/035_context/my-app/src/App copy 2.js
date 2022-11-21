import React, {createContext} from "react";

const Price = createContext({price: 1000});
const Name = createContext();

const One = () => {
    return (
        <div>
            <Two />
        </div>
    );
};

const Two = () => {
    return (
        <div>
            <Three />
        </div>
    );
};

const Three = () => {
    console.log(Name);
    return <Price.Consumer>{({price}) => <div>가격 : {price}</div>}</Price.Consumer>;
};

export default function App() {
    return (
        <Name.Provider value="형광펜">
            <div>
                <One />
            </div>
        </Name.Provider>
    );
}
