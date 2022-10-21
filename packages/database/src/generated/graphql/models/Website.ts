import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Page } from "../models/Page";
import { WebsiteCount } from "../resolvers/outputs/WebsiteCount";

@TypeGraphQL.ObjectType("Website", {
  isAbstract: true
})
export class Website {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  domains!: Prisma.JsonValue;

  pages?: Page[];

  @TypeGraphQL.Field(_type => WebsiteCount, {
    nullable: true
  })
  _count?: WebsiteCount | null;
}
