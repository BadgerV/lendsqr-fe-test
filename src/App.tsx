import Dashboard from "./pages/Dashboard/Dashboard";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./app/store";
import {
  fetchUserData,
  getPage,
  setUsersInfo,
} from "./app/UserInfoSlice/UserInfoSlice";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userData = localStorage.getItem("userData");
  let storedUserData: any;

  if (userData) {
    storedUserData = JSON.parse(userData);
  }

  useEffect(() => {
    if (!storedUserData) {
      dispatch(fetchUserData());
      dispatch(getPage());
    } else {
      dispatch(setUsersInfo(storedUserData));
    }
  }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
