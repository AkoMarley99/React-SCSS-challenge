import React, {Component , useState} from "react";
import { SketchPicker  } from 'react-color';

export default class ModuleOne extends Component {
    constructor(props){
      super(props)
    
      this.state = {
        color: '#fff',
        chosenColor: " ",
        displayColorPicker: false,
        backgroundColor: "C7E8F3"
      };
      this.pickColor = this.pickColor.bind(this)
      this.changeColor = this.changeColor.bind(this)
    }
      pickColor = (color) => {
        this.setState({ color: color.hex });
        
        console.log("color picked")
      };

      changeColor (event){
          let inputColor = this.state.color
          this.setState({
              chosenColor : inputColor
          })
          console.log("Color Chosen")
         
          }
        

        handleClick = () => {
            this.setState({ displayColorPicker: !this.state.displayColorPicker })
        };
          
        handleClose = () => {
            this.setState({ displayColorPicker: false })
        };
        

    
      render() {
          const colorStyle = {
            color: this.state.chosenColor
          }
          const backGroundColor = {
              backgroundColor: this.state.color
          }
          const popover = {
            position: 'absolute',
            zIndex: '4',
          }
          const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          }
        
        return (
            <div className="module-five">
            <div className="color-me-wrapper" >
                <div className="color-me" style={colorStyle}>Color Me</div>
            </div>
            <div className="color-buttons-wrapper">
        <button onClick={ this.handleClick } className="color-button" style={backGroundColor}>{this.color}</button>
        { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <SketchPicker 
          color={ this.state.color }
          onChangeComplete={this.pickColor}/>
        </div> : null }
        <input type="text" className="colorInput" value ={this.state.color}id="" />

          <button className="button" onClick={this.changeColor}>Submit</button>
          </div>
          </div>
        );
      
      }
}

