// Importing pages for routing
import Dashboard from "./pages/Dashboard/Dashboard";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";

// Importing React hooks and components
import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./redux/store";
import {
  fetchUserData,
  getPage,
  setUsersInfo,
} from "./redux/UserInfoSlice/UserInfoSlice";

// Importing user type from the types file
import { User as UserData } from "./types";
import { RootState } from "./redux/store";

import { useNavigate } from "react-router-dom";

// Define the main App component
const App: React.FC = () => {
  // Initialize the Redux dispatch function
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const loggedInUser = useSelector(
    (state: RootState) => state.UserInfoSlice.loggedInUser
  );

  // Retrieve stored user data from local storage
  const userDataString = localStorage.getItem("userData");

  // Parse the stored user data, or default to an empty object if null
  const storedUserData: UserData | null = userDataString
    ? JSON.parse(userDataString)
    : null;

  // useEffect to fetch user data on component mount
  useEffect(() => {
    // Check if user data is not stored, then fetch and set the data
    if (!storedUserData) {
      dispatch(fetchUserData());
      dispatch(getPage());
    } else {
      // Set user data from local storage if available
      dispatch(setUsersInfo(storedUserData));
    }
  }, []);

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [navigate, loggedInUser]);

  // Render the main application structure
  return (
    <div className="app" data-testid="app-container">
      {/* Set up the React Router for navigation */}
      <Routes>
        {/* Redirect from "/" to "/dashboard" */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        {/* Define routes for different pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
};

// Export the main App component
export default App;
