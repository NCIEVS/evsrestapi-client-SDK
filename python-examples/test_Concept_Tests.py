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

def test_get_minimal_concept_by_code(): # Return all loaded terminologies currently hosted by the API.
    logging.info("test_Concept_Tests.py: Get minimal concept by code - C3224");
    logging.info("url = " + localUrl + "/concept/ncit/C3224?include=minimal");
    response = requests.get(localUrl + "/concept/ncit/C3224?include=minimal");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def test_get_minimal_concept_list_by_code(): # Return all loaded terminologies currently hosted by the API.
    logging.info("test_Concept_Tests.py: Get minimal concepts by list - [C3224, C3910]");
    logging.info("url = " + localUrl + "/concept/ncit?include=minimal&list=C3224,C3910");
    response = requests.get(localUrl + "/concept/ncit?include=minimal&list=C3224,C3910");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);

def test_get_summary_concept_by_code(): # Return all loaded terminologies currently hosted by the API.
    logging.info("test_Concept_Tests.py: Get summary concepts by code - C3224");
    logging.info("url = " + localUrl + "/concept/ncit?include=summary&list=C3224,C3910");
    response = requests.get(localUrl + "/concept/ncit?include=summary&list=C3224,C3910");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
