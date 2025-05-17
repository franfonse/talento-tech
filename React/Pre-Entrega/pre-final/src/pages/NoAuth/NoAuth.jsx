import './NoAuth.css';

function NoAuth() {
    return (
        <>
            <div className="no-auth">
                <h2>Access denied</h2>
                <p>Sorry, you're not authorised to see this page. Please, log in first.</p>
            </div>
        </>
    )
}

export default NoAuth;
