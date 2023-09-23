import React from "react";
import Button from "../Elements/Button";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  componentDidMount() {
    this.setState({ count: 1 });
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (this.state.count > 10) {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <div className="flex flex-row justify-between items-center w-[80px]">
        <p className="font-medium text-lg text-white">{this.state.count}</p>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          <span className="font-semibold text-xl">+</span>
        </Button>
        {console.log("render")}
      </div>
    );
  }
}

export default Counter;
