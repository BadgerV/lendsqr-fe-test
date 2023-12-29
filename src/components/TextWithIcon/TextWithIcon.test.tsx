import { render, screen } from "@testing-library/react";
import TextWithIcon from "./TextWithIcon";

const mockProps = {
  icon: "icon.png",
  text: "Business Model",
};

describe("Text With Icon Component", () => {
  it("Asserts that it is rendered properly on the screen based on the props passed", () => {
    render(<TextWithIcon {...mockProps} />);

    expect(screen.getByText(/Business Model/i)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
