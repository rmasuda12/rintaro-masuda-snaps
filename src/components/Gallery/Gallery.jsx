import "./Gallery.scss";
import GalleryItems from "../GalleryItems/GalleryItems.jsx";
import gallery from "../../assets/Data/photos.json";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Gallery(prop) {
    const [galleryArray, setGalleryArray] = useState(gallery);

    let filteredGalleryArray = [];

    if (prop.selectedTag === "") {
        filteredGalleryArray = galleryArray
    } else {
        filteredGalleryArray = galleryArray.filter((item) => {
            return item.tags.includes(prop.selectedTag);
    })}

    return (
        <>
        <main className='gallery'>
            <ul className='gallery__list'>
                {filteredGalleryArray.map((item) => {
                    return (
                    // <NavLink to={`/details/${item.id}`} key={item.id} className={"gallery__nav-wrapper"}>
                        <GalleryItems item={item} isFilterOpen={prop.isFilterOpen}/>
                    // </NavLink>
                    )
                })}
            </ul>
        </main>
        </>
    )
}

export default Gallery 