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
    event.preventDefault();
    for(var i in cars)
    {
      if(cars[i].vin === event.target.key)
      {
        cars[i].favorite = event.target.value;
      }
    }
    return this.state.cars.filter(item => item.vin === event.target.key);
    // var favArr = this.state.cars.filter(item => 
    //   item === event.target.key
    // )
    // favArr[0].favorite = event.target.value;

    // var car = {...this.state.cars};
    // car[event.target.name] = event.target.value;
    // this.setState({car});
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
                {/* <th>Favorite</th> */}
              </tr>
            </thead>
            <tbody>
              {this.state.cars.map((car) =>
                  <tr key={car.vin}>
                    <td>{car.name}</td>
                    <td>{car.price}</td>
                    <td>{car.seller}</td>
                    <td>{car.color}</td>
                    {/* <td><input name="favorite" type="text" onChange={this.setFavorite} value={car.favorite}></input></td>
                    <td><input name="favorite" type="checkbox" onChange={this.setFavorite}></input></td> */}
                  </tr>
              )}
            </tbody>
          </table>
          <h2>Conditionally Render List of Items or Form to Add Car</h2>
        </div>
      )
    }
  }
}

export default List;
