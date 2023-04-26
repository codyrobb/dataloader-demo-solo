import DataLoader from "dataloader";
import { API } from "./api";
import { Book, GetBookParams, GetBooksParams } from "./types";

export function applyLoaders(api: API) {
    const getBook = new DataLoader<GetBookParams, Book, string>(
        (batch) => api.getBooks(transformParams(batch)),
        {
            cacheKeyFn: ({ id }) => id,
        }
    );
    
    return {
        ...api,
        getBook: (input: GetBookParams) => getBook.load(input),
    }
}

// Simple helper function to convert GetBookParams[] => GetBooksParams
function transformParams(batch: readonly GetBookParams[]): GetBooksParams {
    return {
        ids: batch.map(({ id }) => id),
    }
}