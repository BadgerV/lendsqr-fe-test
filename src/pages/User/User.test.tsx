import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import User from "./User";
import { setupStore } from "../../redux/store";
import { State } from "../../types";

describe("User Component", () => {
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
    loggedInUser: null,
  };
  const store = setupStore({
    UserInfoSlice: initialState,
  });

  it("should render the main layout elements", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <User />
        </Provider>
      </BrowserRouter>
    );

    const userpageContainer = screen.getByTestId("userpage");
    const menuIcon = screen.getByAltText("menu");
    const sidebarSlide = screen.getByTestId("sidebar-slide");
    const closeIcon = screen.getByAltText("close");
    const userRight = screen.getByTestId("user-right");

    expect(userpageContainer).toBeInTheDocument();
    expect(menuIcon).toBeInTheDocument();
    expect(sidebarSlide).toBeInTheDocument();
    expect(closeIcon).toBeInTheDocument();
    expect(userRight).toBeInTheDocument();
  });

  it("should toggle the sidebar open and closed", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <User />
        </Provider>
      </BrowserRouter>
    );

    // Sidebar elements
    let menuIcon = screen.queryByAltText("menu");
    const sidebarSlide = screen.getByTestId("sidebar-slide");
    let closeIcon = screen.queryByAltText("close");

    // Assert that the sidebar is initially not visible on the screen
    expect(sidebarSlide).toHaveStyle({ left: "-100%" });

    // Reassign menuIcon to ensure it's the correct element
    menuIcon = screen.getByAltText("menu");
    closeIcon = screen.getByAltText("close");

    // Open the sidebar
    userEvent.click(menuIcon);

    // Wait for the asynchronous changes
    waitFor(() => {
      // Assert that the sidebar is now visible on the screen
      expect(sidebarSlide).toHaveStyle({ left: "0px" });
    });

    // Assert that the close icon is now visible
    expect(closeIcon).toBeInTheDocument();

    // Close the sidebar
    userEvent.click(closeIcon);

    // Wait for the asynchronous changes
    waitFor(() => {
      // Assert that the sidebar is closed again
      expect(sidebarSlide).toHaveStyle({ left: "-100%" });
      // Assert that the close icon is no longer visible
      expect(closeIcon).not.toBeInTheDocument();
    });
  });
});
