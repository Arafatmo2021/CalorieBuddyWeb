import {useState,useEffect,React} from "react";
import { Col,Row,Navbar, Nav, Form,FormControl,Button, Image} from "react-bootstrap";
import homebackground from '../images/homebackground.jpg';
import Axios from 'axios';

import { BrowserRouter,Route, Router,Switch, Routes} from 'react-router-dom';
export default function App() {
  const [Upusername, setUpUsername]= useState('');
  const [Upitemname, setUpitemname]= useState('');
  const [Upunit, setUpunit]= useState('');
  const [Upcalories, setUpcalories]=useState(0);
  const [Upcarbs, setUpcarbs]=useState(0);
  const [Upfats, setUpfats]=useState(0);
  const [Upproteins, setUpproteins]=useState(0);
  const [Upsalt, setUpsalt]=useState(0);
  const [Upsugar, setUpsugar]=useState(0);
  function UpdateList(){
    if(Upusername === '' && Upitemname=== ''){
      alert("Add your username and item name");
    }else{
    Axios.put("http://localhost:3001/update",{Upusername:Upusername,Upitemname:Upitemname,Upunit:Upunit,Upcalories:Upcalories,Upcarbs:Upcarbs,Upfats:Upfats,Upproteins:Upproteins,Upsalt:Upsalt,Upsugar:Upsugar})
    }
  }

  function DeleteList(){
    if(Upusername === '' && Upitemname=== ''){
      alert("Add your username and item name");
    }else{
    Axios.post('http://localhost:3001/delete',{Upusername:Upusername,Upitemname:Upitemname})
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



  <Form className="UpdateForm">
 <Form.Group>
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Username (Must be Unique)" onChange={(event) =>{setUpUsername(event.target.value);}} />
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group>
   <Row>
     <Col>
 <Form.Group>
    <Form.Label>Item Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Existed Item Name" onChange={(event) =>{setUpitemname(event.target.value);}} />
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group>
  </Col>
  <Col>  <Form.Group>
    <Form.Label>Unit of typical item</Form.Label>
    <Form.Control as="select" onChange={(event) =>{setUpunit(event.target.value);}}>    
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
    <Form.Control type="number" placeholder="Enter Calories" onChange={(event) =>{setUpcalories(event.target.value);}} />
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group>
  </Col>
  <Col>   <Form.Group>
    <Form.Label>Carbs</Form.Label>
    <Form.Control type="number" placeholder="Enter Carbs" onChange={(event) =>{setUpcarbs(event.target.value);}}/>
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group> 
  </Col>
  </Row>
  <Form.Group>
    <Form.Label>Fats</Form.Label>
    <Form.Control type="number" placeholder="Enter Fats" onChange={(event) =>{setUpfats(event.target.value);}}/>
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group> 
  
  <Form.Group>
    <Form.Label>Proteins</Form.Label>
    <Form.Control type="number" placeholder="Enter Proteins" onChange={(event) =>{setUpproteins(event.target.value);}} />
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group> 
  
  <Form.Group>
    <Form.Label>Salt</Form.Label>
    <Form.Control type="number" placeholder="Enter Salt" onChange={(event) =>{setUpsalt(event.target.value);}} />
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group> 
  
  <Form.Group>
    <Form.Label>Sugar</Form.Label>
    <Form.Control type="number" placeholder="Enter Sugar" onChange={(event) =>{setUpsugar(event.target.value);}}/>
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group>

  <Button variant="success" type="submit" style={{ fontWeight: 'bold'}} onClick={UpdateList}>
    Update Item
  </Button>
  &nbsp;&nbsp;
  <Button variant="danger" type="submit" style={{ fontWeight: 'bold'}} onClick={DeleteList}>
    Delete Item
  </Button>
</Form>


 </div>

 </div>
  );
}