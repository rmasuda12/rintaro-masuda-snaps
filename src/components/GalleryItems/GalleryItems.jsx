import "./GalleryItems.scss";
import gallery from "../../assets/Data/photos.json";
import { useState } from "react";

function GalleryItems(prop) {

    return (
        <>
        <li className="gallery__item">
            <img className="gallery__photo" src={prop.item.photo}></img>
            <div className="gallery__container">
                <p className="gallery__photographer">{prop.item.photographer}</p>
            </div>
            <ul className="gallery__tag-list">
                {prop.item.tags.map((tag, index) => {
                    return(
                        <li key={index} className="gallery__tag-item">{tag}</li>
                    )
                })}
            </ul>  
        </li>
        </>
    )
}


export default GalleryItems