// Importing necessary modules and styles
import { useState } from "react"; // React state hook
import Main from "../../components/Main/Main"; // Main component
import Sidebar from "../../components/Sidebar/Sidebar"; // Sidebar component
import Navbar from "../../components/Navbar/Navbar"; // Navbar component
import "./Dashboard.styles.scss";

// Dashboard component for displaying the main dashboard layout
const Dashboard = () => {
  // State variable to track the status of the modal, indicating whether it is open or closed.
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the modal's open/closed status
  const openFunction = () => {
    // Toggle the state value between true and false
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  // JSX structure for the dashboard layout
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Dashboard Container */}
      <div className="dashboard-container" data-testid="dashboard-container">
        {/* Dashboard Left Section */}
        <div className="dashboard-left" data-testid="dashboard-left">
          {/* Menu Icon */}

          <img
            src="/assets/menu-icon.svg"
            alt="menu"
            height={30}
            width={30}
            className="menu-icon"
            style={{
              display: isOpen ? "none" : "block",
            }}
            onClick={openFunction}
          />
          {/* Sidebar Slide */}
          <div
            className="sidebar-slide"
            data-testid="sidebar-slide"
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
              style={{
                display: isOpen ? "block" : "none",
              }}
              onClick={openFunction}
            />
            {/* Sidebar Component */}

            <Sidebar />
          </div>
        </div>
        {/* Dashboard Right Section */}
        <div className="dashboard-right" data-testid="dashboard-right">
          {/* Main Component */}
          <Main />
        </div>
      </div>
    </>
  );
};

// Exporting the Dashboard component as the default export
export default Dashboard;
