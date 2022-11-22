import One from "./components/One/One";
import Three from "./components/Three/Three";
import Two from "./components/Two/Two";
import Four from "./components/Four/Four";
import "./App.css";
import {useDispatch} from "react-redux";
import {changeRadius} from "./reducer/reducer";

function App() {
    const dispatch = useDispatch();
    const onChangeRadius = radius => {
        dispatch(changeRadius(radius));
    };

    return (
        <main>
            <button onClick={() => onChangeRadius("0")}>사각형</button>
            <button onClick={() => onChangeRadius("10%")}>둥근 사각형</button>
            <button onClick={() => onChangeRadius("50%")}>원</button>

            <div className="wrap">
                <One />
                <Two />
                <Three />
                <Four />
            </div>
        </main>
    );
}
export default App;
