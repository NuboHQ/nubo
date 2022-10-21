import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PageCreateManyWebsiteInputEnvelope } from "../inputs/PageCreateManyWebsiteInputEnvelope";
import { PageCreateOrConnectWithoutWebsiteInput } from "../inputs/PageCreateOrConnectWithoutWebsiteInput";
import { PageCreateWithoutWebsiteInput } from "../inputs/PageCreateWithoutWebsiteInput";
import { PageWhereUniqueInput } from "../inputs/PageWhereUniqueInput";

@TypeGraphQL.InputType("PageCreateNestedManyWithoutWebsiteInput", {
  isAbstract: true
})
export class PageCreateNestedManyWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => [PageCreateWithoutWebsiteInput], {
    nullable: true
  })
  create?: PageCreateWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [PageCreateOrConnectWithoutWebsiteInput], {
    nullable: true
  })
  connectOrCreate?: PageCreateOrConnectWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => PageCreateManyWebsiteInputEnvelope, {
    nullable: true
  })
  createMany?: PageCreateManyWebsiteInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PageWhereUniqueInput], {
    nullable: true
  })
  connect?: PageWhereUniqueInput[] | undefined;
}
