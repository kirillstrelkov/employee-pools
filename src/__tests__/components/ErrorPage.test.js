import ErrorPage from "../../components/ErrorPage";
import {renderWithProviders} from "../utils";

describe("ErrorPage", () => {
  it("show apage", async () => {
    const view = renderWithProviders(<ErrorPage />);
    expect(view.baseElement).toMatchSnapshot();
  });
});
