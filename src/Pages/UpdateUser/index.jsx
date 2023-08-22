import "./styles.css";
const UpdateUser = () => {
  return (
    <div className="updateUser">
      <h1>Update User</h1>
      <form action="">
        <input
          type="number"
          placeholder="Enter Id of User you want to update"
        />
        <input type="text" placeholder="Change Name (Optional)" />
        <input type="password" placeholder="Change Password (Optional)" />
        <button>Update User Data</button>
      </form>
    </div>
  );
};

export default UpdateUser;
