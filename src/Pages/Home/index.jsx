import { useNavigate } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const naviagte = useNavigate();
  return (
    <div className="homePage">
      <h1>Home Page</h1>
      <button
        className="createUser"
        onClick={() => {
          naviagte("/createUser");
        }}
      >
        Create a New User
      </button>
      <button
        className="getAllUser"
        onClick={() => {
          naviagte("/getAllUsers");
        }}
      >
        Get All Users Data
      </button>
      <button
        className="getUserById"
        onClick={() => {
          naviagte("/getUserById");
        }}
      >
        Search for User data
      </button>
      <button
        className="updateUser"
        onClick={() => {
          naviagte("/updateUser");
        }}
      >
        Update User Data
      </button>
      <button
        className="deleteUser"
        onClick={() => {
          naviagte("/deleteUser");
        }}
      >
        Delete User
      </button>
      <button
        className="logIn"
        onClick={() => {
          naviagte("/logIn");
        }}
      >
        Log In
      </button>
    </div>
  );
};
export default Home;
