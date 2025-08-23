import React from 'react'
import {Link , useNavigate} from "react-router-dom"
import moment from 'moment';
//  function List(props) {
    const List = (props)=>{
    const navigate = useNavigate();
    //    console.log(props.list)
  const {list} = props;
  console.log('lists : ',list);
  const innerlist = list.data;
  console.log('listsss  : ',innerlist);
 if(list.data){
  return(
   list.data.map ((item) =>{
   return(
    <div key={item.volumeId}>
      <div class="card">
    <div class="card-header" id={'headingTwo'+item.volumeId}>
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-right collapsed customcollapse" type="button" data-toggle="collapse" data-target={'#collapseTwo'+item.volumeId} aria-expanded="false" aria-controls="collapseTwo">
        <img src="../../img/page-back-arrow.svg" alt="" className='accordionmovearrow text-left'/>
           {item.name}
        </button>
      </h2>
    </div>
    <div id={'collapseTwo'+item.volumeId} class={item.volumeId==1 ? "collapse show" : "collapse "} aria-labelledby={'headingTwo'+item.volumeId}>
        <div class="card-body">
         <div className='infosection'>
            <h2> {item.title} </h2>
            <p> {item.description} </p>
        </div>
    <div className='mediasection'>
        {/* projects list  */}
  { item.projects.map ((project) =>{
      console.log(project);
     return ( <div className='mediatiles'>
     <div className='tilesimage'>
      {/*<Link to={'/EssayView/'+project.projectTitle} onClick={()=>navigate('/EssayView/'+project.projectTitle)}><img src={project.image} alt='index image' width={'80%'} /></Link>*/}
      <img src={project.image} alt='index image' width={'80%'} data-toggle="modal" data-target="#exampleModal2"/>
     </div>
     <div className='tilesinfo'>
      <Link to={'/EssayView/'+project.projectTitle} onClick={()=>navigate('/EssayView/'+project.projectTitle)}> 
        <div className='titletoplist'>
          <h2>{project.projectTitle}</h2> 
        </div>
        <div className='titlebottomlist'>
            <p>{project.name}</p>
          <span>{moment(project.createdAt).format('D.MM.Y')}</span>
        </div>
        </Link>
     </div>
  {/* Image Modal  */}
    <div class="modal fade imagePopupModal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <img src={project.image} alt='index image' class="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
   </div>);
    })}


      <div className='maplocation-wrapper'>
       {/* notes list */}
       { item.notes.map ((note) =>{
       return ( <Link to={"/EssayNote/"+note.id} className="wholelink"><div className='maplocation'>
          <div className='locationpin'>
            {note.projectId ==0 ?
             <Link to={"/EssayNote/"+note.id}><img src="../img/mapcirclepin.png" alt=''/></Link>
             :
             <Link to={"/EssayNote/"+note.id}><img src="../img/mapfillpin.png" alt=''/></Link>
             }
          </div>
          <div className='locationdetails'>
            <p>{note.note_text}</p>
            <div className='locationauthdate'>
              <span>{note.name}</span>
              <span1>{moment(note.createdAt).format('D.MM.Y')}</span1>
            </div>
          </div>
        </div></Link>)
       })}

      </div>

    </div>
      </div>
    </div>
  </div>


                  </div>
                )
            })
        )
    }
    else{
       //return (<div className='loading-data'><img src="../../img/loading.gif" alt=""/></div>)
     }
//     }
//   return (
//     <>
//     {displayList(props)}
//     </>
//   )
// }
        }
export default List