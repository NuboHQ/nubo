import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Int: number,
    String: string,
    DateTime: any,
    JSON: any,
    Boolean: boolean,
}

export interface Query {
    aggregatePage: AggregatePage
    findFirstPage?: Page
    pages: Page[]
    page?: Page
    groupByPage: PageGroupBy[]
    aggregateWebsite: AggregateWebsite
    findFirstWebsite?: Website
    websites: Website[]
    website?: Website
    groupByWebsite: WebsiteGroupBy[]
    __typename: 'Query'
}

export interface AggregatePage {
    _count?: PageCountAggregate
    _min?: PageMinAggregate
    _max?: PageMaxAggregate
    __typename: 'AggregatePage'
}

export interface PageCountAggregate {
    id: Scalars['Int']
    created: Scalars['Int']
    updated: Scalars['Int']
    title: Scalars['Int']
    path: Scalars['Int']
    websiteId: Scalars['Int']
    _all: Scalars['Int']
    __typename: 'PageCountAggregate'
}

export interface PageMinAggregate {
    id?: Scalars['String']
    created?: Scalars['DateTime']
    updated?: Scalars['DateTime']
    title?: Scalars['String']
    path?: Scalars['String']
    websiteId?: Scalars['String']
    __typename: 'PageMinAggregate'
}

export interface PageMaxAggregate {
    id?: Scalars['String']
    created?: Scalars['DateTime']
    updated?: Scalars['DateTime']
    title?: Scalars['String']
    path?: Scalars['String']
    websiteId?: Scalars['String']
    __typename: 'PageMaxAggregate'
}

export type SortOrder = 'asc' | 'desc'

export interface Page {
    id: Scalars['String']
    created: Scalars['DateTime']
    updated: Scalars['DateTime']
    title: Scalars['String']
    path?: Scalars['String']
    websiteId: Scalars['String']
    website: Website
    __typename: 'Page'
}

export interface Website {
    id: Scalars['String']
    created: Scalars['DateTime']
    updated: Scalars['DateTime']
    name: Scalars['String']
    domains: Scalars['JSON']
    _count?: WebsiteCount
    pages: Page[]
    __typename: 'Website'
}

export interface WebsiteCount {
    pages: Scalars['Int']
    __typename: 'WebsiteCount'
}

export type PageScalarFieldEnum = 'id' | 'created' | 'updated' | 'title' | 'path' | 'websiteId'

export interface PageGroupBy {
    id: Scalars['String']
    created: Scalars['DateTime']
    updated: Scalars['DateTime']
    title: Scalars['String']
    path?: Scalars['String']
    websiteId: Scalars['String']
    _count?: PageCountAggregate
    _min?: PageMinAggregate
    _max?: PageMaxAggregate
    __typename: 'PageGroupBy'
}

export interface AggregateWebsite {
    _count?: WebsiteCountAggregate
    _min?: WebsiteMinAggregate
    _max?: WebsiteMaxAggregate
    __typename: 'AggregateWebsite'
}

export interface WebsiteCountAggregate {
    id: Scalars['Int']
    created: Scalars['Int']
    updated: Scalars['Int']
    name: Scalars['Int']
    domains: Scalars['Int']
    _all: Scalars['Int']
    __typename: 'WebsiteCountAggregate'
}

export interface WebsiteMinAggregate {
    id?: Scalars['String']
    created?: Scalars['DateTime']
    updated?: Scalars['DateTime']
    name?: Scalars['String']
    __typename: 'WebsiteMinAggregate'
}

export interface WebsiteMaxAggregate {
    id?: Scalars['String']
    created?: Scalars['DateTime']
    updated?: Scalars['DateTime']
    name?: Scalars['String']
    __typename: 'WebsiteMaxAggregate'
}

export type WebsiteScalarFieldEnum = 'id' | 'created' | 'updated' | 'name' | 'domains'

export interface WebsiteGroupBy {
    id: Scalars['String']
    created: Scalars['DateTime']
    updated: Scalars['DateTime']
    name: Scalars['String']
    domains: Scalars['JSON']
    _count?: WebsiteCountAggregate
    _min?: WebsiteMinAggregate
    _max?: WebsiteMaxAggregate
    __typename: 'WebsiteGroupBy'
}

export interface Mutation {
    createManyPage: AffectedRowsOutput
    createOnePage: Page
    deleteManyPage: AffectedRowsOutput
    deleteOnePage?: Page
    updateManyPage: AffectedRowsOutput
    updateOnePage?: Page
    upsertOnePage: Page
    createManyWebsite: AffectedRowsOutput
    createOneWebsite: Website
    deleteManyWebsite: AffectedRowsOutput
    deleteOneWebsite?: Website
    updateManyWebsite: AffectedRowsOutput
    updateOneWebsite?: Website
    upsertOneWebsite: Website
    __typename: 'Mutation'
}

export interface AffectedRowsOutput {
    count: Scalars['Int']
    __typename: 'AffectedRowsOutput'
}

