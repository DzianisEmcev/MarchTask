import * as React from "react";

export class UsersDataRender extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            test: this.props.data
        };
    }

    render() {
        return this.state.test.map((item, index) => {
            return <p key={index}>{index+1}. {item.first_name} {item.last_name}</p>
        })
    }
}