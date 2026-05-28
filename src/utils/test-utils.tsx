import React, { type PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Provider } from "react-redux";

import type { AppStore, PreloadedState } from "@/types/Store";
import { setupStore } from "@/store/setupStore";

interface ExtendedRenderOptions extends Omit<
  RenderOptions,
  "queries" | "wrapper"
> {
  preloadedState?: PreloadedState;
  store?: AppStore;
}

function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
) {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  function Wrapper({ children }: PropsWithChildren) {
    return <Provider store={store}>{children}</Provider>;
  }

  return {
    store,
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

export { renderWithProviders };
