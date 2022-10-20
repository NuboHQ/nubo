import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteWhereInput } from "../inputs/WebsiteWhereInput";

@TypeGraphQL.InputType("WebsiteRelationFilter", {
  isAbstract: true
})
export class WebsiteRelationFilter {
  @TypeGraphQL.Field(_type => WebsiteWhereInput, {
    nullable: true
  })
  is?: WebsiteWhereInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteWhereInput, {
    nullable: true
  })
  isNot?: WebsiteWhereInput | undefined;
}
