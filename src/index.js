import React from "react";
import { render } from "react-dom";

class H20 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 15 };
  }

  render() {
    return (
      <div>
        <h2>{this.state.temp}℃</h2>
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
