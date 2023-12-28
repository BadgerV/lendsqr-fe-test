// Import necessary libraries
import { render } from "@testing-library/react";
import InfoBox from "./InfoBox";
import { formatNumberWithCommas } from "../../utils/utils";
import { it } from "vitest";

// Describe block for InfoBox component tests
describe("InfoBox Component Tests", () => {
  // Rendering Test
  it("renders InfoBox correctly", () => {
    // Render the component
    const { container } = render(
      <InfoBox icon="path/to/icon.png" text="Example Text" number={12345} />
    );

    // Check if the rendered component matches the snapshot
    expect(container).toMatchSnapshot();
  });

  // Utility Function Test
  it("formats number with commas correctly", () => {
    // Test case 1: Positive number
    expect(formatNumberWithCommas(1234567)).toBe("1,234,567");

    // Test case 4: Zero
    expect(formatNumberWithCommas(0)).toBe("0");
  });
});
