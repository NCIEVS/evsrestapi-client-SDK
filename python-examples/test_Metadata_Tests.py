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

def test_get_property_by_code_or_label(): # Return property for the specified code or label.
    logging.info("test_Metadata_Tests.py: Get Property By Code or Label");
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
    