export interface QueryRequest{
    aggregatePage?: [{where?: (PageWhereInput | null),orderBy?: (PageOrderByWithRelationInput[] | null),cursor?: (PageWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null)},AggregatePageRequest] | AggregatePageRequest
    findFirstPage?: [{where?: (PageWhereInput | null),orderBy?: (PageOrderByWithRelationInput[] | null),cursor?: (PageWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null),distinct?: (PageScalarFieldEnum[] | null)},PageRequest] | PageRequest
    pages?: [{where?: (PageWhereInput | null),orderBy?: (PageOrderByWithRelationInput[] | null),cursor?: (PageWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null),distinct?: (PageScalarFieldEnum[] | null)},PageRequest] | PageRequest
    page?: [{where: PageWhereUniqueInput},PageRequest]
    groupByPage?: [{where?: (PageWhereInput | null),orderBy?: (PageOrderByWithAggregationInput[] | null),by: PageScalarFieldEnum[],having?: (PageScalarWhereWithAggregatesInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null)},PageGroupByRequest]
    aggregateWebsite?: [{where?: (WebsiteWhereInput | null),orderBy?: (WebsiteOrderByWithRelationInput[] | null),cursor?: (WebsiteWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null)},AggregateWebsiteRequest] | AggregateWebsiteRequest
    findFirstWebsite?: [{where?: (WebsiteWhereInput | null),orderBy?: (WebsiteOrderByWithRelationInput[] | null),cursor?: (WebsiteWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null),distinct?: (WebsiteScalarFieldEnum[] | null)},WebsiteRequest] | WebsiteRequest
    websites?: [{where?: (WebsiteWhereInput | null),orderBy?: (WebsiteOrderByWithRelationInput[] | null),cursor?: (WebsiteWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null),distinct?: (WebsiteScalarFieldEnum[] | null)},WebsiteRequest] | WebsiteRequest
    website?: [{where: WebsiteWhereUniqueInput},WebsiteRequest]
    groupByWebsite?: [{where?: (WebsiteWhereInput | null),orderBy?: (WebsiteOrderByWithAggregationInput[] | null),by: WebsiteScalarFieldEnum[],having?: (WebsiteScalarWhereWithAggregatesInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null)},WebsiteGroupByRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AggregatePageRequest{
    _count?: PageCountAggregateRequest
    _min?: PageMinAggregateRequest
    _max?: PageMaxAggregateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageCountAggregateRequest{
    id?: boolean | number
    created?: boolean | number
    updated?: boolean | number
    title?: boolean | number
    path?: boolean | number
    websiteId?: boolean | number
    _all?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageMinAggregateRequest{
    id?: boolean | number
    created?: boolean | number
    updated?: boolean | number
    title?: boolean | number
    path?: boolean | number
    websiteId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageMaxAggregateRequest{
    id?: boolean | number
    created?: boolean | number
    updated?: boolean | number
    title?: boolean | number
    path?: boolean | number
    websiteId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageWhereInput {AND?: (PageWhereInput[] | null),OR?: (PageWhereInput[] | null),NOT?: (PageWhereInput[] | null),id?: (StringFilter | null),created?: (DateTimeFilter | null),updated?: (DateTimeFilter | null),title?: (StringFilter | null),path?: (StringNullableFilter | null),websiteId?: (StringFilter | null),website?: (WebsiteRelationFilter | null)}

export interface StringFilter {equals?: (Scalars['String'] | null),in?: (Scalars['String'][] | null),notIn?: (Scalars['String'][] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),contains?: (Scalars['String'] | null),startsWith?: (Scalars['String'] | null),endsWith?: (Scalars['String'] | null),not?: (NestedStringFilter | null)}

export interface NestedStringFilter {equals?: (Scalars['String'] | null),in?: (Scalars['String'][] | null),notIn?: (Scalars['String'][] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),contains?: (Scalars['String'] | null),startsWith?: (Scalars['String'] | null),endsWith?: (Scalars['String'] | null),not?: (NestedStringFilter | null)}

export interface DateTimeFilter {equals?: (Scalars['DateTime'] | null),in?: (Scalars['DateTime'][] | null),notIn?: (Scalars['DateTime'][] | null),lt?: (Scalars['DateTime'] | null),lte?: (Scalars['DateTime'] | null),gt?: (Scalars['DateTime'] | null),gte?: (Scalars['DateTime'] | null),not?: (NestedDateTimeFilter | null)}

export interface NestedDateTimeFilter {equals?: (Scalars['DateTime'] | null),in?: (Scalars['DateTime'][] | null),notIn?: (Scalars['DateTime'][] | null),lt?: (Scalars['DateTime'] | null),lte?: (Scalars['DateTime'] | null),gt?: (Scalars['DateTime'] | null),gte?: (Scalars['DateTime'] | null),not?: (NestedDateTimeFilter | null)}

export interface StringNullableFilter {equals?: (Scalars['String'] | null),in?: (Scalars['String'][] | null),notIn?: (Scalars['String'][] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),contains?: (Scalars['String'] | null),startsWith?: (Scalars['String'] | null),endsWith?: (Scalars['String'] | null),not?: (NestedStringNullableFilter | null)}

export interface NestedStringNullableFilter {equals?: (Scalars['String'] | null),in?: (Scalars['String'][] | null),notIn?: (Scalars['String'][] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),contains?: (Scalars['String'] | null),startsWith?: (Scalars['String'] | null),endsWith?: (Scalars['String'] | null),not?: (NestedStringNullableFilter | null)}

export interface WebsiteRelationFilter {is?: (WebsiteWhereInput | null),isNot?: (WebsiteWhereInput | null)}

export interface WebsiteWhereInput {AND?: (WebsiteWhereInput[] | null),OR?: (WebsiteWhereInput[] | null),NOT?: (WebsiteWhereInput[] | null),id?: (StringFilter | null),created?: (DateTimeFilter | null),updated?: (DateTimeFilter | null),name?: (StringFilter | null),domains?: (JsonFilter | null),pages?: (PageListRelationFilter | null)}

export interface JsonFilter {equals?: (Scalars['JSON'] | null),path?: (Scalars['String'] | null),string_contains?: (Scalars['String'] | null),string_starts_with?: (Scalars['String'] | null),string_ends_with?: (Scalars['String'] | null),array_contains?: (Scalars['JSON'] | null),array_starts_with?: (Scalars['JSON'] | null),array_ends_with?: (Scalars['JSON'] | null),lt?: (Scalars['JSON'] | null),lte?: (Scalars['JSON'] | null),gt?: (Scalars['JSON'] | null),gte?: (Scalars['JSON'] | null),not?: (Scalars['JSON'] | null)}

export interface PageListRelationFilter {every?: (PageWhereInput | null),some?: (PageWhereInput | null),none?: (PageWhereInput | null)}

export interface PageOrderByWithRelationInput {id?: (SortOrder | null),created?: (SortOrder | null),updated?: (SortOrder | null),title?: (SortOrder | null),path?: (SortOrder | null),websiteId?: (SortOrder | null),website?: (WebsiteOrderByWithRelationInput | null)}

export interface WebsiteOrderByWithRelationInput {id?: (SortOrder | null),created?: (SortOrder | null),updated?: (SortOrder | null),name?: (SortOrder | null),domains?: (SortOrder | null),pages?: (PageOrderByRelationAggregateInput | null)}

export interface PageOrderByRelationAggregateInput {_count?: (SortOrder | null)}

export interface PageWhereUniqueInput {id?: (Scalars['String'] | null)}

export interface PageRequest{
    id?: boolean | number
    created?: boolean | number
    updated?: boolean | number
    title?: boolean | number
    path?: boolean | number
    websiteId?: boolean | number
    website?: WebsiteRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebsiteRequest{
    id?: boolean | number
    created?: boolean | number
    updated?: boolean | number
    name?: boolean | number
    domains?: boolean | number
    _count?: WebsiteCountRequest
    pages?: [{where?: (PageWhereInput | null),orderBy?: (PageOrderByWithRelationInput[] | null),cursor?: (PageWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null),distinct?: (PageScalarFieldEnum[] | null)},PageRequest] | PageRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebsiteCountRequest{
    pages?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageGroupByRequest{
    id?: boolean | number
    created?: boolean | number
    updated?: boolean | number
    title?: boolean | number
    path?: boolean | number
    websiteId?: boolean | number
    _count?: PageCountAggregateRequest
    _min?: PageMinAggregateRequest
    _max?: PageMaxAggregateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageOrderByWithAggregationInput {id?: (SortOrder | null),created?: (SortOrder | null),updated?: (SortOrder | null),title?: (SortOrder | null),path?: (SortOrder | null),websiteId?: (SortOrder | null),_count?: (PageCountOrderByAggregateInput | null),_max?: (PageMaxOrderByAggregateInput | null),_min?: (PageMinOrderByAggregateInput | null)}

export interface PageCountOrderByAggregateInput {id?: (SortOrder | null),created?: (SortOrder | null),updated?: (SortOrder | null),title?: (SortOrder | null),path?: (SortOrder | null),websiteId?: (SortOrder | null)}

export interface PageMaxOrderByAggregateInput {id?: (SortOrder | null),created?: (SortOrder | null),updated?: (SortOrder | null),title?: (SortOrder | null),path?: (SortOrder | null),websiteId?: (SortOrder | null)}

export interface PageMinOrderByAggregateInput {id?: (SortOrder | null),created?: (SortOrder | null),updated?: (SortOrder | null),title?: (SortOrder | null),path?: (SortOrder | null),websiteId?: (SortOrder | null)}

export interface PageScalarWhereWithAggregatesInput {AND?: (PageScalarWhereWithAggregatesInput[] | null),OR?: (PageScalarWhereWithAggregatesInput[] | null),NOT?: (PageScalarWhereWithAggregatesInput[] | null),id?: (StringWithAggregatesFilter | null),created?: (DateTimeWithAggregatesFilter | null),updated?: (DateTimeWithAggregatesFilter | null),title?: (StringWithAggregatesFilter | null),path?: (StringNullableWithAggregatesFilter | null),websiteId?: (StringWithAggregatesFilter | null)}

export interface StringWithAggregatesFilter {equals?: (Scalars['String'] | null),in?: (Scalars['String'][] | null),notIn?: (Scalars['String'][] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),contains?: (Scalars['String'] | null),startsWith?: (Scalars['String'] | null),endsWith?: (Scalars['String'] | null),not?: (NestedStringWithAggregatesFilter | null),_count?: (NestedIntFilter | null),_min?: (NestedStringFilter | null),_max?: (NestedStringFilter | null)}

export interface NestedStringWithAggregatesFilter {equals?: (Scalars['String'] | null),in?: (Scalars['String'][] | null),notIn?: (Scalars['String'][] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),contains?: (Scalars['String'] | null),startsWith?: (Scalars['String'] | null),endsWith?: (Scalars['String'] | null),not?: (NestedStringWithAggregatesFilter | null),_count?: (NestedIntFilter | null),_min?: (NestedStringFilter | null),_max?: (NestedStringFilter | null)}

export interface NestedIntFilter {equals?: (Scalars['Int'] | null),in?: (Scalars['Int'][] | null),notIn?: (Scalars['Int'][] | null),lt?: (Scalars['Int'] | null),lte?: (Scalars['Int'] | null),gt?: (Scalars['Int'] | null),gte?: (Scalars['Int'] | null),not?: (NestedIntFilter | null)}

export interface DateTimeWithAggregatesFilter {equals?: (Scalars['DateTime'] | null),in?: (Scalars['DateTime'][] | null),notIn?: (Scalars['DateTime'][] | null),lt?: (Scalars['DateTime'] | null),lte?: (Scalars['DateTime'] | null),gt?: (Scalars['DateTime'] | null),gte?: (Scalars['DateTime'] | null),not?: (NestedDateTimeWithAggregatesFilter | null),_count?: (NestedIntFilter | null),_min?: (NestedDateTimeFilter | null),_max?: (NestedDateTimeFilter | null)}

export interface NestedDateTimeWithAggregatesFilter {equals?: (Scalars['DateTime'] | null),in?: (Scalars['DateTime'][] | null),notIn?: (Scalars['DateTime'][] | null),lt?: (Scalars['DateTime'] | null),lte?: (Scalars['DateTime'] | null),gt?: (Scalars['DateTime'] | null),gte?: (Scalars['DateTime'] | null),not?: (NestedDateTimeWithAggregatesFilter | null),_count?: (NestedIntFilter | null),_min?: (NestedDateTimeFilter | null),_max?: (NestedDateTimeFilter | null)}

export interface StringNullableWithAggregatesFilter {equals?: (Scalars['String'] | null),in?: (Scalars['String'][] | null),notIn?: (Scalars['String'][] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),contains?: (Scalars['String'] | null),startsWith?: (Scalars['String'] | null),endsWith?: (Scalars['String'] | null),not?: (NestedStringNullableWithAggregatesFilter | null),_count?: (NestedIntNullableFilter | null),_min?: (NestedStringNullableFilter | null),_max?: (NestedStringNullableFilter | null)}

export interface NestedStringNullableWithAggregatesFilter {equals?: (Scalars['String'] | null),in?: (Scalars['String'][] | null),notIn?: (Scalars['String'][] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),contains?: (Scalars['String'] | null),startsWith?: (Scalars['String'] | null),endsWith?: (Scalars['String'] | null),not?: (NestedStringNullableWithAggregatesFilter | null),_count?: (NestedIntNullableFilter | null),_min?: (NestedStringNullableFilter | null),_max?: (NestedStringNullableFilter | null)}

export interface NestedIntNullableFilter {equals?: (Scalars['Int'] | null),in?: (Scalars['Int'][] | null),notIn?: (Scalars['Int'][] | null),lt?: (Scalars['Int'] | null),lte?: (Scalars['Int'] | null),gt?: (Scalars['Int'] | null),gte?: (Scalars['Int'] | null),not?: (NestedIntNullableFilter | null)}

export interface AggregateWebsiteRequest{
    _count?: WebsiteCountAggregateRequest
    _min?: WebsiteMinAggregateRequest
    _max?: WebsiteMaxAggregateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebsiteCountAggregateRequest{
    id?: boolean | number
    created?: boolean | number
    updated?: boolean | number
    name?: boolean | number
    domains?: boolean | number
    _all?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebsiteMinAggregateRequest{
    id?: boolean | number
    created?: boolean | number
    updated?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebsiteMaxAggregateRequest{
    id?: boolean | number
    created?: boolean | number
    updated?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebsiteWhereUniqueInput {id?: (Scalars['String'] | null)}

export interface WebsiteGroupByRequest{
    id?: boolean | number
    created?: boolean | number
    updated?: boolean | number
    name?: boolean | number
    domains?: boolean | number
    _count?: WebsiteCountAggregateRequest
    _min?: WebsiteMinAggregateRequest
    _max?: WebsiteMaxAggregateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebsiteOrderByWithAggregationInput {id?: (SortOrder | null),created?: (SortOrder | null),updated?: (SortOrder | null),name?: (SortOrder | null),domains?: (SortOrder | null),_count?: (WebsiteCountOrderByAggregateInput | null),_max?: (WebsiteMaxOrderByAggregateInput | null),_min?: (WebsiteMinOrderByAggregateInput | null)}

export interface WebsiteCountOrderByAggregateInput {id?: (SortOrder | null),created?: (SortOrder | null),updated?: (SortOrder | null),name?: (SortOrder | null),domains?: (SortOrder | null)}

export interface WebsiteMaxOrderByAggregateInput {id?: (SortOrder | null),created?: (SortOrder | null),updated?: (SortOrder | null),name?: (SortOrder | null)}

export interface WebsiteMinOrderByAggregateInput {id?: (SortOrder | null),created?: (SortOrder | null),updated?: (SortOrder | null),name?: (SortOrder | null)}

export interface WebsiteScalarWhereWithAggregatesInput {AND?: (WebsiteScalarWhereWithAggregatesInput[] | null),OR?: (WebsiteScalarWhereWithAggregatesInput[] | null),NOT?: (WebsiteScalarWhereWithAggregatesInput[] | null),id?: (StringWithAggregatesFilter | null),created?: (DateTimeWithAggregatesFilter | null),updated?: (DateTimeWithAggregatesFilter | null),name?: (StringWithAggregatesFilter | null),domains?: (JsonWithAggregatesFilter | null)}

export interface JsonWithAggregatesFilter {equals?: (Scalars['JSON'] | null),path?: (Scalars['String'] | null),string_contains?: (Scalars['String'] | null),string_starts_with?: (Scalars['String'] | null),string_ends_with?: (Scalars['String'] | null),array_contains?: (Scalars['JSON'] | null),array_starts_with?: (Scalars['JSON'] | null),array_ends_with?: (Scalars['JSON'] | null),lt?: (Scalars['JSON'] | null),lte?: (Scalars['JSON'] | null),gt?: (Scalars['JSON'] | null),gte?: (Scalars['JSON'] | null),not?: (Scalars['JSON'] | null),_count?: (NestedIntFilter | null),_min?: (NestedJsonFilter | null),_max?: (NestedJsonFilter | null)}

export interface NestedJsonFilter {equals?: (Scalars['JSON'] | null),path?: (Scalars['String'] | null),string_contains?: (Scalars['String'] | null),string_starts_with?: (Scalars['String'] | null),string_ends_with?: (Scalars['String'] | null),array_contains?: (Scalars['JSON'] | null),array_starts_with?: (Scalars['JSON'] | null),array_ends_with?: (Scalars['JSON'] | null),lt?: (Scalars['JSON'] | null),lte?: (Scalars['JSON'] | null),gt?: (Scalars['JSON'] | null),gte?: (Scalars['JSON'] | null),not?: (Scalars['JSON'] | null)}

export interface MutationRequest{
    createManyPage?: [{data: PageCreateManyInput[],skipDuplicates?: (Scalars['Boolean'] | null)},AffectedRowsOutputRequest]
    createOnePage?: [{data: PageCreateInput},PageRequest]
    deleteManyPage?: [{where?: (PageWhereInput | null)},AffectedRowsOutputRequest] | AffectedRowsOutputRequest
    deleteOnePage?: [{where: PageWhereUniqueInput},PageRequest]
    updateManyPage?: [{data: PageUpdateManyMutationInput,where?: (PageWhereInput | null)},AffectedRowsOutputRequest]
    updateOnePage?: [{data: PageUpdateInput,where: PageWhereUniqueInput},PageRequest]
    upsertOnePage?: [{where: PageWhereUniqueInput,create: PageCreateInput,update: PageUpdateInput},PageRequest]
    createManyWebsite?: [{data: WebsiteCreateManyInput[],skipDuplicates?: (Scalars['Boolean'] | null)},AffectedRowsOutputRequest]
    createOneWebsite?: [{data: WebsiteCreateInput},WebsiteRequest]
    deleteManyWebsite?: [{where?: (WebsiteWhereInput | null)},AffectedRowsOutputRequest] | AffectedRowsOutputRequest
    deleteOneWebsite?: [{where: WebsiteWhereUniqueInput},WebsiteRequest]
    updateManyWebsite?: [{data: WebsiteUpdateManyMutationInput,where?: (WebsiteWhereInput | null)},AffectedRowsOutputRequest]
    updateOneWebsite?: [{data: WebsiteUpdateInput,where: WebsiteWhereUniqueInput},WebsiteRequest]
    upsertOneWebsite?: [{where: WebsiteWhereUniqueInput,create: WebsiteCreateInput,update: WebsiteUpdateInput},WebsiteRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AffectedRowsOutputRequest{
    count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageCreateManyInput {id?: (Scalars['String'] | null),created?: (Scalars['DateTime'] | null),updated?: (Scalars['DateTime'] | null),title: Scalars['String'],path?: (Scalars['String'] | null),websiteId: Scalars['String']}

export interface PageCreateInput {id?: (Scalars['String'] | null),created?: (Scalars['DateTime'] | null),updated?: (Scalars['DateTime'] | null),title: Scalars['String'],path?: (Scalars['String'] | null),website: WebsiteCreateNestedOneWithoutPagesInput}

export interface WebsiteCreateNestedOneWithoutPagesInput {create?: (WebsiteCreateWithoutPagesInput | null),connectOrCreate?: (WebsiteCreateOrConnectWithoutPagesInput | null),connect?: (WebsiteWhereUniqueInput | null)}

export interface WebsiteCreateWithoutPagesInput {id?: (Scalars['String'] | null),created?: (Scalars['DateTime'] | null),updated?: (Scalars['DateTime'] | null),name: Scalars['String'],domains: Scalars['JSON']}

export interface WebsiteCreateOrConnectWithoutPagesInput {where: WebsiteWhereUniqueInput,create: WebsiteCreateWithoutPagesInput}

export interface PageUpdateManyMutationInput {id?: (StringFieldUpdateOperationsInput | null),created?: (DateTimeFieldUpdateOperationsInput | null),updated?: (DateTimeFieldUpdateOperationsInput | null),title?: (StringFieldUpdateOperationsInput | null),path?: (NullableStringFieldUpdateOperationsInput | null)}

export interface StringFieldUpdateOperationsInput {set?: (Scalars['String'] | null)}

export interface DateTimeFieldUpdateOperationsInput {set?: (Scalars['DateTime'] | null)}

export interface NullableStringFieldUpdateOperationsInput {set?: (Scalars['String'] | null)}

export interface PageUpdateInput {id?: (StringFieldUpdateOperationsInput | null),created?: (DateTimeFieldUpdateOperationsInput | null),updated?: (DateTimeFieldUpdateOperationsInput | null),title?: (StringFieldUpdateOperationsInput | null),path?: (NullableStringFieldUpdateOperationsInput | null),website?: (WebsiteUpdateOneRequiredWithoutPagesNestedInput | null)}

export interface WebsiteUpdateOneRequiredWithoutPagesNestedInput {create?: (WebsiteCreateWithoutPagesInput | null),connectOrCreate?: (WebsiteCreateOrConnectWithoutPagesInput | null),upsert?: (WebsiteUpsertWithoutPagesInput | null),connect?: (WebsiteWhereUniqueInput | null),update?: (WebsiteUpdateWithoutPagesInput | null)}

export interface WebsiteUpsertWithoutPagesInput {update: WebsiteUpdateWithoutPagesInput,create: WebsiteCreateWithoutPagesInput}

export interface WebsiteUpdateWithoutPagesInput {id?: (StringFieldUpdateOperationsInput | null),created?: (DateTimeFieldUpdateOperationsInput | null),updated?: (DateTimeFieldUpdateOperationsInput | null),name?: (StringFieldUpdateOperationsInput | null),domains?: (Scalars['JSON'] | null)}

export interface WebsiteCreateManyInput {id?: (Scalars['String'] | null),created?: (Scalars['DateTime'] | null),updated?: (Scalars['DateTime'] | null),name: Scalars['String'],domains: Scalars['JSON']}

export interface WebsiteCreateInput {id?: (Scalars['String'] | null),created?: (Scalars['DateTime'] | null),updated?: (Scalars['DateTime'] | null),name: Scalars['String'],domains: Scalars['JSON'],pages?: (PageCreateNestedManyWithoutWebsiteInput | null)}

export interface PageCreateNestedManyWithoutWebsiteInput {create?: (PageCreateWithoutWebsiteInput[] | null),connectOrCreate?: (PageCreateOrConnectWithoutWebsiteInput[] | null),createMany?: (PageCreateManyWebsiteInputEnvelope | null),connect?: (PageWhereUniqueInput[] | null)}

export interface PageCreateWithoutWebsiteInput {id?: (Scalars['String'] | null),created?: (Scalars['DateTime'] | null),updated?: (Scalars['DateTime'] | null),title: Scalars['String'],path?: (Scalars['String'] | null)}

export interface PageCreateOrConnectWithoutWebsiteInput {where: PageWhereUniqueInput,create: PageCreateWithoutWebsiteInput}

export interface PageCreateManyWebsiteInputEnvelope {data: PageCreateManyWebsiteInput[],skipDuplicates?: (Scalars['Boolean'] | null)}

export interface PageCreateManyWebsiteInput {id?: (Scalars['String'] | null),created?: (Scalars['DateTime'] | null),updated?: (Scalars['DateTime'] | null),title: Scalars['String'],path?: (Scalars['String'] | null)}

export interface WebsiteUpdateManyMutationInput {id?: (StringFieldUpdateOperationsInput | null),created?: (DateTimeFieldUpdateOperationsInput | null),updated?: (DateTimeFieldUpdateOperationsInput | null),name?: (StringFieldUpdateOperationsInput | null),domains?: (Scalars['JSON'] | null)}

export interface WebsiteUpdateInput {id?: (StringFieldUpdateOperationsInput | null),created?: (DateTimeFieldUpdateOperationsInput | null),updated?: (DateTimeFieldUpdateOperationsInput | null),name?: (StringFieldUpdateOperationsInput | null),domains?: (Scalars['JSON'] | null),pages?: (PageUpdateManyWithoutWebsiteNestedInput | null)}

export interface PageUpdateManyWithoutWebsiteNestedInput {create?: (PageCreateWithoutWebsiteInput[] | null),connectOrCreate?: (PageCreateOrConnectWithoutWebsiteInput[] | null),upsert?: (PageUpsertWithWhereUniqueWithoutWebsiteInput[] | null),createMany?: (PageCreateManyWebsiteInputEnvelope | null),set?: (PageWhereUniqueInput[] | null),disconnect?: (PageWhereUniqueInput[] | null),delete?: (PageWhereUniqueInput[] | null),connect?: (PageWhereUniqueInput[] | null),update?: (PageUpdateWithWhereUniqueWithoutWebsiteInput[] | null),updateMany?: (PageUpdateManyWithWhereWithoutWebsiteInput[] | null),deleteMany?: (PageScalarWhereInput[] | null)}

export interface PageUpsertWithWhereUniqueWithoutWebsiteInput {where: PageWhereUniqueInput,update: PageUpdateWithoutWebsiteInput,create: PageCreateWithoutWebsiteInput}

export interface PageUpdateWithoutWebsiteInput {id?: (StringFieldUpdateOperationsInput | null),created?: (DateTimeFieldUpdateOperationsInput | null),updated?: (DateTimeFieldUpdateOperationsInput | null),title?: (StringFieldUpdateOperationsInput | null),path?: (NullableStringFieldUpdateOperationsInput | null)}

export interface PageUpdateWithWhereUniqueWithoutWebsiteInput {where: PageWhereUniqueInput,data: PageUpdateWithoutWebsiteInput}

export interface PageUpdateManyWithWhereWithoutWebsiteInput {where: PageScalarWhereInput,data: PageUpdateManyMutationInput}

export interface PageScalarWhereInput {AND?: (PageScalarWhereInput[] | null),OR?: (PageScalarWhereInput[] | null),NOT?: (PageScalarWhereInput[] | null),id?: (StringFilter | null),created?: (DateTimeFilter | null),updated?: (DateTimeFilter | null),title?: (StringFilter | null),path?: (StringNullableFilter | null),websiteId?: (StringFilter | null)}


const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const AggregatePage_possibleTypes: string[] = ['AggregatePage']
export const isAggregatePage = (obj?: { __typename?: any } | null): obj is AggregatePage => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAggregatePage"')
  return AggregatePage_possibleTypes.includes(obj.__typename)
}



const PageCountAggregate_possibleTypes: string[] = ['PageCountAggregate']
export const isPageCountAggregate = (obj?: { __typename?: any } | null): obj is PageCountAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPageCountAggregate"')
  return PageCountAggregate_possibleTypes.includes(obj.__typename)
}



const PageMinAggregate_possibleTypes: string[] = ['PageMinAggregate']
export const isPageMinAggregate = (obj?: { __typename?: any } | null): obj is PageMinAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPageMinAggregate"')
  return PageMinAggregate_possibleTypes.includes(obj.__typename)
}



const PageMaxAggregate_possibleTypes: string[] = ['PageMaxAggregate']
export const isPageMaxAggregate = (obj?: { __typename?: any } | null): obj is PageMaxAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPageMaxAggregate"')
  return PageMaxAggregate_possibleTypes.includes(obj.__typename)
}



const Page_possibleTypes: string[] = ['Page']
export const isPage = (obj?: { __typename?: any } | null): obj is Page => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPage"')
  return Page_possibleTypes.includes(obj.__typename)
}



const Website_possibleTypes: string[] = ['Website']
export const isWebsite = (obj?: { __typename?: any } | null): obj is Website => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWebsite"')
  return Website_possibleTypes.includes(obj.__typename)
}



const WebsiteCount_possibleTypes: string[] = ['WebsiteCount']
export const isWebsiteCount = (obj?: { __typename?: any } | null): obj is WebsiteCount => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWebsiteCount"')
  return WebsiteCount_possibleTypes.includes(obj.__typename)
}



const PageGroupBy_possibleTypes: string[] = ['PageGroupBy']
export const isPageGroupBy = (obj?: { __typename?: any } | null): obj is PageGroupBy => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPageGroupBy"')
  return PageGroupBy_possibleTypes.includes(obj.__typename)
}



const AggregateWebsite_possibleTypes: string[] = ['AggregateWebsite']
export const isAggregateWebsite = (obj?: { __typename?: any } | null): obj is AggregateWebsite => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAggregateWebsite"')
  return AggregateWebsite_possibleTypes.includes(obj.__typename)
}



const WebsiteCountAggregate_possibleTypes: string[] = ['WebsiteCountAggregate']
export const isWebsiteCountAggregate = (obj?: { __typename?: any } | null): obj is WebsiteCountAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWebsiteCountAggregate"')
  return WebsiteCountAggregate_possibleTypes.includes(obj.__typename)
}



const WebsiteMinAggregate_possibleTypes: string[] = ['WebsiteMinAggregate']
export const isWebsiteMinAggregate = (obj?: { __typename?: any } | null): obj is WebsiteMinAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWebsiteMinAggregate"')
  return WebsiteMinAggregate_possibleTypes.includes(obj.__typename)
}



const WebsiteMaxAggregate_possibleTypes: string[] = ['WebsiteMaxAggregate']
export const isWebsiteMaxAggregate = (obj?: { __typename?: any } | null): obj is WebsiteMaxAggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWebsiteMaxAggregate"')
  return WebsiteMaxAggregate_possibleTypes.includes(obj.__typename)
}



const WebsiteGroupBy_possibleTypes: string[] = ['WebsiteGroupBy']
export const isWebsiteGroupBy = (obj?: { __typename?: any } | null): obj is WebsiteGroupBy => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWebsiteGroupBy"')
  return WebsiteGroupBy_possibleTypes.includes(obj.__typename)
}



const Mutation_possibleTypes: string[] = ['Mutation']
export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



const AffectedRowsOutput_possibleTypes: string[] = ['AffectedRowsOutput']
export const isAffectedRowsOutput = (obj?: { __typename?: any } | null): obj is AffectedRowsOutput => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAffectedRowsOutput"')
  return AffectedRowsOutput_possibleTypes.includes(obj.__typename)
}


export interface QueryPromiseChain{
    aggregatePage: ((args?: {where?: (PageWhereInput | null),orderBy?: (PageOrderByWithRelationInput[] | null),cursor?: (PageWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null)}) => AggregatePagePromiseChain & {get: <R extends AggregatePageRequest>(request: R, defaultValue?: FieldsSelection<AggregatePage, R>) => Promise<FieldsSelection<AggregatePage, R>>})&(AggregatePagePromiseChain & {get: <R extends AggregatePageRequest>(request: R, defaultValue?: FieldsSelection<AggregatePage, R>) => Promise<FieldsSelection<AggregatePage, R>>}),
    findFirstPage: ((args?: {where?: (PageWhereInput | null),orderBy?: (PageOrderByWithRelationInput[] | null),cursor?: (PageWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null),distinct?: (PageScalarFieldEnum[] | null)}) => PagePromiseChain & {get: <R extends PageRequest>(request: R, defaultValue?: (FieldsSelection<Page, R> | undefined)) => Promise<(FieldsSelection<Page, R> | undefined)>})&(PagePromiseChain & {get: <R extends PageRequest>(request: R, defaultValue?: (FieldsSelection<Page, R> | undefined)) => Promise<(FieldsSelection<Page, R> | undefined)>}),
    pages: ((args?: {where?: (PageWhereInput | null),orderBy?: (PageOrderByWithRelationInput[] | null),cursor?: (PageWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null),distinct?: (PageScalarFieldEnum[] | null)}) => {get: <R extends PageRequest>(request: R, defaultValue?: FieldsSelection<Page, R>[]) => Promise<FieldsSelection<Page, R>[]>})&({get: <R extends PageRequest>(request: R, defaultValue?: FieldsSelection<Page, R>[]) => Promise<FieldsSelection<Page, R>[]>}),
    page: ((args: {where: PageWhereUniqueInput}) => PagePromiseChain & {get: <R extends PageRequest>(request: R, defaultValue?: (FieldsSelection<Page, R> | undefined)) => Promise<(FieldsSelection<Page, R> | undefined)>}),
    groupByPage: ((args: {where?: (PageWhereInput | null),orderBy?: (PageOrderByWithAggregationInput[] | null),by: PageScalarFieldEnum[],having?: (PageScalarWhereWithAggregatesInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null)}) => {get: <R extends PageGroupByRequest>(request: R, defaultValue?: FieldsSelection<PageGroupBy, R>[]) => Promise<FieldsSelection<PageGroupBy, R>[]>}),
    aggregateWebsite: ((args?: {where?: (WebsiteWhereInput | null),orderBy?: (WebsiteOrderByWithRelationInput[] | null),cursor?: (WebsiteWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null)}) => AggregateWebsitePromiseChain & {get: <R extends AggregateWebsiteRequest>(request: R, defaultValue?: FieldsSelection<AggregateWebsite, R>) => Promise<FieldsSelection<AggregateWebsite, R>>})&(AggregateWebsitePromiseChain & {get: <R extends AggregateWebsiteRequest>(request: R, defaultValue?: FieldsSelection<AggregateWebsite, R>) => Promise<FieldsSelection<AggregateWebsite, R>>}),
    findFirstWebsite: ((args?: {where?: (WebsiteWhereInput | null),orderBy?: (WebsiteOrderByWithRelationInput[] | null),cursor?: (WebsiteWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null),distinct?: (WebsiteScalarFieldEnum[] | null)}) => WebsitePromiseChain & {get: <R extends WebsiteRequest>(request: R, defaultValue?: (FieldsSelection<Website, R> | undefined)) => Promise<(FieldsSelection<Website, R> | undefined)>})&(WebsitePromiseChain & {get: <R extends WebsiteRequest>(request: R, defaultValue?: (FieldsSelection<Website, R> | undefined)) => Promise<(FieldsSelection<Website, R> | undefined)>}),
    websites: ((args?: {where?: (WebsiteWhereInput | null),orderBy?: (WebsiteOrderByWithRelationInput[] | null),cursor?: (WebsiteWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null),distinct?: (WebsiteScalarFieldEnum[] | null)}) => {get: <R extends WebsiteRequest>(request: R, defaultValue?: FieldsSelection<Website, R>[]) => Promise<FieldsSelection<Website, R>[]>})&({get: <R extends WebsiteRequest>(request: R, defaultValue?: FieldsSelection<Website, R>[]) => Promise<FieldsSelection<Website, R>[]>}),
    website: ((args: {where: WebsiteWhereUniqueInput}) => WebsitePromiseChain & {get: <R extends WebsiteRequest>(request: R, defaultValue?: (FieldsSelection<Website, R> | undefined)) => Promise<(FieldsSelection<Website, R> | undefined)>}),
    groupByWebsite: ((args: {where?: (WebsiteWhereInput | null),orderBy?: (WebsiteOrderByWithAggregationInput[] | null),by: WebsiteScalarFieldEnum[],having?: (WebsiteScalarWhereWithAggregatesInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null)}) => {get: <R extends WebsiteGroupByRequest>(request: R, defaultValue?: FieldsSelection<WebsiteGroupBy, R>[]) => Promise<FieldsSelection<WebsiteGroupBy, R>[]>})
}

export interface QueryObservableChain{
    aggregatePage: ((args?: {where?: (PageWhereInput | null),orderBy?: (PageOrderByWithRelationInput[] | null),cursor?: (PageWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null)}) => AggregatePageObservableChain & {get: <R extends AggregatePageRequest>(request: R, defaultValue?: FieldsSelection<AggregatePage, R>) => Observable<FieldsSelection<AggregatePage, R>>})&(AggregatePageObservableChain & {get: <R extends AggregatePageRequest>(request: R, defaultValue?: FieldsSelection<AggregatePage, R>) => Observable<FieldsSelection<AggregatePage, R>>}),
    findFirstPage: ((args?: {where?: (PageWhereInput | null),orderBy?: (PageOrderByWithRelationInput[] | null),cursor?: (PageWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null),distinct?: (PageScalarFieldEnum[] | null)}) => PageObservableChain & {get: <R extends PageRequest>(request: R, defaultValue?: (FieldsSelection<Page, R> | undefined)) => Observable<(FieldsSelection<Page, R> | undefined)>})&(PageObservableChain & {get: <R extends PageRequest>(request: R, defaultValue?: (FieldsSelection<Page, R> | undefined)) => Observable<(FieldsSelection<Page, R> | undefined)>}),
    pages: ((args?: {where?: (PageWhereInput | null),orderBy?: (PageOrderByWithRelationInput[] | null),cursor?: (PageWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null),distinct?: (PageScalarFieldEnum[] | null)}) => {get: <R extends PageRequest>(request: R, defaultValue?: FieldsSelection<Page, R>[]) => Observable<FieldsSelection<Page, R>[]>})&({get: <R extends PageRequest>(request: R, defaultValue?: FieldsSelection<Page, R>[]) => Observable<FieldsSelection<Page, R>[]>}),
    page: ((args: {where: PageWhereUniqueInput}) => PageObservableChain & {get: <R extends PageRequest>(request: R, defaultValue?: (FieldsSelection<Page, R> | undefined)) => Observable<(FieldsSelection<Page, R> | undefined)>}),
    groupByPage: ((args: {where?: (PageWhereInput | null),orderBy?: (PageOrderByWithAggregationInput[] | null),by: PageScalarFieldEnum[],having?: (PageScalarWhereWithAggregatesInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null)}) => {get: <R extends PageGroupByRequest>(request: R, defaultValue?: FieldsSelection<PageGroupBy, R>[]) => Observable<FieldsSelection<PageGroupBy, R>[]>}),
    aggregateWebsite: ((args?: {where?: (WebsiteWhereInput | null),orderBy?: (WebsiteOrderByWithRelationInput[] | null),cursor?: (WebsiteWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null)}) => AggregateWebsiteObservableChain & {get: <R extends AggregateWebsiteRequest>(request: R, defaultValue?: FieldsSelection<AggregateWebsite, R>) => Observable<FieldsSelection<AggregateWebsite, R>>})&(AggregateWebsiteObservableChain & {get: <R extends AggregateWebsiteRequest>(request: R, defaultValue?: FieldsSelection<AggregateWebsite, R>) => Observable<FieldsSelection<AggregateWebsite, R>>}),
    findFirstWebsite: ((args?: {where?: (WebsiteWhereInput | null),orderBy?: (WebsiteOrderByWithRelationInput[] | null),cursor?: (WebsiteWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null),distinct?: (WebsiteScalarFieldEnum[] | null)}) => WebsiteObservableChain & {get: <R extends WebsiteRequest>(request: R, defaultValue?: (FieldsSelection<Website, R> | undefined)) => Observable<(FieldsSelection<Website, R> | undefined)>})&(WebsiteObservableChain & {get: <R extends WebsiteRequest>(request: R, defaultValue?: (FieldsSelection<Website, R> | undefined)) => Observable<(FieldsSelection<Website, R> | undefined)>}),
    websites: ((args?: {where?: (WebsiteWhereInput | null),orderBy?: (WebsiteOrderByWithRelationInput[] | null),cursor?: (WebsiteWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null),distinct?: (WebsiteScalarFieldEnum[] | null)}) => {get: <R extends WebsiteRequest>(request: R, defaultValue?: FieldsSelection<Website, R>[]) => Observable<FieldsSelection<Website, R>[]>})&({get: <R extends WebsiteRequest>(request: R, defaultValue?: FieldsSelection<Website, R>[]) => Observable<FieldsSelection<Website, R>[]>}),
    website: ((args: {where: WebsiteWhereUniqueInput}) => WebsiteObservableChain & {get: <R extends WebsiteRequest>(request: R, defaultValue?: (FieldsSelection<Website, R> | undefined)) => Observable<(FieldsSelection<Website, R> | undefined)>}),
    groupByWebsite: ((args: {where?: (WebsiteWhereInput | null),orderBy?: (WebsiteOrderByWithAggregationInput[] | null),by: WebsiteScalarFieldEnum[],having?: (WebsiteScalarWhereWithAggregatesInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null)}) => {get: <R extends WebsiteGroupByRequest>(request: R, defaultValue?: FieldsSelection<WebsiteGroupBy, R>[]) => Observable<FieldsSelection<WebsiteGroupBy, R>[]>})
}

export interface AggregatePagePromiseChain{
    _count: (PageCountAggregatePromiseChain & {get: <R extends PageCountAggregateRequest>(request: R, defaultValue?: (FieldsSelection<PageCountAggregate, R> | undefined)) => Promise<(FieldsSelection<PageCountAggregate, R> | undefined)>}),
    _min: (PageMinAggregatePromiseChain & {get: <R extends PageMinAggregateRequest>(request: R, defaultValue?: (FieldsSelection<PageMinAggregate, R> | undefined)) => Promise<(FieldsSelection<PageMinAggregate, R> | undefined)>}),
    _max: (PageMaxAggregatePromiseChain & {get: <R extends PageMaxAggregateRequest>(request: R, defaultValue?: (FieldsSelection<PageMaxAggregate, R> | undefined)) => Promise<(FieldsSelection<PageMaxAggregate, R> | undefined)>})
}

export interface AggregatePageObservableChain{
    _count: (PageCountAggregateObservableChain & {get: <R extends PageCountAggregateRequest>(request: R, defaultValue?: (FieldsSelection<PageCountAggregate, R> | undefined)) => Observable<(FieldsSelection<PageCountAggregate, R> | undefined)>}),
    _min: (PageMinAggregateObservableChain & {get: <R extends PageMinAggregateRequest>(request: R, defaultValue?: (FieldsSelection<PageMinAggregate, R> | undefined)) => Observable<(FieldsSelection<PageMinAggregate, R> | undefined)>}),
    _max: (PageMaxAggregateObservableChain & {get: <R extends PageMaxAggregateRequest>(request: R, defaultValue?: (FieldsSelection<PageMaxAggregate, R> | undefined)) => Observable<(FieldsSelection<PageMaxAggregate, R> | undefined)>})
}

export interface PageCountAggregatePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    created: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    updated: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    path: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    websiteId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    _all: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface PageCountAggregateObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    created: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    updated: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    path: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    websiteId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    _all: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface PageMinAggregatePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    updated: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    websiteId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface PageMinAggregateObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    updated: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    websiteId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface PageMaxAggregatePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    updated: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    websiteId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface PageMaxAggregateObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    updated: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    websiteId: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface PagePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    updated: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    websiteId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    website: (WebsitePromiseChain & {get: <R extends WebsiteRequest>(request: R, defaultValue?: FieldsSelection<Website, R>) => Promise<FieldsSelection<Website, R>>})
}

export interface PageObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    updated: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    websiteId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    website: (WebsiteObservableChain & {get: <R extends WebsiteRequest>(request: R, defaultValue?: FieldsSelection<Website, R>) => Observable<FieldsSelection<Website, R>>})
}

export interface WebsitePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    updated: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    domains: ({get: (request?: boolean|number, defaultValue?: Scalars['JSON']) => Promise<Scalars['JSON']>}),
    _count: (WebsiteCountPromiseChain & {get: <R extends WebsiteCountRequest>(request: R, defaultValue?: (FieldsSelection<WebsiteCount, R> | undefined)) => Promise<(FieldsSelection<WebsiteCount, R> | undefined)>}),
    pages: ((args?: {where?: (PageWhereInput | null),orderBy?: (PageOrderByWithRelationInput[] | null),cursor?: (PageWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null),distinct?: (PageScalarFieldEnum[] | null)}) => {get: <R extends PageRequest>(request: R, defaultValue?: FieldsSelection<Page, R>[]) => Promise<FieldsSelection<Page, R>[]>})&({get: <R extends PageRequest>(request: R, defaultValue?: FieldsSelection<Page, R>[]) => Promise<FieldsSelection<Page, R>[]>})
}

export interface WebsiteObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    updated: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    domains: ({get: (request?: boolean|number, defaultValue?: Scalars['JSON']) => Observable<Scalars['JSON']>}),
    _count: (WebsiteCountObservableChain & {get: <R extends WebsiteCountRequest>(request: R, defaultValue?: (FieldsSelection<WebsiteCount, R> | undefined)) => Observable<(FieldsSelection<WebsiteCount, R> | undefined)>}),
    pages: ((args?: {where?: (PageWhereInput | null),orderBy?: (PageOrderByWithRelationInput[] | null),cursor?: (PageWhereUniqueInput | null),take?: (Scalars['Int'] | null),skip?: (Scalars['Int'] | null),distinct?: (PageScalarFieldEnum[] | null)}) => {get: <R extends PageRequest>(request: R, defaultValue?: FieldsSelection<Page, R>[]) => Observable<FieldsSelection<Page, R>[]>})&({get: <R extends PageRequest>(request: R, defaultValue?: FieldsSelection<Page, R>[]) => Observable<FieldsSelection<Page, R>[]>})
}

