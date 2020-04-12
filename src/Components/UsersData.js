import * as React from "react";
import {Link} from "react-router-dom";
import {UsersDataRender} from "./UsersDataRender";

export class UsersData extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            person: null
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

    // async componentDidMount(){
    //
    // debugger;
    //
    // await fetch('https://denis-emtsev-test-leverx.herokuapp.com/instances/', {mode: 'no-cors'})
    //     .then(function(response) {
    //         debugger;
    //         return response.json();
    //     } )
    //     .then(function(result) {
    //         debugger;
    //     } )
    //     .catch(e => console.log(e));
    // console.log(this.state.userData);
    //
    // }

    async componentDidMount() {
        const url = await fetch('https://denis-emtsev-test-leverx.herokuapp.com/instances/').then(
            function (response) {
                return response.json();
            }
        ).catch(
            function (e) {
                console.log(e)
            }
        );
        //console.log(url);
        //debugger;
        await this.setState({person: url, loading: false});
        //console.log(this.state.userData);
        // this.check();
    }

    // check() {
    //     debugger;
    //     console.log(this.state.userData);
    // }


    render() {
        return <div>
            <p>Here we can upload new users</p>
            <p>GET request training</p>
            <button><Link to="/userData">Back</Link></button>

            <hr/>

            <div>
                {this.state.loading || !this.state.person ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        <UsersDataRender data={this.state.person}>

                        </UsersDataRender>
                    </div>
                )}
            </div>
        </div>
    }
}