import { useState } from "react";
import "./styles.css";

const UpdateUser = () => {
  const [id, setId] = useState("");
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  const fetchUserById = () => {
    if (id) {
      fetch(`http://localhost:3000/admin/getUserById?id=${id}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            setUserData(null);
            setErrorMessage("No user found");
          }
        })
        .then((data) => {
          if (data) {
            console.log(data);
            setUserData(data);
            setErrorMessage("");
            setId(data.id);
            setName(data.name);
            setEmail(data.email);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setUserData(null);
          setErrorMessage("An error occurred while fetching user data");
        });
    } else {
      setUserData(null);
      setErrorMessage("");
      setId("");
      setName("");
      setEmail("");
    }
  };

  const updateUser = async () => {
    if (userData) {
      fetch(`http://localhost:3000/admin/updateUser`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          name,
          email,
        }),
      })
        .then((response) => {
          // console.log(response, "asdasdasd");
          if (response.ok) {
            return response.json();
          } else {
            setErrorMessage("Error updating user data");
          }
        })
        .then((data) => {
          if (data) {
            console.log(data);
            setUserData(data.response);
            setErrorMessage("");
            setIsUpdated(true);
          }
        })
        .catch((error) => {
          console.error("Error updating user data:", error);
          setErrorMessage("An error occurred while updating user data");
        });
    } else {
      setErrorMessage("No user data to update");
    }
  };

  return (
    <div>
      <h1>Update User by ID</h1>
      <div>
        <label htmlFor="userId">Enter User Id: </label>
        <input
          type="number"
          id="userId"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={fetchUserById}>Fetch User</button>
      </div>
      {errorMessage && (
        <p style={{ color: "red", fontSize: "18px" }}>{errorMessage}</p>
      )}
      {userData && (
        <div>
          <div>
            <input
              type="number"
              id="id"
              value={id}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button onClick={updateUser}>Update User</button>
          {isUpdated && (
            <p style={{ color: "lightgreen", fontSize: "18px" }}>
              User Updated Successfully
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
