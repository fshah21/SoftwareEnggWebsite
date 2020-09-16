import React from 'react';
import logo from './images/harexilogo.jpg';
import client from "./images/pic1.jpg";
import './App.css';
import NavigationBar from "./NavigationBar";
import { Navbar, Nav, Card } from 'react-bootstrap';

function App() {
  return (
      <div className="container-fluid">
        <NavigationBar/>
    <div>
        <p className="titles m-5">PROJECT INFORMATION</p>
        <p className="text"> Academic Period : Fall 2020 </p>
        <p className="text"> Project Name : e-Wellness Health Platform </p>
        <p className="text"> Client : Jasmine Berry</p>
        <p className="text"> Team Number : 09</p>
    </div>
    <div>
        <p className="titles m-5">PROJECT DESCRIPTION</p>
        <p className="text m-5">Our mission is to develop the adequate technicaltool for patients to receive treatments that arespecificto their individual needs, dietary habits, lifestyle, exercise regimen, and personal goals in managing their diabetes. Many of today’s treatments given to patients by doctors are too generaland broad. Treatments should be focused with patient precision, which is what we aim to accomplish with our platform. Overall, the Harexi platform will work with you to make sure you are getting appropriate preventive care and screening to live long, healthy lives.</p>
    </div>
    <div>
      <p className="titles m-5">OUR CLIENT</p>
      <Card className="col-md-3 mx-auto p-5">
        <Card.Img src={client} className="contactImages"/>
        <Card.Title className="mt-3">Jasmine Berry</Card.Title>
        <Card.Text>CTO</Card.Text>
        <Card.Text>jasmineBerry@gmail.com</Card.Text>
      </Card>
    </div>
    <div>
      <p className="titles m-5">MEET OUR TEAM</p>
      <div className="row m-3">
        <div className="col-md-3">
          <Card className="col-md-12 m-1 p-4">
            <Card.Img src={client} className="contactImages"/>
            <Card.Title className="mt-3">Jasmine Berry</Card.Title>
            <Card.Text>CTO</Card.Text>
            <Card.Text>jasmineBerry@gmail.com</Card.Text>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="col-md-12 m-1 p-4">
            <Card.Img src={client} className="contactImages"/>
            <Card.Title className="mt-3">Jasmine Berry</Card.Title>
            <Card.Text>CTO</Card.Text>
            <Card.Text>jasmineBerry@gmail.com</Card.Text>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="col-md-12 m-1 p-4">
            <Card.Img src={client} className="contactImages"/>
            <Card.Title className="mt-3">Jasmine Berry</Card.Title>
            <Card.Text>CTO</Card.Text>
            <Card.Text>jasmineBerry@gmail.com</Card.Text>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="col-md-12 m-1 p-4">
            <Card.Img src={client} className="contactImages"/>
            <Card.Title className="mt-3">Jasmine Berry</Card.Title>
            <Card.Text>CTO</Card.Text>
            <Card.Text>jasmineBerry@gmail.com</Card.Text>
          </Card>
        </div>
      </div>
      <div className="row m-3">
        <div className="col-md-3">
          <Card className="col-md-12 m-1 p-4">
            <Card.Img src={client} className="contactImages"/>
            <Card.Title className="mt-3">Jasmine Berry</Card.Title>
            <Card.Text>CTO</Card.Text>
            <Card.Text>jasmineBerry@gmail.com</Card.Text>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="col-md-12 m-1 p-4">
            <Card.Img src={client} className="contactImages"/>
            <Card.Title className="mt-3">Jasmine Berry</Card.Title>
            <Card.Text>CTO</Card.Text>
            <Card.Text>jasmineBerry@gmail.com</Card.Text>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="col-md-12 m-1 p-4">
            <Card.Img src={client} className="contactImages"/>
            <Card.Title className="mt-3">Jasmine Berry</Card.Title>
            <Card.Text>CTO</Card.Text>
            <Card.Text>jasmineBerry@gmail.com</Card.Text>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="col-md-12 m-1 p-4">
            <Card.Img src={client} className="contactImages"/>
            <Card.Title className="mt-3">Jasmine Berry</Card.Title>
            <Card.Text>CTO</Card.Text>
            <Card.Text>jasmineBerry@gmail.com</Card.Text>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
