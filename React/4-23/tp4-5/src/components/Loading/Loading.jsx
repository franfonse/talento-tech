import './Loading.css';

function Loading() {
    return (
        <div className="loader-overlay">
            <div className="loader"></div>
            <p>Fetching items...</p>
        </div>
    )
}

export default Loading;
