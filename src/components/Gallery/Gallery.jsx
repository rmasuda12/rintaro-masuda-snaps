import "./Gallery.scss";
import GalleryItems from "../GalleryItems/GalleryItems.jsx";
import gallery from "../../assets/Data/photos.json";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Gallery(prop) {
    const [galleryArray, setGalleryArray] = useState(gallery);

    let filteredGalleryArray = [];
    useEffect(() => {
        if (prop.selectedTag === "") {
            filteredGalleryArray = gallery
            setGalleryArray(filteredGalleryArray);
        } else {
            filteredGalleryArray = gallery.filter((item) => {
                return item.tags.includes(prop.selectedTag);
            })
            setGalleryArray(filteredGalleryArray);
        }
    })

    return (
        <>
        <main className='gallery'>
            <ul className='gallery__list'>
                {galleryArray.map((item) => {
                    return (
                        <GalleryItems item={item} isFilterOpen={prop.isFilterOpen}/>
                    )
                })}
            </ul>
        </main>
        </>
    )
}

export default Gallery 