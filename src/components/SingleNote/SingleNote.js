import React from 'react';
import './SingleNote.css'
import { Link } from "react-router-dom";
const SingleNote = () => {
  return (
    <div className='cmspages-wrapper'>
      <h2 className='cmspagetitle'><span>Archive Index</span></h2>
      <div className='towcoloumlayoutonly'>
        <div className='innerViewLayouts'>
          <div className='onlytoptitle'>
            <div className='backlink'>
              <Link to="">
                <img src="../../img/page-back-arrow.svg" alt="back arrow" />
              </Link>
            </div>
            <div className='backtext'>
              <p>Back to Loose Notes and Essays</p>
            </div>
          </div>
          <div className='pageinfosectionly'>
            <div className='infosections'>
              <div className='topsection'>
                <div className='title'>
                  <p>Author’s Display Name</p>
                </div>
              </div>
              <div div className='infosectionsection'>
                <p className='contentview'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat  velit esse cillum dolore eu fugiat nulla pariatur. aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat  velit esse cillum dolore eu fugiat nulla pariatur. aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitat ion ullamco laboris nisi ut aliquip.</p>
              </div>
              <div div className='infosectionsection'>
                <h5>Description:</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h5>Subject Tags:</h5>
                <p>Lorem, ipsum, dolor sit, amet, consectetur, adipiscing, elit. </p>
              </div>
              <div div className='infosectionsection'>
                <div className='otherlayout'>
                  <div className='sectionslayout'>
                    <div className='leftsection'>
                      <p>Author:</p>
                      <p>Accessability:</p>
                      <p>Location:</p>
                      <p>Bearing:</p>
                      <p>Created:</p>
                    </div>
                    <div className='rightsection'>
                      <p>Display Name</p>
                      <p>On Location / Remote</p>
                      <p>52.3676° N, 4.9041° E</p>
                      <p>132°</p>
                      <p>02.22.2022  22:20</p>
                    </div>
                  </div>
                </div>
              </div>
              <div div className='infosectionsection'>
                <div className='mapviewlink'>
                  <Link to="">View on Map</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='showonlyinmobile'><img src="../../img/mobile-download-icon.svg" alt=""/>Download Space Reader</div>
    </div>
  );
};

export default SingleNote;