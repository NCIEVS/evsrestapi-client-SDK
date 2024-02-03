import configparser
import json
import logging
import requests

config = configparser.ConfigParser()
config.read('config.ini')
prodUrl = config['default']['prod-url']
terminology = config['default']['terminology']

def test_get_inactive_replacement_code(): # Get the replacement concepts for a specified inactive concept code.
    logging.info("test_history_tests.py: Get inactive replacement code");
    logging.info("url = " + prodUrl + "/history/ncit/C12658/replacements");
    response = requests.get(prodUrl + "/history/ncit/C12658/replacements");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));
    
def test_get_inactive_replacement_codes(): # Get the replacement concepts for a specified list of inactive concept codes.
    logging.info("test_history_tests.py: Get list of inactive replacement codes");
    logging.info("url = " + prodUrl + "/history/ncit/replacements?list=C12658,C13320");
    response = requests.get(prodUrl + "/history/ncit/replacements?list=C12658,C13320");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));