import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsiteUpdateManyMutationInput } from "../../../inputs/WebsiteUpdateManyMutationInput";
import { WebsiteWhereInput } from "../../../inputs/WebsiteWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWebsiteArgs {
  @TypeGraphQL.Field(_type => WebsiteUpdateManyMutationInput, {
    nullable: false
  })
  data!: WebsiteUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => WebsiteWhereInput, {
    nullable: true
  })
  where?: WebsiteWhereInput | undefined;
}
