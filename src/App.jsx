/* eslint react/prop-types: 1 */

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
    return (
      <div className={style.head}>
        {title && <h1>{title}</h1>}
        <Feedback />
      </div>
    );
  }
}

export default App;
