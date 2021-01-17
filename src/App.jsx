import { Component } from 'react';
import Sections from './Components/Sections';
// import Feedback from './Components/Feedback';
import FeedbackOptions from './Components/Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from './Components/Feedback/Statistics/Statistics';

class App extends Component {
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
      // console.log(e.target);
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });
  };

  onTotalVote = () => {
    const { good, neutral, bad } = this.state;
    return Object.values({ good, neutral, bad }).reduce(
      (acc, value) => acc + value,
      0,
    );
  };

  onRatioFeedback = sumFeedback => {
    const { good } = this.state;
    return Math.round((good / sumFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.onTotalVote();
    const ratio = this.onRatioFeedback(total);
    return (
      <>
        <Sections title="Please leave feedback">
          <FeedbackOptions
            options={{ good, neutral, bad }}
            callback={this.onAddVote}
          />
        </Sections>
        <Sections title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            ratio={ratio}
          />
        </Sections>
      </>
    );
  }
}

export default App;
