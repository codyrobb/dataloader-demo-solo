"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAPI = void 0;
const books = [
    {
        id: "mock-id-one",
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        id: "mock-id-two",
        title: "City of Glass",
        author: "Paul Auster",
    },
];
function createAPI() {
    return {
        getBooks: async ({ ids }) => {
            console.log("fetching: " + ids);
            return books.filter((b) => ids.includes(b.id));
        },
    };
}
exports.createAPI = createAPI;
