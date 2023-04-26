import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Context, createContext } from "./context";

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
const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

// Start Server
(async () => {
  const { url } = await startStandaloneServer<Context>(server, {
    listen: { port: 4000 },
    context: async ({}) => {
      return createContext();
    },
  });
  
  console.log(`🚀 Server listening at: ${url}`);
})()
