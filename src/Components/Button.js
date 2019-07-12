import React, { Component } from 'react';


class Button extends Component {

    sendToParent = ()=>{
        this.props.handleClick(this.props.name)
    };
  render(){
    return(
      <input type="button"  onClick={this.sendToParent} className="btn" value={this.props.name} /> 
    )
  }
}

export default Button;
