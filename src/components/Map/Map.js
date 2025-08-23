import React, {useEffect, useState} from 'react';
import './Map.css'
import { Link } from "react-router-dom";
import { GoogleMap, useJsApiLoader,useLoadScript,  Marker, InfoWindow, } from '@react-google-maps/api';
import { formatRelative } from "date-fns";
import axios from 'axios';
import moment from 'moment';

const mapContainerStyle = {
  width: '100%',
  height: '100vh'
};

const libraries = ["places"];

const center = {
  lat:  26.2124,
  lng: 78.1772,
};

const mapStyles =[
    {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#a3a3a3"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#e6e6e6"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#828282"
          },
          {
            "weight": 1
          }
        ]
      },
      {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fafafa"
          }
        ]
      },
      {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#cfcfcf"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#e0e0e0"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
];


const options = {
   styles: mapStyles,
   disableDefaultUI: true,
   zoomControl: false,
   minZoom: 2,
};



const Map = () => {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAelbsli4CmLIYTjRegPFtc4UkzZXO6odo',
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const  [array ,setArray] = React.useState([]);
  const [mapmarker, setmapmarker] = React.useState('/dark-map-pin.svg');
  const [mapmarkerwhite, setmapmarkerwhite] = React.useState('/lite-map-pin.svg');
  const [text, setText] = React.useState({});

  const [noteid , setNoteId] = useState(0)
  const [noteContent , setNoteContent] = useState('')
  const [noteContent2 , setNoteContent2] = useState([])
  const [noteTitle , setNoteTitle] = useState('')
 const [noteTitleindexInProject , setNoteTitleindexInProject] = useState('')

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
    ]);
  }, []);

  const mapRef = React.useRef();

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
    const clientData = {
      "userId": "9",
      "volumeId":"",
      "projectId":"",
      "tagName":"",
      "authorName":"",
      "startDate":"",
      "endDate":""
  }
    axios.post(`https://api.archive-of-spatial-knowledge.org/notes/mapnotes`, clientData) //To run map page in localhost simply copy paste this url in browser - http://192.168.29.39:3000/Map
    .then(res => {
       console.log(res.data);
       res.data.note.forEach(element => {
        console.log(element.note_text);

        var paginationClass = 'row d-none';
        if(element.projectId!=0){
            paginationClass = 'row';
        }

        setArray((current) => [
          ...current,
          {lat:parseFloat(element['lat']), lng: parseFloat(element['lang']), time: new Date(),title:element.name , note_text :element.note_text ,paginationClass:paginationClass ,projectId:element.projectId ,noteID:element.id , paginationTop: element.indexInProject}
        ]);


          setText({
            lat:  parseFloat(element['lat']),
            lng: parseFloat(element['lang']),
          });


       });
      //  console.log('array 000');
      //  console.log('array')
      //  console.log(array)
    });

    // console.log('array')
    //  console.log(array)

    setMarkers((current) => [
      ...current,
    ]);


    //setSelected({ lat: '26.2124', lng: '78.1772' });

  }, []);


  console.log('markers');
  console.log(array);


  useEffect(() =>{
    const search = window.location.search;
     console.log('search'); console.log(search);
     const noteid = search.split('?nodeid=');
     console.log(noteid[1]);
     if(noteid[1]){
        getNotes(noteid[1]);
     }
  }, []);

  const getNotes =(noteid)  =>{
    console.log('on click hit 2222' +noteid);
    const url = 'https://api.archive-of-spatial-knowledge.org/volumes/notedetails?note_id='+noteid;
    console.log('start');
      axios.get(`${url}`)
     .then((response)=>{
       const result = response.data
          console.log(result);
          setNoteId(result.data[0].id);
          setNoteContent(result.data[0].note_text);
          setNoteTitle(result.data[0].name);
          setNoteContent2(result.data[0]);
          setNoteTitleindexInProject(result.data[0].indexInProject);

          var paginationClass = 'row d-none';
          if(result.data[0].projectId!=0){
          paginationClass = 'row';
          }
          setSelected({lat:parseFloat(result.data[0].lat), lng: parseFloat(result.data[0].lang), time: new Date(),title:result.data[0].name , note_text :result.data[0].note_text ,paginationClass:paginationClass ,projectId:result.data[0].projectId ,noteID:result.data[0].id , paginationTop: result.data[0].indexInProject});


     })
     .catch(error=>console.error(`Error:${error}`))
  }


  const notedisplay =(trigger,note_id)  =>{

    setNoteId(note_id);
    if(trigger=="next"){
      const url2 = 'https://api.archive-of-spatial-knowledge.org/volumes/notedetailswithpagination?note_id='+note_id+'&trigger=next';

      axios.get(`${url2}`)
      .then((response)=>{
          const result = response.data
          // setNotes(result.data[0]);
          // setLoading(true)
        console.log(result.data.length);
        console.log('result_deepak');

        console.log(result);
        console.log(url2);

        if(result.data.length){
          console.log(result.data.length);
          setNoteId(result.data[0].id);
          setNoteContent(result.data[0].note_text);
          setNoteContent2(result.data[0]);
          setNoteTitle(result.data[0].name);
          setNoteTitleindexInProject(result.data[0].indexInProject);
            // map view move to next and back
            var paginationClass = 'row d-none';
            if(result.data[0].projectId!=0){
            paginationClass = 'row';
            }
            setSelected({lat:parseFloat(result.data[0].lat), lng: parseFloat(result.data[0].lang), time: new Date(),title:result.data[0].name , note_text :result.data[0].note_text ,paginationClass:paginationClass ,projectId:result.data[0].projectId ,noteID:result.data[0].id , paginationTop: result.data[0].indexInProject});

        } else {
          // getNotes(noteid);
        }

         console.log('result');
         console.warn(result)
      })
      .catch(error=>console.error(`Error:${error}`))
     // setNoteContent(' test next contnet ');
    }  else {

      const url2 = 'https://api.archive-of-spatial-knowledge.org/volumes/notedetailswithpagination?note_id='+note_id+'&trigger=pre';
      axios.get(`${url2}`)
      .then((response)=>{
        const result = response.data
      //    setNotes(result.data[0]);
        // setLoading(true)
        console.log(result.data.length);
        if(result.data.length){
          console.log(result.data.length);
          setNoteId(result.data[0].id);
          setNoteContent(result.data[0].note_text);
          setNoteTitle(result.data[0].name);
          setNoteContent2(result.data[0]);
           setNoteTitleindexInProject(result.data[0].indexInProject);

           // map view move to next and back
           var paginationClass = 'row d-none';
           if(result.data[0].projectId!=0){
              paginationClass = 'row';
           }
           setSelected({lat:parseFloat(result.data[0].lat), lng: parseFloat(result.data[0].lang), time: new Date(),title:result.data[0].name , note_text :result.data[0].note_text ,paginationClass:paginationClass ,projectId:result.data[0].projectId ,noteID:result.data[0].id , paginationTop: result.data[0].indexInProject});


        } else {
          // getNotes(noteid);
        }

         console.log('result');
         console.warn(result)
      })
      .catch(error=>console.error(`Error:${error}`))
     // setNoteContent(' test previous contnet ');
    }
}


  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div className='mapwarpper'>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={7}
        center={text}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}

      >
     {array.map((marker) => (
        marker.projectId==0
         ? (<Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              console.log('onc lcick me ');
              setSelected(marker);
              setNoteId(marker.noteID);
              getNotes(marker.noteID);

            }}
            icon={{
              url: mapmarkerwhite,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />) :  (<Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
              setNoteId(marker.noteID);
              getNotes(marker.noteID);
            }}
            icon={{
              url: mapmarker,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />)

        ))}

{selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
            onDomReady={()=>{
              setNoteId(selected.noteID)
            }}
          >
            <div className='custom-modal-layout'>
            <div className='headertitle'>
                    <h5 className="modal-title" id="staticBackdropLabel">{noteTitle!='' ? noteTitle : selected.title}</h5>
                    <span className='mapslidecount'>{noteTitleindexInProject!='' ? noteTitleindexInProject : selected.paginationTop}</span>
             </div>
            <div className="carousel-item active">
                    <div className="caption-custom d-sm-block d-md-block">
                        <div className='infosectionmask'>
                            <p>{noteContent!='' ? noteContent : selected.note_text}
                            </p>
                        </div>
                        <div className='newInfoSection'>
                            <div div className='infosectionsection'>
                                <h5>Description:</h5>
                                <p>{noteContent2.description}.</p>
                                <h5>Subject Tags:</h5>
                                <p className='subjectDes'>{noteContent2.subjectTags}.</p>
                            </div>
                            <div className='otherlayout'>
                                <div className='sectionslayout'>
                                    <div className='leftsection'>
                                        <p>Author: </p>
                                        <p>Accessability: </p>
                                        <p>Location: </p>
                                        <p>Bearing: </p>
                                        <p>Created: </p>
                                    </div>
                                    <div className="rightsection">
                                        <p className='rightAuthor'><span>{noteContent2.name}</span></p>
                                        <p>{noteContent2.access==1 ? "On Location" : 'Remote'}</p>
                                        <p>{noteContent2.isPin==1 ? <>{parseFloat(noteContent2.lat).toFixed(4)}° N,{parseFloat(noteContent2.lang).toFixed(4)}° E </>  :null }</p>
                                        <p>{noteContent2.isPin==1 ? <>{noteContent2.direction} </>  :null }</p>
                                        <p>{moment(noteContent2.createdAt).format('D.MM.Y')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                       <div className='border-next'></div>
                      <div className='nextpreviouswrapper' >
                        <a href='#' className='previouslinks' onClick={() => notedisplay('pre',noteid)} >Back</a>
                        <a className='middlelinks'  href={"/EssayNote/"+selected.noteID}>View in Index</a>
                        <a href='#'className='nextlinks'  onClick={() => notedisplay('next',noteid)} >Next</a>
                      </div>

                  </div>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default Map;