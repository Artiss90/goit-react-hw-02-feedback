import { Component } from 'react';

export default class Feedback extends Component {
  static defaultProps = {
    good: 3,
    neutral: 4,
    bad: 5,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };
  onAddVote = e => {
    this.setState(prevState => {
      // console.log(e.target);
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });
  };

  onTotalVote = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  onRatioFeedback = sumFeedback => {
    const { good } = this.state;
    return Math.round((good / sumFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.onTotalVote();
    const ratio = this.onRatioFeedback(total);
    console.log(this.state);
    return (
      <div>
        <div>
          <button type="button" name="good" onClick={this.onAddVote}>
            good
          </button>
          <button type="button" name="neutral" onClick={this.onAddVote}>
            neutral
          </button>
          <button type="button" name="bad" onClick={this.onAddVote}>
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
