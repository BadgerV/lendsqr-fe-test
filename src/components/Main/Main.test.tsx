import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Main from "./Main";
import { Provider } from "react-redux";
import { nextPage, prevPage } from "../../redux/UserInfoSlice/UserInfoSlice";
import { setupStore } from "../../redux/store";
import { State } from "../../types";

import { BrowserRouter } from "react-router-dom";

describe("Main Component", () => {
  it("Asserts only 4 info boxes are rendered", () => {
    const initialState: State = {
      usersInfo: [],
      isLoading: false,
      pageNumber: 1,
      page: [],
      userInfo: {},
      itemsPerPage: 9,
      loggedInUser: localStorage.getItem("loggedInUser"),
    };
    const store = setupStore({
      UserInfoSlice: initialState,
    });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getAllByTestId("info-box-container")).toHaveLength(4);
  });

  it("Asserts the pagination prev and next actions are integrated properly with the redux state", async () => {
    // Mock redux store.
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
