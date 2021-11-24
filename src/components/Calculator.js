/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import GrayBtn from './GrayBtn';
import OrangeBtn from './OrangeBtn';
import BigGrayBtn from './BigGrayBtn';
import Screen from './Screen';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { };
    this.btnHandler = this.btnHandler.bind(this);
  }

  btnHandler(e, keyPressed) {
    e.stopPropagation();
    const current = this.state;
    this.setState(calculate(current, keyPressed));
    console.log(this.state);
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="calc-body">
        <Screen content={next || total} />
        <div className="row">
          <GrayBtn symbol="AC" btnHandler={this.btnHandler} />
          <GrayBtn symbol="+/-" btnHandler={this.btnHandler} />
          <GrayBtn symbol="%" btnHandler={this.btnHandler} />
          <OrangeBtn symbol="÷" btnHandler={this.btnHandler} />
        </div>
        <div className="row">
          <GrayBtn symbol="7" btnHandler={this.btnHandler} />
          <GrayBtn symbol="8" btnHandler={this.btnHandler} />
          <GrayBtn symbol="9" btnHandler={this.btnHandler} />
          <OrangeBtn symbol="x" btnHandler={this.btnHandler} />
        </div>
        <div className="row">
          <GrayBtn symbol="4" btnHandler={this.btnHandler} />
          <GrayBtn symbol="5" btnHandler={this.btnHandler} />
          <GrayBtn symbol="6" btnHandler={this.btnHandler} />
          <OrangeBtn symbol="-" btnHandler={this.btnHandler} />
        </div>
        <div className="row">
          <GrayBtn symbol="1" btnHandler={this.btnHandler} />
          <GrayBtn symbol="2" btnHandler={this.btnHandler} />
          <GrayBtn symbol="3" btnHandler={this.btnHandler} />
          <OrangeBtn symbol="+" btnHandler={this.btnHandler} />
        </div>
        <div className="row">
          <BigGrayBtn symbol="0" btnHandler={this.btnHandler} />
          <GrayBtn symbol="." btnHandler={this.btnHandler} />
          <OrangeBtn symbol="=" btnHandler={this.btnHandler} />
        </div>
      </div>
    );
  }
}

export default Calculator;
