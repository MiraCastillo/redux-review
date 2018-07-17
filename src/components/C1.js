import React, {Component} from "react";
import {connect} from "react-redux";
import {addInput} from "./../ducks/reducer";


class C1 extends Component{
    constructor(){
        super();
        this.state={
            userInput: ""
        }
    }

    handleInput(val){
        this.setState({userInput:val})
    }

    render(){
        return(
            <div>
            <div>Component 1</div>
            <input onChange={(e) => this.handleInput(e.target.value)}/>
            <button onClick={() => this.props.addInput(this.state.userInput)}>Click me!</button>
            </div>
        )
    }
}


export default connect(null, {addInput}) (C1);