import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { PageListRelationFilter } from "../inputs/PageListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("WebsiteWhereInput", {
  isAbstract: true
})
export class WebsiteWhereInput {
  @TypeGraphQL.Field(_type => [WebsiteWhereInput], {
    nullable: true
  })
  AND?: WebsiteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WebsiteWhereInput], {
    nullable: true
  })
  OR?: WebsiteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WebsiteWhereInput], {
    nullable: true
  })
  NOT?: WebsiteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  domains?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => PageListRelationFilter, {
    nullable: true
  })
  pages?: PageListRelationFilter | undefined;
}
