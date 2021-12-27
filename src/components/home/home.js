import React, { Component } from "react";

import ModuleOne from "./module/module-one"
import ModuleTwo from "./module/module-two"
import ModuleThree from "./module/module-three"
import ModuleFour from "./module/module-four"
import ModuleFive from "./module/module-five"
import ModuleSix from "./module/module-six"

export default class HomeOne extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="homepage-wrapper">
                <div className="title">React & SCSS challenge</div>
                <ModuleOne/>
                <ModuleTwo/>
                <ModuleThree/>
                <ModuleFour/>
                <ModuleFive/>
                <ModuleSix/>
                <div className="footer">Ako Marley 2021</div>
            </div>
        );
    }
}