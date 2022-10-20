import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PageCreateManyInput } from "../../../inputs/PageCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPageArgs {
  @TypeGraphQL.Field(_type => [PageCreateManyInput], {
    nullable: false
  })
  data!: PageCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
