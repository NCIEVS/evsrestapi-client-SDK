EVSRESTAPI client SDK: Java Tutorial
======================================

This tutorial shows how to use a locally defined Java client to interact with the EVSREST API.

Prerequisites
-------------

* JDK 11 must be installed

The various scripts make use of the `src/main/resources/url.properties` file to define the EVSRESTAPI endpoint that the
java client will connect to.

Building the Code
-----------------
Building the java-examples should be as simple as running the following command from
this directory.

```
./gradlew clean build
```

This will invoke Gradle to build the model objects and the clients themselves and then
will also run the unit tests which demonstrate use of the client to make actual API
calls against EVSRESTAPI.

Sample Java Calls
-----------------

The following examples are exhibited by various unit tests defined in the code in
`src/test/java`.

- [Get terminologies](#get-terminologies)
- [Get concept by code (minimal information)](#get-concept-by-code-minimal-information)
- [Get concepts by list (minimal information)](#get-concepts-by-list-minimal-information)
- [Get concept by code (summary information)](#get-concept-by-code-summary-information)
- [Get concept by code (full information)](#get-concept-by-code-full-information)
- [Get concept by code (custom include)](#get-concept-by-code-custom-include)
- [Get concept part](#get-concept-part)
- [Get concept descendants](#get-descendants)
- [Get all properties](#get-all-properties)
- [Get property by code (or label)](#get-property-by-code-or-label)
- [Get all qualifiers](#get-all-qualifiers)
- [Get qualifier by code (or label)](#get-qualifier-by-code-or-label)
- [Get qualifier values by code (or label)](#get-qualifier-values-by-code-or-label)
- [Get all roles](#get-all-roles)
- [Get role by code (or label)](#get-role-by-code-or-label)
- [Get all associations](#get-all-associations)
- [Get association by code (or label)](#get-association-by-code-or-label)
- [Get all term types](#get-all-term-types)
- [Get root concepts](#get-root-concepts)
- [Get paths to/from root from a code](#get-paths-to-from-root-from-a-code)
- [Get paths to an ancestor code from a code](#get-paths-to-an-ancestor-code-from-a-code)
- [Get subtree](#get-subtree)
- [Find concepts by search term (use paging to get only first 5 results)](#find-concepts-by-search-term)
- [Find concepts by search term (restrict by concept status)](#find-concepts-by-search-term-restrict-by-concept-status)
- [Find concepts by search term (restrict by contributing source)](#find-concepts-by-search-term-restrict-by-contributing-source)
- [Find concepts by search term (restrict by definition source)](#find-concepts-by-search-term-restrict-by-definition-source)
- [Find concepts by search term (restrict by synonym source and termgroup)](#find-concepts-by-search-term-restrict-by-synonym-source-and-termgroup)
- [Find concepts by search term (where search term is a code)](#find-concepts-by-search-term-where-search-term-is-a-code)
- [Find concepts by search term (using type=match)](#find-concepts-by-search-term-using-type-match)
- [Find concepts by search term (using type=startsWith)](#find-concepts-by-search-term-using-type-startswith)
- [Find concepts by search term (using type=phrase)](#find-concepts-by-search-term-using-type-phrase)
- [Find concepts by search term (using type=fuzzy)](#find-concepts-by-search-term-using-type-fuzzy)
- [Find concepts by search term (using type=AND)](#find-concepts-by-search-term-using-type-and)
- [Find concepts by search term (using type=OR)](#find-concepts-by-search-term-using-type-or)
- [Find concepts by search term (with highlights)](#find-concepts-by-search-term-with-highlights)
- [Find concepts by property](#find-concepts-by-property)
- [Get all subsets](#get-all-subsets)
- [Get subset by code](#get-subset-by-code)
- [Get subset members by subset code](#get-subset-members-by-code)

### Get terminologies

`MetadataTests.testGetTerminologies()` - Return all loaded terminologies currently hosted by the API.

```
2021-12-08T20:48:24-05:00 INFO  : Get terminologies
2021-12-08T20:48:24-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:48:24-05:00 INFO  :   ncit = {"terminology":"ncit","version":"21.12a","date":"December 6, 2021","name":"NCI Thesaurus 21.12a","description":"NCI Thesaurus, a controlled vocabulary in support of NCI administrative and scientific activities. Produced by the Enterprise Vocabulary System (EVS), a project by the NCI Center for Biomedical Informatics and Information Technology. National Cancer Institute, National Institutes of Health, Bethesda, MD 20892, U.S.A.","graph":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl","source":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl","terminologyVersion":"ncit_21.12a","latest":true,"tags":{"weekly":"true"},"indexName":"concept_ncit_2112a","objectIndexName":"evs_object_ncit_2112a","metadata":{"code":"NHC0","conceptStatus":"P310","retiredStatusValue":"Retired_Concept","preferredName":"P108","relationshipToTarget":"P393","synonym":["P90","P108","P107"],"synonymTermType":"P383","synonymSource":"P384","synonymCode":"P385","synonymSubSource":"P386","definition":["P325","P97"],"definitionSource":"P378","mapRelation":"P393","map":"P375","mapTarget":"P395","mapTargetTermType":"P394","mapTargetTerminology":"P396","mapTargetTerminologyVersion":"P397","propertyNames":{"NHC0":"code","P107":"Display_Name","P108":"Preferred_Name","P97":"DEFINITION","P325":"ALT_DEFINITION","P90":"FULL_SYN","rdfs:label":"label","P375":"Maps_To"},"subsetMember":["A8"],"monthlyDb":"NCIT2","subset":["C54443"]}}
2021-12-08T20:48:24-05:00 INFO  :   ncit = {"terminology":"ncit","version":"21.11e","date":"November 29, 2021","name":"NCI Thesaurus 21.11e","description":"NCI Thesaurus, a controlled vocabulary in support of NCI administrative and scientific activities. Produced by the Enterprise Vocabulary System (EVS), a project by the NCI Center for Biomedical Informatics and Information Technology. National Cancer Institute, National Institutes of Health, Bethesda, MD 20892, U.S.A.","graph":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl","source":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl","terminologyVersion":"ncit_21.11e","latest":true,"tags":{"monthly":"true"},"indexName":"concept_ncit_2111e","objectIndexName":"evs_object_ncit_2111e","metadata":{"code":"NHC0","conceptStatus":"P310","retiredStatusValue":"Retired_Concept","preferredName":"P108","relationshipToTarget":"P393","synonym":["P90","P108","P107"],"synonymTermType":"P383","synonymSource":"P384","synonymCode":"P385","synonymSubSource":"P386","definition":["P325","P97"],"definitionSource":"P378","mapRelation":"P393","map":"P375","mapTarget":"P395","mapTargetTermType":"P394","mapTargetTerminology":"P396","mapTargetTerminologyVersion":"P397","propertyNames":{"NHC0":"code","P107":"Display_Name","P108":"Preferred_Name","P97":"DEFINITION","P325":"ALT_DEFINITION","P90":"FULL_SYN","rdfs:label":"label","P375":"Maps_To"},"subsetMember":["A8"],"monthlyDb":"NCIT2","subset":["C54443"]}}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept by code (minimal information)

`ConceptTests.testGetConceptByCode()` - Return concept object with minimal information for a specified code.

```
2021-12-08T20:48:55-05:00 INFO  : Get concept by code - C3224
2021-12-08T20:48:55-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:48:55-05:00 INFO  :   concept = {"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","leaf":false}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concepts by list (minimal information)

`ConceptTests.testGetConceptsByListMinimal()` - Return concept objects with minimal information for a specified list of
codes.

```
2021-12-08T20:49:17-05:00 INFO  : Get concepts by list - [C3224, C3910]
2021-12-08T20:49:17-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:49:17-05:00 INFO  :   concepts = [{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C3910","name":"Molecular Abnormality","terminology":"ncit","version":"21.11e","leaf":false}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept by code (summary information)

`ConceptTests.testGetConceptByListSummary()` - Return summary concept information for a given terminology and code

```
2021-12-08T20:49:35-05:00 INFO  : Get concept by list - [C3224]
2021-12-08T20:49:35-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:49:35-05:00 INFO  :   concepts = [{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","leaf":false,"synonyms":[{"name":"Melanoma","type":"Display_Name"},{"name":"Malignant Melanoma","termGroup":"SY","type":"FULL_SYN","source":"NCI"},{"name":"Malignant Melanoma","termGroup":"SY","type":"FULL_SYN","source":"CDISC"},{"name":"Malignant Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CPTAC"},{"name":"Melanoma","termGroup":"DN","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CTEP","code":"10053571","subSource":"SDC"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"GDC"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"Cellosaurus"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Melanoma","termGroup":"SY","type":"FULL_SYN","source":"caDSR"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"NICHD"},{"name":"melanoma","termGroup":"PT","type":"FULL_SYN","source":"NCI-GLOSS","code":"CDR0000045135"},{"name":"MELANOMA, MALIGNANT","termGroup":"PT","type":"FULL_SYN","source":"CDISC"},{"name":"Melanoma, NOS","termGroup":"SY","type":"FULL_SYN","source":"GDC"},{"name":"Melanoma","type":"Preferred_Name"}],"definitions":[{"definition":"A form of cancer that begins in melanocytes (cells that make the pigment melanin). It may begin in a mole (skin melanoma), but can also begin in other pigmented tissues, such as in the eye or in the intestines.","type":"ALT_DEFINITION","source":"NCI-GLOSS"},{"definition":"A malignant neoplasm composed of melanocytes.","type":"ALT_DEFINITION","source":"CDISC"},{"definition":"A malignant neoplasm comprised of melanocytes typically arising in the skin.","type":"ALT_DEFINITION","source":"NICHD"},{"definition":"A malignant, usually aggressive tumor composed of atypical, neoplastic melanocytes. Most often, melanomas arise in the skin (cutaneous melanomas) and include the following histologic subtypes: superficial spreading melanoma, nodular melanoma, acral lentiginous melanoma, and lentigo maligna melanoma. Cutaneous melanomas may arise from acquired or congenital melanocytic or dysplastic nevi. Melanomas may also arise in other anatomic sites including the gastrointestinal system, eye, urinary tract, and reproductive system. Melanomas frequently metastasize to lymph nodes, liver, lungs, and brain.","type":"DEFINITION","source":"NCI"}],"properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Contributing_Source","value":"Cellosaurus"},{"type":"Contributing_Source","value":"CPTAC"},{"type":"Contributing_Source","value":"CTEP"},{"type":"Contributing_Source","value":"CTRP"},{"type":"Contributing_Source","value":"GDC"},{"type":"Contributing_Source","value":"MedDRA"},{"type":"Contributing_Source","value":"NICHD"},{"type":"ICD-O-3_Code","value":"8720/3"},{"type":"Legacy Concept Name","value":"Melanoma"},{"type":"Neoplastic_Status","value":"Malignant"},{"type":"Semantic_Type","value":"Neoplastic Process"},{"type":"UMLS_CUI","value":"C0025202"}]}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept by code (full information)

`ConceptTests.testGetConceptByListFull()` - Return full concept information for a given terminology and code.

```
2021-12-08T20:49:55-05:00 INFO  : Get concept by list - [C3224]
2021-12-08T20:49:55-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:49:55-05:00 INFO  :   concepts = [{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","leaf":false,"synonyms":[{"name":"Melanoma","type":"Display_Name"},{"name":"Malignant Melanoma","termGroup":"SY","type":"FULL_SYN","source":"NCI"},{"name":"Malignant Melanoma","termGroup":"SY","type":"FULL_SYN","source":"CDISC"},{"name":"Malignant Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CPTAC"},{"name":"Melanoma","termGroup":"DN","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CTEP","code":"10053571","subSource":"SDC"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"GDC"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"Cellosaurus"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Melanoma","termGroup":"SY","type":"FULL_SYN","source":"caDSR"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"NICHD"},{"name":"melanoma","termGroup":"PT","type":"FULL_SYN","source":"NCI-GLOSS","code":"CDR0000045135"},{"name":"MELANOMA, MALIGNANT","termGroup":"PT","type":"FULL_SYN","source":"CDISC"},{"name":"Melanoma, NOS","termGroup":"SY","type":"FULL_SYN","source":"GDC"},{"name":"Melanoma","type":"Preferred_Name"}],"definitions":[{"definition":"A form of cancer that begins in melanocytes (cells that make the pigment melanin). It may begin in a mole (skin melanoma), but can also begin in other pigmented tissues, such as in the eye or in the intestines.","type":"ALT_DEFINITION","source":"NCI-GLOSS"},{"definition":"A malignant neoplasm composed of melanocytes.","type":"ALT_DEFINITION","source":"CDISC"},{"definition":"A malignant neoplasm comprised of melanocytes typically arising in the skin.","type":"ALT_DEFINITION","source":"NICHD"},{"definition":"A malignant, usually aggressive tumor composed of atypical, neoplastic melanocytes. Most often, melanomas arise in the skin (cutaneous melanomas) and include the following histologic subtypes: superficial spreading melanoma, nodular melanoma, acral lentiginous melanoma, and lentigo maligna melanoma. Cutaneous melanomas may arise from acquired or congenital melanocytic or dysplastic nevi. Melanomas may also arise in other anatomic sites including the gastrointestinal system, eye, urinary tract, and reproductive system. Melanomas frequently metastasize to lymph nodes, liver, lungs, and brain.","type":"DEFINITION","source":"NCI"}],"properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Contributing_Source","value":"Cellosaurus"},{"type":"Contributing_Source","value":"CPTAC"},{"type":"Contributing_Source","value":"CTEP"},{"type":"Contributing_Source","value":"CTRP"},{"type":"Contributing_Source","value":"GDC"},{"type":"Contributing_Source","value":"MedDRA"},{"type":"Contributing_Source","value":"NICHD"},{"type":"ICD-O-3_Code","value":"8720/3"},{"type":"Legacy Concept Name","value":"Melanoma"},{"type":"Neoplastic_Status","value":"Malignant"},{"type":"Semantic_Type","value":"Neoplastic Process"},{"type":"UMLS_CUI","value":"C0025202"}],"children":[{"code":"C3802","name":"Amelanotic Melanoma","leaf":false},{"code":"C8410","name":"Breast Melanoma","leaf":true},{"code":"C131506","name":"Childhood Melanoma","leaf":true},{"code":"C3510","name":"Cutaneous Melanoma","leaf":false},{"code":"C4236","name":"Epithelioid Cell Melanoma","leaf":false},{"code":"C9499","name":"Melanomatosis","leaf":false},{"code":"C8925","name":"Metastatic Melanoma","leaf":false},{"code":"C66756","name":"Mixed Epithelioid and Spindle Cell Melanoma","leaf":false},{"code":"C8711","name":"Non-Cutaneous Melanoma","leaf":false},{"code":"C8562","name":"Ocular Melanoma","leaf":false},{"code":"C118828","name":"Orbital Melanoma","leaf":true},{"code":"C162547","name":"Penile Melanoma","leaf":false},{"code":"C7087","name":"Recurrent Melanoma","leaf":false},{"code":"C147983","name":"Refractory Melanoma","leaf":false},{"code":"C4228","name":"Regressing Melanoma","leaf":false},{"code":"C4237","name":"Spindle Cell Melanoma","leaf":false},{"code":"C148517","name":"Unresectable Melanoma","leaf":false}],"parents":[{"code":"C9305","name":"Malignant Neoplasm"},{"code":"C7058","name":"Melanocytic Neoplasm"}],"associations":[{"type":"Concept_In_Subset","relatedCode":"C77526","relatedName":"CDISC SEND Terminology"},{"type":"Concept_In_Subset","relatedCode":"C88025","relatedName":"CDISC SEND Tumor Findings Results Terminology"},{"type":"Concept_In_Subset","relatedCode":"C165258","relatedName":"Cellosaurus Disease Terminology"},{"type":"Concept_In_Subset","relatedCode":"C61410","relatedName":"Clinical Data Interchange Standards Consortium Terminology"},{"type":"Concept_In_Subset","relatedCode":"C138188","relatedName":"Clinical Trials Search-Application Programming Interface Disease Category Terminology"},{"type":"Concept_In_Subset","relatedCode":"C156953","relatedName":"CPTAC Baseline Medical Forms Terminology"},{"type":"Concept_In_Subset","relatedCode":"C158520","relatedName":"CPTAC Codelists Terminology"},{"type":"Concept_In_Subset","relatedCode":"C159415","relatedName":"CPTAC Melanoma Baseline Form"},{"type":"Concept_In_Subset","relatedCode":"C156966","relatedName":"CPTAC Neoplasms Codelist"},{"type":"Concept_In_Subset","relatedCode":"C156952","relatedName":"CPTAC Terminology"},{"type":"Concept_In_Subset","relatedCode":"C157534","relatedName":"CPTAC Uveal Melanoma Baseline Form"},{"type":"Concept_In_Subset","relatedCode":"C118168","relatedName":"CTRP Disease Terminology"},{"type":"Concept_In_Subset","relatedCode":"C116977","relatedName":"CTRP Terminology"},{"type":"Concept_In_Subset","relatedCode":"C138190","relatedName":"CTS-API Disease Main Type Terminology"},{"type":"Is_Value_For_GDC_Property","relatedCode":"C178243","relatedName":"Family Cancer History Relative Primary Diagnosis Question"},{"type":"Concept_In_Subset","relatedCode":"C157711","relatedName":"GDC Terminology"},{"type":"Concept_In_Subset","relatedCode":"C177537","relatedName":"GDC Value Terminology"},{"type":"Is_Value_For_GDC_Property","relatedCode":"C176985","relatedName":"Histology ICD-O Morphology Code"},{"type":"Is_Value_For_GDC_Property","relatedCode":"C177621","relatedName":"ICD-O-3 Morphology Term Diagnosis Question"},{"type":"Concept_In_Subset","relatedCode":"C168658","relatedName":"Mapped ICDO3.1 Morphology PT Terminology"},{"type":"Concept_In_Subset","relatedCode":"C168657","relatedName":"Mapped ICDO3.1 Morphology Terminology"},{"type":"Concept_In_Subset","relatedCode":"C168655","relatedName":"Mapped ICDO3.1 Terminology"},{"type":"Concept_In_Subset","relatedCode":"C168662","relatedName":"Mapped ICDO3.2 Morphology PT Terminology"},{"type":"Concept_In_Subset","relatedCode":"C168661","relatedName":"Mapped ICDO3.2 Morphology Terminology"},{"type":"Concept_In_Subset","relatedCode":"C168656","relatedName":"Mapped ICDO3.2 Terminology"},{"type":"Concept_In_Subset","relatedCode":"C103113","relatedName":"NCI CTEP SDC Melanoma Sub-Category Terminology"},{"type":"Concept_In_Subset","relatedCode":"C102905","relatedName":"NCI CTEP Simplified Disease Classification Terminology"},{"type":"Concept_In_Subset","relatedCode":"C126659","relatedName":"NCIt Neoplasm Core Terminology"},{"type":"Concept_In_Subset","relatedCode":"C90259","relatedName":"NICHD Terminology"},{"type":"Concept_In_Subset","relatedCode":"C118464","relatedName":"Pediatric Adverse Events Terminology"},{"type":"Neoplasm_Has_Special_Category","relatedCode":"C9292","relatedName":"Solid Neoplasm"}],"inverseAssociations":[{"type":"Has_GDC_Value","relatedCode":"C178243","relatedName":"Family Cancer History Relative Primary Diagnosis Question"},{"type":"Has_GDC_Value","relatedCode":"C176985","relatedName":"Histology ICD-O Morphology Code"},{"type":"Has_GDC_Value","relatedCode":"C177621","relatedName":"ICD-O-3 Morphology Term Diagnosis Question"}],"roles":[{"type":"Disease_Excludes_Finding","relatedCode":"C36122","relatedName":"Benign Cellular Infiltrate"},{"type":"Disease_May_Have_Finding","relatedCode":"C43268","relatedName":"HMB-45-Positive Neoplastic Cells Present"},{"type":"Disease_Has_Abnormal_Cell","relatedCode":"C12917","relatedName":"Malignant Cell"},{"type":"Disease_Has_Finding","relatedCode":"C36115","relatedName":"Malignant Cellular Infiltrate"},{"type":"Disease_Has_Normal_Cell_Origin","relatedCode":"C12591","relatedName":"Melanocyte"},{"type":"Disease_Has_Abnormal_Cell","relatedCode":"C36873","relatedName":"Melanoma Cell"},{"type":"Disease_Has_Abnormal_Cell","relatedCode":"C12922","relatedName":"Neoplastic Cell"},{"type":"Disease_Has_Abnormal_Cell","relatedCode":"C36862","relatedName":"Neoplastic Melanocyte"},{"type":"Disease_May_Have_Finding","relatedCode":"C40993","relatedName":"S-100-Positive Neoplastic Cells Present"}],"inverseRoles":[{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C21390","relatedName":"Beta/Gamma Crystallin Domain-Containing Protein 1"},{"type":"Disease_May_Have_Associated_Disease","relatedCode":"C36101","relatedName":"BRCA2-Associated Hereditary Breast and Ovarian Cancer Syndrome"},{"type":"Regimen_Has_Accepted_Use_For_Disease","relatedCode":"C10303","relatedName":"CDB Regimen"},{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C26083","relatedName":"Chondroitin Sulfate Proteoglycan 4"},{"type":"Gene_Associated_With_Disease","relatedCode":"C21389","relatedName":"CRYBG1 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C54321","relatedName":"CRYBG1 wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C21470","relatedName":"CSAG2 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C54542","relatedName":"CSAG2 wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C81903","relatedName":"CSAG3 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C81904","relatedName":"CSAG3 wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C24316","relatedName":"CSPG4 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C52436","relatedName":"CSPG4 wt Allele"},{"type":"Regimen_Has_Accepted_Use_For_Disease","relatedCode":"C63525","relatedName":"CVD Regimen"},{"type":"Regimen_Has_Accepted_Use_For_Disease","relatedCode":"C63785","relatedName":"CVD-Aldesleukin-Interferon Alfa-2b Regimen"},{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C17680","relatedName":"Cyclin-Dependent Kinase 4"},{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C17786","relatedName":"Cyclin-Dependent Kinase Inhibitor 2A"},{"type":"Regimen_Has_Accepted_Use_For_Disease","relatedCode":"C63782","relatedName":"Dacarbazine/Interferon Alfa Regimen"},{"type":"Regimen_Has_Accepted_Use_For_Disease","relatedCode":"C63781","relatedName":"Dartmouth Regimen"},{"type":"Gene_Associated_With_Disease","relatedCode":"C82885","relatedName":"DCT Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C82886","relatedName":"DCT wt Allele"},{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C21569","relatedName":"DNA Repair Protein XRCC3"},{"type":"Disease_May_Have_Associated_Disease","relatedCode":"C27264","relatedName":"Familial Atypical Mole Melanoma Syndrome"},{"type":"Disease_May_Have_Associated_Disease","relatedCode":"C8495","relatedName":"Hereditary Retinoblastoma"},{"type":"Gene_Associated_With_Disease","relatedCode":"C20765","relatedName":"KISS1 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C54288","relatedName":"KISS1 wt Allele"},{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C2646","relatedName":"L-Dopachrome Tautomerase"},{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C26331","relatedName":"Latent-Transforming Growth Factor Beta-Binding Protein 2"},{"type":"Gene_Associated_With_Disease","relatedCode":"C24561","relatedName":"LTBP2 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C51270","relatedName":"LTBP2 wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C21261","relatedName":"MCAM Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C54308","relatedName":"MCAM wt Allele"},{"type":"Gene_Product_Is_Biomarker_Of","relatedCode":"C17513","relatedName":"Melanoma-Associated Antigen 3"},{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C21141","relatedName":"Metastasis-Suppressor KiSS-1"},{"type":"Gene_Associated_With_Disease","relatedCode":"C81756","relatedName":"MIR221 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C82171","relatedName":"MIR221 wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C80700","relatedName":"MIRLET7A1 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C81825","relatedName":"MIRLET7A1 wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C80701","relatedName":"MIRLET7A3 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C81826","relatedName":"MIRLET7A3 wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C80702","relatedName":"MIRLET7B Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C81853","relatedName":"MIRLET7B wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C28629","relatedName":"MLANA Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C54313","relatedName":"MLANA wt Allele"},{"type":"Disease_Has_Associated_Disease","relatedCode":"C40001","relatedName":"Ovarian Dermoid Cyst with Melanoma"},{"type":"Gene_Associated_With_Disease","relatedCode":"C18336","relatedName":"RAB8A Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C52547","relatedName":"RAB8A wt Allele"},{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C84349","relatedName":"Tumor Suppressor ARF"},{"type":"Disease_May_Have_Associated_Disease","relatedCode":"C3447","relatedName":"Werner Syndrome"},{"type":"Gene_Associated_With_Disease","relatedCode":"C20335","relatedName":"XRCC3 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C51014","relatedName":"XRCC3 wt Allele"}],"maps":[{"type":"Related To","targetName":"8720/3","targetTermGroup":"PT","targetCode":"morphology","targetTerminology":"GDC"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermGroup":"PT","targetCode":"8720/3","targetTerminology":"ICDO3","targetTerminologyVersion":"3.2"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermGroup":"PT","targetCode":"8720/3","targetTerminology":"ICDO3","targetTerminologyVersion":"3.1"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermGroup":"PT","targetCode":"primary_diagnosis","targetTerminology":"GDC"},{"type":"Has Synonym","targetName":"Melanoma, NOS","targetTermGroup":"PT","targetCode":"primary_diagnosis","targetTerminology":"GDC"},{"type":"Has Synonym","targetName":"Melanoma","targetTermGroup":"LLT","targetCode":"10053571","targetTerminology":"MedDRA","targetTerminologyVersion":"18.1"},{"type":"Has Synonym","targetName":"Melanoma","targetTermGroup":"PT","targetCode":"relationship_primary_diagnosis","targetTerminology":"GDC"}]}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept by code (custom include)

`ConceptTests.testGetConceptByListCustom()` - Return custom concept information for a given terminology and code.

Return custom concept information for a given terminology and code. To show a range
of options, in this case, the request asks for synonyms, children, maps, and inverse
associations.

```
2021-12-08T20:50:29-05:00 INFO  : Get concept by list - [C3224]
2021-12-08T20:50:29-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:50:29-05:00 INFO  :   concepts = [{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","leaf":false,"synonyms":[{"name":"Melanoma","type":"Display_Name"},{"name":"Malignant Melanoma","termGroup":"SY","type":"FULL_SYN","source":"NCI"},{"name":"Malignant Melanoma","termGroup":"SY","type":"FULL_SYN","source":"CDISC"},{"name":"Malignant Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CPTAC"},{"name":"Melanoma","termGroup":"DN","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CTEP","code":"10053571","subSource":"SDC"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"GDC"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"Cellosaurus"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Melanoma","termGroup":"SY","type":"FULL_SYN","source":"caDSR"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"NICHD"},{"name":"melanoma","termGroup":"PT","type":"FULL_SYN","source":"NCI-GLOSS","code":"CDR0000045135"},{"name":"MELANOMA, MALIGNANT","termGroup":"PT","type":"FULL_SYN","source":"CDISC"},{"name":"Melanoma, NOS","termGroup":"SY","type":"FULL_SYN","source":"GDC"},{"name":"Melanoma","type":"Preferred_Name"}],"children":[{"code":"C3802","name":"Amelanotic Melanoma","leaf":false},{"code":"C8410","name":"Breast Melanoma","leaf":true},{"code":"C131506","name":"Childhood Melanoma","leaf":true},{"code":"C3510","name":"Cutaneous Melanoma","leaf":false},{"code":"C4236","name":"Epithelioid Cell Melanoma","leaf":false},{"code":"C9499","name":"Melanomatosis","leaf":false},{"code":"C8925","name":"Metastatic Melanoma","leaf":false},{"code":"C66756","name":"Mixed Epithelioid and Spindle Cell Melanoma","leaf":false},{"code":"C8711","name":"Non-Cutaneous Melanoma","leaf":false},{"code":"C8562","name":"Ocular Melanoma","leaf":false},{"code":"C118828","name":"Orbital Melanoma","leaf":true},{"code":"C162547","name":"Penile Melanoma","leaf":false},{"code":"C7087","name":"Recurrent Melanoma","leaf":false},{"code":"C147983","name":"Refractory Melanoma","leaf":false},{"code":"C4228","name":"Regressing Melanoma","leaf":false},{"code":"C4237","name":"Spindle Cell Melanoma","leaf":false},{"code":"C148517","name":"Unresectable Melanoma","leaf":false}],"inverseAssociations":[{"type":"Has_GDC_Value","relatedCode":"C178243","relatedName":"Family Cancer History Relative Primary Diagnosis Question"},{"type":"Has_GDC_Value","relatedCode":"C176985","relatedName":"Histology ICD-O Morphology Code"},{"type":"Has_GDC_Value","relatedCode":"C177621","relatedName":"ICD-O-3 Morphology Term Diagnosis Question"}],"maps":[{"type":"Related To","targetName":"8720/3","targetTermGroup":"PT","targetCode":"morphology","targetTerminology":"GDC"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermGroup":"PT","targetCode":"8720/3","targetTerminology":"ICDO3","targetTerminologyVersion":"3.2"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermGroup":"PT","targetCode":"8720/3","targetTerminology":"ICDO3","targetTerminologyVersion":"3.1"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermGroup":"PT","targetCode":"primary_diagnosis","targetTerminology":"GDC"},{"type":"Has Synonym","targetName":"Melanoma, NOS","targetTermGroup":"PT","targetCode":"primary_diagnosis","targetTerminology":"GDC"},{"type":"Has Synonym","targetName":"Melanoma","targetTermGroup":"LLT","targetCode":"10053571","targetTerminology":"MedDRA","targetTerminologyVersion":"18.1"},{"type":"Has Synonym","targetName":"Melanoma","targetTermGroup":"PT","targetCode":"relationship_primary_diagnosis","targetTerminology":"GDC"}]}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept part

`ConceptTests.testGetConceptPartXXX()` - Return concept part information for a given terminology, concept part, and
code. XXX is a stand-in for the various parts. The actual tests contain calls for Children, Parents, Roles,
Associations, InverseRoles,
InverseAssociations, Maps, and DisjointWith.

Here is a sample of the output for `ConceptTests.testGetConceptPartChildren()`.

```
2021-12-08T20:52:40-05:00 INFO  : Get concept part children - C3224
2021-12-08T20:52:40-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:52:40-05:00 INFO  :   children = [{"code":"C3802","name":"Amelanotic Melanoma","leaf":false}, {"code":"C8410","name":"Breast Melanoma","leaf":true}, {"code":"C131506","name":"Childhood Melanoma","leaf":true}, {"code":"C3510","name":"Cutaneous Melanoma","leaf":false}, {"code":"C4236","name":"Epithelioid Cell Melanoma","leaf":false}, {"code":"C9499","name":"Melanomatosis","leaf":false}, {"code":"C8925","name":"Metastatic Melanoma","leaf":false}, {"code":"C66756","name":"Mixed Epithelioid and Spindle Cell Melanoma","leaf":false}, {"code":"C8711","name":"Non-Cutaneous Melanoma","leaf":false}, {"code":"C8562","name":"Ocular Melanoma","leaf":false}, {"code":"C118828","name":"Orbital Melanoma","leaf":true}, {"code":"C162547","name":"Penile Melanoma","leaf":false}, {"code":"C7087","name":"Recurrent Melanoma","leaf":false}, {"code":"C147983","name":"Refractory Melanoma","leaf":false}, {"code":"C4228","name":"Regressing Melanoma","leaf":false}, {"code":"C4237","name":"Spindle Cell Melanoma","leaf":false}, {"code":"C148517","name":"Unresectable Melanoma","leaf":false}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get descendants

`ConceptTests.testGetDescendants()` - Return concept descendants information for a given terminology and code. The call
client can be constrained by a maxLevel to prevent going deeper than a certain amount. Level 0 entries in the result are
the direct children. The test sets the max level to 4.

```
2021-12-08T20:54:04-05:00 INFO  : Get concept descendants - C3224
2021-12-08T20:54:04-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:54:04-05:00 INFO  :   descendants = [{"code":"C4022","name":"Acral Lentiginous Melanoma","level":3,"leaf":false}, {"code":"C5319","name":"Adult Meningeal Melanoma","level":4,"leaf":true}, {"code":"C155311","name":"Advanced Cutaneous Melanoma of the Extremity","level":3,"leaf":true}, {"code":"C171572","name":"Advanced Cutaneous Melanoma","level":3,"leaf":false}, {"code":"C153169","name":"Advanced Melanoma","level":2,"leaf":false}, {"code":"C180896","name":"Advanced Mucosal Melanoma","level":4,"leaf":true}, {"code":"C180895","name":"Advanced Non-Cutaneous Melanoma","level":3,"leaf":false}, {"code":"C148515","name":"Advanced Uveal Melanoma","level":4,"leaf":false}, {"code":"C4633","name":"Amelanotic Cutaneous Melanoma","level":2,"leaf":true}, {"code":"C3802","name":"Amelanotic Melanoma","level":1,"leaf":false}, {"code":"C4639","name":"Anal Melanoma","level":4,"leaf":true}, {"code":"C4227","name":"Balloon Cell Melanoma","level":2,"leaf":true}, {"code":"C159663","name":"Bladder Melanoma","level":5,"leaf":true}, {"code":"C8410","name":"Breast Melanoma","level":1,"leaf":true}, {"code":"C5505","name":"Central Nervous System Melanoma","level":2,"leaf":false}, {"code":"C40239","name":"Cervical Melanoma","level":5,"leaf":true}, {"code":"C131506","name":"Childhood Melanoma","level":1,"leaf":true}, {"code":"C5318","name":"Childhood Meningeal Melanoma","level":4,"leaf":true}, {"code":"C6102","name":"Choroid Epithelioid Cell Melanoma","level":3,"leaf":true}, {"code":"C4561","name":"Choroid Melanoma","level":3,"leaf":false}, {"code":"C35782","name":"Choroid Mixed Cell Melanoma","level":3,"leaf":true}, {"code":"C6865","name":"Choroid Necrotic Melanoma","level":4,"leaf":true}, {"code":"C6099","name":"Choroid Spindle Cell Melanoma","level":3,"leaf":false}, {"code":"C6861","name":"Choroid Spindle Cell Type A Melanoma","level":4,"leaf":true}, {"code":"C6862","name":"Choroid Spindle Cell Type B Melanoma","level":4,"leaf":true}, {"code":"C140659","name":"Choroidal and Ciliary Body Melanoma by AJCC v8 Stage","level":3,"leaf":false}, {"code":"C6119","name":"Ciliary Body Epithelioid Cell Melanoma","level":3,"leaf":true}, {"code":"C4558","name":"Ciliary Body Melanoma","level":3,"leaf":false}, {"code":"C35783","name":"Ciliary Body Mixed Cell Melanoma","level":3,"leaf":true}, {"code":"C6117","name":"Ciliary Body Spindle Cell Melanoma","level":3,"leaf":false}, {"code":"C6864","name":"Ciliary Body Spindle Cell Type A Melanoma","level":4,"leaf":true}, {"code":"C6863","name":"Ciliary Body Spindle Cell Type B Melanoma","level":4,"leaf":true}, {"code":"C111020","name":"Class 1 Uveal Melanoma","level":4,"leaf":false}, {"code":"C111022","name":"Class 1a Uveal Melanoma","level":5,"leaf":true}, {"code":"C111023","name":"Class 1b Uveal Melanoma","level":5,"leaf":true}, {"code":"C111021","name":"Class 2 Uveal Melanoma","level":4,"leaf":true}, {"code":"C137647","name":"Clinical Stage 0 Cutaneous Melanoma AJCC v8","level":4,"leaf":true}, {"code":"C137648","name":"Clinical Stage I Cutaneous Melanoma AJCC v8","level":4,"leaf":false}, {"code":"C137649","name":"Clinical Stage IA Cutaneous Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C137650","name":"Clinical Stage IB Cutaneous Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C137651","name":"Clinical Stage II Cutaneous Melanoma AJCC v8","level":4,"leaf":false}, {"code":"C137652","name":"Clinical Stage IIA Cutaneous Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C137653","name":"Clinical Stage IIB Cutaneous Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C137654","name":"Clinical Stage IIC Cutaneous Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C137655","name":"Clinical Stage III Cutaneous Melanoma AJCC v8","level":4,"leaf":true}, {"code":"C137656","name":"Clinical Stage IV Cutaneous Melanoma AJCC v8","level":4,"leaf":true}, {"code":"C4550","name":"Conjunctival Melanoma","level":2,"leaf":false}, {"code":"C4553","name":"Corneal Melanoma","level":2,"leaf":true}, {"code":"C128801","name":"Cutaneous Malignant Melanoma 2","level":3,"leaf":true}, {"code":"C90514","name":"Cutaneous Melanoma by AJCC v6 Stage","level":2,"leaf":false}, {"code":"C91231","name":"Cutaneous Melanoma by AJCC v7 Stage","level":2,"leaf":false}, {"code":"C137646","name":"Cutaneous Melanoma by AJCC v8 Clinical Stage","level":3,"leaf":false}, {"code":"C137657","name":"Cutaneous Melanoma by AJCC v8 Pathologic Stage","level":3,"leaf":false}, {"code":"C137645","name":"Cutaneous Melanoma by AJCC v8 Stage","level":2,"leaf":false}, {"code":"C155305","name":"Cutaneous Melanoma of the Extremity","level":2,"leaf":false}, {"code":"C3510","name":"Cutaneous Melanoma","level":1,"leaf":false}, {"code":"C4225","name":"Cutaneous Nodular Melanoma","level":2,"leaf":true}, {"code":"C37257","name":"Desmoplastic Melanoma","level":3,"leaf":false}, {"code":"C48614","name":"Desmoplastic Neurotropic Melanoma","level":4,"leaf":true}, {"code":"C4236","name":"Epithelioid Cell Melanoma","level":1,"leaf":false}, {"code":"C35780","name":"Epithelioid Cell Uveal Melanoma","level":2,"leaf":false}, {"code":"C5707","name":"Esophageal Melanoma","level":4,"leaf":true}, {"code":"C4358","name":"Eyelid Melanoma","level":2,"leaf":true}, {"code":"C5735","name":"Gallbladder Melanoma","level":4,"leaf":true}, {"code":"C178519","name":"Gastric Melanoma","level":4,"leaf":true}, {"code":"C8498","name":"Hereditary Melanoma","level":2,"leaf":false}, {"code":"C165659","name":"High-CSD Melanoma","level":2,"leaf":false}, {"code":"C6100","name":"Intermediate Cell Type Choroid Melanoma","level":4,"leaf":true}, {"code":"C6118","name":"Intermediate Cell Type Ciliary Body Melanoma","level":4,"leaf":true}, {"code":"C6101","name":"Intermediate Cell Type Iris Melanoma","level":4,"leaf":true}, {"code":"C7989","name":"Intermediate Cell Type Uveal Melanoma","level":3,"leaf":false}, {"code":"C5442","name":"Intracranial Melanoma","level":3,"leaf":true}, {"code":"C48607","name":"Invasive Cutaneous Melanoma","level":2,"leaf":true}, {"code":"C174498","name":"Iris Epithelioid Cell Melanoma","level":3,"leaf":true}, {"code":"C9088","name":"Iris Melanoma","level":3,"leaf":false}, {"code":"C174506","name":"Iris Mixed Cell Melanoma","level":3,"leaf":true}, {"code":"C6098","name":"Iris Spindle Cell Melanoma","level":3,"leaf":true}, {"code":"C175345","name":"Lacrimal Drainage System Melanoma","level":2,"leaf":true}, {"code":"C9151","name":"Lentigo Maligna Melanoma","level":3,"leaf":false}, {"code":"C43372","name":"Lentigo Maligna","level":4,"leaf":true}, {"code":"C171285","name":"Locally Advanced Cutaneous Melanoma","level":3,"leaf":true}, {"code":"C148494","name":"Locally Advanced Melanoma","level":2,"leaf":false}, {"code":"C171297","name":"Locally Advanced Non-Cutaneous Melanoma","level":3,"leaf":false}, {"code":"C171296","name":"Locally Advanced Ocular Melanoma","level":3,"leaf":true}, {"code":"C9152","name":"Low-CSD Melanoma","level":2,"leaf":false}, {"code":"C45652","name":"Lung Melanoma","level":2,"leaf":true}, {"code":"C66753","name":"Malignant Melanoma in Precancerous Melanosis","level":2,"leaf":true}, {"code":"C9090","name":"Medium/Large Size Posterior Uveal Melanoma","level":3,"leaf":true}, {"code":"C4240","name":"Melanoma Arising from Blue Nevus","level":2,"leaf":true}, {"code":"C4235","name":"Melanoma Arising in Giant Congenital Nevus","level":3,"leaf":true}, {"code":"C48613","name":"Melanoma in Congenital Melanocytic Nevus","level":2,"leaf":false}, {"code":"C4232","name":"Melanoma in Junctional Nevus","level":2,"leaf":true}, {"code":"C179206","name":"Melanoma Metastatic in the Brain","level":3,"leaf":true}, {"code":"C133504","name":"Melanoma Metastatic in the Central Nervous System","level":2,"leaf":false}, {"code":"C154473","name":"Melanoma of Unknown Primary","level":2,"leaf":true}, {"code":"C9499","name":"Melanomatosis","level":1,"leaf":false}, {"code":"C5317","name":"Meningeal Melanoma","level":3,"leaf":false}, {"code":"C6891","name":"Meningeal Melanomatosis","level":4,"leaf":true}, {"code":"C179427","name":"Metastatic Acral Lentiginous Melanoma","level":4,"leaf":true}, {"code":"C169085","name":"Metastatic Choroid Melanoma","level":4,"leaf":true}, {"code":"C182127","name":"Metastatic Conjunctival Melanoma","level":3,"leaf":true}, {"code":"C156072","name":"Metastatic Cutaneous Melanoma","level":2,"leaf":false}, {"code":"C8925","name":"Metastatic Melanoma","level":1,"leaf":false}, {"code":"C169086","name":"Metastatic Mucosal Melanoma","level":3,"leaf":false}, {"code":"C7092","name":"Metastatic Non-Cutaneous Melanoma","level":2,"leaf":false}, {"code":"C171295","name":"Metastatic Ocular Melanoma","level":2,"leaf":false}, {"code":"C148514","name":"Metastatic Uveal Melanoma","level":3,"leaf":false}, {"code":"C48612","name":"Minimal Deviation Melanoma","level":2,"leaf":true}, {"code":"C35781","name":"Mixed Cell Uveal Melanoma","level":2,"leaf":false}, {"code":"C66756","name":"Mixed Epithelioid and Spindle Cell Melanoma","level":1,"leaf":false}, {"code":"C48622","name":"Mucosal Lentiginous Melanoma","level":3,"leaf":true}, {"code":"C7091","name":"Mucosal Melanoma of the Digestive System","level":3,"leaf":false}, {"code":"C178437","name":"Mucosal Melanoma of the Female Genital Tract","level":4,"leaf":false}, {"code":"C178443","name":"Mucosal Melanoma of the Genitourinary System","level":3,"leaf":false}, {"code":"C133186","name":"Mucosal Melanoma of the Head and Neck by AJCC v7 Stage","level":4,"leaf":false}, {"code":"C133187","name":"Mucosal Melanoma of the Head and Neck","level":3,"leaf":false}, {"code":"C178453","name":"Mucosal Melanoma of the Urinary System","level":4,"leaf":false}, {"code":"C114828","name":"Mucosal Melanoma","level":2,"leaf":false}, {"code":"C166405","name":"Mucosal Nodular Melanoma","level":3,"leaf":true}, {"code":"C178522","name":"Nasopharyngeal Melanoma","level":5,"leaf":true}, {"code":"C7990","name":"Necrotic Uveal Melanoma","level":3,"leaf":false}, {"code":"C54662","name":"Nevoid Melanoma","level":2,"leaf":true}, {"code":"C8711","name":"Non-Cutaneous Melanoma","level":1,"leaf":false}, {"code":"C7913","name":"Ocular Melanoma with Extraocular Extension","level":2,"leaf":true}, {"code":"C8562","name":"Ocular Melanoma","level":1,"leaf":false}, {"code":"C27919","name":"Old Burn Scar-Related Cutaneous Melanoma","level":2,"leaf":true}, {"code":"C5915","name":"Oral Cavity Mucosal Melanoma","level":4,"leaf":true}, {"code":"C118828","name":"Orbital Melanoma","level":1,"leaf":true}, {"code":"C178441","name":"Ovarian Melanoma","level":2,"leaf":true}, {"code":"C137662","name":"Pathologic Stage 0 Cutaneous Melanoma AJCC v8","level":4,"leaf":true}, {"code":"C137663","name":"Pathologic Stage I Cutaneous Melanoma AJCC v8","level":4,"leaf":false}, {"code":"C137664","name":"Pathologic Stage IA Cutaneous Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C137665","name":"Pathologic Stage IB Cutaneous Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C137666","name":"Pathologic Stage II Cutaneous Melanoma AJCC v8","level":4,"leaf":false}, {"code":"C137667","name":"Pathologic Stage IIA Cutaneous Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C137668","name":"Pathologic Stage IIB Cutaneous Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C137669","name":"Pathologic Stage IIC Cutaneous Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C137670","name":"Pathologic Stage III Cutaneous Melanoma AJCC v8","level":4,"leaf":false}, {"code":"C137671","name":"Pathologic Stage IIIA Cutaneous Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C137672","name":"Pathologic Stage IIIB Cutaneous Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C137673","name":"Pathologic Stage IIIC Cutaneous Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C137675","name":"Pathologic Stage IIID Cutaneous Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C137677","name":"Pathologic Stage IV Cutaneous Melanoma AJCC v8","level":4,"leaf":true}, {"code":"C178518","name":"Penile Cutaneous Melanoma","level":2,"leaf":true}, {"code":"C162547","name":"Penile Melanoma","level":1,"leaf":false}, {"code":"C178517","name":"Penile Mucosal Melanoma","level":2,"leaf":true}, {"code":"C178521","name":"Pharyngeal Melanoma","level":4,"leaf":false}, {"code":"C161611","name":"Prostate Melanoma","level":2,"leaf":true}, {"code":"C4640","name":"Rectal Melanoma","level":4,"leaf":true}, {"code":"C175435","name":"Recurrent Acral Lentiginous Melanoma","level":4,"leaf":true}, {"code":"C155306","name":"Recurrent Cutaneous Melanoma of the Extremity","level":3,"leaf":false}, {"code":"C9097","name":"Recurrent Cutaneous Melanoma","level":2,"leaf":false}, {"code":"C8785","name":"Recurrent Lentigo Maligna Melanoma","level":4,"leaf":true}, {"code":"C7087","name":"Recurrent Melanoma","level":1,"leaf":false}, {"code":"C182020","name":"Recurrent Metastatic Melanoma","level":2,"leaf":true}, {"code":"C170954","name":"Recurrent Mucosal Melanoma","level":3,"leaf":true}, {"code":"C7088","name":"Recurrent Non-Cutaneous Melanoma","level":2,"leaf":false}, {"code":"C171294","name":"Recurrent Ocular Melanoma","level":3,"leaf":false}, {"code":"C7914","name":"Recurrent Uveal Melanoma","level":4,"leaf":true}, {"code":"C150544","name":"Refractory Cutaneous Melanoma","level":2,"leaf":true}, {"code":"C147983","name":"Refractory Melanoma","level":1,"leaf":false}, {"code":"C182024","name":"Refractory Metastatic Melanoma","level":2,"leaf":true}, {"code":"C180894","name":"Refractory Mucosal Melanoma","level":3,"leaf":true}, {"code":"C173328","name":"Refractory Non-Cutaneous Melanoma","level":2,"leaf":false}, {"code":"C173329","name":"Refractory Ocular Melanoma","level":3,"leaf":false}, {"code":"C173335","name":"Refractory Uveal Melanoma","level":4,"leaf":true}, {"code":"C7089","name":"Regressing Cutaneous Melanoma","level":2,"leaf":true}, {"code":"C4228","name":"Regressing Melanoma","level":1,"leaf":false}, {"code":"C7090","name":"Regressing Non-Cutaneous Melanoma","level":2,"leaf":true}, {"code":"C8601","name":"Retinal Melanoma","level":2,"leaf":true}, {"code":"C7361","name":"Scrotal Melanoma","level":2,"leaf":true}, {"code":"C54663","name":"Signet Ring Melanoma","level":2,"leaf":true}, {"code":"C166399","name":"Sinonasal Mucosal Melanoma","level":4,"leaf":true}, {"code":"C9089","name":"Small Size Posterior Uveal Melanoma","level":3,"leaf":true}, {"code":"C27920","name":"Solar Radiation-Related Cutaneous Melanoma","level":2,"leaf":true}, {"code":"C5158","name":"Spinal Cord Melanoma","level":3,"leaf":true}, {"code":"C4237","name":"Spindle Cell Melanoma","level":1,"leaf":false}, {"code":"C7987","name":"Spindle Cell Type A Uveal Melanoma","level":3,"leaf":false}, {"code":"C7988","name":"Spindle Cell Type B Uveal Melanoma","level":3,"leaf":false}, {"code":"C7986","name":"Spindle Cell Uveal Melanoma","level":2,"leaf":false}, {"code":"C165497","name":"Spitz Melanoma","level":2,"leaf":true}, {"code":"C8423","name":"Stage 0 Cutaneous Melanoma AJCC v6 and v7","level":3,"leaf":false}, {"code":"C8781","name":"Stage I Acral Lentiginous Melanoma AJCC v7","level":4,"leaf":true}, {"code":"C140660","name":"Stage I Choroidal and Ciliary Body Melanoma AJCC v8","level":4,"leaf":true}, {"code":"C7916","name":"Stage I Cutaneous Melanoma AJCC v6","level":3,"leaf":true}, {"code":"C88414","name":"Stage I Cutaneous Melanoma AJCC v7","level":3,"leaf":false}, {"code":"C8786","name":"Stage I Lentigo Maligna Melanoma AJCC v7","level":4,"leaf":true}, {"code":"C8790","name":"Stage I Low-CSD Melanoma AJCC v7","level":4,"leaf":true}, {"code":"C5577","name":"Stage I Uveal Melanoma AJCC v7","level":4,"leaf":true}, {"code":"C86026","name":"Stage IA Cutaneous Melanoma AJCC v7","level":4,"leaf":true}, {"code":"C86030","name":"Stage IB Cutaneous Melanoma AJCC v7","level":4,"leaf":true}, {"code":"C8782","name":"Stage II Acral Lentiginous Melanoma AJCC v6 and v7","level":4,"leaf":true}, {"code":"C140661","name":"Stage II Choroidal and Ciliary Body Melanoma AJCC v8","level":4,"leaf":false}, {"code":"C7917","name":"Stage II Cutaneous Melanoma AJCC v6 and v7","level":3,"leaf":false}, {"code":"C8787","name":"Stage II Lentigo Maligna Melanoma AJCC v6 and v7","level":4,"leaf":true}, {"code":"C8791","name":"Stage II Low-CSD Melanoma AJCC v7","level":4,"leaf":true}, {"code":"C5578","name":"Stage II Uveal Melanoma AJCC v7","level":4,"leaf":false}, {"code":"C140662","name":"Stage IIA Choroidal and Ciliary Body Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C86033","name":"Stage IIA Cutaneous Melanoma AJCC v6 and v7","level":4,"leaf":true}, {"code":"C88135","name":"Stage IIA Uveal Melanoma AJCC v7","level":5,"leaf":true}, {"code":"C140663","name":"Stage IIB Choroidal and Ciliary Body Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C27742","name":"Stage IIB Cutaneous Melanoma AJCC v6 and v7","level":4,"leaf":true}, {"code":"C88136","name":"Stage IIB Uveal Melanoma AJCC v7","level":5,"leaf":true}, {"code":"C86034","name":"Stage IIC Cutaneous Melanoma AJCC v6 and v7","level":4,"leaf":true}, {"code":"C8783","name":"Stage III Acral Lentiginous Melanoma AJCC v7","level":4,"leaf":true}, {"code":"C140664","name":"Stage III Choroidal and Ciliary Body Melanoma AJCC v8","level":4,"leaf":false}, {"code":"C7918","name":"Stage III Cutaneous Melanoma AJCC v6","level":3,"leaf":true}, {"code":"C88415","name":"Stage III Cutaneous Melanoma AJCC v7","level":3,"leaf":false}, {"code":"C8788","name":"Stage III Lentigo Maligna Melanoma AJCC v7","level":4,"leaf":true}, {"code":"C8792","name":"Stage III Low-CSD Melanoma AJCC v7","level":4,"leaf":true}, {"code":"C87532","name":"Stage III Mucosal Melanoma of the Head and Neck AJCC v7","level":5,"leaf":true}, {"code":"C5579","name":"Stage III Uveal Melanoma AJCC v7","level":4,"leaf":false}, {"code":"C140665","name":"Stage IIIA Choroidal and Ciliary Body Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C86049","name":"Stage IIIA Cutaneous Melanoma AJCC v7","level":4,"leaf":true}, {"code":"C88137","name":"Stage IIIA Uveal Melanoma AJCC v7","level":5,"leaf":true}, {"code":"C140666","name":"Stage IIIB Choroidal and Ciliary Body Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C86051","name":"Stage IIIB Cutaneous Melanoma AJCC v7","level":4,"leaf":true}, {"code":"C88138","name":"Stage IIIB Uveal Melanoma AJCC v7","level":5,"leaf":true}, {"code":"C140667","name":"Stage IIIC Choroidal and Ciliary Body Melanoma AJCC v8","level":5,"leaf":true}, {"code":"C86053","name":"Stage IIIC Cutaneous Melanoma AJCC v7","level":4,"leaf":true}, {"code":"C88139","name":"Stage IIIC Uveal Melanoma AJCC v7","level":5,"leaf":true}, {"code":"C8784","name":"Stage IV Acral Lentiginous Melanoma AJCC v6 and v7","level":4,"leaf":true}, {"code":"C140668","name":"Stage IV Choroidal and Ciliary Body Melanoma AJCC v8","level":4,"leaf":true}, {"code":"C9096","name":"Stage IV Cutaneous Melanoma AJCC v6 and v7","level":3,"leaf":false}, {"code":"C8789","name":"Stage IV Lentigo Maligna Melanoma AJCC v6 and v7","level":4,"leaf":true}, {"code":"C8793","name":"Stage IV Low-CSD Melanoma AJCC v7","level":4,"leaf":true}, {"code":"C5580","name":"Stage IV Uveal Melanoma AJCC v7","level":4,"leaf":true}, {"code":"C87533","name":"Stage IVA Mucosal Melanoma of the Head and Neck AJCC v7","level":5,"leaf":true}, {"code":"C87534","name":"Stage IVB Mucosal Melanoma of the Head and Neck AJCC v7","level":5,"leaf":true}, {"code":"C87535","name":"Stage IVC Mucosal Melanoma of the Head and Neck AJCC v7","level":5,"leaf":true}, {"code":"C4238","name":"Type A Spindle Cell Melanoma","level":2,"leaf":false}, {"code":"C4239","name":"Type B Spindle Cell Melanoma","level":2,"leaf":false}, {"code":"C165535","name":"Unresectable Acral Lentiginous Melanoma","level":3,"leaf":true}, {"code":"C148245","name":"Unresectable Cutaneous Melanoma","level":2,"leaf":false}, {"code":"C148517","name":"Unresectable Melanoma","level":1,"leaf":false}, {"code":"C165536","name":"Unresectable Mucosal Melanoma","level":2,"leaf":true}, {"code":"C172247","name":"Unresectable Uveal Melanoma","level":2,"leaf":true}, {"code":"C159665","name":"Urethral Melanoma","level":5,"leaf":true}, {"code":"C140672","name":"Uveal Melanoma by AJCC v7 Stage","level":3,"leaf":false}, {"code":"C111030","name":"Uveal Melanoma by Gene Expression Profile","level":3,"leaf":false}, {"code":"C150130","name":"Uveal Melanoma Metastatic in the Liver","level":5,"leaf":true}, {"code":"C7712","name":"Uveal Melanoma","level":2,"leaf":false}, {"code":"C27394","name":"Vaginal Melanoma","level":5,"leaf":true}, {"code":"C40329","name":"Vulvar Melanoma","level":5,"leaf":true}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all properties

`MetadataTests.testGetProperties()` - Return all properties for a given terminology with default include setting (
minimal).

```
2021-12-08T20:54:47-05:00 INFO  : Get all properties for ncit (default include)
2021-12-08T20:54:47-05:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:54:47-05:00 INFO  :   P302 = {"code":"P302","name":"Accepted_Therapeutic_Use_For","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P216 = {"code":"P216","name":"BioCarta_ID","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P210 = {"code":"P210","name":"CAS_Registry","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P368 = {"code":"P368","name":"CHEBI_ID","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P350 = {"code":"P350","name":"Chemical_Formula","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P310 = {"code":"P310","name":"Concept_Status","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P322 = {"code":"P322","name":"Contributing_Source","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P98 = {"code":"P98","name":"DesignNote","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P321 = {"code":"P321","name":"EntrezGene_ID","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P356 = {"code":"P356","name":"Essential_Amino_Acid","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P357 = {"code":"P357","name":"Essential_Fatty_Acid","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P361 = {"code":"P361","name":"Extensible_List","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P317 = {"code":"P317","name":"FDA_Table","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P319 = {"code":"P319","name":"FDA_UNII_Code","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P211 = {"code":"P211","name":"GO_Annotation","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P102 = {"code":"P102","name":"GenBank_Accession_Number","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P96 = {"code":"P96","name":"Gene_Encodes_Product","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P369 = {"code":"P369","name":"HGNC_ID","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P101 = {"code":"P101","name":"Homologous_Gene","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P334 = {"code":"P334","name":"ICD-O-3_Code","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P353 = {"code":"P353","name":"INFOODS","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P167 = {"code":"P167","name":"Image_Link","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P215 = {"code":"P215","name":"KEGG_ID","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P366 = {"code":"P366","name":"Legacy Concept Name","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P332 = {"code":"P332","name":"MGI_Accession_ID","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P360 = {"code":"P360","name":"Macronutrient","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P375 = {"code":"P375","name":"Maps_To","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P359 = {"code":"P359","name":"Micronutrient","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P331 = {"code":"P331","name":"NCBI_Taxon_ID","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P399 = {"code":"P399","name":"NCI_Drug_Dictionary_ID","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P208 = {"code":"P208","name":"NCI_META_CUI","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P371 = {"code":"P371","name":"NICHD_Hierarchy_Term","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P175 = {"code":"P175","name":"NSC Number","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P363 = {"code":"P363","name":"Neoplastic_Status","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P358 = {"code":"P358","name":"Nutrient","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P320 = {"code":"P320","name":"OID","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P364 = {"code":"P364","name":"OLD_ASSOCIATION","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P201 = {"code":"P201","name":"OLD_CHILD","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P203 = {"code":"P203","name":"OLD_KIND","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P200 = {"code":"P200","name":"OLD_PARENT","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P204 = {"code":"P204","name":"OLD_ROLE","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P365 = {"code":"P365","name":"OLD_SOURCE_ASSOCIATION","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P205 = {"code":"P205","name":"OLD_STATE","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P100 = {"code":"P100","name":"OMIM_Number","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P330 = {"code":"P330","name":"PDQ_Closed_Trial_Search_ID","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P329 = {"code":"P329","name":"PDQ_Open_Trial_Search_ID","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P367 = {"code":"P367","name":"PID_ID","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P171 = {"code":"P171","name":"PubMedID_Primary_Reference","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P372 = {"code":"P372","name":"Publish_Value_Set","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P316 = {"code":"P316","name":"Relative_Enzyme_Activity","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P315 = {"code":"P315","name":"SNP_ID","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P106 = {"code":"P106","name":"Semantic_Type","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P92 = {"code":"P92","name":"Subsource","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P93 = {"code":"P93","name":"Swiss_Prot","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P376 = {"code":"P376","name":"Term_Browser_Value_Set_Description","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P352 = {"code":"P352","name":"Tolerable_Level","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P207 = {"code":"P207","name":"UMLS_CUI","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P354 = {"code":"P354","name":"USDA_ID","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P351 = {"code":"P351","name":"US_Recommended_Intake","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P355 = {"code":"P355","name":"Unit","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P333 = {"code":"P333","name":"Use_For","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P398 = {"code":"P398","name":"Value_Set_Pair","terminology":"ncit","version":"21.11e"}
2021-12-08T20:54:47-05:00 INFO  :   P362 = {"code":"P362","name":"miRBase_ID","terminology":"ncit","version":"21.11e"}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get property by code (or label)

`MetadataTests.testGetProperty()` - Return property for the specified code or label. The test shows a comple of examples
of how to parameterize this.

```
2021-12-08T20:55:13-05:00 INFO  : Get P302 (full information)
2021-12-08T20:55:13-05:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:55:13-05:00 INFO  :   P302 = {"code":"P302","name":"Accepted_Therapeutic_Use_For","terminology":"ncit","version":"21.11e","synonyms":[{"name":"Accepted Therapeutic Use For","type":"Display_Name"},{"name":"Accepted_Therapeutic_Use_For","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Accepted_Therapeutic_Use_For","type":"Preferred_Name"}],"definitions":[{"definition":"A property representing a disease or condition for which this drug is an accepted treatment. Used in the Drug, Food, Chemical or Biomedical Material branch.","type":"DEFINITION","source":"NCI"}],"properties":[{"type":"http://www.w3.org/1999/02/22-rdf-syntax-ns#type","value":"http://www.w3.org/2002/07/owl#AnnotationProperty"},{"type":"http://www.w3.org/2000/01/rdf-schema#range","value":"http://www.w3.org/2001/XMLSchema#string"},{"type":"Semantic_Type","value":"Conceptual Entity"}]}
2021-12-08T20:55:14-05:00 INFO  : Get Accepted_Therapeutic_Use_For (minimal information)
2021-12-08T20:55:14-05:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:55:14-05:00 INFO  :   Accepted_Therapeutic_Use_For = {"code":"P302","name":"Accepted_Therapeutic_Use_For","terminology":"ncit","version":"21.11e"}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all qualifiers

`MetadataTests.testGetQualifiers()` - Return all qualifiers for a given terminology with default include setting (
minimal).

```
2021-12-08T20:55:38-05:00 INFO  : Get all qualifiers for ncit (default include)
2021-12-08T20:55:38-05:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:55:38-05:00 INFO  :   P381 = {"code":"P381","name":"attribution","terminology":"ncit","version":"21.11e"}
2021-12-08T20:55:38-05:00 INFO  :   P387 = {"code":"P387","name":"go-id","terminology":"ncit","version":"21.11e"}
2021-12-08T20:55:38-05:00 INFO  :   P389 = {"code":"P389","name":"go-evi","terminology":"ncit","version":"21.11e"}
2021-12-08T20:55:38-05:00 INFO  :   P390 = {"code":"P390","name":"go-source","terminology":"ncit","version":"21.11e"}
2021-12-08T20:55:38-05:00 INFO  :   P391 = {"code":"P391","name":"source-date","terminology":"ncit","version":"21.11e"}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get qualifier by code (or label)

`MetadataTests.testGetQualifier()` - Return qualifier for the specified code or label. The test shows a comple of
examples of how to parameterize this.

```
2021-12-08T20:55:53-05:00 INFO  : Get P387 (full information)
2021-12-08T20:55:53-05:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:55:53-05:00 INFO  :   P387 = {"code":"P387","name":"go-id","terminology":"ncit","version":"21.11e","synonyms":[{"name":"go-id","type":"Preferred_Name"}],"definitions":[{"definition":"A property representing a unique zero-padded seven digit identifier supplied by the Gene Ontology (GO) that has no inherent meaning or relation to the position of the term in GO and is prefixed by \"GO:\".","type":"DEFINITION","source":"NCI"}],"properties":[{"type":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#required","value":"true"},{"type":"http://www.w3.org/1999/02/22-rdf-syntax-ns#type","value":"http://www.w3.org/2002/07/owl#AnnotationProperty"},{"type":"http://www.w3.org/2000/01/rdf-schema#range","value":"http://www.w3.org/2001/XMLSchema#string"}]}
2021-12-08T20:55:53-05:00 INFO  : Get go-id (minimal information)
2021-12-08T20:55:53-05:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:55:53-05:00 INFO  :   go-id = {"code":"P387","name":"go-id","terminology":"ncit","version":"21.11e"}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get qualifier values by code (or label)

`MetadataTests.testGetQualifierValues()` - Return distinct value set for the qualifier with the specified code or
label .

```
2021-12-08T20:56:22-05:00 INFO  : Get qualifier values for - P390
2021-12-08T20:56:22-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:56:22-05:00 INFO  :   qualifier values = [CGAP]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all roles

`MetadataTests.testGetRoles()` - Return all roles.

```
2021-12-08T20:56:44-05:00 INFO  : Get all roles for ncit (default include)
2021-12-08T20:56:44-05:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:56:44-05:00 INFO  :   R156 = {"code":"R156","name":"Allele_Absent_From_Wild-type_Chromosomal_Location","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R153 = {"code":"R153","name":"Allele_Has_Abnormality","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R159 = {"code":"R159","name":"Allele_Has_Activity","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R155 = {"code":"R155","name":"Allele_In_Chromosomal_Location","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R158 = {"code":"R158","name":"Allele_Plays_Altered_Role_In_Process","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R160 = {"code":"R160","name":"Allele_Plays_Role_In_Metabolism_Of_Chemical_Or_Drug","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R81 = {"code":"R81","name":"Anatomic_Structure_Has_Location","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R82 = {"code":"R82","name":"Anatomic_Structure_Is_Physical_Part_Of","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R30 = {"code":"R30","name":"Biological_Process_Has_Associated_Location","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R32 = {"code":"R32","name":"Biological_Process_Has_Initiator_Chemical_Or_Drug","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R28 = {"code":"R28","name":"Biological_Process_Has_Initiator_Process","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R31 = {"code":"R31","name":"Biological_Process_Has_Result_Anatomy","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R34 = {"code":"R34","name":"Biological_Process_Has_Result_Biological_Process","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R29 = {"code":"R29","name":"Biological_Process_Has_Result_Chemical_Or_Drug","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R35 = {"code":"R35","name":"Biological_Process_Is_Part_Of_Process","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R150 = {"code":"R150","name":"Chemical_Or_Drug_Affects_Abnormal_Cell","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R72 = {"code":"R72","name":"Chemical_Or_Drug_Affects_Cell_Type_Or_Tissue","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R146 = {"code":"R146","name":"Chemical_Or_Drug_Affects_Gene_Product","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R124 = {"code":"R124","name":"Chemical_Or_Drug_Has_Mechanism_Of_Action","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R125 = {"code":"R125","name":"Chemical_Or_Drug_Has_Physiologic_Effect","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R122 = {"code":"R122","name":"Chemical_Or_Drug_Is_Metabolized_By_Enzyme","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R66 = {"code":"R66","name":"Chemical_Or_Drug_Plays_Role_In_Biological_Process","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R123 = {"code":"R123","name":"Chemotherapy_Regimen_Has_Component","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R27 = {"code":"R27","name":"Conceptual_Part_Of","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R173 = {"code":"R173","name":"Cytogenetic_Abnormality_Involves_Chromosome","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R139 = {"code":"R139","name":"Disease_Excludes_Abnormal_Cell","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R141 = {"code":"R141","name":"Disease_Excludes_Cytogenetic_Abnormality","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R142 = {"code":"R142","name":"Disease_Excludes_Finding","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R136 = {"code":"R136","name":"Disease_Excludes_Metastatic_Anatomic_Site","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R140 = {"code":"R140","name":"Disease_Excludes_Molecular_Abnormality","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R138 = {"code":"R138","name":"Disease_Excludes_Normal_Cell_Origin","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R137 = {"code":"R137","name":"Disease_Excludes_Normal_Tissue_Origin","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R135 = {"code":"R135","name":"Disease_Excludes_Primary_Anatomic_Site","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R105 = {"code":"R105","name":"Disease_Has_Abnormal_Cell","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R100 = {"code":"R100","name":"Disease_Has_Associated_Anatomic_Site","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R126 = {"code":"R126","name":"Disease_Has_Associated_Disease","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R107 = {"code":"R107","name":"Disease_Has_Cytogenetic_Abnormality","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R108 = {"code":"R108","name":"Disease_Has_Finding","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R102 = {"code":"R102","name":"Disease_Has_Metastatic_Anatomic_Site","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R106 = {"code":"R106","name":"Disease_Has_Molecular_Abnormality","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R104 = {"code":"R104","name":"Disease_Has_Normal_Cell_Origin","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R103 = {"code":"R103","name":"Disease_Has_Normal_Tissue_Origin","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R101 = {"code":"R101","name":"Disease_Has_Primary_Anatomic_Site","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R110 = {"code":"R110","name":"Disease_Is_Grade","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R88 = {"code":"R88","name":"Disease_Is_Stage","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R174 = {"code":"R174","name":"Disease_Mapped_To_Chromosome","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R176 = {"code":"R176","name":"Disease_Mapped_To_Gene","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R113 = {"code":"R113","name":"Disease_May_Have_Abnormal_Cell","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R116 = {"code":"R116","name":"Disease_May_Have_Associated_Disease","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R114 = {"code":"R114","name":"Disease_May_Have_Cytogenetic_Abnormality","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R115 = {"code":"R115","name":"Disease_May_Have_Finding","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R89 = {"code":"R89","name":"Disease_May_Have_Molecular_Abnormality","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R112 = {"code":"R112","name":"Disease_May_Have_Normal_Cell_Origin","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R111 = {"code":"R111","name":"Disease_May_Have_Normal_Tissue_Origin","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R23 = {"code":"R23","name":"EO_Disease_Has_Associated_Cell_Type","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R25 = {"code":"R25","name":"EO_Disease_Has_Associated_EO_Anatomy","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R26 = {"code":"R26","name":"EO_Disease_Has_Property_Or_Attribute","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R24 = {"code":"R24","name":"EO_Disease_Maps_To_Human_Disease","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R38 = {"code":"R38","name":"Gene_Associated_With_Disease","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R41 = {"code":"R41","name":"Gene_Found_In_Organism","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R132 = {"code":"R132","name":"Gene_Has_Abnormality","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R145 = {"code":"R145","name":"Gene_Has_Physical_Location","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R40 = {"code":"R40","name":"Gene_In_Chromosomal_Location","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R175 = {"code":"R175","name":"Gene_Involved_In_Pathogenesis_Of_Disease","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R36 = {"code":"R36","name":"Gene_Is_Biomarker_Type","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R130 = {"code":"R130","name":"Gene_Is_Element_In_Pathway","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R178 = {"code":"R178","name":"Gene_Mutant_Encodes_Gene_Product_Sequence_Variation","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R37 = {"code":"R37","name":"Gene_Plays_Role_In_Process","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R54 = {"code":"R54","name":"Gene_Product_Encoded_By_Gene","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R49 = {"code":"R49","name":"Gene_Product_Expressed_In_Tissue","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R133 = {"code":"R133","name":"Gene_Product_Has_Abnormality","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R46 = {"code":"R46","name":"Gene_Product_Has_Associated_Anatomy","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R52 = {"code":"R52","name":"Gene_Product_Has_Biochemical_Function","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R44 = {"code":"R44","name":"Gene_Product_Has_Chemical_Classification","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R45 = {"code":"R45","name":"Gene_Product_Has_Organism_Source","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R50 = {"code":"R50","name":"Gene_Product_Has_Structural_Domain_Or_Motif","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R47 = {"code":"R47","name":"Gene_Product_Is_Biomarker_Of","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R42 = {"code":"R42","name":"Gene_Product_Is_Biomarker_Type","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R131 = {"code":"R131","name":"Gene_Product_Is_Element_In_Pathway","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R51 = {"code":"R51","name":"Gene_Product_Is_Physical_Part_Of","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R48 = {"code":"R48","name":"Gene_Product_Malfunction_Associated_With_Disease","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R53 = {"code":"R53","name":"Gene_Product_Plays_Role_In_Biological_Process","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R179 = {"code":"R179","name":"Gene_Product_Sequence_Variation_Encoded_By_Gene_Mutant","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R182 = {"code":"R182","name":"Gene_Product_Variant_Of_Gene_Product","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R177 = {"code":"R177","name":"Molecular_Abnormality_Involves_Gene","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R171 = {"code":"R171","name":"Procedure_Has_Completely_Excised_Anatomy","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R167 = {"code":"R167","name":"Procedure_Has_Excised_Anatomy","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R165 = {"code":"R165","name":"Procedure_Has_Imaged_Anatomy","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R169 = {"code":"R169","name":"Procedure_Has_Partially_Excised_Anatomy","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R163 = {"code":"R163","name":"Procedure_Has_Target_Anatomy","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R180 = {"code":"R180","name":"Procedure_Has_Target_Disease","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R170 = {"code":"R170","name":"Procedure_May_Have_Completely_Excised_Anatomy","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R166 = {"code":"R166","name":"Procedure_May_Have_Excised_Anatomy","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R168 = {"code":"R168","name":"Procedure_May_Have_Partially_Excised_Anatomy","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R181 = {"code":"R181","name":"Procedure_Uses_Manufactured_Object","terminology":"ncit","version":"21.11e"}
2021-12-08T20:56:44-05:00 INFO  :   R172 = {"code":"R172","name":"Regimen_Has_Accepted_Use_For_Disease","terminology":"ncit","version":"21.11e"}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get role by code (or label)

`MetadataTests.testGetRole()` - Returns a role definition for a specified code. The test shows a comple of examples of
how to parameterize this.

Return role for the specified code or label.

```
2021-12-08T20:57:08-05:00 INFO  : Get R123 (full information)
2021-12-08T20:57:08-05:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:57:08-05:00 INFO  :   R123 = {"code":"R123","name":"Chemotherapy_Regimen_Has_Component","terminology":"ncit","version":"21.11e","synonyms":[{"name":"Has Component","type":"Display_Name"},{"name":"Chemotherapy_Regimen_Has_Component","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Chemotherapy_Regimen_Has_Component","type":"Preferred_Name"}],"definitions":[{"definition":"A role used to specify the component agents which are used in a particular chemotherapy regimen or agent combination. The domain and the range for this role are 'Chemotherapy Regimen or Agent Combination' and 'Drug, Food, Chemical or Biomedical Material', respectively.","type":"DEFINITION","source":"NCI"}],"properties":[{"type":"http://www.w3.org/1999/02/22-rdf-syntax-ns#type","value":"http://www.w3.org/2002/07/owl#ObjectProperty"},{"type":"http://www.w3.org/2000/01/rdf-schema#domain","value":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C12218"},{"type":"http://www.w3.org/2000/01/rdf-schema#range","value":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C1908"},{"type":"Semantic_Type","value":"Conceptual Entity"}]}
2021-12-08T20:57:08-05:00 INFO  : Get Chemotherapy_Regimen_Has_Component (minimal information)
2021-12-08T20:57:08-05:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:57:08-05:00 INFO  :   Chemotherapy_Regimen_Has_Component = {"code":"R123","name":"Chemotherapy_Regimen_Has_Component","terminology":"ncit","version":"21.11e"}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all associations

`MetadataTests.testGetAssociations()` - Return all associations.

```
2021-12-08T20:57:25-05:00 INFO  : Get all associations for ncit (default include)
2021-12-08T20:57:25-05:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:57:25-05:00 INFO  :   A8 = {"code":"A8","name":"Concept_In_Subset","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A10 = {"code":"A10","name":"Has_CDRH_Parent","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A15 = {"code":"A15","name":"Has_CTCAE_5_Parent","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A27 = {"code":"A27","name":"Has_CTDC_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A40 = {"code":"A40","name":"Has_DIPG_DMG_Permissible_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A12 = {"code":"A12","name":"Has_Data_Element","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A6 = {"code":"A6","name":"Has_Free_Acid_Or_Base_Form","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A31 = {"code":"A31","name":"Has_GDC_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A30 = {"code":"A30","name":"Has_ICDC_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A16 = {"code":"A16","name":"Has_INC_Parent","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A11 = {"code":"A11","name":"Has_NICHD_Parent","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A36 = {"code":"A36","name":"Has_PCDC_ALL_Permissible_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A26 = {"code":"A26","name":"Has_PCDC_AML_Permissible_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A23 = {"code":"A23","name":"Has_PCDC_Data_Type","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A29 = {"code":"A29","name":"Has_PCDC_EWS_Permissible_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A34 = {"code":"A34","name":"Has_PCDC_GCT_Permissible_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A39 = {"code":"A39","name":"Has_PCDC_HL_Permissible_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A38 = {"code":"A38","name":"Has_PCDC_OS_Permissible_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A19 = {"code":"A19","name":"Has_Pharmaceutical_Administration_Method","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A18 = {"code":"A18","name":"Has_Pharmaceutical_Basic_Dose_Form","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A20 = {"code":"A20","name":"Has_Pharmaceutical_Intended_Site","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A21 = {"code":"A21","name":"Has_Pharmaceutical_Release_Characteristics","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A17 = {"code":"A17","name":"Has_Pharmaceutical_State_Of_Matter","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A22 = {"code":"A22","name":"Has_Pharmaceutical_Transformation","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A5 = {"code":"A5","name":"Has_Salt_Form","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A37 = {"code":"A37","name":"Has_SeroNet_Permissible_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A7 = {"code":"A7","name":"Has_Target","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A35 = {"code":"A35","name":"Is_PCDC_ALL_Permissible_Value_For_Variable","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A24 = {"code":"A24","name":"Is_PCDC_AML_Permissible_Value_For_Variable","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A28 = {"code":"A28","name":"Is_PCDC_EWS_Permissible_Value_For_Variable","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A33 = {"code":"A33","name":"Is_PCDC_GCT_Permissible_Value_For_Variable","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A9 = {"code":"A9","name":"Is_Related_To_Endogenous_Product","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A32 = {"code":"A32","name":"Is_Value_For_GDC_Property","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A14 = {"code":"A14","name":"Neoplasm_Has_Special_Category","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A4 = {"code":"A4","name":"Qualifier_Applies_To","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A13 = {"code":"A13","name":"Related_To_Genetic_Biomarker","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A1 = {"code":"A1","name":"Role_Has_Domain","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A3 = {"code":"A3","name":"Role_Has_Parent","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A2 = {"code":"A2","name":"Role_Has_Range","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A25 = {"code":"A25","name":"Value_Set_Is_Paired_With","terminology":"ncit","version":"21.11e"}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get association by code (or label)

`MetadataTests.testGetAssociation()` - Return association for the specified code or label. The test shows a comple of
examples of how to parameterize this.

```
2021-12-08T20:57:44-05:00 INFO  : Get A10 (full information)
2021-12-08T20:57:44-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:57:44-05:00 INFO  :   A10 = {"code":"A10","name":"Has_CDRH_Parent","terminology":"ncit","version":"21.11e","synonyms":[{"name":"Has CDRH Parent","type":"Display_Name"},{"name":"Has_CDRH_Parent","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Has_CDRH_Parent","type":"Preferred_Name"}],"definitions":[{"definition":"An association created to allow the source CDRH to assign a parent to each concept with the intent of creating a hierarchy that includes only terms in which they are the contributing source.","type":"DEFINITION","source":"NCI"}],"properties":[{"type":"http://www.w3.org/1999/02/22-rdf-syntax-ns#type","value":"http://www.w3.org/2002/07/owl#AnnotationProperty"},{"type":"http://www.w3.org/2000/01/rdf-schema#range","value":"http://www.w3.org/2001/XMLSchema#anyURI"},{"type":"Semantic_Type","value":"Conceptual Entity"}]}
2021-12-08T20:57:44-05:00 INFO  : Get Has_CDRH_Parent (minimal information)
2021-12-08T20:57:44-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:57:44-05:00 INFO  :   Has_CDRH_Parent = {"code":"A10","name":"Has_CDRH_Parent","terminology":"ncit","version":"21.11e"}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all term types

`MetadataTests.testGetTermTypes()` - Return metadata for all term types for the specified terminology.

```
2021-12-08T20:58:04-05:00 INFO  : Get term types by terminology - ncit
2021-12-08T20:58:04-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:58:04-05:00 INFO  :   term types = [{"code":"AB","name":"Abbreviation","terminology":"ncit"}, {"code":"AD","name":"Adjectival form (and other parts of grammar)","terminology":"ncit"}, {"code":"AQ*","name":"Antiquated preferred term","terminology":"ncit"}, {"code":"AQS","name":"Antiquated term, use when there are antiquated synonyms within a concept","terminology":"ncit"}, {"code":"BR","name":"US brand name, which may be trademarked","terminology":"ncit"}, {"code":"CA2","name":"ISO 3166 alpha-2 country code","terminology":"ncit"}, {"code":"CA3","name":"ISO 3166 alpha-3 country code","terminology":"ncit"}, {"code":"CN","name":"Drug study code","terminology":"ncit"}, {"code":"CNU","name":"ISO 3166 numeric country code","terminology":"ncit"}, {"code":"CS","name":"US State Department country code","terminology":"ncit"}, {"code":"DN","name":"Display name","terminology":"ncit"}, {"code":"FB","name":"Foreign brand name, which may be trademarked","terminology":"ncit"}, {"code":"HD*","name":"Header (groups concepts, but not used for coding data)","terminology":"ncit"}, {"code":"PT*","name":"Preferred term","terminology":"ncit"}, {"code":"SN","name":"Chemical structure name","terminology":"ncit"}, {"code":"SY","name":"Synonym","terminology":"ncit"}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get root concepts

`ConceptTests.testGetRoots()` - Return concept roots for the specified terminology.

```
2021-12-08T20:58:30-05:00 INFO  : Get concept by terminologyncit
2021-12-08T20:58:30-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:58:30-05:00 INFO  :   roots = [{"code":"C12913","name":"Abnormal Cell","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C43431","name":"Activity","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C12219","name":"Anatomic Structure, System, or Substance","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C20633","name":"Biochemical Pathway","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C17828","name":"Biological Process","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C12218","name":"Chemotherapy Regimen or Agent Combination","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C20181","name":"Conceptual Entity","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C20047","name":"Diagnostic or Prognostic Factor","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C7057","name":"Disease, Disorder or Finding","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C1908","name":"Drug, Food, Chemical or Biomedical Material","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C22188","name":"Experimental Organism Anatomical Concept","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C22187","name":"Experimental Organism Diagnosis","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C16612","name":"Gene","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C26548","name":"Gene Product","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C97325","name":"Manufactured Object","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C3910","name":"Molecular Abnormality","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C14250","name":"Organism","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C20189","name":"Property or Attribute","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C28428","name":"Retired Concept","terminology":"ncit","version":"21.11e","leaf":false}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get paths to/from root from a code

`ConceptTests.testGetPathsToRoot()` - Return paths to the root concept from a specified terminology and code.

```
2021-12-08T20:59:09-05:00 INFO  : Get paths to root by code - C3224
2021-12-08T20:59:09-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:59:09-05:00 INFO  :   paths to root = [[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","level":0,"leaf":false}, {"code":"C7058","name":"Melanocytic Neoplasm","terminology":"ncit","version":"21.11e","level":1,"leaf":false}, {"code":"C4741","name":"Neoplasm by Morphology","terminology":"ncit","version":"21.11e","level":2,"leaf":false}, {"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"21.11e","level":3,"leaf":false}, {"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"21.11e","level":4,"leaf":false}, {"code":"C7057","name":"Disease, Disorder or Finding","terminology":"ncit","version":"21.11e","level":5,"leaf":false}], [{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","level":0,"leaf":false}, {"code":"C9305","name":"Malignant Neoplasm","terminology":"ncit","version":"21.11e","level":1,"leaf":false}, {"code":"C7062","name":"Neoplasm by Special Category","terminology":"ncit","version":"21.11e","level":2,"leaf":false}, {"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"21.11e","level":3,"leaf":false}, {"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"21.11e","level":4,"leaf":false}, {"code":"C7057","name":"Disease, Disorder or Finding","terminology":"ncit","version":"21.11e","level":5,"leaf":false}]]
```

`ConceptTests.testGetPathsFromRoot()` - Return paths from the root concept from a specified terminology and code.

```
2021-12-08T20:59:29-05:00 INFO  : Get paths to root by code - C3224
2021-12-08T20:59:29-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:59:29-05:00 INFO  :   paths from root = [[{"code":"C7057","name":"Disease, Disorder or Finding","terminology":"ncit","version":"21.11e","level":0,"leaf":false}, {"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"21.11e","level":1,"leaf":false}, {"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"21.11e","level":2,"leaf":false}, {"code":"C4741","name":"Neoplasm by Morphology","terminology":"ncit","version":"21.11e","level":3,"leaf":false}, {"code":"C7058","name":"Melanocytic Neoplasm","terminology":"ncit","version":"21.11e","level":4,"leaf":false}, {"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","level":5,"leaf":false}], [{"code":"C7057","name":"Disease, Disorder or Finding","terminology":"ncit","version":"21.11e","level":0,"leaf":false}, {"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"21.11e","level":1,"leaf":false}, {"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"21.11e","level":2,"leaf":false}, {"code":"C7062","name":"Neoplasm by Special Category","terminology":"ncit","version":"21.11e","level":3,"leaf":false}, {"code":"C9305","name":"Malignant Neoplasm","terminology":"ncit","version":"21.11e","level":4,"leaf":false}, {"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","level":5,"leaf":false}]]
```

XXX
[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get paths to an ancestor code from a code

`ConceptTests.testGetPathToAncestor()` - Return paths to the root concept for a specified terminology and code.

```
2021-12-08T21:27:16-05:00 INFO  : Get paths to ancestor code by code - C3224/C2991
2021-12-08T21:27:16-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:27:16-05:00 INFO  :   path to ancestor = [[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","level":0,"leaf":false}, {"code":"C7058","name":"Melanocytic Neoplasm","terminology":"ncit","version":"21.11e","level":1,"leaf":false}, {"code":"C4741","name":"Neoplasm by Morphology","terminology":"ncit","version":"21.11e","level":2,"leaf":false}, {"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"21.11e","level":3,"leaf":false}, {"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"21.11e","level":4,"leaf":false}], [{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","level":0,"leaf":false}, {"code":"C9305","name":"Malignant Neoplasm","terminology":"ncit","version":"21.11e","level":1,"leaf":false}, {"code":"C7062","name":"Neoplasm by Special Category","terminology":"ncit","version":"21.11e","level":2,"leaf":false}, {"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"21.11e","level":3,"leaf":false}, {"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"21.11e","level":4,"leaf":false}]]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get subtree

`ConceptTests.testGetSubtreeForCode()` - Return an entire subtree graph from the root concepts to a specified node. This
call is specifically tuned to support a tree-view based hierarchy browser in a UI.

```
2021-12-08T21:28:45-05:00 INFO  : Get subtree graph by code - C3224
2021-12-08T21:28:45-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:28:45-05:00 INFO  :   subtree = [{"code":"C12913","label":"Abnormal Cell","leaf":false}, {"code":"C43431","label":"Activity","leaf":false}, {"code":"C12219","label":"Anatomic Structure, System, or Substance","leaf":false}, {"code":"C20633","label":"Biochemical Pathway","leaf":false}, {"code":"C17828","label":"Biological Process","leaf":false}, {"code":"C12218","label":"Chemotherapy Regimen or Agent Combination","leaf":false}, {"code":"C20181","label":"Conceptual Entity","leaf":false}, {"code":"C20047","label":"Diagnostic or Prognostic Factor","leaf":false}, {"code":"C7057","label":"Disease, Disorder or Finding","leaf":false,"expanded":true,"children":[{"code":"C2991","label":"Disease or Disorder","leaf":false,"expanded":true,"children":[{"code":"C35470","label":"Behavioral Disorder","leaf":false},{"code":"C8278","label":"Cancer-Related Condition","leaf":false},{"code":"C27551","label":"Disorder by Site","leaf":false},{"code":"C3101","label":"Genetic Disorder","leaf":false},{"code":"C3262","label":"Neoplasm","leaf":false,"expanded":true,"children":[{"code":"C4741","label":"Neoplasm by Morphology","leaf":false,"expanded":true,"children":[{"code":"C3709","label":"Epithelial Neoplasm","leaf":false},{"code":"C3708","label":"Germ Cell Tumor","leaf":false},{"code":"C7069","label":"Giant Cell Neoplasm","leaf":false},{"code":"C27134","label":"Hematopoietic and Lymphoid Cell Neoplasm","leaf":false},{"code":"C7058","label":"Melanocytic Neoplasm","leaf":false,"expanded":true,"children":[{"code":"C5504","label":"Central Nervous System Melanocytic Neoplasm","leaf":false},{"code":"C173488","label":"Head and Neck Melanocytic Neoplasm","leaf":false},{"code":"C7570","label":"Melanocytic Nevus","leaf":false},{"code":"C9498","label":"Melanocytoma","leaf":false},{"code":"C3224","label":"Melanoma","leaf":false},{"code":"C7161","label":"Skin Melanocytic Neoplasm","leaf":false},{"code":"C40335","label":"Vulvar Melanocytic Neoplasm","leaf":false}]},{"code":"C6971","label":"Meningothelial Cell Neoplasm","leaf":false},{"code":"C7059","label":"Mesenchymal Cell Neoplasm","leaf":false},{"code":"C3786","label":"Mesothelial Neoplasm","leaf":false},{"code":"C6974","label":"Neoplasm of Uncertain Histogenesis","leaf":false},{"code":"C35562","label":"Neuroepithelial, Perineurial, and Schwann Cell Neoplasm","leaf":false},{"code":"C3422","label":"Trophoblastic Tumor","leaf":false}]},{"code":"C3263","label":"Neoplasm by Site","leaf":false},{"code":"C7062","label":"Neoplasm by Special Category","leaf":false,"expanded":true,"children":[{"code":"C3677","label":"Benign Neoplasm","leaf":false},{"code":"C6283","label":"Childhood Neoplasm","leaf":false},{"code":"C6784","label":"Cystic Neoplasm","leaf":false},{"code":"C3264","label":"Embryonal Neoplasm","leaf":false},{"code":"C36035","label":"Encapsulated Neoplasm","leaf":false},{"code":"C7201","label":"Infrequent Neoplasm","leaf":false},{"code":"C116915","label":"Liquid Tumor","leaf":true},{"code":"C36037","label":"Localized Neoplasm","leaf":false},{"code":"C9305","label":"Malignant Neoplasm","leaf":false,"expanded":true,"children":[{"code":"C3851","label":"Aggravated Malignant Neoplasm","leaf":true},{"code":"C36025","label":"Anaplastic Malignant Neoplasm","leaf":false},{"code":"C7627","label":"Bilateral Malignant Neoplasm","leaf":false},{"code":"C2916","label":"Carcinoma","leaf":false},{"code":"C4005","label":"Childhood Malignant Neoplasm","leaf":false},{"code":"C2948","label":"Choriocarcinoma","leaf":false},{"code":"C4992","label":"Environment-Related Malignant Neoplasm","leaf":false},{"code":"C81758","label":"Fibroblastic Reticular Cell Tumor","leaf":true},{"code":"C9479","label":"Hereditary Malignant Neoplasm","leaf":false},{"code":"C27770","label":"Immunodeficiency-Related Malignant Neoplasm","leaf":false},{"code":"C27223","label":"Infection-Related Malignant Neoplasm","leaf":false},{"code":"C8505","label":"Invasive Malignant Neoplasm","leaf":false},{"code":"C3161","label":"Leukemia","leaf":false},{"code":"C8576","label":"Localized Malignant Neoplasm","leaf":false},{"code":"C3208","label":"Lymphoma","leaf":false},{"code":"C156714","label":"Malignant Abdominal Neoplasm","leaf":false},{"code":"C7586","label":"Malignant Basal Cell Neoplasm","leaf":false},{"code":"C35501","label":"Malignant Bone Marrow Neoplasm","leaf":false},{"code":"C9335","label":"Malignant Breast Neoplasm","leaf":false},{"code":"C114940","label":"Malignant Cardiovascular Neoplasm","leaf":false},{"code":"C4890","label":"Malignant Digestive System Neoplasm","leaf":false},{"code":"C3575","label":"Malignant Endocrine Neoplasm","leaf":false},{"code":"C4767","label":"Malignant Eye Neoplasm","leaf":false},{"code":"C121500","label":"Malignant Fibrohistiocytic Neoplasm","leaf":false},{"code":"C156484","label":"Malignant Genitourinary System Neoplasm","leaf":false},{"code":"C4925","label":"Malignant Germ Cell Tumor","leaf":false},{"code":"C4090","label":"Malignant Giant Cell Neoplasm","leaf":false},{"code":"C4013","label":"Malignant Head and Neck Neoplasm","leaf":false},{"code":"C35812","label":"Malignant Lymph Node Neoplasm","leaf":false},{"code":"C8991","label":"Malignant Mastocytosis","leaf":false},{"code":"C4456","label":"Malignant Mesothelioma","leaf":false},{"code":"C3729","label":"Malignant Mixed Neoplasm","leaf":false},{"code":"C166357","label":"Malignant Musculoskeletal Neoplasm","leaf":false},{"code":"C36041","label":"Malignant Neoplasm by Grade","leaf":false},{"code":"C35427","label":"Malignant Neoplasm of Multiple Primary Sites","leaf":false},{"code":"C65153","label":"Malignant Neoplasm, Uncertain Whether Primary or Metastatic","leaf":true},{"code":"C4788","label":"Malignant Nervous System Neoplasm","leaf":false},{"code":"C156715","label":"Malignant Pelvic Neoplasm","leaf":false},{"code":"C156711","label":"Malignant Peritoneal and Retroperitoneal Neoplasm","leaf":false},{"code":"C4571","label":"Malignant Respiratory System Neoplasm","leaf":false},{"code":"C2920","label":"Malignant Skin Neoplasm","leaf":false},{"code":"C4867","label":"Malignant Soft Tissue Neoplasm","leaf":false},{"code":"C132146","label":"Malignant Solid Neoplasm","leaf":false},{"code":"C6894","label":"Malignant Solitary Fibrous Tumor","leaf":false},{"code":"C3539","label":"Malignant Splenic Neoplasm","leaf":false},{"code":"C3576","label":"Malignant Thoracic Neoplasm","leaf":false},{"code":"C3224","label":"Melanoma","leaf":false},{"code":"C38156","label":"Metachronous Malignant Neoplasm","leaf":false},{"code":"C36049","label":"Moderately Differentiated Malignant Neoplasm","leaf":true},{"code":"C7151","label":"Monoclonal Immunoglobulin Deposition Disease","leaf":false},{"code":"C3520","label":"Myeloid Sarcoma","leaf":false},{"code":"C84270","label":"Myeloid/Lymphoid Neoplasms with Eosinophilia and Rearrangement of PDGFRA, PDGFRB, or FGFR1, or with PCM1-JAK2","leaf":false},{"code":"C9226","label":"Non-Hematologic Malignancy","leaf":true},{"code":"C46080","label":"Nonestrogen-Dependent Malignant Neoplasm","leaf":true},{"code":"C167168","label":"Obesity-Related Malignant Neoplasm","leaf":true},{"code":"C4993","label":"Occupational Malignant Neoplasm","leaf":false},{"code":"C3242","label":"Plasma Cell Myeloma","leaf":false},{"code":"C9349","label":"Plasmacytoma","leaf":false},{"code":"C36050","label":"Poorly Differentiated Malignant Neoplasm","leaf":true},{"code":"C7055","label":"Precursor Lymphoid Neoplasm","leaf":false},{"code":"C84509","label":"Primary Malignant Neoplasm","leaf":false},{"code":"C172183","label":"Progesterone Receptor Expressing Malignant Neoplasm","leaf":true},{"code":"C27209","label":"Radiation-Related Malignant Neoplasm","leaf":false},{"code":"C4813","label":"Recurrent Malignant Neoplasm","leaf":false},{"code":"C120186","label":"Refractory Malignant Neoplasm","leaf":false},{"code":"C150602","label":"Resectable Malignant Neoplasm","leaf":false},{"code":"C9118","label":"Sarcoma","leaf":false},{"code":"C4968","label":"Secondary Malignant Neoplasm","leaf":false},{"code":"C177364","label":"Somatic-Type Malignancy","leaf":true},{"code":"C4969","label":"Therapy-Related Malignant Neoplasm","leaf":false},{"code":"C36051","label":"Undifferentiated Malignant Neoplasm","leaf":true},{"code":"C27359","label":"Unresectable Malignant Neoplasm","leaf":false},{"code":"C36052","label":"Well Differentiated Malignant Neoplasm","leaf":true}]},{"code":"C3261","label":"Metastatic Neoplasm","leaf":false},{"code":"C102883","label":"Miscellaneous Neoplasm","leaf":true},{"code":"C6930","label":"Mixed Neoplasm","leaf":false},{"code":"C36029","label":"Necrotic Neoplasm","leaf":true},{"code":"C27933","label":"Neoplasm by Cause","leaf":false},{"code":"C45230","label":"Neoplasm by Obsolete Classification","leaf":false},{"code":"C3646","label":"Neoplasm of Uncertain Malignant Potential","leaf":false},{"code":"C65157","label":"Neoplasm, Uncertain Whether Benign or Malignant","leaf":true},{"code":"C7068","label":"Neoplastic Polyp","leaf":false},{"code":"C36012","label":"Nodular Neoplasm","leaf":true},{"code":"C36036","label":"Non-Encapsulated Neoplasm","leaf":true},{"code":"C163003","label":"Non-Malignant Neoplasm","leaf":true},{"code":"C36030","label":"Osteolytic Neoplasm","leaf":false},{"code":"C36031","label":"Papillary Neoplasm","leaf":false},{"code":"C36032","label":"Premalignant Neoplasm","leaf":true},{"code":"C8509","label":"Primary Neoplasm","leaf":false},{"code":"C4798","label":"Recurrent Neoplasm","leaf":false},{"code":"C7628","label":"Refractory Neoplasm","leaf":false},{"code":"C36255","label":"Secondary Neoplasm","leaf":false},{"code":"C9292","label":"Solid Neoplasm","leaf":false},{"code":"C27263","label":"Spindle Cell Neoplasm","leaf":false},{"code":"C36033","label":"Tubular Neoplasm","leaf":true},{"code":"C36034","label":"Villous Neoplasm","leaf":true}]}]},{"code":"C53529","label":"Non-Neoplastic Disorder","leaf":false},{"code":"C89328","label":"Pediatric Disorder","leaf":false},{"code":"C3340","label":"Polyp","leaf":false},{"code":"C2893","label":"Psychiatric Disorder","leaf":false},{"code":"C26684","label":"Radiation-Induced Disorder","leaf":false},{"code":"C4873","label":"Rare Disorder","leaf":false},{"code":"C28193","label":"Syndrome","leaf":false}]},{"code":"C3367","label":"Finding","leaf":false}]}, {"code":"C1908","label":"Drug, Food, Chemical or Biomedical Material","leaf":false}, {"code":"C22188","label":"Experimental Organism Anatomical Concept","leaf":false}, {"code":"C22187","label":"Experimental Organism Diagnosis","leaf":false}, {"code":"C16612","label":"Gene","leaf":false}, {"code":"C26548","label":"Gene Product","leaf":false}, {"code":"C97325","label":"Manufactured Object","leaf":false}, {"code":"C3910","label":"Molecular Abnormality","leaf":false}, {"code":"C14250","label":"Organism","leaf":false}, {"code":"C20189","label":"Property or Attribute","leaf":false}, {"code":"C28428","label":"Retired Concept","leaf":false}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term

`SearchTests.testFindConceptsBySearchTerm()` - Get concepts matching a search term within a specified terminology.

```
2021-12-08T21:29:28-05:00 INFO  : Get concept by search term=melanoma
2021-12-08T21:29:28-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:29:28-05:00 INFO  :   concepts = {"total":1362,"timeTaken":171,"parameters":{"term":"melanoma","type":"contains","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C91477","name":"Melanoma Pathway","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C21790","name":"Mouse Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C103113","name":"NCI CTEP SDC Melanoma Sub-Category Terminology","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C114828","name":"Mucosal Melanoma","terminology":"ncit","version":"21.11e","leaf":false}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by concept status)

`SearchTests.testFindConceptsBySearchTermConceptStatus()` - Get concepts matching a search term within a specified
terminology and restrict the search results by concept status of "Header_Concept". This example uses paging to get only
the first 5 results.

```
2021-12-08T21:29:51-05:00 INFO  : Get concept by search term=respiratory, status=Header_Concept
2021-12-08T21:29:51-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:29:51-05:00 INFO  :   concepts = {"total":1,"timeTaken":179,"parameters":{"term":"respiratory","type":"contains","include":"minimal","fromRecord":0,"pageSize":5,"conceptStatus":["Header_Concept"],"terminology":["ncit"]},"concepts":[{"code":"C13037","name":"Respiratory System Part","terminology":"ncit","version":"21.11e","leaf":false}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by contributing source)

`SearchTests.testFindConceptsBySearchTermContributingSource()` - Get concepts matching a search term within a specified
terminology and restrict the search results by a contributing source of "CDISC". This example uses paging to get only
the first 5 results.

```
2021-12-08T21:30:18-05:00 INFO  : Get concept by search term=melanoma, contributingSource=CDISC
2021-12-08T21:30:18-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:30:18-05:00 INFO  :   concepts = {"total":1362,"timeTaken":145,"parameters":{"term":"melanoma","type":"contains","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C91477","name":"Melanoma Pathway","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C21790","name":"Mouse Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C103113","name":"NCI CTEP SDC Melanoma Sub-Category Terminology","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C114828","name":"Mucosal Melanoma","terminology":"ncit","version":"21.11e","leaf":false}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by definition source)

`SearchTests.testFindConceptsBySearchTermDefinitionSource()` - Get concepts matching a search term within a specified
terminology and restrict the search results by a definition source of "NCI". This example uses paging to get only the
first 5 results.

```
2021-12-08T21:30:38-05:00 INFO  : Get concept by search term=dsDNA, definitionSource=NCI
2021-12-08T21:30:38-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:30:38-05:00 INFO  :   concepts = {"total":1294,"timeTaken":2017,"parameters":{"term":"melanoma","type":"contains","include":"minimal","fromRecord":0,"pageSize":5,"definitionSource":["NCI"],"terminology":["ncit"]},"concepts":[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C103113","name":"NCI CTEP SDC Melanoma Sub-Category Terminology","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C114828","name":"Mucosal Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C118828","name":"Orbital Melanoma","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C120298","name":"Canine Melanoma","terminology":"ncit","version":"21.11e","leaf":true}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by synonym source and termgroup)

`SearchTests.testFindConceptsBySearchTermSynonymSource()` - Get concepts matching a search term within a specified
terminology and
restrict the search results by a synonym source of "NCI" and synonymTermGroup of "PT".

```
2021-12-08T21:30:55-05:00 INFO  : Get concept by search term=dsDNA, synonymSource=NCI, synonymTermGroup=PT
2021-12-08T21:30:55-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:30:55-05:00 INFO  :   concepts = {"total":12,"timeTaken":99,"parameters":{"term":"dsDNA","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"synonymSource":["NCI"],"synonymTermGroup":["PT"],"terminology":["ncit"]},"concepts":[{"code":"C449","name":"DNA","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C14348","name":"Double Stranded DNA Virus","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C114565","name":"Anti-ds DNA Antibody","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C121337","name":"Systemic Lupus International Collaborating Clinics Classification Criteria","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C148186","name":"TALEN-edited HPV16/18 E6/E7 Plasmid","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C151956","name":"HPV16-E6-T27","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C151958","name":"HPV16-E7-T512","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C158432","name":"PicoGreen Dye","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C16517","name":"DNA Helicase","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C20064","name":"Conformation Dependent Mutation Detection","terminology":"ncit","version":"21.11e","leaf":false}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (where search term is a code)

`SearchTests.testFindConceptsBySearchTermAsCode()` - Get concepts matching a search term within a specified terminology
and restrict the search results using a code as the search term.

```
2021-12-08T21:31:12-05:00 INFO  : Get concept by search term=C3224
2021-12-08T21:31:12-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:31:12-05:00 INFO  :   concepts = {"total":1,"timeTaken":112,"parameters":{"term":"C3224","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"terminology":["ncit"]},"concepts":[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","leaf":false}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=match)

`SearchTests.testFindConceptsBySearchTermMatch()` - Get concepts matching a search term within a specified terminology
and a search type of "match". This example uses paging to get only the first 5 results.

```
2021-12-08T21:31:32-05:00 INFO  : Get concept by search term=enzyme, type=match
2021-12-08T21:31:32-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:31:32-05:00 INFO  :   concepts = {"total":1,"timeTaken":30,"parameters":{"term":"enzyme","type":"match","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16554","name":"Enzyme","terminology":"ncit","version":"21.11e","leaf":false}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=startsWith)

`SearchTests.testFindConceptsBySearchTermStartsWith()` - Get concepts matching a search term within a specified
terminology and a search type of "startsWith". This example uses paging to get only the first 5 results.

```
2021-12-08T21:31:56-05:00 INFO  : Get concept by search term=enzyme, type=startsWith
2021-12-08T21:31:56-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:31:56-05:00 INFO  :   concepts = {"total":53,"timeTaken":35,"parameters":{"term":"enzyme","type":"startsWith","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16554","name":"Enzyme","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C102632","name":"Enzyme-linked Immunosorbent Spot Assay","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C111196","name":"Enzyme Multiplied Immunoassay Technique","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C122205","name":"Enzyme Immunoassay Unit","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C147130","name":"Enzyme Unit per Liter","terminology":"ncit","version":"21.11e","leaf":true}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=phrase)

`SearchTests.testFindConceptsBySearchTermPhrase()` - Get concepts matching a search term within a specified terminology
and a search type of "phrase". This example uses paging to get only the first 5 results.

```
2021-12-08T21:32:15-05:00 INFO  : Get concept by search term=malignant melanoma, type=phrase
2021-12-08T21:32:15-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:32:15-05:00 INFO  :   concepts = {"total":75,"timeTaken":169,"parameters":{"term":"malignant melanoma","type":"phrase","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16835","name":"Experimental Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C60451","name":"Rat Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C16317","name":"B16 Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C128801","name":"Cutaneous Malignant Melanoma 2","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C16444","name":"Cloudman S91 Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":true}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=fuzzy)

`SearchTests.testFindConceptsBySearchTermFuzzy()` - Get concepts matching a search term within a specified terminology
and a search type of "fuzzy". This example uses paging to get only the first 5 results.

```
2021-12-08T21:32:34-05:00 INFO  : Get concept by search term=enzyme, type=fuzzy
2021-12-08T21:32:34-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:32:34-05:00 INFO  :   concepts= {"total":3351,"timeTaken":140,"parameters":{"term":"enzyme","type":"fuzzy","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16554","name":"Enzyme","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C21281","name":"Enzyme Gene","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C18296","name":"Pancreatic Enzyme","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C38728","name":"Pancreatic Proteolytic Enzymes","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C21557","name":"Deubiquitinating Enzyme","terminology":"ncit","version":"21.11e","leaf":false}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=AND)

`SearchTests.testFindConceptsBySearchTermAnd()` - Get concepts matching a search term within a specified terminology and
a search type of "AND". This example uses paging to get only the first 5 results.

```
2021-12-08T21:32:50-05:00 INFO  : Get concept by search term=malignant melanoma, type=AND
2021-12-08T21:32:50-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:32:50-05:00 INFO  :   concepts = {"total":122,"timeTaken":59,"parameters":{"term":"malignant melanoma","type":"AND","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16835","name":"Experimental Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C60451","name":"Rat Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C16317","name":"B16 Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C128801","name":"Cutaneous Malignant Melanoma 2","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C16444","name":"Cloudman S91 Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":true}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=OR)

`SearchTests.testFindConceptsBySearchTermOr()` - Get concepts matching a search term within a specified terminology and
a search type of "OR". This example uses paging to get only the first 5 results.

```
2021-12-08T21:33:07-05:00 INFO  : Get concept by search term=malignant melanoma, type=OR
2021-12-08T21:33:07-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:33:07-05:00 INFO  :   concepts = {"total":4786,"timeTaken":126,"parameters":{"term":"malignant melanoma","type":"OR","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16835","name":"Experimental Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C60451","name":"Rat Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C16317","name":"B16 Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C128801","name":"Cutaneous Malignant Melanoma 2","terminology":"ncit","version":"21.11e","leaf":true}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (with highlights)

`SearchTests.testFindConceptsBySearchTermHighlights()` - Get concepts matching a search term within a specified
terminology and include synonyms and highlighted text in the response. This example uses paging to get only the first 5
results.

```
2021-12-08T21:33:26-05:00 INFO  : Get concept by search term=XAV05295I5 (with highlights)
2021-12-08T21:33:26-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:33:26-05:00 INFO  :   concepts = {"total":2045,"timeTaken":78,"parameters":{"term":"enzyme","type":"contains","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16554","name":"Enzyme","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C17455","name":"Enzyme Immunoassay","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C180567","name":"Enzyme Activity","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C180669","name":"Enzyme Substrate","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C18296","name":"Pancreatic Enzyme","terminology":"ncit","version":"21.11e","leaf":true}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by property

`SearchTests.testFindConceptsByProperty()` - Get concepts matching a search term that is searched within a certain set
of properties. The search results are set to include the property values so you can easily see the match. The property
setting here can be either based on code or on label

```
2021-12-08T21:34:23-05:00 INFO  : Get concept by search term=XAV05295I5, property=FDA_UNII_Code
2021-12-08T21:34:23-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:34:23-05:00 INFO  :   concepts = {"total":1,"timeTaken":74,"parameters":{"term":"XAV05295I5","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"property":["FDA_UNII_Code"],"terminology":["ncit"]},"concepts":[{"code":"C61305","name":"Sivifene","terminology":"ncit","version":"21.11e","leaf":true}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all subsets

`MetadataTests.testGetAllSubsets()` - Get all subsets (with minimal information) for a specified terminology.

```
2021-12-01T15:09:19-05:00 INFO  :   subsets = [{"code":"C167405","name":"ACC/AHA EHR Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"ACC/AHA"},{"type":"NCI_META_CUI","value":"CL972587"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>The American College of Cardiology (ACC)/ American Heart Association (AHA) Terminology is a set of terms intended to represent key data elements and definitions for electronic health records (EHRs) created for patients with cardiovascular disorders. The primary goal for the development of these clinical data standards is to optimize uniform data collection by providing a platform of harmonized clinical terms and corresponding definitions that will promote interoperability among EHRs and thus improve their application to research and to clinical practice.</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/ACC-AHA_EHR_Terminology/\"> ACC-AHA EHR Terminology</a></p>."}],
...
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get subset by code

`MetadataTests.testGetSubsetByCode()` - Get subsets (with summary information) for a specified terminology and code.

```
2021-12-01T15:14:28-05:00 INFO  : Get subset - ncit, C81222
2021-12-01T15:14:28-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-01T15:14:28-05:00 INFO  :   subset = {"code":"C81222","name":"CDISC ADaM Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Legacy Concept Name","value":"CDISC_ADaM_Terminology"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>The terminology subset that includes terms pertaining to the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C2825525"},{"type":"Value_Set_Pair","value":"No"}],"children":[{"code":"C81223","name":"CDISC ADaM Date Imputation Flag Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"Legacy Concept Name","value":"CDISC_ADaM_Date_Imputation_Flag_Terminology"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Date Imputation Flag codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C2825526"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C81224","name":"CDISC ADaM Derivation Type Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"Yes"},{"type":"Legacy Concept Name","value":"CDISC_ADaM_Derivation_Type_Terminology"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Derivation Type codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C2825527"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C172334","name":"CDISC ADaM Generalized Anxiety Disorder-7 Version 2 Questionnaire Parameter Code Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"NCI_META_CUI","value":"CL1406497"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Generalized Anxiety Disorder-7 version 2 questionnaire parameter code codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"Value_Set_Pair","value":"Yes"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C172335","name":"CDISC ADaM Generalized Anxiety Disorder-7 Version 2 Questionnaire Parameter Name Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"NCI_META_CUI","value":"CL1406496"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Generalized Anxiety Disorder-7 version 2 questionnaire parameter name codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"Value_Set_Pair","value":"Yes"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C158114","name":"CDISC ADaM Geriatric Depression Scale Short Form Questionnaire Parameter Code Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"NCI_META_CUI","value":"CL937724"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Geriatric Depression Scale Short Form questionnaire parameter code codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"Value_Set_Pair","value":"Yes"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C158115","name":"CDISC ADaM Geriatric Depression Scale Short Form Questionnaire Parameter Name Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"NCI_META_CUI","value":"CL937725"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Geriatric Depression Scale Short Form questionnaire parameter name codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"Value_Set_Pair","value":"Yes"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C81225","name":"CDISC ADaM Parameter Type Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"Legacy Concept Name","value":"CDISC_ADaM_Parameter_Type_Terminology"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Parameter Type codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C2825528"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C165644","name":"CDISC ADaM Pool for Integration Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"Yes"},{"type":"NCI_META_CUI","value":"CL978787"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Pool for Integration codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C124296","name":"CDISC ADaM Subject Trial Status Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"Yes"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Subject Trial Status codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C4086047"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C81226","name":"CDISC ADaM Time Imputation Flag Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"Legacy Concept Name","value":"CDISC_ADaM_Time_Imputation_Flag_Terminology"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Time Imputation Flag codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C2825529"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get subset members by code

`MetadataTests.testGetSubsetMembersByCode()` - Get subset members paging parameters for a specified terminology and
code.

```
2021-12-01T21:35:12-05:00 INFO  : Get all subset members - ncit, C81222
2021-12-01T21:35:12-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-01T21:35:12-05:00 INFO  :   subset members = [{"code":"C117751","name":"Analysis Requested by Regulatory Agency","terminology":"ncit"}, {"code":"C117752","name":"Analysis Specified in Protocol","terminology":"ncit"}, {"code":"C117753","name":"Analysis Specified in Statistical Analysis Plan","terminology":"ncit"}, {"code":"C81209","name":"Average of Value Derivation Technique","terminology":"ncit"}, {"code":"C81201","name":"Baseline Observation Carried Forward Imputation Technique","terminology":"ncit"}, {"code":"C92225","name":"Best Case Imputation Technique","terminology":"ncit"}, {"code":"C92226","name":"Best Observation Carried Forward Imputation Technique","terminology":"ncit"}, {"code":"C132340","name":"Best Observed Case Imputation Technique","terminology":"ncit"}, {"code":"C81223","name":"CDISC ADaM Date Imputation Flag Terminology","terminology":"ncit"}, {"code":"C81224","name":"CDISC ADaM Derivation Type Terminology","terminology":"ncit"}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

