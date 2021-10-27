import { Profile, Projects, AboutMe, Work, Contact } from "../src/pages";
import { Menu } from "../src/components";
import "./app.scss";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
        <div className="App">
        
          <Menu />
          <Profile />
          <AboutMe />
          <Work />
          <Projects />
          <Contact />
        </div>
    </Fragment>
  );
}

export default App;
