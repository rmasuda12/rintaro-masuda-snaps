import './App.scss'
import Header from './components/Header/Header.jsx';
import Filters from './components/Filters/Filters.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Hero from './components/Hero/Hero.jsx';
import { useState } from 'react';

function App() {
  const [filterStatus, setFilterStatus] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");

  function filtersClickHandler() {
      setFilterStatus(!filterStatus);

  }

  function tagClickHandler(event) {
    if (selectedTag === event.target.innerText) {
      setSelectedTag("");
    } else {
      setSelectedTag(event.target.innerText);
      console.log(selectedTag)
    }
  }

  return (
    <>
      <Header filtersClickHandler={filtersClickHandler}/>
      {filterStatus ? <Filters tagClickHandler={tagClickHandler}/> : ""}
      <Hero />
      <Gallery selectedTag={selectedTag}/>
      <footer className='footer'>
        <h2>Footer</h2>

      </footer>
    </>
  )
}

export default App
