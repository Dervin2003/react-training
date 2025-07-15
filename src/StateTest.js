import { Component } from "react";

class StateTest extends Component{
    constructor(){
        super();
        this.state={
            name:"Nice name"
        }
    }
    render(){
        return(
            <p>What can i say {this.state.name}</p>
        )
    }
}

export default StateTest;