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
    return (
      <div className={this.H20State(this.state.temp)}>
        <h2>
          phase: {this.H20State(this.state.temp)},{this.state.temp}℃
        </h2>
        <button onClick={this.onPlusButtonClick}>+</button>
        <button onClick={this.onPlus10ButtonClick}>+10</button>
        <button onClick={this.onMinusButtonClick}>-</button>
        <button onClick={this.onMinus10ButtonClick}>-10</button>
      </div>
    );
  }

  onPlusButtonClick = () => {
    this.setState({ temp: this.state.temp + 1 });
  };

  onMinusButtonClick = () => {
    this.setState({ temp: this.state.temp - 1 });
  };
  onPlus10ButtonClick = () => {
    this.setState({ temp: this.state.temp + 10 });
  };

  onMinus10ButtonClick = () => {
    this.setState({ temp: this.state.temp - 10 });
  };
}

render(<H20 />, document.getElementById("root"));
