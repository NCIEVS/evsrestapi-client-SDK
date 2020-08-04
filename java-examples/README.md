EVSRESTAPI client SDK: Java Tutorial
======================================

This tutorial shows how to use a locally defined Java client to interact with the EVSREST API.

Prerequisites
-------------
* JDK 1.8 must be installed ([Download Java](https://www.java.com/en/download/))

The various scripts make use of the `src/main/resources/url.properties` file to define the EVSRESTAPI endpoint that the java client will connect to.

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
 
### Get terminologies

`MetadataTests.testGetTerminologies()` - Return all loaded terminologies currently hosted by the API.

```
2020-08-04T17:59:44-04:00 INFO  : Get Terminologies
2020-08-04T17:59:44-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-08-04T17:59:44-04:00 INFO  :   ncit = {"terminology":"ncit","version":"20.07d","date":"July 27, 2020","name":"NCI Thesaurus 20.07d","description":"NCI Thesaurus, a controlled vocabulary in support of NCI administrative and scientific activities. Produced by the Enterprise Vocabulary System (EVS), a project by the NCI Center for Biomedical Informatics and Information Technology. National Cancer Institute, National Institutes of Health, Bethesda, MD 20892, U.S.A.","graph":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl","source":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl","terminologyVersion":"ncit_20.07d","latest":true,"tags":{"monthly":"true"},"indexName":"concept_ncit_2007d","objectIndexName":"evs_object_ncit_2007d"}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept by code (minimal information)

`ConceptTests.testGetConceptByCode()` - Return concept object with minimal information for a specified code.

```
2020-04-28T19:39:52-04:00 INFO  : Get concept by code - C3224
2020-04-28T19:39:52-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-04-28T19:39:52-04:00 INFO  :   concept = {"code":"C3224","name":"Melanoma","terminology":"ncit"}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concepts by list (minimal information)

`ConceptTests.testGetConceptsByListMinimal()` - Return concept objects with minimal information for a specified list of codes.

```
2020-04-28T19:57:47-04:00 INFO  : Get concepts by list - [C3224, C3910]
2020-04-28T19:57:47-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-04-28T19:57:47-04:00 INFO  :   concepts = [{"code":"C3224","name":"Melanoma","terminology":"ncit"}, {"code":"C3910","name":"Molecular Abnormality","terminology":"ncit"}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept by code (summary information)

`ConceptTests.testGetConceptByListSummary()` - Return summary concept information for a given terminology and code

```
2020-06-16T15:51:10-07:00 INFO  : Get concept by list - [C3224]
2020-06-16T15:51:10-07:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-16T15:51:10-07:00 INFO  :   concepts = [{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"20.05d","synonyms":[{"name":"Melanoma","type":"Preferred_Name"},{"name":"MELANOMA, MALIGNANT","termGroup":"PT","type":"FULL_SYN","source":"CDISC"},{"name":"Malignant Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CPTAC"},{"name":"Malignant Melanoma","termGroup":"SY","type":"FULL_SYN","source":"CDISC"},{"name":"Malignant Melanoma","termGroup":"SY","type":"FULL_SYN","source":"NCI"},{"name":"Melanoma","termGroup":"DN","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CTEP","code":"10053571","subSource":"SDC"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"Cellosaurus"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"GDC"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"NICHD"},{"name":"Melanoma","termGroup":"SY","type":"FULL_SYN","source":"NCI","code":"TCGA","subSource":"caDSR"},{"name":"Melanoma, NOS","termGroup":"SY","type":"FULL_SYN","source":"GDC"},{"name":"melanoma","termGroup":"PT","type":"FULL_SYN","source":"NCI-GLOSS","code":"CDR0000045135"},{"name":"Melanoma","type":"Display_Name"}],"definitions":[{"definition":"A form of cancer that begins in melanocytes (cells that make the pigment melanin). It may begin in a mole (skin melanoma), but can also begin in other pigmented tissues, such as in the eye or in the intestines.","type":"ALT_DEFINITION","source":"NCI-GLOSS"},{"definition":"A malignant neoplasm composed of melanocytes.","type":"ALT_DEFINITION","source":"CDISC"},{"definition":"A malignant neoplasm comprised of
melanocytes typically arising in the skin.","type":"ALT_DEFINITION","source":"NICHD"},{"definition":"A malignant, usually aggressive tumor composed of atypical, neoplastic melanocytes. Most often, melanomas arise in the skin (cutaneous melanomas) and include the following histologic subtypes: superficial spreading melanoma, nodular melanoma, acral lentiginous
melanoma, and lentigo maligna melanoma. Cutaneous melanomas may arise from acquired or congenital melanocytic or dysplastic nevi. Melanomas may also arise in other anatomic sites including the gastrointestinal system, eye, urinary tract, and reproductive system. Melanomas frequently metastasize to lymph nodes, liver, lungs, and brain.","source":"NCI"}],"properties":[{"type":"Semantic_Type","value":"Neoplastic Process"},{"type":"UMLS_CUI","value":"C0025202"},{"type":"Contributing_Source","value":"Cellosaurus"},{"type":"Contributing_Source","value":"CTRP"},{"type":"Contributing_Source","value":"MedDRA"},{"type":"Contributing_Source","value":"GDC"},{"type":"Contributing_Source","value":"CDISC"},{"type":"Contributing_Source","value":"NICHD"},{"type":"Contributing_Source","value":"CTEP"},{"type":"Contributing_Source","value":"CPTAC"},{"type":"ICD-O-3_Code","value":"8720/3"},{"type":"Neoplastic_Status","value":"Malignant"},{"type":"Legacy Concept Name","value":"Melanoma"},{"type":"NICHD_Hierarchy_Term","value":"Melanoma"}]}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept by code (full information)

`ConceptTests.testGetConceptByListFull()` - Return full concept information for a given terminology and code.

```
2020-06-16T16:17:46-07:00 INFO  : Get concept by list - [C3224]
2020-06-16T16:17:46-07:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-16T16:17:46-07:00 INFO  :   concepts = [{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"20.05d","synonyms":[{"name":"Melanoma","type":"Preferred_Name"},{"name":"MELANOMA, MALIGNANT","termGroup":"PT","type":"FULL_SYN","source":"CDISC"},{"name":"Malignant Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CPTAC"},{"name":"Malignant Melanoma","termGroup":"SY","type":"FULL_SYN","source":"CDISC"},{"name":"Malignant Melanoma","termGroup":"SY","type":"FULL_SYN","source":"NCI"},{"name":"Melanoma","termGroup":"DN","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CTEP","code":"10053571","subSource":"SDC"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"Cellosaurus"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"GDC"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"NICHD"},{"name":"Melanoma","termGroup":"SY","type":"FULL_SYN","source":"NCI","code":"TCGA","subSource":"caDSR"},{"name":"Melanoma, NOS","termGroup":"SY","type":"FULL_SYN","source":"GDC"},{"name":"melanoma","termGroup":"PT","type":"FULL_SYN","source":"NCI-GLOSS","code":"CDR0000045135"},{"name":"Melanoma","type":"Display_Name"}],"definitions":[{"definition":"A form of cancer that begins in melanocytes (cells that make the pigment melanin). It may begin in a mole (skin melanoma), but can also begin in other pigmented tissues, such as in the eye or in the intestines.","type":"ALT_DEFINITION","source":"NCI-GLOSS"},{"definition":"A malignant neoplasm composed of melanocytes.","type":"ALT_DEFINITION","source":"CDISC"},{"definition":"A malignant neoplasm comprised of
melanocytes typically arising in the skin.","type":"ALT_DEFINITION","source":"NICHD"},{"definition":"A malignant, usually aggressive tumor composed of atypical, neoplastic melanocytes. Most often, melanomas arise in the skin (cutaneous melanomas) and include the following histologic subtypes: superficial spreading melanoma, nodular melanoma, acral lentiginous
melanoma, and lentigo maligna melanoma. Cutaneous melanomas may arise from acquired or congenital melanocytic or dysplastic nevi. Melanomas may also arise in other anatomic sites including the gastrointestinal system, eye, urinary tract, and reproductive system. Melanomas frequently metastasize to lymph nodes, liver, lungs, and brain.","source":"NCI"}],"properties":[{"type":"Semantic_Type","value":"Neoplastic Process"},{"type":"UMLS_CUI","value":"C0025202"},{"type":"Contributing_Source","value":"Cellosaurus"},{"type":"Contributing_Source","value":"CTRP"},{"type":"Contributing_Source","value":"MedDRA"},{"type":"Contributing_Source","value":"GDC"},{"type":"Contributing_Source","value":"CDISC"},{"type":"Contributing_Source","value":"NICHD"},{"type":"Contributing_Source","value":"CTEP"},{"type":"Contributing_Source","value":"CPTAC"},{"type":"ICD-O-3_Code","value":"8720/3"},{"type":"Neoplastic_Status","value":"Malignant"},{"type":"Legacy Concept Name","value":"Melanoma"},{"type":"NICHD_Hierarchy_Term","value":"Melanoma"}],"children":[{"code":"C3802","name":"Amelanotic Melanoma"},{"code":"C8410","name":"Breast Melanoma"},{"code":"C131506","name":"Childhood Melanoma"},{"code":"C3510","name":"Cutaneous Melanoma"},{"code":"C4236","name":"Epithelioid Cell Melanoma"},{"code":"C9499","name":"Melanomatosis"},{"code":"C8925","name":"Metastatic Melanoma"},{"code":"C66756","name":"Mixed Epithelioid and Spindle Cell Melanoma"},{"code":"C8711","name":"Non-Cutaneous Melanoma"},{"code":"C8562","name":"Ocular Melanoma"},{"code":"C118828","name":"Orbital Melanoma"},{"code":"C162547","name":"Penile Melanoma"},{"code":"C7087","name":"Recurrent Melanoma"},{"code":"C147983","name":"Refractory Melanoma"},{"code":"C4228","name":"Regressing Melanoma"},{"code":"C4237","name":"Spindle Cell Melanoma"},{"code":"C148517","name":"Unresectable Melanoma"}],"parents":[{"code":"C9305","name":"Malignant Neoplasm"},{"code":"C7058","name":"Melanocytic Neoplasm"}],"associations":[{"type":"Concept_In_Subset","relatedCode":"C77526","relatedName":"CDISC SEND Terminology"},{"type":"Concept_In_Subset","relatedCode":"C88025","relatedName":"CDISC SEND Tumor Findings Results Terminology"},{"type":"Concept_In_Subset","relatedCode":"C156953","relatedName":"CPTAC Baseline Medical Forms Terminology"},{"type":"Concept_In_Subset","relatedCode":"C158520","relatedName":"CPTAC Codelists Terminology"},{"type":"Concept_In_Subset","relatedCode":"C159415","relatedName":"CPTAC Melanoma Baseline Form"},{"type":"Concept_In_Subset","relatedCode":"C156966","relatedName":"CPTAC Neoplasms Codelist"},{"type":"Concept_In_Subset","relatedCode":"C156952","relatedName":"CPTAC Terminology"},{"type":"Concept_In_Subset","relatedCode":"C157534","relatedName":"CPTAC Uveal Melanoma Baseline Form"},{"type":"Concept_In_Subset","relatedCode":"C118168","relatedName":"CTRP Disease Terminology"},{"type":"Concept_In_Subset","relatedCode":"C116977","relatedName":"CTRP Terminology"},{"type":"Concept_In_Subset","relatedCode":"C138190","relatedName":"CTS-API Disease Main Type Terminology"},{"type":"Concept_In_Subset","relatedCode":"C165258","relatedName":"Cellosaurus Disease Terminology"},{"type":"Concept_In_Subset","relatedCode":"C61410","relatedName":"Clinical Data Interchange Standards Consortium Terminology"},{"type":"Concept_In_Subset","relatedCode":"C138188","relatedName":"Clinical Trials Search-Application Programming Interface Disease Category Terminology"},{"type":"Concept_In_Subset","relatedCode":"C159102","relatedName":"GDC Relationship Primary Diagnosis Terminology"},{"type":"Concept_In_Subset","relatedCode":"C157711","relatedName":"GDC Terminology"},{"type":"Concept_In_Subset","relatedCode":"C168658","relatedName":"Mapped ICDO3.1 Morphology PT Terminology"},{"type":"Concept_In_Subset","relatedCode":"C168657","relatedName":"Mapped ICDO3.1 Morphology Terminology"},{"type":"Concept_In_Subset","relatedCode":"C168655","relatedName":"Mapped ICDO3.1 Terminology"},{"type":"Concept_In_Subset","relatedCode":"C168662","relatedName":"Mapped ICDO3.2 Morphology PT Terminology"},{"type":"Concept_In_Subset","relatedCode":"C168661","relatedName":"Mapped ICDO3.2 Morphology Terminology"},{"type":"Concept_In_Subset","relatedCode":"C168656","relatedName":"Mapped ICDO3.2 Terminology"},{"type":"Concept_In_Subset","relatedCode":"C103113","relatedName":"NCI CTEP SDC
Melanoma Sub-Category Terminology"},{"type":"Concept_In_Subset","relatedCode":"C102905","relatedName":"NCI CTEP Simplified Disease Classification Terminology"},{"type":"Concept_In_Subset","relatedCode":"C126659","relatedName":"NCIt Neoplasm Core Terminology"},{"type":"Concept_In_Subset","relatedCode":"C90259","relatedName":"NICHD Terminology"},{"type":"Concept_In_Subset","relatedCode":"C118464","relatedName":"Pediatric Adverse Events Terminology"},{"type":"Has_NICHD_Parent","relatedCode":"C9305","relatedName":"Malignant Neoplasm"},{"type":"Has_NICHD_Parent","relatedCode":"C3371","relatedName":"Skin Disorder"},{"type":"Neoplasm_Has_Special_Category","relatedCode":"C9292","relatedName":"Solid Neoplasm"}],"inverseAssociations":[{"type":"Has_NICHD_Parent","relatedCode":"C131506","relatedName":"Childhood Melanoma"}],"roles":[{"type":"Disease_Excludes_Finding","relatedCode":"C36122","relatedName":"Benign Cellular Infiltrate"},{"type":"Disease_Has_Abnormal_Cell","relatedCode":"C12917","relatedName":"Malignant Cell"},{"type":"Disease_Has_Abnormal_Cell","relatedCode":"C36873","relatedName":"Melanoma Cell"},{"type":"Disease_Has_Abnormal_Cell","relatedCode":"C12922","relatedName":"Neoplastic Cell"},{"type":"Disease_Has_Abnormal_Cell","relatedCode":"C36862","relatedName":"Neoplastic Melanocyte"},{"type":"Disease_Has_Finding","relatedCode":"C36115","relatedName":"Malignant Cellular Infiltrate"},{"type":"Disease_Has_Normal_Cell_Origin","relatedCode":"C12591","relatedName":"Melanocyte"},{"type":"Disease_May_Have_Finding","relatedCode":"C43268","relatedName":"HMB-45-Positive Neoplastic Cells Present"},{"type":"Disease_May_Have_Finding","relatedCode":"C40993","relatedName":"S-100-Positive Neoplastic Cells Present"}],"inverseRoles":[{"type":"Disease_Has_Associated_Disease","relatedCode":"C40001","relatedName":"Ovarian Dermoid Cyst with Melanoma"},{"type":"Disease_May_Have_Associated_Disease","relatedCode":"C36101","relatedName":"BRCA2 Syndrome"},{"type":"Disease_May_Have_Associated_Disease","relatedCode":"C27264","relatedName":"Familial Atypical Mole Melanoma Syndrome"},{"type":"Disease_May_Have_Associated_Disease","relatedCode":"C8495","relatedName":"Hereditary Retinoblastoma"},{"type":"Disease_May_Have_Associated_Disease","relatedCode":"C3447","relatedName":"Werner Syndrome"},{"type":"Gene_Associated_With_Disease","relatedCode":"C21389","relatedName":"CRYBG1 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C54321","relatedName":"CRYBG1 wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C21470","relatedName":"CSAG2 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C54542","relatedName":"CSAG2 wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C81903","relatedName":"CSAG3 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C81904","relatedName":"CSAG3 wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C24316","relatedName":"CSPG4 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C52436","relatedName":"CSPG4 wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C82885","relatedName":"DCT Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C82886","relatedName":"DCT wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C20765","relatedName":"KISS1 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C54288","relatedName":"KISS1 wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C24561","relatedName":"LTBP2 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C51270","relatedName":"LTBP2 wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C21261","relatedName":"MCAM Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C54308","relatedName":"MCAM wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C81756","relatedName":"MIR221 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C82171","relatedName":"MIR221 wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C80700","relatedName":"MIRLET7A1 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C81825","relatedName":"MIRLET7A1 wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C80701","relatedName":"MIRLET7A3 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C81826","relatedName":"MIRLET7A3 wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C80702","relatedName":"MIRLET7B Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C81853","relatedName":"MIRLET7B wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C28629","relatedName":"MLANA Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C54313","relatedName":"MLANA wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C18336","relatedName":"RAB8A Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C52547","relatedName":"RAB8A wt Allele"},{"type":"Gene_Associated_With_Disease","relatedCode":"C20335","relatedName":"XRCC3 Gene"},{"type":"Gene_Associated_With_Disease","relatedCode":"C51014","relatedName":"XRCC3 wt Allele"},{"type":"Gene_Product_Is_Biomarker_Of","relatedCode":"C17513","relatedName":"Melanoma-Associated Antigen 3"},{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C21390","relatedName":"Beta/Gamma Crystallin Domain-Containing Protein 1"},{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C26083","relatedName":"Chondroitin Sulfate Proteoglycan 4"},{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C17680","relatedName":"Cyclin-Dependent Kinase 4"},{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C17786","relatedName":"Cyclin-Dependent Kinase Inhibitor 2A"},{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C21569","relatedName":"DNA Repair Protein XRCC3"},{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C2646","relatedName":"L-Dopachrome Tautomerase"},{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C26331","relatedName":"Latent-Transforming Growth Factor Beta-Binding Protein 2"},{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C21141","relatedName":"Metastasis-Suppressor KiSS-1"},{"type":"Gene_Product_Malfunction_Associated_With_Disease","relatedCode":"C84349","relatedName":"Tumor Suppressor ARF"},{"type":"Regimen_Has_Accepted_Use_For_Disease","relatedCode":"C10303","relatedName":"CDB Regimen"},{"type":"Regimen_Has_Accepted_Use_For_Disease","relatedCode":"C63525","relatedName":"CVD Regimen"},{"type":"Regimen_Has_Accepted_Use_For_Disease","relatedCode":"C63785","relatedName":"CVD-Aldesleukin-Interferon Alfa-2b Regimen"},{"type":"Regimen_Has_Accepted_Use_For_Disease","relatedCode":"C63782","relatedName":"Dacarbazine/Interferon Alfa Regimen"},{"type":"Regimen_Has_Accepted_Use_For_Disease","relatedCode":"C63781","relatedName":"Dartmouth Regimen"}],"maps":[{"type":"Related To","targetName":"8720/3","targetTermGroup":"PT","targetCode":"MORPH","targetTerminology":"GDC"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermGroup":"PT","targetCode":"8720/3","targetTerminology":"ICDO3","targetTerminologyVersion":"3.1"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermGroup":"PT","targetCode":"8720/3","targetTerminology":"ICDO3","targetTerminologyVersion":"3.2"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermGroup":"PT","targetCode":"PD","targetTerminology":"GDC"},{"type":"Has Synonym","targetName":"Melanoma","targetTermGroup":"LLT","targetCode":"10053571","targetTerminology":"MedDRA","targetTerminologyVersion":"18.1"},{"type":"Has Synonym","targetName":"Melanoma","targetTermGroup":"PT","targetCode":"RPD","targetTerminology":"GDC"},{"type":"Has Synonym","targetName":"Melanoma, NOS","targetTermGroup":"PT","targetCode":"PD","targetTerminology":"GDC"}]}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept by code (custom include)

`ConceptTests.testGetConceptByListCustom()` - Return custom concept information for a given terminology and code.

Return custom concept information for a given terminology and code. To show a range
of options, in this case, the request asks for synonyms, children, maps, and inverse
associations.

```
2020-06-17T10:37:43-07:00 INFO  : Get concept by list - [C3224]
2020-06-17T10:37:43-07:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-17T10:37:43-07:00 INFO  :   concepts = [{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"20.05d","synonyms":[{"name":"Melanoma","type":"Preferred_Name"},{"name":"MELANOMA, MALIGNANT","termGroup":"PT","type":"FULL_SYN","source":"CDISC"},{"name":"Malignant Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CPTAC"},{"name":"Malignant Melanoma","termGroup":"SY","type":"FULL_SYN","source":"CDISC"},{"name":"Malignant Melanoma","termGroup":"SY","type":"FULL_SYN","source":"NCI"},{"name":"Melanoma","termGroup":"DN","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CTEP","code":"10053571","subSource":"SDC"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"CTRP"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"Cellosaurus"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"GDC"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Melanoma","termGroup":"PT","type":"FULL_SYN","source":"NICHD"},{"name":"Melanoma","termGroup":"SY","type":"FULL_SYN","source":"NCI","code":"TCGA","subSource":"caDSR"},{"name":"Melanoma, NOS","termGroup":"SY","type":"FULL_SYN","source":"GDC"},{"name":"melanoma","termGroup":"PT","type":"FULL_SYN","source":"NCI-GLOSS","code":"CDR0000045135"},{"name":"Melanoma","type":"Display_Name"}],"children":[{"code":"C3802","name":"Amelanotic Melanoma"},{"code":"C8410","name":"Breast Melanoma"},{"code":"C131506","name":"Childhood Melanoma"},{"code":"C3510","name":"Cutaneous Melanoma"},{"code":"C4236","name":"Epithelioid Cell Melanoma"},{"code":"C9499","name":"Melanomatosis"},{"code":"C8925","name":"Metastatic Melanoma"},{"code":"C66756","name":"Mixed Epithelioid and Spindle Cell Melanoma"},{"code":"C8711","name":"Non-Cutaneous Melanoma"},{"code":"C8562","name":"Ocular Melanoma"},{"code":"C118828","name":"Orbital Melanoma"},{"code":"C162547","name":"Penile Melanoma"},{"code":"C7087","name":"Recurrent Melanoma"},{"code":"C147983","name":"Refractory Melanoma"},{"code":"C4228","name":"Regressing Melanoma"},{"code":"C4237","name":"Spindle Cell Melanoma"},{"code":"C148517","name":"Unresectable Melanoma"}],"inverseAssociations":[{"type":"Has_NICHD_Parent","relatedCode":"C131506","relatedName":"Childhood Melanoma"}],"maps":[{"type":"Related To","targetName":"8720/3","targetTermGroup":"PT","targetCode":"MORPH","targetTerminology":"GDC"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermGroup":"PT","targetCode":"8720/3","targetTerminology":"ICDO3","targetTerminologyVersion":"3.1"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermGroup":"PT","targetCode":"8720/3","targetTerminology":"ICDO3","targetTerminologyVersion":"3.2"},{"type":"Related To","targetName":"Malignant melanoma, NOS","targetTermGroup":"PT","targetCode":"PD","targetTerminology":"GDC"},{"type":"Has
Synonym","targetName":"Melanoma","targetTermGroup":"LLT","targetCode":"10053571","targetTerminology":"MedDRA","targetTerminologyVersion":"18.1"},{"type":"Has Synonym","targetName":"Melanoma","targetTermGroup":"PT","targetCode":"RPD","targetTerminology":"GDC"},{"type":"Has Synonym","targetName":"Melanoma, NOS","targetTermGroup":"PT","targetCode":"PD","targetTerminology":"GDC"}]}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept part

`ConceptTests.testGetConceptPartXXX()` - Return concept part information for a given terminology, concept part, and code.  XXX is a stand-in for the various parts.  The actual tests contain calls for Children, Parents, Roles, Associations, InverseRoles,
InverseAssociations, Maps, and DisjointWith.

Here is a sample of the output for `ConceptTests.testGetConceptPartChildren()`.


```
2020-06-17T12:08:02-07:00 INFO  : Get concept by code - C3224
2020-06-17T12:08:02-07:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-17T12:08:02-07:00 INFO  :   concept = [{"code":"C3802","name":"Amelanotic Melanoma"}, {"code":"C8410","name":"Breast Melanoma"}, {"code":"C131506","name":"Childhood Melanoma"}, {"code":"C3510","name":"Cutaneous Melanoma"}, {"code":"C4236","name":"Epithelioid Cell Melanoma"}, {"code":"C9499","name":"Melanomatosis"}, {"code":"C8925","name":"Metastatic Melanoma"}, {"code":"C66756","name":"Mixed Epithelioid and Spindle Cell Melanoma"}, {"code":"C8711","name":"Non-Cutaneous Melanoma"}, {"code":"C8562","name":"Ocular Melanoma"}, {"code":"C118828","name":"Orbital Melanoma"}, {"code":"C162547","name":"Penile Melanoma"}, {"code":"C7087","name":"Recurrent Melanoma"}, {"code":"C147983","name":"Refractory Melanoma"}, {"code":"C4228","name":"Regressing Melanoma"}, {"code":"C4237","name":"Spindle Cell Melanoma"}, {"code":"C148517","name":"Unresectable Melanoma"}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get descendants

`ConceptTests.testGetDescendants()` - Return concept descendants information for a given terminology and code. The call client can be constrained by a maxLevel to prevent going deeper than a certain amount. Level 0 entries in the result are the direct children.  The test sets the max level to 4.

```
2020-08-04T17:58:58-04:00 INFO  : Get concept by code - C3224
2020-08-04T17:58:58-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-08-04T17:58:58-04:00 INFO  :   descendants = [{"code":"C3802","name":"Amelanotic Melanoma","level":0}, {"code":"C8410","name":"Breast Melanoma","level":0,"leaf":true}, {"code":"C131506","name":"Childhood Melanoma","level":0,"leaf":true}, {"code":"C3510","name":"Cutaneous Melanoma","level":0}, {"code":"C4236","name":"Epithelioid Cell Melanoma","level":0}, {"code":"C9499","name":"Melanomatosis","level":0}, {"code":"C8925","name":"Metastatic Melanoma","level":0}, {"code":"C66756","name":"Mixed Epithelioid and Spindle Cell Melanoma","level":0}, {"code":"C8711","name":"Non-Cutaneous Melanoma","level":0}, {"code":"C8562","name":"Ocular Melanoma","level":0}, {"code":"C118828","name":"Orbital Melanoma","level":0,"leaf":true}, {"code":"C162547","name":"Penile Melanoma","level":0,"leaf":true}, {"code":"C7087","name":"Recurrent Melanoma","level":0}, {"code":"C147983","name":"Refractory Melanoma","level":0}, {"code":"C4228","name":"Regressing Melanoma","level":0}, {"code":"C4237","name":"Spindle Cell Melanoma","level":0}, {"code":"C148517","name":"Unresectable Melanoma","level":0}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all properties

`MetadataTests.testGetProperties()` - Return all properties for a given terminology with default include setting (minimal).

```
2020-08-04T17:59:44-04:00 INFO  : Get all properties for ncit (default include)
2020-08-04T17:59:44-04:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2020-08-04T17:59:44-04:00 INFO  :   P325 = {"code":"P325","name":"ALT_DEFINITION","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   P302 = {"code":"P302","name":"Accepted_Therapeutic_Use_For","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   P216 = {"code":"P216","name":"BioCarta_ID","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   P210 = {"code":"P210","name":"CAS_Registry","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   P368 = {"code":"P368","name":"CHEBI_ID","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   P350 = {"code":"P350","name":"Chemical_Formula","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   P310 = {"code":"P310","name":"Concept_Status","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   P322 = {"code":"P322","name":"Contributing_Source","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   P97 = {"code":"P97","name":"DEFINITION","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   P98 = {"code":"P98","name":"DesignNote","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   P107 = {"code":"P107","name":"Display_Name","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   P321 = {"code":"P321","name":"EntrezGene_ID","terminology":"ncit","version":"20.07d"}
...
```


[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get property by code (or label)

`MetadataTests.testGetProperty()` - Return property for the specified code or label.  The test shows a comple of examples of how to parameterize this.

```
2020-08-04T17:59:44-04:00 INFO  : Get P302 (full information)
2020-08-04T17:59:44-04:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2020-08-04T17:59:44-04:00 INFO  :   P302 = {"code":"P302","name":"Accepted_Therapeutic_Use_For","terminology":"ncit","version":"20.07d","synonyms":[{"name":"Accepted_Therapeutic_Use_For","type":"Preferred_Name"},{"name":"Accepted_Therapeutic_Use_For","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Accepted_Therapeutic_Use_For","type":"Display_Name"}],"definitions":[{"definition":"A property representing a disease or condition for which this drug is an accepted treatment. Used in the Drug, Food, Chemical or Biomedical Material branch.","source":"NCI"}],"properties":[{"type":"http://www.w3.org/1999/02/22-rdf-syntax-ns#type","value":"http://www.w3.org/2002/07/owl#AnnotationProperty"},{"type":"Semantic_Type","value":"Conceptual Entity"},{"type":"http://www.w3.org/2000/01/rdf-schema#range","value":"http://www.w3.org/2001/XMLSchema#string"}]}
2020-08-04T17:59:44-04:00 INFO  : Get Accepted_Therapeutic_Use_For (minimal information)
2020-08-04T17:59:44-04:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2020-08-04T17:59:44-04:00 INFO  :   Accepted_Therapeutic_Use_For = {"code":"P302","name":"Accepted_Therapeutic_Use_For","terminology":"ncit","version":"20.07d"}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all qualifiers

`MetadataTests.testGetQualifiers()` - Return all qualifiers for a given terminology with default include setting (minimal).

```
2020-08-04T17:59:45-04:00 INFO  : Get all qualifiers for ncit (default include)
2020-08-04T17:59:45-04:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2020-08-04T17:59:45-04:00 INFO  :   P378 = {"code":"P378","name":"Definition Source","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:45-04:00 INFO  :   P381 = {"code":"P381","name":"attribution","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:45-04:00 INFO  :   P383 = {"code":"P383","name":"term-group","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:45-04:00 INFO  :   P384 = {"code":"P384","name":"term-source","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:45-04:00 INFO  :   P385 = {"code":"P385","name":"Source Code","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:45-04:00 INFO  :   P386 = {"code":"P386","name":"Subsource Name","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:45-04:00 INFO  :   P387 = {"code":"P387","name":"go-id","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:45-04:00 INFO  :   P389 = {"code":"P389","name":"go-evi","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:45-04:00 INFO  :   P390 = {"code":"P390","name":"go-source","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:45-04:00 INFO  :   P391 = {"code":"P391","name":"source-date","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:45-04:00 INFO  :   P393 = {"code":"P393","name":"Relationship_to_Target","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:45-04:00 INFO  :   P394 = {"code":"P394","name":"Target_Term_Type","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:45-04:00 INFO  :   P395 = {"code":"P395","name":"Target_Code","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:45-04:00 INFO  :   P396 = {"code":"P396","name":"Target_Terminology","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:45-04:00 INFO  :   P397 = {"code":"P397","name":"Target_Terminology_Version","terminology":"ncit","version":"20.07d"}

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get qualifier by code (or label)

`MetadataTests.testGetQualifier()` - Return qualifier for the specified code or label.  The test shows a comple of examples of how to parameterize this.

```
2020-08-04T17:59:44-04:00 INFO  : Get P387 (full information)
2020-08-04T17:59:44-04:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2020-08-04T17:59:44-04:00 INFO  :   P387 = {"code":"P387","name":"go-id","terminology":"ncit","version":"20.07d","synonyms":[{"name":"go-id","type":"Preferred_Name"}],"definitions":[{"definition":"A property representing a unique zero-padded seven digit identifier supplied by the Gene Ontology (GO) that has no inherent meaning or relation to the position of the term in GO and is prefixed by \"GO:\".","source":"NCI"}],"properties":[{"type":"http://www.w3.org/1999/02/22-rdf-syntax-ns#type","value":"http://www.w3.org/2002/07/owl#AnnotationProperty"},{"type":"http://www.w3.org/2000/01/rdf-schema#range","value":"http://www.w3.org/2001/XMLSchema#string"},{"type":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#required","value":"true"}]}
2020-08-04T17:59:44-04:00 INFO  : Get go-id (minimal information)
2020-08-04T17:59:44-04:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2020-08-04T17:59:44-04:00 INFO  :   go-id = {"code":"P387","name":"go-id","terminology":"ncit","version":"20.07d"}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get qualifier values by code (or label)

`MetadataTests.testGetQualifierValues()` - Return distinct value set for the qualifier with the specified code or label .

```
2020-08-04T17:59:45-04:00 INFO  : Get qualifier values for - P383
2020-08-04T17:59:45-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-08-04T17:59:45-04:00 INFO  :   concept = [AB, AD, AQ, AQS, BR, CA2, CA3, CN, CNU, CS, DN, EDQM-HC, FB, HD, PT, SN, SY]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all roles

`MetadataTests.testGetRoles()` - Return all roles.

```
2020-08-04T17:59:43-04:00 INFO  : Get all roles for ncit (default include)
2020-08-04T17:59:43-04:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2020-08-04T17:59:43-04:00 INFO  :   R156 = {"code":"R156","name":"Allele_Absent_From_Wild-type_Chromosomal_Location","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:43-04:00 INFO  :   R153 = {"code":"R153","name":"Allele_Has_Abnormality","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:43-04:00 INFO  :   R159 = {"code":"R159","name":"Allele_Has_Activity","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:43-04:00 INFO  :   R155 = {"code":"R155","name":"Allele_In_Chromosomal_Location","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:43-04:00 INFO  :   R158 = {"code":"R158","name":"Allele_Plays_Altered_Role_In_Process","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:43-04:00 INFO  :   R160 = {"code":"R160","name":"Allele_Plays_Role_In_Metabolism_Of_Chemical_Or_Drug","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:43-04:00 INFO  :   R81 = {"code":"R81","name":"Anatomic_Structure_Has_Location","terminology":"ncit","version":"20.07d"}
...
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get role by code (or label)

`MetadataTests.testGetRole()` - Returns a role definition for a specified code.  The test shows a comple of examples of how to parameterize this.


Return role for the specified code or label.

```
2020-08-04T17:59:44-04:00 INFO  : Get R123 (full information)
2020-08-04T17:59:44-04:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2020-08-04T17:59:44-04:00 INFO  :   R123 = {"code":"R123","name":"Chemotherapy_Regimen_Has_Component","terminology":"ncit","version":"20.07d","synonyms":[{"name":"Chemotherapy_Regimen_Has_Component","type":"Preferred_Name"},{"name":"Chemotherapy_Regimen_Has_Component","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Chemotherapy_Regimen_Has_Component","type":"Display_Name"}],"definitions":[{"definition":"A role used to specify the component agents which are used in a particular chemotherapy regimen or agent combination. The domain and the range for this role are 'Chemotherapy Regimen or Agent Combination' and 'Drug, Food, Chemical or Biomedical Material', respectively.","source":"NCI"}],"properties":[{"type":"http://www.w3.org/1999/02/22-rdf-syntax-ns#type","value":"http://www.w3.org/2002/07/owl#ObjectProperty"},{"type":"Semantic_Type","value":"Conceptual Entity"},{"type":"http://www.w3.org/2000/01/rdf-schema#range","value":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C1908"},{"type":"http://www.w3.org/2000/01/rdf-schema#domain","value":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C12218"}]}
2020-08-04T17:59:44-04:00 INFO  : Get Chemotherapy_Regimen_Has_Component (minimal information)
2020-08-04T17:59:44-04:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2020-08-04T17:59:44-04:00 INFO  :   Chemotherapy_Regimen_Has_Component = {"code":"R123","name":"Chemotherapy_Regimen_Has_Component","terminology":"ncit","version":"20.07d"}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all associations

`MetadataTests.testGetAssociations()` - Return all associations.

```
2020-08-04T17:59:44-04:00 INFO  : Get all associations for ncit (default include)
2020-08-04T17:59:44-04:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2020-08-04T17:59:44-04:00 INFO  :   A8 = {"code":"A8","name":"Concept_In_Subset","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   A10 = {"code":"A10","name":"Has_CDRH_Parent","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   A15 = {"code":"A15","name":"Has_CTCAE_5_Parent","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   A12 = {"code":"A12","name":"Has_Data_Element","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   A6 = {"code":"A6","name":"Has_Free_Acid_Or_Base_Form","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   A16 = {"code":"A16","name":"Has_INC_Parent","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   A11 = {"code":"A11","name":"Has_NICHD_Parent","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   A23 = {"code":"A23","name":"Has_PCDC_Data_Type","terminology":"ncit","version":"20.07d"}
2020-08-04T17:59:44-04:00 INFO  :   A19 = {"code":"A19","name":"Has_Pharmaceutical_Administration_Method","terminology":"ncit","version":"20.07d"}
...
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get association by code (or label)

`MetadataTests.testGetAssociation()` - Return association for the specified code or label.  The test shows a comple of examples of how to parameterize this.


```
2020-08-04T18:13:00-04:00 INFO  : Get A10 (full information)
2020-08-04T18:13:00-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-08-04T18:13:00-04:00 INFO  :   A10 = {"code":"A10","name":"Has_CDRH_Parent","terminology":"ncit","version":"20.07d","synonyms":[{"name":"Has_CDRH_Parent","type":"Preferred_Name"},{"name":"Has_CDRH_Parent","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Has_CDRH_Parent","type":"Display_Name"}],"definitions":[{"definition":"An association created to allow the source CDRH to assign a parent to each concept with the intent of creating a hierarchy that includes only terms in which they are the contributing source.","source":"NCI"}],"properties":[{"type":"http://www.w3.org/1999/02/22-rdf-syntax-ns#type","value":"http://www.w3.org/2002/07/owl#AnnotationProperty"},{"type":"Semantic_Type","value":"Conceptual Entity"},{"type":"http://www.w3.org/2000/01/rdf-schema#range","value":"http://www.w3.org/2001/XMLSchema#anyURI"}]}
2020-08-04T18:13:01-04:00 INFO  : Get Has_CDRH_Parent (minimal information)
2020-08-04T18:13:01-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-08-04T18:13:01-04:00 INFO  :   Has_CDRH_Parent = {"code":"A10","name":"Has_CDRH_Parent","terminology":"ncit","version":"20.07d"}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all term types

`MetadataTests.testGetTermTypes()` - Return  metadata for all term types for the specified terminology.

```
2020-08-04T18:13:01-04:00 INFO  : Get term types by terminology - ncit
2020-08-04T18:13:01-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-08-04T18:13:01-04:00 INFO  :   term types = [{"code":"AB","name":"Abbreviation","terminology":"ncit"}, {"code":"AD","name":"Adjectival form (and other parts of grammar)","terminology":"ncit"}, {"code":"AQ*","name":"Antiquated preferred term","terminology":"ncit"}, {"code":"AQS","name":"Antiquated term, use when there are antiquated synonyms within a concept","terminology":"ncit"}, {"code":"BR","name":"US brand name, which may be trademarked","terminology":"ncit"}, {"code":"CA2","name":"ISO 3166 alpha-2 country code","terminology":"ncit"}, {"code":"CA3","name":"ISO 3166 alpha-3 country code","terminology":"ncit"}, {"code":"CN","name":"Drug study code","terminology":"ncit"}, {"code":"CNU","name":"ISO 3166 numeric country code","terminology":"ncit"}, {"code":"CS","name":"US State Department country code","terminology":"ncit"}, {"code":"DN","name":"Display name","terminology":"ncit"}, {"code":"EDQM-HC","terminology":"ncit"}, {"code":"FB","name":"Foreign brand name, which may be trademarked","terminology":"ncit"}, {"code":"HD*","name":"Header (groups concepts, but not used for coding data)","terminology":"ncit"}, {"code":"PT*","name":"Preferred term","terminology":"ncit"}, {"code":"SN","name":"Chemical structure name","terminology":"ncit"}, {"code":"SY","name":"Synonym","terminology":"ncit"}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get root concepts

`ConceptTests.testGetRoots()` - Return concept roots for the specified terminology.

```
2020-06-24T20:28:48-04:00 INFO  : Get concept by terminologyncit
2020-06-24T20:28:48-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T20:28:48-04:00 INFO  :   concept = [{"code":"C12913","name":"Abnormal Cell"}, {"code":"C43431","name":"Activity"}, {"code":"C12219","name":"Anatomic Structure, System, or Substance"}, {"code":"C20633","name":"Biochemical Pathway"}, {"code":"C17828","name":"Biological Process"}, {"code":"C12218","name":"Chemotherapy Regimen or Agent Combination"}, {"code":"C20181","name":"Conceptual Entity"}, {"code":"C20047","name":"Diagnostic or Prognostic Factor"}, {"code":"C7057","name":"Disease, Disorder or Finding"}, {"code":"C1908","name":"Drug, Food, Chemical or Biomedical Material"}, {"code":"C22188","name":"Experimental Organism Anatomical Concept"}, {"code":"C22187","name":"Experimental Organism Diagnosis"}, {"code":"C16612","name":"Gene"}, {"code":"C26548","name":"Gene Product"}, {"code":"C97325","name":"Manufactured Object"}, {"code":"C3910","name":"Molecular Abnormality"}, {"code":"C14250","name":"Organism"}, {"code":"C20189","name":"Property or Attribute"}, {"code":"C28428","name":"Retired Concept"}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get paths to/from root from a code

`ConceptTests.testGetPathToRoot()` - Return paths to the root concept from a specified terminology and code.

```
2020-06-24T20:28:49-04:00 INFO  : Get path to root by code - C3224
2020-06-24T20:28:49-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T20:28:49-04:00 INFO  :   concept = [[{"code":"C7057","name":"Disease, Disorder or Finding","level":0}, {"code":"C2991","name":"Disease or Disorder","level":1}, {"code":"C3262","name":"Neoplasm","level":2}, {"code":"C4741","name":"Neoplasm by Morphology","level":3}, {"code":"C7058","name":"Melanocytic Neoplasm","level":4}, {"code":"C3224","name":"Melanoma","level":5}], [{"code":"C7057","name":"Disease, Disorder or Finding","level":0}, {"code":"C2991","name":"Disease or Disorder","level":1}, {"code":"C3262","name":"Neoplasm","level":2}, {"code":"C7062","name":"Neoplasm by Special Category","level":3}, {"code":"C9305","name":"Malignant Neoplasm","level":4}, {"code":"C3224","name":"Melanoma","level":5}]]
```

`ConceptTests.testGetPathFromRoot()` - Return paths from the root concept from a specified terminology and code.

```
2020-06-24T20:28:49-04:00 INFO  : Get path to root by code - C3224
2020-06-24T20:28:49-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T20:28:49-04:00 INFO  :   concept = [[{"code":"C7057","name":"Disease, Disorder or Finding","level":0}, {"code":"C2991","name":"Disease or Disorder","level":1}, {"code":"C3262","name":"Neoplasm","level":2}, {"code":"C4741","name":"Neoplasm by Morphology","level":3}, {"code":"C7058","name":"Melanocytic Neoplasm","level":4}, {"code":"C3224","name":"Melanoma","level":5}], [{"code":"C7057","name":"Disease, Disorder or Finding","level":0}, {"code":"C2991","name":"Disease or Disorder","level":1}, {"code":"C3262","name":"Neoplasm","level":2}, {"code":"C7062","name":"Neoplasm by Special Category","level":3}, {"code":"C9305","name":"Malignant Neoplasm","level":4}, {"code":"C3224","name":"Melanoma","level":5}]]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get paths to an ancestor code from a code

`ConceptTests.testGetPathToAncestor()` - Return paths to the root concept for a specified terminology and code.


```
2020-06-24T20:28:50-04:00 INFO  : Get path to ancestor code by code - C3224/C2991
2020-06-24T20:28:50-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T20:28:50-04:00 INFO  :   concept = [[{"code":"C3224","name":"Melanoma","level":0}, {"code":"","name":"Melanocytic Neoplasm","level":1}, {"code":"C4741","name":"Neoplasm by Morphology","level":2}, {"code":"C3262","name":"Neoplasm","level":3}, {"code":"C2991","name":"Disease or Disorder","level":4}], [{"code":"C3224","name":"Melanoma","level":0}, {"code":"C9305","name":"Malignant Neoplasm","level":1}, {"code":"C7062","name":"Neoplasm by Special Category","level":2}, {"code":"C3262","name":"Neoplasm","level":3}, {"code":"C2991","name":"Disease or Disorder","level":4}]]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get subtree

`ConceptTests.testGetSubtreeForCode()` - Return an entire subtree graph from the root concepts to a specified node. This call is specifically tuned to support a tree-view based hierarchy browser in a UI.

```
   2020-06-24T20:28:50-04:00 INFO  : Get subtree graph by code - C3224
2020-06-24T20:28:50-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T20:28:50-04:00 INFO  :   concept = [{"code":"C12913","label":"Abnormal Cell","leaf":false,"children":[{"code":"C36843","label":"Abnormal Connective and Soft Tissue Cell","level":0,"leaf":false,"children":[{"code":"C37086","label":"Abnormal Endothelial Cell","level":1,"leaf":false},{"code":"C36832","label":"Abnormal ... very long payload..
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term

`SearchTests.testFindConceptsBySearchTerm()` - Get concepts matching a search term within a specified terminology.

```
2020-06-24T20:28:52-04:00 INFO  : Get concept by search term=melanoma
2020-06-24T20:28:52-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T20:28:52-04:00 INFO  :   concept = {"total":1342,"timeTaken":95,"parameters":{"term":"melanoma","type":"contains","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"20.05d"},{"code":"C91477","name":"Melanoma Pathway","terminology":"ncit","version":"20.05d"},{"code":"C103113","name":"NCI CTEP SDC Melanoma Sub-Category Terminology","terminology":"ncit","version":"20.05d"},{"code":"C21790","name":"Mouse Melanoma","terminology":"ncit","version":"20.05d"},{"code":"C7712","name":"Uveal Melanoma","terminology":"ncit","version":"20.05d"}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by concept status)

`SearchTests.testFindConceptsBySearchTermConceptStatus()` - Get concepts matching a search term within a specified terminology and restrict the search results by concept status of "Header_Concept". This example uses paging to get only the first 5 results.

```
2020-06-24T21:14:57-04:00 INFO  : Get concept by search term=respiratory, status=Header_Concept
2020-06-24T21:14:57-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T21:14:57-04:00 INFO  :   concept = {"total":1,"timeTaken":200,"parameters":{"term":"respiratory","type":"contains","include":"minimal","from
Record":0,"pageSize":5,"conceptStatus":["Header_Concept"],"terminology":["ncit"]},"concepts":[{"code":"C13037","name":"Respiratory System Part","terminolog
y":"ncit","version":"20.05d"}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by contributing source)

`SearchTests.testFindConceptsBySearchTermContributingSource()` - Get concepts matching a search term within a specified terminology and restrict the search results by a contributing source of "CDISC". This example uses paging to get only the first 5 results.

```
2020-06-24T21:15:02-04:00 INFO  : Get concept by search term=melanoma, contributingSource=CDISC
2020-06-24T21:15:02-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T21:15:02-04:00 INFO  :   concept = {"total":1342,"timeTaken":144,"parameters":{"term":"melanoma","type":"contains","include":"minimal","from
Record":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"20.05d"},{"code":"C91477","nam
e":"Melanoma Pathway","terminology":"ncit","version":"20.05d"},{"code":"C103113","name":"NCI CTEP SDC Melanoma Sub-Category Terminology","terminology":"nci
t","version":"20.05d"},{"code":"C21790","name":"Mouse Melanoma","terminology":"ncit","version":"20.05d"},{"code":"C7712","name":"Uveal Melanoma","terminolo
gy":"ncit","version":"20.05d"}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by definition source)

`SearchTests.testFindConceptsBySearchTermDefinitionSource()` - Get concepts matching a search term within a specified terminology and restrict the search results by a definition source of "NCI". This example uses paging to get only the first 5 results.

```
2020-06-24T21:15:00-04:00 INFO  : Get concept by search term=dsDNA, definitionSource=NCI
2020-06-24T21:15:00-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T21:15:00-04:00 INFO  :   concept = {"total":1074,"timeTaken":78,"parameters":{"term":"melanoma","type":"contains","include":"minimal","fromR
ecord":0,"pageSize":5,"definitionSource":["NCI"],"terminology":["ncit"]},"concepts":[{"code":"C35783","name":"Ciliary Body Mixed Cell Melanoma","terminolog
y":"ncit","version":"20.05d"},{"code":"C35782","name":"Choroid Mixed Cell Melanoma","terminology":"ncit","version":"20.05d"},{"code":"C35781","name":"Mixed
 Cell Uveal Melanoma","terminology":"ncit","version":"20.05d"},{"code":"C117183","name":"M14","terminology":"ncit","version":"20.05d"},{"code":"C117192","n
ame":"UACC-62","terminology":"ncit","version":"20.05d"}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by synonym source and termgroup)

`SearchTests.testFindConceptsBySearchTermSynonymSource()` - Get concepts matching a search term within a specified terminology and
restrict the search results by a synonym source of "NCI" and synonymTermGroup of "PT".

```
2020-06-24T21:14:57-04:00 INFO  : Get concept by search term=dsDNA, synonymSource=NCI
2020-06-24T21:14:57-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T21:14:57-04:00 INFO  :   concept = {"total":2,"timeTaken":42,"parameters":{"term":"dsDNA","type":"contains","include":"minimal","fromRecord"
:0,"pageSize":10,"synonymSource":["NCI"],"terminology":["ncit"]},"concepts":[{"code":"C14348","name":"Double Stranded DNA Virus","terminology":"ncit","vers
ion":"20.05d"},{"code":"C114565","name":"Anti-ds DNA Antibody","terminology":"ncit","version":"20.05d"}]}
TBD
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (where search term is a code)

`SearchTests.testFindConceptsBySearchTermAsCode()` - Get concepts matching a search term within a specified terminology and restrict the search results using a code as the search term. 

```
2020-06-24T21:15:01-04:00 INFO  : Get concept by search term=C3224
2020-06-24T21:15:01-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T21:15:01-04:00 INFO  :   concept = {"total":1,"timeTaken":33,"parameters":{"term":"C3224","type":"contains","include":"minimal","fromRecord"
:0,"pageSize":10,"terminology":["ncit"]},"concepts":[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"20.05d"}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=match)

`SearchTests.testFindConceptsBySearchTermMatch()` - Get concepts matching a search term within a specified terminology and a search type of "match". This example uses paging to get only the first 5 results.

```
2020-06-24T21:15:03-04:00 INFO  : Get concept by search term=enzyme, type=match
2020-06-24T21:15:03-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T21:15:03-04:00 INFO  :   concept = {"total":1458,"timeTaken":110,"parameters":{"term":"enzyme","type":"match","include":"minimal","fromRecor
d":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16554","name":"Enzyme","terminology":"ncit","version":"20.05d"},{"code":"C38498","name":"Hy
poxanthine Phosphoribosyltransferase 2","terminology":"ncit","version":"20.05d"},{"code":"C82689","name":"Ribonuclease QBI-139","terminology":"ncit","versi
on":"20.05d"},{"code":"C158419","name":"Translocase","terminology":"ncit","version":"20.05d"},{"code":"C150306","name":"E3 Ubiquitin-Protein Ligase RING2",
"terminology":"ncit","version":"20.05d"}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=startsWith)

`SearchTests.testFindConceptsBySearchTermStartsWith()` - Get concepts matching a search term within a specified terminology and a search type of "startsWith". This example uses paging to get only the first 5 results.

```
2020-06-24T21:14:59-04:00 INFO  : Get concept by search term=enzyme, type=startsWith
2020-06-24T21:14:59-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T21:14:59-04:00 INFO  :   concept = {"total":1506,"timeTaken":86,"parameters":{"term":"enzyme","type":"startsWith","include":"minimal","fromR
ecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16554","name":"Enzyme","terminology":"ncit","version":"20.05d"},{"code":"C147130","name
":"Enzyme Unit per Liter","terminology":"ncit","version":"20.05d"},{"code":"C122205","name":"Enzyme Immunoassay Unit","terminology":"ncit","version":"20.05
d"},{"code":"C2699","name":"Enzyme Catalyzed Therapeutic Activation Agent","terminology":"ncit","version":"20.05d"},{"code":"C40576","name":"Enzyme Activit
y Alteration","terminology":"ncit","version":"20.05d"}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=phrase)

`SearchTests.testFindConceptsBySearchTermPhrase()` - Get concepts matching a search term within a specified terminology and a search type of "phrase". This example uses paging to get only the first 5 results.

```
2020-06-24T21:15:01-04:00 INFO  : Get concept by search term=malignant melanoma, type=phrase
2020-06-24T21:15:01-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T21:15:01-04:00 INFO  :   concept = {"total":80,"timeTaken":148,"parameters":{"term":"malignant melanoma","type":"phrase","include":"minimal"
,"fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16317","name":"B16 Malignant Melanoma","terminology":"ncit","version":"20.05d"},
{"code":"C16835","name":"Experimental Malignant Melanoma","terminology":"ncit","version":"20.05d"},{"code":"C9088","name":"Iris Melanoma","terminology":"nc
it","version":"20.05d"},{"code":"C4558","name":"Ciliary Body Melanoma","terminology":"ncit","version":"20.05d"},{"code":"C16662","name":"Harding-Passey Mal
ignant Melanoma","terminology":"ncit","version":"20.05d"}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=fuzzy)

`SearchTests.testFindConceptsBySearchTermFuzzy()` - Get concepts matching a search term within a specified terminology and a search type of "fuzzy". This example uses paging to get only the first 5 results.

```
2020-06-24T21:15:03-04:00 INFO  : Get concept by search term=enzyme, type=fuzzy
2020-06-24T21:15:03-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T21:15:03-04:00 INFO  :   concept = {"total":3251,"timeTaken":213,"parameters":{"term":"enzyme","type":"fuzzy","include":"minimal","fromRecor
d":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16554","name":"Enzyme","terminology":"ncit","version":"20.05d"},{"code":"C40577","name":"En
zyme Inhibition","terminology":"ncit","version":"20.05d"},{"code":"C21281","name":"Enzyme Gene","terminology":"ncit","version":"20.05d"},{"code":"C40498","
name":"Enzyme Interaction","terminology":"ncit","version":"20.05d"},{"code":"C64778","name":"Enzyme Unit","terminology":"ncit","version":"20.05d"}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=AND)

`SearchTests.testFindConceptsBySearchTermAnd()` - Get concepts matching a search term within a specified terminology and a search type of "AND". This example uses paging to get only the first 5 results.

```
2020-06-24T21:15:00-04:00 INFO  : Get concept by search term=malignant melanoma, type=AND
2020-06-24T21:15:00-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T21:15:00-04:00 INFO  :   concept = {"total":130,"timeTaken":103,"parameters":{"term":"malignant melanoma","type":"AND","include":"minimal","
fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C60451","name":"Rat Malignant Melanoma","terminology":"ncit","version":"20.05d"},{"
code":"C16835","name":"Experimental Malignant Melanoma","terminology":"ncit","version":"20.05d"},{"code":"C16317","name":"B16 Malignant Melanoma","terminol
ogy":"ncit","version":"20.05d"},{"code":"C16662","name":"Harding-Passey Malignant Melanoma","terminology":"ncit","version":"20.05d"},{"code":"C60471","name
":"Rat Malignant Uveal Melanoma","terminology":"ncit","version":"20.05d"}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=OR)

`SearchTests.testFindConceptsBySearchTermOr()` - Get concepts matching a search term within a specified terminology and a search type of "OR". This example uses paging to get only the first 5 results.

```
2020-06-24T21:15:00-04:00 INFO  : Get concept by search term=malignant melanoma, type=OR
2020-06-24T21:15:00-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T21:15:00-04:00 INFO  :   concept = {"total":11112,"timeTaken":128,"parameters":{"term":"malignant melanoma","type":"OR","include":"minimal",
"fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C60451","name":"Rat Malignant Melanoma","terminology":"ncit","version":"20.05d"},{
"code":"C16835","name":"Experimental Malignant Melanoma","terminology":"ncit","version":"20.05d"},{"code":"C16317","name":"B16 Malignant Melanoma","termino
logy":"ncit","version":"20.05d"},{"code":"C16662","name":"Harding-Passey Malignant Melanoma","terminology":"ncit","version":"20.05d"},{"code":"C60471","nam
e":"Rat Malignant Uveal Melanoma","terminology":"ncit","version":"20.05d"}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (with highlights)

`SearchTests.testFindConceptsBySearchTermHighlights()` - Get concepts matching a search term within a specified terminology and include synonyms and highlighted text in the response. This example uses paging to get only the first 5 results.

```
2020-06-24T21:15:02-04:00 INFO  : Get concept by search term=XAV05295I5 (with highlights)
2020-06-24T21:15:02-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T21:15:02-04:00 INFO  :   concept = {"total":3299,"timeTaken":103,"parameters":{"term":"enzyme","type":"contains","include":"minimal","fromRe
cord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16554","name":"Enzyme","terminology":"ncit","version":"20.05d"},{"code":"C40577","name":
"Enzyme Inhibition","terminology":"ncit","version":"20.05d"},{"code":"C40498","name":"Enzyme Interaction","terminology":"ncit","version":"20.05d"},{"code":
"C21281","name":"Enzyme Gene","terminology":"ncit","version":"20.05d"},{"code":"C64778","name":"Enzyme Unit","terminology":"ncit","version":"20.05d"}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by property

`SearchTests.testFindConceptsByProperty()` - Get concepts matching a search term that is searched within a certain set of properties. The search results are set to include the property values so you can easily see the match.  The property setting here can be either based on code or on label

```
2020-06-24T20:28:48-04:00 INFO  : Get concept by search term - XAV05295I5
2020-06-24T20:28:48-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-06-24T20:28:48-04:00 INFO  :   concept = {"total":1,"timeTaken":24,"parameters":{"term":"XAV05295I5","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"property":["fda_unii_code"],"terminology":["ncit"]},"concepts":[{"code":"C61305","name":"Sivifene","terminology":"ncit","version":"20.05d"}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)
