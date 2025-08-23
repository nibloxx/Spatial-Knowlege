import React, {useEffect, useState} from 'react';
import './EssayNote.css'
import { Link ,useParams,useNavigate} from "react-router-dom";
import axios from "axios";
import moment from 'moment';
const EssayNote = () => {
  const navigate = useNavigate();
  const params = useParams()
  console.log(params.id);
  const [notes , setNotes] = useState([])
  const [noteid , setNoteId] = useState(params.id)
  const [noteContent , setNoteContent] = useState([])
  const [loading, setLoading] = useState(false);
  useEffect(() =>{
    getNotes(noteid)
  }, []);


const notedisplay =(trigger)  =>{
    setLoading(true);
    if(trigger=="next"){
      const url2 = 'https://api.archive-of-spatial-knowledge.org/volumes/notedetailswithpagination?note_id='+noteid+'&trigger=next';

      axios.get(`${url2}`)
      .then((response)=>{
        const result = response.data
       // setNotes(result.data[0]);
        // setLoading(true)
        console.log(result.data.length);
        if(result.data.length){
          console.log(result.data.length);
          setNoteId(result.data[0].id);
          setNoteContent(result.data[0]);
        } else {
           getNotes(noteid);
        }

         console.log('result');
         console.warn(result)
      })
      .catch(error=>console.error(`Error:${error}`))
      .finally(() => {
        setLoading(false);
      });
      setNoteContent(' test next contnet ');
    }  else {
      const url2 = 'https://api.archive-of-spatial-knowledge.org/volumes/notedetailswithpagination?note_id='+noteid+'&trigger=pre';
      axios.get(`${url2}`)
      .then((response)=>{
        const result = response.data
      //    setNotes(result.data[0]);
        // setLoading(true)
        console.log(result.data.length);
        if(result.data.length){
          console.log(result.data.length);
          setNoteId(result.data[0].id);
          setNoteContent(result.data[0]);
        } else {
           getNotes(noteid);
        }

         console.log('result');
         console.warn(result)
      })
      .catch(error=>console.error(`Error:${error}`))
      .finally(() => {
        setLoading(false);
      });
      setNoteContent(' test previous contnet ');
    }
}


  const getNotes =(noteid)  =>{
    setLoading(true);
    const url = 'https://api.archive-of-spatial-knowledge.org/volumes/notedetails?note_id='+noteid;
    console.log('start');
      axios.get(`${url}`)
     .then((response)=>{
       const result = response.data
        setNotes(result.data[0]);
       // setLoading(true)
        setNoteContent(result.data[0]);
        console.log('result');
        console.warn(result)
     })
     .catch(error=>console.error(`Error:${error}`))
     .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className='cmspages-wrapper'>
      <h2 className='cmspagetitle'><span>Archive Index</span></h2>
      <div className='towcoloumlayoutonly'>
        <div className='innerViewLayouts'>
        <a onClick={()=>navigate('/EssayView/'+noteContent.projectTitle)} className='customHover'>
        <div className='onlytoptitle'>
          <div className='backlink'>
              <img src="../../img/page-back-arrow.svg" alt="back arrow" />
          </div>
          <div className='backtext'>
            {/* <p>Back to {notes.projectTitle}</p> */}
            <p> Back to Essay</p>
          </div>
        </div>
        </a>
        <div className='pageinfosectionly'>
          <div className='infosections'>
          {loading ? (
            <div className="loading"></div>
            ) : (
            <>
            <div className='topsection'>
              <div className='title'>
                <p>{noteContent.projectTitle}   </p>

              </div>

             <div className='count'>
                 <p> {noteContent.indexInProject}</p>
              </div>
            </div>
             </>
              )}
            <div div className='infosectionsection'>
            {loading ? <></> : <p className='contentview'>{noteContent.note_text}</p>}
             {notes.projectId !=0  ? <div className='bottomnextprev'>
             <a href='#' onClick={() => notedisplay('pre')} >  <div className='contentprev'>
                 <span>Previous</span>
                </div></a>
                <a href='#'  onClick={() => notedisplay('next')} >
                <div className='contentnext'>
                  <span>Next</span>
                </div></a>
              </div> : null }
            </div>
            {/* <div div className='infosectionsection'>
              <h5>Description:</h5>
              <p>{noteContent.description}.</p>
              <h5>Subject Tags:</h5>
              <p>{noteContent.subjectTags}. </p>
            </div> */}
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
                    <p>{noteContent.name}</p>
                    <p>{noteContent.access==1 ? "On Location" : 'Remote'}</p>
                    <p>{noteContent.isPin==1 ? <>{parseFloat(noteContent.lat).toFixed(4)}° N,{parseFloat(noteContent.lang).toFixed(4)}° E </>  :null }</p>
                    <p>{noteContent.isPin==1 ? <>{noteContent.direction} </>  :null }</p>
                    <p>{moment(noteContent.createdAt).format('D.MM.Y')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div div className='infosectionsection'>
              <div className='mapviewlink'>
                <Link to={"/Map?nodeid="+noteContent.id}>View on Map</Link>
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

export default EssayNote;