import { Profile, Projects, AboutMe, Work, Contact } from "../src/pages";
import { Menu } from "../src/components";
import './app.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <Menu />
        <Profile />
        <AboutMe />
        <Work />
        <Projects />
        <Contact />
      </body>
    </div>
  );
}

export default App;
