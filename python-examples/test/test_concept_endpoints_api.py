import unittest
import logging
from gov.nih.nci.evs.api import ConceptEndpointsApi
import exceptions


class TestConceptEndpointsApi(unittest.TestCase):
    # Test Terminology
    terminology = "ncit"
    # Most commonly used ncit code
    code = "C3224"

    # Create logger from pytest.ini settings
    logger = logging.getLogger(__name__)

    @classmethod
    def setUpClass(cls):
        """
        Instantiate the ConceptEndpointsApi
        """
        cls.api = ConceptEndpointsApi()

    def test_get_association_entries(self):
        # ARRANGE
        code_or_label = "A5"
        from_record = 0
        page_size = 100
        expected_related_name = "Naluzotan Hydrochloride"
        contains_expected_name = False

        # ACT
        response = self.api.get_association_entries( self.terminology, code_or_label, from_record, page_size, None)

        # ASSERT
        assert response is not None
        for entry in response.association_entries:
            if entry.related_name == expected_related_name:
                contains_expected_name = True
                break

        assert contains_expected_name, f"Response does not contain the expected related name: {expected_related_name}"

        self.logger.info("Get association entries for code/label - A5")
        self.logger.info("   association entries = " + str(response))


if __name__ == '__main__':
    unittest.main()
