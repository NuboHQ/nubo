import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { WebsiteRelationFilter } from "../inputs/WebsiteRelationFilter";

@TypeGraphQL.InputType("PageWhereInput", {
  isAbstract: true
})
export class PageWhereInput {
  @TypeGraphQL.Field(_type => [PageWhereInput], {
    nullable: true
  })
  AND?: PageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PageWhereInput], {
    nullable: true
  })
  OR?: PageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PageWhereInput], {
    nullable: true
  })
  NOT?: PageWhereInput[] | undefined;

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
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  path?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  websiteId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => WebsiteRelationFilter, {
    nullable: true
  })
  website?: WebsiteRelationFilter | undefined;
}
