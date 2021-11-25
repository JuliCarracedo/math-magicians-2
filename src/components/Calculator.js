/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import GrayBtn from './GrayBtn';
import OrangeBtn from './OrangeBtn';
import BigGrayBtn from './BigGrayBtn';
import Screen from './Screen';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({});

  const btnHandler = (e, keyPressed) => {
    e.stopPropagation();
    const current = state;
    setState(calculate(current, keyPressed));
  };
  const { total, next } = state;
  return (
    <div className="calc-body">
      <Screen content={next || total} />
      <div className="row">
        <GrayBtn symbol="AC" btnHandler={btnHandler} />
        <GrayBtn symbol="+/-" btnHandler={btnHandler} />
        <GrayBtn symbol="%" btnHandler={btnHandler} />
        <OrangeBtn symbol="÷" btnHandler={btnHandler} />
      </div>
      <div className="row">
        <GrayBtn symbol="7" btnHandler={btnHandler} />
        <GrayBtn symbol="8" btnHandler={btnHandler} />
        <GrayBtn symbol="9" btnHandler={btnHandler} />
        <OrangeBtn symbol="x" btnHandler={btnHandler} />
      </div>
      <div className="row">
        <GrayBtn symbol="4" btnHandler={btnHandler} />
        <GrayBtn symbol="5" btnHandler={btnHandler} />
        <GrayBtn symbol="6" btnHandler={btnHandler} />
        <OrangeBtn symbol="-" btnHandler={btnHandler} />
      </div>
      <div className="row">
        <GrayBtn symbol="1" btnHandler={btnHandler} />
        <GrayBtn symbol="2" btnHandler={btnHandler} />
        <GrayBtn symbol="3" btnHandler={btnHandler} />
        <OrangeBtn symbol="+" btnHandler={btnHandler} />
      </div>
      <div className="row">
        <BigGrayBtn symbol="0" btnHandler={btnHandler} />
        <GrayBtn symbol="." btnHandler={btnHandler} />
        <OrangeBtn symbol="=" btnHandler={btnHandler} />
      </div>
    </div>
  );
};

export default Calculator;
