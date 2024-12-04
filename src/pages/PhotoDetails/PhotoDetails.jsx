import { useParams } from "react-router-dom"

function PhotoDetails() {
    const param = useParams();
    console.log(param)
    return (
        <>
        <h1>test</h1>
        </>
    )
}

export default PhotoDetails