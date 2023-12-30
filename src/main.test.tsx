// testing main.test

import App from "./App";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./redux/store";

// rendering main App
describe("App component", () => {
  //mock store
  const store = setupStore();
  it("renders without crashing", () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    // Check if the rendered component matches the snapshot
    expect(container).toMatchSnapshot();
  });
});
