import React, { Component } from "react";
import logo from "./logo.svg";
import GridComponent from "./components/GridComponent/";
import "./App.css";
import { FormFlex,ErrorHeader } from "./styles";
import { validateForm } from "./shared/helpers/helpers";

class AddContainer extends Component {
  state = {
    id: "",
    name: "",
    city: "",
    country: "",
    IATA3: "",
    IATA4: "",
    latitute: "",
    longitude: "",

    error: ""
  };
  onSubmit = (event, data) => {
    event.preventDefault();

    this.setState({ error: "" });

    const {
      id,
      name,
      city,
      country,
      IATA3,
      IATA4,
      latitute,
      longitude
    } = this.state;
    const formErrors = validateForm(this.state);
    if (typeof formErrors === "string") {
      this.setState({
        error: formErrors
      });
      return;
    }
    this.props.onSubmit({
      id,
      name,
      city,
      country,
      IATA3,
      IATA4,
      latitute,
      longitude
    });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // "API_URL + "/" + SPREADSHEET_ID + "/values"+ "/Airports!A1:H1:append?valueInputOption=USER_ENTERED" + "?key=" + API_KEY"
  };
  // test = () => {
  //   const SPREADSHEET_ID = "1YXYqO1KTEPImoREg69Ln6vh1uI_jg83FmKQ1puulUOc";
  //   const API_URL = "https://sheets.googleapis.com/v4/spreadsheets";
  //   const API_KEY = "AIzaSyC2qA2hiYKbgdClhoiznyT0aI-F1TDTeMM";
  //   let values = [];
  //   values.push(this.state.id,this.state.name,this.state.country,this.state.country,this.state.IATA3,this.state.IATA4,this.state.latitute,this.state.longitude)
  //     const data = {
  //         "range": "Airports",
  //         "majorDimension": "ROWS",
  //         "values": values,

  //     }
  //     console.log(data)
  //   //   fetch(API_URL + "/" + SPREADSHEET_ID + "/values"+ "/Airports!A1:H1:append?valueInputOption=RAW" + "?key=" + API_KEY, {
  //   //       credentials: {API_KEY},
  //   //       method: "POST",
  //   //       body: data
  //   //   })
  // }

  renderErrors = () => {
    if (this.state.error !== "") {
      return <ErrorHeader error>{this.state.error}</ErrorHeader>;
    }
    if (this.props.error !== "") {
      return <ErrorHeader error>{this.state.error}</ErrorHeader>;
    }
    return null;
  };
  render() {
    const error = this.state.error !== "";
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FormFlex onSubmit={this.onSubmit} error={error}>
      {this.renderErrors()}      
        
          <label>Id:</label>

          <input
            type="text"
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
          />
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label>City:</label>

          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <label>Country:</label>

          <input
            type="text"
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
          />
          <label>IATA3:</label>

          <input
            type="text"
            name="IATA3"
            value={this.state.IATA3}
            onChange={this.handleChange}
          />
          <label>IATA4:</label>

          <input
            type="text"
            name="IATA4"
            value={this.state.IATA4}
            onChange={this.handleChange}
          />
          <label>latitute:</label>

          <input
            type="text"
            name="latitute"
            value={this.state.latitute}
            onChange={this.handleChange}
          />
          <label>longitude:</label>

          <input
            type="text"
            name="longitude"
            value={this.state.longitude}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </FormFlex>
      </div>
    );
  }
}
export default AddContainer;
