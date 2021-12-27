import React, { Component } from "react";

export default class ModuleFour extends Component {
  constructor(props){
    super(props)

    this.state = {
      fontSize: 12,
      incrementBy:'',
      inputValue: ''
      
    }
    this.increaseFontSize = this.increaseFontSize.bind(this);
    this.decreaseFontSize = this.decreaseFontSize.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(event) {
    this.setState({
    inputValue: event.target.value
    });
  }
  
  increaseFontSize() {
    
    let x = this.state.inputValue
      let y = parseInt(x)
     if (x == ""){
       this.setState({
         fontSize: this.state.fontSize + 1
       })
     }else if (typeof y === 'number') {
 
       this.setState({
         fontSize: this.state.fontSize + y
       })
     }else{
      this.setState({
        fontSize: this.state.fontSize + 1
      })
     }
    }
  
    
  

    decreaseFontSize() {
  
      let x = this.state.inputValue
      let y = parseInt(x)
     if (x === ""){
       this.setState({
         fontSize: this.state.fontSize - 1
       })
     }else if (typeof y === 'number') {
 
       this.setState({
         fontSize: this.state.fontSize - y
       })
     }else {
      this.setState({
        fontSize: this.state.fontSize - 1
      })
     }
      
       }

render() {
  const fonstSizeStyle = {
    fontSize : this.state.fontSize
  }
    return (
      <div  className="module-wrapper">
        
        <div className="font-wrapper">
        <div className="font"style={fonstSizeStyle} >{this.state.fontSize}px</div>
        </div>
        <div className="font-button-wrapper">
        <input className="increment-input" value={this.state.inputValue} onChange={this.updateInputValue}  placeholder="Incement by"/>
        <button className="button" onClick={this.updateInputValue,this.increaseFontSize}>Up</button>
        <button className="button" onClick={this.updateInputValue,this.decreaseFontSize}>Down</button>
        </div>
        </div>
    )
  }
}