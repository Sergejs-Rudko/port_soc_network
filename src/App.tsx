import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Content/Profile/Profile";
import {Dialogs} from "./Components/Content/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {state, StateType} from "./fakeRedux/state";


type PropsType = {
    state: StateType
}

function App(props: PropsType) {

    return (
        <div className="app_wrapper">
            <Header/>
            <div className={"content"}>
                <Routes>
                    <Route path={"profile"} element={<Profile postData={props.state.profilePage.postData}/>}/>
                    <Route path={"dialogs*"}
                           element={<Dialogs messagesData={props.state.dialogsPage.messagesData}
                                             dialogsData={props.state.dialogsPage.dialogsData}/>}/>
                </Routes>
            </div>
            <Navbar friends={state.sideBar.friends}/>
        </div>
    );
}

export default App;
