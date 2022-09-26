import {fireEvent, screen, waitFor} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import App from "../../components/App";
import {renderWithProviders} from "../utils";

const DEFAULT_USER = "anonymous";
const VALID_USER = "mtsamis";
const VALID_PASSWORD = "xyz123";

const login = () => {
  jest.useFakeTimers();

  fireEvent.change(screen.getByPlaceholderText("User"), {
    target: {value: VALID_USER},
  });
  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: {value: VALID_PASSWORD},
  });
  fireEvent.click(screen.getByText("Submit"));

  act(() => {
    jest.advanceTimersByTime(5000);
  });
};

describe("App", () => {
  it("user will login and logout", async () => {
    jest.useFakeTimers();

    renderWithProviders(<App />);
    expect(screen.getByTestId("nav-user-id")).toHaveTextContent(DEFAULT_USER);

    login();

    await waitFor(() => {
      expect(screen.getByTestId("nav-user-id")).toHaveTextContent(VALID_USER);
    });

    fireEvent.click(screen.getByText("Logout"));
    expect(screen.getByTestId("nav-user-id")).toHaveTextContent(DEFAULT_USER);
  });

  it("user are shown", async () => {
    const {container} = renderWithProviders(<App />);
    login();
    await waitFor(() => {
      expect(screen.getByTestId("nav-user-id")).toHaveTextContent(VALID_USER);
    });

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.getByText("New Questions")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Leaderboard"));

    await waitFor(() => {
      expect(screen.getByTestId("leaderboard-id")).toHaveTextContent(
        VALID_USER
      );
    });

    const elements = container.querySelectorAll("td span");
    expect([...elements].map((e) => e.textContent)).toEqual(
      "sarahedo mtsamis tylermcginnis zoshikanlu".split(" ")
    );
  });
});
