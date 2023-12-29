import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Main from "./Main";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, prevPage } from "../../redux/UserInfoSlice/UserInfoSlice";
import { setupStore } from "../../redux/store";
import { renderWithProviders } from "../../utils/test-utils";
import RowSeries from "../RowSeries/RowSeries";

vi.mock("react-redux"); // Mock react-redux

const rowSeriesProps = {
  id: 1,
  phone_number: "123-456-7890",
  date_joined: "2023-01-01",
  name: "John Doe",
  email: "john.doe@example.com",
  organization: "Sample Org",
  status: "active", // assuming there's a status prop
};

describe("Main Component", () => {
  it("ensures only 4 info boxes are rendered", () => {
    // Mock Redux state
    const mockState = {
      UserInfoSlice: {
        page: [],
        isLoading: false,
        pageNumber: 2,
        usersInfo: [],
        itemsPerPage: 10,
      },
    };

    // Mock useSelector
    (useSelector as vi.fn).mockImplementation((selector : any) =>
      selector(mockState)
    );

    // Mock useDispatch
    const mockDispatch = vi.fn();
    (useDispatch as vi.fn).mockReturnValue(mockDispatch);
    render(<Main />);

    const infoBoxes = screen.getAllByTestId("info-box-container");
    expect(infoBoxes.length).toBe(4);
  });

  it("ensure that the prev and next actions are functioning", async () => {
    // Mock Redux state
    const mockState = {
      UserInfoSlice: {
        page: [],
        isLoading: false,
        pageNumber: 2,
        usersInfo: [],
        itemsPerPage: 10,
      },
    };

    // Mock useSelector
    (useSelector as vi.fn).mockImplementation((selector : any) =>
      selector(mockState)
    );

    // Mock useDispatch
    const mockDispatch = vi.fn();
    (useDispatch as vi.fn).mockReturnValue(mockDispatch);

    render(<Main />);

    // Simulate asynchronous update
    userEvent.click(screen.getByAltText("prev"));

    // Wait for the state to update
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(prevPage()); // Assert action dispatch
    });

    // Simulate asynchronous update
    userEvent.click(screen.getByAltText("next"));

    // Wait for the state to update
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(nextPage()); // Assert action dispatch
    });
  });

  it("ensure the pagination prev and next actions are integrated properly with the redux state", async () => {
    // Mock redux store
    const store = setupStore();

    // Faking the next page dispatch for testing purposes
    store.dispatch(nextPage());

    // Expect the page number to increase after the nextPage has been dispatched
    expect(store.getState().UserInfoSlice.pageNumber).toEqual(2);

    // Faking the prev page dispatch for testing purposes
    store.dispatch(prevPage());

    // Expect the page number to decrease after the prevPage has been dispatched
    expect(store.getState().UserInfoSlice.pageNumber).toEqual(1);
  });

});
