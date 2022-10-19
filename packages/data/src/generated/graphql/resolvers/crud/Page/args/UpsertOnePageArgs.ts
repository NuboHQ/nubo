import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PageCreateInput } from "../../../inputs/PageCreateInput";
import { PageUpdateInput } from "../../../inputs/PageUpdateInput";
import { PageWhereUniqueInput } from "../../../inputs/PageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePageArgs {
  @TypeGraphQL.Field(_type => PageWhereUniqueInput, {
    nullable: false
  })
  where!: PageWhereUniqueInput;

  @TypeGraphQL.Field(_type => PageCreateInput, {
    nullable: false
  })
  create!: PageCreateInput;

  @TypeGraphQL.Field(_type => PageUpdateInput, {
    nullable: false
  })
  update!: PageUpdateInput;
}
