import * as TypeGraphQL from "type-graphql";

export enum PageScalarFieldEnum {
  id = "id",
  title = "title"
}
TypeGraphQL.registerEnumType(PageScalarFieldEnum, {
  name: "PageScalarFieldEnum",
  description: undefined,
});
