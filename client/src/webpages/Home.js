import {useState,React} from "react";
import { Navbar, Nav, Form,FormControl,Button, Image} from "react-bootstrap";
import homebackground from '../images/homebackground.jpg';
import { BrowserRouter,Route, Router,Switch, Routes} from 'react-router-dom';



function Home() {
        return (
    <div>
     <div> 
     <Navbar bg="dark" variant="dark" >
    <Navbar.Brand href="./Home" style={{color:'#36FF96', fontWeight: 'bold'}}>Calorie Buddy</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href='./Home'>Home</Nav.Link>
    <Nav.Link href='./AddFood'>Add Food</Nav.Link>
    <Nav.Link href='./SearchFood'>Search Food</Nav.Link>
    <Nav.Link href='./UpdateFood'>Update Food</Nav.Link>
    <Nav.Link href='./ListFood'>List Food</Nav.Link>
    <Nav.Link href='./About'>About</Nav.Link>
    </Nav>  
    <Nav className="ml-auto">   
    <Nav.Link href='/' style={{color: '#36FF96', border: '1px solid #36FF96'}}>Registration</Nav.Link>
    &nbsp;&nbsp;&nbsp;
    <Nav.Link href='./Login' style={{color: '#36FF96', border: '1px solid #36FF96'}}>Log Out</Nav.Link>
    </Nav>
  </Navbar> 







  </div>
  <div>
  <Image src={homebackground} alt="BigCo Inc. logo" fluid />
  </div>
  </div>
  );
}

export default Home;