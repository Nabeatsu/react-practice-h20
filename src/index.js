import React from "react";
import { render } from "react-dom";

import "./App.css";

class H20 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 15 };
  }

  H20State(temp) {
    if (temp <= 0) {
      return "ice";
    }

    if (100 <= temp) {
      return "steam";
    }

    return "water";
  }

  render() {
    const { temp } = this.state;
    return (
      <div className={this.H20State(temp)}>
        <h2>
          phase: {this.H20State(temp)},{temp}℃
        </h2>
        <button onClick={this.onPlusButtonClick}>+</button>
        <button onClick={this.onPlus10ButtonClick}>+10</button>
        <button onClick={this.onMinusButtonClick}>-</button>
        <button onClick={this.onMinus10ButtonClick}>-10</button>
      </div>
    );
  }

  onPlusButtonClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp + 1 });
  };

  onMinusButtonClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp - 1 });
  };
  onPlus10ButtonClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp + 10 });
  };

  onMinus10ButtonClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp - 10 });
  };
}

render(<H20 />, document.getElementById("root"));
