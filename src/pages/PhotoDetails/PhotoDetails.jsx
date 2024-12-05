import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PhotoDetails() {
    const [photoItem, setPhotoItem] = useState({});
    const [comments, setComments] = useState({})
    const param = useParams();

    async function getPhoto() {
        const photo = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${param.id}?api_key=01d304a3-a3a3-494f-9eeb-032594a3b8c2`);
        
        setPhotoItem(photo.data);
    }

    useEffect(()=>{getPhoto()}, []);
    console.log(photoItem)

    async function getComments() {
        const commentsArray = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${param.id}/comments?api_key=01d304a3-a3a3-494f-9eeb-032594a3b8c2`);

        console.log(commentsArray.data)
        setComments(commentsArray.data)

    }

    useEffect(()=>{getComments()}, []);
    console.log("this is comments",comments);

    return (
        <>
        <h1>{photoItem.id}</h1>
        <p>{photoItem.photoDescription}</p>
        <img src={photoItem.photo}></img>
        </>
    )
}

export default PhotoDetails