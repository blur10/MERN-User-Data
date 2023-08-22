import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CreateUser from "./Pages/CreateUser";
import GetAllUsers from "./Pages/GetAllUsers";
import GetUserById from "./Pages/GetUserById";
import UpdateUser from "./Pages/updateUser";
import DeleteUser from "./Pages/DeleteUser";
import LogIn from "./Pages/LogIn";

import PageContainer from "./Components/PageContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageContainer />}>
          <Route index element={<Home />} />
          <Route path="createUser" element={<CreateUser />} />
          <Route path="getAllUsers" element={<GetAllUsers />} />
          <Route path="getUserById" element={<GetUserById />} />
          <Route path="updateUser" element={<UpdateUser />} />
          <Route path="deleteUser" element={<DeleteUser />} />
          <Route path="logIn" element={<LogIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
