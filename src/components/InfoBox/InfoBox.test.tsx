import { render, screen } from "@testing-library/react";
import { formatNumberWithCommas } from "../../utils/utils";
import InfoBox from "./InfoBox";

// Mock data for testing
const mockProps = {
  icon: "mock-icon-url",
  text: "Mock Text",
  number: 123456,
};

describe("InfoBox Component", () => {
  it("renders InfoBox component with correct content", () => {
    render(<InfoBox {...mockProps} />);

    // Check if the icon, text, and formatted number are rendered correctly
    expect(screen.getByAltText("")).toHaveAttribute("src", mockProps.icon);
    expect(screen.getByText(mockProps.text)).toBeInTheDocument();
    expect(
      screen.getByText(formatNumberWithCommas(mockProps.number))
    ).toBeInTheDocument();
  });

  // You can add more tests as needed
});
