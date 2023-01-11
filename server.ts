import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { application } from "./application";

const executor = application.createApolloExecutor();

const schema = application.schema;

const server = new ApolloServer({
  schema,
  executor,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

server.listen().then(({ url }) => {
  console.log(`server is ready ${url}`);
});
