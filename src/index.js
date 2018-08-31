import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      visible: false
    };
  }

  handleToggle() {
    const tooltipNode = ReactDOM.findDOMNode(this);

    this.setState(
      {
        visible: !this.state.visible,
        top: tooltipNode.offsetTop,
        left: tooltipNode.offsetLeft
      },
      console.log(this.state.visible)
    );
  }

  render() {
    const style = {
      opacity: +this.state.visible,
      top: (this.state.top || 0) + 20,
      left: (this.state.left || 0) + 5,
      zIndex: this.state.visible ? 1000 : -1000,
      position: "absolute",
      border: "1px solid #4a4a4a"
    };

    return (
      <div style={{ display: "inline" }}>
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onMouseOver={this.handleToggle}
          onMouseOut={this.handleToggle}
        >
          {this.props.children}
        </span>
        <div style={style}>{this.props.text}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    Never MouseOver <Tooltip text="you lose!">THIS TEXT</Tooltip>
  </div>,
  document.getElementById("root")
);
