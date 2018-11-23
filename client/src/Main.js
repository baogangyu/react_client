import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AddContainer from "./AddContainer";
import Display from "./Display";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class Main extends Component {
  state = {
    data: []
  };
  handleResponse = response => {
    this.state.data.push(
      response.id,
      response.name,
      response.city,
      response.country,
      response.IATA3,
      response.IATA4,
      response.latitute,
      response.longitude
    );

    console.log(this.state.data)
  };

  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Display data={this.state.data} />}
          />
          <Route
            path="/Add"
            component={props => <AddContainer onSubmit={this.handleResponse} />}
          />
        </Switch>
      </main>
    );
  }
}

export default Main;
