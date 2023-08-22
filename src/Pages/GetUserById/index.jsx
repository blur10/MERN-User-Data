import "./styles.css";
const getUserById = () => {
  return (
    <div className="getUserById">
      <h1>Get User By Id</h1>
      <form action="">
        <input type="text" placeholder="Enter User Id to get Information" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default getUserById;
