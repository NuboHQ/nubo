import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PageUpdateManyMutationInput } from "../../../inputs/PageUpdateManyMutationInput";
import { PageWhereInput } from "../../../inputs/PageWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPageArgs {
  @TypeGraphQL.Field(_type => PageUpdateManyMutationInput, {
    nullable: false
  })
  data!: PageUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PageWhereInput, {
    nullable: true
  })
  where?: PageWhereInput | undefined;
}
