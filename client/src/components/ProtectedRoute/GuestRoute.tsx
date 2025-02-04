import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import type { RouteType } from "../../types/RouteType/RouteType";

const GuestRoute = ({ element }: RouteType) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  useEffect(() => {
    const checkAuthentification = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/checkToken`,
          {
            method: "GET",
            credentials: "include",
          },
        );

        if (response.ok) {
          setIsAuthenticate(true);
        }
      } catch (error) {
        throw new Error();
      } finally {
        setLoading(false);
      }
    };

    checkAuthentification();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (isAuthenticate) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default GuestRoute;
