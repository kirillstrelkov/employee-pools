import {fireEvent, screen, waitFor} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import App from "../../components/App";
import {renderWithProviders} from "../utils";

describe("App", () => {
  it("user will login and logout", async () => {
    jest.useFakeTimers();

    const defaultUser = "anonymous";

    renderWithProviders(<App />);
    expect(screen.getByTestId("nav-user-id")).toHaveTextContent(defaultUser);

    const userId = "mtsamis";
    fireEvent.change(screen.getByPlaceholderText("User"), {
      target: {value: userId},
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: {value: "xyz123"},
    });
    fireEvent.click(screen.getByText("Submit"));

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    await waitFor(() => {
      expect(screen.getByTestId("nav-user-id")).toHaveTextContent(userId);
    });

    fireEvent.click(screen.getByText("Logout"));
    expect(screen.getByTestId("nav-user-id")).toHaveTextContent(defaultUser);
  });
});
