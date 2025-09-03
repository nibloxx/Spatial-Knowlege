import React from 'react';
import { Link } from "react-router-dom";
import './Posts.css'

const Posts = () => {
  return (
    <div className='cmspages-wrapper'>
      <h2 className='cmspagetitle'><span>Posts</span></h2>
      <div className='towcoloumlayout'>
        <div className='pageinfosection'>
          <div className='infosections'>
            <p>No content has been added to this page.</p>
          </div>
        </div>
        <div className='fixmenuoptionsections'>
        <div className='sectionRight'>
            <ul className='menuinfonly'>
            <li>
              <h4><Link to="/index">Current Volume <img src='/img/right-white-arrow.svg' height='12' width='12' /></Link></h4>
              <p>The first volume of the archive focuses on  Russian-occupied territories of Georgia, and the narratives erased from the spaces during the ongoing aggression, spanning three decades.</p>
            </li>
          </ul>
        </div>
        <div className='sectionRight'>
            <ul>
            <li>
              <h4><Link to="/EssayView/Home%20Across%20The%20River">Featured Essay <img src='/img/right-white-arrow.svg' height='12' width='12' /></Link></h4>
              <h3><Link to="/EssayView/Home%20Across%20The%20River">Home Across The River</Link></h3>
              <p>by Lela Jobava</p>
            </li>
          </ul>
          <ul className='menuimages'>
            <li>
              <Link to="/EssayView/Home%20Across%20The%20River">
                <img src="../img/Gali1.jpg" alt='Gali img' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Posts;