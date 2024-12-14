import "./Gallery.scss";
import GalleryItems from "../GalleryItems/GalleryItems.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

function Gallery(prop) {
    const [galleryArray, setGalleryArray] = useState([]);

    //get gallery from API
    async function getGallery() {
        try {
            const gallery = await axios.get(`${baseURL}/photos`)
            //use set to rerender the page once data has been collected
            setGalleryArray(gallery.data);
        } catch (error) {
            console.log("error: unable to retrieve gallery");
        }
       
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
                    return <GalleryItems key={item.id} item={item} isFilterOpen={prop.isFilterOpen} isHomePage={true} baseURL={baseURL}/>
                })}
            </ul>
        </main>
        </>
    )
}

export default Gallery 