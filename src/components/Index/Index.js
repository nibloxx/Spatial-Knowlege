import React, {useEffect, useState}  from 'react';
import './Index.css'
import List from "./lists";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
const Index = () => {
  const navigate = useNavigate();

  const [list , setList] = useState('')
  useEffect(() =>{
    getList()
  }, []);

  const url = 'https://api.archive-of-spatial-knowledge.org/volumes/indexlisting'
  const getList =()  =>{
      axios.get(`${url}`)
     .then((response)=>{
       const result = response.data
       setList(result);
       // setLoading(true)
        console.log('result');
        console.warn(result)
     })
     .catch(error=>console.error(`Error:${error}`))
  }



  return (
    <div className='cmspages-wrapper cmsaccordionlayout'>
      <h2 className='cmspagetitle'><span>Archive Index</span></h2>
      <div className='towcoloumlayoutonly'>
        <div className='pageinfosectionlyaccordion'>
          <div className='infosections'>
            <div className='customaccordion-wrapper'>
              <div class="accordion" id="accordionExample">
                <List list={list} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='showonlyinmobile'><img src="../../img/mobile-download-icon.svg" alt=""/>Download Space Reader</div>
    </div>
  );
};

export default Index;