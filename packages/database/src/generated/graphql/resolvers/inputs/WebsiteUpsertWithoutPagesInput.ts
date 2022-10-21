import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateWithoutPagesInput } from "../inputs/WebsiteCreateWithoutPagesInput";
import { WebsiteUpdateWithoutPagesInput } from "../inputs/WebsiteUpdateWithoutPagesInput";

@TypeGraphQL.InputType("WebsiteUpsertWithoutPagesInput", {
  isAbstract: true
})
export class WebsiteUpsertWithoutPagesInput {
  @TypeGraphQL.Field(_type => WebsiteUpdateWithoutPagesInput, {
    nullable: false
  })
  update!: WebsiteUpdateWithoutPagesInput;

  @TypeGraphQL.Field(_type => WebsiteCreateWithoutPagesInput, {
    nullable: false
  })
  create!: WebsiteCreateWithoutPagesInput;
}
