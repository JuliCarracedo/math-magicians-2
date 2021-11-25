/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

const GrayBtn = (props) => {
  const { symbol, btnHandler } = props;
  return (
    <button type="button" className="gray-btn" onClick={(e) => btnHandler(e, symbol)}>
      <p>{symbol}</p>
    </button>
  );
};

GrayBtn.propTypes = {
  symbol: PropTypes.string.isRequired,
  btnHandler: PropTypes.func.isRequired,
};

export default GrayBtn;
