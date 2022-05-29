import { render, screen } from "@testing-library/react";
import App from "./App";

describe("React Testing", () => {
  test("renders learn react link", () => {
    render(<App />);
    expect(screen.getByText(/Become A Member/i)).toBeInTheDocument();
  });
});
