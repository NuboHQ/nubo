import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsiteOrderByWithAggregationInput } from "../../../inputs/WebsiteOrderByWithAggregationInput";
import { WebsiteScalarWhereWithAggregatesInput } from "../../../inputs/WebsiteScalarWhereWithAggregatesInput";
import { WebsiteWhereInput } from "../../../inputs/WebsiteWhereInput";
import { WebsiteScalarFieldEnum } from "../../../../enums/WebsiteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWebsiteArgs {
  @TypeGraphQL.Field(_type => WebsiteWhereInput, {
    nullable: true
  })
  where?: WebsiteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WebsiteOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: WebsiteOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [WebsiteScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created" | "updated" | "name" | "domains">;

  @TypeGraphQL.Field(_type => WebsiteScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: WebsiteScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
