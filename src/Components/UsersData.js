import * as React from "react";
import {Link} from "react-router-dom";

export class UsersData extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            userData: ""
        }
    }

    // componentDidMount() {
    //     // const url = "https://denis-emtsev-test-leverx.herokuapp.com/instances/";
    //     // fetch(url, {mode: 'no-cors'}).then((response) => {
    //     //     debugger;
    //     //     return response.text();
    //     // })
    //     //     .then((data) => {
    //     //         this.setState({userData: data});
    //     //     });
    //     // console.log(this.state.userData);
    //     fetch('https://denis-emtsev-test-leverx.herokuapp.com/instances', {
    //         method: 'GET',
    //         mode: 'no-cors'})
    //         .then(
    //             function(response) {
    //                 debugger;
    //                 if (response.status !== 200) {
    //                     console.log('Looks like there was a problem. Status Code: ' +
    //                         response.status);
    //                     return;
    //                 }
    //
    //                 response.json().then(function(data) {
    //                     console.log(data);
    //                 });
    //             }
    //         )
    //         .catch(function(err) {
    //             console.log('Fetch Error ', err);
    //         });
    // }

    async componentDidMount(){

        debugger;

        await fetch('https://denis-emtsev-test-leverx.herokuapp.com/instances/', {mode: 'no-cors'})
            .then(function(response) {
                debugger;
                return response.json();
            } )
            .then(function(result) {
                debugger;
            } )
            .catch(e => console.log(e));
        console.log(this.state.userData);
    }


    render() {
        return <div>
            <p>Here we can upload new users</p>
            <p>GET request training</p>
            <button><Link to="/userData">Back</Link></button>

            <hr/>

            {this.state.loading ? <div>Loading data...</div> : <div>person...</div>}
        </div>
    }
}