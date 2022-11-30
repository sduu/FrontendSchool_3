import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";

function App() {
    const [buttonColor, setColor] = useState("red");
    const newColor = buttonColor === "red" ? "blue" : "red";

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>

                <div>
                    <button style={{backgroundColor: buttonColor}} onClick={() => setColor(newColor)}>
                        change to {newColor}!
                    </button>
                </div>
            </header>
        </div>
    );
}

export default App;
