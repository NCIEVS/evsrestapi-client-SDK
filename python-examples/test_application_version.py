import configparser
import json
import logging
import requests


config = configparser.ConfigParser()
config.read('config.ini')
prodUrl = config['default']['prod-url']
terminology = config['default']['terminology']


def test_get_version(): # Return all loaded terminologies currently hosted by the API.
    logging.info("test_application_version.py: Get Application Version");
    logging.info("url = " + prodUrl.replace("/api/v1","") + "/version");
    response = requests.get(prodUrl.replace("/api/v1","") + "/version");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));
    