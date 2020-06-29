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
    logging.info("test_Concept_Tests.py: Get concept by code - C3224");
    logging.info("url = " + localUrl + "/concept/ncit/C3224?include=minimal");
    response = requests.get(localUrl + "/concept/ncit/C3224?include=minimal");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
