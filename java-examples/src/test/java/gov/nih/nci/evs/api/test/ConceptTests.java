
package gov.nih.nci.evs.api.test;

import java.util.ArrayList;
import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import gov.nih.nci.evs.api.client.EvsRestClient;
import gov.nih.nci.evs.api.model.Concept;
import gov.nih.nci.evs.api.model.Map;
import gov.nih.nci.evs.api.model.Relationship;
import gov.nih.nci.evs.api.model.ResultList;

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
  @Test
  public void testGetConceptPartMaps() throws Exception {
    final List<Map> concept = client.getMapPart(terminology, "C3224", "maps");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test get single concept part: disjoint with.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptPartDisjointWith() throws Exception {
    final List<Relationship> concept = client.getRelationshipPart(terminology, "C3910", "disjointWith");
    logger.info("Get concept by code - C3910");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test get single concept part: disjoint with.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetDescendants() throws Exception {
    final List<Concept> concept = client.getDescendants(terminology, "C3224", "4");
    logger.info("Get concept by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test get root concepts via terminology.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetRoots() throws Exception {
    final List<Concept> concept = client.getRootConcepts(terminology);
    logger.info("Get concept by terminology" + terminology);
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test get path to root.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetPathToRoot() throws Exception {
    final List<List<Concept>> concept = client.getConceptPath(terminology, "C3224", "pathsToRoot", null);
    logger.info("Get path to root by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test get path from root.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetPathFromRoot() throws Exception {
    final List<List<Concept>> concept = client.getConceptPath(terminology, "C3224", "pathsFromRoot", null);
    logger.info("Get path to root by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test get path to ancestor node from code.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetPathToAncestor() throws Exception {
    final List<List<Concept>> concept = client.getConceptPath(terminology, "C3224", "pathsToAncestor", "C2991");
    logger.info("Get path to ancestor code by code - C3224/C2991");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test get subtree graph for code without children.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetSubtreeForCode() throws Exception {
    final String concept = client.getSubtree(terminology, "C3224", false);
    logger.info("Get subtree graph by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept.toString());
  }

  /**
   * Test get subtree graph for code with children.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetSubtreeForCodeNoChildren() throws Exception {
    final String concept = client.getSubtree(terminology, "C3224", true);
    logger.info("Get subtree graph by code - C3224");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test get concept by search term.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptBySearchTerm() throws Exception {
    final String concept = client.getConceptBySearchTerm(terminology, "melanoma", "5", null, 
    null, null, null, null, null, null, null);
    logger.info("Get concept by search term - melanoma");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test concept by search term and concept status.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptBySearchTermConceptStatus() throws Exception {
    final String concept = client.getConceptBySearchTerm(terminology, "melanoma", "5", "Header_Concept", 
    null, null, null, null, null, null, null);
    logger.info("Get concept by search term - melanoma");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test concept by search term and contributing source.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptBySearchTermContributingSource() throws Exception {
    final String concept = client.getConceptBySearchTerm(terminology, "melanoma", "5", null, 
    "CDISC", null, null, null, null, null, null);
    logger.info("Get concept by search term - melanoma");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test concept by search term and definition source.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptBySearchTermDefinitionSource() throws Exception {
    final String concept = client.getConceptBySearchTerm(terminology, "melanoma", "5", null, 
    null, "NCI", null, null, null, null, null);
    logger.info("Get concept by search term - dsDNA");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test concept by search term and synonym source.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptBySearchTermSynonymSource() throws Exception {
    final String concept = client.getConceptBySearchTerm(terminology, "dsDNA", null, null, 
    null, null, "NCI", "PT", null, null, null);
    logger.info("Get concept by search term - dsDNA");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test concept by code.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptBySearchTermAsCode() throws Exception {
    final String concept = client.getConceptBySearchTerm(terminology, "C3224", null, null, 
    null, null, null, null, null, null, null);
    logger.info("Get concept by search term - dsDNA");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test concept by search term type "match".
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptBySearchTermMatch() throws Exception {
    List<String> includes = new ArrayList<>();
    includes.add("properties");
    final String concept = client.getConceptBySearchTerm(terminology, "enzyme", "5", null, 
    null, null, null, null, "match", null, null);
    logger.info("Get concept by search term - enzyme");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

  /**
   * Test concept by property.
   *
   * @throws Exception the exception
   */
  @Test
  public void testGetConceptByProperty() throws Exception {
    List<String> includes = new ArrayList<>();
    includes.add("properties");
    final String concept = client.getConceptBySearchTerm(terminology, "XAV05295I5", null, null, 
    null, null, null, null, null, "fda_unii_code", includes);
    logger.info("Get concept by search term - XAV05295I5");
    logger.info("  base url = " + client.getApiUrl());
    logger.info("  concept = " + concept);
  }

}
