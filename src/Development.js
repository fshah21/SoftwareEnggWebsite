import React from 'react';
import { Component } from 'react';
import logo from './images/harexilogo.jpg';
import client from "./images/pic1.jpg";
import NavigationBar from "./NavigationBar";
import './App.css';

class Development extends Component {
    render() {
        return (
            <div className="container-fluid">
                <NavigationBar/>
                <h1>Development</h1>
            </div>
        );
    }
}

export default Development;