export interface WebsiteCountPromiseChain{
    pages: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface WebsiteCountObservableChain{
    pages: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface PageGroupByPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    updated: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    websiteId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    _count: (PageCountAggregatePromiseChain & {get: <R extends PageCountAggregateRequest>(request: R, defaultValue?: (FieldsSelection<PageCountAggregate, R> | undefined)) => Promise<(FieldsSelection<PageCountAggregate, R> | undefined)>}),
    _min: (PageMinAggregatePromiseChain & {get: <R extends PageMinAggregateRequest>(request: R, defaultValue?: (FieldsSelection<PageMinAggregate, R> | undefined)) => Promise<(FieldsSelection<PageMinAggregate, R> | undefined)>}),
    _max: (PageMaxAggregatePromiseChain & {get: <R extends PageMaxAggregateRequest>(request: R, defaultValue?: (FieldsSelection<PageMaxAggregate, R> | undefined)) => Promise<(FieldsSelection<PageMaxAggregate, R> | undefined)>})
}

export interface PageGroupByObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    updated: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    websiteId: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    _count: (PageCountAggregateObservableChain & {get: <R extends PageCountAggregateRequest>(request: R, defaultValue?: (FieldsSelection<PageCountAggregate, R> | undefined)) => Observable<(FieldsSelection<PageCountAggregate, R> | undefined)>}),
    _min: (PageMinAggregateObservableChain & {get: <R extends PageMinAggregateRequest>(request: R, defaultValue?: (FieldsSelection<PageMinAggregate, R> | undefined)) => Observable<(FieldsSelection<PageMinAggregate, R> | undefined)>}),
    _max: (PageMaxAggregateObservableChain & {get: <R extends PageMaxAggregateRequest>(request: R, defaultValue?: (FieldsSelection<PageMaxAggregate, R> | undefined)) => Observable<(FieldsSelection<PageMaxAggregate, R> | undefined)>})
}

