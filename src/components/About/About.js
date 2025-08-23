import React from 'react';
import { Link } from "react-router-dom";
import './About.css'

const About = () => {
  return (
    <div className='cmspages-wrapper'>
      <h2 className='cmspagetitle'><span>The Archive Project</span></h2>
      <div className='towcoloumlayout'>
        <div className='pageinfosection'>
        <div className='infosections'>
            <h4>About the Archive</h4>
            <p>The Archive of Spatial Knowledge addresses the issues of spatial justice. It investigates the expressions of spatial hegemony manifested in the deliberate erasing and suppression of spatial narratives. The archive gathers idiosyncratic spatial and social memory of individuals and groups who were forcefully displaced from the geographies of their origin or are denied representation and the possibility to build historical and cultural continuity in the locations of their current residence.</p>
            <p>The project's digital platform collects narratives pushed out of physical spaces and connects them back to their original geographic locations in a virtual layer, creating a protected pool of knowledge overlaid on the physical landscape.</p>
            <p>The archive invites individuals from its current geography of focus to contribute their stories and attach them to physical locations using the archive's mobile digital tool. The archive viewers use the same mobile application to access the preserved accounts while on location (or remotely). Functioning as a spatial intervention, the platform allows viewers to juxtapose erased stories and the reality of physical spaces.</p>
            <p>Archive of Spatial Knowledge is a project by designer and artistic researcher Irakli Sabekia. </p>
            <p>This project was made possible with the support of</p>
            <p>The Creative Industries Fund NL in 2021, and by the partnership of Ars Electronica, Art Collection Deutsche Telekom and the Sustainable AI Lab, during the ArtScience Residency 2022.</p>
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
    </div>
  );
};

export default About;