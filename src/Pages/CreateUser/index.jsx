import { useState } from "react";
import axios from "axios";
import "./styles.css";
const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const api = () => {
    const response = fetch("localhost:3000/admin/createUser");
  };

  return (
    <div className="createUser">
      <h1>Create User</h1>

      <form action="">
        <input type="text" placeholder="Enter Your Full Name" />
        <input type="email" placeholder="Enter Your E-mail" />
        <input type="password" placeholder="Enter Your Password" />
        <input type="number" placeholder="Enter Your Address Id" />
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default CreateUser;
