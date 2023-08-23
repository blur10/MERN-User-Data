import { useState } from "react";
import { useEffect } from "react";
import "./styles.css";
const GetAllUsers = () => {
  // const [id, setId] = useState();
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const data = {
  //   id,
  //   name,
  //   email,
  // };
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/admin/getAllUsers") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="getAllUsers">
      <h1>Users</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {userData.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
        s{" "}
      </table>
    </div>
  );
};

export default GetAllUsers;
