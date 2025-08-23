import React, {useEffect, useState}  from 'react';
import './Page.css'
import { Link ,useParams,useNavigate} from "react-router-dom";
import axios from "axios";

const About = () => {
  const params = useParams();
  const [title , settitle] = useState('');
  const [description , setdescription] = useState('');
  const [pageUrl , setpageUrl] = useState('')
  useEffect(() =>{
    getPage();
    //window.location.reload();
  });

  const getPage =()  =>{
    console.log(params);
    setpageUrl(params.id);
    console.log('result2' +pageUrl);
    const url = 'https://api.archive-of-spatial-knowledge.org/cms/'+params.id;
    console.log('start');
      axios.get(`${url}`)
     .then((response)=>{
        const result = response.data;
        console.log('result2');
        console.log(result.title)
        settitle(result.title);
        setdescription(result.description);
     })
     .catch(error=>console.error(`Error:${error}`))
  }


  function UnsafeComponent({ html }) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return (
    <div className='cmspages-wrapper'>
      <h2 className='cmspagetitle'><span>{title}</span></h2>
      <div className='towcoloumlayout'>
        <div className='pageinfosection'>
          <div className='infosections'>
             <UnsafeComponent html={description} />
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

export default About;