import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePageArgs } from "./args/AggregatePageArgs";
import { Page } from "../../../models/Page";
import { AggregatePage } from "../../outputs/AggregatePage";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Page)
export class AggregatePageResolver {
  @TypeGraphQL.Query(_returns => AggregatePage, {
    nullable: false
  })
  async aggregatePage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePageArgs): Promise<AggregatePage> {
    return getPrismaFromContext(ctx).page.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
