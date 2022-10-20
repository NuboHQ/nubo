import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PageCreateManyWebsiteInput } from "../inputs/PageCreateManyWebsiteInput";

@TypeGraphQL.InputType("PageCreateManyWebsiteInputEnvelope", {
  isAbstract: true
})
export class PageCreateManyWebsiteInputEnvelope {
  @TypeGraphQL.Field(_type => [PageCreateManyWebsiteInput], {
    nullable: false
  })
  data!: PageCreateManyWebsiteInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
