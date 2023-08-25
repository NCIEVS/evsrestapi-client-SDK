<a name="top" />

EVSRESTAPI Supported Terminologies
==================================

Many of the API endpoints make use of an "terminology" parameter that indicates
which underlying terminology should be used for a given call.  The list of valid
terminology parameters can be determined by making the metadata "get termionlogies"
call (e.g. https://api-evsrest.nci.nih.gov/api/v1/metadata/terminologies) and extracting
the "terminology" values from each array element.

NOTE: the "terminology_version" values can be used as well for this parameter to
identify a specific version.  Using a terminology value, like 'ncit' without using
a version will always select the latest version (and latest "monthly" version in
the case of 'ncit').

### Terminologies currently supported

Additional terminologies will be supported in the future.

 - ncit - NCI Thesaurus
 - ncim - NCI Metathesaurus
 - chebi - Chemical Entities of Biological Interest
 - go - Gene Ontology
 - hgnc - HUGO Gene Nomenclature Committee
 - icd10cm - ICD-10-CM: The International Classification of Diseases, Tenth Revision, Clinical Modification
 - icd9cm - ICD-9-CM: The International Classification of Diseases, Ninth Revision, Clinical Modification
 - mdr - MedDRA: Medical Dictionary for Regulatory Activities (**NOTE: license restricted)
 - medrt - Medication Reference Terminology)
 - umlssemnet - UMLS Semantic Network

### Sample Codes

Following are sample codes you can use with each terminology for testing.

 - ncit - C3224 - Melanoma
 - ncim - C0025202 - Melanoma
 - chebi - CHEBI:119915	- Fentanyl
 - go - GO:0008152 - metabolic process
 - hgnc - HGNC:3430	- ERBB2
 - icd10cm - D03.9 - Melanoma in situ, unspecified
 - icd9cm - 172.9 - Melanoma of skin, site unspecified
 - mdr - 10053571 - Melanoma
 - medrt - N0000177915 - Acetaminophen
 - umlssemnet - T046 - Disorder
