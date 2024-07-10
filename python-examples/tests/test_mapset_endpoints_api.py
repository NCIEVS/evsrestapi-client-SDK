import pytest
import logging

from gov.nih.nci.evs.api import MapsetEndpointsApi
from gov.nih.nci.evs.api.models import Concept, ConceptMapResultList


@pytest.fixture
def mapset_api():
    """
    Instantiate the MapsetEndpointsApi
    """
    return MapsetEndpointsApi()


class TestMapsetEndpointsApi:
    """
    API tests for MapsetEndpointsApi. These tests will demonstrate how to call the API and log the
    information that is returned. The asserts are used to ensure that the data we are pulling align
    with what is expected based on how we are modeling the information.

    <p>NOTE: the asserts may be subject to change as the data evolves over time. Updating the tests
    to align with the data we expect may be needed.
    """
    # Create logger from pytest.ini settings
    logger = logging.getLogger(__name__)
    
    def test_get_mapset_by_code(self, mapset_api):
        """
        Get the mapset for the specified code (no terminology param is needed as mapsets connect to codes between
        terminologies)
        """
        # ARRANGE
        code: str = "NCIt_Maps_To_ICDO3"
        include: str = "minimal"
        
        # ACT
        response: Concept = mapset_api.get_mapset_by_code(code, include)
        
        # ASSERT
        assert response is not None
        
        self.logger.info(f"Get mapsets for code - {code} ")
        self.logger.info(f"   mapset = {str(response)}")
        
    def test_get_mapset_mappings_by_code(self, mapset_api):
        """
        Get the maps for the mapset mappings specified by the code (no terminology param is needed as mapsets connect to
         codes betweenterminologies)
        """
        # ARRANGE
        code: str = "GO_to_NCIt_Mapping"
        from_record: int = 0
        page_size: int = 25
        ascending: bool = True
        expected_total: int = 305
        
        # ACT
        response: ConceptMapResultList = mapset_api.get_mapset_mappings_by_code(code, from_record, page_size, None,
                                                                                ascending, None)
        
        # ASSERT
        assert response is not None
        assert expected_total == response.total, "FAIL: expected total doesn't match actual"
        
        self.logger.info(f"Get mapset mappings for code - {code} ")
        self.logger.info(f"   mappings = {str(response)}")
        
    def test_get_mapsets(self, mapset_api):
        """
        Get all mapsets (no terminology param is needed as mapsets connect to codes between terminologies)
        """
        # ARRANGE
        include: str = "minimal"
        
        # ACT
        response: [Concept] = mapset_api.get_mapsets(include)
        
        # ASSERT
        assert response is not None
        
        self.logger.info(f"Get all mapsets")
        self.logger.info(f"   mapsets = {str(response)}")