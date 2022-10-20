import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCountAggregate } from "../outputs/WebsiteCountAggregate";
import { WebsiteMaxAggregate } from "../outputs/WebsiteMaxAggregate";
import { WebsiteMinAggregate } from "../outputs/WebsiteMinAggregate";

@TypeGraphQL.ObjectType("WebsiteGroupBy", {
  isAbstract: true
})
export class WebsiteGroupBy {
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

  @TypeGraphQL.Field(_type => WebsiteCountAggregate, {
    nullable: true
  })
  _count!: WebsiteCountAggregate | null;

  @TypeGraphQL.Field(_type => WebsiteMinAggregate, {
    nullable: true
  })
  _min!: WebsiteMinAggregate | null;

  @TypeGraphQL.Field(_type => WebsiteMaxAggregate, {
    nullable: true
  })
  _max!: WebsiteMaxAggregate | null;
}
