import React from "react";

class Form extends React.Component {
  cleanForm = event => {
    event.preventDefault();
  };

  submitToList = event => {
    let current = event.target.value;
    this.props.add(current);
  };

  render() {
    return (
      <form onSubmit={this.clearForm}>
        <input onChange={this.submitToList} />{" "}
      </form>
    );
  }
}

export default Form;
