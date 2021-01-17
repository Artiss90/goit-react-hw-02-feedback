import { Component } from 'react';
import PropTypes from 'prop-types';
/* eslint react/prop-types: 1 */

export default class Notification extends Component {
  static propTypes = {
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    children: PropTypes.node,
  };
  render() {
    const { message, children } = this.props;
    return <>{message ? <p>{message}</p> : children}</>;
  }
}
