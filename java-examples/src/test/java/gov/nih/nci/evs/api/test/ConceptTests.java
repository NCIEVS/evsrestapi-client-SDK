
package gov.nih.nci.evs.api.test;

import java.util.ArrayList;
import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import gov.nih.nci.evs.api.client.EvsRestClient;
import gov.nih.nci.evs.api.model.Concept;

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

}
