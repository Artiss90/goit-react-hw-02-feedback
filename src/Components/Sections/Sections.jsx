/* eslint react/prop-types: 1 */

import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Sections.module.css';

export default class Sections extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };
  render() {
    const { title, children } = this.props;
    return (
      <section className={style.head}>
        {title && <h2>{title}</h2>}
        {children}
      </section>
    );
  }
}
