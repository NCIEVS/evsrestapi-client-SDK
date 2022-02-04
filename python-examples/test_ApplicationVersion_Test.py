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

def test_get_version(): # Return all loaded terminologies currently hosted by the API.
    logging.info("test_ApplicationVersion_Test.py: Get Application Version");
    logging.info("url = " + localUrl.replace("/api/v1","") + "/version");
    response = requests.get(localUrl.replace("/api/v1","") + "/version");
    assert response.status_code == requests.codes.ok;
    logging.info(response.text);
    