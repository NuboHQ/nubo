import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PageOrderByWithAggregationInput } from "../../../inputs/PageOrderByWithAggregationInput";
import { PageScalarWhereWithAggregatesInput } from "../../../inputs/PageScalarWhereWithAggregatesInput";
import { PageWhereInput } from "../../../inputs/PageWhereInput";
import { PageScalarFieldEnum } from "../../../../enums/PageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPageArgs {
  @TypeGraphQL.Field(_type => PageWhereInput, {
    nullable: true
  })
  where?: PageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PageOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PageOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PageScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title">;

  @TypeGraphQL.Field(_type => PageScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PageScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
