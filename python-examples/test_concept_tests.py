import configparser
import json
import logging
import requests

config = configparser.ConfigParser()
config.read('config.ini')
prodUrl = config['default']['prod-url']
terminology = config['default']['terminology']


def test_get_minimal_concept_by_code(): # Return all loaded terminologies currently hosted by the API.
    logging.info("test_concept_tests.py: Get minimal concept by code - C3224");
    logging.info("url = " + prodUrl + "/concept/ncit/C3224?include=minimal");
    response = requests.get(prodUrl + "/concept/ncit/C3224?include=minimal");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_minimal_concept_list_by_code(): # Return concept objects with minimal information for a specified list of codes.
    logging.info("test_concept_tests.py: Get minimal concepts by list - [C3224, C3910]");
    logging.info("url = " + prodUrl + "/concept/ncit?include=minimal&list=C3224,C3910");
    response = requests.get(prodUrl + "/concept/ncit?include=minimal&list=C3224,C3910");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_summary_concept_by_code(): # Return concept object with summary information for a specified code.
    logging.info("test_concept_tests.py: Get summary concepts by code - C3224");
    logging.info("url = " + prodUrl + "/concept/ncit/C3224?include=summary");
    response = requests.get(prodUrl + "/concept/ncit/C3224?include=summary&list=C3224");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_full_concept_by_code(): # Return concept object with full information for a specified code.
    logging.info("test_concept_tests.py: Get full concepts by code - C3224");
    logging.info("url = " + prodUrl + "/concept/ncit/C3224?include=full");
    response = requests.get(prodUrl + "/concept/ncit/C3224?include=full");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_custom_concept_by_code(): # Return custom concept information for a given terminology and code.
    logging.info("test_concept_tests.py: Get custom concepts by code - C3224");
    logging.info("url = " + prodUrl + "/concept/ncit/C3224?include=synonyms,children,maps,inverseAssociations");
    response = requests.get(prodUrl + "/concept/ncit/C3224?include=synonyms,children,maps,inverseAssociations");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_concept_part_children_by_code(): # Return custom concept information for a given terminology and code.
    logging.info("test_concept_tests.py: Get concept part (children) by code - C3224");
    logging.info("url = " + prodUrl + "/concept/ncit/C3224/children");
    response = requests.get(prodUrl + "/concept/ncit/C3224/children");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_concept_descendants_by_code(): # Return concept descendants information for a given terminology and code.
    logging.info("test_concept_tests.py: Get descendants by code - C3224");
    logging.info("url = " + prodUrl + "/concept/ncit/C3224/descendants?maxLevel=2");
    response = requests.get(prodUrl + "/concept/ncit/C3224/descendants?maxLevel=2");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_roots(): # Return root concepts.
    logging.info("test_concept_tests.py: Get root concepts - ncit");
    logging.info("url = " + prodUrl + "/concept/ncit/roots");
    response = requests.get(prodUrl + "/concept/ncit/roots");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));
  
def test_get_path_to_root_by_code(): # Return paths to the root concept to a specified terminology and code.
    logging.info("test_concept_tests.py: Return paths to the root concept - C3224");
    logging.info("url = " + prodUrl + "/concept/ncit/C3224/pathsToRoot");
    response = requests.get(prodUrl + "/concept/ncit/C3224/pathsToRoot");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_path_from_root_by_code(): # Return paths to the root concept from a specified terminology and code.
    logging.info("test_concept_tests.py: Return paths from the root concept - C3224");
    logging.info("url = " + prodUrl + "/concept/ncit/C3224/pathsFromRoot");
    response = requests.get(prodUrl + "/concept/ncit/C3224/pathsFromRoot");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_ancestor_paths_from_code(): # Return ancestor paths.
    logging.info("test_concept_tests.py: Return paths to the ancestor code for a specified terminology and code - C3224");
    logging.info("url = " + prodUrl + "/concept/ncit/C3224/pathsToAncestor/C2991");
    response = requests.get(prodUrl + "/concept/ncit/C3224/pathsToAncestor/C2991");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_subtree(): # Return an entire subtree graph from the root concepts to a specified node. 
    logging.info("test_concept_tests.py: Return an entire subtree graph from the root concepts to a specified node - C3224");
    logging.info("url = " + prodUrl + "/concept/ncit/C3224/subtree");
    response = requests.get(prodUrl + "/concept/ncit/C3224/subtree");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_concept(): # Get concepts matching a search term within a specified terminology.
    logging.info("test_concept_tests.py: Get concepts matching a search term within a specified terminology");
    logging.info("url = " + prodUrl + "/concept/ncit/search?terminology=ncit&term=melanoma");
    response = requests.get(prodUrl + "/concept/ncit/search?terminology=ncit&term=melanoma");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));
    
