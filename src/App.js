import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home'; 
import Login from './Components/Login';
import Registration from './Components/Registration';


const App = () => {
  
  return (
    <>
    <Router>
        <div className="App">

          <NavBar />
          <>
          <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/login' element={<Login />}  />
            <Route path='/register' element={<Registration />}  />
          </Routes>
          </>

        </div>
      </Router>
    </>
  );
}

export default App;
