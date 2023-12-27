//importing external stylesheet
import "../../styles/Main/main.styles.scss";
import { paginationSelectStyles } from "../../utils/utils";

//importing infobox component
import InfoBox from "../InfoBox/InfoBox";

//imorting external components
import RowSeries from "../RowSeries/RowSeries";
import { RowSeriesHeader } from "../RowSeries/RowSeries";

//importing Select from the react-select library
import Select from "react-select";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect, useState } from "react";
import {
  getPage,
  nextPage,
  prevPage,
  setPageNumber,
} from "../../app/UserInfoSlice/UserInfoSlice";
//JSX element
const Main = () => {
  const dispatch = useDispatch<AppDispatch>();
  const page = useSelector((state: RootState) => state.UserInfoSlice.page);
  const isLoading = useSelector(
    (state: RootState) => state.UserInfoSlice.isLoading
  );
  const pageNumber = useSelector(
    (state: RootState) => state.UserInfoSlice.pageNumber
  );

  //PAGINATION DATA
  const [firstNumber, setFirstNumber] = useState(pageNumber);
  const [secondNumber, setSecondNumber] = useState(pageNumber + 1);
  const [thirdNumber, setThirdNumber] = useState(pageNumber + 2);
  const [fourthNumber, setFourthNumber] = useState(55);
  const [fifthNumber, setFifthNumber] = useState(56);

  useEffect(() => {
    if (isLoading != true) {
      dispatch(getPage());
      console.log(page);
    }
  }, [isLoading]);

  const goToNextPage = () => {
    dispatch(nextPage());
    dispatch(getPage());
  };
  const goToPrevPage = () => {
    dispatch(prevPage());
    dispatch(getPage());
  };

  const setPageNum = (num: number) => {
    dispatch(setPageNumber(num));
    dispatch(getPage());
  };

  useEffect(() => {
    setFirstNumber(pageNumber);
    setSecondNumber(pageNumber + 1);
    setThirdNumber(pageNumber + 2);
  }, [pageNumber]);

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

          {page.map((detail, idx) => {
            return <RowSeries {...detail} key={idx} />;
          })}
        </>
      </div>

      <div className="main-container__pagination">
        <div className="main-container__pagination-left">
          <span>Showing</span>

          <Select styles={paginationSelectStyles} placeholder={"100"} />
          <span>out of 100</span>
        </div>
        <div className="main-container__pagination-right">
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
