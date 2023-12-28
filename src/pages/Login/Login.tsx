//importing useState from react
import { useState } from "react";

//importing hooks
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";

//importing stylesheet
import "../../styles/Login/login.scss";
import { setLoggedInUser } from "../../redux/UserInfoSlice/UserInfoSlice";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // State to track username and password
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Function to handle changes in the username input
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  // Function to handle changes in the password input
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // Function to handle the login action
  const handleLogin = () => {
    // Mock validation: Check if both username and password have a length of at least 3
    if (username.length >= 3 && password.length >= 3) {
      // Mock login success
      dispatch(setLoggedInUser(username));
      navigate("/dashboard");
    } else {
      // Mock login failure
      console.log("wrking")
      alert("Please provide a valid username and password.");
    }
  };

  return (
    <div className="login">
      <div className="login-content">
        <div className="login-content__left">
          {/* Logo Container */}
          <div className="login-content__left-logo-container">
            {/* Lendsqr Logo */}
            <img src="/assets/logo.png" alt="logo" />
            {/* Lendsqr Text */}
            <span>lendsqr</span>
          </div>
          {/* Image on the Left */}
          <img
            src="/assets/pablo-sign-in.png"
            className="login-image"
            alt="Login Page Left Image"
          />
        </div>
        <div className="login-content__right">
          <span className="login-content__right-welcome-text">Welcome!</span>
          <span className="login-content__right-details-text">
            Enter details to login.
          </span>

          <form className="login-content__right-form">
            <div className="login-content__right-form-input-container">
              {/* Username Input */}
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>

            <div className="login-content__right-form-input-container">
              {/* Password Input */}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <span className="login-content__right-form-input-container-show-text">
                SHOW
              </span>
            </div>

            <span className="login-content__right-forgot-password">
              FORGOT PASSWORD?
            </span>

            {/* Login Button */}
            <button
              className="login-content__right-submit-btn"
              onClick={handleLogin}
              disabled={!(username.length >= 3 && password.length >= 3)}
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
