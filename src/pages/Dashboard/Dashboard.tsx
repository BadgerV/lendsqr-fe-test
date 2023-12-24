import { useState } from "react";

import Main from "../../components/Main/Main";
import Sidebar from "../../components/Sidebar/Sidebar";
import "../../styles/Dashboard/Dashboard.styles.scss";
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
  // State variable to track the status of the modal, indicating whether it is open or closed.
  const [isOpen, setIsOpen] = useState(false);

  const openFunction = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-left">
          <img
            src="/assets/menu.svg"
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
            className="dashboard-user__main"
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
        </div>
        <div className="dashboard-right">
          <Main />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
