//importing useState
import { useState } from "react";

//importing external stylesheet
import "../../styles/RowSeries/rowSeries.styles.scss";
import Status from "../Status/Status";
import "../../styles/RowSeries/rowSeries.styles.scss";

//importing Select fromt the react-select library
import Select from "react-select";

//imorting the types
import { RowSeriesProps, HoverDisplayProps } from "../../types";
import { dropDownCustomStyles } from "../../utils/utils";

//JSX element
const RowSeries: React.FC<RowSeriesProps> = ({
  name,
  email,
  phone,
  username,
  date,
  type,
}) => {
  //state to track if the
  const [openHover, setOpenHover] = useState(false);

  const handleFunction = () => {
    setOpenHover(!openHover);
  };

  return (
    <div
      className="rowseries__container"
      style={{ borderBottom: "1px solid #5d5f631a" }}
    >
      <div className="rowseries__container--first">
        <span className="rowseries__text">{name}</span>
      </div>
      <div className="rowseries__container--second">
        <span className="rowseries__text">{username}</span>
      </div>
      <div className="rowseries__container--third">
        <span className="rowseries__text">{email}</span>
      </div>
      <div className="rowseries__container--fourth">
        <span className="rowseries__text">{phone}</span>
      </div>
      <div className="rowseries__container--fifth">
        <span className="rowseries__text">{date}</span>
      </div>
      <div className="rowseries__container--sixth">
        <Status type={type} />
      </div>
      <div className="rowseries__container--seventh">
        <img
          src="/assets/options.svg"
          alt="opt"
          className="RowSeries__icon"
          onClick={handleFunction}
        />
        <div
          className="RowSeries__options-hover"
          style={{ display: openHover ? "flex" : "none" }}
        >
          <div className="RowSeries__hover-class">
            <img
              src="/assets/icon1.svg"
              className="RowSeries__hover-icon"
              alt=""
            />
            <span className="RowSeries__view">View Details</span>
          </div>
          <div className="RowSeries__hover-class">
            <img
              src="/assets/icon2.svg"
              className="RowSeries__hover-icon"
              alt=""
            />
            <span className="RowSeries__view">Blacklist User</span>
          </div>
          <div className="RowSeries__hover-class">
            <img
              src="/assets/icon3.svg"
              className="RowSeries__hover-icon"
              alt=""
            />
            <span className="RowSeries__view">Activate User</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const HoverDisplay: React.FC<HoverDisplayProps> = ({ isOpen }) => {
  return (
    <div
      className="RowSeries__hover-display"
      style={{ display: isOpen ? "flex" : "none" }}
    >
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

export default RowSeries;

export const RowSeriesHeader = () => {
  const [openHover, setOpenHover] = useState(false);

  const handleFunction = () => {
    setOpenHover(!openHover);
  };
  return (
    <div className="rowseries__container">
      <div className="rowseries__container--first RowSeries__cursor">
        <span className="RowSeries__header_text" onClick={handleFunction}>
          ORGANIZATION
        </span>
        <img
          src="/assets/filter.png"
          width={15}
          height={13}
          alt="filter"
          onClick={handleFunction}
        />
        <HoverDisplay isOpen={openHover} />
      </div>
      <div className="rowseries__container--second RowSeries__cursor">
        <span className="RowSeries__header_text">USERNAME</span>
        <img src="/assets/filter.png" width={12} height={12} alt="filter" />
      </div>
      <div className="rowseries__container--third RowSeries__cursor">
        <span className="RowSeries__header_text">EMAIL</span>
        <img src="/assets/filter.png" width={12} height={12} alt="filter" />
      </div>
      <div className="rowseries__container--fourth RowSeries__cursor">
        <span className="RowSeries__header_text">PHONE NUMBER</span>
        <img src="/assets/filter.png" width={12} height={12} alt="filter" />
      </div>
      <div className="rowseries__container--fifth RowSeries__cursor">
        <span className="RowSeries__header_text">DATE JOINED</span>
        <img src="/assets/filter.png" width={12} height={12} alt="filter" />
      </div>
      <div className="rowseries__container--sixth RowSeries__cursor">
        <span className="RowSeries__header_text">STATUS</span>
        <img src="/assets/filter.png" width={12} height={12} alt="filter" />
      </div>
      <div className="rowseries__container--seventh"></div>
    </div>
  );
};