
package gov.nih.nci.evs.api.client;

import java.net.URLEncoder;
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
import gov.nih.nci.evs.api.model.Terminology;

/**
 * The Class EvsRestClient.
 */
public class EvsRestClient extends RootClient {

  /** The logger. */
  private static Logger logger = LoggerFactory.getLogger(RootClient.class);

  /**
   * Instantiates an empty {@link EvsRestClient}.
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
      return new ObjectMapper().readValue(json, new TypeReference<List<Terminology>>() {
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
      return new ObjectMapper().readValue(json, new TypeReference<List<Concept>>() {
        // n/a
      });

    }
  }

  /**
   * Returns the property.
   *
   * @param terminology the terminology
   * @param code the code
   * @param include the include
   * @return the property
   * @throws Exception the exception
   */
  public Concept getProperty(final String terminology, final String code, final String include)
    throws Exception {
    return getMetadataHelper("property", terminology, code, include);
  }

  /**
   * Returns the role.
   *
   * @param terminology the terminology
   * @param code the code
   * @param include the include
   * @return the role
   * @throws Exception the exception
   */
  public Concept getRole(final String terminology, final String code, final String include)
    throws Exception {
    return getMetadataHelper("role", terminology, code, include);
  }

  /**
   * Returns the property.
   *
   * @param terminology the terminology
   * @param code the code
   * @param include the include
   * @return the property
   * @throws Exception the exception
   */
  public Concept getAssociation(final String terminology, final String code, final String include)
    throws Exception {
    return getMetadataHelper("association", terminology, code, include);
    /**
     * Returns the metadata helper.
     *
     * @param type the type
     * @param terminology the terminology
     * @param code the code
     * @param include the include
     * @return the metadata helper
     * @throws Exception the exception
     */
  }

  /**
   * Returns the metadata helper.
   *
   * @param type the type
   * @param terminology the terminology
   * @param code the code
   * @param include the include
   * @return the metadata helper
   * @throws Exception the exception
   */
  private Concept getMetadataHelper(final String type, final String terminology, final String code,
    final String include) throws Exception {

    validateNotEmpty(terminology, "terminology");
    validateNotEmpty(terminology, "code");

    final Set<String> clauses = new HashSet<>();
    if (include != null && !include.isEmpty()) {
      clauses.add("include=" + URLEncoder.encode(include, "UTF-8"));
    }
    final String params = clauses.isEmpty() ? "" : ("?" + String.join("&", clauses));

    final Client client = getClients().get();
    final WebTarget target =
        client.target(getApiUrl() + "/metadata/" + terminology + "/" + type + "/" + code + params);
    try (Response response = request(target).get()) {
      if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
        logger.error("Unexpected error getting " + type + " = " + terminology + ", " + code);
        throw new WebApplicationException(response.readEntity(String.class), response.getStatus());
      }
      final String json = response.readEntity(String.class);
      return new ObjectMapper().readValue(json, Concept.class);
    }
  }

}
