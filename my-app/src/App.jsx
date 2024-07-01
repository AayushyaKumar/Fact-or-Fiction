import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
import Forms from "./Forms"
function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <div className="min-h-screen flex items-center justify-center mt-[-5vh] ">
    //   <Forms  />
    //   </div>
    // </div>
    
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/"></Link>
                </li>
                <li>
                  <Link to="/SignUP">Sign Up</Link>
                </li>
                {/* <li>
                  <Link to="/">Users</Link>
                </li> */}
              </ul>
            </nav>
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/">
                <Navbar />
              </Route>
              <Route path="/SignUp">
                <Forms />
              </Route>
              {/* <Route path="/">
                <Home />
              </Route> */}
            </Switch>
          </div>
        </Router>
      );
    }
    
  

export default App;
