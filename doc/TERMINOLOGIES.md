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
 - chebi - Chemical Entities of Biological Interest
 - go - Gene Ontology
 - hgnc - HUGO Gene Nomenclature Committee
 - icd10cm - ICD-10-CM: The International Classification of Diseases, Tenth Revision, Clinical Modification
 - icd9cm - ICD-9-CM: The International Classification of Diseases, Ninth Revision, Clinical Modification
 - mdr - MedDRA: Medical Dictionary for Regulatory Activities
 - ncim - NCI Metathesaurus
