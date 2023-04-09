# EVSRESTAPI client SDK: Go Tutorial

======================================

This tutorial shows how to use a locally installed version of Go to interact with the EVSREST API. Shown here are examples that demonstrate
the range of functionality that the EVSREST API has. Many of these API calls can take in different parameters than the ones shown.

## Prerequisites

* A recent version of Go must be installed. The latest version can be found [here](https://go.dev/doc/install).

The various scripts make use of the `go-examples/config.ini` file to load necessary information that is uniform across all tests.

## Sample Go Calls

The following examples are exhibited by various unit tests defined in the code in `go-examples`.
All commands to run these tests should be run from that directory. It may be necessary to move the console into that directory from the top level with the command `cd go-examples`.

A script file (containing multiple test scripts) can be run with the following command from the go-examples directory:

```bash
go test <file name>
e.g. go test -v -run main.go applicationVersion_test.go
```

A specific test from a specific test script file can be run with this command:

```bash
go test <file name> <test name>
e.g. go test -v -run main.go applicationVersion_test.go TestGetVersion
```

All tests can be run with the command 'go test -v *.go'

* [Get terminologies](#get-terminologies)
* [Get concept by code (minimal information)](#get-concept-by-code-minimal-information)
* [Get concept list by code (minimal information)](#get-concepts-by-list-of-codes-minimal-information)
* [Get concept by code (summary information)](#get-concept-by-code-summary-information)
* [Get concept by code (full information)](#get-concept-by-code-full-information)
* [Get concept by code (custom information)](#get-concept-by-code-custom-information)
* [Get concept descendants by code](#get-concept-descendants-by-code)
* [Get all properties](#get-all-properties)
* [Get property by code or label](#get-property-by-code-or-label)
* [Get all qualifiers](#get-all-qualifiers)
* [Get qualifier by code (or label)](#get-qualifier-by-code-or-label)
* [Get qualifier values by code (or label)](#get-qualifier-values-by-code-or-label)
* [Get all roles](#get-all-roles)
* [Get roles by code (or label)](#get-roles-by-code-or-label)
* [Get all associations](#get-all-associations)
* [Get associations by code (or label)](#get-associations-by-code-or-label)
* [Get term types](#get-term-types)
* [Get definition sources](#get-definition-sources)
* [Get synonym sources](#get-synonym-sources)
* [Get synonym types](#get-synonym-types)
* [Get synonym types by code](#get-synonym-types-by-code)
* [Get definition types](#get-definition-types)
* [Get definition types by code](#get-definition-types-by-code)
* [Get root concepts](#get-root-concepts)
* [Get paths to/from root from code](#get-root-paths-from-code)
* [Get paths to ancestor from code](#get-ancestor-paths-from-code)
* [Get subtree](#get-subtree)
* [Get concepts by search term](#get-concepts-by-search-term)
* [Get concepts by search term (restrict by concept status)](#get-concepts-by-search-term-restrict-by-concept-status)
* [Get concepts by search term (restrict by contributing source)](#get-concepts-by-search-term-restrict-by-contributing-source)
* [Get concepts by search term (restrict by definition source)](#get-concepts-by-search-term-restrict-by-definition-source)
* [Get concepts by search term (restrict by definition type)](#get-concepts-by-search-term-restrict-by-definition-type)
* [Get concepts by search term (restrict by synonym source and termgroup)](#get-concepts-by-search-term-restrict-by-synonym-source)
* [Get concepts by search term (restrict by synonym type)](#get-concepts-by-search-term-restrict-by-synonym-type)
* [Get concepts by search term (using type=match)](#get-concepts-by-search-term-using-typematch)
* [Get concepts by search term (using type=startsWith)](#get-concepts-by-search-term-using-typestartswith)
* [Get concepts by search term (using type=phrase)](#get-concepts-by-search-term-using-typephrase)
* [Get concepts by search term (using type=fuzzy)](#get-concepts-by-search-term-using-typefuzzy)
* [Get concepts by search term (using type=OR)](#get-concepts-by-search-term-using-typeor)
* [Get concepts by search term (using type=AND)](#get-concepts-by-search-term-using-typeand)
* [Get concepts by search term (with highlights)](#get-concepts-by-search-term-with-highlights)
* [Get concept by subset](#get-concept-by-subset)
* [Get all subsets](#get-all-subsets)
* [Get subset by code](#get-subset-by-code)
* [Get subset members by code](#get-subset-members-by-code)

### Get terminologies

Return loaded terminologies currently hosted by the API.

Command: go test -v -run TestGetTerminology`

```{.go}
=== RUN   TestGetTerminology
metadata_test.go: Get Terminology Version
https://api-evsrest.nci.nih.gov/api/v1/metadata/terminologies?latest=true&tag=monthly&terminology=ncit

[{"terminology":"ncit","version":"23.03d","date":"March 27, 2023","name":"NCI Thesaurus 23.03d","description":"NCI Thesaurus, a controlled vocabulary in support of NCI administrative and scientific activities. 
Produced by the Enterprise Vocabulary System (EVS), a project by the NCI Center for Biomedical Informatics and Information Technology. National Cancer Institute, National Institutes of Health, Bethesda, MD 20892, U.S.A.","graph":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus23.03d.owl","source":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl","terminologyVersion":"ncit_23.03d","latest":true,"tags":{"monthly":"true"},"indexName":"concept_ncit_2303d","objectIndexName":"evs_object_ncit_2303d","metadata":{"uiLabel":"NCI Thesaurus","maxVersions":3,"loader":"rdf","code":"NHC0","conceptStatuses":["Obsolete_Concept","Header_Concept","Retired_Concept","Provisional_Concept","Concept_Pending_Approval"],"retiredStatusValue":"Retired_Concept","preferredName":"P108","relationshipToTarget":"P393","synonym":["P90","P108","P107"],"synonymTermType":"P383","synonymSource":"P384","synonymCode":"P385","synonymSubSource":"P386","definition":["P325","P97"],"definitionSource":"P378","mapRelation":"P393","map":"P375","mapTarget":"P395","mapTargetTermType":"P394","mapTargetTerminology":"P396","mapTargetTerminologyVersion":"P397","detailsColumns":{"definitions-source":true,"definitions-attribution":true,"synonyms-source":true,"synonyms-termType":true,"synonyms-code":true,"synonyms-subSource":true},"hierarchy":true,"sourceCt":70,"subsetLink":"P374","subsetMember":["A8"],"subset":["C54443"],"codeLabel":"NCI Thesaurus Code"}}]

--- PASS: TestGetTerminology (0.84s)
PASS
ok      EVSRESTAPI-tests        0.870s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concept by code (minimal information)

Return concept object with minimal information for a specified code.

Command: go test -v -run TestGetMinimalConceptByCode`

```{.go}
=== RUN   TestGetMinimalConceptByCode
concepts_test.go: Get Minimal Concept by Code
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C3224?include=minimal

{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"23.03d","leaf":false}

--- PASS: TestGetMinimalConceptByCode (0.80s)
PASS
ok      EVSRESTAPI-tests        0.828s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concepts by list of codes (minimal information)

Return concept objects with minimal information for a specified list of codes.

Command: go test -v -run TestGetMinimalConceptListByCode`

```{.go}
=== RUN   TestGetMinimalConceptListByCode
concepts_test.go: Get Minimal Concept by Code
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit?include=minimal&list=C3224,C3910

[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C3910","name":"Molecular Abnormality","terminology":"ncit","version":"23.03d","leaf":false}]

--- PASS: TestGetMinimalConceptListByCode (0.72s)
PASS
ok      EVSRESTAPI-tests        0.751s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concept by code (summary information)

Return concept object with summary information for a specified code.

Command: go test -v -run TestGetSummaryConceptByCode`

```{.go}
=== RUN   TestGetMinimalConceptListByCode
concepts_test.go: Get Minimal Concept by Code
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit?include=minimal&list=C3224,C3910

[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C3910","name":"Molecular Abnormality","terminology":"ncit","version":"23.03d","leaf":false}]

--- PASS: TestGetMinimalConceptListByCode (0.72s)
PASS
ok      EVSRESTAPI-tests        0.751s

Peter@DESKTOP-491VOJL MINGW64 /e/WCI/Locker/Repos/evsrestapi-client-SDK/go-examples (go-examples)
$ go test -v -run TestGetSummaryConceptByCode
=== RUN   TestGetSummaryConceptByCode
concepts_test.go: Get Minimal Concept by Code
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C3224?include=summary

{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"23.03d","leaf":false,"synonyms":[{"name":"Melanoma","termType":"SY","type":"FULL_SYN","source":"caDSR"},{"name":"Malignant Melanoma","termType":"SY","type":"FULL_SYN","source":"CDISC"},{"name":"MELANOMA, MALIGNANT","termType":"PT","type":"FULL_SYN","source":"CDISC"},{"name":"Melanoma","termType":"PT","type":"FULL_SYN","source":"Cellosaurus"},{"name":"Malignant Melanoma","termType":"PT","type":"FULL_SYN","source":"CPTAC"},{"name":"Melanoma","termType":"PT","type":"FULL_SYN","source":"CTEP","code":"10053571","subSource":"SDC"},{"name":"Melanoma","termType":"PT","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termType":"DN","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termType":"PT","type":"FULL_SYN","source":"GDC"},{"name":"Melanoma, NOS","termType":"SY","type":"FULL_SYN","source":"GDC"},{"name":"melanoma","termType":"PT","type":"FULL_SYN","source":"NCI-GLOSS","code":"CDR0000045135"},{"name":"Malignant Melanoma","termType":"SY","type":"FULL_SYN","source":"NCI"},{"name":"Melanoma","termType":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Melanoma","termType":"PT","type":"FULL_SYN","source":"NICHD"},{"name":"Melanoma","type":"Display_Name"},{"name":"Melanoma","type":"Preferred_Name"}],"definitions":[{"definition":"A form of cancer that begins in melanocytes (cells that make the pigment melanin). It may begin in a mole (skin melanoma), but can also begin in other pigmented tissues, such as in the eye or in the intestines.","type":"ALT_DEFINITION","source":"NCI-GLOSS"},{"definition":"A malignant neoplasm composed of melanocytes.","type":"ALT_DEFINITION","source":"CDISC"},{"definition":"A malignant neoplasm comprised of melanocytes typically arising in the skin.","type":"ALT_DEFINITION","source":"NICHD"},{"definition":"A malignant, usually aggressive tumor composed of atypical, neoplastic melanocytes. Most often, melanomas arise in the skin (cutaneous melanomas) and include the following histologic subtypes: superficial spreading melanoma, nodular melanoma, acral lentiginous melanoma, and lentigo maligna melanoma. Cutaneous melanomas may arise from acquired or congenital melanocytic or dysplastic nevi. Melanomas may also arise in other anatomic sites including the gastrointestinal system, eye, 
urinary tract, and reproductive system. Melanomas frequently metastasize to lymph nodes, liver, lungs, and brain.","type":"DEFINITION","source":"NCI"}],"properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Contributing_Source","value":"Cellosaurus"},{"type":"Contributing_Source","value":"CPTAC"},{"type":"Contributing_Source","value":"CTEP"},{"type":"Contributing_Source","value":"CTRP"},{"type":"Contributing_Source","value":"GDC"},{"type":"Contributing_Source","value":"MedDRA"},{"type":"Contributing_Source","value":"NICHD"},{"type":"ICD-O-3_Code","value":"8720/3"},{"type":"Legacy Concept Name","value":"Melanoma"},{"type":"Maps_To","value":"8720/3"},{"type":"Maps_To","value":"Malignant melanoma, NOS"},{"type":"Maps_To","value":"Melanoma"},{"type":"Maps_To","value":"Melanoma, NOS"},{"type":"Neoplastic_Status","value":"Malignant"},{"type":"Semantic_Type","value":"Neoplastic Process"},{"type":"UMLS_CUI","value":"C0025202"}]}

--- PASS: TestGetSummaryConceptByCode (0.71s)
PASS
ok      EVSRESTAPI-tests        0.734s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concept by code (full information)

Return concept object with full information for a specified code.

Command: go test -v -run TestGetFullConceptByCode`

```{.go}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concept by code (custom information)

Return custom concept information for a given terminology and code. To show a range of options, in this case, the request asks for synonyms, children, maps, and inverse associations.

Command: go test -v -run TestGetCustomConceptInfoByCode`

```{.go}
=== RUN   TestGetCustomConceptInfoByCode
concepts_test.go: Get Minimal Concept by Code
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C3224?include=synonyms,children,maps,inverseAssociations

{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"23.03d","leaf":false,"synonyms":[{"name":"Melanoma","termType":"SY","type":"FULL_SYN","source":"caDSR"},{"name":"Malignant Melanoma","termType":"SY","type":"FULL_SYN","source":"CDISC"},{"name":"MELANOMA, MALIGNANT","termType":"PT","type":"FULL_SYN","source":"CDISC"},{"name":"Melanoma","termType":"PT","type":"FULL_SYN","source":"Cellosaurus"},{"name":"Malignant Melanoma","termType":"PT","type":"FULL_SYN","source":"CPTAC"},{"name":"Melanoma","termType":"PT","type":"FULL_SYN","source":"CTEP","code":"10053571","subSource":"SDC"},{"name":"Melanoma","termType":"PT","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termType":"DN","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termType":"PT","type":"FULL_SYN","source":"GDC"},{"name":"Melanoma, NOS","termType":"SY","type":"FULL_SYN","source":"GDC"},{"name":"melanoma","termType":"PT","type":"FULL_SYN","source":"NCI-GLOSS","code":"CDR0000045135"},{"name":"Malignant Melanoma","termType":"SY","type":"FULL_SYN","source":"NCI"},{"name":"Melanoma","termType":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Melanoma","termType":"PT","type":"FULL_SYN","source":"NICHD"},{"name":"Melanoma","type":"Display_Name"},{"name":"Melanoma","type":"Preferred_Name"}],"children":[{"code":"C3802","name":"Amelanotic Melanoma","leaf":false},{"code":"C8410","name":"Breast Melanoma","leaf":true},{"code":"C131506","name":"Childhood Melanoma","leaf":true},{"code":"C3510","name":"Cutaneous Melanoma","leaf":false},{"code":"C4236","name":"Epithelioid Cell Melanoma","leaf":false},{"code":"C9499","name":"Melanomatosis","leaf":false},{"code":"C8925","name":"Metastatic Melanoma","leaf":false},{"code":"C66756","name":"Mixed Epithelioid and Spindle Cell Melanoma","leaf":false},{"code":"C8711","name":"Non-Cutaneous Melanoma","leaf":false},{"code":"C8562","name":"Ocular Melanoma","leaf":false},{"code":"C118828","name":"Orbital Melanoma","leaf":true},{"code":"C162547","name":"Penile Melanoma","leaf":false},{"code":"C7087","name":"Recurrent Melanoma","leaf":false},{"code":"C147983","name":"Refractory Melanoma","leaf":false},{"code":"C4228","name":"Regressing Melanoma","leaf":false},{"code":"C190239","name":"Resectable Melanoma","leaf":false},{"code":"C4237","name":"Spindle Cell Melanoma","leaf":false},{"code":"C148517","name":"Unresectable Melanoma","leaf":false}],"inverseAssociations":[{"type":"Has_GDC_Value","relatedCode":"C178243","relatedName":"Family Cancer History Relative Primary Diagnosis Question"},{"type":"Has_GDC_Value","relatedCode":"C176985","relatedName":"Histology ICD-O Morphology Code"},{"type":"Has_GDC_Value","relatedCode":"C177621","relatedName":"ICD-O-3 Morphology Term Diagnosis Question"}],"maps":[{"type":"Related To","targetName":"8720/3","targetTermType":"PT","targetCode":"morphology","targetTerminology":"GDC"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermType":"PT","targetCode":"8720/3","targetTerminology":"ICDO3","targetTerminologyVersion":"3.2"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermType":"PT","targetCode":"8720/3","targetTerminology":"ICDO3","targetTerminologyVersion":"3.1"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermType":"PT","targetCode":"primary_diagnosis","targetTerminology":"GDC"},{"type":"Has Synonym","targetName":"Melanoma, NOS","targetTermType":"PT","targetCode":"primary_diagnosis","targetTerminology":"GDC"},{"type":"Has Synonym","targetName":"Melanoma","targetTermType":"LLT","targetCode":"10053571","targetTerminology":"MedDRA","targetTerminologyVersion":"18.1"},{"type":"Has Synonym","targetName":"Melanoma","targetTermType":"PT","targetCode":"relationship_primary_diagnosis","targetTerminology":"GDC"}]}

--- PASS: TestGetCustomConceptInfoByCode (0.79s)
PASS
ok      EVSRESTAPI-tests        0.816s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concept part (children) by code

Return concept part information for a given terminology, concept part, and code. Some possible concept parts include Children, Parents, Roles, Associations, InverseRoles, InverseAssociations, Maps, and DisjointWith. The example below shows Children.

Command: go test -v -run TestGetConceptPartByCode`

```{.go}
=== RUN   TestGetConceptPartByCode
concepts_test.go: Get Minimal Concept by Code
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C3224/children

[{"code":"C3802","name":"Amelanotic Melanoma","leaf":false},{"code":"C8410","name":"Breast Melanoma","leaf":true},{"code":"C131506","name":"Childhood Melanoma","leaf":true},{"code":"C3510","name":"Cutaneous Melanoma","leaf":false},{"code":"C4236","name":"Epithelioid Cell Melanoma","leaf":false},{"code":"C9499","name":"Melanomatosis","leaf":false},{"code":"C8925","name":"Metastatic Melanoma","leaf":false},{"code":"C66756","name":"Mixed Epithelioid and Spindle Cell Melanoma","leaf":false},{"code":"C8711","name":"Non-Cutaneous Melanoma","leaf":false},{"code":"C8562","name":"Ocular Melanoma","leaf":false},{"code":"C118828","name":"Orbital Melanoma","leaf":true},{"code":"C162547","name":"Penile Melanoma","leaf":false},{"code":"C7087","name":"Recurrent Melanoma","leaf":false},{"code":"C147983","name":"Refractory Melanoma","leaf":false},{"code":"C4228","name":"Regressing Melanoma","leaf":false},{"code":"C190239","name":"Resectable Melanoma","leaf":false},{"code":"C4237","name":"Spindle Cell Melanoma","leaf":false},{"code":"C148517","name":"Unresectable Melanoma","leaf":false}]

--- PASS: TestGetConceptPartByCode (0.71s)
PASS
ok      EVSRESTAPI-tests        0.739s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concept descendants by code

Return concept descendants information for a given terminology and code. The call client can be constrained by a maxLevel to prevent going deeper than a certain amount. Level 0 entries in the result are the direct children. The test sets the max level to 2.

Command: go test -v -run TestGetConceptDescendantsByCode`

```{.go}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all properties

Return all properties for a given terminology with default include setting (minimal).

Command: go test -v -run TestGetProperties`

```{.go}
=== RUN   TestGetProperties
metadata_test.go: Get Properties
https://api-evsrest.nci.nih.gov/api/v1/metadata/ncit/properties?include=minimal

[{"code":"P106","name":"Semantic_Type","terminology":"ncit","version":"23.03d"},{"code":"P207","name":"UMLS_CUI","terminology":"ncit","version":"23.03d"},{"code":"P366","name":"Legacy Concept Name","terminology":"ncit","version":"23.03d"},{"code":"P322","name":"Contributing_Source","terminology":"ncit","version":"23.03d"},{"code":"P208","name":"NCI_META_CUI","terminology":"ncit","version":"23.03d"},{"code":"P98","name":"DesignNote","terminology":"ncit","version":"23.03d"},{"code":"P375","name":"Maps_To","terminology":"ncit","version":"23.03d"},{"code":"oboInOwl:hasDbXref","name":"xRef","terminology":"ncit","version":"23.03d"},{"code":"P92","name":"Subsource","terminology":"ncit","version":"23.03d"},{"code":"P319","name":"FDA_UNII_Code","terminology":"ncit","version":"23.03d"},{"code":"P210","name":"CAS_Registry","terminology":"ncit","version":"23.03d"},{"code":"P310","name":"Concept_Status","terminology":"ncit","version":"23.03d"},{"code":"P175","name":"NSC Number","terminology":"ncit","version":"23.03d"},{"code":"P302","name":"Accepted_Therapeutic_Use_For","terminology":"ncit","version":"23.03d"},{"code":"P329","name":"PDQ_Open_Trial_Search_ID","terminology":"ncit","version":"23.03d"},{"code":"P330","name":"PDQ_Closed_Trial_Search_ID","terminology":"ncit","version":"23.03d"},{"code":"P350","name":"Chemical_Formula","terminology":"ncit","version":"23.03d"},{"code":"P368","name":"CHEBI_ID","terminology":"ncit","version":"23.03d"},{"code":"P399","name":"NCI_Drug_Dictionary_ID","terminology":"ncit","version":"23.03d"},{"code":"P361","name":"Extensible_List","terminology":"ncit","version":"23.03d"},{"code":"P372","name":"Publish_Value_Set","terminology":"ncit","version":"23.03d"},{"code":"P376","name":"Term_Browser_Value_Set_Description","terminology":"ncit","version":"23.03d"},{"code":"P398","name":"Value_Set_Pair","terminology":"ncit","version":"23.03d"},{"code":"P317","name":"FDA_Table","terminology":"ncit","version":"23.03d"},{"code":"P363","name":"Neoplastic_Status","terminology":"ncit","version":"23.03d"},{"code":"P334","name":"ICD-O-3_Code","terminology":"ncit","version":"23.03d"},{"code":"P320","name":"OID","terminology":"ncit","version":"23.03d"},{"code":"P171","name":"PubMedID_Primary_Reference","terminology":"ncit","version":"23.03d"},{"code":"P200","name":"OLD_PARENT","terminology":"ncit","version":"23.03d"},{"code":"P333","name":"Use_For","terminology":"ncit","version":"23.03d"},{"code":"P100","name":"OMIM_Number","terminology":"ncit","version":"23.03d"},{"code":"P93","name":"Swiss_Prot","terminology":"ncit","version":"23.03d"},{"code":"P96","name":"Gene_Encodes_Product","terminology":"ncit","version":"23.03d"},{"code":"P369","name":"HGNC_ID","terminology":"ncit","version":"23.03d"},{"code":"P351","name":"US_Recommended_Intake","terminology":"ncit","version":"23.03d"},{"code":"P352","name":"Tolerable_Level","terminology":"ncit","version":"23.03d"},{"code":"P353","name":"INFOODS","terminology":"ncit","version":"23.03d"},{"code":"P354","name":"USDA_ID","terminology":"ncit","version":"23.03d"},{"code":"P355","name":"Unit","terminology":"ncit","version":"23.03d"},{"code":"P364","name":"OLD_ASSOCIATION","terminology":"ncit","version":"23.03d"},{"code":"P102","name":"GenBank_Accession_Number","terminology":"ncit","version":"23.03d"},{"code":"P204","name":"OLD_ROLE","terminology":"ncit","version":"23.03d"},{"code":"P321","name":"EntrezGene_ID","terminology":"ncit","version":"23.03d"},{"code":"P367","name":"PID_ID","terminology":"ncit","version":"23.03d"},{"code":"P331","name":"NCBI_Taxon_ID","terminology":"ncit","version":"23.03d"},{"code":"P216","name":"BioCarta_ID","terminology":"ncit","version":"23.03d"},{"code":"P215","name":"KEGG_ID","terminology":"ncit","version":"23.03d"},{"code":"P362","name":"miRBase_ID","terminology":"ncit","version":"23.03d"},{"code":"P201","name":"OLD_CHILD","terminology":"ncit","version":"23.03d"},{"code":"P315","name":"SNP_ID","terminology":"ncit","version":"23.03d"},{"code":"P400","name":"ClinVar_Variation_ID","terminology":"ncit","version":"23.03d"},{"code":"P358","name":"Nutrient","terminology":"ncit","version":"23.03d"},{"code":"P359","name":"Micronutrient","terminology":"ncit","version":"23.03d"},{"code":"P203","name":"OLD_KIND","terminology":"ncit","version":"23.03d"},{"code":"P360","name":"Macronutrient","terminology":"ncit","version":"23.03d"},{"code":"P371","name":"NICHD_Hierarchy_Term","terminology":"ncit","version":"23.03d"},{"code":"P357","name":"Essential_Fatty_Acid","terminology":"ncit","version":"23.03d"},{"code":"P332","name":"MGI_Accession_ID","terminology":"ncit","version":"23.03d"},{"code":"P101","name":"Homologous_Gene","terminology":"ncit","version":"23.03d"},{"code":"P211","name":"GO_Annotation","terminology":"ncit","version":"23.03d"},{"code":"P356","name":"Essential_Amino_Acid","terminology":"ncit","version":"23.03d"},{"code":"P167","name":"Image_Link","terminology":"ncit","version":"23.03d"},{"code":"P316","name":"Relative_Enzyme_Activity","terminology":"ncit","version":"23.03d"}]

--- PASS: TestGetProperties (0.70s)
PASS
ok      EVSRESTAPI-tests        0.732s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get property by code or label

Return property for the specified code or label.

Command: go test -v -run TestGetPropertyByCodeOrLabel`

```{.go}
=== RUN   TestGetPropertyByCodeOrLabel
metadata_test.go: Get Properties By Code
https://api-evsrest.nci.nih.gov/api/v1/metadata/ncit/properties?include=summary&list=P302

[{"code":"P302","name":"Accepted_Therapeutic_Use_For","terminology":"ncit","version":"23.03d","synonyms":[{"name":"Accepted Therapeutic Use For","type":"Display_Name"},{"name":"Accepted_Therapeutic_Use_For","type":"FULL_SYN"},{"name":"Accepted_Therapeutic_Use_For","type":"Preferred_Name"}],"definitions":[{"definition":"A property representing a disease or condition for which this drug is an accepted treatment. Used in the Drug, Food, Chemical or Biomedical Material branch.","type":"DEFINITION"}],"properties":[{"type":"Semantic_Type","value":"Conceptual Entity"}]}]

--- PASS: TestGetPropertyByCodeOrLabel (0.79s)
PASS
ok      EVSRESTAPI-tests        0.827s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all qualifiers

Return all qualifiers for a given terminology with default include setting (minimal).

Command: go test -v -run TestGetQualifiers`

```{.go}
=== RUN   TestGetQualifiers
metadata_test.go: Get Qualifiers
https://api-evsrest.nci.nih.gov/api/v1/metadata/ncit/properties?include=minimal

[{"code":"P106","name":"Semantic_Type","terminology":"ncit","version":"23.03d"},{"code":"P207","name":"UMLS_CUI","terminology":"ncit","version":"23.03d"},{"code":"P366","name":"Legacy Concept Name","terminology":"ncit","version":"23.03d"},{"code":"P322","name":"Contributing_Source","terminology":"ncit","version":"23.03d"},{"code":"P208","name":"NCI_META_CUI","terminology":"ncit","version":"23.03d"},{"code":"P98","name":"DesignNote","terminology":"ncit","version":"23.03d"},{"code":"P375","name":"Maps_To","terminology":"ncit","version":"23.03d"},{"code":"oboInOwl:hasDbXref","name":"xRef","terminology":"ncit","version":"23.03d"},{"code":"P92","name":"Subsource","terminology":"ncit","version":"23.03d"},{"code":"P319","name":"FDA_UNII_Code","terminology":"ncit","version":"23.03d"},{"code":"P210","name":"CAS_Registry","terminology":"ncit","version":"23.03d"},{"code":"P310","name":"Concept_Status","terminology":"ncit","version":"23.03d"},{"code":"P175","name":"NSC Number","terminology":"ncit","version":"23.03d"},{"code":"P302","name":"Accepted_Therapeutic_Use_For","terminology":"ncit","version":"23.03d"},{"code":"P329","name":"PDQ_Open_Trial_Search_ID","terminology":"ncit","version":"23.03d"},{"code":"P330","name":"PDQ_Closed_Trial_Search_ID","terminology":"ncit","version":"23.03d"},{"code":"P350","name":"Chemical_Formula","terminology":"ncit","version":"23.03d"},{"code":"P368","name":"CHEBI_ID","terminology":"ncit","version":"23.03d"},{"code":"P399","name":"NCI_Drug_Dictionary_ID","terminology":"ncit","version":"23.03d"},{"code":"P361","name":"Extensible_List","terminology":"ncit","version":"23.03d"},{"code":"P372","name":"Publish_Value_Set","terminology":"ncit","version":"23.03d"},{"code":"P376","name":"Term_Browser_Value_Set_Description","terminology":"ncit","version":"23.03d"},{"code":"P398","name":"Value_Set_Pair","terminology":"ncit","version":"23.03d"},{"code":"P317","name":"FDA_Table","terminology":"ncit","version":"23.03d"},{"code":"P363","name":"Neoplastic_Status","terminology":"ncit","version":"23.03d"},{"code":"P334","name":"ICD-O-3_Code","terminology":"ncit","version":"23.03d"},{"code":"P320","name":"OID","terminology":"ncit","version":"23.03d"},{"code":"P171","name":"PubMedID_Primary_Reference","terminology":"ncit","version":"23.03d"},{"code":"P200","name":"OLD_PARENT","terminology":"ncit","version":"23.03d"},{"code":"P333","name":"Use_For","terminology":"ncit","version":"23.03d"},{"code":"P100","name":"OMIM_Number","terminology":"ncit","version":"23.03d"},{"code":"P93","name":"Swiss_Prot","terminology":"ncit","version":"23.03d"},{"code":"P96","name":"Gene_Encodes_Product","terminology":"ncit","version":"23.03d"},{"code":"P369","name":"HGNC_ID","terminology":"ncit","version":"23.03d"},{"code":"P351","name":"US_Recommended_Intake","terminology":"ncit","version":"23.03d"},{"code":"P352","name":"Tolerable_Level","terminology":"ncit","version":"23.03d"},{"code":"P353","name":"INFOODS","terminology":"ncit","version":"23.03d"},{"code":"P354","name":"USDA_ID","terminology":"ncit","version":"23.03d"},{"code":"P355","name":"Unit","terminology":"ncit","version":"23.03d"},{"code":"P364","name":"OLD_ASSOCIATION","terminology":"ncit","version":"23.03d"},{"code":"P102","name":"GenBank_Accession_Number","terminology":"ncit","version":"23.03d"},{"code":"P204","name":"OLD_ROLE","terminology":"ncit","version":"23.03d"},{"code":"P321","name":"EntrezGene_ID","terminology":"ncit","version":"23.03d"},{"code":"P367","name":"PID_ID","terminology":"ncit","version":"23.03d"},{"code":"P331","name":"NCBI_Taxon_ID","terminology":"ncit","version":"23.03d"},{"code":"P216","name":"BioCarta_ID","terminology":"ncit","version":"23.03d"},{"code":"P215","name":"KEGG_ID","terminology":"ncit","version":"23.03d"},{"code":"P362","name":"miRBase_ID","terminology":"ncit","version":"23.03d"},{"code":"P201","name":"OLD_CHILD","terminology":"ncit","version":"23.03d"},{"code":"P315","name":"SNP_ID","terminology":"ncit","version":"23.03d"},{"code":"P400","name":"ClinVar_Variation_ID","terminology":"ncit","version":"23.03d"},{"code":"P358","name":"Nutrient","terminology":"ncit","version":"23.03d"},{"code":"P359","name":"Micronutrient","terminology":"ncit","version":"23.03d"},{"code":"P203","name":"OLD_KIND","terminology":"ncit","version":"23.03d"},{"code":"P360","name":"Macronutrient","terminology":"ncit","version":"23.03d"},{"code":"P371","name":"NICHD_Hierarchy_Term","terminology":"ncit","version":"23.03d"},{"code":"P357","name":"Essential_Fatty_Acid","terminology":"ncit","version":"23.03d"},{"code":"P332","name":"MGI_Accession_ID","terminology":"ncit","version":"23.03d"},{"code":"P101","name":"Homologous_Gene","terminology":"ncit","version":"23.03d"},{"code":"P211","name":"GO_Annotation","terminology":"ncit","version":"23.03d"},{"code":"P356","name":"Essential_Amino_Acid","terminology":"ncit","version":"23.03d"},{"code":"P167","name":"Image_Link","terminology":"ncit","version":"23.03d"},{"code":"P316","name":"Relative_Enzyme_Activity","terminology":"ncit","version":"23.03d"}]

--- PASS: TestGetQualifiers (0.73s)
PASS
ok      EVSRESTAPI-tests        0.755s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get qualifier by code (or label)

Return qualifier for the specified code or label.

Command: go test -v -run TestGetQualifierByCode`

```{.go}
=== RUN   TestGetQualifierByCode
metadata_test.go: Get Qualifer By Code
https://api-evsrest.nci.nih.gov/api/v1/metadata/ncit/qualifiers?include=summary&list=P387

[{"code":"P387","name":"go-id","terminology":"ncit","version":"23.03d","synonyms":[{"name":"go-id","type":"Preferred_Name"}],"definitions":[{"definition":"A property representing a unique zero-padded seven digit identifier supplied by the Gene Ontology (GO) that has no inherent meaning or relation to the position of the term in GO and is prefixed by \"GO:\".","type":"DEFINITION"}],"properties":[{"type":"required","value":"true"}]}]

--- PASS: TestGetQualifierByCode (0.72s)
PASS
ok      EVSRESTAPI-tests        0.750s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get qualifier values by code (or label)

Return distinct value set for the qualifier with the specified code or label.

Command: go test -v -run TestGetQualifierValuesByCode`

```{.go}
=== RUN   TestGetQualifierValuesByCode
metadata_test.go: Get Qualifer Values By Code
https://api-evsrest.nci.nih.gov/api/v1/metadata/ncit/qualifier/P390/values

["CGAP"]

--- PASS: TestGetQualifierValuesByCode (0.73s)
PASS
ok      EVSRESTAPI-tests        0.753s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all roles

Return all roles.

Command: go test -v -run TestGetRoles`

```{.go}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get roles by code (or label)

Returns a role definition for a specified code.

Command: go test -v -run TestGetRoleByCode`

```{.go}
=== RUN   TestGetRoleByCode
metadata_test.go: Get Roles
https://api-evsrest.nci.nih.gov/api/v1/metadata/ncit/role/R123

{"code":"R123","name":"Chemotherapy_Regimen_Has_Component","terminology":"ncit","version":"23.03d","synonyms":[{"name":"Has Component","type":"Display_Name"},{"name":"Chemotherapy_Regimen_Has_Component","type":"FULL_SYN"},{"name":"Chemotherapy_Regimen_Has_Component","type":"Preferred_Name"}],"definitions":[{"definition":"A role used to specify the component agents which are used in a particular chemotherapy regimen or agent combination. The domain and the range for this role are 'Chemotherapy Regimen or Agent Combination' and 'Drug, Food, Chemical or Biomedical Material', respectively.","type":"DEFINITION"}],"properties":[{"type":"Semantic_Type","value":"Conceptual Entity"}]}

--- PASS: TestGetRoleByCode (0.75s)
PASS
ok      EVSRESTAPI-tests        0.777s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all associations

Return all associations.

Command: go test -v -run TestGetAssociations`

```{.go}
=== RUN   TestGetAssociations
metadata_test.go: Get Associations
https://api-evsrest.nci.nih.gov/api/v1/metadata/ncit/associations?include=minimal

[{"code":"A1","name":"Role_Has_Domain","terminology":"ncit","version":"23.03d"},{"code":"A10","name":"Has_CDRH_Parent","terminology":"ncit","version":"23.03d"},{"code":"A11","name":"Has_NICHD_Parent","terminology":"ncit","version":"23.03d"},{"code":"A12","name":"Has_Data_Element","terminology":"ncit","version":"23.03d"},{"code":"A13","name":"Related_To_Genetic_Biomarker","terminology":"ncit","version":"23.03d"},{"code":"A14","name":"Neoplasm_Has_Special_Category","terminology":"ncit","version":"23.03d"},{"code":"A15","name":"Has_CTCAE_5_Parent","terminology":"ncit","version":"23.03d"},{"code":"A16","name":"Has_INC_Parent","terminology":"ncit","version":"23.03d"},{"code":"A17","name":"Has_Pharmaceutical_State_Of_Matter","terminology":"ncit","version":"23.03d"},{"code":"A18","name":"Has_Pharmaceutical_Basic_Dose_Form","terminology":"ncit","version":"23.03d"},{"code":"A19","name":"Has_Pharmaceutical_Administration_Method","terminology":"ncit","version":"23.03d"},{"code":"A2","name":"Role_Has_Range","terminology":"ncit","version":"23.03d"},{"code":"A20","name":"Has_Pharmaceutical_Intended_Site","terminology":"ncit","version":"23.03d"},{"code":"A21","name":"Has_Pharmaceutical_Release_Characteristics","terminology":"ncit","version":"23.03d"},{"code":"A22","name":"Has_Pharmaceutical_Transformation","terminology":"ncit","version":"23.03d"},{"code":"A23","name":"Has_PCDC_Data_Type","terminology":"ncit","version":"23.03d"},{"code":"A24","name":"Is_PCDC_AML_Authorized_Value_For_Variable","terminology":"ncit","version":"23.03d"},{"code":"A25","name":"Value_Set_Is_Paired_With","terminology":"ncit","version":"23.03d"},{"code":"A26","name":"Has_PCDC_AML_Authorized_Value","terminology":"ncit","version":"23.03d"},{"code":"A27","name":"Has_CTDC_Value","terminology":"ncit","version":"23.03d"},{"code":"A28","name":"Is_PCDC_EWS_Authorized_Value_For_Variable","terminology":"ncit","version":"23.03d"},{"code":"A29","name":"Has_PCDC_EWS_Authorized_Value","terminology":"ncit","version":"23.03d"},{"code":"A3","name":"Role_Has_Parent","terminology":"ncit","version":"23.03d"},{"code":"A30","name":"Has_ICDC_Value","terminology":"ncit","version":"23.03d"},{"code":"A31","name":"Has_GDC_Value","terminology":"ncit","version":"23.03d"},{"code":"A32","name":"Is_Value_For_GDC_Property","terminology":"ncit","version":"23.03d"},{"code":"A33","name":"Is_PCDC_GCT_Authorized_Value_For_Variable","terminology":"ncit","version":"23.03d"},{"code":"A34","name":"Has_PCDC_GCT_Authorized_Value","terminology":"ncit","version":"23.03d"},{"code":"A35","name":"Is_PCDC_ALL_Authorized_Value_For_Variable","terminology":"ncit","version":"23.03d"},{"code":"A36","name":"Has_PCDC_ALL_Authorized_Value","terminology":"ncit","version":"23.03d"},{"code":"A37","name":"Has_SeroNet_Authorized_Value","terminology":"ncit","version":"23.03d"},{"code":"A38","name":"Has_PCDC_OS_Authorized_Value","terminology":"ncit","version":"23.03d"},{"code":"A39","name":"Has_PCDC_HL_Authorized_Value","terminology":"ncit","version":"23.03d"},{"code":"A4","name":"Qualifier_Applies_To","terminology":"ncit","version":"23.03d"},{"code":"A40","name":"Has_DIPG_DMG_Authorized_Value","terminology":"ncit","version":"23.03d"},{"code":"A5","name":"Has_Salt_Form","terminology":"ncit","version":"23.03d"},{"code":"A6","name":"Has_Free_Acid_Or_Base_Form","terminology":"ncit","version":"23.03d"},{"code":"A7","name":"Has_Target","terminology":"ncit","version":"23.03d"},{"code":"A8","name":"Concept_In_Subset","terminology":"ncit","version":"23.03d"},{"code":"A9","name":"Is_Related_To_Endogenous_Product","terminology":"ncit","version":"23.03d"},{"code":"A41","name":"Has_Pharmaceutical_Basic_Administrable_Dose_Form","terminology":"ncit","version":"23.03d"},{"code":"A42","name":"Has_OORO_PC_Value","terminology":"ncit","version":"23.03d"},{"code":"A43","name":"Has_OORO_HNC_Value","terminology":"ncit","version":"23.03d"},{"code":"A44","name":"Has_OORO_BC_Value","terminology":"ncit","version":"23.03d"},{"code":"A45","name":"Has_OORO_LC_Value","terminology":"ncit","version":"23.03d"},{"code":"A46","name":"Has_OORO_Data_Type","terminology":"ncit","version":"23.03d"},{"code":"A48","name":"Has_ACC-AHA_SARS2_Authorized_Value","terminology":"ncit","version":"23.03d"}]

--- PASS: TestGetAssociations (0.71s)
PASS
ok      EVSRESTAPI-tests        0.734s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get associations by code (or label)

Returns associations for a specified code.

Command: go test -v -run TestGetAssociationByCode`

```{.go}
=== RUN   TestGetAssociationByCode
metadata_test.go: Get Association by Code
https://api-evsrest.nci.nih.gov/api/v1/metadata/ncit/association/A10

{"code":"A10","name":"Has_CDRH_Parent","terminology":"ncit","version":"23.03d","synonyms":[{"name":"Has CDRH Parent","type":"Display_Name"},{"name":"Has_CDRH_Parent","type":"FULL_SYN"},{"name":"Has_CDRH_Parent","type":"Preferred_Name"}],"definitions":[{"definition":"An association created to allow the source CDRH to assign a parent to each concept with the intent of creating a hierarchy that includes only terms in which they are the contributing source.","type":"DEFINITION"}],"properties":[{"type":"Semantic_Type","value":"Conceptual Entity"}]}

--- PASS: TestGetAssociationByCode (0.84s)
PASS
ok      EVSRESTAPI-tests        0.875s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get term types

Return metadata for all term types for the specified terminology.

Command: go test -v -run TestGetTermTypes`

```{.go}
=== RUN   TestGetTermTypes
metadata_test.go: Get Term Types
https://api-evsrest.nci.nih.gov/api/v1/metadata/ncit/termTypes

[{"code":"AB","name":"Abbreviation","terminology":"ncit","version":"23.03d"},{"code":"AD","name":"Adjectival form (and other parts of grammar)","terminology":"ncit","version":"23.03d"},{"code":"AQ","name":"*Antiquated preferred term","terminology":"ncit","version":"23.03d"},{"code":"AQS","name":"Antiquated term, use when there are antiquated synonyms within a concept","terminology":"ncit","version":"23.03d"},{"code":"BR","name":"US brand name, which may be trademarked","terminology":"ncit","version":"23.03d"},{"code":"CA2","name":"ISO 3166 alpha-2 country code","terminology":"ncit","version":"23.03d"},{"code":"CA3","name":"ISO 3166 alpha-3 country code","terminology":"ncit","version":"23.03d"},{"code":"CI","name":"ISO country code","terminology":"ncit","version":"23.03d"},{"code":"CN","name":"Drug study code","terminology":"ncit","version":"23.03d"},{"code":"CNU","name":"ISO 3166 numeric country code","terminology":"ncit","version":"23.03d"},{"code":"CS","name":"US State Department country code","terminology":"ncit","version":"23.03d"},{"code":"DN","name":"Display name","terminology":"ncit","version":"23.03d"},{"code":"FB","name":"Foreign brand name, which may be trademarked","terminology":"ncit","version":"23.03d"},{"code":"HD","name":"*Header (groups concepts, but not used for coding data)","terminology":"ncit","version":"23.03d"},{"code":"LLT","name":"Lower level term","terminology":"ncit","version":"23.03d"},{"code":"PT","name":"*Preferred term","terminology":"ncit","version":"23.03d"},{"code":"SN","name":"Chemical structure name","terminology":"ncit","version":"23.03d"},{"code":"SY","name":"Synonym","terminology":"ncit","version":"23.03d"}]       

--- PASS: TestGetTermTypes (0.69s)
PASS
ok      EVSRESTAPI-tests        0.722s

```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get definition sources

Return metadata for all definition sources for the specified terminology.

Command: go test -v -run TestGetDefinitionSources`

```{.go}
=== RUN   TestGetDefinitionSources
metadata_test.go: Get Definition Sources
https://api-evsrest.nci.nih.gov/api/v1/metadata/ncit/definitionSources

[{"code":"ACC/AHA","name":"American College of Cardiology / American Heart Association","terminology":"ncit","version":"23.03d"},{"code":"BIOCARTA","name":"BioCarta online maps of molecular pathways, adapted for NCI use","terminology":"ncit","version":"23.03d"},{"code":"BRIDG","name":"Biomedical Research Integrated Domain Model Group","terminology":"ncit","version":"23.03d"},{"code":"BRIDG 3.0.3","name":"Biomedical Research Integrated Domain Model Group, version 3.0.3","terminology":"ncit","version":"23.03d"},{"code":"BRIDG 5.3","name":"Biomedical Research Integrated Domain Model Group, version 5.3","terminology":"ncit","version":"23.03d"},{"code":"CCPS","name":"Childhood Cancer Predisposition Study","terminology":"ncit","version":"23.03d"},{"code":"CDISC","name":"Clinical Data Interchange Standards Consortium","terminology":"ncit","version":"23.03d"},{"code":"CDISC-GLOSS","name":"CDISC Glossary Terminology","terminology":"ncit","version":"23.03d"},{"code":"CRCH","name":"Cancer Research Center of Hawaii Nutrition Terminology","terminology":"ncit","version":"23.03d"},{"code":"CTCAE","name":"Common Terminology Criteria for Adverse Events","terminology":"ncit","version":"23.03d"},{"code":"CTCAE 3.0","name":"Common Terminology Criteria for Adverse Events, version 3.0","terminology":"ncit","version":"23.03d"},{"code":"CTCAE 5.0","name":"Common Terminology Criteria for Adverse Events, version 5.0","terminology":"ncit","version":"23.03d"},{"code":"CTEP","name":"Cancer Therapy Evaluation Program","terminology":"ncit","version":"23.03d"},{"code":"CareLex","name":"CareLex electronic Trial Master File Terminology","terminology":"ncit","version":"23.03d"},{"code":"DICOM","name":"Digital Imaging Communications in Medicine","terminology":"ncit","version":"23.03d"},{"code":"DIPG/DMG","name":"Diffuse Intrinsic Pontine Glioma/Diffuse Midline Glioma","terminology":"ncit","version":"23.03d"},{"code":"EDQM-HC","name":"European Directorate for the Quality of Medicines & Healthcare","terminology":"ncit","version":"23.03d"},{"code":"FDA","name":"U.S. Food and Drug Administration","terminology":"ncit","version":"23.03d"},{"code":"GAIA","name":"Global Alignment of Immunization safety Assessment in pregnancy Terminology","terminology":"ncit","version":"23.03d"},{"code":"ICDO3","name":"International Classification of Diseases for Oncology, 3rd edition","terminology":"ncit","version":"23.03d"},{"code":"INC","name":"International Neonatal Consortium","terminology":"ncit","version":"23.03d"},{"code":"KEGG","name":"KEGG Pathway Database","terminology":"ncit","version":"23.03d"},{"code":"MMHCC","name":"Mouse Models of Human Cancer Consortium","terminology":"ncit","version":"23.03d"},{"code":"NCI","name":"National Cancer Institute Thesaurus","terminology":"ncit","version":"23.03d"},{"code":"NCI-GLOSS","name":"NCI Dictionary of Cancer Terms","terminology":"ncit","version":"23.03d"},{"code":"NICHD","name":"National Institute of Child Health and Human Development","terminology":"ncit","version":"23.03d"},{"code":"OORO","name":"Operational Ontology for Radiation Oncology","terminology":"ncit","version":"23.03d"},{"code":"PCDC","name":"Pediatric Cancer Data Commons","terminology":"ncit","version":"23.03d"},{"code":"PQCMC","name":"Pharmaceutical Quality/Chemistry, Manufacturing, and Controls","terminology":"ncit","version":"23.03d"},{"code":"UMD2001","name":"Universal Medical Device Nomenclature System, Version 2001","terminology":"ncit","version":"23.03d"},{"code":"UWDA142","name":"University of Washington Digital Anatomist, Version 1.4.2","terminology":"ncit","version":"23.03d"},{"code":"WHO","name":"World Health Organization","terminology":"ncit","version":"23.03d"}]

--- PASS: TestGetDefinitionSources (0.68s)
PASS
ok      EVSRESTAPI-tests        0.716s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get synonym sources

Return metadata for all synonym sources for the specified terminology.

Command: go test -v -run TestGetSynonymSources`

```{.go}
=== RUN   TestGetSynonymSources
metadata_test.go: Get Synonym Sources
https://api-evsrest.nci.nih.gov/api/v1/metadata/ncit/synonymSources

[{"code":"ACC/AHA","name":"American College of Cardiology / American Heart Association","terminology":"ncit"},{"code":"BIOCARTA","name":"BioCarta online maps of molecular pathways, adapted for NCI use","terminology":"ncit"},{"code":"BRIDG","name":"Biomedical Research Integrated Domain Model Group","terminology":"ncit"},{"code":"BRIDG 3.0.3","name":"Biomedical Research Integrated Domain Model Group, version 3.0.3","terminology":"ncit"},{"code":"BRIDG 5.3","name":"Biomedical Research Integrated Domain Model Group, version 5.3","terminology":"ncit"},{"code":"CBDD","name":"Chemical Biology and Drug Development","terminology":"ncit"},{"code":"CCPS","name":"Childhood Cancer Predisposition Study","terminology":"ncit"},{"code":"CDC","name":"U.S. Centers for Disease Control and Prevention","terminology":"ncit"},{"code":"CDISC","name":"Clinical Data Interchange Standards Consortium","terminology":"ncit"},{"code":"CDISC-GLOSS","name":"CDISC Glossary Terminology","terminology":"ncit"},{"code":"CPTAC","name":"Clinical Proteomic Tumor Analysis Consortium","terminology":"ncit"},{"code":"CRCH","name":"Cancer Research Center of Hawaii Nutrition Terminology","terminology":"ncit"},{"code":"CTCAE","name":"Common Terminology Criteria for Adverse Events","terminology":"ncit"},{"code":"CTCAE 3.0","name":"Common Terminology Criteria for Adverse Events, version 3.0","terminology":"ncit"},{"code":"CTCAE 5.0","name":"Common Terminology Criteria for Adverse Events, version 
5.0","terminology":"ncit"},{"code":"CTDC","name":"Clinical Trials Data Commons","terminology":"ncit"},{"code":"CTEP","name":"Cancer Therapy Evaluation Program","terminology":"ncit"},{"code":"CTRP","name":"Clinical Trials Reporting Program","terminology":"ncit"},{"code":"CareLex","name":"CareLex electronic Trial Master File Terminology","terminology":"ncit"},{"code":"Cellosaurus","name":"Cellosaurus - a knowledge resource on cell lines","terminology":"ncit"},{"code":"DCP","name":"NCI Division of Cancer Prevention Program","terminology":"ncit"},{"code":"DICOM","name":"Digital Imaging Communications in Medicine","terminology":"ncit"},{"code":"DIPG/DMG","name":"Diffuse Intrinsic Pontine Glioma/Diffuse Midline Glioma","terminology":"ncit"},{"code":"DTP","name":"NCI Developmental Therapeutics Program","terminology":"ncit"},{"code":"EDQM-HC","name":"European Directorate for the Quality of Medicines & Healthcare","terminology":"ncit"},{"code":"FDA","name":"U.S. Food and Drug Administration","terminology":"ncit"},{"code":"GAIA","name":"Global 
Alignment of Immunization safety Assessment in pregnancy Terminology","terminology":"ncit"},{"code":"GDC","name":"Genomic Data Commons","terminology":"ncit"},{"code":"GENC","name":"Geopolitical Entities, Names, and Codes Terminology","terminology":"ncit"},{"code":"HGNC","name":"HUGO Gene Nomenclature Committee","terminology":"ncit"},{"code":"HL7","name":"Health Level Seven International","terminology":"ncit"},{"code":"ICD-10","name":"International Classification of Diseases, Tenth Revision","terminology":"ncit"},{"code":"ICDC","name":"International Cancer Genome Consortium","terminology":"ncit"},{"code":"ICH","name":"International Conference on Harmonization","terminology":"ncit"},{"code":"INC","name":"International Neonatal Consortium","terminology":"ncit"},{"code":"JAX","name":"Jackson Laboratories Mouse Terminology, adapted for NCI use","terminology":"ncit"},{"code":"KEGG","name":"KEGG Pathway Database","terminology":"ncit"},{"code":"NCI","name":"National Cancer Institute Thesaurus","terminology":"ncit"},{"code":"NCI-GLOSS","name":"NCI Dictionary of Cancer Terms","terminology":"ncit"},{"code":"NCPDP","name":"National Council for Prescription Drug Programs","terminology":"ncit"},{"code":"NDC","name":"National Drug Code","terminology":"ncit"},{"code":"NICHD","name":"National Institute of Child Health and Human Development","terminology":"ncit"},{"code":"OORO","name":"Operational Ontology for Radiation Oncology","terminology":"ncit"},{"code":"ORCHESTRA","name":"Multinational project funded by the European Commission to advance the knowledge of the SARS-CoV-2 infection and its long-term effects","terminology":"ncit"},{"code":"PCDC","name":"Pediatric Cancer Data Commons","terminology":"ncit"},{"code":"PI-RADS","name":"Prostate Imaging-Reporting and Data System","terminology":"ncit"},{"code":"PID","name":"NCI Nature Pathway Interaction Database","terminology":"ncit"},{"code":"RENI","name":"Registry Nomenclature Information System","terminology":"ncit"},{"code":"SEER","name":"Surveillance, Epidemiology, and End Results Program","terminology":"ncit"},{"code":"SeroNet","name":"NCI Serological Sciences Network for COVID-19","terminology":"ncit"},{"code":"UCUM","name":"Unified Code for Units of Measure","terminology":"ncit"},{"code":"WHO","name":"World Health Organization","terminology":"ncit"},{"code":"ZFin","name":"Zebrafish Information Network","terminology":"ncit"},{"code":"caDSR","name":"Cancer Data Standards Registry and Repository","terminology":"ncit"},{"code":"mCode","name":"Minimal Common Oncology Data Elements","terminology":"ncit"}]

--- PASS: TestGetSynonymSources (0.80s)
PASS
ok      EVSRESTAPI-tests        0.826s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get synonym types

Return metadata for all synonym types for the specified terminology.

Command: go test -v -run TestGetSynonymTypes`

```{.go}
=== RUN   TestGetSynonymTypes
metadata_test.go: Get Synonym Types
https://api-evsrest.nci.nih.gov/api/v1/metadata/ncit/synonymTypes

[{"code":"P108","name":"Preferred_Name","terminology":"ncit","version":"23.03d"},{"code":"P90","name":"FULL_SYN","terminology":"ncit","version":"23.03d"},{"code":"P107","name":"Display_Name","terminology":"ncit","version":"23.03d"}]

--- PASS: TestGetSynonymTypes (0.70s)
PASS
ok      EVSRESTAPI-tests        0.731s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get synonym types by code

Return metadata for all synonym types for the specified terminology filteres by code.

Command: go test -v -run TestGetSynonymTypeByCode`

```{.go}
=== RUN   TestGetSynonymTypeByCode
metadata_test.go: Get Synonym Types
https://api-evsrest.nci.nih.gov/api/v1/metadata/ncit/synonymType/P90?include=summary

{"code":"P90","name":"FULL_SYN","terminology":"ncit","version":"23.03d","synonyms":[{"name":"Term & Source Data","type":"Display_Name"},{"name":"FULL_SYN","type":"FULL_SYN"},{"name":"Synonym with Source Data","type":"FULL_SYN"},{"name":"FULL_SYN","type":"Preferred_Name"}],"definitions":[{"definition":"A property representing a fully qualified synonym, contains the string, term type, source, and an optional source code if appropriate. Each subfield is deliniated to facilitate interpretation by software.","type":"DEFINITION"}],"properties":[{"type":"Semantic_Type","value":"Conceptual Entity"}]}

--- PASS: TestGetSynonymTypeByCode (0.71s)
PASS
ok      EVSRESTAPI-tests        0.750s
```

### Get definition types

Return metadata for all definition types for the specified terminology.

Command: go test -v -run TestGetDefinitionTypes`

```{.go}
=== RUN   TestGetDefinitionTypes
metadata_test.go: Get Definition Types
https://api-evsrest.nci.nih.gov/api/v1/metadata/ncit/definitionTypes

[{"code":"P97","name":"DEFINITION","terminology":"ncit","version":"23.03d"},{"code":"P325","name":"ALT_DEFINITION","terminology":"ncit","version":"23.03d"}]

--- PASS: TestGetDefinitionTypes (0.71s)
PASS
ok      EVSRESTAPI-tests        0.742s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get definition types by code

Return metadata for all definition types for the specified terminology.

Command: go test -v -run TestGetDefinitionTypeByCode`

```{.go}
=== RUN   TestGetDefinitionTypeByCode
metadata_test.go: Get Definition Types
https://api-evsrest.nci.nih.gov/api/v1/metadata/ncit/definitionType/P325?include=summary

{"code":"P325","name":"ALT_DEFINITION","terminology":"ncit","version":"23.03d","synonyms":[{"name":"[source] Definition","type":"Display_Name"},{"name":"ALT_DEFINITION","type":"FULL_SYN"},{"name":"ALT_DEFINITION","type":"Preferred_Name"}],"definitions":[{"definition":"A property representing the English language definition of a concept from a source other than NCI.","type":"DEFINITION"}],"properties":[{"type":"Semantic_Type","value":"Conceptual Entity"}]}

--- PASS: TestGetDefinitionTypeByCode (0.74s)
PASS
ok      EVSRESTAPI-tests        0.769s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get root concepts

Return all root concepts for the specified terminology.

Command: go test -v -run TestGetRoots`

```{.go}
=== RUN   TestGetRoots
concepts_test.go: Get Minimal Concept by Code
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/roots?include=minimal

[{"code":"C12913","name":"Abnormal Cell","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C43431","name":"Activity","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C12219","name":"Anatomic Structure, System, or Substance","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C20633","name":"Biochemical Pathway","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C17828","name":"Biological Process","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C12218","name":"Chemotherapy Regimen or Agent Combination","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C20181","name":"Conceptual Entity","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C20047","name":"Diagnostic or Prognostic Factor","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C7057","name":"Disease, Disorder or Finding","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C1908","name":"Drug, Food, Chemical or Biomedical Material","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C22188","name":"Experimental Organism Anatomical Concept","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C22187","name":"Experimental Organism Diagnosis","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C16612","name":"Gene","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C26548","name":"Gene Product","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C97325","name":"Manufactured Object","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C3910","name":"Molecular Abnormality","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C14250","name":"Organism","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C20189","name":"Property or Attribute","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C28428","name":"Retired Concept","terminology":"ncit","version":"23.03d","leaf":false}]

--- PASS: TestGetRoots (1.42s)
PASS
ok      EVSRESTAPI-tests        1.451s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get root paths from code

Return paths to the root concept from a specified terminology and code.

Command: go test -v -run TestGetPathsToRootByCode`

```{.go}
=== RUN   TestGetPathsToRootByCode
concepts_test.go: Get Minimal Concept by Code
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C3224/pathsToRoot?fromRecord=0&include=minimal

[[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"23.03d","level":0,"leaf":false},{"code":"C7058","name":"Melanocytic Neoplasm","terminology":"ncit","version":"23.03d","level":1,"leaf":false},{"code":"C4741","name":"Neoplasm by Morphology","terminology":"ncit","version":"23.03d","level":2,"leaf":false},{"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"23.03d","level":3,"leaf":false},{"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"23.03d","level":4,"leaf":false},{"code":"C7057","name":"Disease, Disorder or Finding","terminology":"ncit","version":"23.03d","level":5,"leaf":false}],[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"23.03d","level":0,"leaf":false},{"code":"C9305","name":"Malignant Neoplasm","terminology":"ncit","version":"23.03d","level":1,"leaf":false},{"code":"C7062","name":"Neoplasm by Special Category","terminology":"ncit","version":"23.03d","level":2,"leaf":false},{"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"23.03d","level":3,"leaf":false},{"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"23.03d","level":4,"leaf":false},{"code":"C7057","name":"Disease, Disorder or Finding","terminology":"ncit","version":"23.03d","level":5,"leaf":false}]]

--- PASS: TestGetPathsToRootByCode (1.23s)
PASS
ok      EVSRESTAPI-tests        1.261s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

Return paths from the root concept from a specified terminology and code.

Command: go test -v -run TestGetPathsFromRootByCode`

```{.go}
=== RUN   TestGetPathsFromRootByCode
concepts_test.go: Get Minimal Concept by Code
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C3224/pathsFromRoot?fromRecord=0&include=minimal

[[{"code":"C7057","name":"Disease, Disorder or Finding","terminology":"ncit","version":"23.03d","level":0,"leaf":false},{"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"23.03d","level":1,"leaf":false},{"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"23.03d","level":2,"leaf":false},{"code":"C4741","name":"Neoplasm by Morphology","terminology":"ncit","version":"23.03d","level":3,"leaf":false},{"code":"C7058","name":"Melanocytic Neoplasm","terminology":"ncit","version":"23.03d","level":4,"leaf":false},{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"23.03d","level":5,"leaf":false}],[{"code":"C7057","name":"Disease, Disorder or Finding","terminology":"ncit","version":"23.03d","level":0,"leaf":false},{"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"23.03d","level":1,"leaf":false},{"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"23.03d","level":2,"leaf":false},{"code":"C7062","name":"Neoplasm by Special Category","terminology":"ncit","version":"23.03d","level":3,"leaf":false},{"code":"C9305","name":"Malignant Neoplasm","terminology":"ncit","version":"23.03d","level":4,"leaf":false},{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"23.03d","level":5,"leaf":false}]]

--- PASS: TestGetPathsFromRootByCode (1.04s)
PASS
ok      EVSRESTAPI-tests        1.078s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get ancestor paths from code

Return paths to the root concept for a specified terminology and code.

Command: go test -v -run testGetAncestorPathsFromCode`

```{.go}
=== RUN   TestGetAncestorPathsFromCode
concepts_test.go: Get Minimal Concept by Code
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C3224/pathsToAncestor/C2991?include=minimal

[[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"23.03d","level":0,"leaf":false},{"code":"C7058","name":"Melanocytic Neoplasm","terminology":"ncit","version":"23.03d","level":1,"leaf":false},{"code":"C4741","name":"Neoplasm by Morphology","terminology":"ncit","version":"23.03d","level":2,"leaf":false},{"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"23.03d","level":3,"leaf":false},{"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"23.03d","level":4,"leaf":false}],[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"23.03d","level":0,"leaf":false},{"code":"C9305","name":"Malignant Neoplasm","terminology":"ncit","version":"23.03d","level":1,"leaf":false},{"code":"C7062","name":"Neoplasm by Special Category","terminology":"ncit","version":"23.03d","level":2,"leaf":false},{"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"23.03d","level":3,"leaf":false},{"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"23.03d","level":4,"leaf":false}]]

--- PASS: TestGetAncestorPathsFromCode (0.96s)
PASS
ok      EVSRESTAPI-tests        0.987s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get subtree

Return an entire subtree graph from the root concepts to a specified node. This call is specifically tuned to support a tree-view based hierarchy browser in a UI.

Command: go test -v -run TestGetSubtree`

```{.go}
=== RUN   TestGetSubtree
concepts_test.go: Get Minimal Concept by Code
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/C3224/subtree/children

[{"code":"C3802","label":"Amelanotic Melanoma","leaf":false},{"code":"C8410","label":"Breast Melanoma","leaf":true},{"code":"C131506","label":"Childhood Melanoma","leaf":true},{"code":"C3510","label":"Cutaneous Melanoma","leaf":false},{"code":"C4236","label":"Epithelioid Cell Melanoma","leaf":false},{"code":"C9499","label":"Melanomatosis","leaf":false},{"code":"C8925","label":"Metastatic Melanoma","leaf":false},{"code":"C66756","label":"Mixed Epithelioid and Spindle Cell Melanoma","leaf":false},{"code":"C8711","label":"Non-Cutaneous Melanoma","leaf":false},{"code":"C8562","label":"Ocular Melanoma","leaf":false},{"code":"C118828","label":"Orbital Melanoma","leaf":true},{"code":"C162547","label":"Penile Melanoma","leaf":false},{"code":"C7087","label":"Recurrent Melanoma","leaf":false},{"code":"C147983","label":"Refractory Melanoma","leaf":false},{"code":"C4228","label":"Regressing Melanoma","leaf":false},{"code":"C190239","label":"Resectable Melanoma","leaf":false},{"code":"C4237","label":"Spindle Cell Melanoma","leaf":false},{"code":"C148517","label":"Unresectable Melanoma","leaf":false}]

--- PASS: TestGetSubtree (0.76s)
PASS
ok      EVSRESTAPI-tests        0.786s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concepts by search term

Get concepts matching a search term within a specified terminology.

Command: go test -v -run TestGetConceptBySearchTerm`

```{.go}
=== RUN   TestGetConceptBySearchTerm
concept_test.go: Get concept by search term
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/search?terminology=ncit&term=melanoma

{"total":1455,"timeTaken":252,"parameters":{"term":"melanoma","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"terminology":["ncit"]},"concepts":[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C91477","name":"Melanoma Pathway","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C103113","name":"NCI CTEP SDC Melanoma Sub-Category Terminology","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C21790","name":"Mouse Melanoma","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C160667","name":"Melanoma and Non-Melanoma Related Event Occurred after Initial Treatment","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C157920","name":"Melanoma Surgery","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C1830","name":"Melanoma Theraccine","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C2517","name":"Melanoma Vaccine","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C46091","name":"Melanoma Biomarker","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C36873","name":"Melanoma Cell","terminology":"ncit","version":"23.03d","leaf":false}]}

--- PASS: TestGetConceptBySearchTerm (1.06s)
PASS
ok      EVSRESTAPI-tests        1.094s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concepts by search term (restrict by concept status)

Get concepts matching a search term within a specified terminology and restrict the search results by concept status of "Header_Concept".

Command: go test -v -run TestGetConceptByConceptStatus`

```{.go}
=== RUN   TestGetConceptByConceptStatus
concept_test.go: Get Concept by Concept Status
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/search?terminology=ncit&term=respiratory&conceptStatus=Header_Concept

{"total":1,"timeTaken":100,"parameters":{"term":"respiratory","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"conceptStatus":["Header_Concept"],"terminology":["ncit"]},"concepts":[{"code":"C13037","name":"Respiratory System Part","terminology":"ncit","version":"23.03d","leaf":false}]}

--- PASS: TestGetConceptByConceptStatus (0.91s)
PASS
ok      EVSRESTAPI-tests        0.949s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concepts by search term (restrict by contributing source)

Get concepts matching a search term within a specified terminology and restrict the search results by a contributing source of "CDISC".

Command: go test -v -run TestGetConceptByContributingSource`

```{.go}
=== RUN   TestGetConceptByContributingSource
concept_test.go: Get Concept by contributing source
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/search?terminology=ncit&term=melanoma&contributingSource=CDISC

{"total":1455,"timeTaken":75,"parameters":{"term":"melanoma","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"terminology":["ncit"]},"concepts":[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C91477","name":"Melanoma Pathway","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C103113","name":"NCI CTEP SDC Melanoma Sub-Category Terminology","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C21790","name":"Mouse Melanoma","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C160667","name":"Melanoma and Non-Melanoma Related 
Event Occurred after Initial Treatment","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C157920","name":"Melanoma Surgery","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C1830","name":"Melanoma Theraccine","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C2517","name":"Melanoma Vaccine","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C46091","name":"Melanoma Biomarker","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C36873","name":"Melanoma Cell","terminology":"ncit","version":"23.03d","leaf":false}]}

--- PASS: TestGetConceptByContributingSource (0.90s)
PASS
ok      EVSRESTAPI-tests        0.935s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concepts by search term (restrict by definition source)

Get concepts matching a search term within a specified terminology and restrict the search results by a definition source of "NCI".

Command: go test -v -run TestGetConceptByDefinitionSource`

```{.go}
=== RUN   TestGetConceptByDefinitionSource
concept_test.go: Get Concept by definition source
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/search?terminology=ncit&term=melanoma&definitionSource=NCI

{"total":1333,"timeTaken":115,"parameters":{"term":"melanoma","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"definitionSource":["NCI"],"terminology":["ncit"]},"concepts":[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C103113","name":"NCI CTEP SDC Melanoma Sub-Category Terminology","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C160667","name":"Melanoma and Non-Melanoma Related Event Occurred after Initial Treatment","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C157920","name":"Melanoma Surgery","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C1830","name":"Melanoma Theraccine","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C46091","name":"Melanoma Biomarker","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C104498","name":"Melanoma-Associated Antigen 10","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C104501","name":"Melanoma-Associated Antigen 2","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C156749","name":"Melanoma Risk Factor","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C176905","name":"Melanoma-Astrocytoma Syndrome","terminology":"ncit","version":"23.03d","leaf":true}]}

--- PASS: TestGetConceptByDefinitionSource (0.98s)
PASS
ok      EVSRESTAPI-tests        1.020s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concepts by search term (restrict by definition type)

Get concepts matching a search term within a specified terminology and restrict the search results by a definition type of "P97".

Command: go test -v -run TestGetConceptByDefinitionType`

```{.go}
=== RUN   TestGetConceptByDefinitionType
concept_test.go: Get Concept by definition source
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/search?terminology=ncit&term=melanoma&definitionType=P97

{"total":1333,"timeTaken":87,"parameters":{"term":"melanoma","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"definitionType":["P97"],"terminology":["ncit"]},"concepts":[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C103113","name":"NCI CTEP SDC Melanoma Sub-Category Terminology","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C160667","name":"Melanoma and Non-Melanoma Related Event Occurred after Initial Treatment","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C157920","name":"Melanoma Surgery","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C1830","name":"Melanoma Theraccine","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C46091","name":"Melanoma Biomarker","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C104498","name":"Melanoma-Associated Antigen 10","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C104501","name":"Melanoma-Associated Antigen 2","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C156749","name":"Melanoma Risk Factor","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C176905","name":"Melanoma-Astrocytoma Syndrome","terminology":"ncit","version":"23.03d","leaf":true}]}

--- PASS: TestGetConceptByDefinitionType (0.88s)
PASS
ok      EVSRESTAPI-tests        0.916s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concepts by search term (restrict by synonym source)

Get concepts matching a search term within a specified terminology and restrict the search results by a synonym source of "NCI" and synonymTermGroup of "PT".

Command: go test -v -run TestGetConceptBySynonymSource`

```{.go}
=== RUN   TestGetConceptBySynonymSource
concept_test.go: Get Concept by synonym source
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/search?terminology=ncit&term=dsDNA&synonymSource=NCI&synonymTermGroup=PT

{"total":12,"timeTaken":86,"parameters":{"term":"dsDNA","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"synonymSource":["NCI"],"terminology":["ncit"]},"concepts":[{"code":"C449","name":"DNA","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C14348","name":"Double Stranded DNA Virus","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C114565","name":"Anti-ds DNA Antibody","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C148186","name":"TALEN-edited HPV16/18 E6/E7 Plasmid","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C121337","name":"Systemic Lupus International Collaborating Clinics Classification Criteria","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C151956","name":"HPV16-E6-T27","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C151958","name":"HPV16-E7-T512","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C16517","name":"DNA Helicase","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C3201","name":"Systemic Lupus Erythematosus","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C158432","name":"PicoGreen Dye","terminology":"ncit","version":"23.03d","leaf":true}]}

--- PASS: TestGetConceptBySynonymSource (0.92s)
PASS
ok      EVSRESTAPI-tests        0.946s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concepts by search term (restrict by synonym type)

Get concepts matching a search term within a specified terminology and restrict the search results by a synonym type of "FULL_SYN".

Command: go test -v -run TestGetConceptBySynonymType`

```{.go}
=== RUN   TestGetConceptBySynonymType
concept_test.go: Get Concept by synonym type
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/search?terminology=ncit&term=dsDNA&synonymType=FULL_SYN

{"total":12,"timeTaken":26,"parameters":{"term":"dsDNA","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"synonymType":["FULL_SYN"],"terminology":["ncit"]},"concepts":[{"code":"C449","name":"DNA","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C14348","name":"Double Stranded DNA Virus","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C114565","name":"Anti-ds DNA Antibody","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C3201","name":"Systemic Lupus Erythematosus","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C121337","name":"Systemic Lupus International Collaborating Clinics Classification Criteria","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C148186","name":"TALEN-edited HPV16/18 E6/E7 Plasmid","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C151956","name":"HPV16-E6-T27","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C151958","name":"HPV16-E7-T512","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C158432","name":"PicoGreen Dye","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C16517","name":"DNA Helicase","terminology":"ncit","version":"23.03d","leaf":false}]}

--- PASS: TestGetConceptBySynonymType (0.82s)
PASS
ok      EVSRESTAPI-tests        0.854s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concepts by search term (using type=match)

Get concepts matching a search term within a specified terminology and a search type of "match".

Command: go test -v -run TestGetConceptBySearchTermMatch`

```{.go}
=== RUN   TestGetConceptBySearchTermMatch
concept_test.go: Get Concept by search term match
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/search?terminology=ncit&term=enzyme&term=match

{"total":2205,"timeTaken":156,"parameters":{"term":"enzyme,match","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"terminology":["ncit"]},"concepts":[{"code":"C111196","name":"Enzyme Multiplied Immunoassay Technique","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C122205","name":"Enzyme Immunoassay Unit","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C131675","name":"Matched Related Donor","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C131676","name":"Matched Unrelated Donor","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C147130","name":"Enzyme Unit per Liter","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C147466","name":"Enzyme-Linked Lectin Assay","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C154856","name":"Enzyme Unit per Gram Hemoglobin","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C156467","name":"Enzyme Unit per Meter Squared","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C168821","name":"Match at Both HLA Alleles","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C172251","name":"MATCH Step at Time of Assignment","terminology":"ncit","version":"23.03d","leaf":true}]}

--- PASS: TestGetConceptBySearchTermMatch (0.95s)
PASS
ok      EVSRESTAPI-tests        0.979s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concepts by search term (using type=startsWith)

Get concepts matching a search term within a specified terminology and a search type of "startsWith".

Command: go test -v -run TestGetConceptBySearchTermStartsWith`

```{.go}
=== RUN   TestGetConceptBySearchTermStartsWith
concept_test.go: Get Concept by search term startsWith
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/search?terminology=ncit&term=enzyme&term=startsWith

{"total":2021,"timeTaken":58,"parameters":{"term":"enzyme,startsWith","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"terminology":["ncit"]},"concepts":[{"code":"C111196","name":"Enzyme Multiplied Immunoassay Technique","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C122205","name":"Enzyme Immunoassay Unit","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C147130","name":"Enzyme Unit per Liter","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C147466","name":"Enzyme-Linked Lectin Assay","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C154856","name":"Enzyme Unit per Gram Hemoglobin","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C156467","name":"Enzyme Unit per Meter Squared","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C17455","name":"Enzyme Immunoassay","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C175212","name":"Enzyme-inducing Antiepileptic Drug","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C180567","name":"Enzyme Activity","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C180669","name":"Enzyme Substrate","terminology":"ncit","version":"23.03d","leaf":true}]}

--- PASS: TestGetConceptBySearchTermStartsWith (0.74s)
PASS
ok      EVSRESTAPI-tests        0.776s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concepts by search term (using type=phrase)

Get concepts matching a search term within a specified terminology and a search type of "phrase".

Command: go test -v -run TestGetConceptBySearchTermPhrase`

```{.go}
=== RUN   TestGetConceptBySearchTermPhrase
concept_test.go: Get Concept by search term phrase
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/search?terminology=ncit&term=enzyme&term=phrase

{"total":2047,"timeTaken":32,"parameters":{"term":"enzyme,phrase","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"terminology":["ncit"]},"concepts":[{"code":"C111196","name":"Enzyme Multiplied Immunoassay Technique","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C122205","name":"Enzyme Immunoassay Unit","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C147130","name":"Enzyme Unit per Liter","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C147466","name":"Enzyme-Linked Lectin Assay","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C154856","name":"Enzyme Unit per Gram Hemoglobin","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C156467","name":"Enzyme Unit per Meter Squared","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C17455","name":"Enzyme Immunoassay","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C175212","name":"Enzyme-inducing Antiepileptic Drug","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C180567","name":"Enzyme Activity","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C180669","name":"Enzyme Substrate","terminology":"ncit","version":"23.03d","leaf":true}]}

--- PASS: TestGetConceptBySearchTermPhrase (0.72s)
PASS
ok      EVSRESTAPI-tests        0.746s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concepts by search term (using type=fuzzy)

Get concepts matching a search term within a specified terminology and a search type of "fuzzy".

Command: go test -v -run TestGetConceptBySearchTermFuzzy`

```{.go}
=== RUN   TestGetConceptBySearchTermFuzzy
concept_test.go: Get Concept by search term fuzzy
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/search?terminology=ncit&term=enzyme&term=fuzzy

{"total":2027,"timeTaken":30,"parameters":{"term":"enzyme,fuzzy","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"terminology":["ncit"]},"concepts":[{"code":"C111196","name":"Enzyme Multiplied Immunoassay Technique","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C122205","name":"Enzyme Immunoassay Unit","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C147130","name":"Enzyme Unit per Liter","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C147466","name":"Enzyme-Linked Lectin Assay","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C154856","name":"Enzyme Unit per Gram Hemoglobin","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C156467","name":"Enzyme Unit per Meter Squared","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C17455","name":"Enzyme Immunoassay","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C175212","name":"Enzyme-inducing Antiepileptic Drug","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C180567","name":"Enzyme Activity","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C180669","name":"Enzyme Substrate","terminology":"ncit","version":"23.03d","leaf":true}]}

--- PASS: TestGetConceptBySearchTermFuzzy (0.77s)
PASS
ok      EVSRESTAPI-tests        0.795s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concepts by search term (using type=or)

Get concepts matching a search term within a specified terminology and a search type of "or".

Command: go test -v -run TestGetConceptBySearchTermOr`

```{.go}
=== RUN   TestGetConceptBySearchTermOr
concept_test.go: Get Concept by search term or
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/search?terminology=ncit&term=enzyme&term=or

{"total":48299,"timeTaken":57,"parameters":{"term":"enzyme,or","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"terminology":["ncit"]},"concepts":[{"code":"C29726","name":"Enzyme Replacement 
or Supplement Agent","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C64430","name":"Protein or Enzyme Type Measurement","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C193556","name":"Choriogonadotropin Beta Subunit [Units/Volume] in Serum or Plasma by Enzyme Immunoassay Third International Standard","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C38430","name":"Guanylate Cyclase Soluble Subunit Beta-1","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C122205","name":"Enzyme Immunoassay Unit","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C153137","name":"Orludodstat","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C17455","name":"Enzyme Immunoassay","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C180567","name":"Enzyme Activity","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C180669","name":"Enzyme Substrate","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C188961","name":"Oral Irinotecan Hydrochloride Formulation VAL-413","terminology":"ncit","version":"23.03d","leaf":true}]}

--- PASS: TestGetConceptBySearchTermOr (0.75s)
PASS
ok      EVSRESTAPI-tests        0.785s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concepts by search term (using type=and)

Get concepts matching a search term within a specified terminology and a search type of "and".

Command: go test -v -run TestGetConceptBySearchTermAnd`

```{.go}
=== RUN   TestGetConceptBySearchTermAnd
concept_test.go: Get Concept by search term and
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/search?terminology=ncit&term=enzyme&term=and

{"total":62658,"timeTaken":57,"parameters":{"term":"enzyme,and","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"terminology":["ncit"]},"concepts":[{"code":"C181803","name":"UBA1 wt Allele","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C49722","name":"ADAM17 wt Allele","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C38430","name":"Guanylate Cyclase Soluble Subunit Beta-1","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C111196","name":"Enzyme Multiplied Immunoassay Technique","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C122205","name":"Enzyme Immunoassay Unit","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C17455","name":"Enzyme Immunoassay","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C175212","name":"Enzyme-inducing Antiepileptic Drug","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C20626","name":"Enzyme Kinetics","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C21281","name":"Enzyme Gene","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C40498","name":"Enzyme Interaction","terminology":"ncit","version":"23.03d","leaf":false}]}

--- PASS: TestGetConceptBySearchTermAnd (0.76s)
PASS
ok      EVSRESTAPI-tests        0.794s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concepts by search term (with highlights)

Get concepts matching a search term within a specified terminology and include synonyms and highlighted text in the response.

Command: go test -v -run TestGetConceptBySearchTermHighlights`

```{.go}
=== RUN   TestGetConceptBySearchTermHighlights
concept_test.go: Get Concept by search term highlights
https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/search?terminology=ncit&term=enzyme&term=synonym,highlights

{"total":2077,"timeTaken":34,"parameters":{"term":"enzyme,synonym,highlights","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"terminology":["ncit"]},"concepts":[{"code":"C111196","name":"Enzyme Multiplied Immunoassay Technique","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C122205","name":"Enzyme Immunoassay Unit","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C147130","name":"Enzyme Unit per Liter","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C147466","name":"Enzyme-Linked Lectin Assay","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C154856","name":"Enzyme Unit per Gram Hemoglobin","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C156467","name":"Enzyme Unit per Meter Squared","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C164637","name":"Synonym Code","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C17455","name":"Enzyme Immunoassay","terminology":"ncit","version":"23.03d","leaf":false},{"code":"C175212","name":"Enzyme-inducing Antiepileptic Drug","terminology":"ncit","version":"23.03d","leaf":true},{"code":"C180567","name":"Enzyme Activity","terminology":"ncit","version":"23.03d","leaf":false}]}

--- PASS: TestGetConceptBySearchTermHighlights (0.84s)
PASS
ok      EVSRESTAPI-tests        0.867s
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concept by subset

Get concepts matching a search term within a specified terminology and subset.

Command: go test -v -run TestGetConceptBySubset`

```{.go}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all subsets

Get all subsets for a specified terminology.

Command: go test -v -run TestGetSubsets`

```{.go}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get subset by code

Get subset for a specified terminology and code.

Command: go test -v -run TestGetSubsetsByCode`

```{.go}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get subset members by code

Get subset members for a specified terminology and code.

Command: go test -v -run TestGetSubsetMembersByCode`

```{.go}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)
