
package gov.nih.nci.evs.api.test;

import java.util.ArrayList;
import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import gov.nih.nci.evs.api.client.EvsRestClient;
import gov.nih.nci.evs.api.model.Concept;
import gov.nih.nci.evs.api.model.Relationship;

/**
 * Concept tests.
 */
public class ConceptTests {

  /** The logger. */
  private static Logger logger = LoggerFactory.getLogger(ConceptTests.class);

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
   * Test get concept by code.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptByCode() throws Exception {
    final Concept concept = client.getConcept(terminology, "C3224", "minimal");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test get concepts by list as minimal.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptsByListMinimal() throws Exception {
    final List<String> codes = new ArrayList<>();
    codes.add("C3224");
    codes.add("C3910");
    final List<Concept> concepts = client.getConcepts(terminology, codes, "minimal");
    logger.info("Get concepts by list - " + codes);
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concepts = " + concepts);
  }

  /**
   * Test get single concept by list as summary.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptByListSummary() throws Exception {
    final List<String> codes = new ArrayList<>();
    codes.add("C3224");
    final List<Concept> concepts = client.getConcepts(terminology, codes, "summary");
    logger.info("Get concept by list - " + codes);
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concepts = " + concepts);
  }

  /**
   * Test get single concept by list as summary.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptByListFull() throws Exception {
    final List<String> codes = new ArrayList<>();
    codes.add("C3224");
    final List<Concept> concepts = client.getConcepts(terminology, codes, "full");
    logger.info("Get concept by list - " + codes);
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concepts = " + concepts);
  }

  /**
   * Test get single concept by list as custom.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptByListCustom() throws Exception {
    final List<String> codes = new ArrayList<>();
    codes.add("C3224");
    final List<Concept> concepts = client.getConcepts(terminology, codes, "synonyms,children,maps,inverseAssociations");
    logger.info("Get concept by list - " + codes);
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concepts = " + concepts);
  }

  /**
   * Test get single concept part: children.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptPartChildren() throws Exception {
    final List<Concept> concept = client.getConceptPart(terminology, "C3224", "children");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test get single concept part: parents.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptPartParents() throws Exception {
    final List<Concept> concept = client.getConceptPart(terminology, "C3224", "parents");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test get single concept part: roles.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptPartRoles() throws Exception {
    final List<Relationship> concept = client.getRelationshipPart(terminology, "C3224", "roles");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test get single concept part: associations.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptPartAssociations() throws Exception {
    final List<Relationship> concept = client.getRelationshipPart(terminology, "C3224", "associations");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test get single concept part: inverse Roles.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptPartInverseRoles() throws Exception {
    final List<Relationship> concept = client.getRelationshipPart(terminology, "C3224", "inverseRoles");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test get single concept part: inverse associations.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptPartInverseAssociations() throws Exception {
    final List<Relationship> concept = client.getRelationshipPart(terminology, "C3224", "inverseAssociations");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test get single concept part: maps.
   *
   * @throws Exception the exception
   */
  /**@Test
  public void testGetConceptPartMaps() throws Exception {
    final List<Concept> concept = client.getConceptPart(terminology, "C3224", "maps");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test get single concept part: disjoint with.
   *
   * @throws Exception the exception
   */
  /**@Test
  public void testGetConceptPartDisjointWith() throws Exception {
    final List<Concept> concept = client.getConceptPart(terminology, "C3224", "disjointWith");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }*/

}
