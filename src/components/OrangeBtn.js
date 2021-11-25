/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

const OrangeBtn = (props) => {
  const { symbol, btnHandler } = props;
  return (
    <button type="button" className="orange-btn" onClick={(e) => btnHandler(e, symbol)}>
      <p>{symbol}</p>
    </button>
  );
};

OrangeBtn.propTypes = {
  symbol: PropTypes.string.isRequired,
  btnHandler: PropTypes.func.isRequired,
};

export default OrangeBtn;
