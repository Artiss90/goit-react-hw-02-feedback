import { Component } from 'react';

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, ratio } = this.props;
    console.log(this.props);
    return (
      <ul>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {ratio}%</p>
      </ul>
    );
  }
}
