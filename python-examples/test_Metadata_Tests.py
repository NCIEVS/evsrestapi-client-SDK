import configparser
import logging
import requests

config = configparser.ConfigParser()
config.read('config.ini')
localUrl = config['default']['local-url']
devUrl = config['default']['dev-url']
qaUrl = config['default']['qa-url']
terminology = config['default']['terminology']

logging.basicConfig(filename=config['default']['logFile'],
                    level=logging.INFO,
                    format="%(asctime)s.%(msecs)03d %(levelname)s : %(message)s",
                    datefmt="%Y-%m-%dT%H:%M:%S")

def test_get_all_terminologies(): # Return all loaded terminologies currently hosted by the API.
    logging.info("test_Metadata_Tests.py: Get Terminologies");
    logging.info("url = " + localUrl + "/metadata/terminologies");
    response = requests.get(localUrl + "/metadata/terminologies");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def test_get_all_properties(): # Return all properties for a given terminology with default include setting (minimal).
    logging.info("test_Metadata_Tests.py: Get Properties");
    logging.info("url = " + localUrl + "/metadata/ncit/properties?include=minimal");
    response = requests.get(localUrl + "/metadata/ncit/properties?include=minimal");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def test_get_property_by_code_or_label(): # Return property for the specified code or label. This examples includes a summary for the specified code.
    logging.info("test_Metadata_Tests.py: Get Property By Code or Label - P302");
    logging.info("url = " + localUrl + "/metadata/ncit/properties?include=summary&list=P302");
    response = requests.get(localUrl + "/metadata/ncit/properties?include=summary&list=P302");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def test_get_all_qualifiers(): # Return all qualifiers for a given terminology with default include setting (minimal).
    logging.info("test_Metadata_Tests.py: Get All Qualifiers");
    logging.info("url = " + localUrl + "/metadata/ncit/qualifiers?include=minimal");
    response = requests.get(localUrl + "/metadata/ncit/qualifiers?include=minimal");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def test_get_qualifier_by_code(): # Return qualifier for the specified code or label. This examples includes a summary for the specified code.
    logging.info("test_Metadata_Tests.py: Get Qualifier by Code - P387");
    logging.info("url = " + localUrl + "/metadata/ncit/qualifiers?include=summary&list=P387");
    response = requests.get(localUrl + "/metadata/ncit/qualifiers?include=summary&list=P387");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def test_get_qualifier_values_by_code(): # Return distinct value set for the qualifier with the specified code or label.
    logging.info("test_Metadata_Tests.py: Get Qualifier Value by Code - P390");
    logging.info("url = " + localUrl + "/metadata/ncit/qualifier/P390/values");
    response = requests.get(localUrl + "/metadata/ncit/qualifier/P390/values");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def test_get_roles(): # Return all roles.
    logging.info("test_Metadata_Tests.py: Get All Roles");
    logging.info("url = " + localUrl + "/metadata/ncit/roles");
    response = requests.get(localUrl + "/metadata/ncit/roles");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def test_get_roles_by_code(): # Return all roles.
    logging.info("test_Metadata_Tests.py: Get Roles by Code - R123");
    logging.info("url = " + localUrl + "/metadata/ncit/role/R123");
    response = requests.get(localUrl + "/metadata/ncit/role/R123");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def test_get_associations(): # Return all associations.
    logging.info("test_Metadata_Tests.py: Get All Associations");
    logging.info("url = " + localUrl + "/metadata/ncit/associations");
    response = requests.get(localUrl + "/metadata/ncit/associations");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def test_get_associations_by_code(): # Return associations by code.
    logging.info("test_Metadata_Tests.py: Get Associations by Code - A10");
    logging.info("url = " + localUrl + "/metadata/ncit/association/A10");
    response = requests.get(localUrl + "/metadata/ncit/association/A10");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def test_get_term_types(): # Return metadata for all term types for the specified terminology.
    logging.info("test_Metadata_Tests.py: Get Term Types");
    logging.info("url = " + localUrl + "/metadata/ncit/termTypes");
    response = requests.get(localUrl + "/metadata/ncit/termTypes");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def test_get_definition_sources(): # Return definition sources for the specified terminology.
    logging.info("test_Metadata_Tests.py: Get Definition Sources");
    logging.info("url = " + localUrl + "/metadata/ncit/definitionSources");
    response = requests.get(localUrl + "/metadata/ncit/definitionSources");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def test_get_definition_types(): # Return metadata for all definition types for the specified terminology.
    logging.info("test_Metadata_Tests.py: Get Definition Types");
    logging.info("url = " + localUrl + "/metadata/ncit/definitionTypes");
    response = requests.get(localUrl + "/metadata/ncit/definitionTypes");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def test_get_definition_type_by_code(): # Return metadata for definition type for the specified terminology and code.
    logging.info("test_Metadata_Tests.py: Get Definition Types");
    logging.info("url = " + localUrl + "/metadata/ncit/definitionType/P325");
    response = requests.get(localUrl + "/metadata/ncit/definitionType/P325");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def test_get_synonym_types(): # Return metadata for all synonym types for the specified terminology.
    logging.info("test_Metadata_Tests.py: Get Synonym Types");
    logging.info("url = " + localUrl + "/metadata/ncit/synonymTypes");
    response = requests.get(localUrl + "/metadata/ncit/synonymTypes");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def test_get_synonym_sources(): # Return metadata for all synonym sources for the specified terminology.
    logging.info("test_Metadata_Tests.py: Get Synonym Sources");
    logging.info("url = " + localUrl + "/metadata/ncit/synonymSources");
    response = requests.get(localUrl + "/metadata/ncit/synonymSources");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def test_get_synonym_type_by_code(): # Return metadata for synonym type for the specified terminology and code.
    logging.info("test_Metadata_Tests.py: Get Synonym Sources by code");
    logging.info("url = " + localUrl + "/metadata/ncit/synonymType/P90");
    response = requests.get(localUrl + "/metadata/ncit/synonymType/P90");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def test_get_subsets(): # Return all subsets (with minimal information) for a specified terminology
    logging.info("test_Metadata_Tests.py: Get all subsets");
    logging.info("url = " + localUrl + "/metadata/ncit/subsets");
    response = requests.get(localUrl + "/metadata/ncit/subsets");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def test_get_subset_by_code(): # Return subset (with summary information) for a specified terminology and code.
    logging.info("test_Metadata_Tests.py: Get subset by code");
    logging.info("url = " + localUrl + "/metadata/ncit/subsets");
    response = requests.get(localUrl + "/metadata/ncit/subsets");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def test_get_subset_members_by_code(): # Return subset members paging parameters for a specified terminology and code.
    logging.info("test_Metadata_Tests.py: Get subset by code");
    logging.info("url = " + localUrl + "/metadata/ncit/subset/C116978");
    response = requests.get(localUrl + "/metadata/ncit/subset/C116978");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

