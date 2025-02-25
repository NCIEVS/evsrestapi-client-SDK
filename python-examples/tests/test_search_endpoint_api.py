import pytest
import string
import logging

from evs import ConceptResultList, MapResultList, SearchEndpointApi


@pytest.fixture
def search_api():
    """
    Instantiate the SearchEndpointsApi
    """
    return SearchEndpointApi()


class TestSearchEndpointApi:
    """
    API tests for SearchEndpointsApi. These tests will demonstrate how to call the API and log the
    information that is returned. The asserts are used to ensure that the data we are pulling align
    with what is expected based on how we are modeling the information.

    <p>NOTE: the asserts may be subject to change as the data evolves over time. Updating the tests
    to align with the data we expect may be needed.
    """
    # Create logger from pytest.ini settings
    logger = logging.getLogger(__name__)
    
    # Test Terminology
    terminology: string = "ncit"
    
    def test_search(self, search_api):
        """
        Get concept search results
        
        Use cases for search range from very simple term searches, use of paging parameters,
        additional filters, searches properties, roles, and associations, and so on. To further explore
        the range of search options, take a look at the https://github.com/NCIEVS/evsrestapi-client-SDK Github client
        SDK library created for the NCI EVS Rest API.
        """
        # ARRANGE - using global variable unless otherwise listed
        ascending: bool = True
        include: str = "minimal"
        from_record: int = 0
        page_size: int = 5
        expected_code: str = "C1000"
        contains_expected_code: bool = False
        
        # ACT
        response: ConceptResultList = search_api.search(None, self.terminology, None, None, None, ascending, include,
                                                        from_record, page_size, None, None, None, None, None, None,
                                                        None, None, None)
        
        # ASSERT
        assert response is not None
        assert response.concepts is not None
        for concept in response.concepts:
            assert concept.code is not None
            if expected_code == concept.code:
                contains_expected_code = True
                break
        assert contains_expected_code is True
        
        self.logger.info(f"Get search results for terminology - {self.terminology}")
        self.logger.info(f"    search results = {str(response)}")
    
    def test_search_filter_by_concept_status(self, search_api):
        """
        Get concept search results with concept status filter added
        """
        # ARRANGE - using global variable unless otherwise listed
        term: str = "respiratory"
        ascending: bool = True
        include: str = "minimal"
        concept_status: str = "Retired_Concept"
        from_record: int = 0
        page_size: int = 5
        expected_total: int = 19
        contains_expected_status: bool = False
        
        # ACT
        response: ConceptResultList = search_api.search(None, self.terminology, term, None, None, ascending, include,
                                                        from_record, page_size, concept_status, None, None, None, None,
                                                        None, None, None, None)
        
        # ASSERT
        assert response is not None
        assert response.total == expected_total, "FAIL: expected total doesn't match the actual"
        assert response.concepts is not None
        for concept in response.concepts:
            assert concept.concept_status is not None
            if concept_status == concept.concept_status:
                contains_expected_status = True
                break
        assert contains_expected_status is True
        
        self.logger.info(
            f"Get search results from {self.terminology} for term = {term}, concept status = {concept_status}")
        self.logger.info(f"    search results = {str(response)}")
    
    def test_search_filter_by_definition_source(self, search_api):
        """
        Get concept search results with definition source filter added
        """
        # ARRANGE - using global variable unless otherwise listed
        term: str = "dsDNA"
        type: str = "contains"
        ascending: bool = True
        include: str = "minimal"
        definition_source: str = "NCI"
        from_record: int = 0
        page_size: int = 5
        expected_total: int = 13
        
        # ACT
        response: ConceptResultList = search_api.search(None, self.terminology, term, type, None, ascending, include,
                                                        from_record, page_size, None, None, None, definition_source,
                                                        None, None, None, None, None)
        
        # ASSERT
        assert response is not None
        assert response.total == expected_total, "FAIL: expected total doesn't match actual"
        assert response.concepts is not None
        assert response.concepts[0] is not None
        
        self.logger.info(
            f"Get search results from {self.terminology} for term = {term}, definition source = {definition_source}")
        self.logger.info(f"    search results = {str(response)}")
    
    def test_search_filter_by_definition_type(self, search_api):
        """
        Get concept search results with definition type filter added
        """
        # ARRANGE - using global variable unless otherwise listed
        term: str = "melanoma"
        type: str = "contains"
        ascending: bool = True
        include: str = "minimal"
        definition_type: str = "DEFINITION"
        from_record: int = 0
        page_size: int = 5
        expected_total: int = 1451
        
        # ACT
        response: ConceptResultList = search_api.search(None, self.terminology, term, type, None, ascending, include,
                                                        from_record, page_size, None, None, None, None, definition_type,
                                                        None, None, None, None)
        
        # ASSERT
        assert response is not None
        assert response.total == expected_total, "FAIL: expected total doesn't match actual"
        assert response.concepts is not None
        assert response.concepts[0] is not None
        
        self.logger.info(
            f"Get search results from {self.terminology} for term = {term}, definition type = {definition_type}")
        self.logger.info(f"    search results = {str(response)}")
    
    def test_search_filter_by_synonym_source_and_term_type(self, search_api):
        """
        Get concept search results with synonym source and term type filters added
        """
        # ARRANGE - using global variable unless otherwise listed
        term: str = "dsDNA"
        type: str = "contains"
        ascending: bool = True
        include: str = "minimal"
        synonym_source: str = "NCI"
        term_type: str = "PT"
        from_record: int = 0
        page_size: int = 5
        expected_total: int = 14
        
        # ACT
        response: ConceptResultList = search_api.search(None, self.terminology, term, type, None, ascending, include,
                                                        from_record, page_size, None, None, None, None, None,
                                                        synonym_source, None, term_type, None)
        
        # ASSERT
        assert response is not None
        assert response.total == expected_total, "FAIL: expected total doesn't match actual"
        assert response.concepts is not None
        assert response.concepts[0] is not None
        
        self.logger.info(
            f"Get search results from {self.terminology} for term = {term}, synonym source = {synonym_source}, "
            f"term group = {term_type}")
        self.logger.info(f"    search results = {str(response)}")
    
    def test_search_filter_by_synonym_type(self, search_api):
        """
        Get concept search results with synonym type filter added
        """
        # ARRANGE - using global variable unless otherwise listed
        term: str = "dsDNA"
        type: str = "contains"
        ascending: bool = True
        include: str = "minimal"
        synonym_type: str = "FULL_SYN"
        from_record: int = 0
        page_size: int = 5
        expected_total: int = 14
        
        # ACT
        response: ConceptResultList = search_api.search(None, self.terminology, term, type, None, ascending, include,
                                                        from_record, page_size, None, None, None, None, None, None,
                                                        synonym_type, None, None)
        
        # ASSERT
        assert response is not None
        assert response.total == expected_total, "FAIL: expected total doesn't match actual"
        assert response.concepts is not None
        assert response.concepts[0] is not None
        
        self.logger.info(
            f"Get search results from {self.terminology} for term = {term}, synonym type = {synonym_type}")
        self.logger.info(f"    search results = {str(response)}")
    
    def test_search_by_code(self, search_api):
        """
        Get concept search results by term code
        """
        # ARRANGE - using global variable unless otherwise listed
        term: str = "C3224"
        type: str = "contains"
        ascending: bool = True
        include: str = "minimal"
        from_record: int = 0
        page_size: int = 5
        expected_total: int = 1
        
        # ACT
        response: ConceptResultList = search_api.search(None, self.terminology, term, type, None, ascending, include,
                                                        from_record, page_size, None, None, None, None, None, None,
                                                        None, None, None)
        
        # ASSERT
        assert response is not None
        assert response.total == expected_total, "FAIL: expected total doesn't match actual"
        assert response.concepts is not None
        assert response.concepts[0] is not None
        
        self.logger.info(f"Get search results from {self.terminology} for term = {term}")
        self.logger.info(f"    search results = {str(response)}")
    
    def test_search_by_type_match(self, search_api):
        """
        Get concept search results by using type match
        """
        # ARRANGE - using global variable unless otherwise listed
        term: str = "enzyme"
        type: str = "match"
        ascending: bool = True
        include: str = "minimal"
        from_record: int = 0
        page_size: int = 5
        expected_total: int = 1
        
        # ACT
        response: ConceptResultList = search_api.search(None, self.terminology, term, type, None, ascending, include,
                                                        from_record, page_size, None, None, None, None, None, None,
                                                        None, None, None)
        
        # ASSERT
        assert response is not None
        assert response.total == expected_total, "FAIL: expected total doesn't match actual"
        assert response.concepts is not None
        assert response.concepts[0] is not None
        
        self.logger.info(f"Get search results from {self.terminology} for term = {term}, type = {type}")
        self.logger.info(f"    search results = {str(response)}")
    
    def test_search_by_type_starts_with(self, search_api):
        """
        Get concept search results by using type starts with
        """
        # ARRANGE - using global variable unless otherwise listed
        term: str = "enzyme"
        type: str = "startsWith"
        ascending: bool = True
        include: str = "minimal"
        from_record: int = 0
        page_size: int = 5
        expected_total: int = 49
        
        # ACT
        response: ConceptResultList = search_api.search(None, self.terminology, term, type, None, ascending, include,
                                                        from_record, page_size, None, None, None, None, None, None,
                                                        None, None, None)
        
        # ASSERT
        assert response is not None
        assert response.total == expected_total, "FAIL: expected total doesn't match actual"
        assert response.concepts is not None
        assert response.concepts[0] is not None
        
        self.logger.info(f"Get search results from {self.terminology} for term = {term}, type = {type}")
        self.logger.info(f"    search results = {str(response)}")
    
    def test_search_by_type_phrase(self, search_api):
        """
        Get concept search results by using type phrase
        """
        # ARRANGE - using global variable unless otherwise listed
        term: str = "enzyme"
        type: str = "phrase"
        ascending: bool = True
        include: str = "minimal"
        from_record: int = 0
        page_size: int = 5
        expected_total: int = 270
        
        # ACT
        response: ConceptResultList = search_api.search(None, self.terminology, term, type, None, ascending, include,
                                                        from_record, page_size, None, None, None, None, None, None,
                                                        None, None, None)
        
        # ASSERT
        assert response is not None
        assert response.total == expected_total, "FAIL: expected total doesn't match actual"
        assert response.concepts is not None
        assert response.concepts[0] is not None
        
        self.logger.info(f"Get search results from {self.terminology} for term = {term}, type = {type}")
        self.logger.info(f"    search results = {str(response)}")
    
    def test_search_by_type_fuzzy(self, search_api):
        """
        Get concept search results by using type fuzzy
        """
        # ARRANGE - using global variable unless otherwise listed
        term: str = "enzyme"
        type: str = "fuzzy"
        ascending: bool = True
        include: str = "minimal"
        from_record: int = 0
        page_size: int = 5
        
        # ACT
        response: ConceptResultList = search_api.search(None, self.terminology, term, type, None, ascending, include,
                                                        from_record, page_size, None, None, None, None, None, None,
                                                        None, None, None)
        
        # ASSERT
        assert response is not None
        assert response.concepts is not None
        assert response.concepts[0] is not None
        
        self.logger.info(f"Get search results from {self.terminology} for term = {term}, type = {type}")
        self.logger.info(f"    search results = {str(response)}")
    
    def test_search_by_type_and(self, search_api):
        """
        Get concept search results by using type AND
        """
        # ARRANGE - using global variable unless otherwise listed
        term: str = "malignant melanoma"
        type: str = "AND"
        ascending: bool = True
        include: str = "minimal"
        from_record: int = 0
        page_size: int = 5
        expected_total: int = 150
        
        # ACT
        response: ConceptResultList = search_api.search(None, self.terminology, term, type, None, ascending, include,
                                                        from_record, page_size, None, None, None, None, None, None,
                                                        None, None, None)
        
        # ASSERT
        assert response is not None
        assert response.total == expected_total, "FAIL: expected total doesn't match actual"
        assert response.concepts is not None
        assert response.concepts[0] is not None
        
        self.logger.info(f"Get search results from {self.terminology} for term = {term}, type = {type}")
        self.logger.info(f"    search results = {str(response)}")
    
    def test_search_by_type_or(self, search_api):
        """
        Get concept search results by using type OR
        """
        # ARRANGE - using global variable unless otherwise listed
        term: str = "malignant melanoma"
        type: str = "OR"
        ascending: bool = True
        include: str = "minimal"
        from_record: int = 0
        page_size: int = 5
        
        # ACT
        response: ConceptResultList = search_api.search(None, self.terminology, term, type, None, ascending, include,
                                                        from_record, page_size, None, None, None, None, None, None,
                                                        None, None, None)
        
        # ASSERT
        assert response is not None
        assert response.concepts is not None
        assert response.concepts[0] is not None
        
        self.logger.info(f"Get search results from {self.terminology} for term = {term}, type = {type}")
        self.logger.info(f"    search results = {str(response)}")
    
    def test_search_with_highlights(self, search_api):
        """
        Get concept search results with highlights
        """
        # ARRANGE - using global variable unless otherwise listed
        term: str = "XAV05295I5"
        ascending: bool = True
        include: str = "highlights"
        from_record: int = 0
        page_size: int = 5
        expected_total: int = 1
        
        # ACT
        response: ConceptResultList = search_api.search(None, self.terminology, term, None, None, ascending, include,
                                                        from_record, page_size, None, None, None, None, None, None,
                                                        None, None, None)
        
        # ASSERT
        assert response is not None
        assert response.total == expected_total, "FAIL: expected total doesn't match actual"
        assert response.concepts is not None
        assert response.concepts[0] is not None
        
        self.logger.info(f"Get search results from {self.terminology} for term = {term}, type = {type}")
        self.logger.info(f"    search results = {str(response)}")
    
    def test_search_concepts_by_property(self, search_api):
        """
        Get concept search results by property
        """
        # ARRANGE - using global variable unless otherwise listed
        term: str = "XAV05295I5"
        ascending: bool = True
        include: str = "highlights"
        from_record: int = 0
        page_size: int = 5
        property: str = "FDA_UNII_Code"
        expected_total: int = 1
        
        # ACT
        response: ConceptResultList = search_api.search(None, self.terminology, term, None, None, ascending, include,
                                                        from_record, page_size, None, property, None, None, None, None,
                                                        None, None, None)
        
        # ASSERT
        assert response is not None
        assert response.total == expected_total, "FAIL: expected total doesn't match actual"
        assert response.concepts is not None
        assert response.concepts[0] is not None
        
        self.logger.info(f"Get search results from {self.terminology} for term = {term}, property = {property}")
        self.logger.info(f"    search results = {str(response)}")
    
    def test_search_concepts_by_subset(self, search_api):
        """
        Get concept search results by subset
        """
        # ARRANGE - using global variable unless otherwise listed
        term: str = "immune"
        ascending: bool = True
        include: str = "minimal"
        from_record: int = 0
        page_size: int = 5
        subset: str = "C165258"
        expected_total: int = 35
        
        # ACT
        response: ConceptResultList = search_api.search(None, self.terminology, term, None, None, ascending, include,
                                                        from_record, page_size, None, None, None, None, None, None,
                                                        None, None, subset)
        
        # ASSERT
        assert response is not None
        assert response.total == expected_total, "FAIL: expected total doesn't match actual"
        assert response.concepts is not None
        assert response.concepts[0] is not None
        
        self.logger.info(f"Get search results from {self.terminology} for term = {term}, subset = {subset}")
        self.logger.info(f"    search results = {str(response)}")
    
    def test_find_concepts_by_sparql_code(self, search_api):
        """
        Get concept search results by SPARQL code
        """
        # ARRANGE - using global variable unless otherwise listed
        type: str = "contains"
        ascending: bool = True
        include: str = "minimal"
        from_record: int = 0
        page_size: int = 25
        query: str = ('SELECT ?code { GRAPH <http://NCI_T_monthly> { ?x a owl:Class . ?x :NHC0 ?code . ?x :P108 "Melanoma" } }')
        expected_total: int = 1
        
        # ACT
        response: ConceptResultList = search_api.search_single_terminology_sparql(self.terminology, query, include,
                                                                                  None, None, type, None,
                                                                                  ascending, from_record, page_size, None,
                                                                                  None, None, None, None,
                                                                                  None, None, None, None)
        
        # ASSERT
        assert response is not None
        assert response.total == expected_total
        assert response.concepts is not None
        assert response.concepts[0] is not None
        
        self.logger.info(f"Get search results from {self.terminology} for SPARQL query = {query}")
        self.logger.info(f"    search results = {str(response)}")

    def test_get_sparql_bindings(self, search_api):
        """
        Get SPARQL bindings from query
        """
        # ARRANGE - using global variable unless otherwise listed
        query: str = ('SELECT ?code { GRAPH <http://NCI_T_monthly> { ?x a owl:Class . ?x :NHC0 ?code . } }')
        
        # ACT
        response: MapResultList = search_api.get_sparql_bindings(self.terminology, query, None, None, None)
        
        # ASSERT
        assert response is not None
        
        self.logger.info(f"Get SPARQL bindings for query = {query}")
        self.logger.info(f"    search results = {str(response)}")
        