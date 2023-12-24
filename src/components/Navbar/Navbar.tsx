// Importing styles
import "../../styles/Navbar/navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-container__left">
        <img src="/assets/logo.png" alt="" className="navbar-logo" />
        <span>lendsqr</span>
      </div>
      <div className="navbar-container__middle">
        <div className="navbar-container__middle-input-cont">
          <input
            type="text"
            placeholder="Search for anything"
            className="navbar-search-input"
          />
          <div className="img-container">
            <img
              src="/assets/search-icon.png"
              alt="Search"
              className="navbar-search-icon"
            />
          </div>
        </div>
      </div>
      <div className="navbar-container__right">
        <span className="navbar-container__right-doc-text">Docs</span>
        <img
          src="/assets/bell-icon.png"
          alt=""
          className="navbar-container__right-bell-icon"
        />
        <img
          src="assets/profile-pic.png"
          alt="profile-pic"
          className="navbar-container__right-profile-pic"
          height={45}
          width={45}
        />

        <span className="navbar-container__right-profile-text">Adedeji</span>
        <img
          src="/assets/down-icon.png"
          alt="dropdown"
          className="navbar-container__right-dropdown"
        />
      </div>
    </div>
  );
};

export default Navbar;
