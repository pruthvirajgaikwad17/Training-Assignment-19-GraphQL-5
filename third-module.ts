import { createModule, gql } from "graphql-modules";
import { ApiKey } from "./third.provider";

const abc = "a";

export const thirdModule = createModule({
  id: "thirdModle",
  providers: [
    {
      provide: ApiKey,
      useFactory() {
        if (abc) {
          return "This is Factory Text";
        } else {
          return "This is else factory text";
        }
      },
    },
  ],
  typeDefs: gql`
    type Query {
      greetThird: String
      factoryProv: String
    }
  `,
  resolvers: {
    Query: {
      greetThird: () => {
        return "Third Module";
      },
      factoryProv: (_: any, __: any, { injector }: any) => {
        return injector.get(ApiKey);
      },
    },
  },
});
