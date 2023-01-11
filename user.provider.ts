import { RESTDataSource } from "apollo-datasource-rest";
import { Injectable } from "graphql-modules";

type DataSourceConfig = /*unresolved*/ any;
@Injectable()
export class UserProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com/users";
    this.initialize({} as DataSourceConfig);
  }
  async getAllUsers() {
    const data = await this.get("");
    return data;
  }
}
