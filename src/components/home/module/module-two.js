import React, { Component } from "react";

export default class ModuleOne extends Component {
  constructor(props){
    super(props)

    this.state = {
      display: null,
      
    }
    this.hideMe = this.hideMe.bind(this);
  }

  hideMe() {
    if (this.state.display === null){
      this.setState({
        display: `none`
      })
      console.log("Display nothing")
    } else {
      this.setState({
        display: null
      })
    }
  }
  


render() {

  const displayStyle = {
    display: this.state.display
  }
    return (

      <div  className="module-wrapper">
        <div className="hide-me-wrapper">
        <div className="hide-me" >
          <div className="hide-me-par" style={displayStyle}>
            Hide Me
          </div>
        </div>
        </div>
        <div className="button-wrapper">
        <button className="button" onClick={() => { this.hideMe() }}>Hide Me</button>
        
        </div>
      </div>
    );
  }
}