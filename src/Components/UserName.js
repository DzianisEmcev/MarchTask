import * as React from "react";

export class InputUserNameComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            emptyField: "true"
        };
    }

    handleSetUserData(event) {
        this.setState({emptyField: "false"});
        this.props.userNameData(event.target.value);
    }

    render() {
        return <div>
            <label>{this.props.name}{this.state.emptyField !== "false" && <label className="requiredText">*REQUIRED</label>}</label>
            <input type="text" className="form-control" required={this.state.emptyField}
                   onChange={this.handleSetUserData.bind(this)}/>
        </div>;
    };
}