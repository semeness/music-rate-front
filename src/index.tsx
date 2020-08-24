import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppRoot from "app/components/Root/index";
import './style/index.scss';
import { createAppStore } from "app/store/createAppStore";

const root = document.getElementById("root");
const store = createAppStore();

ReactDOM.render(<Provider store={store}><AppRoot /></Provider>, root);
