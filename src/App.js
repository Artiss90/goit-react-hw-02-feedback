import { Component } from 'react';
import Feedback from './Components/Feedback';
import PropTypes from 'prop-types';
import style from './App.module.css';

class App extends Component {
  static defaultProps = { title: 'Please leave feedback' };
  static propTypes = { title: PropTypes.string };

  state = {
    title: this.props.title,
  };

  render() {
    const { title } = this.state;
    console.log(this.state.title);
    return (
      <div className={style.head}>
        <h1>{title}</h1>
        <Feedback good={2} neutral={2} bad={3} />
      </div>
    );
  }
}

export default App;
