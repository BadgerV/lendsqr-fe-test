// Importing stylesheet
import './sidebar.styles.scss'
// Importing TextWithIcon component
import TextWithIcon from "../TextWithIcon/TextWithIcon";

//importing useDispatch hok and AppDispatch type
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

//importing logoutUser from redux slice
import { logoutUser } from "../../redux/UserInfoSlice/UserInfoSlice";

// JSX element representing the Sidebar
const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="sidebar-container">
      {/* Switch Organization Section */}
      <div className="sidebar__switch-organization-text">
        <img src="/assets/Briefcase.png" alt="" className="sidebar__icon" />
        <span className="sidebar__text">Switch Organization</span>
        <img
          src="/assets/arrow-down-big.png"
          alt="dropdown"
          className="sidebar__icon"
        />
      </div>

      {/* Dashboard Section */}
      <TextWithIcon text="Dashboard" icon="/assets/home-icon.png" />

      {/* Customers Section */}
      <span className="sidebar__heading-text">CUSTOMERS</span>
      <TextWithIcon text="Users" icon="/assets/user-icon.png" />
      <TextWithIcon text="Guarantors" icon="/assets/gua-icon.png" />
      <TextWithIcon text="Loans" icon="/assets/money-icon.png" />
      <TextWithIcon text="Decision Models" icon="/assets/shake-icon.png" />
      <TextWithIcon text="Savings" icon="/assets/bank-icon.png" />
      <TextWithIcon text="Loan Request" icon="/assets/hand-icon.png" />
      <TextWithIcon text="Whitelist" icon="/assets/check-icon.png" />
      <TextWithIcon text="Karma" icon="/assets/karma-icon.png" />

      {/* Businesses Section */}
      <span className="sidebar__heading-text">BUSINESSES</span>
      <TextWithIcon text="Organization" icon="/assets/Briefcase.png" />
      <TextWithIcon text="Loan Products" icon="/assets/hand-icon.png" />
      <TextWithIcon text="Savings Products" icon="/assets/saving-icon.png" />
      <TextWithIcon text="Fees and Charges" icon="/assets/coins-icon.png" />
      <TextWithIcon text="Transactions" icon="/assets/trans-icon.png" />
      <TextWithIcon text="Services" icon="/assets/service-icon.png" />
      <TextWithIcon text="Service Account" icon="/assets/setting-icon.png" />
      <TextWithIcon text="Settlement" icon="/assets/settle-icon.png" />
      <TextWithIcon text="Reports" icon="/assets/chart-icon.png" />

      {/* Settings Section */}
      <span className="sidebar__heading-text">SETTINGS</span>
      <TextWithIcon text="Preferences" icon="/assets/slide-icon.png" />
      <TextWithIcon text="Fees and Pricing" icon="/assets/divide-icon.png" />
      <TextWithIcon text="Audit Logs" icon="/assets/audit-icon.png" />
      <TextWithIcon
        text="System Messages"
        icon="/assets/system-messages-icon.png"
      />

      {/*Logout section*/}
      <div className="logout-section">
        <TextWithIcon
          text="Logout"
          icon="assets/logout-icon.png"
          onClick={handleLogout}
        />
        <span className="version-info">v1.2.0</span>
      </div>
    </div>
  );
};

// Exporting the Sidebar component as the default export
export default Sidebar;
