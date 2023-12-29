import { render, screen, waitFor } from "@testing-library/react";
import RowSeries, {  RowSeriesHeader } from "./RowSeries"; // Adjust the import path based on your project structure
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { setupStore } from "../../redux/store";
import { Provider } from "react-redux";
import { renderWithProviders } from "../../utils/test-utils";
import { State } from "../../types";

const rowSeriesProps = {
  id: 1,
  phone_number: "123-456-7890",
  date_joined: "2023-01-01",
  name: "John Doe",
  email: "john.doe@example.com",
  organization: "Sample Org",
  status: "active", // assuming there's a status prop
};

describe("RowSeries Component", () => {
  it("renders RowSeries component with the correct user information", () => {
    // Mock data for RowSeriesProps
    const store = setupStore();

    // Render RowSeries component with the mock data
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RowSeries {...rowSeriesProps} />
        </Provider>
      </BrowserRouter>
    );

    // Assert that the rendered content matches the user information
    expect(screen.getByText("Sample Org")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(screen.getByText("123-456-7890")).toBeInTheDocument();
    expect(screen.getByText("2023-01-01")).toBeInTheDocument();
  });

  it("asserts that the rowseries header is displayed on the screen", () => {
    render(<RowSeriesHeader />);

    const rowseriesHeaderContainer = screen.getByTestId("rowseries-header");

    expect(rowseriesHeaderContainer).toBeInTheDocument();
  });

  it("asserts that the rowseries is displayed in the screen", () => {
    const store = setupStore();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RowSeries {...rowSeriesProps} />
        </Provider>
      </BrowserRouter>
    );

    const rowSeriesContainer = screen.getByTestId("row-series__container");

    // Assert that the number of elements is as expected
    expect(rowSeriesContainer).toBeInTheDocument();
  });
  it("assets that the correct number of rowseries components are rendered on the screen", () => {
    const initialState: State = {
      usersInfo: [],
      isLoading: false,
      pageNumber: 1,
      page: [
        {
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
      ],
      userInfo: {},
      itemsPerPage: 9,
      loggedInUser: "Faozy",
    };

    const store = setupStore({ UserInfoSlice: initialState });
    renderWithProviders(
      <>
        {store.getState().UserInfoSlice.page.map((details, idx) => (
          <BrowserRouter>
            <Provider store={store}>
              <RowSeries {...details} key={idx} />
            </Provider>
          </BrowserRouter>
        ))}
      </>
    );

    const rowSeriesContainer = screen.getAllByTestId("row-series__container");

    expect(rowSeriesContainer).toHaveLength(
      store.getState().UserInfoSlice.page.length
    );
  });

  it("renders ClickableDisplay automatically on button click", async () => {
    render(<RowSeriesHeader />);

    // Click the button in RowSeriesHeader
    userEvent.click(screen.getByTestId("filter"));

    // Wait for the asynchronous changes to be reflected in the DOM
    await waitFor(() => {
      const clickableElement = screen.getByTestId("clickable-component");
      expect(clickableElement).toBeInTheDocument();
    });
  });
});
