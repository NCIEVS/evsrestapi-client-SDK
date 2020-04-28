
package gov.nih.nci.evs.api.client;

import java.util.Properties;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Invocation.Builder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Top level class for all REST clients.
 */
public class RootClient {

  /** The logger. */
  @SuppressWarnings("unused")
  private static Logger logger = LoggerFactory.getLogger(RootClient.class);

  /** The api url. */
  private String apiUrl;

  /** The client. */
  private static ThreadLocal<Client> clients = new ThreadLocal<Client>() {
    @Override
    public Client initialValue() {
      return ClientBuilder.newClient();
    }
  };

  /**
   * Instantiates a {@link RootClientRestImpl} from the specified parameters.
   *
   * @throws Exception the exception
   */
  public RootClient() throws Exception {
    final Properties p = new Properties();
    p.load(getClass().getClassLoader().getResourceAsStream("url.properties"));
    apiUrl = p.getProperty("url");
    if (apiUrl == null) {
      throw new Exception("Unable to determine url, please see src/main/resources/url.properties");
    }
  }

  /**
   * Validate not empty.
   *
   * @param parameter the parameter
   * @param parameterName the parameter name
   */
  protected void validateNotEmpty(final Long parameter, final String parameterName) {
    if (parameter == null) {
      throw new IllegalArgumentException("Parameter " + parameterName + " must not be null.");
    }
  }

  /**
   * Validate not empty.
   *
   * @param parameter the parameter
   * @param parameterName the parameter name
   */
  protected void validateNotEmpty(final String parameter, final String parameterName) {
    if (parameter == null) {
      throw new IllegalArgumentException("Parameter " + parameterName + " must not be null.");
    }
  }

  /**
   * Returns the api url.
   *
   * @return the api url
   */
  public String getApiUrl() {
    return apiUrl;
  }

  /**
   * Request helper.
   *
   * @param target the target
   * @return the builder
   * @throws Exception the exception
   */
  public Builder request(final WebTarget target) throws Exception {
    return target.request(MediaType.APPLICATION_JSON);
  }

  /**
   * Returns the clients.
   *
   * @return the clients
   */
  public static ThreadLocal<Client> getClients() {
    return clients;
  }

  /**
   * Returns the mapper.
   *
   * @return the mapper
   */
  public ObjectMapper getMapper() {
    final ObjectMapper mapper = new ObjectMapper();
    mapper.setSerializationInclusion(Include.NON_EMPTY);
    return mapper;
  }
}
