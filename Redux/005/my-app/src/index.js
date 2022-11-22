import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import {createStore} from "redux";
import changeRect from "./reducer/reducer";
import {Provider} from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

const store = createStore(changeRect);
// console.log("store getState : ", store.getState());

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
