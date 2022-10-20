import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsiteOrderByWithRelationInput } from "../../../inputs/WebsiteOrderByWithRelationInput";
import { WebsiteWhereInput } from "../../../inputs/WebsiteWhereInput";
import { WebsiteWhereUniqueInput } from "../../../inputs/WebsiteWhereUniqueInput";
import { WebsiteScalarFieldEnum } from "../../../../enums/WebsiteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstWebsiteArgs {
  @TypeGraphQL.Field(_type => WebsiteWhereInput, {
    nullable: true
  })
  where?: WebsiteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WebsiteOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: WebsiteOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: true
  })
  cursor?: WebsiteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [WebsiteScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "domains"> | undefined;
}
