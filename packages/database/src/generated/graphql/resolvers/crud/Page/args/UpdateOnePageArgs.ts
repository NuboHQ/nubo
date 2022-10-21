import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PageUpdateInput } from "../../../inputs/PageUpdateInput";
import { PageWhereUniqueInput } from "../../../inputs/PageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePageArgs {
  @TypeGraphQL.Field(_type => PageUpdateInput, {
    nullable: false
  })
  data!: PageUpdateInput;

  @TypeGraphQL.Field(_type => PageWhereUniqueInput, {
    nullable: false
  })
  where!: PageWhereUniqueInput;
}
