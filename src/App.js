import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home'; 
import Login from './Components/Login';
import Registration from './Components/Registration';
import Album from './Components/Album';


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
            <Route path='/album' element={<Album />} />
          </Routes>
          </>

        </div>
      </Router>
    </>
  );
}

export default App;
