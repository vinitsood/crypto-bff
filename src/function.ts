import { ApolloServer, gql } from "apollo-server-lambda";

export const handler = async event => {
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "testing" }),
  };
};

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export const handler1 = server.createHandler();
