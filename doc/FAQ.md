# Frequently Asked Questions

### General Questions

* **What is EVS REST API?**
  An open-source REST API-based service for accessing standard healthcare terminologies relevant for cancer research.  It combines products produced by the National Cancer Institute (NCI) such as NCI Thesaurus and NCI Methathesaurus, as well as content from other providers producing code systems relevant for clinical care and cancer research.

* **What is EVS Explore?**
  A web-based user interface for the EVS REST API allowing users to interact with standard healthcare terminology content through a web browser.

[Back to Top](#frequently-asked-questions)

### Questions about NCI Thesaurus

* **How often is NCI Thesaurus updated?**
  NCI Thesaurus is officially published on a monthly basis on the last non-holiday Monday of each month.  Data is processed and included in EVS REST API generally within the same week as files are published.

* **How can concepts matching a particular Semantic Type be found by the API?**
  This is handled by using "Search endpoint" of the EVS REST API to find concepts for a specific terminology and leverage the "property" and "value" parameters to specify a "Semantic_Type" property with a particular value, such as "Neoplastic Process". The "fromRecord" and "pageSize" parameters can be used to read more than the first ten results. This curl call represents a way to find NCI Thesaurus codes with Semantic_Type properties equal to "Neoplastic Process":
  
```
curl -X 'GET' \
  'https://api-evsrest.nci.nih.gov/api/v1/concept/ncit/search?fromRecord=0&pageSize=10&property=Semantic_Type&value=Neoplastic%20Process' \
  -H 'accept: application/json'
```

NOTE: it is not currently possible to search by properties within EVS Explore. However a future edition will enable an "advanced search" mechanism to support this behavior.


[Back to Top](#frequently-asked-questions)

