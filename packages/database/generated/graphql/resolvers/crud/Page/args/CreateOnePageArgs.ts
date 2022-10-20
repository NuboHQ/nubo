import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PageCreateInput } from "../../../inputs/PageCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePageArgs {
  @TypeGraphQL.Field(_type => PageCreateInput, {
    nullable: false
  })
  data!: PageCreateInput;
}
