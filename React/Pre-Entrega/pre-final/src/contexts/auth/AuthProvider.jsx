import AuthContext from "./AuthContext";
import { useEffect, useState } from "react";

function AuthProvider({ children }) {
  const [auth, setAuth] = useState();

  useEffect(() => {
    const authStored = localStorage.getItem("auth");

    setAuth(() => (authStored ? JSON.parse(authStored) : false));
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
