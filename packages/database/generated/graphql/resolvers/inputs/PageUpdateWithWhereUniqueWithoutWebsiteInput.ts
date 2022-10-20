import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PageUpdateWithoutWebsiteInput } from "../inputs/PageUpdateWithoutWebsiteInput";
import { PageWhereUniqueInput } from "../inputs/PageWhereUniqueInput";

@TypeGraphQL.InputType("PageUpdateWithWhereUniqueWithoutWebsiteInput", {
  isAbstract: true
})
export class PageUpdateWithWhereUniqueWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => PageWhereUniqueInput, {
    nullable: false
  })
  where!: PageWhereUniqueInput;

  @TypeGraphQL.Field(_type => PageUpdateWithoutWebsiteInput, {
    nullable: false
  })
  data!: PageUpdateWithoutWebsiteInput;
}
