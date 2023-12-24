import "../../styles/Login/login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login-content">
        <div className="login-content__left">
          <div className="login-content__left-logo-container">
            <img src="/assets/logo.png" alt="logo" />
            <span>lendsqr</span>
          </div>
          <img src="/assets/pablo-sign-in.png" className="login-image" alt="Login Page Left Image" />
        </div>

        <div className="login-content__right">
          <span className="login-content__right-welcome-text">Welcome!</span>
          <span className="login-content__right-details-text">
            Enter details to login.
          </span>

          <form className="login-content__right-form">
            <div className="login-content__right-form-input-container">
              <input type="text" placeholder="Email" />
            </div>

            <div className="login-content__right-form-input-container">
              <input type="text" placeholder="Password" />
              <span className="login-content__right-form-input-container-show-text">
                SHOW
              </span>
            </div>

            <span className="login-content__right-forgot-password">
              FORGOT PASSWORD?
            </span>

            <button className="login-content__right-submit-btn">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
