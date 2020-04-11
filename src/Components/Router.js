import * as React from "react";

export class RouterComponent extends React.Component {

    onclick () {
        window.location.assign('http://localhost:3000/second/');
    }


    render() {
        // debugger;
        // console.log("here");
        // return <div>
        //     {/*<h2>March2</h2>*/}
        //     {/*<p>Hello world11111</p>*/}
        // </div>;
        return (<a onClick={(e) => this.onclick(e)}><i className="fas fa-chart-bar">

        </i></a>);
    };
}