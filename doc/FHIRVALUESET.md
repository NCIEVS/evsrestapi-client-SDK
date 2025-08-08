# Using FHIR ValueSet $expand in EVSRESTAPI

ValueSets can be requested with a POST call defining a .compose definition.  This definition indicates which codes are intended to be in the returned expanded set.

ValueSets with the $expand operation are documented at https://hl7.org/fhir/R5/valueset-operation-expand.html.
Definitions using filter operators are documented at https://hl7.org/fhir/R5/valueset-filter-operator.html.

NOTE: Most of the functionality will work for R4 as it does for R5.  Exceptions are noted below.

## ValueSet expand with parameter and filter operations

Supported ValueSet $expand parameters are:

1. valueSetVersion
2. filter
3. offset
4. count
5. includeDesignations
6. includeDefinition
7. activeOnly
8. property (R5 only)

Supported operations on a compose:include:filter with property 'concept' are:

1. is-a
2. descendent-of
3. child-of (R5 only)
4. generalizes
5. descendent-leaf (R5 only)
6. in
7. is-not-a
8. not-in
   
Supported property operations on a compose:include:filter are:
1. =
2. exists (value=true or value=false)


## ValueSet expand requests via curl calls

Use an API_URL setting like the one below.

`export API_URL=https://api-evsrest.nci.nih.gov`

### ValueSet expand with definitions and designations

This request is appropriate for NCI Thesaurus and finds the included concepts with their definitions and designations.

```
cat << EOF > parameters.txt
{
	"resourceType": "Parameters",
	"parameter": [
		{
			"name": "valueSet",
			"resource": {
				"resourceType": "ValueSet",
				"id": "nci-filter-test",
				"url": "http://example.org/fhir/ValueSet/nci-filter-test",
				"version": "1.0.0",
				"name": "NCIGeneralizesFilterTest",
				"title": "NCI Thesaurus Filter Test",
				"status": "active",
				"description": "Test ValueSet expand with definitions and designations requested.",
				"compose": {
					"include": [
						{
							"system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
							"concept": [
								{
									"code": "C14225",
									"display": "Human"
								}
							]
						}
					]
				}
			}
		},
		{
			"name": "includeDefinition",
			"valueBoolean": true
		},
		{
			"name": "includeDesignations",
			"valueBoolean": true
		}
	]
}
EOF

curl -X POST "$API_URL/fhir/r5/ValueSet/\$expand" \
  -H 'accept: application/fhir+json' \
  -H 'Content-Type: application/fhir+json' \
  -d "@parameters.txt" | jq '.'
  

    
```
###   ValueSet expand with 'is-a' filter operation

  This request is appropriate for NCI Thesaurus and finds the concept Lyase Gene and all of its descendants (children, grandchildren, etc.).
```
  cat << EOF > parameters.txt
  {
      "resourceType": "Parameters",
      "parameter": [
          {
              "name": "valueSet",
              "resource": {
                  "resourceType": "ValueSet",
                  "id": "nci-is-a-filter-test",
                  "url": "http://example.org/fhir/ValueSet/nci-is-a-filter-test",
                  "version": "1.0.0",
                  "name": "NCIIsAFilterTest",
                  "title": "NCI Thesaurus Is-A Filter Test",
                  "status": "active",
                  "description": "Test ValueSet with 'is-a' filter for Lyase Gene and its descendants",
                  "compose": {
                      "include": [
                          {
                              "system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
                              "filter": [
                                  {
                                      "property": "concept",
                                      "op": "is-a",
                                      "value": "C21282"
                                  }
                              ]
                          }
                      ]
                  }
              }
          },
          {
              "name": "activeOnly",
              "valueBoolean": true
          }
      ]
  }
  EOF

  curl -X POST "$API_URL/fhir/r5/ValueSet/\$expand" \
    -H 'accept: application/fhir+json' \
    -H 'Content-Type: application/fhir+json' \
    -d "@parameters.txt" | jq '.'
    

  ```    

