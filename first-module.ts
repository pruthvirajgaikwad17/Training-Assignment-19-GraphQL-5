import { createModule, gql } from "graphql-modules";
import "reflect-metadata";
import { UserProvider } from "./user.provider";

export const firstModule = createModule({
  id: "firstModule",
  providers: [UserProvider],
  typeDefs: [
    gql`
      type Query {
        greet: String
        getAllUserData: [User]
      }
      type User {
        id: ID!
        name: String
        username: String
        email: String
      }
    `,
  ],
  resolvers: {
    Query: {
      greet: () => {
        return "Hello World";
      },
      getAllUserData: (root: any, args: any, { injector }: any) => {
        return injector.get(UserProvider).getAllUsers();
      },
    },
  },
});
