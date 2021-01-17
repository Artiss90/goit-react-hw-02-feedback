import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';
/* eslint react/prop-types: 1 */

export default class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.objectOf(PropTypes.number),
    callback: PropTypes.func,
  };
  render() {
    const { callback } = this.props;
    const arrKeys = Object.keys(this.props.options);
    return (
      <div className={style.container}>
        {arrKeys.map(key => (
          <button
            key={key}
            type="button"
            name={key}
            onClick={callback}
            className={style.button}
          >
            {key}
          </button>
        ))}
      </div>
    );
  }
}
