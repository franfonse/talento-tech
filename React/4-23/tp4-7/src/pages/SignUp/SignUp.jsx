import "./SignUp.css";
import useUser from "../../contexts/user/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const { signup } = useUser();
  const [userExists, setUserExists] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value;
    if (!signup(username)) {
      setUserExists(false);
      navigate("/login");
    } else {
      setUserExists(true);
    }
  }

  return (
    <>
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" required />
          <button type="submit">Sign Up</button>
        </form>
        {userExists && (
          <p>User already exists! Please, choose another username.</p>
        )}
      </div>
    </>
  );
}

export default SignUp;
