import React, { Component } from 'react';


class Screen extends Component {
  constructor(props){
    super(props)

  }
  render(){
  
    return(
     <div className="Screen">
         <p>{this.props.current}</p>
         <p>{this.props.result}</p>
     </div>
    )
  }
}

export default Screen;