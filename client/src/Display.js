import React, { Component } from "react";
import GridComponent from "./components/GridComponent/"

class Display extends Component {
state = {
    sheet: {},
    sheetData: {},
    checkNew: false
  };

  componentDidMount() {

       this.getData()
    
  }


  getData = () => {
    const SPREADSHEET_ID = "1YXYqO1KTEPImoREg69Ln6vh1uI_jg83FmKQ1puulUOc";
    const API_URL = "https://sheets.googleapis.com/v4/spreadsheets";
    const API_KEY = "AIzaSyC2qA2hiYKbgdClhoiznyT0aI-F1TDTeMM";
    
    const data = this.state.sheet.data;
    let numberOfRows = {}
    let sheetTitle = {}

    fetch(API_URL + "/" + SPREADSHEET_ID + "/" + "?key=" + API_KEY)
      .then(res => res.json())
      .then(data => {
        this.setState({ sheet: { data } });
        data.sheets.map((sheet) =>{
          
             numberOfRows = sheet.properties.gridProperties.rowCount
             sheetTitle = sheet.properties.title
           }
          
           )
           fetch(API_URL + "/" + SPREADSHEET_ID + "/" + "values/"+ sheetTitle +"!A1:H"+ numberOfRows +"/" + "?key=" + API_KEY)
           .then(res => res.json())
           .then(data=>{
             this.setState({sheetData:{data}})
           })
           .then(this.checkNewData)
      });
  };
  isEmpty = (obj) => {
      // null and undefined are "empty"
      if (obj == null) return true;
      
          // Assume if it has a length property with a non-zero value
          // that that property is correct.
          if (obj.length > 0)    return false;
          if (obj.length === 0)  return true;
      
          // If it isn't an object at this point
          // it is empty, but it can't be anything *but* empty
          // Is it empty?  Depends on your application.
          if (typeof obj !== "object") return true;
      
          // Otherwise, does it have any properties of its own?
          // Note that this doesn't handle
          // toString and valueOf enumeration bugs in IE < 9
          for (var key in obj) {
              if (hasOwnProperty.call(obj, key)) return false;
          }
      
          return true;
  }
  checkNewData = () => {
    if(this.isEmpty(this.props.data)){
      console.log("empty")
    }
    else{
      
     this.state.sheetData != 0 ? this.state.sheetData.data.values.push(this.props.data) : "wait"
     console.log(this.state.sheetData)
      
    }
  }
  render() {
    
    document.body.style.backgroundColor = '#e5eff1'    
    return (
      <div className="App">

         { this.isEmpty(this.state.sheetData.length) ? <GridComponent data={this.state.sheetData.data}/> : "Loading"}
      </div>
    );
  }
}
export default Display;