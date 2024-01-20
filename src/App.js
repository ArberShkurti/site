import './App.scss';
import HeroSections from './Components/HeroSections';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import MenuOverlay from './Components/MenuOverlay';
import ImagesCollections from './Components/ImagesCollections';
import { useState } from 'react';


function App() {
  const[navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="App">
      <Container>
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
        <HeroSections />
        <ImagesCollections />
        <img className='foto' src='./images/image-8.jpg'/>
      </Container>
      


    </div>
  );
}

export default App;
