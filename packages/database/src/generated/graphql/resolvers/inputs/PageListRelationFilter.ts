import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PageWhereInput } from "../inputs/PageWhereInput";

@TypeGraphQL.InputType("PageListRelationFilter", {
  isAbstract: true
})
export class PageListRelationFilter {
  @TypeGraphQL.Field(_type => PageWhereInput, {
    nullable: true
  })
  every?: PageWhereInput | undefined;

  @TypeGraphQL.Field(_type => PageWhereInput, {
    nullable: true
  })
  some?: PageWhereInput | undefined;

  @TypeGraphQL.Field(_type => PageWhereInput, {
    nullable: true
  })
  none?: PageWhereInput | undefined;
}
