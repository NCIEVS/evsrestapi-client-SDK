
package gov.nih.nci.evs.api.test;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import gov.nih.nci.evs.api.client.EvsRestClient;
import gov.nih.nci.evs.api.model.ConceptResultList;

/**
 * Search tests.
 */
public class SearchTests {

	/** The logger. */
	private static Logger logger = LoggerFactory.getLogger(SearchTests.class);

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
	 * Test get concept by search term.
	 *
	 * @throws Exception the exception
	 */
	@Test
	public void testFindConceptsBySearchTerm() throws Exception {
		final ConceptResultList list = client.findConceptsBySearchTerm(terminology, "melanoma", 5, null, null, null,
				null, null, null, null, null);
		logger.info("Get concept by search term=melanoma");
		logger.info("  base url = " + client.getApiUrl());
		logger.info("  concepts = " + list);
	}

	/**
	 * Test concept by search term and concept status.
	 *
	 * @throws Exception the exception
	 */
	@Test
	public void testFindConceptsBySearchTermConceptStatus() throws Exception {
		final ConceptResultList list = client.findConceptsBySearchTerm(terminology, "respiratory", 5, "Header_Concept",
				null, null, null, null, null, null, null);
		logger.info("Get concept by search term=respiratory, status=Header_Concept");
		logger.info("  base url = " + client.getApiUrl());
		logger.info("  concepts = " + list);
	}

	/**
	 * Test concept by search term and contributing source.
	 *
	 * @throws Exception the exception
	 */
	@Test
	public void testFindConceptsBySearchTermContributingSource() throws Exception {
		final ConceptResultList list = client.findConceptsBySearchTerm(terminology, "melanoma", 5, null, "CDISC", null,
				null, null, null, null, null);
		logger.info("Get concept by search term=melanoma, contributingSource=CDISC");
		logger.info("  base url = " + client.getApiUrl());
		logger.info("  concepts = " + list);
	}

	/**
	 * Test concept by search term and definition source.
	 *
	 * @throws Exception the exception
	 */
	@Test
	public void testFindConceptsBySearchTermDefinitionSource() throws Exception {
		final ConceptResultList list = client.findConceptsBySearchTerm(terminology, "melanoma", 5, null, null, "NCI",
				null, null, null, null, null);
		logger.info("Get concept by search term=dsDNA, definitionSource=NCI");
		logger.info("  base url = " + client.getApiUrl());
		logger.info("  concepts = " + list);
	}

	/**
	 * Test concept by search term and synonym source.
	 *
	 * @throws Exception the exception
	 */
	@Test
	public void testFindConceptsBySearchTermSynonymSource() throws Exception {
		final ConceptResultList list = client.findConceptsBySearchTerm(terminology, "dsDNA", null, null, null, null,
				"NCI", "PT", null, null, null);
		logger.info("Get concept by search term=dsDNA, synonymSource=NCI, synonymTermGroup=PT");
		logger.info("  base url = " + client.getApiUrl());
		logger.info("  concepts = " + list);
	}

	/**
	 * Test concept by code.
	 *
	 * @throws Exception the exception
	 */
	@Test
	public void testFindConceptsBySearchTermAsCode() throws Exception {
		final ConceptResultList list = client.findConceptsBySearchTerm(terminology, "C3224", null, null, null, null,
				null, null, null, null, null);
		logger.info("Get concept by search term=C3224");
		logger.info("  base url = " + client.getApiUrl());
		logger.info("  concepts = " + list);
	}

	/**
	 * Test concept by search term type "match".
	 *
	 * @throws Exception the exception
	 */
	@Test
	public void testFindConceptsBySearchTermMatch() throws Exception {
		final ConceptResultList list = client.findConceptsBySearchTerm(terminology, "enzyme", 5, null, null, null, null,
				null, "match", null, null);
		logger.info("Get concept by search term=enzyme, type=match");
		logger.info("  base url = " + client.getApiUrl());
		logger.info("  concepts = " + list);
	}

