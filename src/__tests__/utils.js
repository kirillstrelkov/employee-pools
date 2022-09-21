import {render} from "@testing-library/react";
import React from "react";
import {Provider} from "react-redux";

import {MemoryRouter} from "react-router";
import {setupStore} from "../app/store";
export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({children}) {
    return (
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );
  }
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
