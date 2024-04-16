# EVSRESTAPI client SDK: Python Tutorial

======================================

This tutorial shows how to use a locally installed version of Python to interact with the EVSREST API. Shown here are examples that demonstrate
the range of functionality that the EVSREST API has. Many of these API calls can take in different parameters than the ones shown.

## Prerequisites

* Python 3.5 or higher must be installed. The latest version can be found [here](https://www.python.org/downloads/).

* All libraries in 'requirements.txt' must be installed.
  * Run the command 'pip install -r requirements.txt' in a console window to check these libraries and install any that are not already installed.
  * If pip itself is not installed, run the command 'curl <https://bootstrap.pypa.io/get-pip.py> -o get-pip.py; python get-pip.py' to install it.

The various scripts make use of the `python-examples/config.ini` file to load necessary information that is uniform across all tests.

## Sample Python Calls

The following examples are exhibited by various unit tests defined in the code in `python-examples`.
All commands to run these tests should be run from that directory.

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
* [Get concepts by search term (restrict by concept status)](#get-concepts-by-search-term-restrict-concept-status)
* [Get concepts by search term (restrict by contributing source)](#get-concepts-by-search-term-restrict-by-contributing-source)
* [Get concepts by search term (restrict by definition source)](#get-concepts-by-search-term-restrict-by-definition-source)
* [Get concepts by search term (restrict by definition type)](#get-concepts-by-search-term-restrict-by-definition-type)
* [Get concepts by search term (restrict by synonym source and termgroup)](#get-concepts-by-search-term-restrict-by-synonym-source)
* [Get concepts by search term (restrict by synonym type)](#get-concepts-by-search-term-restrict-by-synonym-type)
* [Get concepts by search term (using type=match)](#get-concepts-by-search-term-using-type=match)
* [Get concepts by search term (using type=startsWith)](#get-concepts-by-search-term-using-type=startsWith)
* [Get concepts by search term (using type=phrase)](#get-concepts-by-search-term-using-type=phrase)
* [Get concepts by search term (using type=fuzzy)](#get-concepts-by-search-term-using-type=fuzzy)
* [Get concepts by search term (using type=OR)](#get-concepts-by-search-term-using-type=or)
* [Get concepts by search term (using type=AND)](#get-concepts-by-search-term-using-type=and)
* [Get concepts by search term (with highlights)](#get-concepts-by-search-term-with-highlights)
* [Get concept by subset](#get-concept-by-subset)
* [Get all subsets](#get-all-subsets)
* [Get subset by code](#get-subset-by-code)
* [Get subset members by code](#get-subset-members-by-code)
* [Get concepts by SPARQL code without prefix](#get-concepts-by-sparql-without-prefix)
* [Get concepts by SPARQL code with prefix](#get-concepts-by-sparql-with-prefix)
* [Get SPARQL bindings from query](#get-sparql-bindings-from-query)

### Get terminologies

Return all loaded terminologies currently hosted by the API.

Command: `pytest test_metadata_tests.py::test_get_all_terminologies`

```{.python}
2020-04-28T19:36:53-04:00 INFO  : Get Terminologies
2020-04-28T19:36:53-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-04-28T19:36:53-04:00 INFO  :   ncit = {"terminology":"ncit","version":"20.04d","date":"April 27, 2020","name":"NCI Thesaurus 20.04d","description":"NCI Thesaurus, a controlled vocabulary in support of NCI administrative and scientific activities. Produced by the Enterprise Vocabulary System (EVS), a project by the NCI Center for Biomedical Informatics and Information Technology. National Cancer Institute, National Institutes of Health, Bethesda, MD 20892, U.S.A.","graph":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl","source":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl","terminologyVersion":"ncit_20.04d","latest":true,"tags":{"monthly":"true"}}
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concept by code (minimal information)

Return concept object with minimal information for a specified code.

Command: `pytest test_concept_tests.py::test_get_minimal_concept_by_code`

```{.python}
2020-06-30T14:32:47.045 INFO : concept_tests.py: Get minimal concept by code - C3224
2020-06-30T14:32:47.046 INFO : url = http://localhost:8082/api/v1/concept/ncit/C3224?include=minimal
2020-06-30T14:32:47.703 INFO : {"code":"C3224","name":"Melanoma","terminology":"ncit","version":"20.05d"}
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by list of codes (minimal information)

Return concept objects with minimal information for a specified list of codes.

Command: `pytest test_concept_tests.py::test_get_minimal_concept_list_by_code`

```{.python}
2020-06-30T14:32:47.705 INFO : concept_tests.py: Get minimal concepts by list - [C3224, C3910]
2020-06-30T14:32:47.705 INFO : url = http://localhost:8082/api/v1/concept/ncit?include=minimal&list=C3224,C3910
2020-06-30T14:32:48.435 INFO : [{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"20.05d"},{"code":"C3910","name":"Molecular Abnormality","terminology":"ncit","version":"20.05d"}]
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concept by code (summary information)

Return concept object with summary information for a specified code.

Command: `pytest test_concept_tests.py::test_get_summary_concept_by_code`

```{.python}
2020-06-30T15:56:34.341 INFO : concept_tests.py: Get summary concepts by code - C3224
2020-06-30T15:56:34.341 INFO : url = http://localhost:8082/api/v1/concept/ncit/C3224?include=summary
2020-06-30T15:56:35.208 INFO : {"code":"C3224","name":"Melanoma","terminology":"ncit","version":"20.05d","synonyms":[{"name":"Melanoma","type":"Preferred_Name"},{"name":"MELANOMA, MALIGNANT","termGroup":"PT","type":"FULL_SYN","source":"CDISC"},{"name":"Malignant Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CPTAC"},{"name":"Malignant Melanoma","termGroup":"SY","type":"FULL_SYN","source":"CDISC"},{"name":"Malignant Melanoma","termGroup":"SY","type":"FULL_SYN","source":"NCI"},{"name":"Melanoma","termGroup":"DN","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CTEP","code":"10053571","subSource":"SDC"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"Cellosaurus"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"GDC"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"NICHD"},{"name":"Melanoma","termGroup":"SY","type":"FULL_SYN","source":"NCI","code":"TCGA","subSource":"caDSR"},{"name":"Melanoma, NOS","termGroup":"SY","type":"FULL_SYN","source":"GDC"},{"name":"melanoma","termGroup":"PT","type":"FULL_SYN","source":"NCI-GLOSS","code":"CDR0000045135"},{"name":"Melanoma","type":"Display_Name"}],"definitions":[{"definition":"A form of cancer that begins in melanocytes (cells that make the pigment melanin). It may begin in a mole (skin melanoma), but can also begin in other pigmented tissues, such as in the eye or in the intestines.","type":"ALT_DEFINITION","source":"NCI-GLOSS"},{"definition":"A malignant neoplasm composed of melanocytes.","type":"ALT_DEFINITION","source":"CDISC"},{"definition":"A malignant neoplasm comprised of melanocytes typically arising in the skin.","type":"ALT_DEFINITION","source":"NICHD"},{"definition":"A malignant, usually aggressive tumor composed of atypical, neoplastic melanocytes. Most often, melanomas arise in the skin (cutaneous melanomas) and include the following histologic subtypes: superficial spreading melanoma, nodular melanoma, acral lentiginous melanoma, and lentigo maligna melanoma. Cutaneous melanomas may arise from acquired or congenital melanocytic or dysplastic nevi. Melanomas may also arise in other anatomic sites including the gastrointestinal system, eye, urinary tract, and reproductive system. Melanomas frequently metastasize to lymph nodes, liver, lungs, and brain.","source":"NCI"}],"properties":[{"type":"Semantic_Type","value":"Neoplastic Process"},{"type":"UMLS_CUI","value":"C0025202"},{"type":"Contributing_Source","value":"Cellosaurus"},{"type":"Contributing_Source","value":"CTRP"},{"type":"Contributing_Source","value":"MedDRA"},{"type":"Contributing_Source","value":"GDC"},{"type":"Contributing_Source","value":"CDISC"},{"type":"Contributing_Source","value":"NICHD"},{"type":"Contributing_Source","value":"CTEP"},{"type":"Contributing_Source","value":"CPTAC"},{"type":"ICD-O-3_Code","value":"8720/3"},{"type":"Neoplastic_Status","value":"Malignant"},{"type":"Legacy Concept Name","value":"Melanoma"},{"type":"NICHD_Hierarchy_Term","value":"Melanoma"}]}
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concept by code (full information)

Return concept object with full information for a specified code.

Command: `pytest test_concept_tests.py::test_get_full_concept_by_code`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concept by code (custom information)

Return custom concept information for a given terminology and code. To show a range of options, in this case, the request asks for synonyms, children, maps, and inverse associations.

Command: `pytest test_concept_tests.py::test_get_custom_concept_by_code`

```{.python}
2020-06-30T15:56:35.210 INFO : concept_tests.py: Get custom concepts by code - C3224
2020-06-30T15:56:35.210 INFO : url = http://localhost:8082/api/v1/concept/ncit/C3224?include=synonyms,children,maps,inverseAssociations
2020-06-30T15:56:35.872 INFO : {"code":"C3224","name":"Melanoma","terminology":"ncit","version":"20.05d","synonyms":[{"name":"Melanoma","type":"Preferred_Name"},{"name":"MELANOMA, MALIGNANT","termGroup":"PT","type":"FULL_SYN","source":"CDISC"},{"name":"Malignant Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CPTAC"},{"name":"Malignant Melanoma","termGroup":"SY","type":"FULL_SYN","source":"CDISC"},{"name":"Malignant Melanoma","termGroup":"SY","type":"FULL_SYN","source":"NCI"},{"name":"Melanoma","termGroup":"DN","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CTEP","code":"10053571","subSource":"SDC"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"Cellosaurus"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"GDC"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"NICHD"},{"name":"Melanoma","termGroup":"SY","type":"FULL_SYN","source":"NCI","code":"TCGA","subSource":"caDSR"},{"name":"Melanoma, NOS","termGroup":"SY","type":"FULL_SYN","source":"GDC"},{"name":"melanoma","termGroup":"PT","type":"FULL_SYN","source":"NCI-GLOSS","code":"CDR0000045135"},{"name":"Melanoma","type":"Display_Name"}],"children":[{"code":"C3802","name":"Amelanotic Melanoma"},{"code":"C8410","name":"Breast Melanoma"},{"code":"C131506","name":"Childhood Melanoma"},{"code":"C3510","name":"Cutaneous Melanoma"},{"code":"C4236","name":"Epithelioid Cell Melanoma"},{"code":"C9499","name":"Melanomatosis"},{"code":"C8925","name":"Metastatic Melanoma"},{"code":"C66756","name":"Mixed Epithelioid and Spindle Cell Melanoma"},{"code":"C8711","name":"Non-Cutaneous Melanoma"},{"code":"C8562","name":"Ocular Melanoma"},{"code":"C118828","name":"Orbital Melanoma"},{"code":"C162547","name":"Penile Melanoma"},{"code":"C7087","name":"Recurrent Melanoma"},{"code":"C147983","name":"Refractory Melanoma"},{"code":"C4228","name":"Regressing Melanoma"},{"code":"C4237","name":"Spindle Cell Melanoma"},{"code":"C148517","name":"Unresectable Melanoma"}],"inverseAssociations":[{"type":"Has_NICHD_Parent","relatedCode":"C131506","relatedName":"Childhood Melanoma"}],"maps":[{"type":"Related To","targetName":"8720/3","targetTermGroup":"PT","targetCode":"MORPH","targetTerminology":"GDC"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermGroup":"PT","targetCode":"8720/3","targetTerminology":"ICDO3","targetTerminologyVersion":"3.1"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermGroup":"PT","targetCode":"8720/3","targetTerminology":"ICDO3","targetTerminologyVersion":"3.2"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermGroup":"PT","targetCode":"PD","targetTerminology":"GDC"},{"type":"Has Synonym","targetName":"Melanoma","targetTermGroup":"LLT","targetCode":"10053571","targetTerminology":"MedDRA","targetTerminologyVersion":"18.1"},{"type":"Has Synonym","targetName":"Melanoma","targetTermGroup":"PT","targetCode":"RPD","targetTerminology":"GDC"},{"type":"Has Synonym","targetName":"Melanoma, NOS","targetTermGroup":"PT","targetCode":"PD","targetTerminology":"GDC"}]}
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concept part (children) by code

Return concept part information for a given terminology, concept part, and code. Some possible concept parts include Children, Parents, Roles, Associations, InverseRoles, InverseAssociations, Maps, and DisjointWith. The example below shows Children.

Command: `pytest test_concept_tests.py::test_get_concept_part_children_by_code`

```{.python}
2020-06-30T16:06:24.598 INFO : concept_tests.py: Get concept part (children) by code - C3224
2020-06-30T16:06:24.599 INFO : url = http://localhost:8082/api/v1/concept/ncit/C3224/children
2020-06-30T16:06:25.216 INFO : [{"code":"C3802","name":"Amelanotic Melanoma"},{"code":"C8410","name":"Breast Melanoma"},{"code":"C131506","name":"Childhood Melanoma"},{"code":"C3510","name":"Cutaneous Melanoma"},{"code":"C4236","name":"Epithelioid Cell Melanoma"},{"code":"C9499","name":"Melanomatosis"},{"code":"C8925","name":"Metastatic Melanoma"},{"code":"C66756","name":"Mixed Epithelioid and Spindle Cell Melanoma"},{"code":"C8711","name":"Non-Cutaneous Melanoma"},{"code":"C8562","name":"Ocular Melanoma"},{"code":"C118828","name":"Orbital Melanoma"},{"code":"C162547","name":"Penile Melanoma"},{"code":"C7087","name":"Recurrent Melanoma"},{"code":"C147983","name":"Refractory Melanoma"},{"code":"C4228","name":"Regressing Melanoma"},{"code":"C4237","name":"Spindle Cell Melanoma"},{"code":"C148517","name":"Unresectable Melanoma"}]
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concept descendants by code

Return concept descendants information for a given terminology and code. The call client can be constrained by a maxLevel to prevent going deeper than a certain amount. Level 0 entries in the result are the direct children. The test sets the max level to 2.

Command: `pytest test_concept_tests.py::test_get_concept_descendants_by_code`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get all properties

Return all properties for a given terminology with default include setting (minimal).

Command: `pytest test_metadata_tests.py::test_get_all_properties`

```{.python}
2020-07-01T11:35:10.257 INFO : test_metadata_tests.py: Get Properties
2020-07-01T11:35:10.257 INFO : url = http://localhost:8082/api/v1/metadata/ncit/properties?include=minimal
2020-07-01T11:35:10.266 INFO : [{"code":"P325","name":"ALT_DEFINITION","terminology":"ncit","version":"20.05d"},{"code":"P302","name":"Accepted_Therapeutic_Use_For","terminology":"ncit","version":"20.05d"},{"code":"P216","name":"BioCarta_ID","terminology":"ncit","version":"20.05d"},{"code":"P210","name":"CAS_Registry","terminology":"ncit","version":"20.05d"},{"code":"P368","name":"CHEBI_ID","terminology":"ncit","version":"20.05d"},{"code":"P350","name":"Chemical_Formula","terminology":"ncit","version":"20.05d"},{"code":"P310","name":"Concept_Status","terminology":"ncit","version":"20.05d"},{"code":"P322","name":"Contributing_Source","terminology":"ncit","version":"20.05d"},{"code":"P97","name":"DEFINITION","terminology":"ncit","version":"20.05d"},{"code":"P98","name":"DesignNote","terminology":"ncit","version":"20.05d"},{"code":"P107","name":"Display_Name","terminology":"ncit","version":"20.05d"},{"code":"P321","name":"EntrezGene_ID","terminology":"ncit","version":"20.05d"},{"code":"P356","name":"Essential_Amino_Acid","terminology":"ncit","version":"20.05d"},{"code":"P357","name":"Essential_Fatty_Acid","terminology":"ncit","version":"20.05d"},{"code":"P361","name":"Extensible_List","terminology":"ncit","version":"20.05d"},{"code":"P317","name":"FDA_Table","terminology":"ncit","version":"20.05d"},{"code":"P319","name":"FDA_UNII_Code","terminology":"ncit","version":"20.05d"},{"code":"P90","name":"FULL_SYN","terminology":"ncit","version":"20.05d"},{"code":"P211","name":"GO_Annotation","terminology":"ncit","version":"20.05d"},{"code":"P102","name":"GenBank_Accession_Number","terminology":"ncit","version":"20.05d"},{"code":"P96","name":"Gene_Encodes_Product","terminology":"ncit","version":"20.05d"},{"code":"P369","name":"HGNC_ID","terminology":"ncit","version":"20.05d"},{"code":"P101","name":"Homologous_Gene","terminology":"ncit","version":"20.05d"},{"code":"P334","name":"ICD-O-3_Code","terminology":"ncit","version":"20.05d"},{"code":"P353","name":"INFOODS","terminology":"ncit","version":"20.05d"},{"code":"P215","name":"KEGG_ID","terminology":"ncit","version":"20.05d"},{"code":"P366","name":"Legacy Concept Name","terminology":"ncit","version":"20.05d"},{"code":"P332","name":"MGI_Accession_ID","terminology":"ncit","version":"20.05d"},{"code":"P360","name":"Macronutrient","terminology":"ncit","version":"20.05d"},{"code":"P375","name":"Maps_To","terminology":"ncit","version":"20.05d"},{"code":"P359","name":"Micronutrient","terminology":"ncit","version":"20.05d"},{"code":"P331","name":"NCBI_Taxon_ID","terminology":"ncit","version":"20.05d"},{"code":"P208","name":"NCI_META_CUI","terminology":"ncit","version":"20.05d"},{"code":"P371","name":"NICHD_Hierarchy_Term","terminology":"ncit","version":"20.05d"},{"code":"P175","name":"NSC Number","terminology":"ncit","version":"20.05d"},{"code":"P363","name":"Neoplastic_Status","terminology":"ncit","version":"20.05d"},{"code":"P358","name":"Nutrient","terminology":"ncit","version":"20.05d"},{"code":"P100","name":"OMIM_Number","terminology":"ncit","version":"20.05d"},{"code":"P330","name":"PDQ_Closed_Trial_Search_ID","terminology":"ncit","version":"20.05d"},{"code":"P329","name":"PDQ_Open_Trial_Search_ID","terminology":"ncit","version":"20.05d"},{"code":"P367","name":"PID_ID","terminology":"ncit","version":"20.05d"},{"code":"P108","name":"Preferred_Name","terminology":"ncit","version":"20.05d"},{"code":"P171","name":"PubMedID_Primary_Reference","terminology":"ncit","version":"20.05d"},{"code":"P372","name":"Publish_Value_Set","terminology":"ncit","version":"20.05d"},{"code":"P316","name":"Relative_Enzyme_Activity","terminology":"ncit","version":"20.05d"},{"code":"P315","name":"SNP_ID","terminology":"ncit","version":"20.05d"},{"code":"P106","name":"Semantic_Type","terminology":"ncit","version":"20.05d"},{"code":"P92","name":"Subsource","terminology":"ncit","version":"20.05d"},{"code":"P93","name":"Swiss_Prot","terminology":"ncit","version":"20.05d"},{"code":"P376","name":"Term_Browser_Value_Set_Description","terminology":"ncit","version":"20.05d"},{"code":"P352","name":"Tolerable_Level","terminology":"ncit","version":"20.05d"},{"code":"P207","name":"UMLS_CUI","terminology":"ncit","version":"20.05d"},{"code":"P354","name":"USDA_ID","terminology":"ncit","version":"20.05d"},{"code":"P351","name":"US_Recommended_Intake","terminology":"ncit","version":"20.05d"},{"code":"P355","name":"Unit","terminology":"ncit","version":"20.05d"},{"code":"P333","name":"Use_For","terminology":"ncit","version":"20.05d"},{"code":"P398","name":"Value_Set_Pair","terminology":"ncit","version":"20.05d"},{"code":"NHC0","name":"code","terminology":"ncit","version":"20.05d"},{"code":"P362","name":"miRBase_ID","terminology":"ncit","version":"20.05d"}]
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get property by code or label

Return property for the specified code or label.

Command: `pytest test_metadata_tests.py::test_get_property_by_code_or_label`

```{.python}
2020-07-01T11:54:57.579 INFO : test_metadata_tests.py: Get Property By Code or Label - P302
2020-07-01T11:54:57.579 INFO : url = http://localhost:8082/api/v1/metadata/ncit/properties?include=summary&list=P302
2020-07-01T11:54:57.588 INFO : [{"code":"P302","name":"Accepted_Therapeutic_Use_For","terminology":"ncit","version":"20.05d","synonyms":[{"name":"Accepted_Therapeutic_Use_For","type":"Preferred_Name"},{"name":"Accepted_Therapeutic_Use_For","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Accepted_Therapeutic_Use_For","type":"Display_Name"}],"definitions":[{"definition":"A property representing a disease or condition for which this drug is an accepted treatment. Used in the Drug, Food, Chemical or Biomedical Material branch.","source":"NCI"}],"properties":[{"type":"http://www.w3.org/1999/02/22-rdf-syntax-ns#type","value":"http://www.w3.org/2002/07/owl#AnnotationProperty"},{"type":"Semantic_Type","value":"Conceptual Entity"},{"type":"http://www.w3.org/2000/01/rdf-schema#range","value":"http://www.w3.org/2001/XMLSchema#string"}]}]
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get all qualifiers

Return all qualifiers for a given terminology with default include setting (minimal).

Command: `pytest test_metadata_tests.py::test_get_all_qualifiers`

```{.python}
2020-07-01T11:57:20.487 INFO : test_metadata_tests.py: Get All Qualifiers
2020-07-01T11:57:20.487 INFO : url = http://localhost:8082/api/v1/metadata/ncit/qualifiers?include=minimal
2020-07-01T11:57:20.496 INFO : [{"code":"P378","name":"Definition Source","terminology":"ncit","version":"20.05d"},{"code":"P379","name":"Definition_Reviewer_Name","terminology":"ncit","version":"20.05d"},{"code":"P380","name":"Definition_Review_Date","terminology":"ncit","version":"20.05d"},{"code":"P381","name":"attribution","terminology":"ncit","version":"20.05d"},{"code":"P383","name":"term-group","terminology":"ncit","version":"20.05d"},{"code":"P384","name":"term-source","terminology":"ncit","version":"20.05d"},{"code":"P385","name":"Source Code","terminology":"ncit","version":"20.05d"},{"code":"P386","name":"Subsource Name","terminology":"ncit","version":"20.05d"},{"code":"P387","name":"go-id","terminology":"ncit","version":"20.05d"},{"code":"P389","name":"go-evi","terminology":"ncit","version":"20.05d"},{"code":"P390","name":"go-source","terminology":"ncit","version":"20.05d"},{"code":"P391","name":"source-date","terminology":"ncit","version":"20.05d"},{"code":"P393","name":"Relationship_to_Target","terminology":"ncit","version":"20.05d"},{"code":"P394","name":"Target_Term_Type","terminology":"ncit","version":"20.05d"},{"code":"P395","name":"Target_Code","terminology":"ncit","version":"20.05d"},{"code":"P396","name":"Target_Terminology","terminology":"ncit","version":"20.05d"},{"code":"P397","name":"Target_Terminology_Version","terminology":"ncit","version":"20.05d"}]
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get qualifier by code (or label)

Return qualifier for the specified code or label.

Command: `pytest test_metadata_tests.py::test_get_qualifier_by_code`

```{.python}
2020-07-01T12:05:46.062 INFO : test_metadata_tests.py: Get Qualifier by Code - P387
2020-07-01T12:05:46.063 INFO : url = http://localhost:8082/api/v1/metadata/ncit/qualifiers?include=summary&list=P387
2020-07-01T12:05:46.072 INFO : [{"code":"P387","name":"go-id","terminology":"ncit","version":"20.05d","synonyms":[{"name":"go-id","type":"Preferred_Name"}],"definitions":[{"definition":"A property representing a unique zero-padded seven digit identifier supplied by the Gene Ontology (GO) that has no inherent meaning or relation to the position of the term in GO and is prefixed by \"GO:\".","source":"NCI"}],"properties":[{"type":"http://www.w3.org/1999/02/22-rdf-syntax-ns#type","value":"http://www.w3.org/2002/07/owl#AnnotationProperty"},{"type":"http://www.w3.org/2000/01/rdf-schema#range","value":"http://www.w3.org/2001/XMLSchema#string"},{"type":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#required","value":"true"}]}]
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get qualifier values by code (or label)

Return distinct value set for the qualifier with the specified code or label.

Command: `pytest test_metadata_tests.py::test_get_qualifier_values_by_code`

```{.python}
2020-07-01T12:09:03.006 INFO : test_metadata_tests.py: Get Qualifier Value by Code - P383
2020-07-01T12:09:03.006 INFO : url = http://localhost:8082/api/v1/metadata/ncit/qualifier/P383/values
2020-07-01T12:09:03.014 INFO : ["AB","AD","AQ","AQS","BR","CA2","CA3","CN","CNU","CS","DN","EDQM-HC","FB","HD","PT","SN","SY"]
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get all roles

Return all roles.

Command: `pytest test_metadata_tests.py::test_get_roles`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get roles by code (or label)

Returns a role definition for a specified code.

Command: `pytest test_metadata_tests.py::test_get_roles_by_code`

```{.python}
2020-07-01T13:43:13.980 INFO : test_metadata_tests.py: Get Roles by Code - R123
2020-07-01T13:43:13.980 INFO : url = http://localhost:8082/api/v1/metadata/ncit/role/R123
2020-07-01T13:43:13.988 INFO : {"code":"R123","name":"Chemotherapy_Regimen_Has_Component","terminology":"ncit","version":"20.05d","synonyms":[{"name":"Chemotherapy_Regimen_Has_Component","type":"Preferred_Name"},{"name":"Chemotherapy_Regimen_Has_Component","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Chemotherapy_Regimen_Has_Component","type":"Display_Name"}],"definitions":[{"definition":"A role used to specify the component agents which are used in a particular chemotherapy regimen or agent combination. The domain and the range for this role are 'Chemotherapy Regimen or Agent Combination' and 'Drug, Food, Chemical or Biomedical Material', respectively.","source":"NCI"}],"properties":[{"type":"http://www.w3.org/1999/02/22-rdf-syntax-ns#type","value":"http://www.w3.org/2002/07/owl#ObjectProperty"},{"type":"Semantic_Type","value":"Conceptual Entity"},{"type":"http://www.w3.org/2000/01/rdf-schema#range","value":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C1908"},{"type":"http://www.w3.org/2000/01/rdf-schema#domain","value":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C12218"}]}
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get all associations

Return all associations.

Command: `pytest test_metadata_tests.py::test_get_associations`

```{.python}
2020-07-01T14:04:31.324 INFO : test_metadata_tests.py: Get All Associations
2020-07-01T14:04:31.324 INFO : url = http://localhost:8082/api/v1/metadata/ncit/associations
2020-07-01T14:04:31.333 INFO : [{"code":"A8","name":"Concept_In_Subset","terminology":"ncit","version":"20.05d"},{"code":"A10","name":"Has_CDRH_Parent","terminology":"ncit","version":"20.05d"},{"code":"A15","name":"Has_CTCAE_5_Parent","terminology":"ncit","version":"20.05d"},{"code":"A12","name":"Has_Data_Element","terminology":"ncit","version":"20.05d"},{"code":"A6","name":"Has_Free_Acid_Or_Base_Form","terminology":"ncit","version":"20.05d"},{"code":"A16","name":"Has_INC_Parent","terminology":"ncit","version":"20.05d"},{"code":"A11","name":"Has_NICHD_Parent","terminology":"ncit","version":"20.05d"},{"code":"A24","name":"Has_PCDC_AML_Permissible_Value","terminology":"ncit","version":"20.05d"},{"code":"A23","name":"Has_PCDC_Data_Type","terminology":"ncit","version":"20.05d"},{"code":"A19","name":"Has_Pharmaceutical_Administration_Method","terminology":"ncit","version":"20.05d"},{"code":"A18","name":"Has_Pharmaceutical_Basic_Dose_Form","terminology":"ncit","version":"20.05d"},{"code":"A20","name":"Has_Pharmaceutical_Intended_Site","terminology":"ncit","version":"20.05d"},{"code":"A21","name":"Has_Pharmaceutical_Release_Characteristics","terminology":"ncit","version":"20.05d"},{"code":"A17","name":"Has_Pharmaceutical_State_Of_Matter","terminology":"ncit","version":"20.05d"},{"code":"A22","name":"Has_Pharmaceutical_Transformation","terminology":"ncit","version":"20.05d"},{"code":"A5","name":"Has_Salt_Form","terminology":"ncit","version":"20.05d"},{"code":"A7","name":"Has_Target","terminology":"ncit","version":"20.05d"},{"code":"A9","name":"Is_Related_To_Endogenous_Product","terminology":"ncit","version":"20.05d"},{"code":"A14","name":"Neoplasm_Has_Special_Category","terminology":"ncit","version":"20.05d"},{"code":"A4","name":"Qualifier_Applies_To","terminology":"ncit","version":"20.05d"},{"code":"A13","name":"Related_To_Genetic_Biomarker","terminology":"ncit","version":"20.05d"},{"code":"A1","name":"Role_Has_Domain","terminology":"ncit","version":"20.05d"},{"code":"A3","name":"Role_Has_Parent","terminology":"ncit","version":"20.05d"},{"code":"A2","name":"Role_Has_Range","terminology":"ncit","version":"20.05d"}]
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get associations by code (or label)

Returns associations for a specified code.

Command: `pytest test_metadata_tests.py::test_get_associations_by_code`

```{.python}
2020-07-01T14:03:47.543 INFO : test_metadata_tests.py: Get Associations by Code - A10
2020-07-01T14:03:47.543 INFO : url = http://localhost:8082/api/v1/metadata/ncit/association/A10
2020-07-01T14:03:47.847 INFO : {"code":"A10","name":"Has_CDRH_Parent","terminology":"ncit","version":"20.05d","synonyms":[{"name":"Has_CDRH_Parent","type":"Preferred_Name"},{"name":"Has_CDRH_Parent","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Has_CDRH_Parent","type":"Display_Name"}],"definitions":[{"definition":"An association created to allow the source CDRH to assign a parent to each concept with the intent of creating a hierarchy that includes only terms in which they are the contributing source.","source":"NCI"}],"properties":[{"type":"http://www.w3.org/1999/02/22-rdf-syntax-ns#type","value":"http://www.w3.org/2002/07/owl#AnnotationProperty"},{"type":"Semantic_Type","value":"Conceptual Entity"},{"type":"http://www.w3.org/2000/01/rdf-schema#range","value":"http://www.w3.org/2001/XMLSchema#anyURI"}]}
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get term types

Return metadata for all term types for the specified terminology.

Command: `pytest test_metadata_tests.py::test_get_term_types`

```{.python}
2020-07-01T14:07:46.228 INFO : test_metadata_tests.py: Get Term Types
2020-07-01T14:07:46.229 INFO : url = http://localhost:8082/api/v1/metadata/ncit/termTypes
2020-07-01T14:07:47.431 INFO : [{"code":"AB","name":"Abbreviation","terminology":"ncit"},{"code":"AD","name":"Adjectival form (and other parts of grammar)","terminology":"ncit"},{"code":"AQ*","name":"Antiquated preferred term","terminology":"ncit"},{"code":"AQS","name":"Antiquated term, use when there are antiquated synonyms within a concept","terminology":"ncit"},{"code":"BR","name":"US brand name, which may be trademarked","terminology":"ncit"},{"code":"CA2","name":"ISO 3166 alpha-2 country code","terminology":"ncit"},{"code":"CA3","name":"ISO 3166 alpha-3 country code","terminology":"ncit"},{"code":"CN","name":"Drug study code","terminology":"ncit"},{"code":"CNU","name":"ISO 3166 numeric country code","terminology":"ncit"},{"code":"CS","name":"US State Department country code","terminology":"ncit"},{"code":"DN","name":"Display name","terminology":"ncit"},{"code":"EDQM-HC","terminology":"ncit"},{"code":"FB","name":"Foreign brand name, which may be trademarked","terminology":"ncit"},{"code":"HD*","name":"Header (groups concepts, but not used for coding data)","terminology":"ncit"},{"code":"PT*","name":"Preferred term","terminology":"ncit"},{"code":"SN","name":"Chemical structure name","terminology":"ncit"},{"code":"SY","name":"Synonym","terminology":"ncit"}]

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get definition sources

Return metadata for all definition sources for the specified terminology.

Command: `pytest test_metadata_tests.py::test_get_definition_sources`

```{.python}
[{"code":"ACC/AHA","name":"American College of Cardiology / American Heart Association","terminology":"ncit"},{"code":"BIOCARTA","name":"BioCarta online maps of molecular pathways, adapted for NCI use","terminology":"ncit"},{"code":"BRIDG","name":"Biomedical Research Integrated Domain Model Group","terminology":"ncit"},{"code":"BRIDG 3.0.3","name":"Biomedical Research Integrated Domain Model Group, version 3.0.3","terminology":"ncit"},{"code":"BRIDG 5.3","name":"Biomedical Research Integrated Domain Model Group, version 5.3","terminology":"ncit"},{"code":"CCPS","name":"Childhood Cancer Predisposition Study","terminology":"ncit"},{"code":"CDISC","name":"Clinical Data Interchange Standards Consortium","terminology":"ncit"},{"code":"CDISC-GLOSS","name":"CDISC Glossary Terminology","terminology":"ncit"},{"code":"CRCH","name":"Cancer Research Center of Hawaii Nutrition Terminology","terminology":"ncit"},{"code":"CTCAE","name":"Common Terminology Criteria for Adverse Events","terminology":"ncit"},{"code":"CTCAE 3.0","name":"Common Terminology Criteria for Adverse Events, version 3.0","terminology":"ncit"},{"code":"CTCAE 5.0","name":"Common Terminology Criteria for Adverse Events, version 5.0","terminology":"ncit"},{"code":"CTEP","name":"Cancer Therapy Evaluation Program","terminology":"ncit"},{"code":"CareLex","name":"CareLex electronic Trial Master File Terminology","terminology":"ncit"},{"code":"DICOM","name":"Digital Imaging Communications in Medicine","terminology":"ncit"},{"code":"EDQM-HC","name":"European Directorate for the Quality of Medicines & Healthcare","terminology":"ncit"},{"code":"FDA","name":"U.S. Food and Drug Administration","terminology":"ncit"},{"code":"GAIA","name":"Global Alignment of Immunization safety Assessment in pregnancy Terminology","terminology":"ncit"},{"code":"ICDO3","name":"International Classification of Diseases for Oncology, 3rd edition","terminology":"ncit"},{"code":"INC","name":"International Neonatal Consortium","terminology":"ncit"},{"code":"KEGG","name":"KEGG Pathway Database","terminology":"ncit"},{"code":"MMHCC","name":"Mouse Models of Human Cancer Consortium","terminology":"ncit"},{"code":"NCI","name":"National Cancer Institute Thesaurus","terminology":"ncit"},{"code":"NCI-GLOSS","name":"NCI Dictionary of Cancer Terms","terminology":"ncit"},{"code":"NICHD","name":"National Institute of Child Health and Human Development","terminology":"ncit"},{"code":"PCDC","name":"Pediatric Cancer Data Commons","terminology":"ncit"},{"code":"PQCMC","name":"Pharmaceutical Quality/Chemistry, Manufacturing, and Controls","terminology":"ncit"},{"code":"UMD2001","name":"Universal Medical Device Nomenclature System, Version 2001","terminology":"ncit"},{"code":"UWDA142","name":"University of Washington Digital Anatomist, Version 1.4.2","terminology":"ncit"}]
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get synonym sources

Return metadata for all synonym sources for the specified terminology.

Command: `pytest test_metadata_tests.py::test_get_synonym_sources`

```{.python}
[{"code":"ACC/AHA","name":"American College of Cardiology / American Heart Association","terminology":"ncit"},{"code":"BIOCARTA","name":"BioCarta online maps of molecular pathways, adapted for NCI use","terminology":"ncit"},{"code":"BRIDG","name":"Biomedical Research Integrated Domain Model Group","terminology":"ncit"},{"code":"BRIDG 3.0.3","name":"Biomedical Research Integrated Domain Model Group, version 3.0.3","terminology":"ncit"},{"code":"BRIDG 5.3","name":"Biomedical Research Integrated Domain Model Group, version 5.3","terminology":"ncit"},{"code":"CBDD","name":"Chemical Biology and Drug Development","terminology":"ncit"},{"code":"CCPS","name":"Childhood Cancer Predisposition Study","terminology":"ncit"},{"code":"CDC","name":"U.S. Centers for Disease Control and Prevention","terminology":"ncit"},{"code":"CDISC","name":"Clinical Data Interchange Standards Consortium","terminology":"ncit"},{"code":"CDISC-GLOSS","name":"CDISC Glossary Terminology","terminology":"ncit"},{"code":"CPTAC","name":"Clinical Proteomic Tumor Analysis Consortium","terminology":"ncit"},{"code":"CRCH","name":"Cancer Research Center of Hawaii Nutrition Terminology","terminology":"ncit"},{"code":"CTCAE","name":"Common Terminology Criteria for Adverse Events","terminology":"ncit"},{"code":"CTCAE 3.0","name":"Common Terminology Criteria for Adverse Events, version 3.0","terminology":"ncit"},{"code":"CTCAE 5.0","name":"Common Terminology Criteria for Adverse Events, version 5.0","terminology":"ncit"},{"code":"CTDC","name":"Clinical Trials Data Commons","terminology":"ncit"},{"code":"CTEP","name":"Cancer Therapy Evaluation Program","terminology":"ncit"},{"code":"CTRP","name":"Clinical Trials Reporting Program","terminology":"ncit"},{"code":"CareLex","name":"CareLex electronic Trial Master File Terminology","terminology":"ncit"},{"code":"Cellosaurus","name":"Cellosaurus - a knowledge resource on cell lines","terminology":"ncit"},{"code":"DCP","name":"NCI Division of Cancer Prevention Program","terminology":"ncit"},{"code":"DICOM","name":"Digital Imaging Communications in Medicine","terminology":"ncit"},{"code":"DTP","name":"NCI Developmental Therapeutics Program","terminology":"ncit"},{"code":"EDQM-HC","name":"European Directorate for the Quality of Medicines & Healthcare","terminology":"ncit"},{"code":"FDA","name":"U.S. Food and Drug Administration","terminology":"ncit"},{"code":"GAIA","name":"Global Alignment of Immunization safety Assessment in pregnancy Terminology","terminology":"ncit"},{"code":"GDC","name":"Genomic Data Commons","terminology":"ncit"},{"code":"GENC","name":"Geopolitical Entities, Names, and Codes Terminology","terminology":"ncit"},{"code":"HGNC","name":"HUGO Gene Nomenclature Committee","terminology":"ncit"},{"code":"HL7","name":"Health Level Seven International","terminology":"ncit"},{"code":"ICDC","name":"International Cancer Genome Consortium","terminology":"ncit"},{"code":"ICH","name":"International Conference on Harmonization","terminology":"ncit"},{"code":"INC","name":"International Neonatal Consortium","terminology":"ncit"},{"code":"JAX","name":"Jackson Laboratories Mouse Terminology, adapted for NCI use","terminology":"ncit"},{"code":"KEGG","name":"KEGG Pathway Database","terminology":"ncit"},{"code":"NCI","name":"National Cancer Institute Thesaurus","terminology":"ncit"},{"code":"NCI-GLOSS","name":"NCI Dictionary of Cancer Terms","terminology":"ncit"},{"code":"NCPDP","name":"National Council for Prescription Drug Programs","terminology":"ncit"},{"code":"NDC","name":"National Drug Code","terminology":"ncit"},{"code":"NICHD","name":"National Institute of Child Health and Human Development","terminology":"ncit"},{"code":"PCDC","name":"Pediatric Cancer Data Commons","terminology":"ncit"},{"code":"PI-RADS","name":"Prostate Imaging-Reporting and Data System","terminology":"ncit"},{"code":"PID","name":"NCI Nature Pathway Interaction Database","terminology":"ncit"},{"code":"RENI","name":"Registry Nomenclature Information System","terminology":"ncit"},{"code":"SEER","name":"Surveillance, Epidemiology, and End Results Program","terminology":"ncit"},{"code":"SeroNet","name":"NCI Serological Sciences Network for COVID-19","terminology":"ncit"},{"code":"UCUM","name":"Unified Code for Units of Measure","terminology":"ncit"},{"code":"WHO","name":"World Health Organization","terminology":"ncit"},{"code":"ZFin","name":"Zebrafish Information Network","terminology":"ncit"},{"code":"caDSR","name":"Cancer Data Standards Registry and Repository","terminology":"ncit"}]
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get synonym types

Return metadata for all synonym types for the specified terminology.

Command: `pytest test_metadata_tests.py::test_get_synonym_types`

```{.python}
[{"code":"P90","name":"FULL_SYN","terminology":"ncit","version":"21.06e"},{"code":"P108","name":"Preferred_Name","terminology":"ncit","version":"21.06e"},{"code":"P107","name":"Display_Name","terminology":"ncit","version":"21.06e"}]
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get synonym types by code

Return metadata for all synonym types for the specified terminology.

Command: `pytest test_metadata_tests.py::test_get_synonym_type_by_code`

```{.python}
{"code":"P90","name":"FULL_SYN","terminology":"ncit","version":"21.06e","synonyms":[{"name":"FULL_SYN","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Synonym with Source Data","termGroup":"SY","type":"FULL_SYN","source":"NCI"},{"name":"Term & Source Data","type":"Display_Name"},{"name":"FULL_SYN","type":"Preferred_Name"}],"definitions":[{"definition":"A property representing a fully qualified synonym, contains the string, term type, source, and an optional source code if appropriate. Each subfield is deliniated to facilitate interpretation by software.","type":"DEFINITION","source":"NCI"}],"properties":[{"type":"http://www.w3.org/1999/02/22-rdf-syntax-ns#type","value":"http://www.w3.org/2002/07/owl#AnnotationProperty"},{"type":"http://www.w3.org/2000/01/rdf-schema#range","value":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#textArea"},{"type":"Semantic_Type","value":"Conceptual Entity"}]}
```

### Get definition types

Return metadata for all definition types for the specified terminology.

Command: `pytest test_metadata_tests.py::test_get_definition_types`

```{.python}
[{"code":"P325","name":"ALT_DEFINITION","terminology":"ncit","version":"21.06e"},{"code":"P97","name":"DEFINITION","terminology":"ncit","version":"21.06e"}]
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get definition types by code

Return metadata for all definition types for the specified terminology.

Command: `pytest test_metadata_tests.py::test_get_definition_type_by_code`

```{.python}
{"code":"P325","name":"ALT_DEFINITION","terminology":"ncit","version":"21.06e","synonyms":[{"name":"ALT_DEFINITION","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"[source] Definition","type":"Display_Name"},{"name":"ALT_DEFINITION","type":"Preferred_Name"}],"definitions":[{"definition":"A property representing the English language definition of a concept from a source other than NCI.","type":"DEFINITION","source":"NCI"}],"properties":[{"type":"http://www.w3.org/1999/02/22-rdf-syntax-ns#type","value":"http://www.w3.org/2002/07/owl#AnnotationProperty"},{"type":"http://www.w3.org/2000/01/rdf-schema#range","value":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#textArea"},{"type":"Semantic_Type","value":"Conceptual Entity"}]}
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get root concepts

Return all root concepts for the specified terminology.

Command: `pytest test_concept_tests.py::test_get_roots`

```{.python}
[{"code":"C12913","name":"Abnormal Cell"},{"code":"C43431","name":"Activity"},{"code":"C12219","name":"Anatomic Structure, System, or Substance"},{"code":"C20633","name":"Biochemical Pathway"},{"code":"C17828","name":"Biological Process"},{"code":"C12218","name":"Chemotherapy Regimen or Agent Combination"},{"code":"C20181","name":"Conceptual Entity"},{"code":"C20047","name":"Diagnostic or Prognostic Factor"},{"code":"C7057","name":"Disease, Disorder or Finding"},{"code":"C1908","name":"Drug, Food, Chemical or Biomedical Material"},{"code":"C22188","name":"Experimental Organism Anatomical Concept"},{"code":"C22187","name":"Experimental Organism Diagnosis"},{"code":"C16612","name":"Gene"},{"code":"C26548","name":"Gene Product"},{"code":"C97325","name":"Manufactured Object"},{"code":"C3910","name":"Molecular Abnormality"},{"code":"C14250","name":"Organism"},{"code":"C20189","name":"Property or Attribute"},{"code":"C28428","name":"Retired Concept"}]
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get root paths from code

Return paths to the root concept from a specified terminology and code.

Command: `pytest test_concept_tests.py::test_get_path_to_root_by_code`

```{.python}
[[{"associations":[{"highlight":"string","qualifiers":[{"code":"string","type":"string","value":"string"}],"relatedCode":"string","relatedName":"string","type":"string"}],"children":[null],"code":"string","definitions":[{"definition":"string","highlight":"string","qualifiers":[{"code":"string","type":"string","value":"string"}],"source":"string","type":"string"}],"disjointWith":[{"highlight":"string","qualifiers":[{"code":"string","type":"string","value":"string"}],"relatedCode":"string","relatedName":"string","type":"string"}],"highlight":"string","highlights":{"additionalProp1":"string","additionalProp2":"string","additionalProp3":"string"},"inverseAssociations":[{"highlight":"string","qualifiers":[{"code":"string","type":"string","value":"string"}],"relatedCode":"string","relatedName":"string","type":"string"}],"inverseRoles":[{"highlight":"string","qualifiers":[{"code":"string","type":"string","value":"string"}],"relatedCode":"string","relatedName":"string","type":"string"}],"leaf":true,"level":0,"maps":[{"targetCode":"string","targetName":"string","targetTermGroup":"string","targetTerminology":"string","targetTerminologyVersion":"string","type":"string"}],"name":"string","parents":[null],"properties":[{"code":"string","highlight":"string","qualifiers":[{"code":"string","type":"string","value":"string"}],"type":"string","value":"string"}],"roles":[{"highlight":"string","qualifiers":[{"code":"string","type":"string","value":"string"}],"relatedCode":"string","relatedName":"string","type":"string"}],"synonyms":[{"code":"string","highlight":"string","name":"string","qualifiers":[{"code":"string","type":"string","value":"string"}],"source":"string","subSource":"string","termGroup":"string","type":"string"}],"terminology":"string","version":"string"}]]
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

Return paths from the root concept from a specified terminology and code.

Command: `pytest test_concept_tests.py::test_get_path_from_root_by_code`

```{.python}
[[{"code":"C7057","name":"Disease, Disorder or Finding","level":0},{"code":"C2991","name":"Disease or Disorder","level":1},{"code":"C3262","name":"Neoplasm","level":2},{"code":"C4741","name":"Neoplasm by Morphology","level":3},{"code":"C7058","name":"Melanocytic Neoplasm","level":4},{"code":"C3224","name":"Melanoma","level":5}],[{"code":"C7057","name":"Disease, Disorder or Finding","level":0},{"code":"C2991","name":"Disease or Disorder","level":1},{"code":"C3262","name":"Neoplasm","level":2},{"code":"C7062","name":"Neoplasm by Special Category","level":3},{"code":"C9305","name":"Malignant Neoplasm","level":4},{"code":"C3224","name":"Melanoma","level":5}]]
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get ancestor paths from code

Return paths to the root concept for a specified terminology and code.

Command: `pytest test_concept_tests.py::test_get_ancestor_paths_from_code`

```{.python}
[[{"code":"C3224","name":"Melanoma","level":0},{"code":"C7058","name":"Melanocytic Neoplasm","level":1},{"code":"C4741","name":"Neoplasm by Morphology","level":2},{"code":"C3262","name":"Neoplasm","level":3},{"code":"C2991","name":"Disease or Disorder","level":4}],[{"code":"C3224","name":"Melanoma","level":0},{"code":"C9305","name":"Malignant Neoplasm","level":1},{"code":"C7062","name":"Neoplasm by Special Category","level":2},{"code":"C3262","name":"Neoplasm","level":3},{"code":"C2991","name":"Disease or Disorder","level":4}]]
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get subtree

Return an entire subtree graph from the root concepts to a specified node. This call is specifically tuned to support a tree-view based hierarchy browser in a UI.

Command: `pytest test_concept_tests.py::test_get_subtree`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by search term

Get concepts matching a search term within a specified terminology.

Command: `pytest test_concept_tests.py::test_get_concept`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by search term (restrict by concept status)

Get concepts matching a search term within a specified terminology and restrict the search results by concept status of "Header_Concept".

Command: `pytest test_concept_tests.py::test_get_concept_by_concept_status`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by search term (restrict by contributing source)

Get concepts matching a search term within a specified terminology and restrict the search results by a contributing source of "CDISC".

Command: `pytest test_concept_tests.py::test_get_concept_by_contributing_source`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by search term (restrict by definition source)

Get concepts matching a search term within a specified terminology and restrict the search results by a definition source of "NCI".

Command: `pytest test_concept_tests.py::test_get_concept_by_definition_source`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by search term (restrict by definition type)

Get concepts matching a search term within a specified terminology and restrict the search results by a definition type of "P97".

Command: `pytest test_concept_tests.py::test_get_concept_by_definition_type`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by search term (restrict by synonym source)

Get concepts matching a search term within a specified terminology and restrict the search results by a synonym source of "NCI" and synonymTermGroup of "PT".

Command: `pytest test_concept_tests.py::test_get_concept_by_synonym_source`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by search term (restrict by synonym type)

Get concepts matching a search term within a specified terminology and restrict the search results by a synonym type of "FULL_SYN".

Command: `pytest test_concept_tests.py::test_get_concept_by_synonym_type`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by search term (using type=match)

Get concepts matching a search term within a specified terminology and a search type of "match".

Command: `pytest test_concept_tests.py::test_get_concept_by_search_term_match`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by search term (using type=startsWith)

Get concepts matching a search term within a specified terminology and a search type of "startsWith".

Command: `pytest test_concept_tests.py::test_get_concept_by_search_term_starts_with`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by search term (using type=phrase)

Get concepts matching a search term within a specified terminology and a search type of "phrase".

Command: `pytest test_concept_tests.py::test_get_concept_by_search_term_phrase`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by search term (using type=fuzzy)

Get concepts matching a search term within a specified terminology and a search type of "fuzzy".

Command: `pytest test_concept_tests.py::test_get_concept_by_search_term_fuzzy`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by search term (using type=or)

Get concepts matching a search term within a specified terminology and a search type of "or".

Command: `pytest test_concept_tests.py::test_get_concept_by_search_term_or`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by search term (using type=and)

Get concepts matching a search term within a specified terminology and a search type of "and".

Command: `pytest test_concept_tests.py::test_get_concept_by_search_term_and`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by search term (with highlights)

Get concepts matching a search term within a specified terminology and include synonyms and highlighted text in the response.

Command: `pytest test_concept_tests.py::test_get_concept_by_search_term_highlights`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concept by subset

Get concepts matching a search term within a specified terminology and subset.

Command: `pytest test_concept_tests.py::test_get_concept_by_subset`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get all subsets

Get all subsets for a specified terminology.

Command: `pytest test_metadata_tests.py::test_get_subsets`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get subset by code

Get subset for a specified terminology and code.

Command: `pytest test_metadata_tests.py::test_get_subset_by_code`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get subset members by code

Get subset members for a specified terminology and code.

Command: `pytest test_metadata_tests.py::test_get_subset_members_by_code`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by SPARQL without prefix

Get concepts for a specified SPARQL query without prefixes.

Command: `pytest test_concept_tests.py::test_get_concepts_by_sparql_query_with_prefix`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by SPARQL with prefix

Get concepts for a specified SPARQL query with prefixes.

Command: `pytest test_concept_tests.py::test_get_concepts_by_sparql_query_with_prefix`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get SPARQL bindings from query

Get SPARQL bindings for a specified SPARQL query.

Command: `pytest test_concept_tests.py::test_get_sparql_bindings`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)
