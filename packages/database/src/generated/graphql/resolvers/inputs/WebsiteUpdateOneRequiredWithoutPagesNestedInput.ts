import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateOrConnectWithoutPagesInput } from "../inputs/WebsiteCreateOrConnectWithoutPagesInput";
import { WebsiteCreateWithoutPagesInput } from "../inputs/WebsiteCreateWithoutPagesInput";
import { WebsiteUpdateWithoutPagesInput } from "../inputs/WebsiteUpdateWithoutPagesInput";
import { WebsiteUpsertWithoutPagesInput } from "../inputs/WebsiteUpsertWithoutPagesInput";
import { WebsiteWhereUniqueInput } from "../inputs/WebsiteWhereUniqueInput";

@TypeGraphQL.InputType("WebsiteUpdateOneRequiredWithoutPagesNestedInput", {
  isAbstract: true
})
export class WebsiteUpdateOneRequiredWithoutPagesNestedInput {
  @TypeGraphQL.Field(_type => WebsiteCreateWithoutPagesInput, {
    nullable: true
  })
  create?: WebsiteCreateWithoutPagesInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteCreateOrConnectWithoutPagesInput, {
    nullable: true
  })
  connectOrCreate?: WebsiteCreateOrConnectWithoutPagesInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteUpsertWithoutPagesInput, {
    nullable: true
  })
  upsert?: WebsiteUpsertWithoutPagesInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: true
  })
  connect?: WebsiteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteUpdateWithoutPagesInput, {
    nullable: true
  })
  update?: WebsiteUpdateWithoutPagesInput | undefined;
}
