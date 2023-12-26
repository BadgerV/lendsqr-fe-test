//importing stylesheet
import "../../styles/UserInfo/userInfo.styles.scss";

const UserInfo = () => {
  const totalRating = 3;
  const rating = 1;
  return (
    <div className="user-main">
      <div className="top">
        <div className="back-text">
          <img src="/assets/back-icon.svg" alt="back" className="icon" />
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
            <span className="middle-name">Grace Effiom</span>
            <span className="serial-number">LSQFf587g90</span>
          </div>
          <div className="middle-top-third">
            <span className="tier">User's Tier</span>
            <span className="stars">
              {[...Array(totalRating)].map((star, index) => {
                if (index < rating) {
                  return <img src="/assets/filledStar-icon.png" alt="star" />;
                } else {
                  return <img src="/assets/emptyStar-icon.png" alt="star" />;
                }
              })}
            </span>
          </div>
          <div className="middle-top-fourth">
            <span className="middle-ammount">₦200,000.00</span>
            <span className="bank">9912345678/Providus Bank</span>
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
            <span className="bottom-text">Grace Effiom</span>
          </div>
          <div className="container">
            <span className="top-text">PHONE NUMBER</span>
            <span className="bottom-text">08078754215</span>
          </div>
          <div className="container">
            <span className="top-text">EMAIL ADDRESS</span>
            <span className="bottom-text">Segunfaozan110@gmail.com</span>
          </div>
          <div className="container">
            <span className="top-text">BVN</span>
            <span className="bottom-text">1234567890</span>
          </div>
          <div className="container">
            <span className="top-text">GENDER</span>
            <span className="bottom-text">Male</span>
          </div>
          <div className="container">
            <span className="top-text">MARITAL STATUS</span>
            <span className="bottom-text">Single</span>
          </div>
          <div className="container">
            <span className="top-text">CHILDREN</span>
            <span className="bottom-text">None</span>
          </div>
          <div className="container">
            <span className="top-text">TYPE OF RESIDENCE</span>
            <span className="bottom-text">Parent's Apartment</span>
          </div>
        </div>

        <span className="bottom-header">Education and Employment</span>
        <div className="personal-cont education-and-employment">
          <div className="container">
            <span className="top-text">LEVEL OF EDUCATION</span>
            <span className="bottom-text">BSc.</span>
          </div>
          <div className="container">
            <span className="top-text">EMPLOYMENT STATUS</span>
            <span className="bottom-text">Employed</span>
          </div>
          <div className="container">
            <span className="top-text">SECTOR OF EMPLOYMENT</span>
            <span className="bottom-text">Fintech</span>
          </div>
          <div className="container">
            <span className="top-text">DURATION OF EMPLOYMENT</span>
            <span className="bottom-text">2 years</span>
          </div>
          <div className="container">
            <span className="top-text">OFFICE EMAIL</span>
            <span className="bottom-text">grace@lendsqr.com</span>
          </div>
          <div className="container">
            <span className="top-text">MONTHLY INCOME</span>
            <span className="bottom-text">₦200,000.00- ₦400,000.00</span>
          </div>
          <div className="container">
            <span className="top-text">LOAN REPAYMENT</span>
            <span className="bottom-text">40,000</span>
          </div>
        </div>

        <span className="bottom-header">Socials</span>
        <div className="personal-cont">
          <div className="container">
            <span className="top-text">TWITTER</span>
            <span className="bottom-text">@grace_effiom</span>
          </div>

          <div className="container">
            <span className="top-text">FACEBOOK</span>
            <span className="bottom-text">Grace Effiom</span>
          </div>

          <div className="container">
            <span className="top-text">INSTAGRAM</span>
            <span className="bottom-text">@grace_effiom</span>
          </div>
        </div>
        <span className="bottom-header">Guarantor</span>
        <div className="personal-cont guarantor">
          <div className="container">
            <span className="top-text">FULL NAME</span>
            <span className="bottom-text">Debby Ogana</span>
          </div>

          <div className="container">
            <span className="top-text">PHONE NUMBER</span>
            <span className="bottom-text">07060780922</span>
          </div>

          <div className="container">
            <span className="top-text">EMAIL ADDRESS</span>
            <span className="bottom-text">debby@gmail.com</span>
          </div>
          <div className="container">
            <span className="top-text">RELATIONSHIP</span>
            <span className="bottom-text">Sister</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
