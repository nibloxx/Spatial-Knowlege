import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import './Colophon.css'
import axios from "axios";
const Colophon = () => {

  const [author , setAuthor] = useState('');
  const [design , setDesign] = useState('');
  const [development , setDevelopment] = useState('');
  const [support , setSupport] = useState('');
  const [contributor , setContributor] = useState('');
  const [thanks , setThanks] = useState('');
  const [contact , setContact] = useState('');
  useEffect(() =>{
    getEssay()
  }, []);


  const url = 'https://api.archive-of-spatial-knowledge.org/cms/contactInfo';
  const getEssay =()  =>{
      axios.get(`${url}`)
     .then((response)=>{
       const result = response.data
       setAuthor(result.data[0].project_author);
       setDesign(result.data[0].platform_design);
       setDevelopment(result.data[0].platform_dev);
       setSupport(result.data[0].support);
       setContributor(result.data[0].contributors);
       setThanks(result.data[0].special_thanks);

       var contact  = result.data[0].contact;
      //  var contactData =  contact.split('||');
      //  console.log(contactData);
      //  var contactstring = '';
      //  contactData.forEach(element => {
      //   contactstring +=  "<p>"+ element + "</p>";
      //  });
       setContact(contact);
     })
     .catch(error=>console.error(`Error:${error}`))
  }

  function UnsafeComponent({ html }) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }


  return (
    <div className='cmspages-wrapper'>
      <h2 className='cmspagetitle'><span>The Archive Project</span></h2>
      <div className='towcoloumlayout'>
        <div className='pageinfosection'>
        <div class="infosections">
          <h4>Project Author:</h4><p>{author}</p>
        <h4>Platform Design:</h4><p>{design}</p>
        <h4>Platform Development:</h4><p>{development}</p>
        <h4>Made possible with the support of:</h4>
         <p><UnsafeComponent html={support} /></p>
        <h4 class="margintophigs">Contributors of the first volume:</h4>
        <p><UnsafeComponent html={contributor} /></p>
        <h4>Special thanks to:</h4>
        <p><UnsafeComponent html={thanks} /></p>
        <h4>Contact:</h4>

        <p>  <UnsafeComponent html={contact} /></p>
        </div>
        </div>
        <div className='fixmenuoptionsections'>
        <div className='sectionRight'>
            <ul className='menuinfonly'>
            <li>
              <h4><Link to="/index">Current Volume</Link></h4>
              <p>The first volume of the archive focuses on  Russian-occupied territories of Georgia, and the narratives erased from the spaces during the ongoing aggression, spanning three decades.</p>
            </li>
          </ul>
        </div>
        <div className='sectionRight'>
            <ul>
            <li>
              <h4><Link to="/EssayView/Home%20Across%20The%20River">Featured Essay</Link></h4>
              <h3><Link to="/EssayView/Home%20Across%20The%20River">Gali. Home Across The River</Link></h3>
              <p>by Lela Jobava</p>
            </li>
          </ul>
          <ul className='menuimages'>
            <li>
              <img src="../img/Gali1.jpg" alt='Gali img' />
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Colophon;