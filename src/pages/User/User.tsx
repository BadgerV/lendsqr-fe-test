//importing useState
import { useState } from "react";

//importing stylesheet
import "../../styles/User/user.styles.scss";

//importing components
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserInfo from "../../components/UserInfo/UserInfo";

//JSX ELEMENT
const User = () => {
  //state to track whether sidebar is open
  const [isOpen, setIsOpen] = useState(false);

  //function that changes the open state
  const openFunction = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div className="userpage">
      <Navbar />
      <>
        <div className="user-splash">
          <img
            src="/assets/Menu.svg"
            alt="menu"
            height={30}
            width={30}
            className="menu-icon"
            onClick={openFunction}
            style={{
              display: isOpen ? "none" : "block",
            }}
          />
          <div
            className="usermain"
            style={{
              left: isOpen ? 0 : "-100%",
            }}
          >
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
            <Sidebar />
          </div>
          <UserInfo />
        </div>
      </>
    </div>
  );
};

export default User;
