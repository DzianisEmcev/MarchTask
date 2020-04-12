import * as React from "react";

export class GenderComponent extends React.Component {

    chooseGender(event) {
        this.props.genderData(event.target.value);
    }

    render() {
        return <div>
            <label>{this.props.name}</label>
            <select className="form-control" onChange={this.chooseGender.bind(this)}>
                <option>MALE</option>
                <option>FEMALE</option>
            </select>
        </div>;
    };
}