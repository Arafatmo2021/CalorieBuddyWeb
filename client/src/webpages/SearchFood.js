import {useEffect,useState,React} from "react";
import { Table,Navbar, Nav, Form,FormControl,Button, Image} from "react-bootstrap";
import homebackground from '../images/homebackground.jpg';
import Axios from 'axios';

import { BrowserRouter,Route, Router,Switch, Routes} from 'react-router-dom';
export default function App() {


function searchFun(){
  let filter=document.getElementById('myinput').value.toUpperCase();
  let table=document.getElementById('mytable');
  let tr=table.getElementsByTagName('tr');
  for(var i=0;i<tr.length;i++){
    let td=tr[i].getElementsByTagName('td')[0];
    if(td){
      let textvalue=td.textContent || td.innerHTML;
      if(textvalue.toUpperCase().indexOf(filter)>-1){
        tr[i].style.display="";
      }else{
        tr[i].style.display="none";
      }
    }
  }
}


  const [search, setsearch]= useState('');
  const [Foodlist, setFoodlist]= useState([]);
  useEffect(()=>{
    Axios.get('http://localhost:3001/read2').then((response)=>{
      setFoodlist(response.data);
    });
    },[]);

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

  <Form className="SearchForm">
 <Form.Group>
    
    <Form.Control id="myinput" type="text" placeholder="Enter Item For Search"  onKeyUp={searchFun}/>
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group>
  
  </Form>
  <br></br>
  <br></br>
  <br></br>
  <br></br><br></br>
  <Table striped bordered hover id='mytable'>
  <thead>
    <tr>
      <th>Item Name</th>
      <th>Unit</th>
      <th>Calories</th>
      <th>Carbs</th>
      <th>Fats</th>
      <th>Protein</th>
      <th>Salt</th>
      <th>Sugar</th>
    </tr>
  </thead>
  <tbody>
  {Foodlist.map(data => (
                  <tr>
                     <td>{data.Itemname}</td>
                     <td>{data.Unit}</td>
                     <td>{data.Calories}</td>
                     <td>{data.Carbs}</td>
                     <td>{data.Fats}</td>
                     <td>{data.Proteins}</td>
                     <td>{data.Salt}</td>
                     <td>{data.Sugar}</td>
                   </tr>
                ))}
  </tbody>
</Table>



 </div>
 </div>
  );
}