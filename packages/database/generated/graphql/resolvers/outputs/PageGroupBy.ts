import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PageCountAggregate } from "../outputs/PageCountAggregate";
import { PageMaxAggregate } from "../outputs/PageMaxAggregate";
import { PageMinAggregate } from "../outputs/PageMinAggregate";

@TypeGraphQL.ObjectType("PageGroupBy", {
  isAbstract: true
})
export class PageGroupBy {
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
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  path!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  websiteId!: string;

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
