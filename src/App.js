import React from 'react';
import {Route, Switch} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import HomePage from "./components/pages/HomePage";
import Navbar from "./components/Navbar";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import Form from "./components/pages/Form";
import './App.scss'

const App = () => (
    <div className="App">
        <Navbar/>
        <div className="auth-wrapper">
            <div className="auth-inner">
                <Switch>
                    <Route exact path="/" exact component={HomePage} />
                    <Route exact path="/login" exact component={LoginPage}/>
                    <Route exact path="/register" exact component={Form}/>
                </Switch>
            </div>
        </div>
    </div>
);
export default App;