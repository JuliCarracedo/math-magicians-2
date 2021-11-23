/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Screen extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="screen">
        <p>{content}</p>
      </div>
    );
  }
}

Screen.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Screen;
