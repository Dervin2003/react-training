import { Component } from "react";

class ClassComponent extends Component{
    render(){
        return(
            <div>
                <h1>Class Component created by {this.props.name}</h1>
                <p>My age is {this.props.age}</p>
            </div>

        )
    }
}

export default ClassComponent;