import { Component } from 'react';

export default class FeedbackOptions extends Component {
  render() {
    const { callback } = this.props;
    const arrKeys = Object.keys(this.props.options);
    console.log({ callback });
    return (
      <div>
        {arrKeys.map(key => (
          <button key={key} type="button" name={key} onClick={callback}>
            {key}
          </button>
        ))}
      </div>
    );
  }
}
