import "./Filters.scss";
import axios from "axios";
import { useState, useEffect } from "react";

function Filters(prop) {
    const[tags, setTags] = useState([])

    async function getTags() {
        const tags = await axios.get("https://unit-3-project-c5faaab51857.herokuapp.com/tags?api_key=01d304a3-a3a3-494f-9eeb-032594a3b8c2")
        console.log(tags.data)
        setTags(tags.data)
    }
    useEffect(() => {getTags()}, []);

    return (
        <>
        <section className='filters'>
        <h2 className='filters__title'>Filters</h2>
        <ul className='filters__list'>
            {tags.map((element, index) => {
                return (
                    <li key={index} className="filters__tag" onClick={prop.tagClickHandler}>
                        {element}
                    </li>
                )
            })
        }
        </ul>
        </section> 
        </>       
    )

}

export default Filters