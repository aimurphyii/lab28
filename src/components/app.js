import React from "react";
import List from "./list.js";
import Form from "./form.js";
import "../styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      tasks: {
        1: "sample"
      }
    };
  }

  deleteTask = () => {
    let val = this.state.tasks[0];
    this.setState({ tasks: this.state.tasks.filter(item => item !== val) });
  };

  drawItems() {
    this.setState({
      count: this.state.tasks.filter(item => !item.complete).length
    });
  }

  render() {
    return (
      <>
        <h1>you have {this.state.count} tasks to do</h1>
        <List
          className="todo"
          list={this.state.tasks}
          button={this.deleteTask}
        />

        <Form add={this.drawItems} />
      </>
    );
  }
}

export default App;
