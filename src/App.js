import React, { Component } from "react";
import { Navbar, NavbarBrand, Button } from "shards-react";
import CardExport from "./Card";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    //Variables and Data
    this.state = {
      showComponent: false,
      randomNumber: 0
    };
    //Functions
    this._ShowCardComponent = this._ShowCardComponent.bind(this);
  }

  _ShowCardComponent() {
    this.setState(state => {
      if (state.showComponent === true || state.showComponent === false) {
        return { showComponent: true };
      } else {
        return { showComponent: true };
      }
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar className="primaryBackground" type="dark" expand="md">
          <NavbarBrand href="#">Random Quote Machine</NavbarBrand>
        </Navbar>
        <div className="App-header">
          {this.state.showComponent ? <CardExport /> : null}
          <Button
            onClick={this._ShowCardComponent}
            size="lg"
            pill
            className="buttonAlign buttonColor"
          >
            Hit me!
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
//https://colorhunt.co/palette/158293
