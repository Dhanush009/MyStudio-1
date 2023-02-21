import './App.css';
import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home'; 


const App = () => {
  
  return (
    <>
    <Router>
        <div className="App">

          <NavBar />
          <>
          <Routes>
            <Route path='/' element={<Home />}  />
          </Routes>
          </>

        </div>
      </Router>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
