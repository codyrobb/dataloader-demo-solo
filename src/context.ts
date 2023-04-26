import { createAPI } from "./api";
import { applyLoaders } from "./loaders";

export function createContext() {
  return {
    // ... shared context
    // ... shared context
    api: applyLoaders(createAPI()),
  };
}

export type Context = ReturnType<typeof createContext>;
