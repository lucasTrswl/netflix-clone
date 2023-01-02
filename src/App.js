import React from 'react';
import './App.css';
import Nav from './Nav';
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const user = null;

  return (
    <div className="app">
  



    <Router>
    <Routes>

       {!user ? (
        <Login/>
       ):
      (
        <Route exact path="/" element={<HomeScreen/>}>
        
        </Route>
      )}

        

        <Route path="/test" element="Test">
          
        </Route>
        </Routes>

    </Router>


    </div>
  );
}

export default App;
