import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateOrConnectWithoutPagesInput } from "../inputs/WebsiteCreateOrConnectWithoutPagesInput";
import { WebsiteCreateWithoutPagesInput } from "../inputs/WebsiteCreateWithoutPagesInput";
import { WebsiteWhereUniqueInput } from "../inputs/WebsiteWhereUniqueInput";

@TypeGraphQL.InputType("WebsiteCreateNestedOneWithoutPagesInput", {
  isAbstract: true
})
export class WebsiteCreateNestedOneWithoutPagesInput {
  @TypeGraphQL.Field(_type => WebsiteCreateWithoutPagesInput, {
    nullable: true
  })
  create?: WebsiteCreateWithoutPagesInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteCreateOrConnectWithoutPagesInput, {
    nullable: true
  })
  connectOrCreate?: WebsiteCreateOrConnectWithoutPagesInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: true
  })
  connect?: WebsiteWhereUniqueInput | undefined;
}
