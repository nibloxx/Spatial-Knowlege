import React, {useEffect, useState} from 'react';
import './EssayView.css'
import { Link ,useParams,useNavigate} from "react-router-dom";
import axios from "axios";
import moment from 'moment';

const EssayView = () => {

  // const history = useNavigate();
  //   console.log(history);
  //   function handleSubmit(e) {
  //       e.preventDefault();

  //       history('/home');
  //   }

  let navigate = useNavigate();
  console.log(navigate);
    function routeChange(e) {
      e.preventDefault();
      let path = `newPath`;
      navigate(path);
      //navigate('/home');
  }

const params = useParams()
 //console.log(params);
const [essay , setEssay] = useState('')
const [notes , setNotes] = useState([])

useEffect(() =>{
  getEssay()
}, []);


const url = 'https://api.archive-of-spatial-knowledge.org/volumes/projectdetailswithtitle?title='+params.id;
const getEssay =()  =>{
    axios.get(`${url}`)
   .then((response)=>{
     const result = response.data
     setEssay(result.data[0].projectData[0]);
     setNotes(result.data[0].noteData);
     // setLoading(true)
      //console.log('result');
      //console.warn(result)
   })
   .catch(error=>console.error(`Error:${error}`))
}

//console.log(essay);
//console.log(notes);



  return (
    <div className='cmspages-wrapper'>
      <h2 className='cmspagetitle'><span>Archive Index</span></h2>
      <div className='towcoloumlayoutonly'>
        <div className='innerViewLayouts'>
        <a onClick={()=>navigate('/Index')} className='customHover'>
          <div className='onlytoptitle'>
            <div className='backlink'>
              {/*<Link to="" onClick={routeChange}>*/}
                <img src="../../img/page-back-arrow.svg" alt="back arrow" />
            </div>
            <div className='backtext'>
              <p>Back to {essay.VolumeName}</p>
            </div>
          </div>
          </a>

          <div class="modal fade imagePopupModal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <img src={essay.image} alt='index image' class="img-fluid"/>
          </div>
        </div>
      </div>
    </div>

          <div className='pageinfosectionly'>
            <div className='infosections'>

              <div className='mediasection'>
                <div className='easyviewinfo'>
                <div className='mediatiles'>
                <div className='tilesimage'>
                  <img src={essay.image} alt='index image' className='customHover'  width={'80%'}   data-toggle="modal" data-target="#exampleModal"/>
                </div>
                <div className='tilesinfo'>
                  <div className='titletoplist'>
                    <h2>{essay.projectTitle} </h2>
                  </div>
                  <div className='titlebottomlist'>
                    <p>{essay.authorName} </p>
                    <span>{moment(essay.createdAt).format('D.MM.Y')}</span>
                  </div>
                </div>
              </div>

                  <div className='infosection'>
                    <h2>Discription:</h2>
                    <p>{essay.description}</p>
                  </div>
                  <div className='infosection'>
                    <h2>Subject Tags:</h2>
                    <p>{essay.subjectTags}.</p>
                  </div>
                  <div className='infosection'>
                    <h2>Notes:</h2>
                  </div>
                </div>

                        <div className='maplocation-wrapper'>


        { notes.map ((note) =>{
        return (
          <a onClick={()=>navigate('/EssayNote/'+note.id)}  className="wholelink"><div className='maplocation'>
            <div className='locationpin'>
            <Link to={"/EssayNote/"+note.id}><img src="../img/mapfillpin.png" alt=''/></Link>
            </div>
            <div className='locationdetails'>
              <p><Link to={"/EssayNote/"+note.id}>{note.noteText}</Link></p>
              <div className='locationauthdate'>
                <span>{note.indexInProject}</span>
                <span1>{moment(note.createdAt).format('D.MM.Y')}</span1>
              </div>
            </div>
          </div></a>)
        })}

                        </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <div className='showonlyinmobile'><img src="../../img/mobile-download-icon.svg" alt=""/>*Mobile application inactive</div>
    </div>
  );
};

export default EssayView;