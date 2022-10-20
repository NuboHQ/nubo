import {
  linkTypeMap,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} from '@genql/runtime'
import types from './types.esm'
var typeMap = linkTypeMap(types)
export * from './guards.esm'

export var version = '2.10.0'
assertSameVersion(version)

export var createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: 'http://localhost:5003/graphql',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

export const enumSortOrder = {
  asc: 'asc',
  desc: 'desc',
}

export const enumPageScalarFieldEnum = {
  id: 'id',
  created: 'created',
  updated: 'updated',
  title: 'title',
  path: 'path',
  websiteId: 'websiteId',
}

export const enumWebsiteScalarFieldEnum = {
  id: 'id',
  created: 'created',
  updated: 'updated',
  name: 'name',
  domains: 'domains',
}

export var generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
export var generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
export var generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
export var everything = {
  __scalar: true,
}
