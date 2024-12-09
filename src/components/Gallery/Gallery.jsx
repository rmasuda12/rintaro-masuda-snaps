import "./Gallery.scss";
import GalleryItems from "../GalleryItems/GalleryItems.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

function Gallery(prop) {
    const [galleryArray, setGalleryArray] = useState([]);

    //get gallery from API
    async function getGallery() {
        const gallery = await axios.get("https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=01d304a3-a3a3-494f-9eeb-032594a3b8c2")
        console.log(gallery.data)

        //use set to rerender the page once data has been collected
        setGalleryArray(gallery.data);
    }

    useEffect(() => {
        getGallery()
    }, []);

    let filteredGalleryArray = [];

    if (prop.selectedTag === "") {
        filteredGalleryArray = galleryArray
    } else {
        filteredGalleryArray = galleryArray.filter((item) => {
            return item.tags.includes(prop.selectedTag);
        })
    }

    return (
        <>
        <main className='gallery'>
            <ul className='gallery__list'>
                {filteredGalleryArray.map((item) => {
                    return <GalleryItems key={item.id} item={item} isFilterOpen={prop.isFilterOpen} isHomePage={true}/>
                })}
            </ul>
        </main>
        </>
    )
}

export default Gallery 