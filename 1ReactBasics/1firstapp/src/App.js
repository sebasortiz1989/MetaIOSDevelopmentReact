import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo"/>
          <header className="App-header">
              <p>
                  Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Learn React
              </a>

              <UsingAllComponents/>
          </header>
      </div>
  );
}

function UsingAllComponents() {
    return (
        <div>
        <ul>
            <Nav/>
            <Promo/>
            <Intro1/>
            <Intro2/>
            <Intro3/>
            <Footer/>
        </ul>
    </div>
  );
}

function Header() {
  let tittle = "This is some heading text";
  return (
      <h1>{tittle}</h1>
  );
}

function Heading() {
  return (
      <h1>This is an h1 heading.</h1>
  )
}

export default App;
