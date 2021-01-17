import { Component } from 'react';
import Sections from './Components/Sections';
import Feedback from './Components/Feedback';

class App extends Component {
  render() {
    return (
      <Sections title="Please leave feedback">
        <Feedback />
      </Sections>
    );
  }
}

export default App;
