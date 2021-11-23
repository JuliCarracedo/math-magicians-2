/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import GrayBtn from './GrayBtn';
import OrangeBtn from './OrangeBtn';
import BigGrayBtn from './BigGrayBtn';
import Screen from './Screen';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calc-body">
        <Screen content="0" />
        <div className="row">
          <GrayBtn symbol="AC" />
          <GrayBtn symbol="+/-" />
          <GrayBtn symbol="%" />
          <OrangeBtn symbol="÷" />
        </div>
        <div className="row">
          <GrayBtn symbol="7" />
          <GrayBtn symbol="8" />
          <GrayBtn symbol="9" />
          <OrangeBtn symbol="X" />
        </div>
        <div className="row">
          <GrayBtn symbol="4" />
          <GrayBtn symbol="5" />
          <GrayBtn symbol="6" />
          <OrangeBtn symbol="-" />
        </div>
        <div className="row">
          <GrayBtn symbol="1" />
          <GrayBtn symbol="2" />
          <GrayBtn symbol="3" />
          <OrangeBtn symbol="+" />
        </div>
        <div className="row">
          <BigGrayBtn symbol="0" />
          <GrayBtn symbol="." />
          <OrangeBtn symbol="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
