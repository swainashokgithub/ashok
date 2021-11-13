import './App.css';
import Register from './Component/Register/Register';
import Userlist from './Component/User List/Userlist';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path = "/">
      <Register/>
      </Route>
    <Route path= "/userlist">
    <Userlist/>
    </Route>
    
      </Switch>
    </Router>
    
     
    </>
  );
}

export default App;
