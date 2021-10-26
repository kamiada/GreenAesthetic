import { Profile, Projects } from "../src/pages";
import { Menu } from "../src/components";
import './app.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <Menu />
        <Profile />
        <Projects />
      </body>
    </div>
  );
}

export default App;
