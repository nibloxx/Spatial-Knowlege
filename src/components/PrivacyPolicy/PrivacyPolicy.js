import React from 'react';
import './PrivacyPolicy.css'
import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
  return (
    <div className='cmspages-wrapper'>
      <h2 className='cmspagetitle'><span>Privacy Policy</span></h2>
      <div className='towcoloumlayout'>
        <div className='pageinfosection'>
          <div className='infosections'>
            <p>What information does the archive collect.</p>
            <p>Archive of Spatial Knowledge collects and keeps written accounts of memories submitted voluntarily by its contributors. 
            </p>
            <p>The archive collects information that the users provide through our <span data-toggle="modal" data-target="#staticBackdrop"><strong>registration</strong></span> forms and the created <span data-toggle="modal" data-target="#staticBackdrop1"><strong>entries.</strong></span>
            </p>
            <p>
            <span>These include:</span>
            <p>- Email address, display name, password, (if provided) 'about the user' information, contact information, and 'based in' location information. 
            </p>
            <p>- While using the app (if location services are enabled) the application is tracking the user's location. When creating a new note or attachin an existing note to a new location (if location services are enabled) the application is tracking the user's location. 
            </p>
            </p>
            <p>When a new note is created or an existing note is attached to a new location the coordinates of the note are saved in the archive. 
            </p>
            <p>Space Reader application might access the user's camera or photos when the user is uploading an image for an essay cover. 
            </p>
            <p>How does the archive use the information.
            </p>
            <p>Notes and essays created by the user are saved on the archive's server. These entries are not visible to the other viewers of the archive. Notes and essays created by the user are only visible to the archive administrator when the user decides to submit them for publishing. 
            </p>
            <p>The basic user information such as the email and the display name is used by the archive to contact the user when necessary in the editing process. 
            </p>
            <p>Other non-mandatory contact information is provided by the user to enable contact between the users of the archive. 
            </p>
            <p>The locations of the created notes are used by the archive to have them attached to the specific coordinates so that other users can find them on location or remotely.
            </p>
            <p>The location tracking data is not saved on the archive server. It is used immediately to provide the user with the relevant map information and the nearby content of the archive. 
            </p>
            <p>The user can decide to disable location services for the Space Reader application in which case all the archive data will still be available to the user however the Space reader section and the map section won't be able to detect the user's location and therefore calculate the relative distance and direction to the nearest notes. 
            </p>
            <p>Temporary access to photos or camera is used to upload an essay cover image to the archive database. 
            </p>
            <p>How can I manage my information stored in the archive
            </p>
            <p>Users can edit all basic user information on the user profile page, assessed through the Notebook section. 
            </p>
            <p>All entries created by the user can be edited and deleted from the Notebook section. Deleted content is not saved on the server. Therefore there is not possible to recover deleted content. 
            </p>
            <p>User can delete their account from the settings menu. With this action, all data about the user will be permanently erased from the archive database. This action is irreversible. 
            </p>
            <p>When the user has location services activated for the Space Reader and the application is in use, the archive shares the user's location information with the current map service provider for them to process the information for the archive and provide the relevant map data in return. Currently, the archive is using Google Maps services. 
            </p>
            <p>Additional security measures and precautions
            </p>
            <p>We recommend not sharing any sensitive information on the archive. Any information that might compromise your or your community's safety should not be included in notes or essays. 
            If the location where you are intending to create a note is not accessible or is unsafe, please contact the archive and we will create the note on the location for you, after which you can edit its content. If it is not safe for you to use your device to create or edit notes as your location may be tracked, the archive can create an anonymous account for you and collaborate with you on creating notes and essays so that there is no direct connection between the content and your identity.  
            </p>
            <p>How can you contact the Archive of Spatial Knowledge.
            </p>
            <p>Users can contact the archive through email forms on the Colophon/Contact page, Through our website: </p>
            <p className='footerinfo'>
            <ul>
            <li>www.spatial-knowledge.org 
            </li>
            <li>email: info@iraklisabekia.com 
            </li>
            </ul>
            </p>
            <p className='footerinfo'>or by mail: 
            </p>
            <p className='footerinfo'>
            <ul>
            <li>Studio Irakli Sabekia 
            </li>
            <li>Louwesweg 1, 1066 EA, 
            </li>
            <li>Amsterdam, the Netherlands
            </li>
            </ul>
            </p>
          </div>
        </div>
        <div className='fixmenuoptionsections'>
          <ul>
            <li>
              <h4>Current Volume</h4>
              <p>The first volume of the archive focuses on  Russian-occupied territories of Georgia, and the narratives erased from the spaces during the ongoing aggression, spanning three decades.</p>
            </li>
          </ul>
          <ul className='menuimages'>
            <li>
              <img src="../img/menuimg.jpg" alt='menu img' />
            </li>
          </ul>
        </div>
      </div>

      {/* Modal */}
      <div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div className='custom-header'>
                <div className='headertitle'>
                  <h5 class="modal-title" id="staticBackdropLabel">Project Title Goes Here Until</h5>
                </div>
                <div className='headerclose'>
                  <div className='slidercount'>N 3</div>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <img src="../img/modal-close.svg" alt='modal close' />
                  </button>
                </div>
              </div>
              
              
            </div>
            <div class="modal-body">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="caption-custom d-sm-block d-md-block">
                  <div div className='infosectionmask'>
                    <p>Note text, lorem ipsum dolor sit amet, consectetur adipiscingsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Note text, Loem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e dolore magna aliqua. Note text, Lor ipsu dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  tempor incididunt ut labore e dolore magna aliqua. Note text, Lor ipsu dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. tempor incididunt ut labore e dolore magna aliqua. Note text, Lor ipsu dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <p>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  tempor incididunt ut labore e dolore magna aliqua. Note text, Lor ipsu dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. tempor incididunt ut labore e dolore magna aliqua. Note text, Lor ipsu dolor sit amet, consectetur adipiscidunt ut</p>
                  </div>
                  <div div className='infosectionmask'>
                    <h5>Description:</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h5>Subject Tags:</h5>
                    <p>Lorem, ipsum, dolor sit, amet, consectetur, adipiscing, elit. </p>
                  </div>
                  <div div className='infosectionmask infocenteralign'>
                    <p><span>Author:</span><span1>Display Name</span1></p>
                    <p><span>Accessability:</span>On Location / Remote </p>
                    <p><span>Location:</span>52.3676° N, 4.9041° E</p>
                    <p><span>Bearing:</span>132° </p>
                    <p><span>Created:</span>02.22.2022  22:20</p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="caption-custom d-sm-block d-md-block">
                  <p>Two Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <div class="caption-custom d-sm-block d-md-block">
                  <p>Three Some representative placeholder content for the first slide.</p>
                </div>
              </div>
            </div>
            
          </div>
            </div>
            <div class="modal-footer">

            <div className='carouselprev'>
              <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                <span className='carousearrowimgleft'><img src="../img/modal-prev.svg" alt='modal close' /> <span1>Back</span1></span>
              </button>                           
            </div>
           
            <div className='carouselcenter'>
              <p><Link to="/EssayNote">View Notes</Link></p>
            </div>

            <div className='carouselnext'>
              <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                <span className='carousearrowimgright'><span1>Next</span1><img src="../img/modal-next.svg" alt='modal close' /></span>
              </button>         
            </div>

           </div>
          </div>
        </div>
      </div>
      {/* Modal End */}


            {/* Modal */}
            <div class="modal fade" id="staticBackdrop1" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <div className='custom-header'>
                    <div className='headertitle'>
                      <h5 class="modal-title" id="staticBackdropLabel">Author’s name</h5>
                    </div>
                    <div className='headerclose'>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <img src="../img/modal-close.svg" alt='modal close' />
                      </button>
                    </div>
                  </div>
                  
                  
                </div>
                <div class="modal-body">
                
                  <div class="carousel-item active">
                    <div class="caption-custom d-sm-block d-md-block">
                      <div div className='infosectionmask'>
                        <p>Note text, lorem ipsum dolor sit amet, consectetur adipiscingsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Note text, Loem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e dolore magna aliqua. Note text, Lor ipsu dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  tempor incididunt ut labore e dolore magna aliqua. Note text, Lor ipsu dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. tempor incididunt ut labore e dolore magna aliqua. Note text, Lor ipsu dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        <p>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  tempor incididunt ut labore e dolore magna aliqua. Note text, Lor ipsu dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. tempor incididunt ut labore e dolore magna aliqua. Note text, Lor ipsu dolor sit amet, consectetur adipiscidunt ut</p>
                      </div>
                      <div div className='infosectionmask'>
                        <h5>Description:</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <h5>Subject Tags:</h5>
                        <p>Lorem, ipsum, dolor sit, amet, consectetur, adipiscing, elit. </p>
                      </div>
                      <div div className='infosectionmask infocenteralign'>
                        <p><span>Author:</span><span1>Display Name</span1></p>
                        <p><span>Accessability:</span>On Location / Remote </p>
                        <p><span>Location:</span>52.3676° N, 4.9041° E</p>
                        <p><span>Bearing:</span>132° </p>
                        <p><span>Created:</span>02.22.2022  22:20</p>
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
                
              
                <div class="modal-footer">
    
                <div className='carouselprev'>&nbsp;</div>
               
                <div className='carouselcenter'>
                  <p><Link to="/SingleNote">View Notes</Link></p>
                </div>
    
                <div className='carouselnext'>&nbsp;</div>
    
               </div>
              </div>
            </div>
          </div>
          {/* Modal End */}
          <div className='showonlyinmobile'><img src="../../img/mobile-download-icon.svg" alt=""/>*Mobile application inactive</div>
    </div>
  );
};

export default PrivacyPolicy;