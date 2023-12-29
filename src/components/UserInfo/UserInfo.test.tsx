import { render, screen } from "@testing-library/react";
import UserInfo from "./UserInfo";
import { Provider } from "react-redux";
import { setupStore } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import { State } from "../../types";
import { capitalizeFirstLetter, formatNumber } from "../../utils/utils";

describe("User Info Component", () => {
  const initialState: State = {
    usersInfo: [],
    isLoading: false,
    pageNumber: 1,
    page: [],
    userInfo: {
      acc_no: "3910857773",
      bank_name: "Union Bank",
      bvn: 80589564585,
      children: 5,
      date_joined: "Dec 7, 2019, 9:42 AM",
      email: "jaimehawton@gmail.com",
      facebook_username: "Jaime Hawton",
      gender: "female",
      guarantor_email: "iainmcjarrow@gmail.com",
      guarantor_name: "Iain McJarrow",
      guarantor_phone_number: "09027795119",
      guarantor_relationship: "other",
      id: 9,
      instagram_username: "@jaime_hawton",
      lendsrq_id: "LGZ171001",
      level_of_education: "M.Sc",
      loan_amount: 742758,
      marital_status: "married",
      monthly_income: 569747,
      name: "Jaime Hawton",
      office_email: "imcjarrow8@posterous.com",
      organization: "Lendsqr",
      phone_number: "09173800192",
      residence: "PO Box 18597",
      sector_of_employment: "Technology",
      status: "pending",
      twitter_username: "@jaime_hawton",
      user_tier: 1,
    },
    itemsPerPage: 9,
    loggedInUser: "Faozan",
  };

  it("Asserts that User Info component is rendered on the screen as expected", () => {
    const store = setupStore({
      UserInfoSlice: initialState,
    });
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UserInfo />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId("user-info")).toBeInTheDocument();
  });

  it("Asserts that the proper user info in renders on the screen", () => {
    const store = setupStore({
      UserInfoSlice: initialState,
    });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <UserInfo />
        </Provider>
      </BrowserRouter>
    );

    const nameText = screen.getByTestId("name");
    const formattedAmount = formatNumber(
      store.getState().UserInfoSlice.userInfo.loan_amount
    );
    const lendsqr_id = store.getState().UserInfoSlice.userInfo.lendsrq_id;
    const acc_no = store.getState().UserInfoSlice.userInfo.acc_no;
    const bank_name = store.getState().UserInfoSlice.userInfo.bank_name;
    const phone_number = store.getState().UserInfoSlice.userInfo.phone_number;
    const email = store.getState().UserInfoSlice.userInfo.email;
    const bvn = store.getState().UserInfoSlice.userInfo.bvn;
    const gender = store.getState().UserInfoSlice.userInfo.gender;

    const marital_status =
      store.getState().UserInfoSlice.userInfo.marital_status;
    const children = store.getState().UserInfoSlice.userInfo.children;
    const residence = store.getState().UserInfoSlice.userInfo.residence;
    const level_of_education =
      store.getState().UserInfoSlice.userInfo.level_of_education;
    const sector_of_employment =
      store.getState().UserInfoSlice.userInfo.sector_of_employment;
    const office_email = store.getState().UserInfoSlice.userInfo.office_email;
    const monthly_income = formatNumber(
      store.getState().UserInfoSlice.userInfo.monthly_income
    );
    const twitter_username =
      store.getState().UserInfoSlice.userInfo.twitter_username;
    const facebook_username =
      store.getState().UserInfoSlice.userInfo.facebook_username;
    const instagram_username =
      store.getState().UserInfoSlice.userInfo.instagram_username;
    const guarantor_name =
      store.getState().UserInfoSlice.userInfo.guarantor_name;
    const guarantor_phone_numbr =
      store.getState().UserInfoSlice.userInfo.guarantor_phone_number;
    const guarantor_email =
      store.getState().UserInfoSlice.userInfo.guarantor_email;
    const guarantor_relationship =
      store.getState().UserInfoSlice.userInfo.guarantor_relationship;

    expect(nameText.textContent).toBe("Jaime Hawton");
    expect(screen.getByText(new RegExp(lendsqr_id, "i"))).toBeInTheDocument();
    expect(screen.getByText(`₦${formattedAmount}`)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(lendsqr_id, "i"))).toBeInTheDocument();

    expect(screen.getByText(`${acc_no}/${bank_name}`)).toBeInTheDocument();
    expect(screen.getByText(phone_number)).toBeInTheDocument();
    expect(screen.getByText(email)).toBeInTheDocument();
    expect(screen.getByText(bvn)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(gender, "i"))).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(marital_status, "i"))
    ).toBeInTheDocument();

    expect(screen.getByText(children)).toBeInTheDocument();
    expect(screen.getByText(residence)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(level_of_education, "i"))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(sector_of_employment, "i"))
    ).toBeInTheDocument();
    expect(screen.getByText(office_email)).toBeInTheDocument();
    expect(screen.getByText(monthly_income)).toBeInTheDocument();
    expect(screen.getByText(twitter_username)).toBeInTheDocument();
    expect(screen.getByText(instagram_username)).toBeInTheDocument();
    expect(screen.getByText(facebook_username)).toBeInTheDocument();
  });
});
