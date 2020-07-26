import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import '../App.css';

class menu extends Component {
    render() {
      
        return (
                 <div>
            
                    <ul className="nav">
                        <li><a href="/">Minesweeper</a></li>
                        <li><a href="help">Help</a></li>
                    </ul>
                </div>
        );
    }
}

export default menu;