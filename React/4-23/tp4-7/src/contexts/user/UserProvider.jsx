import { useState } from "react";
import UserContext from "./UserContext";

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function signup(username) {
    const result = users.some(u => u.username === username);
    if (!result) {
      setUsers((prev) => [...prev, {id: users.length + 1, username: username}]);
    }
    return result;
  }

  function login(username) {
    const result = users.find(u => u.username === username);
    if (result) {
      setUser(result);
      setIsAuthenticated(true);
    }
    return result;
  }

  function logout() {
    setUser();
    setIsAuthenticated(false);
  }

  function getUser(id) {
    return users.find((i) => i.id === id);
  }

  return (
    <UserContext.Provider
      value={{ users, user, signup, login, logout, getUser, isAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
