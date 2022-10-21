import * as TypeGraphQL from "type-graphql";

export enum WebsiteScalarFieldEnum {
  id = "id",
  created = "created",
  updated = "updated",
  name = "name",
  domains = "domains"
}
TypeGraphQL.registerEnumType(WebsiteScalarFieldEnum, {
  name: "WebsiteScalarFieldEnum",
  description: undefined,
});
