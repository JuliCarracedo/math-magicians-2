/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class GrayBtn extends React.Component {
  render() {
    const { symbol, btnHandler } = this.props;
    return (
      <button type="button" className="gray-btn" onClick={(e) => btnHandler(e, symbol)}>
        <p>{symbol}</p>
      </button>
    );
  }
}

GrayBtn.propTypes = {
  symbol: PropTypes.string.isRequired,
  btnHandler: PropTypes.func.isRequired,
};

export default GrayBtn;
