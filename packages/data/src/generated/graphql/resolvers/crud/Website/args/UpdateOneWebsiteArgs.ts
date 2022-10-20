import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsiteUpdateInput } from "../../../inputs/WebsiteUpdateInput";
import { WebsiteWhereUniqueInput } from "../../../inputs/WebsiteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWebsiteArgs {
  @TypeGraphQL.Field(_type => WebsiteUpdateInput, {
    nullable: false
  })
  data!: WebsiteUpdateInput;

  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: false
  })
  where!: WebsiteWhereUniqueInput;
}
