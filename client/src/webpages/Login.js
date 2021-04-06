import {React,useEffect, useState} from "react";
import { Navbar, Nav, Form,FormControl,Button, Image} from "react-bootstrap";
import homebackground from '../images/homebackground.jpg';
import Axios from 'axios';
import { BrowserRouter,Route, Router,Switch, Routes} from 'react-router-dom';
import Home from './Home';
import { useHistory } from 'react-router-dom';


export default function App() {
  const [Lousername, setUsername]= useState('');
  const [Lopassword, setpassword]= useState('');
  const [userslist, setUserlist]= useState([]);

useEffect(()=>{
Axios.get("http://localhost:3001/read").then((response)=>{
  setUserlist(response.data);
});
},[]);
const history = useHistory();

  const addtolist1=()=>{
    if(Lousername === '' && Lopassword=== ''){
      alert("All Fields Are Compulsory For Account Creation");
    }else{
      userslist.map((val,key)=>{
       if(Lousername === val.username){
         if(Lopassword === val.password){
         alert("Welcome " + val.username);
        history.push({  pathname: '/Home', state: Lousername});
        return [Lousername];  
        }
       }
      });
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


 <Form className="LoginForm">
  <Form.Group >
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter Username" style={{width: 400}}  onChange={(event) =>{setUsername(event.target.value);}}/>
  </Form.Group>
  <Form.Group>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter Password" style={{width: 400}} onChange={(event) =>{setpassword(event.target.value);}}/>
  </Form.Group>
  <Button variant="success" type="submit" onClick={addtolist1} style={{ fontWeight: 'bold'}}>
    Log In
  </Button>
</Form>




 </div>
 </div>
  );
}