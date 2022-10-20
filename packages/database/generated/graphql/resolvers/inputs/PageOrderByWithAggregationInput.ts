import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PageCountOrderByAggregateInput } from "../inputs/PageCountOrderByAggregateInput";
import { PageMaxOrderByAggregateInput } from "../inputs/PageMaxOrderByAggregateInput";
import { PageMinOrderByAggregateInput } from "../inputs/PageMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PageOrderByWithAggregationInput", {
  isAbstract: true
})
export class PageOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PageCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PageCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PageMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PageMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PageMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PageMinOrderByAggregateInput | undefined;
}
