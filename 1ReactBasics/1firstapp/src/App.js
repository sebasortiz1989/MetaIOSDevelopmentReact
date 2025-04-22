import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Footer from "./components/Footer";
import React, { useState } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Logo from "./components/Logo";

function App() {
    const [showComponents, setShowComponents] = useState(false);

    const toggleComponents = () => {
        setShowComponents(!showComponents);
    };

    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo"/>
          <header className="App-header">
              {!showComponents && (
                  <div>
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

                      <ExampleProps/>
                  </div>
              )}

              <button onClick={toggleComponents}>
                  {showComponents ? 'Hide Components' : 'Show Components'}
              </button>

              {showComponents && <UsingAllComponents/>}

              <Logo/>
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
                <Intro1 propsValue="Hello World"/>
                <Intro2/>
                <Intro3/>
                <Footer/>
            </ul>
        </div>
  );
}

function ExampleProps() {
    return (
        <div>
            <Header name="Anna" color="purple"/>
            <Main greet="Howdy"/>
            <Sidebar greet="Howdy"/>
        </div>
    )
}

export default App;
