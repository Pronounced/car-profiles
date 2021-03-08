import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    price: "",
    seller: "",
    color: ""
  };

  updateState = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.formUpdate(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>Name </label>
          <input name="name" onChange={this.updateState} required/>
        </p>
        <p>
          <label>Price </label>
          <input name="price" onChange={this.updateState} required/>
        </p>
        <p>
          <label>Seller </label>
          <input name="seller" onChange={this.updateState} required/>
        </p>
        <p>
          <label>Color </label>
          <input name="color" onChange={this.updateState} required/>
        </p>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
