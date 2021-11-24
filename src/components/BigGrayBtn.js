/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class BigGrayBtn extends React.Component {
  render() {
    const { symbol, btnHandler } = this.props;
    return (
      <button type="button" className="big-gray-btn" onClick={(e) => btnHandler(e, symbol)}>
        <p>{symbol}</p>
      </button>
    );
  }
}

BigGrayBtn.propTypes = {
  symbol: PropTypes.string.isRequired,
  btnHandler: PropTypes.func.isRequired,
};

export default BigGrayBtn;
