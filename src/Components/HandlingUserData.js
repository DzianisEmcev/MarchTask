import * as React from "react";
import {Link} from "react-router-dom";

export class HandlingUserData extends React.Component {

    render () {
        return <div>
            <p> Handling User Data</p>
            <button><Link to = "/">Back</Link></button>
            <button><Link to="/users">Upload new users</Link></button>
        </div>
    }
}