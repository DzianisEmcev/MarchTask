import * as React from "react";

export class InputEmailComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            emptyField: "true"
        };
    }

    handleSetEmail(event) {
        this.setState({emptyField: "false"});
        this.props.emailData(event.target.value);
    }

    render() {
        return <div>
            <label>{this.props.name}{this.state.emptyField !== "false" && <label className="requiredText">*REQUIRED</label>}</label>
            <input type="email" className="form-control"
                   onChange={this.handleSetEmail.bind(this)}/>
        </div>;
    };
}