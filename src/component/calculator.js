import React, { useState } from 'react';
/* eslint-disable */
import calculate from './logic/calculate';

function handleClick(event, state, setter) {
  const buttonName = event.target.innerText;
  const result = calculate(state, buttonName);
  setter(result);
}

const Calculator = () => {
  const [state, setter] = useState({ total: 0, operation: null, next: null });
  const { total, next, operation } = state;

  return (
    <div className="container">
      <div className="mainDiv">
        <button className="inputiv" type="button">{total}{operation}{next}</button>
        <button className="btn grey" onClick={(event) => handleClick(event, state, setter)} type="button">AC</button>
        <button className="btn grey" onClick={(event) => handleClick(event, state, setter)} type="button">+/-</button>
        <button className="btn grey" onClick={(event) => handleClick(event, state, setter)} type="button">%</button>
        <button className="btn orange" onClick={(event) => handleClick(event, state, setter)} type="button">÷</button>
        <button className="btn grey" onClick={(event) => handleClick(event, state, setter)} type="button">7</button>
        <button className="btn grey" onClick={(event) => handleClick(event, state, setter)} type="button">8</button>
        <button className="btn grey" onClick={(event) => handleClick(event, state, setter)} type="button">9</button>
        <button className="btn orange" onClick={(event) => handleClick(event, state, setter)} type="button">x</button>
        <button className="btn grey" onClick={(event) => handleClick(event, state, setter)} type="button">4</button>
        <button className="btn grey" onClick={(event) => handleClick(event, state, setter)} type="button">5</button>
        <button className="btn grey" onClick={(event) => handleClick(event, state, setter)} type="button">6</button>
        <button className="btn orange" onClick={(event) => handleClick(event, state, setter)} type="button">-</button>
        <button className="btn grey" onClick={(event) => handleClick(event, state, setter)} type="button">1</button>
        <button className="btn grey" onClick={(event) => handleClick(event, state, setter)} type="button">2</button>
        <button className="btn grey" onClick={(event) => handleClick(event, state, setter)} type="button">3</button>
        <button className="btn orange" onClick={(event) => handleClick(event, state, setter)} type="button">+</button>
        <button className="btn grey zero" onClick={(event) => handleClick(event, state, setter)} type="button">0</button>
        <button className="btn grey" onClick={(event) => handleClick(event, state, setter)} type="button">.</button>
        <button className="btn orange" onClick={(event) => handleClick(event, state, setter)} type="button">=</button>
      </div>
    </div>
  );
};

export default Calculator;