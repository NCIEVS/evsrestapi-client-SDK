/*
 * NCI EVS Rest API
 * Endpoints to support searching, metadata, and content retrieval for EVS terminologies. To learn more about how to interact with this api, see the <a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK\">Github evsrestapi-client-SDK project.</a>
 *
 * The version of the OpenAPI document: 1.7.2.RELEASE
 * Contact: NCIAppSupport@nih.gov
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

package gov.nih.nci.evs.api;

import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.model.ConceptResultList;
import gov.nih.nci.evs.api.model.MapResultList;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.junit.jupiter.api.Assertions.*;

/**
 * API tests for SearchEndpointApi. These tests will demonstrate how to call the API and log the
 * information that is returned. The asserts are used to ensure that the data we are pulling align
 * with what is expected based on how we are modeling the information.
 *
 * <p>NOTE: the asserts may be subject to change as the data evolves over time. Updating the tests
 * to align with the data we expect may be needed.
 */
public class SearchEndpointApiTest {

  /* Search api*/
  private static SearchEndpointApi api = null;

  /* Test terminology */
  private static final String terminology = "ncit";

  /* Logger */
  private static final Logger log = LoggerFactory.getLogger(ConceptEndpointsApiTest.class);

  /** Instantiate the SearchEndpointApi */
  @BeforeAll
  public static void beforeAll() {
    api = new SearchEndpointApi();
  }

