import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import {Routes,Route} from 'react-router-dom';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Webdeveloper from './components/Webdeveloper';
import Datascientist from './components/Datascientist';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path='/Projects' element={<Projects/>} />
      <Route path='/Skills' element={<Skills/>}/>
      <Route path="/Contact" element={<Contacts/>}/>
      <Route path="/webdeveloper" element={<Webdeveloper/>}/>
      <Route path="/datascience" element={<Datascientist/>} />
     </Routes>
    </div>
  );
}

export default App;
