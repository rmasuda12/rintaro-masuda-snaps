
import "./HomePage.scss";
import Filters from '../../components/Filters/Filters.jsx';
import Gallery from '../../components/Gallery/Gallery.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import "../../styles/partials/_variables.scss";
import { useState, useEffect } from 'react';
import Header from "../../components/Header/Header.jsx"

function HomePage(prop) {
  //filter component status
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function filtersClickHandler() {
    console.log("button clicked");
    setIsFilterOpen(!isFilterOpen);
  }
  console.log(isFilterOpen);

  //tag status
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(()=> {
    if (!prop.isFilterOpen) {
      setSelectedTag("");
    }
  }, [])
  
  function tagClickHandler(event) {
    if (selectedTag === event.target.innerText) {
      setSelectedTag("");
    } else {
      setSelectedTag(event.target.innerText);
    }
  }

  return (
    <>
      <Header filtersClickHandler={filtersClickHandler} isHomePage={true} isFilterOpen={isFilterOpen}/>

      <section className='app'>
        {isFilterOpen ? <Filters tagClickHandler={tagClickHandler} selectedTag={selectedTag}/> : ""}
        <div className='app__contents'>
        <Hero />
        <Gallery selectedTag={selectedTag} isFilterOpen={prop.isFilterOpen}/>
        </div>
      </section>
    </>
  )
}

export default HomePage