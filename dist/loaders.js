"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyLoaders = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
function applyLoaders(api) {
    const getBook = new dataloader_1.default((batch) => api.getBooks(transformParams(batch)), {
        cacheKeyFn: ({ id }) => id,
    });
    return {
        ...api,
        getBook: (input) => getBook.load(input),
    };
}
exports.applyLoaders = applyLoaders;
// Simple helper function to convert GetBookParams[] => GetBooksParams
function transformParams(batch) {
    return {
        ids: batch.map(({ id }) => id),
    };
}
