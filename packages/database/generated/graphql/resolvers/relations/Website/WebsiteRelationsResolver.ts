import * as TypeGraphQL from "type-graphql";
import { Page } from "../../../models/Page";
import { Website } from "../../../models/Website";
import { WebsitePagesArgs } from "./args/WebsitePagesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Website)
export class WebsiteRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Page], {
    nullable: false
  })
  async pages(@TypeGraphQL.Root() website: Website, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: WebsitePagesArgs): Promise<Page[]> {
    return getPrismaFromContext(ctx).website.findUnique({
      where: {
        id: website.id,
      },
    }).pages(args);
  }
}
