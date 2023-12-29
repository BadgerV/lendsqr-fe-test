import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./redux/store";
import { logoutUser } from "./redux/UserInfoSlice/UserInfoSlice";
import App from "./App";

describe("App Component", () => {
  const initialState = {
    usersInfo: [],
    isLoading: false,
    pageNumber: 1,
    page: [],
    userInfo: {},
    itemsPerPage: 9,
    loggedInUser: null,
  };

  const store = setupStore({
    UserInfoSlice: initialState,
  });

  it("renders the App component without breaking the app", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    const app = screen.getByTestId("app-container");

    expect(app).toBeInTheDocument();
  });

  it("logs out the user and clears local storage", () => {
    store.dispatch(logoutUser());
    const localStorageUser = localStorage.getItem("loggedInUser");

    expect(localStorageUser).toBe(null);
  });
});
