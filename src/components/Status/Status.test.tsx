import { render, screen } from "@testing-library/react";
import Status from "./Status";

const mockProps1 = {
  type: "active",
};
const mockProps2 = {
  type: "blacklist",
};
const mockProps3 = {
  type: "inactive",
};
const mockProps4 = {
  type: "pending",
};

describe("Status Component", () => {
  it("Asserts that it is rendered based on the type is has as a prop", () => {
    render(
      <>
        <Status {...mockProps1} />
        <Status {...mockProps2} />
        <Status {...mockProps3} />
        <Status {...mockProps4} />
      </>
    );

    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("Inactive")).toBeInTheDocument();
    expect(screen.getByText("Blacklisted")).toBeInTheDocument();
    expect(screen.getByText("Pending")).toBeInTheDocument();
  });
});
