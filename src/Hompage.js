import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Homepage = (props) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);



  console.log(props.mail);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      setRedirect(true);
      
    } else {
      axios
        .get(`http://localhost:9000/main/${email}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
       
          setUser(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Welcome {user.message}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Homepage;