export interface AggregateWebsitePromiseChain{
    _count: (WebsiteCountAggregatePromiseChain & {get: <R extends WebsiteCountAggregateRequest>(request: R, defaultValue?: (FieldsSelection<WebsiteCountAggregate, R> | undefined)) => Promise<(FieldsSelection<WebsiteCountAggregate, R> | undefined)>}),
    _min: (WebsiteMinAggregatePromiseChain & {get: <R extends WebsiteMinAggregateRequest>(request: R, defaultValue?: (FieldsSelection<WebsiteMinAggregate, R> | undefined)) => Promise<(FieldsSelection<WebsiteMinAggregate, R> | undefined)>}),
    _max: (WebsiteMaxAggregatePromiseChain & {get: <R extends WebsiteMaxAggregateRequest>(request: R, defaultValue?: (FieldsSelection<WebsiteMaxAggregate, R> | undefined)) => Promise<(FieldsSelection<WebsiteMaxAggregate, R> | undefined)>})
}

export interface AggregateWebsiteObservableChain{
    _count: (WebsiteCountAggregateObservableChain & {get: <R extends WebsiteCountAggregateRequest>(request: R, defaultValue?: (FieldsSelection<WebsiteCountAggregate, R> | undefined)) => Observable<(FieldsSelection<WebsiteCountAggregate, R> | undefined)>}),
    _min: (WebsiteMinAggregateObservableChain & {get: <R extends WebsiteMinAggregateRequest>(request: R, defaultValue?: (FieldsSelection<WebsiteMinAggregate, R> | undefined)) => Observable<(FieldsSelection<WebsiteMinAggregate, R> | undefined)>}),
    _max: (WebsiteMaxAggregateObservableChain & {get: <R extends WebsiteMaxAggregateRequest>(request: R, defaultValue?: (FieldsSelection<WebsiteMaxAggregate, R> | undefined)) => Observable<(FieldsSelection<WebsiteMaxAggregate, R> | undefined)>})
}

