import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Home} from "./Components/Home";
import {BrowserRouter, Route} from "react-router-dom";
import {HandlingUserData} from "./Components/HandlingUserData";
import {UsersData} from "./Components/UsersData";


class Navigation extends React.Component {

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/userData" component={HandlingUserData}/>
                        <Route exact path="/users" component={UsersData}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Navigation;
