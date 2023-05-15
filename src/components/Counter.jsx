import React, { Component } from "react";

export default class Counter extends Component {
  // class .. state .. set state
  // class -- component life cycle
  /**
   * 1- ctor --> initalization
   * 2- Render Method
   * 3- componentDidMount () only 1 after first render
   * 4- componetDidUpdate() --> after render any render
   *
   */

  constructor() {
    super();
    console.log("1-ctor");
  }

  componentDidMount() {
    console.log("3-Component Did Mount, after first render");
  }
  componentDidUpdate() {
    console.log("update");
  }
  state = {
    count: 0,
    title: "Count Compoent",
  };
  increase = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrease = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  changeTitle = () => {
    this.setState({
      title: "new Title",
    });
  };
  render() {
    console.log("2-render");
    return (
      <div className="bg-light p-5">
        <h2>{this.state.title}</h2>
        <p>count is : {this.state.count}</p>
        <button onClick={this.increase} className="btn btn-success mx-2">
          Increase
        </button>
        <button onClick={this.decrease} className="btn btn-danger">
          decrease
        </button>
        <button onClick={this.changeTitle} className="btn btn-dark mx-1">
          Change Title
        </button>
      </div>
    );
  }
}
