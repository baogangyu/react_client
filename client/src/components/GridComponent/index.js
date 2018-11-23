import React, { Component } from 'react';
import {GridWrapper,LoadingIcon,LoadingWrapper} from './styles';
import loadingIcon from '../../assets/images/loading.gif'

class GridComponent extends Component {
addDataBack = (dataTilte) =>{
    this.props.data != undefined ? this.props.data.values.unshift(dataTilte) : null
}
  render() {

//    if(loading){
//        setTimeout(() => this.setState({loading:false}),3500)
//    return (<LoadingWrapper><LoadingIcon src={loadingIcon}/></LoadingWrapper>);
//    }
    const dataTilte =  this.props.data != undefined ? this.props.data.values.shift() : null
    console.log(dataTilte)
    return(
    <GridWrapper>
        
        <table className="table is-fullwidth is-striped">
            <thead>
                <tr>
                { this.props.data != undefined ?  dataTilte.map((value,index) => <th key={index}>{value}</th>) : <th>Loading</th>}    
                </tr>
            </thead>
            <tbody>  
               {this.props.data != undefined ? this.props.data.values.map((row, index) => <tr key={index}>{row.map((column,index)=><td key={index}>{column}</td>)}</tr>) : <tr><td>Loading</td></tr>}
                {this.addDataBack(dataTilte)}
            </tbody>
        </table>
    </GridWrapper>
    )
  }
}
export default GridComponent;
