import React from "react";
import { Navbar, Nav, Form,FormControl,Button, Image} from "react-bootstrap";
import homebackground from '../images/homebackground.jpg';

import { BrowserRouter,Route, Router,Switch, Routes} from 'react-router-dom';
export default function App() {
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
    &nbsp;&nbsp;
    <Nav.Link href='./Login' style={{color: '#36FF96', border: '1px solid #36FF96'}}>Log Out</Nav.Link>
    </Nav>
  </Navbar> 



<h1 style={{color: '#36FF96'}}>
  Developed By Arafat
</h1>



 </div>
<text className='Abouttext'>
The user should be given the choice to add nutritional facts for food ingredients and to store them in the database. The web application should provide users with the sum of the calories for a recipe or a meal based on the food ingredients selected by the user to be included in the recipe or the meal. As an example, the user should be able to select the food ingredients for the recipe of ‘apple pie’ by choosing ‘flour’, ‘egg’, ‘butter’, ‘brown sugar’, and ‘apple’ and then the web application retrieves the nutritional facts for each food ingredient and calculates and displays the nutritional facts including calorie count of the ‘apple pie’ recipe. If a food ingredient is not in the database the user should be given the choice to add it to the database. A full list of the functionalities of the web application is explained in the next sections of this document. Some requirements are ‘base’ requirements to pass the assignment and some requirements are ‘stretch goals’ indicated as ‘going beyond’ and are designed for students who would like to achieve the full mark. The purpose of the web application is to help people manage their diet by displaying nutritional facts including calories, carbs, fat, protein, salt, and sugar in a recipe based on food ingredients in the recipe.

</text>
 </div>
  );
}