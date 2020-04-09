
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
 * The Class MetadataTests.
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
    logger.info("  url = " + client.getApiUrl());
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

    property = client.getProperty(terminology, "FULL", "minimal");
    logger.info("Get Accepted_Therapeutic_Use_For (minimal information)");
    logger.info("  url = " + client.getApiUrl());
    logger.info("  Accepted_Therapeutic_Use_For = " + property);
  }

  @Test
  public void testGetRoles() throws Exception {
    final List<Concept> roles = client.getRoles(terminology, null, null);
    logger.info("Get all roles for " + terminology + " (default include)");
    logger.info("  url = " + client.getApiUrl());
    for (final Concept role : roles) {
      logger.info("  " + role.getCode() + " = " + role);
    }
  }

  // Get all roles
  // Get role by code (or label)
  // Get all associations
  // Get association by code (or label)
  // Get all term types
  // Get all contributing sources

}
