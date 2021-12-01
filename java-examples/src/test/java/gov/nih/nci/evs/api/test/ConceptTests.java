
package gov.nih.nci.evs.api.test;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import gov.nih.nci.evs.api.client.EvsRestClient;
import gov.nih.nci.evs.api.model.Concept;
import gov.nih.nci.evs.api.model.HierarchyNode;
import gov.nih.nci.evs.api.model.Map;
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
  @BeforeAll
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
    final List<Concept> concepts =
        client.getConcepts(terminology, codes, "synonyms,children,maps,inverseAssociations");
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
    final List<Concept> list = client.getConceptPart(terminology, "C3224", "children");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  children = " + list);
  }

  /**
   * Test get single concept part: parents.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptPartParents() throws Exception {
    final List<Concept> list = client.getConceptPart(terminology, "C3224", "parents");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  parents = " + list);
  }

  /**
   * Test get single concept part: roles.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptPartRoles() throws Exception {
    final List<Relationship> list = client.getRelationshipPart(terminology, "C3224", "roles");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  roles = " + list);
  }

  /**
   * Test get single concept part: associations.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptPartAssociations() throws Exception {
    final List<Relationship> list =
        client.getRelationshipPart(terminology, "C3224", "associations");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  associations = " + list);
  }

  /**
   * Test get single concept part: inverse Roles.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptPartInverseRoles() throws Exception {
    final List<Relationship> list =
        client.getRelationshipPart(terminology, "C3224", "inverseRoles");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  inverse roles = " + list);
  }

  /**
   * Test get single concept part: inverse associations.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptPartInverseAssociations() throws Exception {
    final List<Relationship> list =
        client.getRelationshipPart(terminology, "C3224", "inverseAssociations");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  inverse associations = " + list);
  }

  /**
   * Test get single concept part: maps.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptPartMaps() throws Exception {
    final List<Map> list = client.getMapPart(terminology, "C3224", "maps");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  maps = " + list);
  }

  /**
   * Test get single concept part: disjoint with.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptPartDisjointWith() throws Exception {
    final List<Relationship> list =
        client.getRelationshipPart(terminology, "C3910", "disjointWith");
    logger.info("Get concept by code - C3910");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  disjoint with = " + list);
  }

  /**
   * Test get single concept part: disjoint with.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetDescendants() throws Exception {
    final List<Concept> list = client.getDescendants(terminology, "C3224", 0, 50000);
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  descendants = " + list);
  }

  /**
   * Test get root concepts via terminology.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetRoots() throws Exception {
    final List<Concept> list = client.getRootConcepts(terminology);
    logger.info("Get concept by terminology" + terminology);
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  roots = " + list);
  }

  /**
   * Test get path to root.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetPathToRoot() throws Exception {
    final List<List<Concept>> list =
        client.getConceptPath(terminology, "C3224", "pathsToRoot", null);
    logger.info("Get path to root by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  paths to root = " + list);
  }

  /**
   * Test get path from root.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetPathFromRoot() throws Exception {
    final List<List<Concept>> list =
        client.getConceptPath(terminology, "C3224", "pathsFromRoot", null);
    logger.info("Get path to root by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  paths from root = " + list);
  }

  /**
   * Test get path to ancestor node from code.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetPathToAncestor() throws Exception {
    final List<List<Concept>> list =
        client.getConceptPath(terminology, "C3224", "pathsToAncestor", "C2991");
    logger.info("Get path to ancestor code by code - C3224/C2991");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  path to ancestor = " + list);
  }

  /**
   * Test get subtree graph for code.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetSubtreeForCode() throws Exception {
    final List<HierarchyNode> list = client.getSubtree(terminology, "C3224");
    logger.info("Get subtree graph by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  subtree = " + list.toString());
  }

  /**
   * Test get subtree graph for code's children.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetSubtreeChildren() throws Exception {
    final List<HierarchyNode> list = client.getSubtreeChildren(terminology, "C3224");
    logger.info("Get subtree children by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  subtree children = " + list);
  }

}
