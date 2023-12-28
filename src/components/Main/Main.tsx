// Importing external stylesheet
import "../../styles/Main/main.styles.scss";
import { paginationSelectStyles } from "../../utils/utils";

// Importing InfoBox component
import InfoBox from "../InfoBox/InfoBox";

// Importing external components
import RowSeries from "../RowSeries/RowSeries";
import { RowSeriesHeader } from "../RowSeries/RowSeries";

// Importing Select from the react-select library
import Select from "react-select";

// Importing Redux hooks and actions
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import {
  getPage,
  nextPage,
  prevPage,
  setPageNumber,
} from "../../redux/UserInfoSlice/UserInfoSlice";

// JSX element representing the main component
const Main = () => {
  // Redux hooks for dispatching actions and selecting state
  const dispatch = useDispatch<AppDispatch>();
  const page = useSelector((state: RootState) => state.UserInfoSlice.page);
  const isLoading = useSelector(
    (state: RootState) => state.UserInfoSlice.isLoading
  );
  const pageNumber = useSelector(
    (state: RootState) => state.UserInfoSlice.pageNumber
  );
  const noOfUsers = useSelector(
    (state: RootState) => state.UserInfoSlice.usersInfo.length
  );
  const noOfUsersPerPage = useSelector(
    (state: RootState) => state.UserInfoSlice.itemsPerPage
  );
  const lastPageNumber = Math.ceil(noOfUsers / noOfUsersPerPage);

  // Pagination data state
  const [firstNumber, setFirstNumber] = useState(pageNumber);
  const [secondNumber, setSecondNumber] = useState(pageNumber + 1);
  const [thirdNumber, setThirdNumber] = useState(pageNumber + 2);
  const fourthNumber = 55;
  const fifthNumber = 56;

  // Effect to fetch page data when isLoading changes
  useEffect(() => {
    if (isLoading !== true) {
      dispatch(getPage());
      console.log(page);
    }
  }, [isLoading]);

  // Functions to navigate to next and previous pages
  const goToNextPage = () => {
    dispatch(nextPage());
    dispatch(getPage());
  };

  const goToPrevPage = () => {
    dispatch(prevPage());
    dispatch(getPage());
  };

  // Function to set page number and fetch data
  const setPageNum = (num: number) => {
    dispatch(setPageNumber(num));
    dispatch(getPage());
  };

  // Effect to update pagination numbers when pageNumber changes
  useEffect(() => {
    setFirstNumber(Math.min(pageNumber, lastPageNumber));
    setSecondNumber(Math.min(pageNumber + 1, lastPageNumber));
    setThirdNumber(Math.min(pageNumber + 2, lastPageNumber));
  }, [pageNumber]);

  // JSX representing the main component structure
  return (
    <div className="main-container">
      <div className="main-container__top">
        <span>Users</span>
      </div>
      <div className="main-container__middle">
        {/* InfoBox components */}
        <InfoBox
          icon="/assets/first-icon.png"
          text="USERS"
          number={noOfUsers}
        />
        <InfoBox
          icon="/assets/second-icon.png"
          text="ACTIVE USERS"
          number={noOfUsers}
        />
        <InfoBox
          icon="/assets/third-icon.png"
          text="USERS WITH LOANS"
          number={12453}
        />
        <InfoBox
          icon="/assets/fourth-icon.png"
          text="USERS WITH SAVINGS"
          number={102453}
        />
      </div>
      <div className="main-container__bottom">
        <>
          {/* Header for RowSeries */}
          <RowSeriesHeader />

          {/* Mapping over the 'page' array to render RowSeries components */}
          {page.map((detail, idx) => {
            return <RowSeries {...detail} key={idx} />;
          })}
        </>
      </div>

      {/* Pagination section */}
      <div className="main-container__pagination">
        <div className="main-container__pagination-left">
          <span>Showing</span>

          {/* Dropdown for selecting number of items to display */}
          <Select styles={paginationSelectStyles} placeholder={"100"} />
          <span>out of 100</span>
        </div>
        <div className="main-container__pagination-right">
          {/* Navigation buttons and page numbers */}
          <img src="/assets/prev-icon.svg" alt="prev" onClick={goToPrevPage} />
          <span>{firstNumber}</span>
          <span
            className="span-for-larger-screen-sizes"
            onClick={() => setPageNum(secondNumber)}
          >
            {secondNumber}
          </span>
          <span
            className="span-for-larger-screen-sizes"
            onClick={() => setPageNum(thirdNumber)}
          >
            {thirdNumber}
          </span>
          <span>...</span>
          <span
            className="span-for-larger-screen-sizes"
            onClick={() => setPageNum(fourthNumber)}
          >
            {fourthNumber}
          </span>
          <span onClick={() => setPageNum(fifthNumber)}>{fifthNumber}</span>

          <img src="/assets/next-icon.svg" alt="next" onClick={goToNextPage} />
        </div>
      </div>
    </div>
  );
};

export default Main;
