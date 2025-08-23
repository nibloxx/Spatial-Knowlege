import './App.css';
import Home from './components/Home/Home'
import Map from './components/Map/Map'
import Policies from './components/PrivacyPolicy/PrivacyPolicy'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import SpaceReader from './components/SpaceReader/SpaceReader'
import Installation from './components/Installation/Installation'
import WebPlatform from './components/WebPlatform/WebPlatform'
import Posts from './components/Posts/Posts'
import Colophon from './components/Colophon/Colophon'
import Contribute from './components/Contribute/Contribute'
import EssayNote from './components/EssayNote/EssayNote'
import SingleNote from './components/SingleNote/SingleNote'
import Index from './components/Index/Index'
import EssayView from './components/EssayView/EssayView'
import ReactDOM from "react-dom/client";
import DPage from './components/Page/Page'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too

const root = ReactDOM.createRoot(
  document.getElementById("root")
);


function App() {
  return (
    <div className="App">
    <div className='container'>
    <div className='pagelayouts'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Policies" element={<Policies />} />
          <Route path="Space-Reader" element={<SpaceReader />} />
          <Route path="Installation" element={<Installation />} />
          <Route path="Web-Platform" element={<WebPlatform/>} />
          <Route path="Posts" element={<Posts/>} />
          <Route path="Colophon" element={<Colophon/>} />
          <Route path="Contribute" element={<Contribute/>} />
          <Route path="EssayNote/:id" element={<EssayNote/>} />
          <Route path="SingleNote" element={<SingleNote/>} />
          <Route path="Index" element={<Index/>} />
          <Route path="EssayView/:id" element={<EssayView/>} />
          <Route path="Map" element={<Map />} />
          <Route path="Page/:id" element={<DPage/>} />
        </Routes>
      </BrowserRouter>
      </div>
      </div>
    </div>
  );
}

export default App;
