import React, { Component } from "react";
import GridComponent from "./components/GridComponent/"

import Header from './components/HeaderComponent'
import Main from './Main'

class App extends Component{
state = {
  newAirport: {}
}
  render(){ 
    return(
    <div>
      <Header />
      <Main data={this.state.newAirport} />
    </div>
    )
  }
  
}
export default App;