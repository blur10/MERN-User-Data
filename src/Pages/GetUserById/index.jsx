import { useState } from "react";
import "./styles.css";

const GetUserById = () => {
  const [id, setId] = useState("");
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchUserById = () => {
    if (id) {
      fetch(`http://localhost:3000/admin/getUserById?id=${id}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          setUserData(data);
          setErrorMessage("");
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setUserData(null);
          setErrorMessage("User Not Found");
        });
    } else {
      setUserData(null);
      setErrorMessage("");
    }
  };

  return (
    <div className="getUserById">
      <h1>Get User by ID</h1>
      <div className="form">
        <input
          type="number"
          id="id"
          value={id}
          placeholder="Enter user Id"
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={fetchUserById}>Search</button>
      </div>
      {errorMessage && (
        <p style={{ color: "red", fontSize: "18px" }}>{errorMessage}</p>
      )}
      {userData && (
        <div className="successfulSeacrh">
          {/* <p>ID: {userData.id}</p> */}
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default GetUserById;
