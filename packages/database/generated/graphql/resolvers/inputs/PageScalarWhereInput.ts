import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PageScalarWhereInput", {
  isAbstract: true
})
export class PageScalarWhereInput {
  @TypeGraphQL.Field(_type => [PageScalarWhereInput], {
    nullable: true
  })
  AND?: PageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PageScalarWhereInput], {
    nullable: true
  })
  OR?: PageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PageScalarWhereInput], {
    nullable: true
  })
  NOT?: PageScalarWhereInput[] | undefined;

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
}
