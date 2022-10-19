import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PageCountAggregate } from "../outputs/PageCountAggregate";
import { PageMaxAggregate } from "../outputs/PageMaxAggregate";
import { PageMinAggregate } from "../outputs/PageMinAggregate";

@TypeGraphQL.ObjectType("AggregatePage", {
  isAbstract: true
})
export class AggregatePage {
  @TypeGraphQL.Field(_type => PageCountAggregate, {
    nullable: true
  })
  _count!: PageCountAggregate | null;

  @TypeGraphQL.Field(_type => PageMinAggregate, {
    nullable: true
  })
  _min!: PageMinAggregate | null;

  @TypeGraphQL.Field(_type => PageMaxAggregate, {
    nullable: true
  })
  _max!: PageMaxAggregate | null;
}
