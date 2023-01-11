import { createModule, gql } from "graphql-modules";
import { LoginData } from "./loginData";
import { login_details_data } from "./loginUserData";

export const secondModule = createModule({
  id: "secondModle",
  providers: [
    {
      provide: LoginData,
      useValue: login_details_data,
    },
  ],
  typeDefs: gql`
    type Query {
      Login: [LoginType]
    }

    type LoginType {
      email: String
      name: String
    }
  `,
  resolvers: {
    Query: {
      Login: (_: any, __: any, { injector }: any) => {
        return injector.get(LoginData);
      },
    },
  },
});
