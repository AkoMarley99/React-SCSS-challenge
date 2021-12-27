
import React, { Component, useState } from "react";


import ColorFull from './color/color-full'

export default class ModuleFour extends Component {
  constructor(props){
    super(props)

    this.state = {
      
    };
  }

render() {
    return (
      <div  className="module-wrapper-five">
        
        <div className="font-wrapper">
        <ColorFull/>
        </div>
        
        </div>
    )
  }
}