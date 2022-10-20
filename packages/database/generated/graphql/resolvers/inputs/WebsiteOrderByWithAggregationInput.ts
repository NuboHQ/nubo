import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCountOrderByAggregateInput } from "../inputs/WebsiteCountOrderByAggregateInput";
import { WebsiteMaxOrderByAggregateInput } from "../inputs/WebsiteMaxOrderByAggregateInput";
import { WebsiteMinOrderByAggregateInput } from "../inputs/WebsiteMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WebsiteOrderByWithAggregationInput", {
  isAbstract: true
})
export class WebsiteOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  domains?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => WebsiteCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WebsiteCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WebsiteMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WebsiteMinOrderByAggregateInput | undefined;
}
