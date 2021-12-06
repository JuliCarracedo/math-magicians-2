/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Screen extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="screen">
        <p className="output">{content || 0}</p>
      </div>
    );
  }
}

Screen.propTypes = {
  content: PropTypes.string,
};

Screen.defaultProps = {
  content: '0',
};
export default Screen;
