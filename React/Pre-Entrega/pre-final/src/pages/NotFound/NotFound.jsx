import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <div className="not-found">
                <h1>404</h1>
                <p>Oops! The page you&apos;re looking for doesn’t exist.</p>
                <Link to="/" className="btn-back">
                    Go back home
                </Link>
            </div>
        </>
    )
}

export default NotFound;
