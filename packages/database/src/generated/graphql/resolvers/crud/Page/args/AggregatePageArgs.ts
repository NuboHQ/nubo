import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PageOrderByWithRelationInput } from "../../../inputs/PageOrderByWithRelationInput";
import { PageWhereInput } from "../../../inputs/PageWhereInput";
import { PageWhereUniqueInput } from "../../../inputs/PageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePageArgs {
  @TypeGraphQL.Field(_type => PageWhereInput, {
    nullable: true
  })
  where?: PageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PageOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PageOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PageWhereUniqueInput, {
    nullable: true
  })
  cursor?: PageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}