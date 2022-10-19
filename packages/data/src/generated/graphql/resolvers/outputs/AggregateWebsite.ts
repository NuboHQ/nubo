import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCountAggregate } from "../outputs/WebsiteCountAggregate";
import { WebsiteMaxAggregate } from "../outputs/WebsiteMaxAggregate";
import { WebsiteMinAggregate } from "../outputs/WebsiteMinAggregate";

@TypeGraphQL.ObjectType("AggregateWebsite", {
  isAbstract: true
})
export class AggregateWebsite {
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
