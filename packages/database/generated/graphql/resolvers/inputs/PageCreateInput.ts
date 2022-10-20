import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateNestedOneWithoutPagesInput } from "../inputs/WebsiteCreateNestedOneWithoutPagesInput";

@TypeGraphQL.InputType("PageCreateInput", {
  isAbstract: true
})
export class PageCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  path?: string | undefined;

  @TypeGraphQL.Field(_type => WebsiteCreateNestedOneWithoutPagesInput, {
    nullable: false
  })
  website!: WebsiteCreateNestedOneWithoutPagesInput;
}
