import { render, screen } from "@testing-library/react";
import HeaderTop from "@/components/header/HeaderTop";

describe("HeaderTop", () => {
  it("renders logo and call-to-order text", () => {
    render(<HeaderTop />);
    expect(screen.getByText("ShowHunt")).toBeInTheDocument();
    expect(screen.getByText(/Call to Order/)).toBeInTheDocument();
  });
});