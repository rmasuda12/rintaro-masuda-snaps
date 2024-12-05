import "./Gallery.scss";
import GalleryItems from "../GalleryItems/GalleryItems.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

function Gallery(prop) {
    const [galleryArray, setGalleryArray] = useState([]);

    async function getGallery() {
        const gallery = await axios.get("https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=01d304a3-a3a3-494f-9eeb-032594a3b8c2")
        console.log(gallery.data)

        setGalleryArray(gallery.data);
    }

    useEffect(() => {
        getGallery()
    }, []);
    
    let filteredGalleryArray = [];

    // useEffect(() => {
        if (prop.selectedTag === "") {
            filteredGalleryArray = galleryArray
            // setGalleryArray(filteredGalleryArray);
        } else {
            filteredGalleryArray = galleryArray.filter((item) => {
                return item.tags.includes(prop.selectedTag);
            })
            // setGalleryArray(filteredGalleryArray);
        }
    // })

    // if (prop.selectedTag === "") {
    //     filteredGalleryArray = galleryArray
    // } else {
    //     filteredGalleryArray = galleryArray.filter((item) => {
    //         return item.tags.includes(prop.selectedTag);
    // })}

    return (
        <>
        <main className='gallery'>
            <ul className='gallery__list'>
                {filteredGalleryArray.map((item) => {
                    return <GalleryItems key={item.id} item={item} isFilterOpen={prop.isFilterOpen}/>
                })}
            </ul>
        </main>
        </>
    )
}

export default Gallery 