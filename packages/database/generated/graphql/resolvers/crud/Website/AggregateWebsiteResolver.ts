import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateWebsiteArgs } from "./args/AggregateWebsiteArgs";
import { Website } from "../../../models/Website";
import { AggregateWebsite } from "../../outputs/AggregateWebsite";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Website)
export class AggregateWebsiteResolver {
  @TypeGraphQL.Query(_returns => AggregateWebsite, {
    nullable: false
  })
  async aggregateWebsite(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWebsiteArgs): Promise<AggregateWebsite> {
    return getPrismaFromContext(ctx).website.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
