import { useState } from "react";
// import axios from "axios";
import "./styles.css";
const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [addressId, setAddressId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const createUserHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/admin/createUser", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          addressId,
        }),
      });
      if (response) {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="createUser">
      <h1>Create User</h1>

      <form onSubmit={createUserHandler} action="">
        <input
          type="text"
          placeholder="Enter Your Full Name"
          id="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          required
        />
        <input
          type="email"
          placeholder="Enter Your E-mail"
          id="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          id="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />
        <input
          type="number"
          placeholder="Enter Your Address Id"
          id="addressId"
          value={addressId}
          onChange={(event) => {
            setAddressId(event.target.value);
          }}
          required
        />
        {isSubmitted && (
          <p className="submitted">Your form has been submitted</p>
        )}
        <button type="Submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateUser;
