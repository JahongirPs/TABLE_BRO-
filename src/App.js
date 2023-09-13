
import './App.css';
import Table  from './components/Table'
import React from 'react';
import Pagination from "./components/Pagination";
import Typed from 'typed.js';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from "./components/Home";

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Table" element={<Table/>}/>
          <Route path="/Pagination" element={ <Pagination/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
