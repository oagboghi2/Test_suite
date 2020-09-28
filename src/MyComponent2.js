import React from "react";

export default class MyComponent2 extends React.Component {
  name = "MyComponent";

  constructor(props) {
    super(props);

    this.handleClick4 = this.handleClick4.bind(this);
  }

  handleClick1() {
    alert(this.name);
  }

  handleClick2() {
    alert(this.name);
  }

  handleClick3 = () => {
    alert(this.name);
  };

  handleClick4() {
    alert(this.name);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>click 1</button>
        <button onClick={() => this.handleClick2}>click 2</button>
        <button onClick={this.handleClick3}>click 3</button>
        <button onClick={this.handleClick4}>click 4</button>
      </div>
    );
  }
}
