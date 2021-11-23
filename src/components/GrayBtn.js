/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class GrayBtn extends React.Component {
  render() {
    const { symbol } = this.props;
    return (
      <div className="gray-btn">
        <p>{symbol}</p>
      </div>
    );
  }
}

GrayBtn.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default GrayBtn;
