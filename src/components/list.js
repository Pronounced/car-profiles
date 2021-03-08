import React from "react";
import { cars } from "../utils/data";
import  Form  from "./form";

class List extends React.Component {
  state = { 
    showForm: false, 
    cars: cars, 
    view:"list",
    id: 0, 
  };

  handleDelete = () => {

  };

  incrementId = () => {
    this.setState({
      id : this.state.id + 1
    });
  }

  handleAdd = () => {
    this.setState({
      showForm: true,
    });
    this.incrementId();
  }

  updateFromForm = (input) => {
    let testAdd = this.state.cars.concat({
      name: input.name,
      price: input.price,
      seller: input.seller,
      color: input.color,
      vin: this.state.id
    });
    this.setState({
      cars: testAdd,
      showForm: false
    });
  }

  setFavorite = (event) => {
    const { cars } = this.state;
    const { id } = event.target;
    cars[id].favorite = !this.state.cars[id].favorite;
    this.setState({ cars });
  }

  render() {
    if(this.state.showForm) {
      return (
        <div>
          <Form formUpdate={this.updateFromForm} car={this.state.cars}></Form>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Cars for Sale</h2>
          <button onClick={this.handleAdd}>Add A Car!</button>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Seller</th>
                <th>Color</th>
                <th>Favorite</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.cars.map((car, i) =>
                  <tr key={car.vin}>
                    <td>{car.name}</td>
                    <td>{car.price}</td>
                    <td>{car.seller}</td>
                    <td>{car.color}</td>
                    <td><input id={i} name={car.name} type="checkbox" onClick={this.setFavorite} checked={!!car.favorite}></input></td>
                  </tr>
                )
              }
            </tbody>
          </table>
          <h2>Conditionally Render List of Items or Form to Add Car</h2>
        </div>
      )
    }
  }
}

export default List;
