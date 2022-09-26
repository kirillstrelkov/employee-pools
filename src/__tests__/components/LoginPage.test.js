import {screen} from "@testing-library/react";
import App from "../../components/App";
import {renderWithProviders} from "../utils";

describe("LoginPage", () => {
  it("login form is shown", async () => {
    renderWithProviders(<App />);
    expect(screen.getByPlaceholderText("User")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeDisabled();
  });
});
