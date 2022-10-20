import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsiteCreateInput } from "../../../inputs/WebsiteCreateInput";
import { WebsiteUpdateInput } from "../../../inputs/WebsiteUpdateInput";
import { WebsiteWhereUniqueInput } from "../../../inputs/WebsiteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWebsiteArgs {
  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: false
  })
  where!: WebsiteWhereUniqueInput;

  @TypeGraphQL.Field(_type => WebsiteCreateInput, {
    nullable: false
  })
  create!: WebsiteCreateInput;

  @TypeGraphQL.Field(_type => WebsiteUpdateInput, {
    nullable: false
  })
  update!: WebsiteUpdateInput;
}
