import "./Gallery.scss";
import GalleryItems from "../GalleryItems/GalleryItems.jsx";
import gallery from "../../assets/Data/photos.json";
import { useState } from "react";

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
                    return <GalleryItems key={item.id} item={item} filterStatus={prop.filterStatus}/>
                })}
            </ul>
        </main>
        </>
    )
}

export default Gallery 