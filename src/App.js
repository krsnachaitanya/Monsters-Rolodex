import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    // super() helps us with this by calling React.Component's constructor()
    super();
    this.state = { monsters: [] };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  // render method comes built in with react.Component
  render() {
    return (
      <div className="App">
        <CardList name="Chaitu">
          {this.state.monsters.map((monster) => (
            // key is neeeded for react to target the specific element to update it
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
