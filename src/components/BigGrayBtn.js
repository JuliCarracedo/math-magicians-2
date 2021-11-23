/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class BigGrayBtn extends React.Component {
  render() {
    const { symbol } = this.props;
    return (
      <div className="big-gray-btn">
        <p>{symbol}</p>
      </div>
    );
  }
}

BigGrayBtn.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default BigGrayBtn;
