import "./GalleryItems.scss";
import gallery from "../../assets/Data/photos.json";
import { useState } from "react";

function GalleryItems(prop) {

    return (
        <>
        <li className="gallery__item">
            <img className="gallery__photo" src={prop.item.photo}></img>
            <p>{prop.item.tags}</p>    
        </li>
        </>
    )
}


export default GalleryItems