"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
const api_1 = require("./api");
const loaders_1 = require("./loaders");
function createContext() {
    return {
        // ... shared context
        // ... shared context
        api: (0, loaders_1.applyLoaders)((0, api_1.createAPI)()),
    };
}
exports.createContext = createContext;
