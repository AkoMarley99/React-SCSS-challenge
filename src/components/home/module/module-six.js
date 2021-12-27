
import React, { Component, useState } from "react";

import Time from './Time/time'

export default class ModuleFour extends Component {
  constructor(props){
    super(props)

    this.state = {
      display: null,
    };
    this.hideTime = this.hideTime.bind(this)
  }

  hideTime() {
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
  const timeStyle = {
    display: this.state.display
  }
    return (
      <div  className="module-wrapper">
        
        <div className="back-time-wrapper">
          <div className="time-wrapper" style={timeStyle}>
            <Time/>
          </div>
        </div>
        <button className="time-button" onClick={() => { this.hideTime() }}>Toggle Clock</button>
        </div>
    )
  }
}