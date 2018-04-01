import React from "react";

import "../styles/accordion.css";
import Animation from "./Animation";

export default class Accordion extends React.Component {
  state = { show: false };

  toggle = () => this.setState({ show: !this.state.show });

  render() {
    const [header, body] = this.props.children;

    return (
      <div key={this.props.id}>
        {React.cloneElement(header, { click: this.toggle })}
        <Animation name="accordion" leaveTime={500}>
          {this.state.show && body}
        </Animation>
      </div>
    );
  }
}