export interface WebsiteCountAggregatePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    created: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    updated: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    domains: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    _all: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface WebsiteCountAggregateObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    created: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    updated: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    domains: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    _all: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface WebsiteMinAggregatePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    updated: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface WebsiteMinAggregateObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    updated: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface WebsiteMaxAggregatePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    updated: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface WebsiteMaxAggregateObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    updated: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface WebsiteGroupByPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    updated: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    domains: ({get: (request?: boolean|number, defaultValue?: Scalars['JSON']) => Promise<Scalars['JSON']>}),
    _count: (WebsiteCountAggregatePromiseChain & {get: <R extends WebsiteCountAggregateRequest>(request: R, defaultValue?: (FieldsSelection<WebsiteCountAggregate, R> | undefined)) => Promise<(FieldsSelection<WebsiteCountAggregate, R> | undefined)>}),
    _min: (WebsiteMinAggregatePromiseChain & {get: <R extends WebsiteMinAggregateRequest>(request: R, defaultValue?: (FieldsSelection<WebsiteMinAggregate, R> | undefined)) => Promise<(FieldsSelection<WebsiteMinAggregate, R> | undefined)>}),
    _max: (WebsiteMaxAggregatePromiseChain & {get: <R extends WebsiteMaxAggregateRequest>(request: R, defaultValue?: (FieldsSelection<WebsiteMaxAggregate, R> | undefined)) => Promise<(FieldsSelection<WebsiteMaxAggregate, R> | undefined)>})
}

