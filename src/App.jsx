import { Component } from 'react';
import Sections from './Components/Sections';
import Feedback from './Components/Feedback';

class App extends Component {
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

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Sections title="Please leave feedback">
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          callback={this.onAddVote}
        />
      </Sections>
    );
  }
}

export default App;
