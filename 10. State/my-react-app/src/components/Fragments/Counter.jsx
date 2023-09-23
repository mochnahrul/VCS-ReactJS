import React from "react";
import Button from "../Elements/Button";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="flex flex-row justify-between items-center w-[80px]">
        <p className="font-medium text-lg text-white">{this.state.count}</p>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          <span className="font-semibold text-xl">+</span>
        </Button>
      </div>
    );
  }
}

export default Counter;
