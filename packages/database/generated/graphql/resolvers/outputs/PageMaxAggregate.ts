import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("PageMaxAggregate", {
  isAbstract: true
})
export class PageMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  path!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  websiteId!: string | null;
}
