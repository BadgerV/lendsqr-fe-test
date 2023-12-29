import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./Login";
import { setupStore } from "../../redux/store";
import { State } from "../../types";

describe("Login Component", () => {
  it("should handle login with valid credentials", async () => {
    const initialState: State = {
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

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );

    // Input fields
    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    // Mock user input
    fireEvent.change(usernameInput, { target: { value: "Faozan" } });
    fireEvent.change(passwordInput, { target: { value: "1234" } });

    // Login button
    const loginButton = screen.getByText("LOG IN");

    // Click the login button
    userEvent.click(loginButton);

    // Wait for asynchronous changes (e.g., navigation)
    await waitFor(() => {
      expect(store.getState().UserInfoSlice.loggedInUser).toBe("Faozan");
      // Add additional assertions based on your application's behavior
    });
  });

  it("should handle login with invalid credentials", () => {
    const initialState: State = {
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
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );

    // Input fields
    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    // Mock user input with invalid credentials
    fireEvent.change(usernameInput, { target: { value: "short" } });
    fireEvent.change(passwordInput, { target: { value: "pd" } });

    // Login button
    const loginButton = screen.getByText("LOG IN");

    // Click the login button
    userEvent.click(loginButton);

    // Assert that an alert is shown for invalid credentials
    waitFor(() => {
      const alertMessage = screen.getByText(
        "Please provide a valid username and password."
      );
      expect(alertMessage).toBeInTheDocument();
    });

    // Assert that setLoggedInUser was not called
    expect(store.getState().UserInfoSlice.loggedInUser).toBe(null);
  });
});
