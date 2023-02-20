import './App.css';
import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CircleIcon from '@mui/icons-material/Circle';


const App = () => {
  var down = false;
  const notifRef = useRef(null);
  const notifIcon = useRef(null);
  const notifCircle = useRef(null);

  useEffect( () => {
    document.addEventListener("click",handleClickOutside,true)
  },[])

  function handleClickOutside (e){
    if(!notifIcon.current.contains(e.target)){
      notifRef.current.className = 'notifyDown';
    }
  }

  function handleClick () {
    if(down){
      notifRef.current.className = "notifyDown";
      down = false;
    }else{
      notifRef.current.className = "notifi-box";
      notifCircle.current.className="notifi-num-click";
      down = true;
    }
  }
  
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-placer">
          <div className="nav-title-placer">
            <h1 className="nav-title">MyStudio</h1>
          </div>
          <div className="nav-user-placer">
            <span ref={notifIcon} className="nav-icon" onClick={handleClick}>
              <NotificationsNoneIcon /> <span ref={notifCircle} className="notifi-num"><CircleIcon /></span>
            </span>
            <div ref={notifRef} className="notifyDown" >
              <h2>Notification <span>17</span></h2>
              <div className="notifi-box-item">
                <div className="notifi-box-text">
                  <h4>Free Offer</h4>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                </div>
              </div> 
            </div>
            <h3 className="nav-user">Hi, aragorn</h3>
            <span className="nav-icon">
              <ArrowDropDownIcon />
            </span>
          </div>
        </div>
      </nav>

      {/* Search bar Div */}
      <div className="galleryBar">
        <div className="allgallery">
          <div className="galIcon"><CollectionsIcon /></div>
          <div className='galContent'>
            <h2 >ALL GALLERIES</h2>
            <h6 >Albums: 2</h6>
          </div>
        </div>
        <div className="search">
          <div className="searchInputs">
            <input type="text" placeholder="Search" />
            <div className="searchIcon"><SearchIcon /></div>
            <div>
              <button className="addBtn"><FilterAltIcon /></button>
            </div>
          </div>
        </div>
        <div className="addGal">
          <button className="addGalBtn">
            <span className='btnText'>Add Gallery</span>
            <span className='btnIcon'><AddIcon /></span>
          </button>
        </div>
      </div>

      {/* Album Images Div */}
      <div className="card-list">

        <div className="card">
          <article className="content">
            <a href="#0">
              <div className="content-overlay"></div>
              <img className="content-image" src="/rashford.jpeg" alt="" />
              <div className="content-details fadeIn-bottom">
                <h2 className="content-title">Marcus Rashford</h2>
              </div>
              <div className="content-btn">
                <button className="content-icon">
                  <MoreVertIcon />
                  <div className="albDropdown">
                    <div className='albDropItems'>
                      <span className="dropIcon"><RemoveRedEyeIcon /> </span> 
                      <div className="dropText">Preview</div>
                    </div>
                    <div className='albDropItems'>
                      <div className="dropIcon"><DeleteIcon /></div>
                      <div className="dropText">Delete</div>
                    </div>
                  </div>
                </button>
              </div>
            </a>
					</article>
        </div>

      </div>

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
