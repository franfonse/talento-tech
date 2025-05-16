import { useState } from "react";
import useUser from "../../contexts/user/user";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useUser();
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value;
    let result = login(username);
    if (result) {
      navigate("/", { replace: true });
    } else {
      setNotFound(true);
    }
  }

  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" required />
          <button type="submit">Log In</button>
        </form>
        {notFound && <p>User not found! Please, try again.</p>}
      </div>
    </>
  );
}

export default Login;
