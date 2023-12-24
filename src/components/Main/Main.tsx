//importing external stylesheet
import "../../styles/Main/main.styles.scss";

//importing infobox component
import InfoBox from "../InfoBox/InfoBox";

//imorting external components
import RowSeries from "../RowSeries/RowSeries";
import { RowSeriesHeader } from "../RowSeries/RowSeries";

//importing Select from the react-select library
import Select from "react-select";

//JSX element
//JSX elemtn
const Main = () => {
  const details = [
    {
      name: "Adedeji Elubo",
      email: "adedeji@lendsqr.com",
      phone: "08078903721",
      username: "Adedeji",
      date: "May 15, 2020 10:00 AM",
      type: "inactive",
    },
    {
      name: "Irorun",
      email: "debby2@irorun.com",
      phone: "08160780928",
      username: "Debby Ogana",
      date: "Apr 30, 2020 10:00 AM",
      type: "pending",
    },
    {
      name: "Lendsqr",
      email: "grace@lendstar.com",
      phone: "07060780922",
      username: "Grace Effiom",
      date: "Apr 30, 2020 10:00 AM",
      type: "blacklist",
    },
    {
      name: "Lendstar",
      email: "tosin@lendsqr.com",
      phone: "07003309226",
      username: "Tosin Dokunmu",
      date: "Apr 10, 2020 10:00 AM",
      type: "pending",
    },
    {
      name: "Lendsqr",
      email: "grace@lendstar.com",
      phone: "07060780922",
      username: "Grace Effiom",
      date: "Apr 30, 2020 10:00 AM",
      type: "active",
    },
    {
      name: "Lendstar",
      email: "tosin@lendsqr.com",
      phone: "08060780900",
      username: "Tosin Dokunmu",
      date: "Apr 10, 2020 10:00 AM",
      type: "pending",
    },
    {
      name: "Lendsqr",
      email: "grace@lendstar.com",
      phone: "08078754215",
      username: "Grace Effiom",
      date: "May 15, 2020 10:00 AM",
      type: "pending",
    },
    {
      name: "Lendstar",
      email: "adedejiEmannnuel@gmail.com",
      phone: "07060780922",
      username: "Tosin Dokunmu",
      date: "May 15, 2020 10:00 AM",
      type: "pending",
    },
    {
      name: "Lendsqr",
      email: "adedejiEmannnuel@gmail.com",
      phone: "08078754215",
      username: "Grace Effiom",
      date: "May 15, 2020 10:00 AM",
      type: "blacklist",
    },
  ];
  return (
    <div className="main-container">
      <div className="main-container__top">
        <span>Users</span>
      </div>
      <div className="main-container__middle">
        <InfoBox icon="/assets/first-icon.png" text="USERS" number="2,453" />
        <InfoBox
          icon="/assets/second-icon.png"
          text="ACTIVE USERS"
          number="2,453"
        />
        <InfoBox
          icon="/assets/third-icon.png"
          text="USERS WITH LOANS"
          number="12,453"
        />
        <InfoBox
          icon="/assets/fourth-icon.png"
          text="USERS WITH SAVINGS"
          number="102,453"
        />
      </div>
      <div className="main-container__bottom">
        <>
          <RowSeriesHeader />

          {details.map((detail, idx) => {
            return <RowSeries {...detail} key={idx} />;
          })}
        </>
      </div>

      <div className="main-container__pagination">
        <div className="main-container__pagination-left">
          <span>Showing</span>

          <Select />
          <span>Out of 100</span>
        </div>
        <div className="main-container__pagination-right"></div>
      </div>
    </div>
  );
};

export default Main;
