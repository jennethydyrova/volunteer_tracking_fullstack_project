import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import VolunteerContainer from "./containers/VolunteerContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavbarMain from "./components/NavbarMain";
import ProjectContainer from "./containers/ProjectContainer";
import VolunteerTrackContainer from "./containers/VolunteerTrackContainer";

function App() {
  return (
    <Router>
      <div>
        <NavbarMain />
        <Switch>
          <Route path="/volunteersinfo">
            <VolunteerContainer />
          </Route>
          <Route path="/projectsinfo">
            <ProjectContainer />
          </Route>
          <Route path="/volunteertracking">
            <VolunteerTrackContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
