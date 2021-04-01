// import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import CreateEmployeeComponent from './components/CreateEmployeeComponent'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
          <div className="container">
            <Switch>
              <Route path = "/"  exact component={ListEmployeeComponent}></Route>
              <Route path = "/employees" exact component={ListEmployeeComponent}></Route>
              <Route path = "/add-employee/:id" exact component={CreateEmployeeComponent}></Route>
              {/* <Route path = "/edit-employee/:id" exact component={CreateEmployeeComponent}></Route> */}
              
            </Switch>
          </div>
          <FooterComponent/> 
       </Router>
    </div>
  );
}

export default App;
