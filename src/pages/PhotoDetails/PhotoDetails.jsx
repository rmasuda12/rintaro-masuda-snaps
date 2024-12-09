import axios from "axios";
import "./PhotoDetails.scss"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import GalleryItems from "../../components/GalleryItems/GalleryItems";

function PhotoDetails() {
    const [photoItem, setPhotoItem] = useState('');
    const [comments, setComments] = useState('')
    const param = useParams();

    async function getPhoto() {
        try {
            const photo = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${param.id}?api_key=01d304a3-a3a3-494f-9eeb-032594a3b8c2`);
            
            setPhotoItem(photo.data);            
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(()=>{getPhoto()}, []);
    console.log(photoItem)

    async function getComments() {
        try {
            const commentsArray = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${param.id}/comments?api_key=01d304a3-a3a3-494f-9eeb-032594a3b8c2`);

            setComments(commentsArray.data.reverse())            
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{getComments()}, []);
    console.log("this is comments",comments);

    async function postComment(event) {
        event.preventDefault();
        const comment = {
            name: event.target.name.value,
            comment: event.target.comment.value
        }
        const post = await axios.post(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${param.id}/comments?api_key=01d304a3-a3a3-494f-9eeb-032594a3b8c2`, comment);

        event.target.reset();

        getComments()
        
    }

    return (
        <>
        <Header isHomePage={false}/>
        <section className="details">
        {photoItem !== '' ? 
        <GalleryItems item={photoItem} isHomePage={false}/>
        : ''}
        <form className="form" onSubmit={postComment}>
            <label className="form__label" for="name" >Name</label>
            <input 
                type="text" 
                name="name" 
                className="form__input"
                required
            />
            <label className="form__label" for="comment" >Comment</label>
            <input 
                type="text" 
                name="comment" 
                className="form__input form__input--comment"
                required
            />
            <input className="form__submit" type="submit" ></input>
        </form>
        
        {comments !== '' ?
        <>
        <p className="comments__title">{comments.length} Comments</p>
        <ul className="comments">
            {comments.map((comment, index)=>{
                let commentDate = new Date(comment.timestamp)
                return (
                    <li className="comments__item" key={index}>
                        <div className="comments__container">
                            <p className="comments__detail">{comment.name}</p>
                            <p className="comments__detail">{commentDate.toLocaleDateString("en-US")}</p>
                        </div>
                        <p className="comments__comment">{comment.comment}</p>
                    </li>
                )
            })}
        </ul>
        </>
        : ""}
        </section>
        </>
    )
}

export default PhotoDetails