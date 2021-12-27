import React, { Component } from "react";

export default class ModuleOne extends Component {
  constructor(props){
    super(props)

    this.state = {
      textAlign : `center`,
      alignItems: `center`
      
    }
    this.alignleft = this.alignleft.bind(this);
  }

  alignleft() {
    this.setState({
      alignItems: `flex-start`
    })
  } 

  alignCenter() {
    this.setState({
      alignItems: `center`
    })
  } 

  alignRight() {
    this.setState({
      alignItems: `flex-end`
    })
  }
  
render() {
  const inputStyle = {
    alignItems : this.state.alignItems
  }
    return (
     
      <div  className="module-wrapper">
        <div className="align-me" style={inputStyle }>Align Me</div>
        <div className="button-wrapper">
        <button className="button" onClick={() => { this.alignleft() }}>Left</button>
        <button className="button" onClick={() => { this.alignCenter() }}>Center</button>
        <button className="button" onClick={() => { this.alignRight() }}>Right</button>
        </div>
      
      </div>
    );
  }
}

