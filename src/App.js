import Homepage from './components/homepage/Homepage';
import Topbar from './components/topbar/Topbar';
import Work from './components/work/Work';
import Gallery from './components/gallery/Gallery';
import {Switch, Route, Redirect} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Router>
      <Topbar/>
      <Switch>
        <Route exact component={Homepage} path="/Homepage" /> 
        <Route exact path="/">
          <Redirect to="/Homepage"/>
        </Route>
        <Route exact component={Work} path="/Work" />
        <Route exact component={Gallery} path="/Gallery" />
        
      </Switch>



    
    </Router>
  );
}

export default App;
