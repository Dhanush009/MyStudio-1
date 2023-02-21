import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import '../Styles/home.css';

const Home = () => {
  return (
    <>
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
    </>
  )
}

export default Home;