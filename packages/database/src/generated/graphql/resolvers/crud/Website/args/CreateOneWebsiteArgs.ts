import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsiteCreateInput } from "../../../inputs/WebsiteCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWebsiteArgs {
  @TypeGraphQL.Field(_type => WebsiteCreateInput, {
    nullable: false
  })
  data!: WebsiteCreateInput;
}