###   ValueSet expand with 'descendent-of' filter operation

  This request is appropriate for NCI Thesaurus and finds all descendants of Gene (excluding the Gene concept itself).
```
  cat << EOF > parameters.txt
  {
      "resourceType": "Parameters",
      "parameter": [
          {
              "name": "valueSet",
              "resource": {
                  "resourceType": "ValueSet",
                  "id": "nci-descendent-of-filter-test",
                  "url": "http://example.org/fhir/ValueSet/nci-descendent-of-filter-test",
                  "version": "1.0.0",
                  "name": "NCIDescendentOfFilterTest",
                  "title": "NCI Thesaurus Descendent-Of Filter Test",
                  "status": "active",
                  "description": "Test ValueSet with 'descendent-of' filter for all descendants of Gene",
                  "compose": {
                      "include": [
                          {
                              "system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
                              "filter": [
                                  {
                                      "property": "concept",
                                      "op": "descendent-of",
                                      "value": "C16612"
                                  }
                              ]
                          }
                      ]
                  }
              }
          },
          {
              "name": "activeOnly",
              "valueBoolean": true
          },
          {
              "name": "count",
              "valueInteger": 20
          }
      ]
  }
  EOF

  curl -X POST "$API_URL/fhir/r5/ValueSet/\$expand" \
    -H 'accept: application/fhir+json' \
    -H 'Content-Type: application/fhir+json' \
    -d "@parameters.txt" | jq '.'
```

### ValueSet expand with 'child-of' filter operation (R5 only)

This request is appropriate for NCI Thesaurus and finds the children of Lyase Gene.

```
cat << EOF > parameters.txt
{
	"resourceType": "Parameters",
	"parameter": [
		{
			"name": "valueSet",
			"resource": {
				"resourceType": "ValueSet",
				"id": "nci-child-of-filter-test",
				"url": "http://example.org/fhir/ValueSet/nci-child-of-filter-test",
				"version": "1.0.0",
				"name": "NCIChildOfFilterTest",
				"title": "NCI Thesaurus Child-Of Filter Test",
				"status": "active",
				"description": "Test ValueSet with child-of filter for Lyase Gene",
				"compose": {
					"include": [
						{
							"system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
							"filter": [
								{
									"property": "concept",
									"op": "child-of",
									"value": "C21282"
								}
							]
						}
					]
				}
			}
		},
		{
			"name": "activeOnly",
			"valueBoolean": true
		}
	]
}
EOF

curl -X POST "$API_URL/fhir/r5/ValueSet/\$expand" \
  -H 'accept: application/fhir+json' \
  -H 'Content-Type: application/fhir+json' \
  -d "@parameters.txt" | jq '.'
  

    
```

### ValueSet expand with 'generalizes' filter operation

This request is appropriate for NCI Thesaurus and finds ancestors of ADCY5 Gene, adds the Human concept and excludes the concept Enzyme Gene.

```
cat << EOF > parameters.txt
{
	"resourceType": "Parameters",
	"parameter": [
		{
			"name": "valueSet",
			"resource": {
				"resourceType": "ValueSet",
				"id": "nci-generalizes-filter-test",
				"url": "http://example.org/fhir/ValueSet/nci-generalizes-filter-test",
				"version": "1.0.0",
				"name": "NCIGeneralizesFilterTest",
				"title": "NCI Thesaurus Generalizes Filter Test",
				"status": "active",
				"description": "Test ValueSet with 'generalizes' filter for ADCY5 Gene ancestors plus direct includes and excludes",
				"compose": {
					"include": [
						{
							"system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
							"filter": [
								{
									"property": "concept",
									"op": "generalizes",
									"value": "C213888"
								}
							]
						},
						{
							"system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
							"concept": [
								{
									"code": "C14225",
									"display": "Human"
								}
							]
						}
					],
					"exclude": [
						{
							"system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
							"concept": [
								{
									"code": "C21281",
									"display": "Enzyme Gene"
								}
							]
						}
					]
				}
			}
		},
		{
			"name": "activeOnly",
			"valueBoolean": true
		}
	]
}
EOF

curl -X POST "$API_URL/fhir/r5/ValueSet/\$expand" \
  -H 'accept: application/fhir+json' \
  -H 'Content-Type: application/fhir+json' \
  -d "@parameters.txt" | jq '.'
  

    
```

