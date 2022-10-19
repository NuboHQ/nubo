import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsiteWhereInput } from "../../../inputs/WebsiteWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWebsiteArgs {
  @TypeGraphQL.Field(_type => WebsiteWhereInput, {
    nullable: true
  })
  where?: WebsiteWhereInput | undefined;
}
