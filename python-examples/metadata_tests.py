import configparser
import logging
import requests

config = configparser.ConfigParser()
config.read('config.ini')
prodUrl = config['default']['prod-url']
terminology = config['default']['terminology']

def get_all_terminologies(): # Return all loaded terminologies currently hosted by the API.
    logging.info("metadata_tests.py: Get Terminologies");
    logging.info("url = " + prodUrl + "/metadata/terminologies");
    response = requests.get(prodUrl + "/metadata/terminologies");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def get_all_properties(): # Return all properties for a given terminology with default include setting (minimal).
    logging.info("metadata_tests.py: Get Properties");
    logging.info("url = " + prodUrl + "/metadata/ncit/properties?include=minimal");
    response = requests.get(prodUrl + "/metadata/ncit/properties?include=minimal");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def get_property_by_code_or_label(): # Return property for the specified code or label. This examples includes a summary for the specified code.
    logging.info("metadata_tests.py: Get Property By Code or Label - P302");
    logging.info("url = " + prodUrl + "/metadata/ncit/properties?include=summary&list=P302");
    response = requests.get(prodUrl + "/metadata/ncit/properties?include=summary&list=P302");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def get_all_qualifiers(): # Return all qualifiers for a given terminology with default include setting (minimal).
    logging.info("metadata_tests.py: Get All Qualifiers");
    logging.info("url = " + prodUrl + "/metadata/ncit/qualifiers?include=minimal");
    response = requests.get(prodUrl + "/metadata/ncit/qualifiers?include=minimal");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def get_qualifier_by_code(): # Return qualifier for the specified code or label. This examples includes a summary for the specified code.
    logging.info("metadata_tests.py: Get Qualifier by Code - P387");
    logging.info("url = " + prodUrl + "/metadata/ncit/qualifiers?include=summary&list=P387");
    response = requests.get(prodUrl + "/metadata/ncit/qualifiers?include=summary&list=P387");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def get_qualifier_values_by_code(): # Return distinct value set for the qualifier with the specified code or label.
    logging.info("metadata_tests.py: Get Qualifier Value by Code - P390");
    logging.info("url = " + prodUrl + "/metadata/ncit/qualifier/P390/values");
    response = requests.get(prodUrl + "/metadata/ncit/qualifier/P390/values");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def get_roles(): # Return all roles.
    logging.info("metadata_tests.py: Get All Roles");
    logging.info("url = " + prodUrl + "/metadata/ncit/roles");
    response = requests.get(prodUrl + "/metadata/ncit/roles");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def get_roles_by_code(): # Return all roles.
    logging.info("metadata_tests.py: Get Roles by Code - R123");
    logging.info("url = " + prodUrl + "/metadata/ncit/role/R123");
    response = requests.get(prodUrl + "/metadata/ncit/role/R123");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def get_associations(): # Return all associations.
    logging.info("metadata_tests.py: Get All Associations");
    logging.info("url = " + prodUrl + "/metadata/ncit/associations");
    response = requests.get(prodUrl + "/metadata/ncit/associations");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def get_associations_by_code(): # Return associations by code.
    logging.info("metadata_tests.py: Get Associations by Code - A10");
    logging.info("url = " + prodUrl + "/metadata/ncit/association/A10");
    response = requests.get(prodUrl + "/metadata/ncit/association/A10");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def get_term_types(): # Return metadata for all term types for the specified terminology.
    logging.info("metadata_tests.py: Get Term Types");
    logging.info("url = " + prodUrl + "/metadata/ncit/termTypes");
    response = requests.get(prodUrl + "/metadata/ncit/termTypes");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def get_definition_sources(): # Return definition sources for the specified terminology.
    logging.info("metadata_tests.py: Get Definition Sources");
    logging.info("url = " + prodUrl + "/metadata/ncit/definitionSources");
    response = requests.get(prodUrl + "/metadata/ncit/definitionSources");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def get_definition_types(): # Return metadata for all definition types for the specified terminology.
    logging.info("metadata_tests.py: Get Definition Types");
    logging.info("url = " + prodUrl + "/metadata/ncit/definitionTypes");
    response = requests.get(prodUrl + "/metadata/ncit/definitionTypes");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def get_definition_type_by_code(): # Return metadata for definition type for the specified terminology and code.
    logging.info("metadata_tests.py: Get Definition Types");
    logging.info("url = " + prodUrl + "/metadata/ncit/definitionType/P325");
    response = requests.get(prodUrl + "/metadata/ncit/definitionType/P325");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def get_synonym_types(): # Return metadata for all synonym types for the specified terminology.
    logging.info("metadata_tests.py: Get Synonym Types");
    logging.info("url = " + prodUrl + "/metadata/ncit/synonymTypes");
    response = requests.get(prodUrl + "/metadata/ncit/synonymTypes");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def get_synonym_sources(): # Return metadata for all synonym sources for the specified terminology.
    logging.info("metadata_tests.py: Get Synonym Sources");
    logging.info("url = " + prodUrl + "/metadata/ncit/synonymSources");
    response = requests.get(prodUrl + "/metadata/ncit/synonymSources");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def get_synonym_type_by_code(): # Return metadata for synonym type for the specified terminology and code.
    logging.info("metadata_tests.py: Get Synonym Sources by code");
    logging.info("url = " + prodUrl + "/metadata/ncit/synonymType/P90");
    response = requests.get(prodUrl + "/metadata/ncit/synonymType/P90");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def get_subsets(): # Return all subsets (with minimal information) for a specified terminology
    logging.info("metadata_tests.py: Get all subsets");
    logging.info("url = " + prodUrl + "/metadata/ncit/subsets");
    response = requests.get(prodUrl + "/metadata/ncit/subsets");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def get_subset_by_code(): # Return subset (with summary information) for a specified terminology and code.
    logging.info("metadata_tests.py: Get subset by code");
    logging.info("url = " + prodUrl + "/metadata/ncit/subsets");
    response = requests.get(prodUrl + "/metadata/ncit/subsets");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    
def get_subset_members_by_code(): # Return subset members paging parameters for a specified terminology and code.
    logging.info("metadata_tests.py: Get subset by code");
    logging.info("url = " + prodUrl + "/metadata/ncit/subset/C116978");
    response = requests.get(prodUrl + "/metadata/ncit/subset/C116978");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

