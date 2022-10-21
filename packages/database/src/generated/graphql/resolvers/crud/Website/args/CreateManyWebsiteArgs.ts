import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsiteCreateManyInput } from "../../../inputs/WebsiteCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWebsiteArgs {
  @TypeGraphQL.Field(_type => [WebsiteCreateManyInput], {
    nullable: false
  })
  data!: WebsiteCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
