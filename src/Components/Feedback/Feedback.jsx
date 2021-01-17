import { Component } from 'react';

export default class Feedback extends Component {
  onTotalVote = () => {
    const { good, neutral, bad } = this.props;
    return Object.values({ good, neutral, bad }).reduce(
      (acc, value) => acc + value,
      0,
    );
  };

  onRatioFeedback = sumFeedback => {
    const { good } = this.props;
    return Math.round((good / sumFeedback) * 100);
  };

  render() {
    const { good, neutral, bad, callback } = this.props;
    const total = this.onTotalVote();
    console.log(callback);
    const ratio = this.onRatioFeedback(total);
    console.log(this.props);
    return (
      <div>
        <div>
          <button type="button" name="good" onClick={callback}>
            good
          </button>
          <button type="button" name="neutral" onClick={callback}>
            neutral
          </button>
          <button type="button" name="bad" onClick={callback}>
            bad
          </button>
        </div>

        <ul>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {ratio}%</p>
        </ul>
      </div>
    );
  }
}
