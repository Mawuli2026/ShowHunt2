import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import HeaderMain from "@/components/header/HeaderMain";

describe("HeaderMain", () => {
  it("renders search bar and account menu", () => {
    render(
      <Provider store={store}>
        <HeaderMain />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/Search product/)).toBeInTheDocument();
    expect(screen.getByText(/Account/)).toBeInTheDocument();
  });
});