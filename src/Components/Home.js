import * as React from "react";
import {InputUserNameComponent} from "./UserName";
import {InputEmailComponent} from "./Email";
import {InputPhoneComponent} from "./Phone";
import {GenderComponent} from "./Gender";
import {HandlingUserData} from "./HandlingUserData";
import {Link} from "react-router-dom";

export class Home extends React.Component {

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

    clickSubmit() {
        // debugger;
        // alert("First Name:" + this.state.firstName);
        // alert("Last Name:" + this.state.lastName);
        // alert("Email:" + this.state.email);
        // alert("Phone Number:" + this.state.phoneNumber);
        // alert("Gender:" + this.state.gender);
        // alert("Maiden Name" + this.state.maidenName);
        return (<HandlingUserData>

        </HandlingUserData>);
    }

    checkDataForm() {
        debugger;
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

    render() {
        return <div>
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
                {/*<button type="button" className="btn btn-primary" disabled={this.checkDataForm()}*/}
                {/*        onClick={this.clickSubmit.bind(this)}>SUBMIT*/}
                {/*</button>*/}
                <Link to="/userData" userDate={this.state} className="btn btn-primary"
                      disabled={this.checkDataForm()}
                      onClick={this.clickSubmit.bind(this)}>Submit</Link>
            </div>
        </div>
    };
}