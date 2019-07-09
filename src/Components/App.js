import React, { Component } from 'react';
import Screen               from './Screen'
import Button               from './Button'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      current:[],
      result: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(button){
    const current = [...this.state.current];
    current.push(button);
    this.setState({current});
  }

  render(){
   const buttons = ['AC','+-','%','+','7','8','9','x','4','5','6','-','1','2','3','+','0','.','=']
    return(
      <div className="Calculator">
        <h1>FreeCodeCamp Calculator</h1>
        <Screen current={this.state.current} result={this.state.result} />
        {buttons.map((item,i)=>{
          return (<Button key ={i} handleClick={this.handleClick} name={item} />)
        })}
      </div>  
    )

  }


}

export default App;
