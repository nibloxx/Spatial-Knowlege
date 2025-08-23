import React, {useState,useEffect,useRef} from 'react';
import './Navbar.css'
import { Link ,useParams,useNavigate} from "react-router-dom";
import axios from 'axios';
const root = document.getElementById("root");
const Navbar = () => {
   // const optionsList = [
      // "Home",
      // "Index",
      // "Map",
      // "Posts",
      // "About",
      // "Space-Reader",
      // "Installation",
      // "Web-Platform",
      // "Colophon",
      // "Policies",
      // "Contribute",
  //];

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const [isNavBar, setIsNavBar] = useState(true);
  //const [optionsList , SetoptionsList ] =  useState(['Home', 'Index' ,'Map','Posts' ,'Colophon']);

  const [optionsList , SetoptionsList ] =  useState([
    "Home",
    "Index",
    "Map",
    "About",
    "Space Reader",
    "Installation",
    "Web Platform",
    "Updates",
    "Colophon",
    "Policies",
    "Contribute",
  ]);

  const [dynamiclist , setDynamiclist] = useState([]);
  const dataFetchedRef = useRef(false);
  const navigate = useNavigate();
  const [menuContent, setmenuContent] = useState([]);
  const [menuContentUrl, setmenuContentUrl] = useState([]);
  const [menuContentDescription, setmenuContentDescription] = useState([]);
  useEffect(() =>{
    showNavbar(); //  this will click on every click
      //optionsList
      console.log('optionsList onload');
      console.log(window.location.pathname);

      const indexPath =  window.location.pathname.split('/');

      console.log(indexPath[1]);
  //if(window.location.pathname=="/Home"){
    console.log('optionsList');
     console.log(optionsList);

    //menus selected
    for (let i=0; i < optionsList.length; i++) {
      console.log(optionsList[i]);
      if ('/'+optionsList[i] === window.location.pathname) {
        setSelectedOption(i);
      }

      if ('/Page/'+optionsList[i] === window.location.pathname.replace('%20',' ')) {
        setSelectedOption(i);
      }

     if(indexPath[1]=='EssayNote' || indexPath[1]=='EssayView' ){
      if (optionsList[i] === 'Index') {
        setSelectedOption(i);
      }
     }
  }



    getMenuContent();

    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    //getDynamicNavbar(); // this call only one time
  });




  const getMenuContent =()  =>{
    const url = 'https://api.archive-of-spatial-knowledge.org/cms/getmenuContent';
    console.log('start');
      axios.get(`${url}`)
     .then((response)=>{
       const result = response.data;

       console.log('menu content');
        console.log(result.data[0]);
        setmenuContent(result.data[0]['title']);
        setmenuContentUrl(result.data[0]['url']);
        setmenuContentDescription(result.data[0]['description']);

     })
   .catch(error=>console.error(`Error:${error}`))
  }


  const getDynamicNavbar =()  =>{
    console.log('on click hit');
    const url = 'https://api.archive-of-spatial-knowledge.org/cms/';
    console.log('start');
      axios.get(`${url}`)
     .then((response)=>{
       const result = response.data
       console.log(result);
       result.forEach(element => {
         if (optionsList.includes(element.url)) {
          } else {
            SetoptionsList(optionsList => [...optionsList,element.url]);
          }
       });
     })
   .catch(error=>console.error(`Error:${error}`))
  }

 //console.log(dynamiclist);

// let's highlight an element under the pointer
onmouseover = function(event) {
  let target = event.options;
  target.style.background = 'pink';
};

onmouseout = function(event) {
  let target = event.target;
  target.style.background = '';
};

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  setTimeout(!setIsOptionsOpen);
  //setTimeout(setIsOptionsOpen, 8000);

  const setSelectedThenCloseDropdown = (index) => {
    console.log('index');   console.log(index);
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };

  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (e) => {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setIsOptionsOpen(false);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedOption(
          selectedOption - 1 >= 0 ? selectedOption - 1 : optionsList.length - 1
        );
        break;
      case "ArrowDown":
        e.preventDefault();
        setSelectedOption(
          selectedOption === optionsList.length - 1 ? 0 : selectedOption + 1
        );
        break;
      default:
        break;
    }
  };



  const showNavbar = ()  =>{
    //console.log('ssssss');
    if(window.location.pathname =="/" || window.location.pathname=="/Home" ||  window.location.pathname=="/Map"){
      setIsNavBar(false);
    }else {
      setIsNavBar(true);
    }
  }

  function UnsafeComponent({ html }) {
    return <div className="unsafe-html" dangerouslySetInnerHTML={{ __html: html }} />;
  }

