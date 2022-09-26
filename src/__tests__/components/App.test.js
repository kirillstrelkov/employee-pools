import {fireEvent, screen, waitFor} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import App from "../../components/App";
import {renderWithProviders} from "../utils";

const DEFAULT_USER = "anonymous";
const VALID_USER = "mtsamis";
const VALID_PASSWORD = "xyz123";

const login = (user = VALID_USER, password = VALID_PASSWORD) => {
  jest.useFakeTimers();

  fireEvent.change(screen.getByPlaceholderText("User"), {
    target: {value: user},
  });
  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: {value: password},
  });
  fireEvent.click(screen.getByText("Submit"));

  act(() => {
    jest.advanceTimersByTime(5000);
  });
};

describe("App", () => {
  it("user will login and logout", async () => {
    renderWithProviders(<App />);
    expect(screen.getByTestId("nav-user-id")).toHaveTextContent(DEFAULT_USER);

    login();

    await waitFor(() => {
      expect(screen.getByTestId("nav-user-id")).toHaveTextContent(VALID_USER);
    });

    fireEvent.click(screen.getByText("Logout"));
    expect(screen.getByTestId("nav-user-id")).toHaveTextContent(DEFAULT_USER);
  });

  it("wrong login credentials", async () => {
    renderWithProviders(<App />);
    expect(screen.getByTestId("nav-user-id")).toHaveTextContent(DEFAULT_USER);

    login(VALID_USER, "wrong");

    await waitFor(() => {
      expect(
        screen.getByText("Wrong username or password!")
      ).toBeInTheDocument();
    });
  });

  it("leaderboard is shown and ordered", async () => {
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

  it("answered poll is displayed correctly", async () => {
    renderWithProviders(<App />);
    login();
    await waitFor(() => {
      expect(screen.getByTestId("nav-user-id")).toHaveTextContent(VALID_USER);
    });

    fireEvent.click(screen.getAllByText("Show")[3]);

    await waitFor(() => {
      expect(screen.getByText("Would You Rather")).toBeInTheDocument();
    });

    expect(screen.getByText("2 (66.67%)")).toBeInTheDocument();
    expect(screen.getByText("1 (33.33%)")).toBeInTheDocument();
    screen.getAllByText("Click").forEach((e) => {
      expect(e).toBeDisabled();
    });
  });
});
