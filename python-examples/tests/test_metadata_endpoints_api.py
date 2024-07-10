import string
import logging

import pytest

from gov.nih.nci.evs.api import MetadataEndpointsApi
from gov.nih.nci.evs.api.models import Concept, ConceptMinimal, Terminology


@pytest.fixture
def metadata_api():
    """
    Instantiate the MetadataEndpointsApi
    """
    return MetadataEndpointsApi()


class TestMetadataEndpointsApi:
    """
    API tests for MetadataEndpointsApi. These tests will demonstrate how to call the API and log the
    information that is returned. The asserts are used to ensure that the data we are pulling align
    with what is expected based on how we are modeling the information.

    <p>NOTE: the asserts may be subject to change as the data evolves over time. Updating the tests
    to align with the data we expect may be needed.
    """
    # Create logger from pytest.ini settings
    logger = logging.getLogger(__name__)
    
    # Test Terminology
    terminology: string = "ncit"
    
    def test_get_association_by_code(self, metadata_api):
        """
        Get the association for the specified terminology and code/name
        """
        # ARRANGE - using global variable unless otherwise listed
        code_or_name: string = "A18"
        include: string = "minimal"
        expected_name = "Has_Pharmaceutical_Basic_Dose_Form"
        
        # ACT
        response: Concept = metadata_api.get_association(self.terminology, code_or_name, include)
        
        # ASSERT
        assert response is not None
        assert expected_name == response.name, "FAIL: expected name doesn't match actual"
        
        self.logger.info(f"Get all associations for code - {code_or_name}")
        self.logger.info(f"    associations - {str(response)}")
    
    def test_get_associations(self, metadata_api):
        """
        Get all associations (or those specified by a list parameter) for the specified terminology
        """
        # ARRANGE - using global variable unless otherwise listed
        include: string = "minimal"
        expected_code: string = "A1"
        expected_size: int = 35
        contains_expected_code: bool = False
        
        # ACT
        response: [Concept] = metadata_api.get_associations(self.terminology, include, None)
        
        # ASSERT
        assert response is not None
        assert len(response) >= expected_size is True
        # Find our expected values in the response
        for concept in response:
            assert concept.code is not None
            if concept.code.__contains__(expected_code):
                contains_expected_code = True
                break
        
        assert contains_expected_code is True
        
        self.logger.info(f"Get all associations for terminology - {self.terminology}")
        self.logger.info(f"    associations - {str(response)}")
    
    def test_get_concept_statuses(self, metadata_api):
        """
        Get all concept status values for the specified terminology
        """
        # ARRANGE - using global variable unless otherwise listed
        expected_status: string = "Obsolete_Concept"
        expected_size: int = 5
        contains_expected_status: bool = False
        
        # ACT
        response: [string] = metadata_api.get_concept_statuses(self.terminology)
        
        # ASSERT
        assert response is not None
        assert expected_size == len(response)
        # Find our expected values in the response
        for status in response:
            assert status is not None
            if status.__contains__(expected_status):
                contains_expected_status = True
                break
        assert contains_expected_status is True
        
        self.logger.info(f"Get all statuses associated with terminology - {self.terminology}")
        self.logger.info(f"    concept statuses - {str(response)}")
    
    def test_get_definition_sources(self, metadata_api):
        """
        Get all definition sources for the specified terminology
        """
        # ARRANGE - using global variable unless otherwise listed
        expected_name: string = "American College of Cardiology / American Heart Association"
        expected_code: string = "ACC/AHA"
        contains_expected_values: bool = False
        
        # ACT
        response: [ConceptMinimal] = metadata_api.get_definition_sources(self.terminology)
        
        # ASSERT
        assert response is not None
        # Find our expected values in the response
        for definition_source in response:
            assert definition_source.code is not None
            assert definition_source.name is not None
            if definition_source.code.__contains__(expected_code) and definition_source.name.__contains__(
                    expected_name):
                contains_expected_values = True
                break
        assert contains_expected_values is True
        
        self.logger.info(f"Get all definition sources for terminology - {self.terminology}")
        self.logger.info(f"    definition sources - {str(response)}")
    
    def test_get_definition_type_by_code(self, metadata_api):
        """
        Get the definition type for the specified terminology and code/name
        """
        # ARRANGE - using global variable unless otherwise listed
        code_or_name: string = "P325"
        include: string = "minimal"
        expected_name: string = "ALT_DEFINITION"
        
        # ACT
        response: Concept = metadata_api.get_definition_type(self.terminology, code_or_name, include)
        
        # ASSERT
        assert response is not None
        assert expected_name == response.name, "FAIL: expected name doesn't match actual"
        
        self.logger.info(f"Get definition type for code - {code_or_name}")
        self.logger.info(f"    definition type - {str(response)}")
    
    def test_get_definition_types(self, metadata_api):
        """
        Get all definition types (or those specified by list parameter) for the specified terminology
        """
        # ARRANGE - using global variable unless otherwise listed
        include: string = "minimal"
        expected_code: string = "P97"
        expected_name: string = "DEFINITION"
        contains_expected_values: bool = False
        
        # ACT
        response: [Concept] = metadata_api.get_definition_types(self.terminology, include, None)
        
        # ASSERT
        assert response is not None
        # Find our expected values in the response
        for concept in response:
            assert concept.code is not None
            assert concept.name is not None
            if concept.code.__contains__(expected_code) and concept.name.__contains__(expected_name):
                contains_expected_values = True
                break
        assert contains_expected_values is True
        
        self.logger.info(f"Get all definition types for terminology - {self.terminology}")
        self.logger.info(f"    definition types - {str(response)}")
    
    def test_get_properties(self, metadata_api):
        """
        Get all properties (or those specified by list parameter) for the specified terminology
        """
        # ARRANGE - using global variable unless otherwise listed
        include: string = "minimal"
        expected_code: string = "NHC0"
        expected_name: string = "code"
        contains_expected_values: bool = False
        
        # ACT
        response: [Concept] = metadata_api.get_properties(self.terminology, include, None)
        
        # ASSERT
        assert response is not None
        # Find our expected values in the response
        for concept in response:
            assert concept.code is not None
            assert concept.name is not None
            if concept.code.__contains__(expected_code) and concept.name.__contains__(expected_name):
                contains_expected_values = True
                break
        assert contains_expected_values is True
        
        self.logger.info(f"Get all properties for a terminology &/or list of codes/labels - {self.terminology}")
        self.logger.info(f"    properties - {str(response)}")
    
    def test_get_property(self, metadata_api):
        """
        Get the property for the specified terminology and code/name
        """
        # ARRANGE - using global variable unless otherwise listed
        code_or_name: string = "P216"
        include: string = "full"
        expected_name: string = "BioCarta_ID"
        expected_synonym: string = "BioCarta ID"
        contains_expected_values: bool = False
        
        # ACT
        response: Concept = metadata_api.get_property(self.terminology, code_or_name, include)
        
        # ASSERT
        assert response is not None
        assert expected_name == response.name, "FAIL: expected name doesn't match actual"
        assert expected_synonym == response.synonyms[0].name, "FAIL: expected synonym doesn't match actual"
        
        self.logger.info(f"Get full property for code - {code_or_name}")
        self.logger.info(f"    property - {str(response)}")
    
    def test_get_qualifier(self, metadata_api):
        """
        Get the qualifier for the specified terminology and code/name
        """
        # ARRANGE - using global variable unless otherwise listed
        code_or_name: string = "P390"
        include: string = "summary"
        expected_name: string = "go-source"
        
        # ACT
        response: Concept = metadata_api.get_qualifier(self.terminology, code_or_name, include)
        
        # ASSERT
        assert response is not None
        assert response.synonymm is not None
        assert response.definitions is not None
        assert expected_name == response.name, "FAIL: expected name doesn't match actual"
        
        self.logger.info(f"Get minimal qualifier for code - {code_or_name}")
        self.logger.info(f"    qualifier - {str(response)}")
    
    def test_get_qualifier_values(self, metadata_api):
        """
        Get qualifier values for the specified terminology and code/name
        """
        # ARRANGE - using global variable unless otherwise listed
        code_or_name: string = "P390"
        expected_value = "CGAP"
        contains_expected_value: bool = False
        
        # ACT
        response: [string] = metadata_api.get_qualifier_values(self.terminology, code_or_name)
        
        # ASSERT
        assert response is not None
        # Find our expected value in the response
        for value in response:
            assert value is not None
            if value.__contains__(expected_value):
                contains_expected_value = True
                break
        assert contains_expected_value is True
        
        self.logger.info(f"Get qualifier values for code - {code_or_name}")
        self.logger.info(f"    qualifier values - {str(response)}")
    
    def test_get_qualifiers(self, metadata_api):
        """
        Get all qualifiers (properties on properties) for the specified terminology
        """
        # ARRANGE - using global variable unless otherwise listed
        include: string = "minimal"
        expected_code1: string = "P383"
        expected_code2: string = "P384"
        contains_code1: bool = False
        contains_code2: bool = False
        
        # ACT
        response: [Concept] = metadata_api.get_qualifiers(self.terminology, include)
        
        # ASSERT
        assert response is not None
        # Find our expected values in the response
        for qualifier in response:
            assert qualifier.code is not None
            if qualifier.code.__contains__(expected_code1):
                contains_code1 = True
            if qualifier.code.__contains__(expected_code2):
                contains_code2 = True
            if contains_code1 is True and contains_code2 is True:
                break
        assert contains_code1 is True
        assert contains_code2 is True
        
        self.logger.info(f"Get all qualifiers for terminology - {self.terminology}")
        self.logger.info(f"    qualifiers - {str(response)}")
    
    def test_get_role(self, metadata_api):
        """
        Get the role for the specified terminology and code/name
        """
        # ARRANGE - using global variable unless otherwise listed
        code_or_name: string = "R123"
        include: string = "full"
        expected_name: string = "Chemotherapy_Regimen_Has_Component"
        
        # ACT
        response: Concept = metadata_api.get_role(self.terminology, code_or_name, include)
        
        # ASSERT
        assert response is not None
        assert response.synonyms is not None
        assert expected_name == response.name, "FAIL: expected name doesn't match actual"
        
        self.logger.info(f"Get summary role for code - {code_or_name}")
        self.logger.info(f"    role - {str(response)}")
    
    def test_get_roles(self, metadata_api):
        """
        Get all roles (or those specified in a list) for the specified terminology
        """
        # ARRANGE - using global variable unless otherwise listed
        include: string = "minimal"
        expected_code: string = "R123"
        contains_expected_code: bool = False
        
        # ACT
        response: [Concept] = metadata_api.get_roles(self.terminology, include, None)
        
        # ASSERT
        assert response is not None
        # Find our expected values in the response
        for concept in response:
            assert concept.code is not None
            if concept.code.__contains__(expected_code):
                contains_expected_code = True
                break
        assert contains_expected_code is True
        
        self.logger.info(f"Get all roles for terminology - {self.terminology}")
        self.logger.info(f"    roles - {str(response)}")
    
    def test_get_subsets1(self, metadata_api):
        """
        Get all subsets (or those specified by list parameter) for the specified terminology.

        <p>This endpoint will be deprecated in v2 in favor of top level subset endpoints.
        """
        # ARRANGE - using global variable unless otherwise listed
        include: string = "minimal"
        expected_code: string = "C167405"
        contains_expected_code: bool = False
        
        # ACT
        response: [Concept] = metadata_api.get_subsets1(self.terminology, include, None)
        
        # ASSERT
        assert response is not None
        # Find our expected values in the response
        for concept in response:
            assert concept.code is not None
            if concept.code.__contains__(expected_code):
                contains_expected_code = True
                break
        assert contains_expected_code is True
        
        self.logger.info(f"Get all subsets for terminology - {self.terminology}")
        self.logger.info(f"    subsets - {str(response)}")
    
    def test_get_subset1(self, metadata_api):
        """
        Get the subset for the specified terminology and code
        
        <p>This endpoint will be deprecated in v2 in favor of top level subset endpoints.
        """
        # ARRANGE - using global variable unless otherwise listed
        code: string = "C81222"
        include: string = "summary"
        expected_name: string = "CDISC ADaM Terminology"
        
        # ACT
        response: Concept = metadata_api.get_subset1(self.terminology, code, include)
        
        # ASSERT
        assert response is not None
        assert expected_name == response.name, "FAIL: expected name doesn't match actual"
        
        self.logger.info(f"Get the subset for code - {code}")
        self.logger.info(f"    subset - {str(response)}")
    
    def test_get_synonym_sources(self, metadata_api):
        """
        Get all synonym sources for the specified terminology
        """
        expected_code1: string = "ACC/AHA"
        expected_code2: string = "BIOCARTA"
        contains_code1: bool = False
        contains_code2: bool = False
        
        # ACT
        response: [Concept] = metadata_api.get_synonym_sources(self.terminology)
        
        # ASSERT
        assert response is not None
        # Find our expected values in the response
        for concept in response:
            assert concept.code is not None
            if concept.code.__contains__(expected_code1):
                contains_code1 = True
            if concept.code.__contains__(expected_code2):
                contains_code2 = True
            if contains_code1 is True and contains_code2 is True:
                break
        assert contains_code1 is True
        assert contains_code2 is True
        
        self.logger.info(f"Get all synonym sources for terminology - {self.terminology}")
        self.logger.info(f"    synonym - {str(response)}")
    
    def test_get_synonym_type_by_code(self, metadata_api):
        """
        Get the synonym type for the specified terminology and code/name
        """
        # ARRANGE - using global variable unless otherwise listed
        code_or_name: string = "P90"
        include: string = "minimal"
        expected_name: string = "FULL_SYN"
        
        # ACT
        response: Concept = metadata_api.get_synonym_type(self.terminology, code_or_name, include)
        
        # ASSERT
        assert response is not None
        assert expected_name == response.name, "FAIL: expected name doesn't match actual"
        
        self.logger.info(f"Get synonym type for code - {code_or_name}")
        self.logger.info(f"    synonym - {str(response)}")
    
    def test_get_synonym_types(self, metadata_api):
        """
        Get all synonym types (or those specified by list parameter) for the specified terminology
        """
        # ARRANGE - using global variable unless otherwise listed
        include: string = "full"
        expected_code: string = "P108"
        contains_expected_code: bool = False
        
        # ACT
        response: [Concept] = metadata_api.get_synonym_types(self.terminology, include, None)
        
        # ASSERT
        assert response is not None
        # Find our expected values in the response
        for concept in response:
            assert concept.code is not None
            if concept.code.__contains__(expected_code):
                contains_expected_code = True
                break
        assert contains_expected_code is True
        
        self.logger.info(f"Get all synonym types for terminology - {self.terminology}")
        self.logger.info(f"    synonym types - {str(response)}")
    
    def test_get_term_types(self, metadata_api):
        """
        Get all term types for the specified terminology
        """
        # ARRANGE - using global variable unless otherwise listed
        expected_code1: string = "AB"
        expected_code2: string = "AD"
        contains_code1: bool = False
        contains_code2: bool = False
        
        # ACT
        response: [ConceptMinimal] = metadata_api.get_term_types(self.terminology)
        
        # ASSERT
        assert response is not None
        # Find our expected values in the response
        for concept in response:
            assert concept.code is not None
            if concept.code.__contains__(expected_code1):
                contains_code1 = True
            if concept.code.__contains__(expected_code2):
                contains_code2 = True
            if contains_code1 is True and contains_code2 is True:
                break
        assert contains_code1 is True
        assert contains_code2 is True
        
        self.logger.info(f"Get all term types for terminology - {self.terminology}")
        self.logger.info(f"    term types - {str(response)}")
    
    def test_get_terminologies(self, metadata_api):
        """
        Get all available terminologies
        """
        # ARRANGE - using global variable unless otherwise listed
        latest: bool = True
        tag: string = "monthly"
        
        # ACT
        response: [Terminology] = metadata_api.get_terminologies(latest, tag)
        
        # ASSERT
        assert response is not None
        assert self.terminology == response[0].terminology, "FAIL: expected terminology doesn't match actual"
        assert response[0].latest is True
        assert response[0].latest is True
        
        self.logger.info(f"Get all terminologies for {self.terminology}")
        self.logger.info(f"    terminologies - {str(response)}")
