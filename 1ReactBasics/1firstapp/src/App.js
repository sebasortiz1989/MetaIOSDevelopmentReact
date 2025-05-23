import logo from './logo.svg';
import './App.css';
import Promo from "./components/Promo";
import React, { useState } from 'react';
import Card from "./components/Card";
import CardNumber from "./components/CardNumber";
import Btn from "./components/StateComponents/Btn";
import ModeToggler from "./components/StateComponents/ModeToggler";
import Promo2 from "./components/Promo2";
import RegisterForm from "./components/StateComponents/RegisterForm";
import TextInputWithFocusButton from "./components/StateComponents/TextInputWithFocusButton";
import MealsList from "./ContextProvider/MealsList";
import MealsProvider from "./ContextProvider/MealsProvider";
import UseReduceExample from "./components/UseReducerHook/UseReduceExample";
import FruitsExercise from "./components/FruitsExercise/FruitsExercise";
import HomePage from "./components/Navigation/HomePage";
import {Routes, Route, Link} from "react-router-dom";
import AboutMe from "./components/Navigation/AboutMe";
import ComponentRenderingExercise from "./components/ComponentRenderingExercise/ComponentRenderingExercise";
import DisplayImages from "./components/DisplayMedia/DisplayImages";

/*
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
*/

const randNum = () => Math.floor(Math.random() * 100) + 1;
function App() {
    return (
        <div>
            <nav className="nav">
                {/*<a href="#" className="nav-item">Homepage</a>*/}
                <Link to="/" className="nav-item">Homepage</Link>
                <Link to="/about-me" className="nav-item">About me</Link>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about-me" element={<AboutMe/>}/>
            </Routes>

            <ComponentRenderingExercise/>

            <DisplayImages/>

            <div className="app-container">
                <h1>Task: Add three Card elements</h1>
                <div className="wrap-panel">
                    <Card h2="First card's h2" h3="First card's h3"/>
                    <Card h2="Second card's h2" h3="Second card's h3"/>
                    <Card h2="Third card's h2" h3="Third card's h3"/>
                    <CardNumber num={randNum()}/>
                    <CardNumber num={randNum()}/>
                    <CardNumber num={randNum()}/>
                    <Btn/>
                    <ModeToggler/>
                    <Promo/>
                    <Promo2/>
                    <RegisterForm/>
                    <TextInputWithFocusButton/>
                    <MealsProvider>
                        <MealsList/>
                    </MealsProvider>

                    <UseReduceExample/>
                    <FruitsExercise/>

                </div>
            </div>
        </div>
    );
}

export default App;
