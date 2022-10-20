import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PageWhereUniqueInput } from "../../../inputs/PageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePageArgs {
  @TypeGraphQL.Field(_type => PageWhereUniqueInput, {
    nullable: false
  })
  where!: PageWhereUniqueInput;
}
