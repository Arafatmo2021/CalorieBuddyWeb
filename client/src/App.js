import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Route,Switch, Routes} from 'react-router-dom';

import Home from './webpages/Home';
import AddFood from './webpages/AddFood';
import SearchFood from './webpages/SearchFood';
import UpdateFood from './webpages/UpdateFood';
import ListFood from './webpages/ListFood';
import About from './webpages/About';
import Registration from './webpages/Registration';
import Login from './webpages/Login';
function App() {
  return (
    <div>
    <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Registration}/>
          <Route path='/AddFood' component={AddFood}/>
          <Route path='/SearchFood' component={SearchFood}/>
          <Route path='/UpdateFood' component={UpdateFood}/>
          <Route path='/ListFood' component={ListFood}/>
          <Route path='/About' component={About}/>
          <Route path='/Home' component={Home}/>
          <Route path='/Login' component={Login}/>
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
