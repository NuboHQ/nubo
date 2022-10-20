import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Int: number,
    String: string,
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
    title: Scalars['Int']
    _all: Scalars['Int']
    __typename: 'PageCountAggregate'
}

export interface PageMinAggregate {
    id?: Scalars['String']
    title?: Scalars['String']
    __typename: 'PageMinAggregate'
}

export interface PageMaxAggregate {
    id?: Scalars['String']
    title?: Scalars['String']
    __typename: 'PageMaxAggregate'
}

export type SortOrder = 'asc' | 'desc'

export interface Page {
    id: Scalars['String']
    title: Scalars['String']
    __typename: 'Page'
}

export type PageScalarFieldEnum = 'id' | 'title'

export interface PageGroupBy {
    id: Scalars['String']
    title: Scalars['String']
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
    name: Scalars['Int']
    domains: Scalars['Int']
    _all: Scalars['Int']
    __typename: 'WebsiteCountAggregate'
}

export interface WebsiteMinAggregate {
    id?: Scalars['String']
    name?: Scalars['String']
    __typename: 'WebsiteMinAggregate'
}

export interface WebsiteMaxAggregate {
    id?: Scalars['String']
    name?: Scalars['String']
    __typename: 'WebsiteMaxAggregate'
}

export interface Website {
    id: Scalars['String']
    name: Scalars['String']
    domains: Scalars['JSON']
    __typename: 'Website'
}

export type WebsiteScalarFieldEnum = 'id' | 'name' | 'domains'

