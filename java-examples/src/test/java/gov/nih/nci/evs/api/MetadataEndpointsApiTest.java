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
import gov.nih.nci.evs.api.model.Concept;
import gov.nih.nci.evs.api.model.ConceptMinimal;
import gov.nih.nci.evs.api.model.Terminology;
import java.util.List;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.junit.jupiter.api.Assertions.*;

/**
 * API tests for MetadataEndpointsApi. These tests will demonstrate how to call the API and log the
 * information that is returned. The asserts are used to ensure that the data we are pulling align
 * with what is expected based on how we are modeling the information.
 *
 * <p>NOTE: the asserts may be subject to change as the data evolves over time. Updating the tests
 * to align with the data we expect may be needed.
 */
public class MetadataEndpointsApiTest {

  /* Metadata api  */
  private static MetadataEndpointsApi api = null;

  /* Test terminology */
  private static final String terminology = "ncit";

  /* Logger */
  private static final Logger log = LoggerFactory.getLogger(ConceptEndpointsApiTest.class);

  /** Instantiate the MetadataEndpointsApi */
  @BeforeAll
  public static void beforeAll() {
    api = new MetadataEndpointsApi();
  }

  /**
   * Get the association for the specified terminology and code/name
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getAssociationTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String codeOrName = "A18";
    String include = "minimal";

    // ACT
    Concept response = api.getAssociation(terminology, codeOrName, include);

    // ASSERT
    assertNotNull(response);
    assertEquals("Has_Pharmaceutical_Basic_Dose_Form", response.getName());

    // LOG
    log.info("Get all associates for code - A18");
    log.info("    associations = " + response);
  }

  /**
   * Get all associations (or those specified by list parameter) for the specified terminology
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getAssociationsTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String include = "minimal";

    // ACT
    List<Concept> response = api.getAssociations(terminology, include, null);

    // ASSERT
    assertFalse(response.isEmpty());
    assertEquals(40, response.size());
    assertEquals("A1", response.get(0).getCode());

    // LOG
    log.info("Get all associates for terminology - ncit");
    log.info("    associations = " + response);
  }

  /**
   * Get all concept status values for the specified terminology
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getConceptStatusesTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    // ACT
    List<String> response = api.getConceptStatuses(terminology);

    // ASSERT
    assertFalse(response.isEmpty());
    assertEquals(5, response.size());
    assertEquals("Obsolete_Concept", response.get(0));

    // LOG
    log.info("Get all statuses associated with terminology - ncit");
    log.info(" concept statuses = " + response);
  }

  /**
   * Get all definition sources for the specified terminology
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getDefinitionSourcesTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed

    // ACT
    List<ConceptMinimal> response = api.getDefinitionSources(terminology);

    // ASSERT
    assertFalse(response.isEmpty());
    assertEquals("ACC/AHA", response.get(0).getCode());
    assertEquals(
        "American College of Cardiology / American Heart Association", response.get(0).getName());

    // LOG
    log.info("Get all definitions for term - ncit");
    log.info("   definitions = " + response);
  }

  /**
   * Get the definition type for the specified terminology and code/name.
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getDefinitionTypeTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String codeOrName = "P325";
    String include = "minimal";

    // ACT
    Concept response = api.getDefinitionType(terminology, codeOrName, include);

    // ASSERT
    assertNotNull(response);
    assertEquals(terminology, response.getTerminology());
    assertEquals("ALT_DEFINITION", response.getName());

    // LOG
    log.info("Get the definition type for code - P325");
    log.info("   definition type = " + response);
  }

  /**
   * Get all definition types (or those specified by list parameter) for the specified terminology
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getDefinitionTypesTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String include = "minimal";

    // ACT
    List<Concept> response = api.getDefinitionTypes(terminology, include, null);

    // ASSERT
    assertFalse(response.isEmpty());
    assertEquals("P97", response.get(0).getCode());
    assertEquals("DEFINITION", response.get(0).getName());
    assertEquals("P325", response.get(1).getCode());
    assertEquals("ALT_DEFINITION", response.get(1).getName());
    // LOG
    log.info("Get all definition types for list of codes - A1 & A12");
    log.info("   definition types = " + response);
  }

  /**
   * Get all properties (or those specified by list parameter) for the specified terminology
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getPropertiesTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String include = "minimal";

    // ACT
    List<Concept> response = api.getProperties(terminology, include, null);

    // ASSERT
    assertFalse(response.isEmpty());
    assertEquals("NHC0", response.get(0).getCode());
    assertEquals("code", response.get(0).getName());
    assertEquals("P106", response.get(1).getCode());
    assertEquals("Semantic_Type", response.get(1).getName());

    // LOG
    log.info("Get all properties for a term & list of codes/labels - ncit");
    log.info("   properties = " + response);
  }

  /**
   * Get the property for the specified terminology and code/name
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getPropertyTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String codeOrName = "P216";
    String include = "full";

    // ACT
    Concept response = api.getProperty(terminology, codeOrName, include);

    // ASSERT
    assertNotNull(response);
    assertEquals("BioCarta_ID", response.getName());
    assertEquals("BioCarta ID", response.getSynonyms().get(0).getName());

    // LOG
    log.info("Get full property for code - P216");
    log.info("   property = " + response);
  }

  /**
   * Get the qualifier for the specified terminology and code/name
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getQualifierTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String codeOrName = "P390";
    String include = "summary";

    // ACT
    Concept response = api.getQualifier(terminology, codeOrName, include);

    // ASSERT
    assertNotNull(response);
    assertEquals("go-source", response.getName());
    assertNotNull(response.getSynonyms());
    assertNotNull(response.getDefinitions());

    // LOG
    log.info("Get qualified for code - P390");
    log.info("   qualifier = " + response);
  }

  /**
   * Get qualifier values for the specified terminology and code/name
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getQualifierValuesTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String codeOrName = "P390";

    // ACT
    List<String> response = api.getQualifierValues(terminology, codeOrName);

    // ASSERT
    assertFalse(response.isEmpty());
    assertEquals("CGAP", response.get(0));

    // LOG
    log.info("Get qualifier values for code/name - P390");
    log.info("    qualifier values = " + response);
  }

  /**
   * Get all qualifiers (properties on properties) for the specified terminology
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getQualifiersTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String include = "minimal";

    // ACT
    List<Concept> response = api.getQualifiers(terminology, include, null);

    // ASSERT
    assertFalse(response.isEmpty());
    assertEquals("P383", response.get(0).getCode());
    assertEquals("P384", response.get(1).getCode());

    // LOG
    log.info("Get all qualifiers for ncit");
    log.info("   qualifiers = " + response);
  }

  /**
   * Get the role for the specified terminology and code/name
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getRoleTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String codeOrName = "R123";
    String include = "full";

    // ACT
    Concept response = api.getRole(terminology, codeOrName, include);

    // ASSERT
    assertNotNull(response);
    assertEquals("Chemotherapy_Regimen_Has_Component", response.getName());
    assertNotNull(response.getSynonyms());

    // LOG
    log.info("Get the role for code - R123");
    log.info("   role = " + response);
  }

  /**
   * Get all roles (or those specified by list parameter) for the specified terminology
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getRolesTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String include = "minimal";

    // ACT
    List<Concept> response = api.getRoles(terminology, include, null);

    // ASSERT
    assertFalse(response.isEmpty());
    assertEquals("R123", response.get(0).getCode());
    assertEquals("R163", response.get(1).getCode());

    // LOG
    log.info("Get all roles for ncit");
    log.info("   roles = " + response);
  }

  /**
   * Get the subset for the specified terminology and code.
   *
   * <p>This endpoint will be deprecated in v2 in favor of top level subset endpoints.
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getSubset1Test() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String code = "C81222";
    String include = "summary";

    // ACT
    Concept response = api.getSubset1(terminology, code, include);

    // ASSERT
    assertNotNull(response);
    assertEquals("CDISC ADaM Terminology", response.getName());

    // LOG
    log.info("Get the subset for code - " + code);
    log.info("    subset = " + response);
  }

  /**
   * Get all subsets (or those specified by list parameter) for the specified terminology.
   *
   * <p>This endpoint will be deprecated in v2 in favor of top level subset endpoints.
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getSubsets1Test() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String include = "minimal";

    // ACT
    List<Concept> response = api.getSubsets1(terminology, include, null);

    // ASSERT
    assertFalse(response.isEmpty());
    assertEquals("C167405", response.get(0).getCode());

    // LOG
    log.info("Get all subsets for ncit");
    log.info("   subsets = " + response);
  }

  /**
   * Get all synonym sources for the specified terminology
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getSynonymSourcesTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    // ACT
    List<ConceptMinimal> response = api.getSynonymSources(terminology);

    // ASSERT
    assertFalse(response.isEmpty());
    assertEquals("ACC/AHA", response.get(0).getCode());
    assertEquals("BIOCARTA", response.get(1).getCode());

    // LOG
    log.info("Get all synonyms for ncit");
    log.info("   synonyms = " + response);
  }

  /**
   * Get the synonym type for the specified terminology and code/name
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getSynonymTypeTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String codeOrName = "P90";
    String include = "minimal";

    // ACT
    Concept response = api.getSynonymType(terminology, codeOrName, include);

    // ASSERT
    assertNotNull(response);
    assertEquals("FULL_SYN", response.getName());

    // LOG
    log.info("Get synonym for code/name - P90");
    log.info("   synonym = " + response);
  }

  /**
   * Get all synonym types (or those specified by list parameter) for the specified terminology
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getSynonymTypesTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    String include = "full";

    // ACT
    List<Concept> response = api.getSynonymTypes(terminology, include, null);

    // ASSERT
    assertFalse(response.isEmpty());
    assertEquals("ncit", response.get(0).getTerminology());
    assertEquals("P108", response.get(0).getCode());

    // LOG
    log.info("Get all synonym types for ncit");
    log.info("   synonym types = " + response);
  }

  /**
   * Get all term types for the specified terminology
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getTermTypesTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    // ACT
    List<ConceptMinimal> response = api.getTermTypes(terminology);

    // ASSERT
    assertFalse(response.isEmpty());
    assertEquals("AB", response.get(0).getCode());
    assertEquals("AD", response.get(1).getCode());

    // LOG
    log.info("Get all term types for ncit");
    log.info("   term types = " + response);
  }

  /**
   * Get all available terminologies
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getTerminologiesTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed
    Boolean latest = true;
    String tag = "monthly";

    // ACT
    List<Terminology> response = api.getTerminologies(latest, tag, terminology);

    // ASSERT
    assertFalse(response.isEmpty());
    assertEquals("ncit", response.get(0).getTerminology());
    assertTrue(response.get(0).getLatest());

    // LOG
    log.info("Get all terminologies for ncit");
    log.info("   terminologies = " + response);
  }

  /**
   * TODO: VALIDATE THIS IS A VALID API CALL
   * Get welcome text for the specified terminology
   *
   * @throws ApiException if the Api call fails
   */
  @Disabled
  @Test
  public void getWelcomeTextTest() throws ApiException {
    // ARRANGE - using global variable unless otherwise listed

    // ACT
    String response = api.getWelcomeText(terminology);

    // ASSERT
    assertNotNull(response);


    // LOG
    log.info("Get welcome text for ncit");
    log.info("    text = " + terminology);
  }
}
