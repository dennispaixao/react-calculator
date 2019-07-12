import React, { Component } from 'react';
import Screen from './Screen'
import Button from './Button'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num1: [],
      num2: [],
      current: [],
      operator: '',
      result: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  doMath = (num1, operator, num2) => {
    switch (operator) {
      case 'x': operator = '*'
        break;
      case '÷': operator = '/'
        
    }
    const result = eval(num1 + operator + num2);
    this.setState({ result, num1: [result], num2: [] })

  }

  handleClick(button) {
    switch (true) {

      case /[+x\-÷]/.test(button):
        if (!this.state.num2.length == 0) {
          this.doMath(this.state.num1, this.state.operator, this.state.num2)
        }else{
           this.setState({ operator: button, current: button })
        }
       
        break
      case /[\d]/.test(button):
        if (this.state.operator.length == '') {
          let num1 = [...this.state.num1]
          num1.push(button);
          num1 = [num1.join('')]
          console.log(num1)
          this.setState({ num1, current: num1 })
        } else {
          let num2 = [...this.state.num2]
          num2.push(button);
          num2 = [num2.join('')]
          console.log(num2)
          this.setState({ num2, current: num2 })
        }
        break
      case /[=]/.test(button):
        if (!this.state.num2.length == 0) {
          this.doMath(this.state.num1, this.state.operator, this.state.num2)
        }
        break
      case /[AC]/.test(button):
        this.setState({
          num1: [],
          num2: [],
          current: [],
          operator: '',
          result: 0
        })
        break
      

    }
  }

  render() {
    const buttons = ['AC', ' ', ' ', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0',' ', '=']
    return (
      <div className="Calculator">
        <h1>FreeCodeCamp Calculator</h1>
        <Screen current={this.state.current} result={this.state.result} />

        <div className="btn-container">
          {buttons.map((item, i) => {
            return (<Button key={i} handleClick={this.handleClick} name={item} />)
          })}
        </div>

      </div>
    )

  }


}

export default App;
