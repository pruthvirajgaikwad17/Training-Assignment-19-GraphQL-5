import { createApplication } from "graphql-modules";
import { firstModule } from "./first-module";
import { secondModule } from "./second-module";
import { thirdModule } from "./third-module";

export const application = createApplication({
  modules: [firstModule, secondModule, thirdModule],
});