export interface WebsiteGroupBy {
    id: Scalars['String']
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
    title?: boolean | number
    _all?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageMinAggregateRequest{
    id?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageMaxAggregateRequest{
    id?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageWhereInput {AND?: (PageWhereInput[] | null),OR?: (PageWhereInput[] | null),NOT?: (PageWhereInput[] | null),id?: (StringFilter | null),title?: (StringFilter | null)}

export interface StringFilter {equals?: (Scalars['String'] | null),in?: (Scalars['String'][] | null),notIn?: (Scalars['String'][] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),contains?: (Scalars['String'] | null),startsWith?: (Scalars['String'] | null),endsWith?: (Scalars['String'] | null),not?: (NestedStringFilter | null)}

export interface NestedStringFilter {equals?: (Scalars['String'] | null),in?: (Scalars['String'][] | null),notIn?: (Scalars['String'][] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),contains?: (Scalars['String'] | null),startsWith?: (Scalars['String'] | null),endsWith?: (Scalars['String'] | null),not?: (NestedStringFilter | null)}

export interface PageOrderByWithRelationInput {id?: (SortOrder | null),title?: (SortOrder | null)}

export interface PageWhereUniqueInput {id?: (Scalars['String'] | null)}

export interface PageRequest{
    id?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageGroupByRequest{
    id?: boolean | number
    title?: boolean | number
    _count?: PageCountAggregateRequest
    _min?: PageMinAggregateRequest
    _max?: PageMaxAggregateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageOrderByWithAggregationInput {id?: (SortOrder | null),title?: (SortOrder | null),_count?: (PageCountOrderByAggregateInput | null),_max?: (PageMaxOrderByAggregateInput | null),_min?: (PageMinOrderByAggregateInput | null)}

export interface PageCountOrderByAggregateInput {id?: (SortOrder | null),title?: (SortOrder | null)}

export interface PageMaxOrderByAggregateInput {id?: (SortOrder | null),title?: (SortOrder | null)}

export interface PageMinOrderByAggregateInput {id?: (SortOrder | null),title?: (SortOrder | null)}

export interface PageScalarWhereWithAggregatesInput {AND?: (PageScalarWhereWithAggregatesInput[] | null),OR?: (PageScalarWhereWithAggregatesInput[] | null),NOT?: (PageScalarWhereWithAggregatesInput[] | null),id?: (StringWithAggregatesFilter | null),title?: (StringWithAggregatesFilter | null)}

export interface StringWithAggregatesFilter {equals?: (Scalars['String'] | null),in?: (Scalars['String'][] | null),notIn?: (Scalars['String'][] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),contains?: (Scalars['String'] | null),startsWith?: (Scalars['String'] | null),endsWith?: (Scalars['String'] | null),not?: (NestedStringWithAggregatesFilter | null),_count?: (NestedIntFilter | null),_min?: (NestedStringFilter | null),_max?: (NestedStringFilter | null)}

export interface NestedStringWithAggregatesFilter {equals?: (Scalars['String'] | null),in?: (Scalars['String'][] | null),notIn?: (Scalars['String'][] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),contains?: (Scalars['String'] | null),startsWith?: (Scalars['String'] | null),endsWith?: (Scalars['String'] | null),not?: (NestedStringWithAggregatesFilter | null),_count?: (NestedIntFilter | null),_min?: (NestedStringFilter | null),_max?: (NestedStringFilter | null)}

export interface NestedIntFilter {equals?: (Scalars['Int'] | null),in?: (Scalars['Int'][] | null),notIn?: (Scalars['Int'][] | null),lt?: (Scalars['Int'] | null),lte?: (Scalars['Int'] | null),gt?: (Scalars['Int'] | null),gte?: (Scalars['Int'] | null),not?: (NestedIntFilter | null)}

export interface AggregateWebsiteRequest{
    _count?: WebsiteCountAggregateRequest
    _min?: WebsiteMinAggregateRequest
    _max?: WebsiteMaxAggregateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebsiteCountAggregateRequest{
    id?: boolean | number
    name?: boolean | number
    domains?: boolean | number
    _all?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebsiteMinAggregateRequest{
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebsiteMaxAggregateRequest{
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebsiteWhereInput {AND?: (WebsiteWhereInput[] | null),OR?: (WebsiteWhereInput[] | null),NOT?: (WebsiteWhereInput[] | null),id?: (StringFilter | null),name?: (StringFilter | null),domains?: (JsonFilter | null)}

export interface JsonFilter {equals?: (Scalars['JSON'] | null),path?: (Scalars['String'] | null),string_contains?: (Scalars['String'] | null),string_starts_with?: (Scalars['String'] | null),string_ends_with?: (Scalars['String'] | null),array_contains?: (Scalars['JSON'] | null),array_starts_with?: (Scalars['JSON'] | null),array_ends_with?: (Scalars['JSON'] | null),lt?: (Scalars['JSON'] | null),lte?: (Scalars['JSON'] | null),gt?: (Scalars['JSON'] | null),gte?: (Scalars['JSON'] | null),not?: (Scalars['JSON'] | null)}

export interface WebsiteOrderByWithRelationInput {id?: (SortOrder | null),name?: (SortOrder | null),domains?: (SortOrder | null)}

export interface WebsiteWhereUniqueInput {id?: (Scalars['String'] | null)}

export interface WebsiteRequest{
    id?: boolean | number
    name?: boolean | number
    domains?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebsiteGroupByRequest{
    id?: boolean | number
    name?: boolean | number
    domains?: boolean | number
    _count?: WebsiteCountAggregateRequest
    _min?: WebsiteMinAggregateRequest
    _max?: WebsiteMaxAggregateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebsiteOrderByWithAggregationInput {id?: (SortOrder | null),name?: (SortOrder | null),domains?: (SortOrder | null),_count?: (WebsiteCountOrderByAggregateInput | null),_max?: (WebsiteMaxOrderByAggregateInput | null),_min?: (WebsiteMinOrderByAggregateInput | null)}

export interface WebsiteCountOrderByAggregateInput {id?: (SortOrder | null),name?: (SortOrder | null),domains?: (SortOrder | null)}

export interface WebsiteMaxOrderByAggregateInput {id?: (SortOrder | null),name?: (SortOrder | null)}

export interface WebsiteMinOrderByAggregateInput {id?: (SortOrder | null),name?: (SortOrder | null)}

export interface WebsiteScalarWhereWithAggregatesInput {AND?: (WebsiteScalarWhereWithAggregatesInput[] | null),OR?: (WebsiteScalarWhereWithAggregatesInput[] | null),NOT?: (WebsiteScalarWhereWithAggregatesInput[] | null),id?: (StringWithAggregatesFilter | null),name?: (StringWithAggregatesFilter | null),domains?: (JsonWithAggregatesFilter | null)}

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

export interface PageCreateManyInput {id?: (Scalars['String'] | null),title: Scalars['String']}

export interface PageCreateInput {id?: (Scalars['String'] | null),title: Scalars['String']}

export interface PageUpdateManyMutationInput {id?: (StringFieldUpdateOperationsInput | null),title?: (StringFieldUpdateOperationsInput | null)}

export interface StringFieldUpdateOperationsInput {set?: (Scalars['String'] | null)}

export interface PageUpdateInput {id?: (StringFieldUpdateOperationsInput | null),title?: (StringFieldUpdateOperationsInput | null)}

export interface WebsiteCreateManyInput {id?: (Scalars['String'] | null),name: Scalars['String'],domains: Scalars['JSON']}

export interface WebsiteCreateInput {id?: (Scalars['String'] | null),name: Scalars['String'],domains: Scalars['JSON']}

export interface WebsiteUpdateManyMutationInput {id?: (StringFieldUpdateOperationsInput | null),name?: (StringFieldUpdateOperationsInput | null),domains?: (Scalars['JSON'] | null)}

export interface WebsiteUpdateInput {id?: (StringFieldUpdateOperationsInput | null),name?: (StringFieldUpdateOperationsInput | null),domains?: (Scalars['JSON'] | null)}


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



const Website_possibleTypes: string[] = ['Website']
export const isWebsite = (obj?: { __typename?: any } | null): obj is Website => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWebsite"')
  return Website_possibleTypes.includes(obj.__typename)
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
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    _all: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface PageCountAggregateObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    _all: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface PageMinAggregatePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface PageMinAggregateObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface PageMaxAggregatePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface PageMaxAggregateObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface PagePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface PageObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface PageGroupByPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    _count: (PageCountAggregatePromiseChain & {get: <R extends PageCountAggregateRequest>(request: R, defaultValue?: (FieldsSelection<PageCountAggregate, R> | undefined)) => Promise<(FieldsSelection<PageCountAggregate, R> | undefined)>}),
    _min: (PageMinAggregatePromiseChain & {get: <R extends PageMinAggregateRequest>(request: R, defaultValue?: (FieldsSelection<PageMinAggregate, R> | undefined)) => Promise<(FieldsSelection<PageMinAggregate, R> | undefined)>}),
    _max: (PageMaxAggregatePromiseChain & {get: <R extends PageMaxAggregateRequest>(request: R, defaultValue?: (FieldsSelection<PageMaxAggregate, R> | undefined)) => Promise<(FieldsSelection<PageMaxAggregate, R> | undefined)>})
}

export interface PageGroupByObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
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
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    domains: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    _all: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface WebsiteCountAggregateObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    domains: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    _all: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface WebsiteMinAggregatePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface WebsiteMinAggregateObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface WebsiteMaxAggregatePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface WebsiteMaxAggregateObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface WebsitePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    domains: ({get: (request?: boolean|number, defaultValue?: Scalars['JSON']) => Promise<Scalars['JSON']>})
}

export interface WebsiteObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    domains: ({get: (request?: boolean|number, defaultValue?: Scalars['JSON']) => Observable<Scalars['JSON']>})
}

export interface WebsiteGroupByPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    domains: ({get: (request?: boolean|number, defaultValue?: Scalars['JSON']) => Promise<Scalars['JSON']>}),
    _count: (WebsiteCountAggregatePromiseChain & {get: <R extends WebsiteCountAggregateRequest>(request: R, defaultValue?: (FieldsSelection<WebsiteCountAggregate, R> | undefined)) => Promise<(FieldsSelection<WebsiteCountAggregate, R> | undefined)>}),
    _min: (WebsiteMinAggregatePromiseChain & {get: <R extends WebsiteMinAggregateRequest>(request: R, defaultValue?: (FieldsSelection<WebsiteMinAggregate, R> | undefined)) => Promise<(FieldsSelection<WebsiteMinAggregate, R> | undefined)>}),
    _max: (WebsiteMaxAggregatePromiseChain & {get: <R extends WebsiteMaxAggregateRequest>(request: R, defaultValue?: (FieldsSelection<WebsiteMaxAggregate, R> | undefined)) => Promise<(FieldsSelection<WebsiteMaxAggregate, R> | undefined)>})
}

export interface WebsiteGroupByObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
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