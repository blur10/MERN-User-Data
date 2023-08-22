import "./styles.css";
const DeleteUser = () => {
  return (
    <div className="deleteUser">
      <h1>Delete User</h1>
      <form action="">
        <input type="text" placeholder="Search User by Id to Delete" />
        <button>Delete User</button>
      </form>
    </div>
  );
};

export default DeleteUser;
