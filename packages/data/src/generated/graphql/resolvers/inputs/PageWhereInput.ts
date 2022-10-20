import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;
}