def test_get_concept_by_concept_status(): # Get concepts matching a search term within a specified terminology and restrict the search results by concept status of "Header_Concept".
    logging.info("test_concept_tests.py: Get concepts matching a search term within a specified terminology and restrict the search results by concept status of \"Header_Concept\".");
    logging.info("url = " + prodUrl + "/concept/ncit/search?terminology=ncit&term=respiratory&conceptStatus=Header_Concept");
    response = requests.get(prodUrl + "/concept/ncit/search?terminology=ncit&term=respiratory&conceptStatus=Header_Concept");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));
        
def test_get_concept_by_contributing_source(): # Get concepts matching a search term within a specified terminology and restrict the search results by a contributing source of "CDISC".
    logging.info("test_concept_tests.py: Get concepts matching a search term within a specified terminology and restrict the search results by a contributing source of \"CDISC\".");
    logging.info("url = " + prodUrl + "/concept/ncit/search?terminology=ncit&term=melanoma&contributingSource=CDISC");
    response = requests.get(prodUrl + "/concept/ncit/search?terminology=ncit&term=melanoma&contributingSource=CDISC");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_concept_by_definition_source(): # Get concepts matching a search term within a specified terminology and restrict the search results by a by a definition source of "NCI".
    logging.info("test_concept_tests.py: Get concepts matching a search term within a specified terminology and restrict the search results by a by a definition source of \"NCI\".");
    logging.info("url = " + prodUrl + "/concept/ncit/search?terminology=ncit&term=melanoma&definitionSource=NCI");
    response = requests.get(prodUrl + "/concept/ncit/search?terminology=ncit&term=melanoma&definitionSource=NCI");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));
    
def test_get_concept_by_definition_type(): # Get concepts matching a search term within a specified terminology and restrict the search results by a by a definition type of "P97".
    logging.info("test_concept_tests.py: Get concepts matching a search term within a specified terminology and restrict the search results by a by a definition type of \"P97\".");
    logging.info("url = " + prodUrl + "/concept/ncit/search?terminology=ncit&term=melanoma&definitionType=P97");
    response = requests.get(prodUrl + "/concept/ncit/search?terminology=ncit&term=melanoma&definitionType=P97");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));
    
def test_get_concept_by_synonym_source(): # Get concepts matching a search term within a specified terminology and restrict the search results by a synonym source of "NCI" and synonymTermGroup of "PT".
    logging.info("test_concept_tests.py: Get concepts matching a search term within a specified terminology and restrict the search results by a synonym source of \"NCI\" and synonymTermGroup of \"PT\".");
    logging.info("url = " + prodUrl + "/concept/ncit/search?terminology=ncit&term=dsDNA&synonymSource=NCI&synonymTermGroup=PT");
    response = requests.get(prodUrl + "/concept/ncit/search?terminology=ncit&term=dsDNA&synonymSource=NCI&synonymTermGroup=PT");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));
    
