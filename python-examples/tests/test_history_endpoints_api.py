import pytest
import logging

from evs import History, HistoryEndpointsApi


@pytest.fixture
def history_api():
    """
    Instantiate the HistoryEndpointsApi
    """
    return HistoryEndpointsApi()


class TestHistoryEndpointsApi:
    """
    API tests for HistoryEndpointsApi. These tests will demonstrate how to call the API and log the
    information that is returned. The asserts are used to ensure that the data we are pulling align
    with what is expected based on how we are modeling the information.

    <p>NOTE: the asserts may be subject to change as the data evolves over time. Updating the tests
    to align with the data we expect may be needed.
    """
    # Create logger from pytest.ini settings
    logger = logging.getLogger(__name__)
    
    # Test Terminology
    terminology: str = "ncit"
    
    def test_get_replacements(self, history_api):
        """
        Gets suggested replacements for a specified terminology and inactive code. Active codes will return entries
        as well with an action of "active".
        """
        # ARRANGE - using global variable unless otherwise listed
        code: str = "C12658"
        expected_action: str = "retire"
        expected_replacement_code: str = "C19157"
        contains_expected: bool = False
        
        # ACT
        response: [History] = history_api.get_replacements(self.terminology, code)
        
        # ASSERT
        assert response is not None
        for replacement in response:
            assert replacement is not None
            if replacement.replacement_code == expected_replacement_code and replacement.action == expected_action:
                contains_expected = True
                break
        assert contains_expected is True
        
        self.logger.info(f"Get suggested replacements for code - {code}")
        self.logger.info(f"    replacements = {str(response)}")
    
    def test_get_replacements_from_list(self, history_api):
        """
        Get suggested replacements for a specified terminology and a comma-separated list of inactive codes. Active
        codes will return entries as well with an action of "active".
        """
        # ARRANGE - using global variable unless otherwise listed
        _list: [str] = "C12658,C13320"
        expected_replacement_codes: [str] = ["C19157", "C12756"]
        expected_replacement_names: [str] = ["Specimen", "Nose"]
        expected_actions: [str] = ["retire", "merge"]
        contains_expected_codes: bool = False
        contains_expected_names: bool = False
        contains_expected_actions: bool = False
        
        # ACT
        response: [History] = history_api.get_replacements_from_list(self.terminology, _list)
        
        # ASSERT
        assert response is not None
        code_count = 0
        name_count = 0
        action_count = 0
        for replacement in response:
            assert replacement.replacement_code is not None
            assert replacement.replacement_name is not None
            assert replacement.action is not None
            if replacement.replacement_code in expected_replacement_codes:
                code_count += 1
                if code_count == 2:
                    contains_expected_codes = True
            if replacement.replacement_name in expected_replacement_names:
                name_count += 1
                if name_count == 2:
                    contains_expected_names = True
            if replacement.action in expected_actions:
                action_count += 1
                if action_count == 2:
                    contains_expected_actions = True
            if (contains_expected_actions is True and contains_expected_names is True and contains_expected_codes is
                    True):
                break
        
        assert contains_expected_codes is True
        assert contains_expected_names is True
        assert contains_expected_actions is True
        
        self.logger.info(f"Get suggested replacements for code - {_list[0]} & {_list[1]}")
        self.logger.info(f"    suggested replacements = {str(response)}")
