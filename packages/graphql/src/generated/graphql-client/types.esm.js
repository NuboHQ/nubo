export default {
    "scalars": [
        3,
        5,
        11,
        14,
        30,
        34,
        46
    ],
    "types": {
        "Query": {
            "aggregatePage": [
                1,
                {
                    "where": [
                        7
                    ],
                    "orderBy": [
                        10,
                        "[PageOrderByWithRelationInput!]"
                    ],
                    "cursor": [
                        12
                    ],
                    "take": [
                        3
                    ],
                    "skip": [
                        3
                    ]
                }
            ],
            "findFirstPage": [
                13,
                {
                    "where": [
                        7
                    ],
                    "orderBy": [
                        10,
                        "[PageOrderByWithRelationInput!]"
                    ],
                    "cursor": [
                        12
                    ],
                    "take": [
                        3
                    ],
                    "skip": [
                        3
                    ],
                    "distinct": [
                        14,
                        "[PageScalarFieldEnum!]"
                    ]
                }
            ],
            "pages": [
                13,
                {
                    "where": [
                        7
                    ],
                    "orderBy": [
                        10,
                        "[PageOrderByWithRelationInput!]"
                    ],
                    "cursor": [
                        12
                    ],
                    "take": [
                        3
                    ],
                    "skip": [
                        3
                    ],
                    "distinct": [
                        14,
                        "[PageScalarFieldEnum!]"
                    ]
                }
            ],
            "page": [
                13,
                {
                    "where": [
                        12,
                        "PageWhereUniqueInput!"
                    ]
                }
            ],
            "groupByPage": [
                15,
                {
                    "where": [
                        7
                    ],
                    "orderBy": [
                        16,
                        "[PageOrderByWithAggregationInput!]"
                    ],
                    "by": [
                        14,
                        "[PageScalarFieldEnum!]!"
                    ],
                    "having": [
                        20
                    ],
                    "take": [
                        3
                    ],
                    "skip": [
                        3
                    ]
                }
            ],
            "aggregateWebsite": [
                24,
                {
                    "where": [
                        28
                    ],
                    "orderBy": [
                        31,
                        "[WebsiteOrderByWithRelationInput!]"
                    ],
                    "cursor": [
                        32
                    ],
                    "take": [
                        3
                    ],
                    "skip": [
                        3
                    ]
                }
            ],
            "findFirstWebsite": [
                33,
                {
                    "where": [
                        28
                    ],
                    "orderBy": [
                        31,
                        "[WebsiteOrderByWithRelationInput!]"
                    ],
                    "cursor": [
                        32
                    ],
                    "take": [
                        3
                    ],
                    "skip": [
                        3
                    ],
                    "distinct": [
                        34,
                        "[WebsiteScalarFieldEnum!]"
                    ]
                }
            ],
            "websites": [
                33,
                {
                    "where": [
                        28
                    ],
                    "orderBy": [
                        31,
                        "[WebsiteOrderByWithRelationInput!]"
                    ],
                    "cursor": [
                        32
                    ],
                    "take": [
                        3
                    ],
                    "skip": [
                        3
                    ],
                    "distinct": [
                        34,
                        "[WebsiteScalarFieldEnum!]"
                    ]
                }
            ],
            "website": [
                33,
                {
                    "where": [
                        32,
                        "WebsiteWhereUniqueInput!"
                    ]
                }
            ],
            "groupByWebsite": [
                35,
                {
                    "where": [
                        28
                    ],
                    "orderBy": [
                        36,
                        "[WebsiteOrderByWithAggregationInput!]"
                    ],
                    "by": [
                        34,
                        "[WebsiteScalarFieldEnum!]!"
                    ],
                    "having": [
                        40
                    ],
                    "take": [
                        3
                    ],
                    "skip": [
                        3
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "AggregatePage": {
            "_count": [
                2
            ],
            "_min": [
                4
            ],
            "_max": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "PageCountAggregate": {
            "id": [
                3
            ],
            "title": [
                3
            ],
            "_all": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "Int": {},
        "PageMinAggregate": {
            "id": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "String": {},
        "PageMaxAggregate": {
            "id": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "PageWhereInput": {
            "AND": [
                7
            ],
            "OR": [
                7
            ],
            "NOT": [
                7
            ],
            "id": [
                8
            ],
            "title": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "StringFilter": {
            "equals": [
                5
            ],
            "in": [
                5
            ],
            "notIn": [
                5
            ],
            "lt": [
                5
            ],
            "lte": [
                5
            ],
            "gt": [
                5
            ],
            "gte": [
                5
            ],
            "contains": [
                5
            ],
            "startsWith": [
                5
            ],
            "endsWith": [
                5
            ],
            "not": [
                9
            ],
            "__typename": [
                5
            ]
        },
        "NestedStringFilter": {
            "equals": [
                5
            ],
            "in": [
                5
            ],
            "notIn": [
                5
            ],
            "lt": [
                5
            ],
            "lte": [
                5
            ],
            "gt": [
                5
            ],
            "gte": [
                5
            ],
            "contains": [
                5
            ],
            "startsWith": [
                5
            ],
            "endsWith": [
                5
            ],
            "not": [
                9
            ],
            "__typename": [
                5
            ]
        },
        "PageOrderByWithRelationInput": {
            "id": [
                11
            ],
            "title": [
                11
            ],
            "__typename": [
                5
            ]
        },
        "SortOrder": {},
        "PageWhereUniqueInput": {
            "id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "Page": {
            "id": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "PageScalarFieldEnum": {},
        "PageGroupBy": {
            "id": [
                5
            ],
            "title": [
                5
            ],
            "_count": [
                2
            ],
            "_min": [
                4
            ],
            "_max": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "PageOrderByWithAggregationInput": {
            "id": [
                11
            ],
            "title": [
                11
            ],
            "_count": [
                17
            ],
            "_max": [
                18
            ],
            "_min": [
                19
            ],
            "__typename": [
                5
            ]
        },
        "PageCountOrderByAggregateInput": {
            "id": [
                11
            ],
            "title": [
                11
            ],
            "__typename": [
                5
            ]
        },
        "PageMaxOrderByAggregateInput": {
            "id": [
                11
            ],
            "title": [
                11
            ],
            "__typename": [
                5
            ]
        },
        "PageMinOrderByAggregateInput": {
            "id": [
                11
            ],
            "title": [
                11
            ],
            "__typename": [
                5
            ]
        },
        "PageScalarWhereWithAggregatesInput": {
            "AND": [
                20
            ],
            "OR": [
                20
            ],
            "NOT": [
                20
            ],
            "id": [
                21
            ],
            "title": [
                21
            ],
            "__typename": [
                5
            ]
        },
        "StringWithAggregatesFilter": {
            "equals": [
                5
            ],
            "in": [
                5
            ],
            "notIn": [
                5
            ],
            "lt": [
                5
            ],
            "lte": [
                5
            ],
            "gt": [
                5
            ],
            "gte": [
                5
            ],
            "contains": [
                5
            ],
            "startsWith": [
                5
            ],
            "endsWith": [
                5
            ],
            "not": [
                22
            ],
            "_count": [
                23
            ],
            "_min": [
                9
            ],
            "_max": [
                9
            ],
            "__typename": [
                5
            ]
        },
        "NestedStringWithAggregatesFilter": {
            "equals": [
                5
            ],
            "in": [
                5
            ],
            "notIn": [
                5
            ],
            "lt": [
                5
            ],
            "lte": [
                5
            ],
            "gt": [
                5
            ],
            "gte": [
                5
            ],
            "contains": [
                5
            ],
            "startsWith": [
                5
            ],
            "endsWith": [
                5
            ],
            "not": [
                22
            ],
            "_count": [
                23
            ],
            "_min": [
                9
            ],
            "_max": [
                9
            ],
            "__typename": [
                5
            ]
        },
        "NestedIntFilter": {
            "equals": [
                3
            ],
            "in": [
                3
            ],
            "notIn": [
                3
            ],
            "lt": [
                3
            ],
            "lte": [
                3
            ],
            "gt": [
                3
            ],
            "gte": [
                3
            ],
            "not": [
                23
            ],
            "__typename": [
                5
            ]
        },
        "AggregateWebsite": {
            "_count": [
                25
            ],
            "_min": [
                26
            ],
            "_max": [
                27
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteCountAggregate": {
            "id": [
                3
            ],
            "name": [
                3
            ],
            "domains": [
                3
            ],
            "_all": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteMinAggregate": {
            "id": [
                5
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteMaxAggregate": {
            "id": [
                5
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteWhereInput": {
            "AND": [
                28
            ],
            "OR": [
                28
            ],
            "NOT": [
                28
            ],
            "id": [
                8
            ],
            "name": [
                8
            ],
            "domains": [
                29
            ],
            "__typename": [
                5
            ]
        },
        "JsonFilter": {
            "equals": [
                30
            ],
            "path": [
                5
            ],
            "string_contains": [
                5
            ],
            "string_starts_with": [
                5
            ],
            "string_ends_with": [
                5
            ],
            "array_contains": [
                30
            ],
            "array_starts_with": [
                30
            ],
            "array_ends_with": [
                30
            ],
            "lt": [
                30
            ],
            "lte": [
                30
            ],
            "gt": [
                30
            ],
            "gte": [
                30
            ],
            "not": [
                30
            ],
            "__typename": [
                5
            ]
        },
        "JSON": {},
        "WebsiteOrderByWithRelationInput": {
            "id": [
                11
            ],
            "name": [
                11
            ],
            "domains": [
                11
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteWhereUniqueInput": {
            "id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "Website": {
            "id": [
                5
            ],
            "name": [
                5
            ],
            "domains": [
                30
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteScalarFieldEnum": {},
        "WebsiteGroupBy": {
            "id": [
                5
            ],
            "name": [
                5
            ],
            "domains": [
                30
            ],
            "_count": [
                25
            ],
            "_min": [
                26
            ],
            "_max": [
                27
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteOrderByWithAggregationInput": {
            "id": [
                11
            ],
            "name": [
                11
            ],
            "domains": [
                11
            ],
            "_count": [
                37
            ],
            "_max": [
                38
            ],
            "_min": [
                39
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteCountOrderByAggregateInput": {
            "id": [
                11
            ],
            "name": [
                11
            ],
            "domains": [
                11
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteMaxOrderByAggregateInput": {
            "id": [
                11
            ],
            "name": [
                11
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteMinOrderByAggregateInput": {
            "id": [
                11
            ],
            "name": [
                11
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteScalarWhereWithAggregatesInput": {
            "AND": [
                40
            ],
            "OR": [
                40
            ],
            "NOT": [
                40
            ],
            "id": [
                21
            ],
            "name": [
                21
            ],
            "domains": [
                41
            ],
            "__typename": [
                5
            ]
        },
        "JsonWithAggregatesFilter": {
            "equals": [
                30
            ],
            "path": [
                5
            ],
            "string_contains": [
                5
            ],
            "string_starts_with": [
                5
            ],
            "string_ends_with": [
                5
            ],
            "array_contains": [
                30
            ],
            "array_starts_with": [
                30
            ],
            "array_ends_with": [
                30
            ],
            "lt": [
                30
            ],
            "lte": [
                30
            ],
            "gt": [
                30
            ],
            "gte": [
                30
            ],
            "not": [
                30
            ],
            "_count": [
                23
            ],
            "_min": [
                42
            ],
            "_max": [
                42
            ],
            "__typename": [
                5
            ]
        },
        "NestedJsonFilter": {
            "equals": [
                30
            ],
            "path": [
                5
            ],
            "string_contains": [
                5
            ],
            "string_starts_with": [
                5
            ],
            "string_ends_with": [
                5
            ],
            "array_contains": [
                30
            ],
            "array_starts_with": [
                30
            ],
            "array_ends_with": [
                30
            ],
            "lt": [
                30
            ],
            "lte": [
                30
            ],
            "gt": [
                30
            ],
            "gte": [
                30
            ],
            "not": [
                30
            ],
            "__typename": [
                5
            ]
        },
        "Mutation": {
            "createManyPage": [
                44,
                {
                    "data": [
                        45,
                        "[PageCreateManyInput!]!"
                    ],
                    "skipDuplicates": [
                        46
                    ]
                }
            ],
            "createOnePage": [
                13,
                {
                    "data": [
                        47,
                        "PageCreateInput!"
                    ]
                }
            ],
            "deleteManyPage": [
                44,
                {
                    "where": [
                        7
                    ]
                }
            ],
            "deleteOnePage": [
                13,
                {
                    "where": [
                        12,
                        "PageWhereUniqueInput!"
                    ]
                }
            ],
            "updateManyPage": [
                44,
                {
                    "data": [
                        48,
                        "PageUpdateManyMutationInput!"
                    ],
                    "where": [
                        7
                    ]
                }
            ],
            "updateOnePage": [
                13,
                {
                    "data": [
                        50,
                        "PageUpdateInput!"
                    ],
                    "where": [
                        12,
                        "PageWhereUniqueInput!"
                    ]
                }
            ],
            "upsertOnePage": [
                13,
                {
                    "where": [
                        12,
                        "PageWhereUniqueInput!"
                    ],
                    "create": [
                        47,
                        "PageCreateInput!"
                    ],
                    "update": [
                        50,
                        "PageUpdateInput!"
                    ]
                }
            ],
            "createManyWebsite": [
                44,
                {
                    "data": [
                        51,
                        "[WebsiteCreateManyInput!]!"
                    ],
                    "skipDuplicates": [
                        46
                    ]
                }
            ],
            "createOneWebsite": [
                33,
                {
                    "data": [
                        52,
                        "WebsiteCreateInput!"
                    ]
                }
            ],
            "deleteManyWebsite": [
                44,
                {
                    "where": [
                        28
                    ]
                }
            ],
            "deleteOneWebsite": [
                33,
                {
                    "where": [
                        32,
                        "WebsiteWhereUniqueInput!"
                    ]
                }
            ],
            "updateManyWebsite": [
                44,
                {
                    "data": [
                        53,
                        "WebsiteUpdateManyMutationInput!"
                    ],
                    "where": [
                        28
                    ]
                }
            ],
            "updateOneWebsite": [
                33,
                {
                    "data": [
                        54,
                        "WebsiteUpdateInput!"
                    ],
                    "where": [
                        32,
                        "WebsiteWhereUniqueInput!"
                    ]
                }
            ],
            "upsertOneWebsite": [
                33,
                {
                    "where": [
                        32,
                        "WebsiteWhereUniqueInput!"
                    ],
                    "create": [
                        52,
                        "WebsiteCreateInput!"
                    ],
                    "update": [
                        54,
                        "WebsiteUpdateInput!"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "AffectedRowsOutput": {
            "count": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "PageCreateManyInput": {
            "id": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "Boolean": {},
        "PageCreateInput": {
            "id": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "PageUpdateManyMutationInput": {
            "id": [
                49
            ],
            "title": [
                49
            ],
            "__typename": [
                5
            ]
        },
        "StringFieldUpdateOperationsInput": {
            "set": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "PageUpdateInput": {
            "id": [
                49
            ],
            "title": [
                49
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteCreateManyInput": {
            "id": [
                5
            ],
            "name": [
                5
            ],
            "domains": [
                30
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteCreateInput": {
            "id": [
                5
            ],
            "name": [
                5
            ],
            "domains": [
                30
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteUpdateManyMutationInput": {
            "id": [
                49
            ],
            "name": [
                49
            ],
            "domains": [
                30
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteUpdateInput": {
            "id": [
                49
            ],
            "name": [
                49
            ],
            "domains": [
                30
            ],
            "__typename": [
                5
            ]
        }
    }
}