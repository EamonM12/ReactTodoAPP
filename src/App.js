import Navbar  from './navbar';
import Home from "./Home";
import TodoDetails from './todoDetails';
import Create from "./Create";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Notfound from './Notfound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='content'>
         {/* <Home/> */}
        <Switch>
          <Route exact path="/">
            <Home/>            
          </Route>
          <Route path="/create">
            <Create/>            
          </Route>
          <Route path="/todos/:id">
            <TodoDetails/>            
          </Route>
          <Route path="*">
            <Notfound/>
          </Route>
        </Switch>

      </div>
    </div>
    </Router>
  );
}

export default App;
