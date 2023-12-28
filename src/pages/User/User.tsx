// Importing useState from React
import { useState } from "react";

// Importing the user styles
import "../../styles/User/user.styles.scss";

// Importing components
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserInfo from "../../components/UserInfo/UserInfo";

// User component for the user page
const User = () => {
  // State variable to track whether the sidebar is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function that changes the open state of the sidebar
  const openFunction = () => {
    // Toggling the value of isOpen based on its current state
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="userpage">
      {/* Navbar Component */}
      <Navbar />
      <>
        {/* User Splash Container */}
        <div className="user-splash">
          {/* Menu Icon */}
          <img
            src="/assets/menu-icon.svg"
            alt="menu"
            height={30}
            width={30}
            className="menu-icon"
            onClick={openFunction}
            style={{
              display: isOpen ? "none" : "block",
            }}
          />

          {/* User Main Container */}
          <div
            className="user-left"
            style={{
              left: isOpen ? 0 : "-100%",
            }}
          >
            {/* Close Icon */}
            <img
              src="/assets/close.svg"
              alt="close"
              height={30}
              width={30}
              className="menu-icon-close"
              onClick={openFunction}
              style={{
                display: isOpen ? "block" : "none",
              }}
            />
            {/* Sidebar Component */}
            <Sidebar />
          </div>

          <div className="user-right">
            {/* UserInfo Component */}
            <UserInfo />
          </div>
        </div>
      </>
    </div>
  );
};

// Exporting the User component as the default export
export default User;
