import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Main from "./Main";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, prevPage } from "../../redux/UserInfoSlice/UserInfoSlice";

vi.mock("react-redux"); // Mock react-redux

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
    (useSelector as vi.fn).mockImplementation((selector) =>
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
    (useSelector as vi.fn).mockImplementation((selector) =>
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
});
