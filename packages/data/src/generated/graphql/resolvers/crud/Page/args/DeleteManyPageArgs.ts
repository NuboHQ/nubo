import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PageWhereInput } from "../../../inputs/PageWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPageArgs {
  @TypeGraphQL.Field(_type => PageWhereInput, {
    nullable: true
  })
  where?: PageWhereInput | undefined;
}
