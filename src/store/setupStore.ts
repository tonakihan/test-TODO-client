import { configureStore } from "@reduxjs/toolkit";
import api from "@/services";
import rootReducer from "@/store/rootReducer";
import type { PreloadedState } from "@/types/Store";

function setupStore(preloadedState?: PreloadedState) {
  return configureStore({
    preloadedState,
    reducer: rootReducer,
    middleware: (defaultMw) => defaultMw().concat(api.middleware),
  });
}

export { setupStore };
