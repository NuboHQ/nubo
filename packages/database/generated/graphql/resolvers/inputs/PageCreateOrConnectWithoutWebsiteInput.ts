import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PageCreateWithoutWebsiteInput } from "../inputs/PageCreateWithoutWebsiteInput";
import { PageWhereUniqueInput } from "../inputs/PageWhereUniqueInput";

@TypeGraphQL.InputType("PageCreateOrConnectWithoutWebsiteInput", {
  isAbstract: true
})
export class PageCreateOrConnectWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => PageWhereUniqueInput, {
    nullable: false
  })
  where!: PageWhereUniqueInput;

  @TypeGraphQL.Field(_type => PageCreateWithoutWebsiteInput, {
    nullable: false
  })
  create!: PageCreateWithoutWebsiteInput;
}
