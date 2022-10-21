import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PageCreateWithoutWebsiteInput } from "../inputs/PageCreateWithoutWebsiteInput";
import { PageUpdateWithoutWebsiteInput } from "../inputs/PageUpdateWithoutWebsiteInput";
import { PageWhereUniqueInput } from "../inputs/PageWhereUniqueInput";

@TypeGraphQL.InputType("PageUpsertWithWhereUniqueWithoutWebsiteInput", {
  isAbstract: true
})
export class PageUpsertWithWhereUniqueWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => PageWhereUniqueInput, {
    nullable: false
  })
  where!: PageWhereUniqueInput;

  @TypeGraphQL.Field(_type => PageUpdateWithoutWebsiteInput, {
    nullable: false
  })
  update!: PageUpdateWithoutWebsiteInput;

  @TypeGraphQL.Field(_type => PageCreateWithoutWebsiteInput, {
    nullable: false
  })
  create!: PageCreateWithoutWebsiteInput;
}
