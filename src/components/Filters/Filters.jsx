import "./Filters.scss";
import tagList from "../../assets/Data/tags.json"

function Filters(prop) {
    return (
        <>
        <section className='filters'>
        <h2 className='filters__title'>Filters</h2>
        <ul className='filters__list'>
            {tagList.map((element, index) => {
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