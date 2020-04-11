import * as React from "react";

export class InputPhoneComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            emptyField: "true"
        };
    }

    handleSetPhone(event) {
        this.setState({emptyField: "false"});
        this.props.phoneData(event.target.value);
    }

    render() {
        return <div>
            <label>{this.props.name}{this.state.emptyField !== "false" && <label className="requiredText">*REQUIRED</label>}</label>
            <input type="tel" className="form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                   onChange={this.handleSetPhone.bind(this)}/>
        </div>;
    };
}