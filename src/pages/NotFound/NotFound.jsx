import Header from "../../components/Header/Header.jsx";
import "./NotFound.scss";

function NotFound() {
    return(
        <>
        <Header isHomePage={false}/>
        <div className="warning">
            <h3>404 Error: Page is not found</h3>
            <p>The requested URL was not found on this server</p>
        </div>
        </>
    )
}

export default NotFound