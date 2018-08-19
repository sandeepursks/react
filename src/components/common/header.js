'use strict';
import React, { Component } from "react";
class Header extends Component{
    render(){
        return (
            <nav className="navbar navbar-default">
            <div className="container-fluid">
            <a href="/" className="navbar-brand">
                 <img src ="images/mylogo.png" alt="mylogo"/>
            </a>
            <ul className="nav navbar-nav">
                <li><a href ="/">Home</a></li>
                <li><a href ="/#authors">Authors</a></li>
                <li><a href ="/#about">About</a></li>
                </ul>
            </div>
            </nav>
        );
    }
}
export default Header;