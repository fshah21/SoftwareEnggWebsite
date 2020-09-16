import React from 'react';
import { Component } from 'react';
import logo from './images/harexilogo.jpg';
import client from "./images/pic1.jpg";
import './App.css';
import { Navbar, Nav, Card } from 'react-bootstrap';

class NavigationBar extends Component {
    render() {
        return (
            <Navbar className="navBarStyle">
                <Navbar.Brand href="#home">
                    <img
                    src={logo}
                    width="80"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/" className="navLinks mr-4">Home</Nav.Link>
                    <Nav.Link href="/pr" className="navLinks mr-4">PR</Nav.Link>
                    <Nav.Link href="/cmn" className="navLinks mr-4">CMN</Nav.Link>
                    <Nav.Link href="/exploration" className="navLinks mr-4">Exploration</Nav.Link>
                    <Nav.Link href="/valuations" className="navLinks mr-4">Valuations</Nav.Link>
                    <Nav.Link href="/foundations" className="navLinks mr-4">Foundations</Nav.Link>
                    <Nav.Link href="/development" className="navLinks mr-4">Development</Nav.Link>
                    <Nav.Link href="/fd" className="navLinks mr-3">FD</Nav.Link>
                </Nav>
                </Navbar>
        );
    }
}

export default NavigationBar;