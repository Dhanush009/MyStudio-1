import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CircleIcon from '@mui/icons-material/Circle';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import '../Styles/Nav.css';

const NavBar = () => {
    var down = false;
    var d = false;
    const notifRef = useRef(null);
    const notifIcon = useRef(null);
    const notifCircle = useRef(null);
    const profRef = useRef(null);
    const profArrow = useRef(null);

    useEffect( () => {
        document.addEventListener("click",handleClickOutside,true)
    },[])

    function handleClickOutside (e){
        if(!notifIcon.current.contains(e.target)){
        notifRef.current.className = 'notifyDown';
        }
        if(!profArrow.current.contains(e.target)){
        profRef.current.className = "profDown";
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

    function handleArrow () {
        if(d){
        profRef.current.className = "profDown";
        d = false;
        }else{
        profRef.current.className = "profile-box";
        d = true;
        }
    }
  return (
    <>
      <nav className="navbar">
        <div className="nav-placer">
          <div className="nav-title-placer">
            <NavLink activeClassName="active" to='/'>
              <h1 className="nav-title">MyStudio</h1> 
            </NavLink> 
          </div>
          <div className="nav-user-placer">
            <span ref={notifIcon} className="nav-icon" onClick={handleClick}>
              <NotificationsNoneIcon /> <span ref={notifCircle} className="notifi-num"><CircleIcon /></span>
            </span>
            <div ref={notifRef} className="notifyDown" >
              <h2>Notification <span>2</span></h2>
              <div className="notifi-box-item">
                <div className="notifi-box-text">
                  <h4>Free Offer</h4>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                </div>
              </div> 
              <div className="notifi-box-item">
                <div className="notifi-box-text">
                  <h4>Special Offer</h4>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                </div>
              </div>  
            </div>
            <h3 className="nav-user">Hi, aragorn</h3>
            <span ref={profArrow} className="nav-icon" onClick = {handleArrow}>
              <ArrowDropDownIcon />
            </span>
            <div ref={profRef} className="profDown" >
              <div className="profile-box-item">
                <div className="profile-box-text">
                  <h4>Profile</h4>
                </div>
                <div className="profile-box-icon">
                  <span><PermIdentityIcon /></span>
                </div>
              </div> 
              <div className="profile-box-item">
                <div className="profile-box-text">
                  <h4>Logout</h4>
                </div>
                <div className="profile-box-icon">
                  <span><LogoutIcon /></span>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavBar;