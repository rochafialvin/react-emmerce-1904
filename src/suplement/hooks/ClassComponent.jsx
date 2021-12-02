import { Component } from "react";

class ClassComponent extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Class Component</h1>
        <h3>{this.state.count}</h3>
        <button
          onClick={() => {
            console.log("State akan berubah");
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default ClassComponent;
