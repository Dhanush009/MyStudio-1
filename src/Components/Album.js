import React from 'react';
import '../Styles/album.css';
import CollectionsIcon from '@mui/icons-material/Collections';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';

const Album = () => {
  return (
    <>
    <div className="albgalleryBar">
        <div className="albgallery">
            <div className="albgalIcon">
                <CollectionsIcon />
            </div>
            <div className='albgalContent'>
                <h2 >Manchester United</h2>
            </div>
        </div>
        <div className="downlGal">
            <button className="downlGalBtn">
                <span className='btnText'>Download</span>
                <span className='btnIcon'><DownloadIcon /></span>
            </button>
            <button className="downlGalBtn">
                <span className='btnText'>Delete</span>
                <span className='btnIcon'><DeleteIcon /></span>
            </button>
        </div>
    </div>
        
        <div className="alb-wrapper">
            
            <div className='imgContainer'>
                <img className='albImg' src='/rashford.jpeg' alt="" />
                <div className='imgOverlay imgOverlay--blur' >
                    <div className='img_icons'>
                        <DownloadIcon className='imgDownlIcon'/>
                        <DeleteIcon className='imgDelIcon'/>
                    </div>
                </div>
            </div>

            <div className='imgContainer'>
                <img className='albImg' src='/bruno.jpeg' alt="" />
                <div className='imgOverlay imgOverlay--blur' >
                    <div className='img_icons'>
                        <DownloadIcon className='imgDownlIcon'/>
                        <DeleteIcon className='imgDelIcon'/>
                    </div>
                </div>
            </div>

            <div className='imgContainer'>
                <img className='albImg' src='/casemiro.jpeg' alt="" />
                <div className='imgOverlay imgOverlay--blur' >
                    <div className='img_icons'>
                        <DownloadIcon className='imgDownlIcon'/>
                        <DeleteIcon className='imgDelIcon'/>
                    </div>
                </div>
            </div>

            <div className='imgContainer'>
                <img className='albImg' src='/dalot.jpeg' alt="" />
                <div className='imgOverlay imgOverlay--blur' >
                    <div className='img_icons'>
                        <DownloadIcon className='imgDownlIcon'/>
                        <DeleteIcon className='imgDelIcon'/>
                    </div>
                </div>
            </div>
            
            <div className='imgContainer'>
                <img className='albImg' src='/degea.jpeg' alt="" />
                <div className='imgOverlay imgOverlay--blur' >
                    <div className='img_icons'>
                        <DownloadIcon className='imgDownlIcon'/>
                        <DeleteIcon className='imgDelIcon'/>
                    </div>
                </div>
            </div>

            <div className='imgContainer'>
                <img className='albImg' src='/eriksen.jpeg' alt="" />
                <div className='imgOverlay imgOverlay--blur' >
                    <div className='img_icons'>
                        <DownloadIcon className='imgDownlIcon'/>
                        <DeleteIcon className='imgDelIcon'/>
                    </div>
                </div>
            </div>

            <div className='imgContainer'>
                <img className='albImg' src='/fred.jpeg' alt="" />
                <div className='imgOverlay imgOverlay--blur' >
                    <div className='img_icons'>
                        <DownloadIcon className='imgDownlIcon'/>
                        <DeleteIcon className='imgDelIcon'/>
                    </div>
                </div>
            </div>

            <div className='imgContainer'>
                <img className='albImg' src='/garnacho.jpeg' alt="" />
                <div className='imgOverlay imgOverlay--blur' >
                    <div className='img_icons'>
                        <DownloadIcon className='imgDownlIcon'/>
                        <DeleteIcon className='imgDelIcon'/>
                    </div>
                </div>
            </div>

            <div className='imgContainer'>
                <img className='albImg' src='/haw.jpeg' alt="" />
            </div>
            <div className='imgContainer'>
                <img className='albImg' src='/jadon.jpeg' alt="" />
            </div>
            <div className='imgContainer'>
                <img className='albImg' src='/L-Martinez.jpg' alt="" />
            </div>
            <div className='imgContainer'>
                <img className='albImg' src='/maguire.jpeg' alt="" />
            </div>
            <div className='imgContainer'>
                <img className='albImg' src='/malacia.jpeg' alt="" />
            </div>
            <div className='imgContainer'>
                <img className='albImg' src='/Sabitzer.jpg' alt="" />
            </div>
            <div className='imgContainer'>
                <img className='albImg' src='/varane.jpeg' alt="" />
            </div>
            <div className='imgContainer'>
                <img className='albImg' src='/weghorst.jpg' alt="" />
            </div>
        </div>
    </>  
  )
}

export default Album;