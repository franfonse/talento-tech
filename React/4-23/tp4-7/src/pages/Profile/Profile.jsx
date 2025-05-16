import "./Profile.css";
import useUser from "../../contexts/user/user";

function Profile() {
  const { user } = useUser();

  return (
    <>
      <div className="admin-panel">
        <h2>Administration</h2>
        <p>Welcome, {user.username}!</p>
      </div>
    </>
  );
}

export default Profile;
