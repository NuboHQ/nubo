import * as TypeGraphQL from "type-graphql";

export enum WebsiteScalarFieldEnum {
  id = "id",
  name = "name",
  domains = "domains"
}
TypeGraphQL.registerEnumType(WebsiteScalarFieldEnum, {
  name: "WebsiteScalarFieldEnum",
  description: undefined,
});
