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


package gov.nih.nci.evs.api.invoker.auth;

import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Pair;
import java.net.URI;
import java.util.List;
import java.util.Map;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-11-21T14:42:35.933348-08:00[America/Los_Angeles]")
public class HttpBearerAuth implements Authentication {
  private final String scheme;
  private String bearerToken;

  public HttpBearerAuth(String scheme) {
    this.scheme = scheme;
  }

  /**
   * Gets the token, which together with the scheme, will be sent as the value of the Authorization header.
   *
   * @return The bearer token
   */
  public String getBearerToken() {
    return bearerToken;
  }

  /**
   * Sets the token, which together with the scheme, will be sent as the value of the Authorization header.
   *
   * @param bearerToken The bearer token to send in the Authorization header
   */
  public void setBearerToken(String bearerToken) {
    this.bearerToken = bearerToken;
  }

  @Override
  public void applyToParams(List<Pair> queryParams, Map<String, String> headerParams, Map<String, String> cookieParams,
                            String payload, String method, URI uri) throws ApiException {
    if (bearerToken == null) {
      return;
    }

    headerParams.put("Authorization", (scheme != null ? upperCaseBearer(scheme) + " " : "") + bearerToken);
  }

  private static String upperCaseBearer(String scheme) {
    return ("bearer".equalsIgnoreCase(scheme)) ? "Bearer" : scheme;
  }
}
