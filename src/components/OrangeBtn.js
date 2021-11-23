/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class OrangeBtn extends React.Component {
  render() {
    const { symbol } = this.props;
    return (
      <div className="orange-btn">
        <p>{symbol}</p>
      </div>
    );
  }
}

OrangeBtn.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default OrangeBtn;
