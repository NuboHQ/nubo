import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateWithoutPagesInput } from "../inputs/WebsiteCreateWithoutPagesInput";
import { WebsiteWhereUniqueInput } from "../inputs/WebsiteWhereUniqueInput";

@TypeGraphQL.InputType("WebsiteCreateOrConnectWithoutPagesInput", {
  isAbstract: true
})
export class WebsiteCreateOrConnectWithoutPagesInput {
  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: false
  })
  where!: WebsiteWhereUniqueInput;

  @TypeGraphQL.Field(_type => WebsiteCreateWithoutPagesInput, {
    nullable: false
  })
  create!: WebsiteCreateWithoutPagesInput;
}
