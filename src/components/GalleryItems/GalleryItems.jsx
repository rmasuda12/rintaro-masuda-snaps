import "./GalleryItems.scss";
import gallery from "../../assets/Data/photos.json";
import { useState } from "react";

function GalleryItems(prop) {

    let contentClass = `gallery__item ${prop.isFilterOpen === true ?"gallery__item--desktop-filter": ""}`;
    return (
        <>
        <li className={contentClass}>
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