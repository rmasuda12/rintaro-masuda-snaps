
import "./HomePage.scss";

import Filters from '../../components/Filters/Filters.jsx';
import Gallery from '../../components/Gallery/Gallery.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import "../../styles/partials/_variables.scss";
import { useState, useEffect } from 'react';
import Header from "../../components/Header/Header.jsx"

function HomePage(prop) {
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(()=> {
    if (!prop.isFilterOpen) {
      setSelectedTag("");
    }
  }, [])
  
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
      <section className='app'>
        {prop.isFilterOpen ? <Filters tagClickHandler={tagClickHandler} /> : ""}
        <div className='app__contents'>
        <Hero />
        <Gallery selectedTag={selectedTag} isFilterOpen={prop.isFilterOpen}/>
        </div>
      </section>
    </>
  )
}

export default HomePage