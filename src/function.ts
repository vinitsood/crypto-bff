import { ApolloServer, gql } from "apollo-server-lambda";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

export const handler = async event => {
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello test" }),
  };
};

const server = new ApolloServer({ typeDefs, resolvers });

export const graphqlHandler = server.createHandler();
