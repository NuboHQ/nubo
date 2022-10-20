import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PageScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PageScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;
}
