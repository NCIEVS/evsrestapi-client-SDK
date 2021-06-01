
package gov.nih.nci.evs.api.client;

import java.net.URLEncoder;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status.Family;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import gov.nih.nci.evs.api.model.Concept;
import gov.nih.nci.evs.api.model.ConceptResultList;
import gov.nih.nci.evs.api.model.HierarchyNode;
import gov.nih.nci.evs.api.model.Map;
import gov.nih.nci.evs.api.model.Relationship;
import gov.nih.nci.evs.api.model.Terminology;

/**
 * EVSRESTAPI Client.
 */
public class EvsRestClient extends RootClient {

  /** The logger. */
  private static Logger logger = LoggerFactory.getLogger(RootClient.class);

  /**
   * Instantiates an empty {@link EvsClientRest}.
   *
   * @throws Exception the exception
   */
  public EvsRestClient() throws Exception {
    // n/a
  }

  /**
   * Resolve expression.
   *
   * @return the terminologies
   * @throws Exception the exception
   */
  public List<Terminology> getTerminologies() throws Exception {
    final Client client = getClients().get();
    final WebTarget target = client.target(getApiUrl() + "/metadata/terminologies");
    try (Response response = request(target).get()) {
      if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
        logger.error("Unexpected error getting terminologies");
        throw new WebApplicationException(response.readEntity(String.class), response.getStatus());
      }
      final String json = response.readEntity(String.class);
      return getMapper().readValue(json, new TypeReference<List<Terminology>>() {
        // n/a
      });

    }
  }

  /**
   * Returns the properties.
   *
   * @param terminology the terminology
   * @param include the include
   * @param codes the codes
   * @return the properties
   * @throws Exception the exception
   */
  public List<Concept> getProperties(final String terminology, final String include,
    final List<String> codes) throws Exception {
    return getAllMetadataHelper("properties", terminology, include, codes);
  }

  /**
   * Returns the qualifiers.
   *
   * @param terminology the terminology
   * @param include the include
   * @param codes the codes
   * @return the qualifiers
   * @throws Exception the exception
   */
  public List<Concept> getQualifiers(final String terminology, final String include,
    final List<String> codes) throws Exception {
    return getAllMetadataHelper("qualifiers", terminology, include, codes);
  }

  /**
   * Returns the qualifier values.
   *
   * @param terminology the terminology
   * @param code the code
   * @return the qualifier values
   * @throws Exception the exception
   */
  public List<String> getQualifierValues(final String terminology, final String code)
    throws Exception {
    validateNotEmpty(terminology, "terminology");
    validateNotEmpty(code, "code");

    final Client client = getClients().get();
    String url = "/metadata/" + terminology + "/qualifier/" + code + "/values";

    final WebTarget target = client.target(getApiUrl() + url);
    try (Response response = request(target).get()) {
      if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
        logger.error("Unexpected error getting " + terminology + ", " + code);
        throw new WebApplicationException(response.readEntity(String.class), response.getStatus());
      }
      final String json = response.readEntity(String.class);
      final String jsonStripped = json.replaceAll("[\\[\\]\"]", "");
      return Arrays.asList(jsonStripped.split(","));
    }
  }

  /**
   * Returns the roles.
   *
   * @param terminology the terminology
   * @param include the include
   * @param codes the codes
   * @return the roles
   * @throws Exception the exception
   */
  public List<Concept> getRoles(final String terminology, final String include,
    final List<String> codes) throws Exception {
    return getAllMetadataHelper("roles", terminology, include, codes);
  }

  /**
   * Returns the associations.
   *
   * @param terminology the terminology
   * @param include the include
   * @param codes the codes
   * @return the associations
   * @throws Exception the exception
   */
  public List<Concept> getAssociations(final String terminology, final String include,
    final List<String> codes) throws Exception {
    return getAllMetadataHelper("associations", terminology, include, codes);
  }

  /**
   * Returns the term info.
   *
   * @param terminology the terminology
   * @param type the type of info
   * @return the term info
   * @throws Exception the exception
   */
  public List<Concept> getTermInfo(final String terminology, final String type) throws Exception {
    return getTermInfoHelper(terminology, type);
  }

  /**
   * Returns the definition type info.
   *
   * @param terminology the terminology
   * @param type the type of info
   * @return the term info
   * @throws Exception the exception
   */
  public List<Concept> getDefinitionTypeInfo(final String terminology, final String type) throws Exception {
    return getTermInfoHelper(terminology, type);
  }

  /**
   * Returns the synonym type info.
   *
   * @param terminology the terminology
   * @param type the type of info
   * @return the term info
   * @throws Exception the exception
   */
  public List<Concept> getSynonymTypeInfo(final String terminology, final String type) throws Exception {
    return getTermInfoHelper(terminology, type);
  }

  /**
   * Returns the root concept.
   *
   * @param terminology the terminology
   * @return the root concepts
   * @throws Exception the exception
   */
  public List<Concept> getRootConcepts(final String terminology) throws Exception {
    return getRootConceptsHelper(terminology);
  }

  /**
   * Returns the hierarchy nodes.
   *
   * @param terminology the terminology
   * @param code the code
   * @return the hierarchy nodes
   * @throws Exception the exception
   */
  public List<HierarchyNode> getSubtree(final String terminology, final String code)
    throws Exception {
    return getSubtreeHelper(terminology, code, false);
  }

  /**
   * Returns the subtree children.
   *
   * @param terminology the terminology
   * @param code the code
   * @return the subtree children
   * @throws Exception the exception
   */
  public List<HierarchyNode> getSubtreeChildren(final String terminology, final String code)
    throws Exception {
    return getSubtreeHelper(terminology, code, true);
  }

  /**
   * Returns the hierarchy nodes.
   *
   * @param terminology the terminology
   * @param term the term
   * @param pageSize the page size
   * @param conceptStatus the concept status
   * @param contributingSource the contributing source
   * @param definitionSource the definition source
   * @param synonymSource the synonym source
   * @param synonymTermGroup the synonym term group
   * @param type the type
   * @param property the property
   * @param includes the includes
   * @return the hierarchy nodes
   * @throws Exception the exception
   */
  public ConceptResultList findConceptsBySearchTerm(final String terminology, final String term,
    final String pageSize, final String conceptStatus, final String contributingSource,
    final String definitionSource, final String synonymSource, final String synonymTermGroup,
    final String type, final String property, final List<String> includes) throws Exception {
    return getConceptBySearchTermHelper(terminology, term, pageSize, conceptStatus,
        contributingSource, definitionSource, synonymSource, synonymTermGroup, type, property,
        includes);
  }

  /**
   * Returns the all metadata helper.
   *
   * @param type the type
   * @param terminology the terminology
   * @param include the include
   * @param codes the codes
   * @return the all metadata helper
   * @throws Exception the exception
   */
  private List<Concept> getAllMetadataHelper(final String type, final String terminology,
    final String include, final List<String> codes) throws Exception {
    validateNotEmpty(terminology, "terminology");

    final Set<String> clauses = new HashSet<>();
    if (include != null && !include.isEmpty()) {
      clauses.add("include=" + URLEncoder.encode(include, "UTF-8"));
    }
    if (codes != null && !codes.isEmpty()) {
      clauses.add("list=" + URLEncoder.encode(String.join(",", codes), "UTF-8"));
    }
    final String params = clauses.isEmpty() ? "" : ("?" + String.join("&", clauses));

    final Client client = getClients().get();
    final WebTarget target =
        client.target(getApiUrl() + "/metadata/" + terminology + "/" + type + params);
    try (Response response = request(target).get()) {
      if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
        logger.error("Unexpected error getting all " + type + " = " + terminology);
        throw new WebApplicationException(response.readEntity(String.class), response.getStatus());
      }
      final String json = response.readEntity(String.class);
      return getMapper().readValue(json, new TypeReference<List<Concept>>() {
        // n/a
      });

    }
  }

  /**
   * Returns the property.
   *
   * @param terminology the terminology
   * @param codeOrLabel the code or label
   * @param include the include
   * @return the property
   * @throws Exception the exception
   */
  public Concept getProperty(final String terminology, final String codeOrLabel,
    final String include) throws Exception {
    return getHelper("property", terminology, codeOrLabel, include);
  }

  /**
   * Returns the qualifier.
   *
   * @param terminology the terminology
   * @param codeOrLabel the code or label
   * @param include the include
   * @return the qualifier
   * @throws Exception the exception
   */
  public Concept getQualifier(final String terminology, final String codeOrLabel,
    final String include) throws Exception {
    return getHelper("qualifier", terminology, codeOrLabel, include);
  }

  /**
   * Returns the role.
   *
   * @param terminology the terminology
   * @param codeOrLabel the code or label
   * @param include the include
   * @return the role
   * @throws Exception the exception
   */
  public Concept getRole(final String terminology, final String codeOrLabel, final String include)
    throws Exception {
    return getHelper("role", terminology, codeOrLabel, include);
  }

  /**
   * Returns the association.
   *
   * @param terminology the terminology
   * @param codeOrLabel the code or label
   * @param include the include
   * @return the association
   * @throws Exception the exception
   */
  public Concept getAssociation(final String terminology, final String codeOrLabel,
    final String include) throws Exception {
    return getHelper("association", terminology, codeOrLabel, include);
  }

  /**
   * Returns the concept.
   *
   * @param terminology the terminology
   * @param code the code
   * @param include the include
   * @return the concept
   * @throws Exception the exception
   */
  public Concept getConcept(final String terminology, final String code, final String include)
    throws Exception {
    return getHelper("concept", terminology, code, include);
  }

  /**
   * Returns the concept part.
   *
   * @param terminology the terminology
   * @param code the code
   * @param part the part
   * @return the concept part
   * @throws Exception the exception
   */
  public List<Concept> getConceptPart(final String terminology, final String code,
    final String part) throws Exception {
    return getConceptPartHelper(terminology, code, part);
  }

  /**
   * Returns the relationship part.
   *
   * @param terminology the terminology
   * @param code the code
   * @param part the part
   * @return the relationship part
   * @throws Exception the exception
   */
  public List<Relationship> getRelationshipPart(final String terminology, final String code,
    final String part) throws Exception {
    return getRelationshipPartHelper(terminology, code, part);
  }

  /**
   * Returns the map part.
   *
   * @param terminology the terminology
   * @param code the code
   * @param part the part
   * @return the map part
   * @throws Exception the exception
   */
  public List<Map> getMapPart(final String terminology, final String code, final String part)
    throws Exception {
    return getMapPartHelper(terminology, code, part);
  }

  /**
   * Returns the descendants.
   *
   * @param terminology the terminology
   * @param code the code
   * @param fromRecord the from record
   * @param pageSize the page size
   * @return the descendants
   * @throws Exception the exception
   */
  public List<Concept> getDescendants(final String terminology, final String code,
    final int fromRecord, final int pageSize) throws Exception {
    return getDescendantsHelper(terminology, code, fromRecord, pageSize);
  }

  /**
   * Returns the concepts.
   *
   * @param terminology the terminology
   * @param codes the codes
   * @param include the include
   * @return the concepts
   * @throws Exception the exception
   */
  public List<Concept> getConcepts(final String terminology, final List<String> codes,
    final String include) throws Exception {
    return getListHelper("concept", terminology, codes, include);
  }

  /**
   * Returns the concept paths.
   *
   * @param terminology the terminology
   * @param code the code
   * @param part1 the part 1
   * @param part2 the part 2
   * @return the concept paths
   * @throws Exception the exception
   */
  public List<List<Concept>> getConceptPath(final String terminology, final String code,
    final String part1, final String part2) throws Exception {
    return getConceptPathHelper(terminology, code, part1, part2);
  }

  /**
   * Returns the helper.
   *
   * @param type the type
   * @param terminology the terminology
   * @param code the code
   * @param include the include
   * @return the helper
   * @throws Exception the exception
   */
  private Concept getHelper(final String type, final String terminology, final String code,
    final String include) throws Exception {

    validateNotEmpty(terminology, "terminology");
    validateNotEmpty(terminology, "code");

    final Set<String> clauses = new HashSet<>();
    if (include != null && !include.isEmpty()) {
      clauses.add("include=" + URLEncoder.encode(include, "UTF-8"));
    }
    if (code.contains(",")) {
      clauses.add("list=" + URLEncoder.encode(code, "UTF-8"));
    }
    final String params = clauses.isEmpty() ? "" : ("?" + String.join("&", clauses));

    final Client client = getClients().get();
    String url = null;
    if (type.equals("concept")) {
      url = "/concept/" + terminology + "/" + code + params;
    } else {
      url = "/metadata/" + terminology + "/" + type + "/" + code + params;
    }

    final WebTarget target = client.target(getApiUrl() + url);
    try (Response response = request(target).get()) {
      if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
        logger.error("Unexpected error getting " + type + " = " + terminology + ", " + code);
        throw new WebApplicationException(response.readEntity(String.class), response.getStatus());
      }
      final String json = response.readEntity(String.class);
      return getMapper().readValue(json, Concept.class);
    }
  }

  /**
   * Returns the concept part.
   *
   * @param terminology the terminology
   * @param code the code
   * @param part the concept part
   * @return the concept part
   * @throws Exception the exception
   */
  private List<Concept> getConceptPartHelper(final String terminology, final String code,
    final String part) throws Exception {

    validateNotEmpty(terminology, "terminology");
    validateNotEmpty(code, "code");

    final Client client = getClients().get();
    String url = "/concept/" + terminology + "/" + code + "/" + part;

    final WebTarget target = client.target(getApiUrl() + url);
    try (Response response = request(target).get()) {
      if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
        logger.error("Unexpected error getting " + terminology + ", " + code);
        throw new WebApplicationException(response.readEntity(String.class), response.getStatus());
      }
      final String json = response.readEntity(String.class);
      return getMapper().readValue(json, new TypeReference<List<Concept>>() {
      });
    }
  }

  /**
   * Returns the relationship part.
   *
   * @param terminology the terminology
   * @param code the code
   * @param part the relationship part
   * @return the relationship part
   * @throws Exception the exception
   */
  private List<Relationship> getRelationshipPartHelper(final String terminology, final String code,
    final String part) throws Exception {

    validateNotEmpty(terminology, "terminology");
    validateNotEmpty(code, "code");

    final Client client = getClients().get();
    String url = "/concept/" + terminology + "/" + code + "/" + part;

    final WebTarget target = client.target(getApiUrl() + url);
    try (Response response = request(target).get()) {
      if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
        logger.error("Unexpected error getting " + terminology + ", " + code);
        throw new WebApplicationException(response.readEntity(String.class), response.getStatus());
      }
      final String json = response.readEntity(String.class);
      return getMapper().readValue(json, new TypeReference<List<Relationship>>() {
      });
    }
  }

  /**
   * Returns the map part.
   *
   * @param terminology the terminology
   * @param code the code
   * @param part the map part
   * @return the map part
   * @throws Exception the exception
   */
  private List<Map> getMapPartHelper(final String terminology, final String code, final String part)
    throws Exception {

    validateNotEmpty(terminology, "terminology");
    validateNotEmpty(code, "code");

    final Client client = getClients().get();
    String url = "/concept/" + terminology + "/" + code + "/" + part;

    final WebTarget target = client.target(getApiUrl() + url);
    try (Response response = request(target).get()) {
      if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
        logger.error("Unexpected error getting " + terminology + ", " + code);
        throw new WebApplicationException(response.readEntity(String.class), response.getStatus());
      }
      final String json = response.readEntity(String.class);
      return getMapper().readValue(json, new TypeReference<List<Map>>() {
      });
    }
  }

  /**
   * Returns the list helper.
   *
   * @param type the type
   * @param terminology the terminology
   * @param codes the codes
   * @param include the include
   * @return the list helper
   * @throws Exception the exception
   */
  private List<Concept> getListHelper(final String type, final String terminology,
    final List<String> codes, final String include) throws Exception {

    validateNotEmpty(terminology, "terminology");
    if (codes == null || codes.isEmpty()) {
      throw new IllegalArgumentException("Parameter codes must not be null or empty");
    }

    final Set<String> clauses = new HashSet<>();
    if (include != null && !include.isEmpty()) {
      clauses.add("include=" + URLEncoder.encode(include, "UTF-8"));
    }
    clauses.add("list=" + URLEncoder.encode(String.join(",", codes), "UTF-8"));
    final String params = clauses.isEmpty() ? "" : ("?" + String.join("&", clauses));

    final Client client = getClients().get();
    String url = "/concept/" + terminology + params;

    final WebTarget target = client.target(getApiUrl() + url);
    try (Response response = request(target).get()) {
      if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
        logger.error("Unexpected error getting " + type + " = " + terminology + ", "
            + String.join(";", codes));
        throw new WebApplicationException(response.readEntity(String.class), response.getStatus());
      }
      final String json = response.readEntity(String.class);
      return getMapper().readValue(json, new TypeReference<List<Concept>>() {
        // n/a
      });
    }
  }

  /**
   * Returns the list helper.
   *
   * @param terminology the terminology
   * @param code the code
   * @param fromRecord the from record
   * @param pageSize the page size
   * @return the list helper
   * @throws Exception the exception
   */
  private List<Concept> getDescendantsHelper(final String terminology, final String code,
    final int fromRecord, final int pageSize) throws Exception {

    validateNotEmpty(terminology, "terminology");
    if (code == null || code.isEmpty()) {
      throw new IllegalArgumentException("Parameter codes must not be null or empty");
    }

    final Client client = getClients().get();
    String url = "/concept/" + terminology + "/" + code + "/descendants";

    final WebTarget target = client.target(getApiUrl() + url).queryParam("fromRecord", fromRecord)
        .queryParam("pageSize", pageSize);
    try (Response response = request(target).get()) {
      if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
        logger.error("Unexpected error getting " + url);
        throw new WebApplicationException(response.readEntity(String.class), response.getStatus());
      }
      final String json = response.readEntity(String.class);
      return getMapper().readValue(json, new TypeReference<List<Concept>>() {
        // n/a
      });
    }
  }

  /**
   * Returns the term info by type.
   *
   * @param terminology the terminology
   * @param type the type of info
   * @return the info
   * @throws Exception the exception
   */
  private List<Concept> getTermInfoHelper(final String terminology, final String type)
    throws Exception {

    validateNotEmpty(terminology, "terminology");
    validateNotEmpty(type, "type");

    final Client client = getClients().get();
    String url = "/metadata/" + terminology + "/" + type;

    final WebTarget target = client.target(getApiUrl() + url);
    try (Response response = request(target).get()) {
      if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
        logger.error("Unexpected error getting " + terminology);
        throw new WebApplicationException(response.readEntity(String.class), response.getStatus());
      }
      final String json = response.readEntity(String.class);
      return getMapper().readValue(json, new TypeReference<List<Concept>>() {
      });
    }
  }

  /**
   * Returns the map part.
   *
   * @param terminology the terminology
   * @return the map part
   * @throws Exception the exception
   */
  private List<Concept> getRootConceptsHelper(final String terminology) throws Exception {

    validateNotEmpty(terminology, "terminology");

    final Client client = getClients().get();
    String url = "/concept/" + terminology + "/roots";

    final WebTarget target = client.target(getApiUrl() + url);
    try (Response response = request(target).get()) {
      if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
        logger.error("Unexpected error getting " + terminology);
        throw new WebApplicationException(response.readEntity(String.class), response.getStatus());
      }
      final String json = response.readEntity(String.class);
      return getMapper().readValue(json, new TypeReference<List<Concept>>() {
      });
    }
  }

  /**
   * Returns the concept part.
   *
   * @param terminology the terminology
   * @param code the code
   * @param part1 the part 1
   * @param part2 the part 2
   * @return the concept part
   * @throws Exception the exception
   */
  private List<List<Concept>> getConceptPathHelper(final String terminology, final String code,
    final String part1, final String part2) throws Exception {

    validateNotEmpty(terminology, "terminology");
    validateNotEmpty(code, "code");

    final Client client = getClients().get();
    String url = "/concept/" + terminology + "/" + code + "/" + part1;
    if (part2 != null)
      url += "/" + part2;

    final WebTarget target = client.target(getApiUrl() + url);
    try (Response response = request(target).get()) {
      if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
        logger.error("Unexpected error getting " + terminology + ", " + code);
        throw new WebApplicationException(response.readEntity(String.class), response.getStatus());
      }
      final String json = response.readEntity(String.class);
      return getMapper().readValue(json, new TypeReference<List<List<Concept>>>() {
      });
    }
  }

  /**
   * Returns the hierarchy node.
   *
   * @param terminology the terminology
   * @param code the code
   * @param withChildren the remove children
   * @return the concept part
   * @throws Exception the exception
   */
  private List<HierarchyNode> getSubtreeHelper(final String terminology, final String code,
    final Boolean withChildren) throws Exception {

    validateNotEmpty(terminology, "terminology");
    validateNotEmpty(code, "code");

    final Client client = getClients().get();
    String url = "/concept/" + terminology + "/" + code + "/subtree";
    if (withChildren == true)
      url += "/children";

    final WebTarget target = client.target(getApiUrl() + url);
    try (Response response = request(target).get()) {
      if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
        logger.error("Unexpected error getting " + terminology + ", " + code);
        throw new WebApplicationException(response.readEntity(String.class), response.getStatus());
      }
      final String json = response.readEntity(String.class);
      return new ObjectMapper().readValue(json, new TypeReference<List<HierarchyNode>>() {
        // n/a
      });
    }
  }

  /**
   * Returns the concept by search term.
   *
   * @param terminology the terminology
   * @param term the term
   * @param pageSize the page size
   * @param conceptStatus the concept status
   * @param contributingSource the contributing source
   * @param definitionSource the definition source
   * @param synonymSource the synonym source
   * @param synonymTermGroup the synonym term group
   * @param type the type
   * @param property the property
   * @param includes the includes
   * @return the concept
   * @throws Exception the exception
   */
  private ConceptResultList getConceptBySearchTermHelper(final String terminology, String term,
    String pageSize, String conceptStatus, String contributingSource, String definitionSource,
    String synonymSource, String synonymTermGroup, String type, String property,
    List<String> includes) throws Exception {

    validateNotEmpty(terminology, "terminology");
    validateNotEmpty(term, "term");

    final Client client = getClients().get();
    final String url = "/concept/" + terminology + "/search";
    WebTarget target = client.target(getApiUrl() + url);
    target = target.queryParam("terminology", terminology).queryParam("term", term);
    // Lots of possible params here
    if (conceptStatus != null && !conceptStatus.isEmpty()) {
      target = target.queryParam("conceptStatus", conceptStatus);
    }

    if (contributingSource != null && !contributingSource.isEmpty()) {
      target = target.queryParam("contributingSource", contributingSource);
    }
    if (definitionSource != null && !definitionSource.isEmpty()) {
      target = target.queryParam("definitionSource", definitionSource);
    }
    if (synonymSource != null && !synonymSource.isEmpty()) {
      target = target.queryParam("synonymSource", synonymSource);
    }
    if (synonymTermGroup != null && !synonymTermGroup.isEmpty()) {
      target = target.queryParam("synonymTermGroup", synonymTermGroup);
    }
    if (type != null && !type.isEmpty()) {
      target = target.queryParam("type", type);
    }
    if (property != null && !property.isEmpty()) {
      target = target.queryParam("property", property);
    }
    if (includes != null && !includes.isEmpty()) {
      target = target.queryParam("includes", String.join(",", includes));
    }
    if (pageSize != null && !pageSize.isEmpty()) {
      target = target.queryParam("pageSize", String.valueOf(pageSize));
    }

    try (Response response = request(target).get()) {
      if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
        logger.error("Unexpected error getting " + terminology + ", " + term);
        throw new WebApplicationException(response.readEntity(String.class), response.getStatus());
      }
      final String json = response.readEntity(String.class);
      return getMapper().readValue(json, ConceptResultList.class);
    }
  }

}
