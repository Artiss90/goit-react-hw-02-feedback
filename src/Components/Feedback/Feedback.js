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

  render() {
    const { good, neutral, bad } = this.state;
    console.log(this.state);
    return (
      <div>
        <p>{good}</p>
        <p>{neutral}</p>
        <p>{bad}</p>
      </div>
    );
  }
}
