import unittest
import string
import logging

from gov.nih.nci.evs.api import SearchEndpointApi


class TestSearchEndpointsApi(unittest.TestCase):
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
    
    @classmethod
    def setUpClass(cls):
        """
        Instantiate the SearchEndpointsApi
        """
        cls.api = SearchEndpointApi()
        
        
    def test_something(self):
        self.assertEqual(True, False)  # add assertion here


if __name__ == '__main__':
    unittest.main()
