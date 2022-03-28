import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {state} from "./fakeRedux/state";

export type DialogsDataItemType = { id: number, name: string }
export type DialogsDataType = Array<DialogsDataItemType>
export type MessagesDataItemType = { id: number, message: string }
export type MessagesDataType = Array<MessagesDataItemType>
export type PostDataItemType = { id: number, message: string, likesCount: number }
export type PostDataType = PostDataItemType[]




ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