export interface WebsiteGroupByObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    updated: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    domains: ({get: (request?: boolean|number, defaultValue?: Scalars['JSON']) => Observable<Scalars['JSON']>}),
    _count: (WebsiteCountAggregateObservableChain & {get: <R extends WebsiteCountAggregateRequest>(request: R, defaultValue?: (FieldsSelection<WebsiteCountAggregate, R> | undefined)) => Observable<(FieldsSelection<WebsiteCountAggregate, R> | undefined)>}),
    _min: (WebsiteMinAggregateObservableChain & {get: <R extends WebsiteMinAggregateRequest>(request: R, defaultValue?: (FieldsSelection<WebsiteMinAggregate, R> | undefined)) => Observable<(FieldsSelection<WebsiteMinAggregate, R> | undefined)>}),
    _max: (WebsiteMaxAggregateObservableChain & {get: <R extends WebsiteMaxAggregateRequest>(request: R, defaultValue?: (FieldsSelection<WebsiteMaxAggregate, R> | undefined)) => Observable<(FieldsSelection<WebsiteMaxAggregate, R> | undefined)>})
}

export interface MutationPromiseChain{
    createManyPage: ((args: {data: PageCreateManyInput[],skipDuplicates?: (Scalars['Boolean'] | null)}) => AffectedRowsOutputPromiseChain & {get: <R extends AffectedRowsOutputRequest>(request: R, defaultValue?: FieldsSelection<AffectedRowsOutput, R>) => Promise<FieldsSelection<AffectedRowsOutput, R>>}),
    createOnePage: ((args: {data: PageCreateInput}) => PagePromiseChain & {get: <R extends PageRequest>(request: R, defaultValue?: FieldsSelection<Page, R>) => Promise<FieldsSelection<Page, R>>}),
    deleteManyPage: ((args?: {where?: (PageWhereInput | null)}) => AffectedRowsOutputPromiseChain & {get: <R extends AffectedRowsOutputRequest>(request: R, defaultValue?: FieldsSelection<AffectedRowsOutput, R>) => Promise<FieldsSelection<AffectedRowsOutput, R>>})&(AffectedRowsOutputPromiseChain & {get: <R extends AffectedRowsOutputRequest>(request: R, defaultValue?: FieldsSelection<AffectedRowsOutput, R>) => Promise<FieldsSelection<AffectedRowsOutput, R>>}),
    deleteOnePage: ((args: {where: PageWhereUniqueInput}) => PagePromiseChain & {get: <R extends PageRequest>(request: R, defaultValue?: (FieldsSelection<Page, R> | undefined)) => Promise<(FieldsSelection<Page, R> | undefined)>}),
    updateManyPage: ((args: {data: PageUpdateManyMutationInput,where?: (PageWhereInput | null)}) => AffectedRowsOutputPromiseChain & {get: <R extends AffectedRowsOutputRequest>(request: R, defaultValue?: FieldsSelection<AffectedRowsOutput, R>) => Promise<FieldsSelection<AffectedRowsOutput, R>>}),
    updateOnePage: ((args: {data: PageUpdateInput,where: PageWhereUniqueInput}) => PagePromiseChain & {get: <R extends PageRequest>(request: R, defaultValue?: (FieldsSelection<Page, R> | undefined)) => Promise<(FieldsSelection<Page, R> | undefined)>}),
    upsertOnePage: ((args: {where: PageWhereUniqueInput,create: PageCreateInput,update: PageUpdateInput}) => PagePromiseChain & {get: <R extends PageRequest>(request: R, defaultValue?: FieldsSelection<Page, R>) => Promise<FieldsSelection<Page, R>>}),
    createManyWebsite: ((args: {data: WebsiteCreateManyInput[],skipDuplicates?: (Scalars['Boolean'] | null)}) => AffectedRowsOutputPromiseChain & {get: <R extends AffectedRowsOutputRequest>(request: R, defaultValue?: FieldsSelection<AffectedRowsOutput, R>) => Promise<FieldsSelection<AffectedRowsOutput, R>>}),
    createOneWebsite: ((args: {data: WebsiteCreateInput}) => WebsitePromiseChain & {get: <R extends WebsiteRequest>(request: R, defaultValue?: FieldsSelection<Website, R>) => Promise<FieldsSelection<Website, R>>}),
    deleteManyWebsite: ((args?: {where?: (WebsiteWhereInput | null)}) => AffectedRowsOutputPromiseChain & {get: <R extends AffectedRowsOutputRequest>(request: R, defaultValue?: FieldsSelection<AffectedRowsOutput, R>) => Promise<FieldsSelection<AffectedRowsOutput, R>>})&(AffectedRowsOutputPromiseChain & {get: <R extends AffectedRowsOutputRequest>(request: R, defaultValue?: FieldsSelection<AffectedRowsOutput, R>) => Promise<FieldsSelection<AffectedRowsOutput, R>>}),
    deleteOneWebsite: ((args: {where: WebsiteWhereUniqueInput}) => WebsitePromiseChain & {get: <R extends WebsiteRequest>(request: R, defaultValue?: (FieldsSelection<Website, R> | undefined)) => Promise<(FieldsSelection<Website, R> | undefined)>}),
    updateManyWebsite: ((args: {data: WebsiteUpdateManyMutationInput,where?: (WebsiteWhereInput | null)}) => AffectedRowsOutputPromiseChain & {get: <R extends AffectedRowsOutputRequest>(request: R, defaultValue?: FieldsSelection<AffectedRowsOutput, R>) => Promise<FieldsSelection<AffectedRowsOutput, R>>}),
    updateOneWebsite: ((args: {data: WebsiteUpdateInput,where: WebsiteWhereUniqueInput}) => WebsitePromiseChain & {get: <R extends WebsiteRequest>(request: R, defaultValue?: (FieldsSelection<Website, R> | undefined)) => Promise<(FieldsSelection<Website, R> | undefined)>}),
    upsertOneWebsite: ((args: {where: WebsiteWhereUniqueInput,create: WebsiteCreateInput,update: WebsiteUpdateInput}) => WebsitePromiseChain & {get: <R extends WebsiteRequest>(request: R, defaultValue?: FieldsSelection<Website, R>) => Promise<FieldsSelection<Website, R>>})
}

