import React, { Component } from "react";
import Shelter from "./Shelter";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Dogs from "./Dogs";
import DogDetail from "./DogDetail";
import whiskey from "./img/whiskey.jpg";
import hazel from "./img/hazel.jpg";
import tubby from "./img/tubby.jpg";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Navbar dogs={this.props.dogs} />
        <Switch>
          <Route
            exact
            path="/dogs/home"
            render={() => (
              <Shelter>
                <Dogs dogs={this.props.dogs} />
              </Shelter>
            )}
          />
          <Route
            path="/dogs/:dogName"
            exact
            render={props => <DogDetail {...props} dogs={this.props.dogs} />}
          />
          <Route
            render={() => (
              <Shelter>
                <Dogs dogs={this.props.dogs} />
              </Shelter>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
