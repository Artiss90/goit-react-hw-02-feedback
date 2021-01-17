import { Component } from 'react';
import style from './Statistics.module.css';

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, ratio } = this.props;
    console.log(this.props);
    return (
      <ul className={ratio >= 50 ? style.positive : style.negative}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {ratio}%</p>
      </ul>
    );
  }
}
