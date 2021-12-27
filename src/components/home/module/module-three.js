import React, { Component } from "react";

export default class ModuleOne extends Component {
  constructor(props){
    super(props)

    this.state = {
      number: 0,
    }
    this.incrementUp = this.incrementUp.bind(this);
    this.incrementDown = this.incrementDown.bind(this);
  }

  incrementUp() {
       this.setState({
        number: this.state.number + 1
      })
    }

  incrementDown() {
      this.setState({
        number: this.state.number - 1
      })
    }


render() {

 
    return (
      <div  className="module-wrapper">
        <button className="button"  onClick={this.incrementUp}>Up</button>
        <div className="number-wrapper">
        <div className="number" >{this.state.number}</div>
        </div>
        <button className="button" onClick={this.incrementDown}>Down</button>
        </div>
    )
  }
}