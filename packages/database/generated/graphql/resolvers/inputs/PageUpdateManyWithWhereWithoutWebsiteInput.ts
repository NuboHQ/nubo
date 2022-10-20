import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PageScalarWhereInput } from "../inputs/PageScalarWhereInput";
import { PageUpdateManyMutationInput } from "../inputs/PageUpdateManyMutationInput";

@TypeGraphQL.InputType("PageUpdateManyWithWhereWithoutWebsiteInput", {
  isAbstract: true
})
export class PageUpdateManyWithWhereWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => PageScalarWhereInput, {
    nullable: false
  })
  where!: PageScalarWhereInput;

  @TypeGraphQL.Field(_type => PageUpdateManyMutationInput, {
    nullable: false
  })
  data!: PageUpdateManyMutationInput;
}
