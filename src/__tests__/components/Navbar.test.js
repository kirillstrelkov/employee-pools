import {screen} from "@testing-library/react";
import Navbar from "../../components/Navbar";
import {renderWithProviders} from "../utils";

describe("Navbar", () => {
  it("tabs are shown", async () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Leaderboard")).toBeInTheDocument();
    expect(screen.getByText("New")).toBeInTheDocument();
  });
});
