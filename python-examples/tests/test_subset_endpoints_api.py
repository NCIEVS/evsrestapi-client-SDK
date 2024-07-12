import pytest
import string
import logging

from evs import Concept, SubsetEndpointsApi


@pytest.fixture
def subset_api():
    """
    Instantiate the SubsetEndpointsApi
    """
    return SubsetEndpointsApi()


class TestSubsetEndpointsApi:
    """
    API tests for SubsetEndpointsApi. These tests will demonstrate how to call the API and log the
    information that is returned. The asserts are used to ensure that the data we are pulling align
    with what is expected based on how we are modeling the information.

    <p>NOTE: the asserts may be subject to change as the data evolves over time. Updating the tests
    to align with the data we expect may be needed.
    """
    # Create logger from pytest.ini settings
    logger = logging.getLogger(__name__)
    
    # Test Terminology
    terminology: string = "ncit"
    
    def test_get_subset(self, subset_api):
        """
        GEt the subset for a specified terminology and code
        """
        # ARRANGE - using global variable unless otherwise listed
        code: str = "C116978"
        include: str = "minimal,summary"
        expected_name: str = "CTRP Agent Terminology"
        
        # ACT
        response: Concept = subset_api.get_subset(self.terminology, code, include)
        
        # ASSERT
        assert response is not None
        assert expected_name == response.name, "FAIL: expected name doesn't match actual"
        
        self.logger.info(f"Get the subset for code - {code}")
        self.logger.info(f"    subsets: {str(response)}")
    
    def test_get_subset_members(self, subset_api):
        """
        Get subset members for the specified terminology and code. Concept subset endpoints will be deprecated in v2 in
         favor of top level subset endpoints.
        """
        # ARRANGE - using global variable unless otherwise listed
        code: str = "C157225"
        from_record: str = "0"
        page_size: str = "25"
        include: str = "minimal"
        expected_code: str = "C16255"
        expected_name: str = "Acetylation"
        contains_expected_values: bool = False
        
        # ACT
        response: [Concept] = subset_api.get_subset_members(self.terminology, code, from_record, page_size, include)
        
        # ASSERT
        assert response is not None
        for subset in response:
            assert subset.name is not None
            assert subset.code is not None
            if subset.name == expected_name and subset.code == expected_code:
                contains_expected_values = True
                break
        assert contains_expected_values is True
        
        self.logger.info(f"Get the subset members for code - {code}")
        self.logger.info(f"    subsets: {str(response)}")
    
    def test_get_subsets(self, subset_api):
        """
        Get all subsets (or those specified by list parameter) for the specified terminology
        """
        # ARRANGE - using global variable unless otherwise listed
        include: str = "minimal"
        
        # ACT
        response: [Concept] = subset_api.get_subsets(self.terminology, include, None)
        
        # ASSERT
        assert response is not None
        
        self.logger.info(f"Get all subsets for {self.terminology}")
        self.logger.info(f"    subsets: {str(response)}")
