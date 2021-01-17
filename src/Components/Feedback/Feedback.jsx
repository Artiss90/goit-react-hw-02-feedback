import { Component } from 'react';

export default class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };
  onAddVote = e => {
    this.setState(prevState => {
      console.log(e.target);
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
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
          <p>{good}</p>
          <p>{neutral}</p>
          <p>{bad}</p>
        </ul>
      </div>
    );
  }
}
