export default {
    "scalars": [
        3,
        5,
        6,
        18,
        21,
        28,
        48,
        60
    ],
    "types": {
        "Query": {
            "aggregatePage": [
                1,
                {
                    "where": [
                        8
                    ],
                    "orderBy": [
                        20,
                        "[PageOrderByWithRelationInput!]"
                    ],
                    "cursor": [
                        24
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
                25,
                {
                    "where": [
                        8
                    ],
                    "orderBy": [
                        20,
                        "[PageOrderByWithRelationInput!]"
                    ],
                    "cursor": [
                        24
                    ],
                    "take": [
                        3
                    ],
                    "skip": [
                        3
                    ],
                    "distinct": [
                        28,
                        "[PageScalarFieldEnum!]"
                    ]
                }
            ],
            "pages": [
                25,
                {
                    "where": [
                        8
                    ],
                    "orderBy": [
                        20,
                        "[PageOrderByWithRelationInput!]"
                    ],
                    "cursor": [
                        24
                    ],
                    "take": [
                        3
                    ],
                    "skip": [
                        3
                    ],
                    "distinct": [
                        28,
                        "[PageScalarFieldEnum!]"
                    ]
                }
            ],
            "page": [
                25,
                {
                    "where": [
                        24,
                        "PageWhereUniqueInput!"
                    ]
                }
            ],
            "groupByPage": [
                29,
                {
                    "where": [
                        8
                    ],
                    "orderBy": [
                        30,
                        "[PageOrderByWithAggregationInput!]"
                    ],
                    "by": [
                        28,
                        "[PageScalarFieldEnum!]!"
                    ],
                    "having": [
                        34
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
                43,
                {
                    "where": [
                        16
                    ],
                    "orderBy": [
                        22,
                        "[WebsiteOrderByWithRelationInput!]"
                    ],
                    "cursor": [
                        47
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
                26,
                {
                    "where": [
                        16
                    ],
                    "orderBy": [
                        22,
                        "[WebsiteOrderByWithRelationInput!]"
                    ],
                    "cursor": [
                        47
                    ],
                    "take": [
                        3
                    ],
                    "skip": [
                        3
                    ],
                    "distinct": [
                        48,
                        "[WebsiteScalarFieldEnum!]"
                    ]
                }
            ],
            "websites": [
                26,
                {
                    "where": [
                        16
                    ],
                    "orderBy": [
                        22,
                        "[WebsiteOrderByWithRelationInput!]"
                    ],
                    "cursor": [
                        47
                    ],
                    "take": [
                        3
                    ],
                    "skip": [
                        3
                    ],
                    "distinct": [
                        48,
                        "[WebsiteScalarFieldEnum!]"
                    ]
                }
            ],
            "website": [
                26,
                {
                    "where": [
                        47,
                        "WebsiteWhereUniqueInput!"
                    ]
                }
            ],
            "groupByWebsite": [
                49,
                {
                    "where": [
                        16
                    ],
                    "orderBy": [
                        50,
                        "[WebsiteOrderByWithAggregationInput!]"
                    ],
                    "by": [
                        48,
                        "[WebsiteScalarFieldEnum!]!"
                    ],
                    "having": [
                        54
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
                7
            ],
            "__typename": [
                5
            ]
        },
        "PageCountAggregate": {
            "id": [
                3
            ],
            "created": [
                3
            ],
            "updated": [
                3
            ],
            "title": [
                3
            ],
            "path": [
                3
            ],
            "websiteId": [
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
            "created": [
                6
            ],
            "updated": [
                6
            ],
            "title": [
                5
            ],
            "path": [
                5
            ],
            "websiteId": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "String": {},
        "DateTime": {},
        "PageMaxAggregate": {
            "id": [
                5
            ],
            "created": [
                6
            ],
            "updated": [
                6
            ],
            "title": [
                5
            ],
            "path": [
                5
            ],
            "websiteId": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "PageWhereInput": {
            "AND": [
                8
            ],
            "OR": [
                8
            ],
            "NOT": [
                8
            ],
            "id": [
                9
            ],
            "created": [
                11
            ],
            "updated": [
                11
            ],
            "title": [
                9
            ],
            "path": [
                13
            ],
            "websiteId": [
                9
            ],
            "website": [
                15
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
                10
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
                10
            ],
            "__typename": [
                5
            ]
        },
        "DateTimeFilter": {
            "equals": [
                6
            ],
            "in": [
                6
            ],
            "notIn": [
                6
            ],
            "lt": [
                6
            ],
            "lte": [
                6
            ],
            "gt": [
                6
            ],
            "gte": [
                6
            ],
            "not": [
                12
            ],
            "__typename": [
                5
            ]
        },
        "NestedDateTimeFilter": {
            "equals": [
                6
            ],
            "in": [
                6
            ],
            "notIn": [
                6
            ],
            "lt": [
                6
            ],
            "lte": [
                6
            ],
            "gt": [
                6
            ],
            "gte": [
                6
            ],
            "not": [
                12
            ],
            "__typename": [
                5
            ]
        },
        "StringNullableFilter": {
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
                14
            ],
            "__typename": [
                5
            ]
        },
        "NestedStringNullableFilter": {
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
                14
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteRelationFilter": {
            "is": [
                16
            ],
            "isNot": [
                16
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteWhereInput": {
            "AND": [
                16
            ],
            "OR": [
                16
            ],
            "NOT": [
                16
            ],
            "id": [
                9
            ],
            "created": [
                11
            ],
            "updated": [
                11
            ],
            "name": [
                9
            ],
            "domains": [
                17
            ],
            "pages": [
                19
            ],
            "__typename": [
                5
            ]
        },
        "JsonFilter": {
            "equals": [
                18
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
                18
            ],
            "array_starts_with": [
                18
            ],
            "array_ends_with": [
                18
            ],
            "lt": [
                18
            ],
            "lte": [
                18
            ],
            "gt": [
                18
            ],
            "gte": [
                18
            ],
            "not": [
                18
            ],
            "__typename": [
                5
            ]
        },
        "JSON": {},
        "PageListRelationFilter": {
            "every": [
                8
            ],
            "some": [
                8
            ],
            "none": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "PageOrderByWithRelationInput": {
            "id": [
                21
            ],
            "created": [
                21
            ],
            "updated": [
                21
            ],
            "title": [
                21
            ],
            "path": [
                21
            ],
            "websiteId": [
                21
            ],
            "website": [
                22
            ],
            "__typename": [
                5
            ]
        },
        "SortOrder": {},
        "WebsiteOrderByWithRelationInput": {
            "id": [
                21
            ],
            "created": [
                21
            ],
            "updated": [
                21
            ],
            "name": [
                21
            ],
            "domains": [
                21
            ],
            "pages": [
                23
            ],
            "__typename": [
                5
            ]
        },
        "PageOrderByRelationAggregateInput": {
            "_count": [
                21
            ],
            "__typename": [
                5
            ]
        },
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
            "created": [
                6
            ],
            "updated": [
                6
            ],
            "title": [
                5
            ],
            "path": [
                5
            ],
            "websiteId": [
                5
            ],
            "website": [
                26
            ],
            "__typename": [
                5
            ]
        },
        "Website": {
            "id": [
                5
            ],
            "created": [
                6
            ],
            "updated": [
                6
            ],
            "name": [
                5
            ],
            "domains": [
                18
            ],
            "_count": [
                27
            ],
            "pages": [
                25,
                {
                    "where": [
                        8
                    ],
                    "orderBy": [
                        20,
                        "[PageOrderByWithRelationInput!]"
                    ],
                    "cursor": [
                        24
                    ],
                    "take": [
                        3
                    ],
                    "skip": [
                        3
                    ],
                    "distinct": [
                        28,
                        "[PageScalarFieldEnum!]"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteCount": {
            "pages": [
                3
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
            "created": [
                6
            ],
            "updated": [
                6
            ],
            "title": [
                5
            ],
            "path": [
                5
            ],
            "websiteId": [
                5
            ],
            "_count": [
                2
            ],
            "_min": [
                4
            ],
            "_max": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "PageOrderByWithAggregationInput": {
            "id": [
                21
            ],
            "created": [
                21
            ],
            "updated": [
                21
            ],
            "title": [
                21
            ],
            "path": [
                21
            ],
            "websiteId": [
                21
            ],
            "_count": [
                31
            ],
            "_max": [
                32
            ],
            "_min": [
                33
            ],
            "__typename": [
                5
            ]
        },
        "PageCountOrderByAggregateInput": {
            "id": [
                21
            ],
            "created": [
                21
            ],
            "updated": [
                21
            ],
            "title": [
                21
            ],
            "path": [
                21
            ],
            "websiteId": [
                21
            ],
            "__typename": [
                5
            ]
        },
        "PageMaxOrderByAggregateInput": {
            "id": [
                21
            ],
            "created": [
                21
            ],
            "updated": [
                21
            ],
            "title": [
                21
            ],
            "path": [
                21
            ],
            "websiteId": [
                21
            ],
            "__typename": [
                5
            ]
        },
        "PageMinOrderByAggregateInput": {
            "id": [
                21
            ],
            "created": [
                21
            ],
            "updated": [
                21
            ],
            "title": [
                21
            ],
            "path": [
                21
            ],
            "websiteId": [
                21
            ],
            "__typename": [
                5
            ]
        },
        "PageScalarWhereWithAggregatesInput": {
            "AND": [
                34
            ],
            "OR": [
                34
            ],
            "NOT": [
                34
            ],
            "id": [
                35
            ],
            "created": [
                38
            ],
            "updated": [
                38
            ],
            "title": [
                35
            ],
            "path": [
                40
            ],
            "websiteId": [
                35
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
                36
            ],
            "_count": [
                37
            ],
            "_min": [
                10
            ],
            "_max": [
                10
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
                36
            ],
            "_count": [
                37
            ],
            "_min": [
                10
            ],
            "_max": [
                10
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
                37
            ],
            "__typename": [
                5
            ]
        },
        "DateTimeWithAggregatesFilter": {
            "equals": [
                6
            ],
            "in": [
                6
            ],
            "notIn": [
                6
            ],
            "lt": [
                6
            ],
            "lte": [
                6
            ],
            "gt": [
                6
            ],
            "gte": [
                6
            ],
            "not": [
                39
            ],
            "_count": [
                37
            ],
            "_min": [
                12
            ],
            "_max": [
                12
            ],
            "__typename": [
                5
            ]
        },
        "NestedDateTimeWithAggregatesFilter": {
            "equals": [
                6
            ],
            "in": [
                6
            ],
            "notIn": [
                6
            ],
            "lt": [
                6
            ],
            "lte": [
                6
            ],
            "gt": [
                6
            ],
            "gte": [
                6
            ],
            "not": [
                39
            ],
            "_count": [
                37
            ],
            "_min": [
                12
            ],
            "_max": [
                12
            ],
            "__typename": [
                5
            ]
        },
        "StringNullableWithAggregatesFilter": {
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
                41
            ],
            "_count": [
                42
            ],
            "_min": [
                14
            ],
            "_max": [
                14
            ],
            "__typename": [
                5
            ]
        },
        "NestedStringNullableWithAggregatesFilter": {
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
                41
            ],
            "_count": [
                42
            ],
            "_min": [
                14
            ],
            "_max": [
                14
            ],
            "__typename": [
                5
            ]
        },
        "NestedIntNullableFilter": {
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
                42
            ],
            "__typename": [
                5
            ]
        },
        "AggregateWebsite": {
            "_count": [
                44
            ],
            "_min": [
                45
            ],
            "_max": [
                46
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteCountAggregate": {
            "id": [
                3
            ],
            "created": [
                3
            ],
            "updated": [
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
            "created": [
                6
            ],
            "updated": [
                6
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
            "created": [
                6
            ],
            "updated": [
                6
            ],
            "name": [
                5
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
        "WebsiteScalarFieldEnum": {},
        "WebsiteGroupBy": {
            "id": [
                5
            ],
            "created": [
                6
            ],
            "updated": [
                6
            ],
            "name": [
                5
            ],
            "domains": [
                18
            ],
            "_count": [
                44
            ],
            "_min": [
                45
            ],
            "_max": [
                46
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteOrderByWithAggregationInput": {
            "id": [
                21
            ],
            "created": [
                21
            ],
            "updated": [
                21
            ],
            "name": [
                21
            ],
            "domains": [
                21
            ],
            "_count": [
                51
            ],
            "_max": [
                52
            ],
            "_min": [
                53
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteCountOrderByAggregateInput": {
            "id": [
                21
            ],
            "created": [
                21
            ],
            "updated": [
                21
            ],
            "name": [
                21
            ],
            "domains": [
                21
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteMaxOrderByAggregateInput": {
            "id": [
                21
            ],
            "created": [
                21
            ],
            "updated": [
                21
            ],
            "name": [
                21
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteMinOrderByAggregateInput": {
            "id": [
                21
            ],
            "created": [
                21
            ],
            "updated": [
                21
            ],
            "name": [
                21
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteScalarWhereWithAggregatesInput": {
            "AND": [
                54
            ],
            "OR": [
                54
            ],
            "NOT": [
                54
            ],
            "id": [
                35
            ],
            "created": [
                38
            ],
            "updated": [
                38
            ],
            "name": [
                35
            ],
            "domains": [
                55
            ],
            "__typename": [
                5
            ]
        },
        "JsonWithAggregatesFilter": {
            "equals": [
                18
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
                18
            ],
            "array_starts_with": [
                18
            ],
            "array_ends_with": [
                18
            ],
            "lt": [
                18
            ],
            "lte": [
                18
            ],
            "gt": [
                18
            ],
            "gte": [
                18
            ],
            "not": [
                18
            ],
            "_count": [
                37
            ],
            "_min": [
                56
            ],
            "_max": [
                56
            ],
            "__typename": [
                5
            ]
        },
        "NestedJsonFilter": {
            "equals": [
                18
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
                18
            ],
            "array_starts_with": [
                18
            ],
            "array_ends_with": [
                18
            ],
            "lt": [
                18
            ],
            "lte": [
                18
            ],
            "gt": [
                18
            ],
            "gte": [
                18
            ],
            "not": [
                18
            ],
            "__typename": [
                5
            ]
        },
        "Mutation": {
            "createManyPage": [
                58,
                {
                    "data": [
                        59,
                        "[PageCreateManyInput!]!"
                    ],
                    "skipDuplicates": [
                        60
                    ]
                }
            ],
            "createOnePage": [
                25,
                {
                    "data": [
                        61,
                        "PageCreateInput!"
                    ]
                }
            ],
            "deleteManyPage": [
                58,
                {
                    "where": [
                        8
                    ]
                }
            ],
            "deleteOnePage": [
                25,
                {
                    "where": [
                        24,
                        "PageWhereUniqueInput!"
                    ]
                }
            ],
            "updateManyPage": [
                58,
                {
                    "data": [
                        65,
                        "PageUpdateManyMutationInput!"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "updateOnePage": [
                25,
                {
                    "data": [
                        69,
                        "PageUpdateInput!"
                    ],
                    "where": [
                        24,
                        "PageWhereUniqueInput!"
                    ]
                }
            ],
            "upsertOnePage": [
                25,
                {
                    "where": [
                        24,
                        "PageWhereUniqueInput!"
                    ],
                    "create": [
                        61,
                        "PageCreateInput!"
                    ],
                    "update": [
                        69,
                        "PageUpdateInput!"
                    ]
                }
            ],
            "createManyWebsite": [
                58,
                {
                    "data": [
                        73,
                        "[WebsiteCreateManyInput!]!"
                    ],
                    "skipDuplicates": [
                        60
                    ]
                }
            ],
            "createOneWebsite": [
                26,
                {
                    "data": [
                        74,
                        "WebsiteCreateInput!"
                    ]
                }
            ],
            "deleteManyWebsite": [
                58,
                {
                    "where": [
                        16
                    ]
                }
            ],
            "deleteOneWebsite": [
                26,
                {
                    "where": [
                        47,
                        "WebsiteWhereUniqueInput!"
                    ]
                }
            ],
            "updateManyWebsite": [
                58,
                {
                    "data": [
                        80,
                        "WebsiteUpdateManyMutationInput!"
                    ],
                    "where": [
                        16
                    ]
                }
            ],
            "updateOneWebsite": [
                26,
                {
                    "data": [
                        81,
                        "WebsiteUpdateInput!"
                    ],
                    "where": [
                        47,
                        "WebsiteWhereUniqueInput!"
                    ]
                }
            ],
            "upsertOneWebsite": [
                26,
                {
                    "where": [
                        47,
                        "WebsiteWhereUniqueInput!"
                    ],
                    "create": [
                        74,
                        "WebsiteCreateInput!"
                    ],
                    "update": [
                        81,
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
            "created": [
                6
            ],
            "updated": [
                6
            ],
            "title": [
                5
            ],
            "path": [
                5
            ],
            "websiteId": [
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
            "created": [
                6
            ],
            "updated": [
                6
            ],
            "title": [
                5
            ],
            "path": [
                5
            ],
            "website": [
                62
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteCreateNestedOneWithoutPagesInput": {
            "create": [
                63
            ],
            "connectOrCreate": [
                64
            ],
            "connect": [
                47
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteCreateWithoutPagesInput": {
            "id": [
                5
            ],
            "created": [
                6
            ],
            "updated": [
                6
            ],
            "name": [
                5
            ],
            "domains": [
                18
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteCreateOrConnectWithoutPagesInput": {
            "where": [
                47
            ],
            "create": [
                63
            ],
            "__typename": [
                5
            ]
        },
        "PageUpdateManyMutationInput": {
            "id": [
                66
            ],
            "created": [
                67
            ],
            "updated": [
                67
            ],
            "title": [
                66
            ],
            "path": [
                68
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
        "DateTimeFieldUpdateOperationsInput": {
            "set": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "NullableStringFieldUpdateOperationsInput": {
            "set": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "PageUpdateInput": {
            "id": [
                66
            ],
            "created": [
                67
            ],
            "updated": [
                67
            ],
            "title": [
                66
            ],
            "path": [
                68
            ],
            "website": [
                70
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteUpdateOneRequiredWithoutPagesNestedInput": {
            "create": [
                63
            ],
            "connectOrCreate": [
                64
            ],
            "upsert": [
                71
            ],
            "connect": [
                47
            ],
            "update": [
                72
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteUpsertWithoutPagesInput": {
            "update": [
                72
            ],
            "create": [
                63
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteUpdateWithoutPagesInput": {
            "id": [
                66
            ],
            "created": [
                67
            ],
            "updated": [
                67
            ],
            "name": [
                66
            ],
            "domains": [
                18
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteCreateManyInput": {
            "id": [
                5
            ],
            "created": [
                6
            ],
            "updated": [
                6
            ],
            "name": [
                5
            ],
            "domains": [
                18
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteCreateInput": {
            "id": [
                5
            ],
            "created": [
                6
            ],
            "updated": [
                6
            ],
            "name": [
                5
            ],
            "domains": [
                18
            ],
            "pages": [
                75
            ],
            "__typename": [
                5
            ]
        },
        "PageCreateNestedManyWithoutWebsiteInput": {
            "create": [
                76
            ],
            "connectOrCreate": [
                77
            ],
            "createMany": [
                78
            ],
            "connect": [
                24
            ],
            "__typename": [
                5
            ]
        },
        "PageCreateWithoutWebsiteInput": {
            "id": [
                5
            ],
            "created": [
                6
            ],
            "updated": [
                6
            ],
            "title": [
                5
            ],
            "path": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "PageCreateOrConnectWithoutWebsiteInput": {
            "where": [
                24
            ],
            "create": [
                76
            ],
            "__typename": [
                5
            ]
        },
        "PageCreateManyWebsiteInputEnvelope": {
            "data": [
                79
            ],
            "skipDuplicates": [
                60
            ],
            "__typename": [
                5
            ]
        },
        "PageCreateManyWebsiteInput": {
            "id": [
                5
            ],
            "created": [
                6
            ],
            "updated": [
                6
            ],
            "title": [
                5
            ],
            "path": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteUpdateManyMutationInput": {
            "id": [
                66
            ],
            "created": [
                67
            ],
            "updated": [
                67
            ],
            "name": [
                66
            ],
            "domains": [
                18
            ],
            "__typename": [
                5
            ]
        },
        "WebsiteUpdateInput": {
            "id": [
                66
            ],
            "created": [
                67
            ],
            "updated": [
                67
            ],
            "name": [
                66
            ],
            "domains": [
                18
            ],
            "pages": [
                82
            ],
            "__typename": [
                5
            ]
        },
        "PageUpdateManyWithoutWebsiteNestedInput": {
            "create": [
                76
            ],
            "connectOrCreate": [
                77
            ],
            "upsert": [
                83
            ],
            "createMany": [
                78
            ],
            "set": [
                24
            ],
            "disconnect": [
                24
            ],
            "delete": [
                24
            ],
            "connect": [
                24
            ],
            "update": [
                85
            ],
            "updateMany": [
                86
            ],
            "deleteMany": [
                87
            ],
            "__typename": [
                5
            ]
        },
        "PageUpsertWithWhereUniqueWithoutWebsiteInput": {
            "where": [
                24
            ],
            "update": [
                84
            ],
            "create": [
                76
            ],
            "__typename": [
                5
            ]
        },
        "PageUpdateWithoutWebsiteInput": {
            "id": [
                66
            ],
            "created": [
                67
            ],
            "updated": [
                67
            ],
            "title": [
                66
            ],
            "path": [
                68
            ],
            "__typename": [
                5
            ]
        },
        "PageUpdateWithWhereUniqueWithoutWebsiteInput": {
            "where": [
                24
            ],
            "data": [
                84
            ],
            "__typename": [
                5
            ]
        },
        "PageUpdateManyWithWhereWithoutWebsiteInput": {
            "where": [
                87
            ],
            "data": [
                65
            ],
            "__typename": [
                5
            ]
        },
        "PageScalarWhereInput": {
            "AND": [
                87
            ],
            "OR": [
                87
            ],
            "NOT": [
                87
            ],
            "id": [
                9
            ],
            "created": [
                11
            ],
            "updated": [
                11
            ],
            "title": [
                9
            ],
            "path": [
                13
            ],
            "websiteId": [
                9
            ],
            "__typename": [
                5
            ]
        }
    }
}