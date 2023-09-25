import { useState } from 'react';
import './App.css';
import Carousel from './Components/Carousel';
import Collections from './Components/Collections';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  const [images, setImages] = useState([]);
  const [keyword, setKeyword] = useState('');
  return (
    <div className="App">
      <NavBar setImages={setImages} setKeyword = {setKeyword} />
      {!keyword ? <Carousel /> : ''}
      <Collections data={images} title={keyword} />
      <Footer />
    </div>
  );
}

export default App;