### ValueSet expand with 'descendent-leaf' filter operation (R5 only)

This request is appropriate for NCI Thesaurus and finds the leaf node descendents of Lyase Gene.

```
cat << EOF > parameters.txt
{
	"resourceType": "Parameters",
	"parameter": [
		{
			"name": "valueSet",
			"resource": {
"resourceType": "ValueSet",
				"id": "nci-descendant-leaf-filter-test",
				"url": "http://example.org/fhir/ValueSet/nci-descendant-leaf-filter-test",
				"version": "1.0.0",
				"name": "NCIDescendantLeafFilterTest",
				"title": "NCI Thesaurus Descendant-Leaf Filter Test",
				"status": "active",
				"description": "Test ValueSet with descendant-leaf filter for Lyase Gene leaf descendants plus direct includes and excludes",
				"compose": {
					"include": [
						{
							"system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
							"filter": [
								{
									"property": "concept",
									"op": "descendent-leaf",
									"value": "C21282"
								}
							]
						},
						{
							"system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
							"concept": [
								{
									"code": "C16612",
									"display": "Gene"
								}
							]
						}
					]
				}
			}
		},
		{
			"name": "activeOnly",
			"valueBoolean": true
		}
	]
}
EOF

curl -X POST "$API_URL/fhir/r5/ValueSet/\$expand" \
  -H 'accept: application/fhir+json' \
  -H 'Content-Type: application/fhir+json' \
  -d "@parameters.txt" | jq '.'
  

    
```


### ValueSet expand with 'in' filter operation

This request is appropriate for NCI Thesaurus and expands the concepts provided in the filter 'in' listing as well as the direct includes concept.

```
cat << EOF > parameters.txt
{
	"resourceType": "Parameters",
	"parameter": [
		{
			"name": "valueSet",
			"resource": {
				"resourceType": "ValueSet",
				"id": "nci-in-filter-test",
				"url": "http://example.org/fhir/ValueSet/nci-in-filter-test",
				"version": "1.0.0",
				"name": "NCIInFilterTest",
				"title": "NCI Thesaurus In Filter Test",
				"status": "active",
				"description": "Test ValueSet with 'in' filter for concepts in a specific 'in' listing plus direct includes",
				"compose": {
					"include": [
						{
							"system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
							"filter": [
								{
									"property": "concept",
									"op": "in",
									"value": "C21282,C3262,C2991"
								}
							]
						},
						{
							"system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
							"concept": [
								{
									"code": "C2991",
									"display": "Disease or Disorder"
								}
							]
						}
					]
				}
			}
		},
		{
			"name": "activeOnly",
			"valueBoolean": true
		}
	]
}
EOF

curl -X POST "$API_URL/fhir/r5/ValueSet/\$expand" \
  -H 'accept: application/fhir+json' \
  -H 'Content-Type: application/fhir+json' \
  -d "@parameters.txt" | jq '.'
  

    
```
  ### ValueSet expand with 'is-not-a' filter operation

  This request is appropriate for NCI Thesaurus and excludes concepts that have an is-a relationship with the specified concept, keeping only those that are not descendants of the target concept.
