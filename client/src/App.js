import './App.css';
import React from "react";
import {
  BrowserRouter as Router, Link, Routes,
  Route,
} from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";


function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">TESTING DEPL</Link>
            <Link to="/otherpage">Other Page</Link>
          </header>
          <div>
            <Routes>
              <Route exact path="/" element={<Fib/>}/>
              <Route path="/otherpage" element={<OtherPage/>}/>
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