const concernedElement = document.querySelector(".navcontainer");
document.addEventListener("mousedown", (event) => {
  if (!concernedElement.contains(event.target)) {
    setTimeout(setIsOptionsOpen, 500);
  }
});


  return (

    <div className='menu-wrapper'>
    <section className='navbarmenu-wrapper'>
      <div className="wrapper">
      <div className='logoimage'>
        <Link to="/"><img src="../../img/logo.svg" alt="logo Img" /></Link>
      </div>
      <div className="navcontainer">
        <button
          id="dropdownsmenu"
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className={isOptionsOpen ? "expanded" : ""}
          onClick={toggleOptions}
          onKeyDown={handleListKeyDown}
        >
          {optionsList[selectedOption]}
        </button>

        <ul
          className={`options ${isOptionsOpen ? "show" : ""}`}
          role="listbox"
          aria-activedescendant={optionsList[selectedOption]}
          tabIndex={-1}
          id="customenuoptions"
          onKeyDown={handleListKeyDown}
        >
          {optionsList.map((option, index) => (
            <li
              id={option}
              role="option"
              aria-selected={selectedOption === index}
              tabIndex={0}
              onKeyDown={handleKeyDown(index)}
              onClick={() => {
                setSelectedThenCloseDropdown(index);
              }}
            >
              {option=='Home' || option=='Index' || option=='Map' ||option=='Posts' ||option=='Colophon'  ?   <Link to={option}>{option}</Link> :  <Link to={"Page/"+option}>{option}</Link>}

            </li>
          ))}
        </ul>

        {/* <ul class="options show" role="listbox" aria-activedescendant="Posts" tabindex="-1" id="customenuoptions">
          <li id="Home" role="option" aria-selected="false" tabindex="0"><a href="/Home">Home</a></li>
          <li id="Index" role="option" aria-selected="false" tabindex="0"><a href="/Index">Index</a></li>
          <li id="Map" role="option" aria-selected="false" tabindex="0"><a href="/Map">Map</a></li>
          <li id="Posts" role="option" aria-selected="true" tabindex="0"><a href="/Posts">Posts</a></li>
          <li id="Colophon" role="option" aria-selected="false" tabindex="0"><a href="/Colophon">Colophon</a></li>
          <li id="Space Reader" role="option" aria-selected="false" tabindex="0"><a href="/Page/Space Reader">Space Reader</a></li>
          <li id="Installation" role="option" aria-selected="false" tabindex="0"><a href="/Page/Installation">Installation</a></li>
          <li id="Privacy Policy" role="option" aria-selected="false" tabindex="0"><a href="/Page/Privacy Policy">Privacy Policy</a></li>
          <li id="Contribute" role="option" aria-selected="false" tabindex="0"><a href="/Page/Contribute">Contribute</a></li>
          </ul> */}

      </div>
    </div>
    </section>
{ isNavBar
? <><section className='menubottomoptions'>
<ul className='menubottomtwinimg'>
  <li><Link to="Page/Contribute">Contribute</Link></li>
</ul>

<ul className='eventslistul'>
  <li className=''>
  <h4>{menuContent}:</h4>
  <p className='eventslistulactive'>
  <UnsafeComponent html={menuContentDescription} />
  </p>

  </li>
  <li>
    <a href={menuContentUrl} className='eventslink'><span>Updates</span></a>
  </li>
</ul>

<ul className='downloadreader'>
  <li>
    <div className='downloadLinks'><span>Space Reader</span></div>
    {/* <a href='https://play.google.com/store/apps/details?id=com.studioiraklisabekia.spacereader&hl=en' className='downloadmobile'>Download for mobile
    </a> */}
    <p className='downloadmobile'>*Mobile application inactive</p>
  </li>
</ul>
</section>
</> : null}
    </div>
  );
};

export default Navbar;