import './App.css';
import NavbarMain from './components/Navbar/Navbar'
import ReportInOut from './components/ReportInOut';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
function App() {
  return (
    <div >
      <Router>
        {/* <div>*/}
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Redirect to="/ReportInOut" />
              )
            }}
          />
          <div>
            <NavbarMain />
            <Route component={ReportInOut} path="/ReportInOut" />
          </div>
        </Switch>
        {/* </div> */}
      </Router>

    </div>
  )
}

export default App;
