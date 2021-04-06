import React, { useState } from "react";
import { Navbar, Nav,Row,Col, Form,FormControl,Button, Image} from "react-bootstrap";
import homebackground from '../images/homebackground.jpg';
import Axios from 'axios'

import { BrowserRouter,Route, Router,Switch, Routes} from 'react-router-dom';
export default function App() {
  const [username, setUsername]= useState('');
  const [itemname, setitemname]= React.useState('');
  const [unit, setunit]=React.useState('');
  const [calories, setcalories]=React.useState(0);
  const [carbs, setcarbs]=React.useState(0);
  const [fats, setfats]=React.useState(0);
  const [proteins, setproteins]=React.useState(0);
  const [salt, setsalt]=React.useState(0);
  const [sugar, setsugar]=React.useState(0);

function StoreList(){
  if(itemname === '' && unit=== ''){
    alert("All Fields Are Compulsory For Account Creation");
  }else{
  Axios.post("http://localhost:3001/insert2",{user:username,itemname:itemname,unit:unit,calories:calories,carbs:carbs,fats:fats,proteins:proteins,salt:salt,sugar:sugar})
  }
}

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

 <Form className="AddFoodForm">
 <Form.Group>
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Username" onChange={(event) =>{setUsername(event.target.value);}} />
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group>
   <Row>
     <Col>
 <Form.Group>
    <Form.Label>Item Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Item Name" onChange={(event) =>{setitemname(event.target.value);}} />
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group>
  </Col>
  <Col>  <Form.Group>
    <Form.Label>Unit of typical item</Form.Label>
    <Form.Control as="select" onChange={(event) =>{setunit(event.target.value);}}>    
      <option>gram</option>
      <option>liter</option>
      <option>tablespoon</option>
      <option>cup</option>
    </Form.Control>
  </Form.Group>
  </Col>

  </Row>

<Row>
  <Col>
  <Form.Group>
    <Form.Label>Calories</Form.Label>
    <Form.Control type="number" placeholder="Enter Calories" onChange={(event) =>{setcalories(event.target.value);}} />
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group>
  </Col>
  <Col>   <Form.Group>
    <Form.Label>Carbs</Form.Label>
    <Form.Control type="number" placeholder="Enter Carbs" onChange={(event) =>{setcarbs(event.target.value);}}/>
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group> 
  </Col>
  </Row>
  <Form.Group>
    <Form.Label>Fats</Form.Label>
    <Form.Control type="number" placeholder="Enter Fats" onChange={(event) =>{setfats(event.target.value);}}/>
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group> 
  
  <Form.Group>
    <Form.Label>Proteins</Form.Label>
    <Form.Control type="number" placeholder="Enter Proteins" onChange={(event) =>{setproteins(event.target.value);}} />
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group> 
  
  <Form.Group>
    <Form.Label>Salt</Form.Label>
    <Form.Control type="number" placeholder="Enter Salt" onChange={(event) =>{setsalt(event.target.value);}} />
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group> 
  
  <Form.Group>
    <Form.Label>Sugar</Form.Label>
    <Form.Control type="number" placeholder="Enter Sugar" onChange={(event) =>{setsugar(event.target.value);}}/>
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group>

  <Button variant="success" type="submit" style={{ fontWeight: 'bold'}} onClick={StoreList}>
    Add New Item
  </Button>
</Form>



 </div>
 </div>
  );
}