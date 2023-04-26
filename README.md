# Solo.io DataLoader Demo

This project was created to demonstrate a common pattern used at StockX where we use `DataLoader`s to limit traffic to upstream services. This pattern was inspired by [this Medium article](https://xuorig.medium.com/the-graphql-dataloader-pattern-visualized-3064a00f319f).

### Example Query

```graphql
query {
  book1: book(id: "mock-id-one") {
    id
    title
    author
  }
  book2: book(id: "mock-id-two") {
    id
    title
    author
  }
  book3: book(id: "mock-id-two") {
    id
    title
    author
  }
}
```

This ends up making on "request" (mocked local promise in the example) for "mock-id-one" and "mock-id-two".
