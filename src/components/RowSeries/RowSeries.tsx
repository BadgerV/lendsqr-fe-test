// Importing necessary modules and styles
import { useState } from "react"; // React state hook
import { RowSeriesProps, HoverDisplayProps } from "../../types"; // Props types
import { dropDownCustomStyles } from "../../utils/utils"; // Utility function
import { useNavigate } from "react-router-dom"; // React Router hook
import { useDispatch } from "react-redux"; // Redux dispatch hook
import { AppDispatch } from "../../redux/store"; // Redux store type
import { setUser } from "../../redux/UserInfoSlice/UserInfoSlice"; // Redux action
import "../../styles/RowSeries/rowSeries.styles.scss"; // Stylesheet
import Status from "../Status/Status"; // Status component
import Select from "react-select"; // Select component

// RowSeries component for displaying a row of user information
const RowSeries: React.FC<RowSeriesProps> = ({
  id,
  phone_number,
  date_joined,
  name,
  email,
  organization,
  status,
}) => {
  // React state for managing modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  // React Router navigation hook
  const navigate = useNavigate();

  // Redux dispatch hook
  const dispatch = useDispatch<AppDispatch>();

  // Function to navigate to the user details page
  const handleNavigate = () => {
    navigate("/user");
  };

  // Function to dispatch the selected user's information to the Redux store
  const handleDispatch = (userId: number) => {
    dispatch(setUser(userId));
  };

  // JSX structure for displaying user information
  return (
    <div
      className="rowseries__container"
      style={{ borderBottom: "1px solid #5d5f631a" }}
      data-testid = "row-series__container"
    >
      {/* Organization */}
      <div className="rowseries__container--first">
        <span className="rowseries__text">{organization}</span>
      </div>

      {/* Name */}
      <div className="rowseries__container--second">
        <span className="rowseries__text">{name}</span>
      </div>

      {/* Email */}
      <div className="rowseries__container--third">
        <span className="rowseries__text">{email}</span>
      </div>

      {/* Phone Number */}
      <div className="rowseries__container--fourth">
        <span className="rowseries__text">{phone_number}</span>
      </div>

      {/* Date Joined */}
      <div className="rowseries__container--fifth">
        <span className="rowseries__text">{date_joined}</span>
      </div>

      {/* Status */}
      <div className="rowseries__container--sixth">
        <Status type={status} />
      </div>

      {/* Options */}
      <div className="rowseries__container--seventh">
        <img
          src="/assets/options.svg"
          alt="opt"
          className="RowSeries__icon"
          onClick={handleToggle}
          style={{ cursor: "pointer" }}
        />
        {/* Options Hover */}
        <div
          className="rowSeries__options-hover"
          style={{ display: isModalOpen ? "flex" : "none" }}
        >
          <div className="rowSeries__options-class">
            <img
              src="/assets/icon1.svg"
              className="rowSeries__hover-icon"
              alt=""
            />
            <span
              className="rowSeries__view"
              onClick={() => {
                handleNavigate();
                handleDispatch(id);
              }}
            >
              View Details
            </span>
          </div>
          <div className="rowSeries__options-class">
            <img
              src="/assets/icon2.svg"
              className="rowSeries__hover-icon"
              alt=""
            />
            <span className="rowSeries__view">Blacklist User</span>
          </div>
          <div className="rowSeries__options-class">
            <img
              src="/assets/icon3.svg"
              className="rowSeries__hover-icon"
              alt=""
            />
            <span className="rowSeries__view">Activate User</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// HoverDisplay component for displaying additional options on hover
const HoverDisplay: React.FC<HoverDisplayProps> = ({ isOpen }) => {
  return (
    <div
      className="RowSeries__hover-display"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      {/* Dropdowns and Input Fields for Filtering */}
      <div className="rowSeries__perInput">
        <label htmlFor="org" className="RowSeries__label">
          Organization
        </label>
        <Select placeholder="Select" styles={dropDownCustomStyles} />
      </div>
      <div className="rowSeries__perInput">
        <label htmlFor="org" className="RowSeries__label">
          Username
        </label>
        <input type="text" className="RowSeries__input" placeholder="User" />
      </div>
      <div className="rowSeries__perInput">
        <label htmlFor="org" className="RowSeries__label">
          Email
        </label>
        <input type="text" className="RowSeries__input" placeholder="Email" />
      </div>
      <div className="rowSeries__perInput">
        <label htmlFor="org" className="RowSeries__label">
          Date
        </label>
        <input type="date" className="RowSeries__input" placeholder="Date" />
      </div>
      <div className="rowSeries__perInput">
        <label htmlFor="org" className="RowSeries__label">
          Phone Number
        </label>
        <input
          type="text"
          className="RowSeries__input"
          placeholder="Phone number"
        />
      </div>
      <div className="rowSeries__perInput">
        <label htmlFor="org" className="RowSeries__label">
          Organization
        </label>
        <Select placeholder="Select" styles={dropDownCustomStyles} />
      </div>

      {/* Reset and Filter Buttons */}
      <div className="RowSeries__button-cont">
        <button className="RowSeries__button-cont-reset my-button">
          Reset
        </button>
        <button className="RowSeries__button-cont-filter my-button">
          Filter
        </button>
      </div>
    </div>
  );
};

// Exporting the RowSeries component as the default export
export default RowSeries;

// RowSeriesHeader component for displaying headers and filter options
export const RowSeriesHeader = () => {
  // React state for managing modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  // JSX structure for displaying headers and filter options
  return (
    <div className="rowseries__container" data-testid = "rowseries-header">
      {/* Organization Header */}
      <div className="rowseries__container--first RowSeries__cursor">
        <span className="RowSeries__header_text" onClick={handleToggle}>
          ORGANIZATION
        </span>
        <img
          src="/assets/filter.png"
          width={15}
          height={13}
          alt="filter"
          onClick={handleToggle}
        />
        {/* HoverDisplay component for filter options */}
        <HoverDisplay isOpen={isModalOpen} />
      </div>

      {/* Username Header */}
      <div className="rowseries__container--second RowSeries__cursor">
        <span className="RowSeries__header_text">USERNAME</span>
        <img src="/assets/filter.png" width={12} height={12} alt="filter" />
      </div>

      {/* Email Header */}
      <div className="rowseries__container--third RowSeries__cursor">
        <span className="RowSeries__header_text">EMAIL</span>
        <img src="/assets/filter.png" width={12} height={12} alt="filter" />
      </div>

      {/* Phone Number Header */}
      <div className="rowseries__container--fourth RowSeries__cursor">
        <span className="RowSeries__header_text">PHONE NUMBER</span>
        <img src="/assets/filter.png" width={12} height={12} alt="filter" />
      </div>

      {/* Date Joined Header */}
      <div className="rowseries__container--fifth RowSeries__cursor">
        <span className="RowSeries__header_text">DATE JOINED</span>
        <img src="/assets/filter.png" width={12} height={12} alt="filter" />
      </div>

      {/* Status Header */}
      <div className="rowseries__container--sixth RowSeries__cursor">
        <span className="RowSeries__header_text">STATUS</span>
        <img src="/assets/filter.png" width={12} height={12} alt="filter" />
      </div>

      {/* Empty Container for Seventh Header */}
      <div className="rowseries__container--seventh"></div>
    </div>
  );
};