	/**
	 * Test concept by search term type "startsWith".
	 *
	 * @throws Exception the exception
	 */
	@Test
	public void testFindConceptsBySearchTermStartsWith() throws Exception {
		final ConceptResultList list = client.findConceptsBySearchTerm(terminology, "enzyme", 5, null, null, null, null,
				null, "startsWith", null, null);
		logger.info("Get concept by search term=enzyme, type=startsWith");
		logger.info("  base url = " + client.getApiUrl());
		logger.info("  concepts = " + list);
	}

	/**
	 * Test concept by search term type "phrase".
	 *
	 * @throws Exception the exception
	 */
	@Test
	public void testFindConceptsBySearchTermPhrase() throws Exception {
		final ConceptResultList list = client.findConceptsBySearchTerm(terminology, "malignant melanoma", 5, null, null,
				null, null, null, "phrase", null, null);
		logger.info("Get concept by search term=malignant melanoma, type=phrase");
		logger.info("  base url = " + client.getApiUrl());
		logger.info("  concepts = " + list);
	}

	/**
	 * Test concept by search term type "fuzzy".
	 *
	 * @throws Exception the exception
	 */
	@Test
	public void testFindConceptsBySearchTermFuzzy() throws Exception {
		final ConceptResultList list = client.findConceptsBySearchTerm(terminology, "enzyme", 5, null, null, null, null,
				null, "fuzzy", null, null);
		logger.info("Get concept by search term=enzyme, type=fuzzy");
		logger.info("  base url = " + client.getApiUrl());
		logger.info("  concepts= " + list);
	}

	/**
	 * Test concept by search term type "AND".
	 *
	 * @throws Exception the exception
	 */
	@Test
	public void testFindConceptsBySearchTermAnd() throws Exception {
		final ConceptResultList list = client.findConceptsBySearchTerm(terminology, "malignant melanoma", 5, null, null,
				null, null, null, "AND", null, null);
		logger.info("Get concept by search term=malignant melanoma, type=AND");
		logger.info("  base url = " + client.getApiUrl());
		logger.info("  concepts = " + list);
	}

	/**
	 * Test concept by search term type "OR".
	 *
	 * @throws Exception the exception
	 */
	@Test
	public void testFindConceptsBySearchTermOr() throws Exception {
		final ConceptResultList list = client.findConceptsBySearchTerm(terminology, "malignant melanoma", 5, null, null,
				null, null, null, "OR", null, null);
		logger.info("Get concept by search term=malignant melanoma, type=OR");
		logger.info("  base url = " + client.getApiUrl());
		logger.info("  concepts = " + list);
	}

	/**
	 * Test concept by property.
	 *
	 * @throws Exception the exception
	 */
	@Test
	public void testFindConceptsBySearchTermHighlights() throws Exception {
		List<String> includes = new ArrayList<>();
		includes.add("synonyms");
		includes.add("highlights");
		final ConceptResultList list = client.findConceptsBySearchTerm(terminology, "enzyme", 5, null, null, null, null,
				null, null, null, includes);
		logger.info("Get concept by search term=XAV05295I5 (with highlights)");
		logger.info("  base url = " + client.getApiUrl());
		logger.info("  concepts = " + list);
	}

	/**
	 * Test concept by property.
	 *
	 * @throws Exception the exception
	 */
	@Test
	public void testFindConceptsByProperty() throws Exception {
		List<String> includes = new ArrayList<>();
		includes.add("properties");
		final ConceptResultList list = client.findConceptsBySearchTerm(terminology, "XAV05295I5", null, null, null,
				null, null, null, null, "fda_unii_code", includes);
		logger.info("Get concept by search term=XAV05295I5, property=fda_unii_code");
		logger.info("  base url = " + client.getApiUrl());
		logger.info("  concepts = " + list);
	}

}
