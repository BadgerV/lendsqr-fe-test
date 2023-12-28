// Importing styles
import "../../styles/Navbar/navbar.styles.scss";

//importing useSelector
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

// Functional component representing the Navbar
const Navbar = () => {
  const loggedInUser = useSelector(
    (state: RootState) => state.UserInfoSlice.loggedInUser
  );
  return (
    // Container for the Navbar
    <div className="navbar-container">
      {/* Left section of the Navbar */}
      <div className="navbar-container__left">
        {/* Logo */}
        <img src="/assets/logo.png" alt="" className="navbar-logo" />

        {/* Brand name */}
        <span>lendsqr</span>
      </div>

      {/* Middle section of the Navbar */}
      <div className="navbar-container__middle">
        <div className="navbar-container__middle-input-cont">
          {/* Search input */}
          <input
            type="text"
            placeholder="Search for anything"
            className="navbar-search-input"
          />

          {/* Search icon */}
          <div className="img-container">
            <img
              src="/assets/search-icon.png"
              alt="Search"
              className="navbar-search-icon"
            />
          </div>
        </div>
      </div>

      {/* Right section of the Navbar */}
      <div className="navbar-container__right">
        {/* Docs link */}
        <span className="navbar-container__right-doc-text">Docs</span>

        {/* Bell icon */}
        <img
          src="/assets/bell-icon.png"
          alt=""
          className="navbar-container__right-bell-icon"
        />

        {/* Profile picture */}
        <img
          src="assets/profile-pic.png"
          alt="profile-pic"
          className="navbar-container__right-profile-pic"
          height={45}
          width={45}
        />

        {/* Profile name */}
        <span className="navbar-container__right-profile-text">
          {loggedInUser}
        </span>

        {/* Dropdown icon */}
        <img
          src="/assets/down-icon.png"
          alt="dropdown"
          className="navbar-container__right-dropdown"
        />
      </div>
    </div>
  );
};

// Exporting the Navbar component as the default export
export default Navbar;
