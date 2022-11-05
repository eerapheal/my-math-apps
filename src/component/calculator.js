import React, { Component } from 'react';
import calculate from './logic/calculate';
/* eslint-disable */

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {total: 0, next: null, operation: null}
  }

  handleClick = (event) => {
    const buttonName = event.target.innerText;
    const result = calculate(this.state, buttonName);
    this.setState(result)
  }
  render() {
    const {total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="mainDiv">
          <button className="inputiv" type="submit">{total}{operation}{next}</button>
          <button className="btn grey" onClick={this.handleClick} type="submit">AC</button>
          <button className="btn grey" onClick={this.handleClick} type="submit">+/-</button>
          <button className="btn grey" onClick={this.handleClick} type="submit">%</button>
          <button className="btn orange" onClick={this.handleClick} type="submit">÷</button>
          <button className="btn grey" onClick={this.handleClick} type="submit">7</button>
          <button className="btn grey" onClick={this.handleClick} type="submit">8</button>
          <button className="btn grey" onClick={this.handleClick} type="submit">9</button>
          <button className="btn orange" onClick={this.handleClick} type="submit">x</button>
          <button className="btn grey" onClick={this.handleClick} type="submit">4</button>
          <button className="btn grey" onClick={this.handleClick} type="submit">5</button>
          <button className="btn grey" onClick={this.handleClick} type="submit">6</button>
          <button className="btn orange" onClick={this.handleClick} type="submit">-</button>
          <button className="btn grey" onClick={this.handleClick} type="submit">1</button>
          <button className="btn grey" onClick={this.handleClick} type="submit">2</button>
          <button className="btn grey" onClick={this.handleClick} type="submit">3</button>
          <button className="btn orange" onClick={this.handleClick} type="submit">+</button>
          <button className="btn grey zero" onClick={this.handleClick} type="submit">0</button>
          <button className="btn grey" onClick={this.handleClick} type="submit">.</button>
          <button className="btn orange" onClick={this.handleClick} type="submit">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
