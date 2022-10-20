import * as TypeGraphQL from "type-graphql";
import { Page } from "../../../models/Page";
import { Website } from "../../../models/Website";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Page)
export class PageRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Website, {
    nullable: false
  })
  async website(@TypeGraphQL.Root() page: Page, @TypeGraphQL.Ctx() ctx: any): Promise<Website> {
    return getPrismaFromContext(ctx).page.findUnique({
      where: {
        id: page.id,
      },
    }).website({});
  }
}
