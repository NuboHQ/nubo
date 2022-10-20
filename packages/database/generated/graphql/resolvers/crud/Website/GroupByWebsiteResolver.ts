import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByWebsiteArgs } from "./args/GroupByWebsiteArgs";
import { Website } from "../../../models/Website";
import { WebsiteGroupBy } from "../../outputs/WebsiteGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Website)
export class GroupByWebsiteResolver {
  @TypeGraphQL.Query(_returns => [WebsiteGroupBy], {
    nullable: false
  })
  async groupByWebsite(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWebsiteArgs): Promise<WebsiteGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).website.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
