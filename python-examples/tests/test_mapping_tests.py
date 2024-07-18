import configparser
import json
import logging

import requests

config = configparser.ConfigParser()
config.read('config.ini')
prodUrl = config['default']['prod-url']
terminology = config['default']['terminology']

def test_get_all_mapsets(): # Get all mapsets. Include parameter allows customizing how much data to return.
    logging.info("test_mapping_tests.py: Get all mapsets")
    logging.info("url = " + prodUrl + "/mapset?include=minimal")
    response = requests.get(prodUrl + "/mapset?include=minimal")
    assert response.status_code == requests.codes.ok
    pretty_print = json.loads(response.text)
    logging.info(json.dumps(pretty_print, indent=2))
    
def test_get_mapset_by_code(): # Get mapset information for a specified code. Include parameter allows customizing how much data to return.
    logging.info("test_mapping_tests.py: Get mapset by code")
    logging.info("url = " + prodUrl + "/mapset/GO_to_NCIt_Mapping?include=minimal")
    response = requests.get(prodUrl + "/mapset/GO_to_NCIt_Mapping?include=minimal")
    assert response.status_code == requests.codes.ok
    pretty_print = json.loads(response.text)
    logging.info(json.dumps(pretty_print, indent=2))
    
def test_get_maps_by_mapset_code(): # Get the maps for a specified mapset code.
    logging.info("test_mapping_tests.py: Get subset by code")
    logging.info("url = " + prodUrl + "/mapset/GO_to_NCIt_Mapping/maps")
    response = requests.get(prodUrl + "/mapset/GO_to_NCIt_Mapping/maps")
    assert response.status_code == requests.codes.ok
    pretty_print = json.loads(response.text)
    logging.info(json.dumps(pretty_print, indent=2))