```
  cat << EOF > parameters.txt
  {
      "resourceType": "Parameters",
      "parameter": [
          {
              "name": "valueSet",
              "resource": {
                  "resourceType": "ValueSet",
                  "id": "nci-is-not-a-filter-test",
                  "url": "http://example.org/fhir/ValueSet/nci-is-not-a-filter-test",
                  "version": "1.0.0",
                  "name": "NCIIsNotAFilterTest",
                  "title": "NCI Thesaurus Is-Not-A Filter Test",
                  "status": "active",
                  "description": "Test ValueSet with 'is-not-a' filter to exclude gene concepts",
                  "compose": {
                      "include": [
                          {
                              "system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
                              "concept": [
                                  {
                                      "code": "C21282",
                                      "display": "Lyase Gene"
                                  },
                                  {
                                      "code": "C16612",
                                      "display": "Gene"
                                  },
                                  {
                                      "code": "C48672",
                                      "display": "Schedule I Substance"
                                  },
                                  {
                                      "code": "C2991",
                                      "display": "Disease or Disorder"
                                  },
                                  {
                                      "code": "C48670",
                                      "display": "Controlled Substance"
                                  }
                              ],
                              "filter": [
                                  {
                                      "property": "concept",
                                      "op": "is-not-a",
                                      "value": "C16612"
                                  }
                              ]
                          }
                      ]
                  }
              }
          },
          {
              "name": "activeOnly",
              "valueBoolean": true
          }
      ]
  }
  EOF

  curl -X POST "$API_URL/fhir/r5/ValueSet/expand"   -H 'accept: application/fhir+json'   -H 'Content-Type: application/fhir+json'   -d "@parameters.txt" | jq '.'
```


  ### ValueSet expand with 'not-in' filter operation

  This request is appropriate for NCI Thesaurus and excludes specific concepts from the included list, keeping only those not specified in the filter value.
```
  cat << EOF > parameters.txt
  {
      "resourceType": "Parameters",
      "parameter": [
          {
              "name": "valueSet",
              "resource": {
                  "resourceType": "ValueSet",
                  "id": "nci-not-in-filter-test",
                  "url": "http://example.org/fhir/ValueSet/nci-not-in-filter-test",
                  "version": "1.0.0",
                  "name": "NCINotInFilterTest",
                  "title": "NCI Thesaurus Not-In Filter Test",
                  "status": "active",
                  "description": "Test ValueSet with 'not-in' filter to exclude specific concepts",
                  "compose": {
                      "include": [
                          {
                              "system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
                              "concept": [
                                  {
                                      "code": "C48670",
                                      "display": "Controlled Substance"
                                  },
                                  {
                                      "code": "C2991",
                                      "display": "Disease or Disorder"
                                  },
                                  {
                                      "code": "C48672",
                                      "display": "Schedule I Substance"
                                  },
                                  {
                                      "code": "C16612",
                                      "display": "Gene"
                                  }
                              ],
                              "filter": [
                                  {
                                      "property": "concept",
                                      "op": "not-in",
                                      "value": "C2991,C48672"
                                  }
                              ]
                          }
                      ]
                  }
              }
          },
          {
              "name": "activeOnly",
              "valueBoolean": true
          }
      ]
  }
  EOF

  curl -X POST "$API_URL/fhir/r5/ValueSet/expand"   -H 'accept: application/fhir+json'   -H 'Content-Type: application/fhir+json'   -d "@parameters.txt" | jq '.'
```
  ### ValueSet expand with property '=' filter operation

  This request is appropriate for NCI Thesaurus and finds concepts from the included list that have the Contributing_Source property equal to "FDA".
```
  cat << EOF > parameters.txt
  {
      "resourceType": "Parameters",
      "parameter": [
          {
              "name": "valueSet",
              "resource": {
                  "resourceType": "ValueSet",
                  "id": "nci-property-equals-filter-test",
                  "url": "http://example.org/fhir/ValueSet/nci-property-equals-filter-test",
                  "version": "1.0.0",
                  "name": "NCIPropertyEqualsFilterTest",
                  "title": "NCI Thesaurus Property Equals Filter Test",
                  "status": "active",
                  "description": "Test ValueSet with '=' filter for Contributing_Source property",
                  "compose": {
                      "include": [
                          {
                              "system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
                              "concept": [
                                  {
                                      "code": "C48672",
                                      "display": "Schedule I Substance"
                                  },
                                  {
                                      "code": "C2991",
                                      "display": "Disease or Disorder"
                                  },
                                  {
                                      "code": "C48670",
                                      "display": "Controlled Substance"
                                  }
                              ],
                              "filter": [
                                  {
                                      "property": "Contributing_Source",
                                      "op": "=",
                                      "value": "FDA"
                                  }
                              ]
                          }
                      ]
                  }
              }
          },
          {
              "name": "activeOnly",
              "valueBoolean": true
          }
      ]
  }
  EOF

  curl -X POST "$API_URL/fhir/r5/ValueSet/expand"   -H 'accept: application/fhir+json'   -H 'Content-Type: application/fhir+json'   -d "@parameters.txt" | jq '.'

```
  ### ValueSet expand with property 'exists' filter operation (value=true) 

  This request is appropriate for NCI Thesaurus and finds concepts from the included list that have the Contributing_Source property (regardless of its value).
