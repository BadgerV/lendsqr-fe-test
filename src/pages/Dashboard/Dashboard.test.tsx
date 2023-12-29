import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dashboard from "./Dashboard"; // Adjust the path to your component
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "../../redux/store";

const store = setupStore();
describe("Dashboard component", () => {
  it("should render the main layout elements", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </BrowserRouter>
    );

    const dashboardContainer = screen.getByTestId("dashboard-container");
    const dashboardLeft = screen.getByTestId("dashboard-left");
    const dashboardRight = screen.getByTestId("dashboard-right");

    expect(dashboardContainer).toBeInTheDocument();
    expect(dashboardLeft).toBeInTheDocument();
    expect(dashboardRight).toBeInTheDocument();
  });

  // Test case: It should toggle the sidebar open and closed
  it("should toggle the sidebar open and closed", () => {
    // Render the Dashboard component within a BrowserRouter and a Redux Provider
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </BrowserRouter>
    );

    // Initially hidden elements
    let menuIcon = screen.queryByAltText("menu"); // Menu icon
    const sidebarSlide = screen.getByTestId("sidebar-slide"); // Sidebar container (initially visible)
    let closeIcon = screen.queryByAltText("close"); // Close icon (initially hidden)

    // Assert that the sidebar is initially not visible on the screen
    expect(sidebarSlide).toHaveStyle({ left: "-100%" });

    // Reassign menuIcon to ensure it's the correct element
    menuIcon = screen.getByAltText("menu");
    closeIcon = screen.getByAltText("close"); // Reassign closeIcon

    // Open the sidebar
    userEvent.click(menuIcon);

    // Wait for the asynchronous changes (use waitFor when dealing with async updates)
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
