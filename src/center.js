import React, { Component } from 'react';
import Minesweeper from './Minesweeper';
import Menu from "./Component/menu";
import Help from "./Component/help";
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

class center extends Component {
    render() {
        return (
            
            <BrowserRouter>
                
                <div>
                 

                    <Menu />
                    <Route exact = {true} path="/" component =  {Minesweeper}  />
                    <Route path="/help" component =  {Help}  />
                    
             
             
                 </div>
            </BrowserRouter>

         
            
        );
    }
}

export default center;