```
  cat << EOF > parameters.txt
  {
      "resourceType": "Parameters",
      "parameter": [
          {
              "name": "valueSet",
              "resource": {
                  "resourceType": "ValueSet",
                  "id": "nci-property-exists-true-test",
                  "url": "http://example.org/fhir/ValueSet/nci-property-exists-true-test",
                  "version": "1.0.0",
                  "name": "NCIPropertyExistsTrueTest",
                  "title": "NCI Thesaurus Property Exists True Filter Test",
                  "status": "active",
                  "description": "Test ValueSet with 'exists' filter for Contributing_Source property (value=true)",
                  "compose": {
                      "include": [
                          {
                              "system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
                              "concept": [
                                  {
                                      "code": "C48672",
                                      "display": "Schedule I Substance"
                                  },
                                  {
                                      "code": "C2991",
                                      "display": "Disease or Disorder"
                                  },
                                  {
                                      "code": "C48670",
                                      "display": "Controlled Substance"
                                  },
                                  {
                                      "code": "C21282",
                                      "display": "Lyase Gene"
                                  }
                              ],
                              "filter": [
                                  {
                                      "property": "Contributing_Source",
                                      "op": "exists",
                                      "value": "true"
                                  }
                              ]
                          }
                      ]
                  }
              }
          },
          {
              "name": "activeOnly",
              "valueBoolean": true
          }
      ]
  }
  EOF

  curl -X POST "$API_URL/fhir/r5/ValueSet/expand"   -H 'accept: application/fhir+json'   -H 'Content-Type: application/fhir+json'   -d "@parameters.txt" | jq '.'
```

  ### ValueSet expand with property 'exists' filter operation (value=false)

  This request is appropriate for NCI Thesaurus and finds concepts from the included list that do NOT have the Contributing_Source property.
```
  cat << EOF > parameters.txt
  {
      "resourceType": "Parameters",
      "parameter": [
          {
              "name": "valueSet",
              "resource": {
                  "resourceType": "ValueSet",
                  "id": "nci-property-exists-false-test",
                  "url": "http://example.org/fhir/ValueSet/nci-property-exists-false-test",
                  "version": "1.0.0",
                  "name": "NCIPropertyExistsFalseTest",
                  "title": "NCI Thesaurus Property Exists False Filter Test",
                  "status": "active",
                  "description": "Test ValueSet with 'exists' filter for Contributing_Source property (value=false)",
                  "compose": {
                      "include": [
                          {
                              "system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
                              "concept": [
                                  {
                                      "code": "C48672",
                                      "display": "Schedule I Substance"
                                  },
                                  {
                                      "code": "C2991",
                                      "display": "Disease or Disorder"
                                  },
                                  {
                                      "code": "C48670",
                                      "display": "Controlled Substance"
                                  },
                                  {
                                      "code": "C21282",
                                      "display": "Lyase Gene"
                                  }
                              ],
                              "filter": [
                                  {
                                      "property": "Contributing_Source",
                                      "op": "exists",
                                      "value": "false"
                                  }
                              ]
                          }
                      ]
                  }
              }
          },
          {
              "name": "activeOnly",
              "valueBoolean": true
          }
      ]
  }
  EOF

  curl -X POST "$API_URL/fhir/r5/ValueSet/expand"   -H 'accept: application/fhir+json'   -H 'Content-Type: application/fhir+json'   -d "@parameters.txt" | jq '.'

```

[Back to Top](#using-fhir-valueset-expand-in-evsrestapi)
