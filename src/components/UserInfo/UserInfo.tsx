//importing stylesheet
import { RootState } from "../../app/store";
import "../../styles/UserInfo/userInfo.styles.scss";
import { useSelector } from "react-redux";
import { User } from "../../types";
import { capitalizeFirstLetter, formatNumber } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserInfo = () => {
  const userInfoFromStorage: any = localStorage.getItem("userInfo");

  const userInfo: User = useSelector(
    (state: RootState) => state.UserInfoSlice.userInfo
  );

  const user =
    Object.keys(userInfo).length === 0
      ? JSON.parse(userInfoFromStorage)
      : userInfo;

  const {
    acc_no,
    bank_name,
    bvn,
    children,
    email,
    facebook_username,
    gender,
    guarantor_email,
    guarantor_name,
    guarantor_phone_number,
    guarantor_relationship,
    instagram_username,
    lendsrq_id,
    level_of_education,
    loan_amount,
    marital_status,
    monthly_income,
    name,
    office_email,
    phone_number,
    residence,
    sector_of_employment,
    twitter_username,
    user_tier,
  } = user;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="user-main">
      <div className="top">
        <div className="back-text" onClick={handleNavigate}>
          <img
            src="/assets/back-icon.svg"
            alt="back"
            className="icon"
            style={{ cursor: "pointer" }}
          />
          <span className="text">Back to Users</span>
        </div>

        <div className="top-bottom">
          <span className="user-text">User Details</span>
          <div className="button-cont">
            <button className="blacklist-button buttons">BLACKLIST USER</button>
            <button className="activate-button buttons">ACTIVATE USER</button>
          </div>
        </div>
      </div>

      <div className="middle">
        <div className="middle-top">
          <div className="middle-top-first">
            <img
              src="/assets/avatar.svg"
              alt="avatar"
              className="avatar-icon"
            />
          </div>
          <div className="middle-top-second">
            <span className="middle-name">{name}</span>
            <span className="serial-number">{lendsrq_id}</span>
          </div>
          <div className="middle-top-third">
            <span className="tier">User's Tier</span>
            <span className="stars">
              {[...Array(3)].map((star, index) => {
                if (index < +user_tier) {
                  return <img src="/assets/filledStar-icon.png" alt="star" />;
                } else {
                  return <img src="/assets/emptyStar-icon.png" alt="star" />;
                }
              })}
            </span>
          </div>
          <div className="middle-top-fourth">
            <span className="middle-ammount">₦{formatNumber(loan_amount)}</span>
            <span className="bank">
              {acc_no}/{bank_name}
            </span>
          </div>
        </div>

        <div className="middle-bottom">
          <span className="link selected">General Details</span>
          <span className="link document">Documents</span>
          <span className="link bank-details">Bank Details</span>
          <span className="link loans-and-savings">Loans</span>
          <span className="link loans-and-savings">Savings</span>

          <span className="link apps">Apps and System</span>
        </div>
      </div>

      <div className="bottom">
        <span className="bottom-header">Personal Information</span>

        <div className="personal-cont">
          <div className="container">
            <span className="top-text">FULL NAME</span>
            <span className="bottom-text">{name}</span>
          </div>
          <div className="container">
            <span className="top-text">PHONE NUMBER</span>
            <span className="bottom-text">{phone_number}</span>
          </div>
          <div className="container">
            <span className="top-text">EMAIL ADDRESS</span>
            <span className="bottom-text">{email}</span>
          </div>
          <div className="container">
            <span className="top-text">BVN</span>
            <span className="bottom-text">{bvn}</span>
          </div>
          <div className="container">
            <span className="top-text">GENDER</span>
            <span className="bottom-text">{capitalizeFirstLetter(gender)}</span>
          </div>
          <div className="container">
            <span className="top-text">MARITAL STATUS</span>
            <span className="bottom-text">
              {capitalizeFirstLetter(marital_status)}
            </span>
          </div>
          <div className="container">
            <span className="top-text">CHILDREN</span>
            <span className="bottom-text">{children}</span>
          </div>
          <div className="container">
            <span className="top-text">TYPE OF RESIDENCE</span>
            <span className="bottom-text">{residence}</span>
          </div>
        </div>

        <span className="bottom-header">Education and Employment</span>
        <div className="personal-cont education-and-employment">
          <div className="container">
            <span className="top-text">LEVEL OF EDUCATION</span>
            <span className="bottom-text">
              {capitalizeFirstLetter(level_of_education)}
            </span>
          </div>
          <div className="container">
            <span className="top-text">EMPLOYMENT STATUS</span>
            <span className="bottom-text">Employed</span>
          </div>
          <div className="container">
            <span className="top-text">SECTOR OF EMPLOYMENT</span>
            <span className="bottom-text">
              {capitalizeFirstLetter(sector_of_employment)}
            </span>
          </div>
          <div className="container">
            <span className="top-text">DURATION OF EMPLOYMENT</span>
            <span className="bottom-text">2 years</span>
          </div>
          <div className="container">
            <span className="top-text">OFFICE EMAIL</span>
            <span className="bottom-text">{office_email}</span>
          </div>
          <div className="container">
            <span className="top-text">MONTHLY INCOME</span>
            <span className="bottom-text">₦{formatNumber(monthly_income)}</span>
          </div>
          <div className="container">
            <span className="top-text">LOAN REPAYMENT</span>
            <span className="bottom-text">
              ₦{formatNumber(loan_amount / 12)}
            </span>
          </div>
        </div>

        <span className="bottom-header">Socials</span>
        <div className="personal-cont">
          <div className="container">
            <span className="top-text">TWITTER</span>
            <span className="bottom-text">{twitter_username}</span>
          </div>

          <div className="container">
            <span className="top-text">FACEBOOK</span>
            <span className="bottom-text">{facebook_username}</span>
          </div>

          <div className="container">
            <span className="top-text">INSTAGRAM</span>
            <span className="bottom-text">{instagram_username}</span>
          </div>
        </div>
        <span className="bottom-header">Guarantor</span>
        <div className="personal-cont guarantor">
          <div className="container">
            <span className="top-text">FULL NAME</span>
            <span className="bottom-text">{guarantor_name}</span>
          </div>

          <div className="container">
            <span className="top-text">PHONE NUMBER</span>
            <span className="bottom-text">{guarantor_phone_number}</span>
          </div>

          <div className="container">
            <span className="top-text">EMAIL ADDRESS</span>
            <span className="bottom-text">{guarantor_email}</span>
          </div>
          <div className="container">
            <span className="top-text">RELATIONSHIP</span>
            <span className="bottom-text">
              {capitalizeFirstLetter(guarantor_relationship)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
