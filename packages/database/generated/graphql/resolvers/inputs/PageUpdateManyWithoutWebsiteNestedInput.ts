import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PageCreateManyWebsiteInputEnvelope } from "../inputs/PageCreateManyWebsiteInputEnvelope";
import { PageCreateOrConnectWithoutWebsiteInput } from "../inputs/PageCreateOrConnectWithoutWebsiteInput";
import { PageCreateWithoutWebsiteInput } from "../inputs/PageCreateWithoutWebsiteInput";
import { PageScalarWhereInput } from "../inputs/PageScalarWhereInput";
import { PageUpdateManyWithWhereWithoutWebsiteInput } from "../inputs/PageUpdateManyWithWhereWithoutWebsiteInput";
import { PageUpdateWithWhereUniqueWithoutWebsiteInput } from "../inputs/PageUpdateWithWhereUniqueWithoutWebsiteInput";
import { PageUpsertWithWhereUniqueWithoutWebsiteInput } from "../inputs/PageUpsertWithWhereUniqueWithoutWebsiteInput";
import { PageWhereUniqueInput } from "../inputs/PageWhereUniqueInput";

@TypeGraphQL.InputType("PageUpdateManyWithoutWebsiteNestedInput", {
  isAbstract: true
})
export class PageUpdateManyWithoutWebsiteNestedInput {
  @TypeGraphQL.Field(_type => [PageCreateWithoutWebsiteInput], {
    nullable: true
  })
  create?: PageCreateWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [PageCreateOrConnectWithoutWebsiteInput], {
    nullable: true
  })
  connectOrCreate?: PageCreateOrConnectWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [PageUpsertWithWhereUniqueWithoutWebsiteInput], {
    nullable: true
  })
  upsert?: PageUpsertWithWhereUniqueWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => PageCreateManyWebsiteInputEnvelope, {
    nullable: true
  })
  createMany?: PageCreateManyWebsiteInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PageWhereUniqueInput], {
    nullable: true
  })
  set?: PageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PageWhereUniqueInput], {
    nullable: true
  })
  delete?: PageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PageWhereUniqueInput], {
    nullable: true
  })
  connect?: PageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PageUpdateWithWhereUniqueWithoutWebsiteInput], {
    nullable: true
  })
  update?: PageUpdateWithWhereUniqueWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [PageUpdateManyWithWhereWithoutWebsiteInput], {
    nullable: true
  })
  updateMany?: PageUpdateManyWithWhereWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [PageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PageScalarWhereInput[] | undefined;
}
