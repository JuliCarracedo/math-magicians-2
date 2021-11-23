/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import GrayBtn from './GrayBtn';
import OrangeBtn from './OrangeBtn';
import BigGrayBtn from './BigGrayBtn';
import Screen from './Screen';

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <Screen content="0" />
        <div>
          <GrayBtn symbol="AC" />
          <GrayBtn symbol="+/-" />
          <GrayBtn symbol="%" />
          <OrangeBtn symbol="÷" />
        </div>
        <div>
          <GrayBtn symbol="7" />
          <GrayBtn symbol="8" />
          <GrayBtn symbol="9" />
          <OrangeBtn symbol="X" />
        </div>
        <div>
          <GrayBtn symbol="4" />
          <GrayBtn symbol="5" />
          <GrayBtn symbol="6" />
          <OrangeBtn symbol="-" />
        </div>
        <div>
          <GrayBtn symbol="1" />
          <GrayBtn symbol="2" />
          <GrayBtn symbol="3" />
          <OrangeBtn symbol="+" />
        </div>
        <div>
          <BigGrayBtn symbol="0" />
          <GrayBtn symbol="." />
          <OrangeBtn symbol="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
