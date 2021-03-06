
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
    logger.info("Get terminologies");
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
   * Test get qualifiers.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetQualifiers() throws Exception {
    final List<Concept> qualifiers = client.getQualifiers(terminology, null, null);
    logger.info("Get all qualifiers for " + terminology + " (default include)");
    logger.info("  url = " + client.getApiUrl());
    for (final Concept qualifier : qualifiers) {
      logger.info("  " + qualifier.getCode() + " = " + qualifier);
    }
  }

  /**
   * Test get qualifier.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetQualifier() throws Exception {
    Concept qualifier = null;

    qualifier = client.getQualifier(terminology, "P387", "full");
    logger.info("Get P387 (full information)");
    logger.info("  url = " + client.getApiUrl());
    logger.info("  P387 = " + qualifier);

    qualifier = client.getQualifier(terminology, "go-id", "minimal");
    logger.info("Get go-id (minimal information)");
    logger.info("  url = " + client.getApiUrl());
    logger.info("  go-id = " + qualifier);
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
  public void testGetRole() throws Exception {
    Concept role = null;
    role = client.getRole(terminology, "R123", "full");
    logger.info("Get R123 (full information)");
    logger.info("  url = " + client.getApiUrl());
    logger.info("  R123 = " + role);

    role = client.getRole(terminology, "Chemotherapy_Regimen_Has_Component", "minimal");
    logger.info("Get Chemotherapy_Regimen_Has_Component (minimal information)");
    logger.info("  url = " + client.getApiUrl());
    logger.info("  Chemotherapy_Regimen_Has_Component = " + role);
  }

  /**
   * Test get qualifier values.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetQualifierValues() throws Exception {

    final List<String> list = client.getQualifierValues(terminology, "P383");
    logger.info("Get qualifier values for - P383");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  qualifier values = " + list);
  }

  /**
   * Test get associations.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetAssociations() throws Exception {
    final List<Concept> list = client.getAssociations(terminology, null, null);
    logger.info("Get all associations for " + terminology + " (default include)");
    logger.info("  url = " + client.getApiUrl());
    for (final Concept association : list) {
      logger.info("  " + association.getCode() + " = " + association);
    }
  }

  /**
   * Test get association by code.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetAssociation() throws Exception {

    Concept concept = client.getAssociation(terminology, "A10", "full");
    logger.info("Get A10 (full information)");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  A10 = " + concept);
    concept = client.getAssociation(terminology, "Has_CDRH_Parent", "minimal");
    logger.info("Get Has_CDRH_Parent (minimal information)");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  Has_CDRH_Parent = " + concept);
  }

  /**
   * Test get term types by terminology.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetTermTypes() throws Exception {

    final List<Concept> list = client.getTermInfo(terminology, "termTypes");
    logger.info("Get term types by terminology - " + terminology);
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  term types = " + list);
  }

  /**
   * Test get definition types by terminology.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetDefinitionTypes() throws Exception {

    final List<Concept> list = client.getDefinitionInfo(terminology, "definitionTypes");
    logger.info("Get definition types by terminology - " + terminology);
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  definition types = " + list);
  }

  /**
   * Test get synonym types by terminology.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetSynonymTypes() throws Exception {

    final List<Concept> list = client.getSynonymInfo(terminology, "synonymTypes");
    logger.info("Get synonym types by terminology - " + terminology);
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  synonym types = " + list);
  }

}
