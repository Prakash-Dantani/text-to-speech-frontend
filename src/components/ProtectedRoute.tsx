// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/me", {
          method: "GET",
          credentials: "include", // send cookies/session
          cache: "no-store", // prevent 304 cache
        });

        if (res.status === 200) {
          const data = await res.json();
          console.log("User:", data);
          setIsAuth(true);
        } else {
          console.log("Session expired");
          setIsAuth(false);
        }
      } catch (err) {
        console.error("Error checking session:", err);
        setIsAuth(false);
      }
      setLoading(false);
    };
    checkSession();
  }, []);

  if (loading) return <p>Loading...</p>;

  return isAuth ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
