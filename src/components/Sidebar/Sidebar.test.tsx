import { render, screen, waitFor } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { setupStore } from "../../redux/store";
import { Provider } from "react-redux";
import { renderWithProviders } from "../../utils/test-utils";
import { State } from "../../types";

describe("Sidebar Component", () => {
  it("renders Sidebar with all sections and icons", () => {
    const store = setupStore();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Sidebar />
        </Provider>
      </BrowserRouter>
    );

    // Check if sections and icons are present
    expect(screen.getByText("Switch Organization")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    // Add more expectations for other sections and icons

    // Example: Customers Section
    expect(screen.getByText("CUSTOMERS")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Guarantors")).toBeInTheDocument();
    // Add more expectations for other sections and icons

    // Example: Businesses Section
    expect(screen.getByText("BUSINESSES")).toBeInTheDocument();
    expect(screen.getByText("Organization")).toBeInTheDocument();
    expect(screen.getByText("Loan Products")).toBeInTheDocument();
    // Add more expectations for other sections and icons

    // Example: Settings Section
    expect(screen.getByText("SETTINGS")).toBeInTheDocument();
    expect(screen.getByText("Preferences")).toBeInTheDocument();
    expect(screen.getByText("Fees and Pricing")).toBeInTheDocument();
    // Add more expectations for other sections and icons

    // Example: Logout Section
    expect(screen.getByText("Logout")).toBeInTheDocument();
    expect(screen.getByText("v1.2.0")).toBeInTheDocument();
  });

  it("asserts that the logout functionality works", async () => {
    const initialState: State = {
      usersInfo: [],
      isLoading: false,
      pageNumber: 1,
      page: [],
      userInfo: {},
      itemsPerPage: 9,
      loggedInUser: "Faozan",
    };

    const store = setupStore({ UserInfoSlice: initialState });
    renderWithProviders(
      <>
        <BrowserRouter>
          <Provider store={store}>
            <Sidebar />
          </Provider>
        </BrowserRouter>
      </>
    );

    userEvent.click(screen.getByText("Logout"));

    await waitFor(() => {
      expect(store.getState().UserInfoSlice.loggedInUser).toBeNull();
    });
  });
});
