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
import gov.nih.nci.evs.api.model.Association;
import gov.nih.nci.evs.api.model.AssociationEntryResultList;
import gov.nih.nci.evs.api.model.Concept;
import gov.nih.nci.evs.api.model.ConceptMap;
import gov.nih.nci.evs.api.model.DisjointWith;
import gov.nih.nci.evs.api.model.HierarchyNode;
import gov.nih.nci.evs.api.model.RestException;
import gov.nih.nci.evs.api.model.Role;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

/** API tests for ConceptEndpointsApi */
public class ConceptEndpointsApiTest {

  private final ConceptEndpointsApi api = new ConceptEndpointsApi();
  private final String terminology = "ncit";

  /**
   * Get the association entries for the specified terminology and code. Associations used to define
   * subset membership are not resolved by this call
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getAssociationEntriesTest() throws ApiException {
    // ARRANGE
    String codeOrLabel = "A5";
    Integer fromRecord = 0;
    Integer pageSize = 100;

    // ACT
    AssociationEntryResultList response =
        api.getAssociationEntries(terminology, codeOrLabel, fromRecord, pageSize);
    System.out.println(response);

    // ASSERT
    assertNotNull(response);
    assertEquals(1882, response.getTotal());
    assertNotNull(response.getAssociationEntries());
    assertEquals("Tamoxifen Citrate", response.getAssociationEntries().get(0).getRelatedName());
  }

  /**
   * Get the associations for the specified terminology and code
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getAssociationsTest() throws ApiException {
    // ARRANGE
    String code = "C3224";

    // ACT
    List<Association> response = api.getAssociations(terminology, code);
    assertFalse(response.isEmpty()); // verify we got data
    Association assoc = response.get(0);

    // ASSERT
    assertEquals("CDISC SEND Terminology", assoc.getRelatedName());
    assertEquals("Concept_In_Subset", assoc.getType());
  }

  /**
   * Get child concepts for the specified terminology and code
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getChildrenTest() throws ApiException {
    // ARRANGE
    String code = "C3224";

    // ACT
    List<Concept> response = api.getChildren(terminology, code);

    // ASSERT
    assertFalse(response.isEmpty());
    assertNotNull(response.get(0).getName());
    assertTrue(response.get(0).getName().contains("Melanoma"));
  }

  /**
   * Get the concept for the specified terminology and code
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getConceptTest() throws ApiException {
    // ARRANGE
    String code = "C3224";
    Integer limit = null;
    String include = "minimal";

    // ACT
    Concept response = api.getConcept(terminology, code, limit, include);

    // ASSERT
    assertNotNull(response.getName());
    assertEquals("Melanoma", response.getName());
  }

  /**
   * Get concepts specified by list parameter
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getConceptsTest() throws ApiException {
    // ARRANGE
    String _list = "C3224,C3910";
    String include = "minimal";

    // ACT
    List<Concept> response = api.getConcepts(terminology, _list, include);

    // ASSERT
    assertFalse(response.isEmpty());
    assertEquals("Molecular Abnormality", response.get(0).getName());
    assertEquals("Melanoma", response.get(1).getName());
  }

  /**
   * Get descendant concepts for the specified terminology and code
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getDescendantsTest() throws ApiException {
    // ARRANGE
    String code = "C3224";
    Integer fromRecord = 3;
    Integer pageSize = 100;
    Integer maxLevel = 10;

    // ACT
    List<Concept> response = api.getDescendants(terminology, code, fromRecord, pageSize, maxLevel);

    // ASSERT
    assertFalse(response.isEmpty());
    assertEquals(pageSize, response.size());
    assertEquals("Advanced Cutaneous Melanoma of the Extremity", response.get(0).getName());
  }

  /**
   * Get \&quot;disjoint with\&quot; info for the specified terminology and code
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getDisjointWithTest() throws ApiException {
    // ARRANGE
    String code = "C3910";

    // ACT
    List<DisjointWith> response = api.getDisjointWith(terminology, code);

    // ASSERT
    assertFalse(response.isEmpty());
    assertEquals("C12913", response.get(0).getRelatedCode());
    assertEquals("Abnormal Cell", response.get(0).getRelatedName());
  }

  /**
   * Get history for the specified terminology and code
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getHistoryTest() throws ApiException {
    String code = null;
    Concept response = api.getHistory(terminology, code);
    // TODO: test validations
  }

  /**
   * Get inverse associations for the specified terminology and code
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getInverseAssociationsTest() throws ApiException {
    String code = null;
    List<Association> response = api.getInverseAssociations(terminology, code);
    // TODO: test validations
  }

  /**
   * Get inverse roles for the specified terminology and code
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getInverseRolesTest() throws ApiException {
    String code = null;
    List<Role> response = api.getInverseRoles(terminology, code);
    // TODO: test validations
  }

  /**
   * Get maps for the specified terminology and code
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getMapsTest() throws ApiException {
    String code = null;
    List<ConceptMap> response = api.getMaps(terminology, code);
    // TODO: test validations
  }

  /**
   * Get parent concepts for the specified terminology and code
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getParentsTest() throws ApiException {
    String code = null;
    List<Concept> response = api.getParents(terminology, code);
    // TODO: test validations
  }

  /**
   * Get paths from the hierarchy root to the specified concept.
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getPathsFromRootTest() throws ApiException {
    String code = null;
    String include = null;
    Integer fromRecord = null;
    Integer pageSize = null;
    List<List<Concept>> response =
        api.getPathsFromRoot(terminology, code, include, fromRecord, pageSize);
    // TODO: test validations
  }

  /**
   * Get paths from the specified code to the specified ancestor code
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getPathsToAncestorTest() throws ApiException {
    String code = null;
    String ancestorCode = null;
    String include = null;
    Integer fromRecord = null;
    Integer pageSize = null;
    List<List<Concept>> response =
        api.getPathsToAncestor(terminology, code, ancestorCode, include, fromRecord, pageSize);
    // TODO: test validations
  }

  /**
   * Get paths to the hierarchy root from the specified code
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getPathsToRootTest() throws ApiException {
    String code = null;
    String include = null;
    Integer fromRecord = null;
    Integer pageSize = null;
    List<List<Concept>> response =
        api.getPathsToRoot(terminology, code, include, fromRecord, pageSize);
    // TODO: test validations
  }

  /**
   * Get roles for the specified terminology and code
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getRoles1Test() throws ApiException {
    String code = null;
    List<Role> response = api.getRoles1(terminology, code);
    // TODO: test validations
  }

  /**
   * Get root concepts for the specified terminology
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getRootsTest() throws ApiException {
    String include = null;
    List<Concept> response = api.getRoots(terminology, include);
    // TODO: test validations
  }

  /**
   * Get subset members for the specified terminology and code.
   *
   * <p>This endpoint will be deprecated in v2 in favor of a top level subset member endpoint.
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getSubsetMembers1Test() throws ApiException {
    String code = null;
    Integer fromRecord = null;
    Integer pageSize = null;
    String include = null;
    List<Concept> response =
        api.getSubsetMembers1(terminology, code, fromRecord, pageSize, include);
    // TODO: test validations
  }

  /**
   * Get the entire subtree from the root node to the specified code
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getSubtreeTest() throws ApiException {
    String code = null;
    Integer limit = null;
    List<HierarchyNode> response = api.getSubtree(terminology, code, limit);
    // TODO: test validations
  }

  /**
   * Get the entire subtree from the root node to the specified code
   *
   * @throws ApiException if the Api call fails
   */
  @Test
  public void getSubtreeChildrenTest() throws ApiException {
    String code = null;
    Integer limit = null;
    List<HierarchyNode> response = api.getSubtreeChildren(terminology, code, limit);
    // TODO: test validations
  }
}
