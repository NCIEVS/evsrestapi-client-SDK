
package gov.nih.nci.evs.api.test;

import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import gov.nih.nci.evs.api.client.EvsRestClient;
import gov.nih.nci.evs.api.model.Concept;
import gov.nih.nci.evs.api.model.Terminology;

/**
 * Metadata tests.
 */
public class MetadataTests {

  /** The logger. */
  private static Logger logger = LoggerFactory.getLogger(MetadataTests.class);

  /** The client. */
  private static EvsRestClient client = null;

  /** The terminology. */
  private static String terminology = "ncit";

  /**
   * Setup class.
   *
   * @throws Exception the exception
   */
  @BeforeClass
  public static void setupClass() throws Exception {
    client = new EvsRestClient();
  }

  /**
   * Test get terminologies.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetTerminologies() throws Exception {
    final List<Terminology> terminologies = client.getTerminologies();
    logger.info("Get Terminologies");
    logger.info("  base url = " + client.getApiUrl());
    for (final Terminology terminology : terminologies) {
      logger.info("  " + terminology.getTerminology() + " = " + terminology);
    }
  }

  /**
   * Test get properties.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetProperties() throws Exception {
    final List<Concept> properties = client.getProperties(terminology, null, null);
    logger.info("Get all properties for " + terminology + " (default include)");
    logger.info("  url = " + client.getApiUrl());
    for (final Concept property : properties) {
      logger.info("  " + property.getCode() + " = " + property);
    }
  }

  /**
   * Test get property.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetProperty() throws Exception {
    Concept property = null;

    property = client.getProperty(terminology, "P302", "full");
    logger.info("Get P302 (full information)");
    logger.info("  url = " + client.getApiUrl());
    logger.info("  P302 = " + property);

    property = client.getProperty(terminology, "Accepted_Therapeutic_Use_For", "minimal");
    logger.info("Get Accepted_Therapeutic_Use_For (minimal information)");
    logger.info("  url = " + client.getApiUrl());
    logger.info("  Accepted_Therapeutic_Use_For = " + property);
  }

  /**
   * Test get roles.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetRoles() throws Exception {
    final List<Concept> roles = client.getRoles(terminology, null, null);
    logger.info("Get all roles for " + terminology + " (default include)");
    logger.info("  url = " + client.getApiUrl());
    for (final Concept role : roles) {
      logger.info("  " + role.getCode() + " = " + role);
    }
  }

  /**
   * Test get roles by code.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetRolesByCode() throws Exception {
    final Concept roles = client.getRolesByCode(terminology, "R123");
    logger.info("Get all roles for " + terminology + " (default include)");
    logger.info("  url = " + client.getApiUrl());
    logger.info("  " + roles.getCode() + " = " + roles);
  }

  /**
   * Test get property by code.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetPropertyByCode() throws Exception {

    final Concept concept = client.getInfoWithCodes(terminology, "P90", "property");
    logger.info("Get concept by code - P90");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test get property by code with axiom qualifiers.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetPropertyByCodeWithAxiomQualifiers() throws Exception {

    final List<String> concept = client.getAxiomValues(terminology, "P383");
    logger.info("Get concept by code - P383");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  // Get all associations

  @Test
  public void testGetAssociations() throws Exception {
    final List<Concept> associations = client.getAssociations(terminology, null, null);
    logger.info("Get all associations for " + terminology + " (default include)");
    logger.info("  url = " + client.getApiUrl());
    for (final Concept association : associations) {
      logger.info("  " + association.getCode() + " = " + association);
    }
  }

  // Get association by code (or label)

  /**
   * Test get property by code.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetAssociationByCode() throws Exception {

    final Concept concept = client.getInfoWithCodes(terminology, "A10", "association");
    logger.info("Get concept by code - A10");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }
  
  // Get all term types
  // Get all contributing sources

}
