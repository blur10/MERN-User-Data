import { useState } from "react";
import axios from "axios";
import "./styles.css";
const DeleteUser = () => {
  const [id, setId] = useState("");
  const [userDeleted, setUserDeleted] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/admin/deleteUser?id=${id}`);
      setUserDeleted(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="delete-user-container">
      <h2>Delete User</h2>
      <div className="input-container">
        <input
          type="number"
          placeholder="Enter User ID"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
        <button onClick={handleDelete}>Delete User</button>
      </div>
      {userDeleted && <p>User has been deleted.</p>}
    </div>
  );
};

export default DeleteUser;
