import { describe, it, expect } from "vitest";
import { setupStore } from "../../redux/store";
import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import Navbar from "./Navbar";
import { Provider } from "react-redux";

describe("Navbar Component", () => {
  it("renders Navbar component renders correctly", () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    const userInformationElement = screen.getByTestId("navbar-container");

    expect(userInformationElement).toBeInTheDocument();
  });
  it("ensures Navbar component displays the correct info", () => {
    const initialState = {
      usersInfo: [],
      isLoading: false,
      pageNumber: 1,
      page: [],
      userInfo: {},
      itemsPerPage: 9,
      loggedInUser: "Faozy",
    };

    renderWithProviders(<Navbar />, {
      preloadedState: {
        UserInfoSlice: initialState,
      },
    });

    const navbarUser = screen.getByText("Faozy");
    expect(navbarUser).toBeInTheDocument();
  });
});
