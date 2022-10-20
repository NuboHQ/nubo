import * as TypeGraphQL from "type-graphql";

export enum PageScalarFieldEnum {
  id = "id",
  created = "created",
  updated = "updated",
  title = "title",
  path = "path",
  websiteId = "websiteId"
}
TypeGraphQL.registerEnumType(PageScalarFieldEnum, {
  name: "PageScalarFieldEnum",
  description: undefined,
});