export interface MutationObservableChain{
    createManyPage: ((args: {data: PageCreateManyInput[],skipDuplicates?: (Scalars['Boolean'] | null)}) => AffectedRowsOutputObservableChain & {get: <R extends AffectedRowsOutputRequest>(request: R, defaultValue?: FieldsSelection<AffectedRowsOutput, R>) => Observable<FieldsSelection<AffectedRowsOutput, R>>}),
    createOnePage: ((args: {data: PageCreateInput}) => PageObservableChain & {get: <R extends PageRequest>(request: R, defaultValue?: FieldsSelection<Page, R>) => Observable<FieldsSelection<Page, R>>}),
    deleteManyPage: ((args?: {where?: (PageWhereInput | null)}) => AffectedRowsOutputObservableChain & {get: <R extends AffectedRowsOutputRequest>(request: R, defaultValue?: FieldsSelection<AffectedRowsOutput, R>) => Observable<FieldsSelection<AffectedRowsOutput, R>>})&(AffectedRowsOutputObservableChain & {get: <R extends AffectedRowsOutputRequest>(request: R, defaultValue?: FieldsSelection<AffectedRowsOutput, R>) => Observable<FieldsSelection<AffectedRowsOutput, R>>}),
    deleteOnePage: ((args: {where: PageWhereUniqueInput}) => PageObservableChain & {get: <R extends PageRequest>(request: R, defaultValue?: (FieldsSelection<Page, R> | undefined)) => Observable<(FieldsSelection<Page, R> | undefined)>}),
    updateManyPage: ((args: {data: PageUpdateManyMutationInput,where?: (PageWhereInput | null)}) => AffectedRowsOutputObservableChain & {get: <R extends AffectedRowsOutputRequest>(request: R, defaultValue?: FieldsSelection<AffectedRowsOutput, R>) => Observable<FieldsSelection<AffectedRowsOutput, R>>}),
    updateOnePage: ((args: {data: PageUpdateInput,where: PageWhereUniqueInput}) => PageObservableChain & {get: <R extends PageRequest>(request: R, defaultValue?: (FieldsSelection<Page, R> | undefined)) => Observable<(FieldsSelection<Page, R> | undefined)>}),
    upsertOnePage: ((args: {where: PageWhereUniqueInput,create: PageCreateInput,update: PageUpdateInput}) => PageObservableChain & {get: <R extends PageRequest>(request: R, defaultValue?: FieldsSelection<Page, R>) => Observable<FieldsSelection<Page, R>>}),
    createManyWebsite: ((args: {data: WebsiteCreateManyInput[],skipDuplicates?: (Scalars['Boolean'] | null)}) => AffectedRowsOutputObservableChain & {get: <R extends AffectedRowsOutputRequest>(request: R, defaultValue?: FieldsSelection<AffectedRowsOutput, R>) => Observable<FieldsSelection<AffectedRowsOutput, R>>}),
    createOneWebsite: ((args: {data: WebsiteCreateInput}) => WebsiteObservableChain & {get: <R extends WebsiteRequest>(request: R, defaultValue?: FieldsSelection<Website, R>) => Observable<FieldsSelection<Website, R>>}),
    deleteManyWebsite: ((args?: {where?: (WebsiteWhereInput | null)}) => AffectedRowsOutputObservableChain & {get: <R extends AffectedRowsOutputRequest>(request: R, defaultValue?: FieldsSelection<AffectedRowsOutput, R>) => Observable<FieldsSelection<AffectedRowsOutput, R>>})&(AffectedRowsOutputObservableChain & {get: <R extends AffectedRowsOutputRequest>(request: R, defaultValue?: FieldsSelection<AffectedRowsOutput, R>) => Observable<FieldsSelection<AffectedRowsOutput, R>>}),
    deleteOneWebsite: ((args: {where: WebsiteWhereUniqueInput}) => WebsiteObservableChain & {get: <R extends WebsiteRequest>(request: R, defaultValue?: (FieldsSelection<Website, R> | undefined)) => Observable<(FieldsSelection<Website, R> | undefined)>}),
    updateManyWebsite: ((args: {data: WebsiteUpdateManyMutationInput,where?: (WebsiteWhereInput | null)}) => AffectedRowsOutputObservableChain & {get: <R extends AffectedRowsOutputRequest>(request: R, defaultValue?: FieldsSelection<AffectedRowsOutput, R>) => Observable<FieldsSelection<AffectedRowsOutput, R>>}),
    updateOneWebsite: ((args: {data: WebsiteUpdateInput,where: WebsiteWhereUniqueInput}) => WebsiteObservableChain & {get: <R extends WebsiteRequest>(request: R, defaultValue?: (FieldsSelection<Website, R> | undefined)) => Observable<(FieldsSelection<Website, R> | undefined)>}),
    upsertOneWebsite: ((args: {where: WebsiteWhereUniqueInput,create: WebsiteCreateInput,update: WebsiteUpdateInput}) => WebsiteObservableChain & {get: <R extends WebsiteRequest>(request: R, defaultValue?: FieldsSelection<Website, R>) => Observable<FieldsSelection<Website, R>>})
}

export interface AffectedRowsOutputPromiseChain{
    count: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface AffectedRowsOutputObservableChain{
    count: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}