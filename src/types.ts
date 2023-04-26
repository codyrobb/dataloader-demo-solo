export interface Book {
  id: string;
  title: string;
  author: string;
}

export interface GetBookParams {
  id: string;
}

export interface GetBooksParams {
  ids: string[];
}
