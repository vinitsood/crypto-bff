import { ApolloServer, gql } from "apollo-server-lambda";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { getOpenHighLowCloseVolume } from "./coinapi";

export const handler = async event => {
  console.log(event);

  const x = await getOpenHighLowCloseVolume();
  console.log(x);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "testing" }),
  };
};

const server = new ApolloServer({ typeDefs, resolvers });

export const handler1 = server.createHandler();
