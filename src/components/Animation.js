/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

export default class Animation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: `key-${Date.now()}`,
    };
  }

  enter() {
    if (this.refs[this.state.key]) {
      const { name } = this.props;
      const node = ReactDOM.findDOMNode(this.refs[this.state.key]);

      node.classList.remove(`${name}-leave`);
      node.classList.remove(`${name}-leave-active`);

      node.classList.add(`${name}-enter`);

      setTimeout((_) => {
        const height = Array.prototype.reduce.call(
          node.children,
          (acc, x) => acc + x.clientHeight,
          0,
        );

        node.style.height = `${height}px`;
        node.classList.add(`${name}-enter-active`);
      }, 0);
    }
  }

  leave() {
    if (this.refs[this.state.key]) {
      const { name, leaveTime } = this.props;
      const node = ReactDOM.findDOMNode(this.refs[this.state.key]);

      node.classList.remove(`${name}-enter`);
      node.classList.remove(`${name}-enter-active`);

      node.classList.add(`${name}-leave`);

      setTimeout((_) => {
        this.children = null;
        node.style.height = '0px';
        node.classList.add(`${name}-leave-active`);

        setTimeout((_) => this.forceUpdate(), leaveTime);
      }, 0);
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.children) {
      this.children = nextProps.children;
      this.enter();
    } else if (this.children) this.leave();
  }

  render() {
    const { key } = this.state;
    return <div ref={key}>{this.children}</div>;
  }
}
