import './App.scss'
import Header from './components/Header/Header.jsx';
import Filters from './components/Filters/Filters.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Hero from './components/Hero/Hero.jsx';
import Footer from './components/Footer/Footer.jsx';
import "./styles/partials/_variables.scss"
import { useState } from 'react';

function App() {
  const [filterStatus, setFilterStatus] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");

  function filtersClickHandler() {
      setFilterStatus(!filterStatus);
  }

  function tagClickHandler(event) {
    const tagArray = document.getElementsByClassName("filters__tag")

    if (selectedTag === event.target.innerText) {
      setSelectedTag("");
      event.target.classList.remove("filters__tag--clicked");
    } else {
      for (let item of tagArray) {
        item.classList.remove("filters__tag--clicked");
      }
      setSelectedTag(event.target.innerText);
      event.target.classList.add("filters__tag--clicked");
    }
  }


  return (
    <>
      <Header filtersClickHandler={filtersClickHandler} filterStatus={filterStatus}/>
      <section className='app'>
        {filterStatus ? <Filters tagClickHandler={tagClickHandler} /> : ""}
        <div className='app__contents'>
        <Hero />
        <Gallery selectedTag={selectedTag} filterStatus={filterStatus}/>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
