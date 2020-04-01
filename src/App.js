import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {InputUserNameComponent} from "./Components/userName";
import {InputEmailComponent} from "./Components/email";
import {InputPhoneComponent} from "./Components/phone";
import {GenderComponent} from "./Components/gender";
import {RouterComponent} from "./Components/router";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            gender: "MALE",
            maidenName: ""
        };
    }

    checkDataForm() {
        return (this.state.firstName === "" || this.state.lastName === "" || this.state.email === "" || this.state.phoneNumber === "");
    }

    setUserFirstNameData(inputName) {
        this.setState({firstName: inputName});
    }

    setUserLastNameData(inputName) {
        this.setState({lastName: inputName});
    }

    setEmailData(inputEmail) {
        this.setState({email: inputEmail});
    }

    setPhoneData(inputPhone) {
        this.setState({phoneNumber: inputPhone});
    }

    setGenderData(inputGender) {
        this.setState({gender: inputGender});
    }

    setMaidenNameData(inputMaidenName) {
        this.setState({maidenName: inputMaidenName});
    }

    clickSubmit() {
        //debugger;
        // alert("First Name:" + this.state.firstName);
        // alert("Last Name:" + this.state.lastName);
        // alert("Email:" + this.state.email);
        // alert("Phone Number:" + this.state.phoneNumber);
        // alert("Gender:" + this.state.gender);
        // alert("Maiden Name" + this.state.maidenName);
        // return <div>
        //     {/*<h2>March2</h2>*/}
        //     <p>Hello world</p>
        // </div>;
    }

    // home() {
    //     return <div>
    //         {/*<h2>March2</h2>*/}
    //         <p>Hello world2222</p>
    //     </div>;
    // }

    render() {
        this.checkDataForm();
        return (
            <div className="App">
                <div>
                    <Router>
                        <div>
                            {/*<nav>*/}
                            {/*    <Link to="/march2">Task March2</Link>*/}
                            {/*</nav>*/}
                            <Switch>
                                <Route path="/march2">
                                    {/*<this.home/>*/}
                                    <RouterComponent>

                                    </RouterComponent>
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
                <div className="flex-container-main">
                    <InputUserNameComponent name="First Name" userNameData={this.setUserFirstNameData.bind(this)}>

                    </InputUserNameComponent>
                    <InputUserNameComponent name="Last Name" userNameData={this.setUserLastNameData.bind(this)}>

                    </InputUserNameComponent>
                    <InputEmailComponent name="Email" emailData={this.setEmailData.bind(this)}>

                    </InputEmailComponent>
                    <InputPhoneComponent name="Phone Number" phoneData={this.setPhoneData.bind(this)}>

                    </InputPhoneComponent>
                    <GenderComponent name="Gender" genderData={this.setGenderData.bind(this)}>

                    </GenderComponent>
                    {this.state.gender === "FEMALE" &&
                    <InputUserNameComponent name="Maiden Name" userNameData={this.setMaidenNameData.bind(this)}>

                    </InputUserNameComponent>}
                    {/*<button type="button" className="btn btn-secondary" onClick={this.checkDataForm.bind(this)}>Check form</button>*/}
                    {/*<Router>*/}
                    {/*    <Switch>*/}
                    {/*        <Route path="/">*/}
                    {/*            <Link to="/">*/}
                    {/*                <button type="button" className="btn btn-primary" disabled={this.checkDataForm()}*/}
                    {/*                        onClick={this.clickSubmit.bind(this)}>SUBMIT*/}
                    {/*                </button>*/}
                    {/*            </Link>*/}
                    {/*        </Route>*/}
                    {/*    </Switch>*/}
                    {/*</Router>*/}
                    {/*<Link to="/march2">Task March2</Link>*/}
                    <div>
                        <Router>
                            <div>
                                <button type="button" className="btn btn-primary" disabled={this.checkDataForm()}
                                        onClick={this.clickSubmit.bind(this)}><Link to="/march2">SUBMIT</Link>
                                </button>
                                {/*<nav>*/}
                                {/*    <Link to="/march2">Task March2</Link>*/}
                                {/*</nav>*/}
                                <Switch>
                                    <Route path="/march2">
                                        {/*<this.home/>*/}
                                        <RouterComponent>

                                        </RouterComponent>
                                    </Route>
                                </Switch>
                            </div>
                        </Router>
                    </div>
                    {/*<button type="button" className="btn btn-primary" disabled={this.checkDataForm()}*/}
                    {/*        onClick={this.clickSubmit.bind(this)}><Link to="/march2">SUBMIT</Link>*/}
                    {/*</button>*/}
                </div>
            </div>
        );
    }
}

export default App;
