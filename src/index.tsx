import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./fakeRedux/store";

export type DialogsDataItemType = { id: number, name: string }
export type DialogsDataType = Array<DialogsDataItemType>
export type MessagesDataItemType = { id: number, message: string }
export type MessagesDataType = Array<MessagesDataItemType>
export type PostDataItemType = { id: number, message: string, likesCount: number }
export type PostDataType = PostDataItemType[]


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
