import { Book, GetBooksParams } from "./types";

const books: Book[] = [
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

export function createAPI() {
  return {
    getBooks: async ({ ids }: GetBooksParams) => {
      console.log("fetching: " + ids);
      return books.filter((b) => ids.includes(b.id));
    },
  };
}

export type API = ReturnType<typeof createAPI>;
