
var Query_possibleTypes = ['Query']
export var isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var AggregatePage_possibleTypes = ['AggregatePage']
export var isAggregatePage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAggregatePage"')
  return AggregatePage_possibleTypes.includes(obj.__typename)
}



var PageCountAggregate_possibleTypes = ['PageCountAggregate']
export var isPageCountAggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageCountAggregate"')
  return PageCountAggregate_possibleTypes.includes(obj.__typename)
}



var PageMinAggregate_possibleTypes = ['PageMinAggregate']
export var isPageMinAggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageMinAggregate"')
  return PageMinAggregate_possibleTypes.includes(obj.__typename)
}



var PageMaxAggregate_possibleTypes = ['PageMaxAggregate']
export var isPageMaxAggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageMaxAggregate"')
  return PageMaxAggregate_possibleTypes.includes(obj.__typename)
}



var Page_possibleTypes = ['Page']
export var isPage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPage"')
  return Page_possibleTypes.includes(obj.__typename)
}



var PageGroupBy_possibleTypes = ['PageGroupBy']
export var isPageGroupBy = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageGroupBy"')
  return PageGroupBy_possibleTypes.includes(obj.__typename)
}



var AggregateWebsite_possibleTypes = ['AggregateWebsite']
export var isAggregateWebsite = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAggregateWebsite"')
  return AggregateWebsite_possibleTypes.includes(obj.__typename)
}



var WebsiteCountAggregate_possibleTypes = ['WebsiteCountAggregate']
export var isWebsiteCountAggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWebsiteCountAggregate"')
  return WebsiteCountAggregate_possibleTypes.includes(obj.__typename)
}



var WebsiteMinAggregate_possibleTypes = ['WebsiteMinAggregate']
export var isWebsiteMinAggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWebsiteMinAggregate"')
  return WebsiteMinAggregate_possibleTypes.includes(obj.__typename)
}



var WebsiteMaxAggregate_possibleTypes = ['WebsiteMaxAggregate']
export var isWebsiteMaxAggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWebsiteMaxAggregate"')
  return WebsiteMaxAggregate_possibleTypes.includes(obj.__typename)
}



var Website_possibleTypes = ['Website']
export var isWebsite = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWebsite"')
  return Website_possibleTypes.includes(obj.__typename)
}



var WebsiteGroupBy_possibleTypes = ['WebsiteGroupBy']
export var isWebsiteGroupBy = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWebsiteGroupBy"')
  return WebsiteGroupBy_possibleTypes.includes(obj.__typename)
}



var Mutation_possibleTypes = ['Mutation']
export var isMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



var AffectedRowsOutput_possibleTypes = ['AffectedRowsOutput']
export var isAffectedRowsOutput = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAffectedRowsOutput"')
  return AffectedRowsOutput_possibleTypes.includes(obj.__typename)
}