def test_get_concept_by_synonym_type(): # Get concepts matching a search term within a specified terminology and restrict the search results by a synonym type of "FULL_SYN".
    logging.info("test_concept_tests.py: Get concepts matching a search term within a specified terminology and restrict the search results by a synonym type of \"FULL_SYN\"");
    logging.info("url = " + prodUrl + "/concept/ncit/search?terminology=ncit&term=dsDNA&synonymType=FULL_SYN");
    response = requests.get(prodUrl + "/concept/ncit/search?terminology=ncit&term=dsDNA&synonymType=FULL_SYN");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_concept_by_search_term_match(): # Get concepts matching a search term within a specified terminology and a search type of "match".
    logging.info("test_concept_tests.py: Get concepts matching a search term within a specified terminology and a search type of \"match\".");
    logging.info("url = " + prodUrl + "/concept/ncit/search?terminology=ncit&term=enzyme&term=match");
    response = requests.get(prodUrl + "/concept/ncit/search?terminology=ncit&term=enzyme&term=match");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_concept_by_search_term_starts_with(): # Get concepts matching a search term within a specified terminology and a search type of "startsWith".
    logging.info("test_concept_tests.py: Get concepts matching a search term within a specified terminology and a search type of \"startsWith\".");
    logging.info("url = " + prodUrl + "/concept/ncit/search?terminology=ncit&term=enzyme&term=startsWith");
    response = requests.get(prodUrl + "/concept/ncit/search?terminology=ncit&term=enzyme&term=startsWith");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_concept_by_search_term_phrase(): # Get concepts matching a search term within a specified terminology and a search type of "phrase".
    logging.info("test_concept_tests.py: Get concepts matching a search term within a specified terminology and a search type of \"phrase\".");
    logging.info("url = " + prodUrl + "/concept/ncit/search?terminology=ncit&term=enzyme&term=phrase");
    response = requests.get(prodUrl + "/concept/ncit/search?terminology=ncit&term=enzyme&term=phrase");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_concept_by_search_term_fuzzy(): # Get concepts matching a search term within a specified terminology and a search type of "fuzzy".
    logging.info("test_concept_tests.py: Get concepts matching a search term within a specified terminology and a search type of \"fuzzy\".");
    logging.info("url = " + prodUrl + "/concept/ncit/search?terminology=ncit&term=enzyme&term=fuzzy");
    response = requests.get(prodUrl + "/concept/ncit/search?terminology=ncit&term=enzyme&term=fuzzy");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_concept_by_search_term_or(): # Get concepts matching a search term within a specified terminology and a search type of "or".
    logging.info("test_concept_tests.py: Get concepts matching a search term within a specified terminology and a search type of \"or\".");
    logging.info("url = " + prodUrl + "/concept/ncit/search?terminology=ncit&term=enzyme&term=or");
    response = requests.get(prodUrl + "/concept/ncit/search?terminology=ncit&term=enzyme&term=or");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_concept_by_search_term_and(): # Get concepts matching a search term within a specified terminology and a search type of "and".
    logging.info("test_concept_tests.py: Get concepts matching a search term within a specified terminology and a search type of \"and\".");
    logging.info("url = " + prodUrl + "/concept/ncit/search?terminology=ncit&term=enzyme&term=and");
    response = requests.get(prodUrl + "/concept/ncit/search?terminology=ncit&term=enzyme&term=and");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));

def test_get_concept_by_search_term_highlights(): # Get concepts matching a search term within a specified terminology and include synonyms and highlighted text in the response.
    logging.info("test_concept_tests.py: Get concepts matching a search term within a specified terminology and include synonyms and highlighted text in the response.");
    logging.info("url = " + prodUrl + "/concept/ncit/search?terminology=ncit&term=enzyme&include=synonyms,highlights");
    response = requests.get(prodUrl + "/concept/ncit/search?terminology=ncit&term=enzyme&include=synonyms,highlights");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));
    
def test_get_concept_by_subset(): # Get concepts matching a search term within a specified terminology and subset.
    logging.info("test_concept_tests.py: Get concepts matching a search term within a specified terminology and subset");
    logging.info("url = " + prodUrl + "/concept/ncit/search?subset=C157225&term=Hydrogenation");
    response = requests.get(prodUrl + "/concept/ncit/search?subset=C157225&term=Hydrogenation");
    assert response.status_code == requests.codes.ok;
    pretty_print = json.loads(response.text);
    logging.info(json.dumps(pretty_print, indent=2));