  /**
   * Get concept search results
   *
   * <p>Use cases for search range from very simple term searches, use of paging parameters,
   * additional filters, searches properties, roles, and associations, and so on. To further explore
   * the range of search options, take a look at the &lt;a
   * href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK&#39;
   * target&#x3D;&#39;_blank&#39;&gt;Github client SDK library created for the NCI EVS Rest
   * API&lt;/a&gt;.
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void searchTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    Boolean ascending = true;
    String include = "minimal";
    Integer fromRecord = 0;
    Integer pageSize = 25;

    // ACT
    ConceptResultList response =
        api.search(
            null,
            terminology,
            null,
            null,
            null,
            ascending,
            include,
            fromRecord,
            pageSize,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null);

    // ASSERT
    assertNotNull(response);
    assertNotNull(response.getConcepts());
    assertNotNull(response.getConcepts().get(0));
    assertEquals("C1000", response.getConcepts().get(0).getCode());

    // LOG
    log.info("Get search results from NCIT for - " + terminology);
    log.info("   search results = " + response);
  }

  /**
   * Get concept search results with concept status filter added
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void searchFilterByConceptStatusTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String term = "respiratory";
    Boolean ascending = true;
    String include = "minimal";
    String conceptStatus = "Header_Concept";
    Integer fromRecord = 0;
    Integer pageSize = 25;

    // ACT
    ConceptResultList response =
        api.search(
            null,
            terminology,
            term,
            null,
            null,
            ascending,
            include,
            fromRecord,
            pageSize,
            conceptStatus,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null);

    // ASSERT
    assertNotNull(response);
    assertEquals(1, response.getTotal());
    assertNotNull(response.getConcepts());
    assertNotNull(response.getConcepts().get(0));

    // LOG
    log.info(
        "Get search results from NCIT for term =  " + term + ", concept status = " + conceptStatus);
    log.info("   search results = " + response);
  }

  /**
   * Get concept search results with definition source filter added
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void searchFilterByDefinitionSourceTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String term = "dsDNA";
    String type = "contains";
    Boolean ascending = true;
    String include = "minimal";
    String definitionSource = "NCI";
    Integer fromRecord = 0;
    Integer pageSize = 5;

    // ACT
    ConceptResultList response =
        api.search(
            null,
            terminology,
            term,
            type,
            null,
            ascending,
            include,
            fromRecord,
            pageSize,
            null,
            null,
            null,
            definitionSource,
            null,
            null,
            null,
            null,
            null);

    // ASSERT
    assertNotNull(response);
    assertEquals(12, response.getTotal());
    assertNotNull(response.getConcepts());
    assertNotNull(response.getConcepts().get(0));

    // LOG
    log.info(
        "Get search results from NCIT for term = "
            + term
            + ", definition source =  "
            + definitionSource);
    log.info("   search results = " + response);
  }

  /**
   * Get concept search results with synonym source and synonym term type filter added
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void searchFilterBySynonymSourceAndTermGroupTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String term = "dsDNA";
    String type = "contains";
    Boolean ascending = true;
    String include = "minimal";
    String synonymSource = "NCI";
    String synonymTermType = "PT";
    Integer fromRecord = 0;
    Integer pageSize = 5;

    // ACT
    ConceptResultList response =
        api.search(
            null,
            terminology,
            term,
            type,
            null,
            ascending,
            include,
            fromRecord,
            pageSize,
            null,
            null,
            null,
            null,
            null,
            synonymSource,
            null,
            synonymTermType,
            null);

    // ASSERT
    assertNotNull(response);
    assertEquals(13, response.getTotal());
    assertNotNull(response.getConcepts());
    assertNotNull(response.getConcepts().get(0));

    // LOG
    log.info(
        "Get search results from NCIT for term = "
            + term
            + ", synonym source =  "
            + synonymSource
            + ", synonym term type = "
            + synonymTermType);
    log.info("   search results = " + response);
  }

  /**
   * Get concept search results using term code
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void searchByCodeTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String term = "C3224";
    String type = "contains";
    Boolean ascending = true;
    String include = "minimal";
    Integer fromRecord = 0;
    Integer pageSize = 25;

    // ACT
    ConceptResultList response =
        api.search(
            null,
            terminology,
            term,
            type,
            null,
            ascending,
            include,
            fromRecord,
            pageSize,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null);

    // ASSERT
    assertNotNull(response);
    assertEquals(1, response.getTotal());
    assertNotNull(response.getConcepts());
    assertNotNull(response.getConcepts().get(0));

    // LOG
    log.info("Get search results from NCIT for term code = " + term);
    log.info("   search results = " + response);
  }

  /**
   * Get concept search results using type match
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void searchByTypeMatchTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String term = "enzyme";
    String type = "match";
    Boolean ascending = true;
    String include = "minimal";
    Integer fromRecord = 0;
    Integer pageSize = 5;

    // ACT
    ConceptResultList response =
        api.search(
            null,
            terminology,
            term,
            type,
            null,
            ascending,
            include,
            fromRecord,
            pageSize,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null);

    // ASSERT
    assertNotNull(response);
    assertEquals(1, response.getTotal());
    assertNotNull(response.getConcepts());
    assertNotNull(response.getConcepts().get(0));

    // LOG
    log.info("Get search results from NCIT for term = " + term + ", type = " + type);
    log.info("   search results = " + response);
  }

  /**
   * Get concept search results using type starts with
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void searchByTypeStartsWithTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String term = "enzyme";
    String type = "startsWith";
    Boolean ascending = true;
    String include = "minimal";
    Integer fromRecord = 0;
    Integer pageSize = 5;

    // ACT
    ConceptResultList response =
        api.search(
            null,
            terminology,
            term,
            type,
            null,
            ascending,
            include,
            fromRecord,
            pageSize,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null);

    // ASSERT
    assertNotNull(response);
    assertEquals(41, response.getTotal());
    assertNotNull(response.getConcepts());
    assertNotNull(response.getConcepts().get(0));

    // LOG
    log.info("Get search results from NCIT for term = " + term + ", type = " + type);
    log.info("   search results = " + response);
  }

  /**
   * Get concept search results using type phrase
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void searchByTypePhraseTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String term = "enzyme";
    String type = "phrase";
    Boolean ascending = true;
    String include = "minimal";
    Integer fromRecord = 0;
    Integer pageSize = 5;

    // ACT
    ConceptResultList response =
        api.search(
            null,
            terminology,
            term,
            type,
            null,
            ascending,
            include,
            fromRecord,
            pageSize,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null);

    // ASSERT
    assertNotNull(response);
    assertTrue(response.getTotal() > 251);
    assertNotNull(response.getConcepts());
    assertNotNull(response.getConcepts().get(0));

    // LOG
    log.info("Get search results from NCIT for term = " + term + ", type = " + type);
    log.info("   search results = " + response);
  }

  /**
   * Get concept search results using type fuzzy
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void searchByTypeFuzzyTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String term = "enzyme";
    String type = "fuzzy";
    Boolean ascending = true;
    String include = "minimal";
    Integer fromRecord = 0;
    Integer pageSize = 5;

    // ACT
    ConceptResultList response =
        api.search(
            null,
            terminology,
            term,
            type,
            null,
            ascending,
            include,
            fromRecord,
            pageSize,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null);

    // ASSERT
    assertNotNull(response);
    assertNotNull(response.getConcepts());
    assertNotNull(response.getConcepts().get(0));

    // LOG
    log.info("Get search results from NCIT for term = " + term + ", type = " + type);
    log.info("   search results = " + response);
  }

  /**
   * Get concept search results with type AND
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void searchByTypeANDTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String term = "malignant melanoma";
    String type = "AND";
    Boolean ascending = true;
    String include = "minimal";
    Integer fromRecord = 0;
    Integer pageSize = 5;

    // ACT
    ConceptResultList response =
        api.search(
            null,
            terminology,
            term,
            type,
            null,
            ascending,
            include,
            fromRecord,
            pageSize,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null);

    // ASSERT
    assertNotNull(response);
    assertEquals(147, response.getTotal());
    assertNotNull(response.getConcepts());
    assertNotNull(response.getConcepts().get(0));

    // LOG
    log.info("Get search results from NCIT for term = " + term + ", type = " + type);
    log.info("   search results = " + response);
  }

  /**
   * Get concept search results with type OR
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void searchByTypeORTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String term = "malignant melanoma";
    String type = "OR";
    Boolean ascending = true;
    String include = "minimal";
    Integer fromRecord = 0;
    Integer pageSize = 5;

    // ACT
    ConceptResultList response =
        api.search(
            null,
            terminology,
            term,
            type,
            null,
            ascending,
            include,
            fromRecord,
            pageSize,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null);

    // ASSERT
    assertNotNull(response);
    assertNotNull(response.getConcepts());
    assertNotNull(response.getConcepts().get(0));

    // LOG
    log.info("Get search results from NCIT for term = " + term + ", type = " + type);
    log.info("   search results = " + response);
  }

  /**
   * Get concept search results with highlights
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void searchWithHighlightsTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String term = "XAV05295I5";
    Boolean ascending = true;
    String include = "minimal";
    Integer fromRecord = 0;
    Integer pageSize = 5;

    // ACT
    ConceptResultList response =
        api.search(
            null,
            terminology,
            term,
            null,
            null,
            ascending,
            include,
            fromRecord,
            pageSize,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null);

    // ASSERT
    assertNotNull(response);
    assertEquals(1, response.getTotal());
    assertNotNull(response.getConcepts());
    assertNotNull(response.getConcepts().get(0));

    // LOG
    log.info("Get search results from NCIT for term = " + term + " (with highlights)");
    log.info("   search results = " + response);
  }

  /**
   * Get concept search results with highlights
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void searchConceptsByPropertyTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String term = "XAV05295I5";
    Boolean ascending = true;
    String include = "minimal";
    Integer fromRecord = 0;
    Integer pageSize = 5;
    String property = "FDA_UNII_Code";

    // ACT
    ConceptResultList response =
        api.search(
            null,
            terminology,
            term,
            null,
            null,
            ascending,
            include,
            fromRecord,
            pageSize,
            null,
            property,
            null,
            null,
            null,
            null,
            null,
            null,
            null);

    // ASSERT
    assertNotNull(response);
    assertEquals(1, response.getTotal());
    assertNotNull(response.getConcepts());
    assertNotNull(response.getConcepts().get(0));

    // LOG
    log.info("Get search results from NCIT for term = " + term + ", property = " + property);
    log.info("   search results = " + response);
  }

  /**
   * Get concept search results for a specified terminology
   *
   * <p>Use cases for search range from very simple term searches, use of paging parameters,
   * additional filters, searches properties, roles, and associations, and so on. To further explore
   * the range of search options, take a look at the &lt;a
   * href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK&#39;
   * target&#x3D;&#39;_blank&#39;&gt;Github client SDK library created for the NCI EVS Rest
   * API&lt;/a&gt;.
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void searchSingleTerminologyTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String term = "melanoma";
    Boolean ascending = false;
    String include = "minimal";
    Integer fromRecord = 0;
    Integer pageSize = 50;

    // ACT
    ConceptResultList response =
        api.searchSingleTerminology(
            terminology,
            null,
            term,
            null,
            null,
            ascending,
            include,
            fromRecord,
            pageSize,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null);

    // ASSERT
    assertNotNull(response);
    assertNotNull(response.getConcepts());
    assertNotNull(response.getConcepts().get(0));
    assertEquals("C3224", response.getConcepts().get(0).getCode());

    // LOG
    log.info("Get search results for specific term - " + term);
    log.info("   search results = " + response);
  }
  
  /**
   * Get concept search results using term code through SPARQL without a prefix
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void searchSPARQLWithoutPrefixTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String type = "contains";
    Boolean ascending = true;
    String include = "minimal";
    Integer fromRecord = 0;
    Integer pageSize = 25;
    // API generates prefix
    String query = "SELECT ?code\n" + 
        "{ GRAPH <http://NCI_T_monthly> \n" + 
        "  { \n" + 
        "    ?x a owl:Class . \n" + 
        "    ?x :NHC0 ?code .\n" + 
        "    ?x :P108 \"Melanoma\"\n" + 
        "  } \n" + 
        "}";

    // ACT
    ConceptResultList response =
        api.searchSingleTerminologySparql(
            terminology,
            query,
            include,
            null,
            null,
            type,
            null,
            ascending,
            fromRecord,
            pageSize,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null);

    // ASSERT
    assertNotNull(response);
    assertEquals(1, response.getTotal());
    assertNotNull(response.getConcepts());
    assertNotNull(response.getConcepts().get(0));

    // LOG
    log.info("Get SPARQL search results from NCIT for query = " + query);
    log.info("   search results = " + response);
    
  }
  
  /**
   * Get concept search results using term code through SPARQL with a prefix
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void searchSPARQLWithPrefixTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String type = "contains";
    Boolean ascending = true;
    String include = "minimal";
    Integer fromRecord = 0;
    Integer pageSize = 25;
    // preformed prefix
    String query = "PREFIX :<http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#> \n" + 
        "PREFIX base:<http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#>\n" + 
        "PREFIX owl:<http://www.w3.org/2002/07/owl#>\n" + 
        "PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n" + 
        "PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\n" + 
        "PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>\n" + 
        "PREFIX dc:<http://purl.org/dc/elements/1.1/>\n" + 
        "PREFIX oboInOwl:<http://www.geneontology.org/formats/oboInOwl#>\n" + 
        "PREFIX xml:<http://www.w3.org/2001/XMLSchema#>\n" + 
        "SELECT ?code\n" + 
        "{ GRAPH <http://NCI_T_monthly> \n" + 
        "  { \n" + 
        "    ?x a owl:Class . \n" + 
        "    ?x :NHC0 ?code .\n" + 
        "    ?x :P108 \"Melanoma\"\n" + 
        "  } \n" + 
        "}";

    // ACT
    ConceptResultList response =
        api.searchSingleTerminologySparql(
            terminology,
            query,
            include,
            null,
            null,
            type,
            null,
            ascending,
            fromRecord,
            pageSize,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null);

    // ASSERT
    assertNotNull(response);
    assertEquals(1, response.getTotal());
    assertNotNull(response.getConcepts());
    assertNotNull(response.getConcepts().get(0));

    // LOG
    log.info("Get SPARQL search results from NCIT for query = " + query);
    log.info("   search results = " + response);
  }
  /**
   * Get SPARQL bindings from query
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void searchSPARQLBindingsTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String include = "minimal";
    String query = "SELECT ?code ?x { GRAPH <http://NCI_T_monthly> { ?x a owl:Class . ?x :NHC0 ?code . } }";

    // ACT
    MapResultList response =
        api.getSparqlBindings(
            terminology,
            query,
            null,
            null,
            null);

    // ASSERT
    assertNotNull(response);

    // LOG
    log.info("Get SPARQL binding results from query = " + query);
    log.info("   search results = " + response);
  }
}
