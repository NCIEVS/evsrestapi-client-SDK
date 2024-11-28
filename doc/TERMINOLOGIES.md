<a name="top" />

# EVSRESTAPI Supported Terminologies

Many of the API endpoints make use of an "terminology" parameter that indicates
which underlying terminology should be used for a given call. The list of valid
terminology parameters can be determined by making the metadata "get termionlogies"
call (e.g. https://api-evsrest.nci.nih.gov/api/v1/metadata/terminologies) and extracting
the "terminology" values from each array element.

NOTE: the "terminology_version" values can be used as well for this parameter to
identify a specific version. Using a terminology value, like 'ncit' without using
a version will always select the latest version (and latest "monthly" version in
the case of 'ncit').

### Terminologies currently supported

Additional terminologies will be supported in the future.

- ncit - NCI Thesaurus
- ncim - NCI Metathesaurus
- canmed - CanMED
- chebi - Chemical Entities of Biological Interest
- ctcae5 - CTCAE 5
- duo - Data Use Ontology
- go - Gene Ontology
- hgnc - HUGO Gene Nomenclature Committee
- hl7v30 - Health Level 7 Vocabulary (V3)
- icd10 = International Classification of Diseases, Tenth Revision
- icd10cm - The International Classification of Diseases, Tenth Revision, Clinical Modification
- icd9cm - The International Classification of Diseases, Ninth Revision, Clinical Modification
- loinc - Logical Observation Identifier Names and Codes
- ma - Mouse Anatomy: Anatomical Dictionary for the Adult Mouse
- mdr = Medical Dictionary for Regulatory Activities
- medrt - MED-RT
- mged - Microarray Gene Expression Data Ontology
- ndfrt - National Drug File Reference Terminology
- npo - NanoParticle Ontology
- obi - Ontology for Biomedical Investigations
- obib - The ontology for Biobanking
- pdq - Physician Data Query
- radlex - Radiology Lexicon
- snomedct_us - SNOMED Clinical Terms
- umlssemnet - UMLS Semantic Network: UMLS Semantic Network
- zfa - Zebrafish Model Organism Database

### Sample Codes

Following are sample codes you can use with each terminology for testing.

- ncit - C3224 - Melanoma
- ncim - C0025202 - Melanoma
- canmed - HCPCS_HPV_VACCINE - HPV Vaccine
- chebi - CHEBI:119915 - Fentanyl
- ctcae5 - C143201 - Disease progression
- duo - DUO_0000004	- no restriction
- go - GO:0008152 - metabolic process
- hgnc - HGNC:3430 - ERBB2
- hl7v30 - F - Female
- icd10 - D03.9 - Melanoma in situ, unspecified
- icd10cm - D03.9 - Melanoma in situ, unspecified
- icd9cm - 172.9 - Melanoma of skin, site unspecified
- loinc - 21526-9 - Sodium:MCnc:24H:Urine:Qn
- ma - MA:0000353 - stomach
- mdr - 10053571 - Melanoma
- medrt - N0000177915 - Acetaminophen
- mged - MO_526 - microeinstein_per_minute_and_square_meter
- ndfrt - N0000175556 - beta-Adrenergic Blocker [EPC]
- npo - NPO_197	- gold nanocage
- obi - OBI_0001906 - cancer cell line
- obib - OBI_0002200 - cannot be assessed determination
- pdq - CDR0000492706 - cantuzumab ravtansine
- radlex - 	RID28531 - ground-glass opacity
- snomedct_us - 73211009 - Diabetes mellitus
- umlssemnet - T046 - Disorder
- zfa - ZFA:0001383 - fin bud
