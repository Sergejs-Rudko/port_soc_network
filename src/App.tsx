import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Content/Profile/Profile";
import {Dialogs} from "./Components/Content/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Users} from "./Components/Users/Users";

function App() {
    return (
        <div className="app_wrapper">
            <Header/>
            <div className={"content"}>
                <Routes>
                    <Route path={"profile"} element={<Profile/>}/>
                    <Route path={"dialogs/*"} element={<Dialogs/>}/>
                    <Route path={"users"} element={<Users/>}/>
                </Routes>
            </div>
            <Navbar/>
        </div>
    );
}

export default App;
