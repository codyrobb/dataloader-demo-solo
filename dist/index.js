"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const context_1 = require("./context");
// Create Schema
const typeDefs = `#graphql
  type Book {
    id: String
    title: String
    author: String
  }

  type Query {
    book(id: String): Book
  }
`;
// Create Resolvers
const resolvers = {
    Query: {
        book: (_, { id }, { api }) => {
            return api.getBook({ id });
        },
    },
};
// Create Server
const server = new server_1.ApolloServer({
    typeDefs,
    resolvers,
});
// Start Server
(async () => {
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 4000 },
        context: async ({}) => {
            return (0, context_1.createContext)();
        },
    });
    console.log(`🚀 Server listening at: ${url}`);
})();
