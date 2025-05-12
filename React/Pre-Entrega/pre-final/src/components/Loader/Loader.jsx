import './Loader.css'

function Loader() {
    return (
        <div className="loader-overlay">
            <div className="loader"></div>
            <p>Fetching data...</p>
        </div>
    )
}

export default Loader;
