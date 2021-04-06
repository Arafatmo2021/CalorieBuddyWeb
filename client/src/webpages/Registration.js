import React from "react";
import { Navbar, Nav, Form,FormControl,Button, Image} from "react-bootstrap";
import homebackground from '../images/homebackground.jpg';
import Axios from 'axios'
import {useState} from 'react';
import { useAlert } from 'react-alert';

import { BrowserRouter,Route, Router,Switch, Routes} from 'react-router-dom';
export default function App() {
  const [firstname1, setUserfirstname]= React.useState('');
  const [lastname1, setUserlastname]=React.useState('');
  const [email1, setemail]=React.useState('');
  const [username1, setusername]=React.useState('');
  const [password1, setpassword]=React.useState('');

  const addtolist=()=>{
    if(firstname1 === '' && lastname1=== ''&& email1=== ''&& username1=== ''&& password1=== ''){
      alert("All Fields Are Compulsory For Account Creation");
    }else{
    Axios.post("http://localhost:3001/insert",{firstname1:firstname1,lastname1:lastname1,email1:email1,username1:username1,password1:password1})
    }
  };
  return (
    <div>
    <div> 
    <Navbar bg="dark" variant="dark" >
   <Navbar.Brand href="/" style={{color:'#36FF96', fontWeight: 'bold'}}>Calorie Buddy</Navbar.Brand>
   <Nav className="mr-auto">
   <Nav.Link href=''>Home</Nav.Link>
   <Nav.Link href=''>Add Food</Nav.Link>
   <Nav.Link href=''>Search Food</Nav.Link>
   <Nav.Link href=''>Update Food</Nav.Link>
   <Nav.Link href=''>List Food</Nav.Link>
   <Nav.Link href=''>About</Nav.Link>
   </Nav>  
   <Nav className="ml-auto">   
   <Nav.Link href='/' style={{color: '#36FF96', border: '1px solid #36FF96'}}>Registration</Nav.Link>
   &nbsp;&nbsp;
   <Nav.Link href='./Login' style={{color: '#36FF96', border: '1px solid #36FF96'}}>Login</Nav.Link>
   </Nav>
 </Navbar> 

 <Form className="SignuForm">
  <Form.Group >
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter First Name" style={{width: 400}}  onChange={(event) =>{setUserfirstname(event.target.value);}}/>
  </Form.Group>
  <Form.Group>
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Last Name" style={{width: 400}} onChange={(event) =>{setUserlastname(event.target.value);}}/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" style={{width: 400}} onChange={(event) =>{setemail(event.target.value);}}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group>
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter Username" style={{width: 400}} onChange={(event) =>{setusername(event.target.value);}}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter Password" style={{width: 400}} onChange={(event) =>{setpassword(event.target.value);}}/>
  </Form.Group>
  <Button variant="success" type="submit" onClick={addtolist} style={{ fontWeight: 'bold'}}>
    Sign Up
  </Button>
</Form>

 </div>
 </div>
  );
}