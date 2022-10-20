import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Website: crudResolvers.WebsiteCrudResolver,
  Page: crudResolvers.PageCrudResolver
};
const actionResolversMap = {
  Website: {
    aggregateWebsite: actionResolvers.AggregateWebsiteResolver,
    createManyWebsite: actionResolvers.CreateManyWebsiteResolver,
    createOneWebsite: actionResolvers.CreateOneWebsiteResolver,
    deleteManyWebsite: actionResolvers.DeleteManyWebsiteResolver,
    deleteOneWebsite: actionResolvers.DeleteOneWebsiteResolver,
    findFirstWebsite: actionResolvers.FindFirstWebsiteResolver,
    websites: actionResolvers.FindManyWebsiteResolver,
    website: actionResolvers.FindUniqueWebsiteResolver,
    groupByWebsite: actionResolvers.GroupByWebsiteResolver,
    updateManyWebsite: actionResolvers.UpdateManyWebsiteResolver,
    updateOneWebsite: actionResolvers.UpdateOneWebsiteResolver,
    upsertOneWebsite: actionResolvers.UpsertOneWebsiteResolver
  },
  Page: {
    aggregatePage: actionResolvers.AggregatePageResolver,
    createManyPage: actionResolvers.CreateManyPageResolver,
    createOnePage: actionResolvers.CreateOnePageResolver,
    deleteManyPage: actionResolvers.DeleteManyPageResolver,
    deleteOnePage: actionResolvers.DeleteOnePageResolver,
    findFirstPage: actionResolvers.FindFirstPageResolver,
    pages: actionResolvers.FindManyPageResolver,
    page: actionResolvers.FindUniquePageResolver,
    groupByPage: actionResolvers.GroupByPageResolver,
    updateManyPage: actionResolvers.UpdateManyPageResolver,
    updateOnePage: actionResolvers.UpdateOnePageResolver,
    upsertOnePage: actionResolvers.UpsertOnePageResolver
  }
};
const crudResolversInfo = {
  Website: ["aggregateWebsite", "createManyWebsite", "createOneWebsite", "deleteManyWebsite", "deleteOneWebsite", "findFirstWebsite", "websites", "website", "groupByWebsite", "updateManyWebsite", "updateOneWebsite", "upsertOneWebsite"],
  Page: ["aggregatePage", "createManyPage", "createOnePage", "deleteManyPage", "deleteOnePage", "findFirstPage", "pages", "page", "groupByPage", "updateManyPage", "updateOnePage", "upsertOnePage"]
};
const argsInfo = {
  AggregateWebsiteArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWebsiteArgs: ["data", "skipDuplicates"],
  CreateOneWebsiteArgs: ["data"],
  DeleteManyWebsiteArgs: ["where"],
  DeleteOneWebsiteArgs: ["where"],
  FindFirstWebsiteArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWebsiteArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWebsiteArgs: ["where"],
  GroupByWebsiteArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWebsiteArgs: ["data", "where"],
  UpdateOneWebsiteArgs: ["data", "where"],
  UpsertOneWebsiteArgs: ["where", "create", "update"],
  AggregatePageArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPageArgs: ["data", "skipDuplicates"],
  CreateOnePageArgs: ["data"],
  DeleteManyPageArgs: ["where"],
  DeleteOnePageArgs: ["where"],
  FindFirstPageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePageArgs: ["where"],
  GroupByPageArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPageArgs: ["data", "where"],
  UpdateOnePageArgs: ["data", "where"],
  UpsertOnePageArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Website: relationResolvers.WebsiteRelationsResolver,
  Page: relationResolvers.PageRelationsResolver
};
const relationResolversInfo = {
  Website: ["pages"],
  Page: ["website"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Website: ["id", "created", "updated", "name", "domains"],
  Page: ["id", "created", "updated", "title", "path", "websiteId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateWebsite: ["_count", "_min", "_max"],
  WebsiteGroupBy: ["id", "created", "updated", "name", "domains", "_count", "_min", "_max"],
  AggregatePage: ["_count", "_min", "_max"],
  PageGroupBy: ["id", "created", "updated", "title", "path", "websiteId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  WebsiteCount: ["pages"],
  WebsiteCountAggregate: ["id", "created", "updated", "name", "domains", "_all"],
  WebsiteMinAggregate: ["id", "created", "updated", "name"],
  WebsiteMaxAggregate: ["id", "created", "updated", "name"],
  PageCountAggregate: ["id", "created", "updated", "title", "path", "websiteId", "_all"],
  PageMinAggregate: ["id", "created", "updated", "title", "path", "websiteId"],
  PageMaxAggregate: ["id", "created", "updated", "title", "path", "websiteId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  WebsiteWhereInput: ["AND", "OR", "NOT", "id", "created", "updated", "name", "domains", "pages"],
  WebsiteOrderByWithRelationInput: ["id", "created", "updated", "name", "domains", "pages"],
  WebsiteWhereUniqueInput: ["id"],
  WebsiteOrderByWithAggregationInput: ["id", "created", "updated", "name", "domains", "_count", "_max", "_min"],
  WebsiteScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "created", "updated", "name", "domains"],
  PageWhereInput: ["AND", "OR", "NOT", "id", "created", "updated", "title", "path", "websiteId", "website"],
  PageOrderByWithRelationInput: ["id", "created", "updated", "title", "path", "websiteId", "website"],
  PageWhereUniqueInput: ["id"],
  PageOrderByWithAggregationInput: ["id", "created", "updated", "title", "path", "websiteId", "_count", "_max", "_min"],
  PageScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "created", "updated", "title", "path", "websiteId"],
  WebsiteCreateInput: ["id", "created", "updated", "name", "domains", "pages"],
  WebsiteUpdateInput: ["id", "created", "updated", "name", "domains", "pages"],
  WebsiteCreateManyInput: ["id", "created", "updated", "name", "domains"],
  WebsiteUpdateManyMutationInput: ["id", "created", "updated", "name", "domains"],
  PageCreateInput: ["id", "created", "updated", "title", "path", "website"],
  PageUpdateInput: ["id", "created", "updated", "title", "path", "website"],
  PageCreateManyInput: ["id", "created", "updated", "title", "path", "websiteId"],
  PageUpdateManyMutationInput: ["id", "created", "updated", "title", "path"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  JsonFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  PageListRelationFilter: ["every", "some", "none"],
  PageOrderByRelationAggregateInput: ["_count"],
  WebsiteCountOrderByAggregateInput: ["id", "created", "updated", "name", "domains"],
  WebsiteMaxOrderByAggregateInput: ["id", "created", "updated", "name"],
  WebsiteMinOrderByAggregateInput: ["id", "created", "updated", "name"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  JsonWithAggregatesFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  WebsiteRelationFilter: ["is", "isNot"],
  PageCountOrderByAggregateInput: ["id", "created", "updated", "title", "path", "websiteId"],
  PageMaxOrderByAggregateInput: ["id", "created", "updated", "title", "path", "websiteId"],
  PageMinOrderByAggregateInput: ["id", "created", "updated", "title", "path", "websiteId"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  PageCreateNestedManyWithoutWebsiteInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  PageUpdateManyWithoutWebsiteNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  WebsiteCreateNestedOneWithoutPagesInput: ["create", "connectOrCreate", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  WebsiteUpdateOneRequiredWithoutPagesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedJsonFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PageCreateWithoutWebsiteInput: ["id", "created", "updated", "title", "path"],
  PageCreateOrConnectWithoutWebsiteInput: ["where", "create"],
  PageCreateManyWebsiteInputEnvelope: ["data", "skipDuplicates"],
  PageUpsertWithWhereUniqueWithoutWebsiteInput: ["where", "update", "create"],
  PageUpdateWithWhereUniqueWithoutWebsiteInput: ["where", "data"],
  PageUpdateManyWithWhereWithoutWebsiteInput: ["where", "data"],
  PageScalarWhereInput: ["AND", "OR", "NOT", "id", "created", "updated", "title", "path", "websiteId"],
  WebsiteCreateWithoutPagesInput: ["id", "created", "updated", "name", "domains"],
  WebsiteCreateOrConnectWithoutPagesInput: ["where", "create"],
  WebsiteUpsertWithoutPagesInput: ["update", "create"],
  WebsiteUpdateWithoutPagesInput: ["id", "created", "updated", "name", "domains"],
  PageCreateManyWebsiteInput: ["id", "created", "updated", "title", "path"],
  PageUpdateWithoutWebsiteInput: ["id", "created", "updated", "title", "path"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

