import { ApolloServer, gql } from "apollo-server-lambda";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

export const handler = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello test" }),
  };
};

const server = new ApolloServer({ typeDefs, resolvers });

export const handler1 = server.createHandler();
