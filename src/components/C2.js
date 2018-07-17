import React, {Component} from "react";
import {connect} from "react-redux";


class C2 extends Component{
    render(){
        return(
            <div>
            <div>Component 2</div>
            <input placeholder={this.props.userInput}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userInput: state.userInput
    }
}

export default connect(mapStateToProps) (C2);