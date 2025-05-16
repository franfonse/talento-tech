import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav from "../../../components/Nav/Nav";
import "./Header.css";
import useUser from "../../../contexts/user/user";

function Header() {
  const { isAuthenticated, logout } = useUser();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate('/');
  };

  return (
    <header>
      <div className="sign-container">
        {isAuthenticated ? (
          <>
            { pathname !== '/admin' && <Link to="/admin" className="btn-header btn-admin">Admin</Link>}
            <Link to="/logout" className="btn-header btn-logout" onClick={handleLogout}>Log out</Link>
          </>
        ) : (
          <>
            { pathname !== '/login' && <Link to="/login" className="btn-header btn-login">Log in</Link>}
            { pathname !== '/signup' && <Link to="/signup" className="btn-header btn-signup">Sign up</Link>}
          </>
        )}
      </div>
      <Nav />
    </header>
  );
}

export default Header;
