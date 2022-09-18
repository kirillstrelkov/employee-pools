import {fireEvent, screen} from "@testing-library/react";
import App from "../../components/App";
import {renderWithProviders} from "../utils";

describe("App", () => {
  it("user will login and logout", () => {
    const defaultUser = "anonymous";

    renderWithProviders(<App />);
    expect(screen.getByTestId("nav-user-id")).toHaveTextContent(defaultUser);

    const userId = "mtsamis";
    fireEvent.change(screen.getByPlaceholderText("User"), {
      target: {value: userId},
    });
    fireEvent.click(screen.getByText("Submit"));
    expect(screen.getByTestId("nav-user-id")).toHaveTextContent(userId);

    fireEvent.click(screen.getByText("Logout"));
    expect(screen.getByTestId("nav-user-id")).toHaveTextContent(defaultUser);
  });
});
