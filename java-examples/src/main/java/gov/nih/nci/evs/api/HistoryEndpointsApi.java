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

import com.google.gson.reflect.TypeToken;
import gov.nih.nci.evs.api.invoker.ApiCallback;
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.ApiResponse;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.Pair;
import gov.nih.nci.evs.api.model.History;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class HistoryEndpointsApi {
    private ApiClient localVarApiClient;
    private int localHostIndex;
    private String localCustomBaseUrl;

    public HistoryEndpointsApi() {
        this(Configuration.getDefaultApiClient());
    }

    public HistoryEndpointsApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public int getHostIndex() {
        return localHostIndex;
    }

    public void setHostIndex(int hostIndex) {
        this.localHostIndex = hostIndex;
    }

    public String getCustomBaseUrl() {
        return localCustomBaseUrl;
    }

    public void setCustomBaseUrl(String customBaseUrl) {
        this.localCustomBaseUrl = customBaseUrl;
    }

    /**
     * Build call for getReplacements
     * @param terminology Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (required)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;&#39;C4654&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0000733&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;. (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
        <tr><td> 417 </td><td> Expectation failed </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getReplacementsCall(String terminology, String code, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/v1/history/{terminology}/{code}/replacements"
            .replace("{" + "terminology" + "}", localVarApiClient.escapeString(terminology.toString()))
            .replace("{" + "code" + "}", localVarApiClient.escapeString(code.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(basePath, localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call getReplacementsValidateBeforeCall(String terminology, String code, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'terminology' is set
        if (terminology == null) {
            throw new ApiException("Missing the required parameter 'terminology' when calling getReplacements(Async)");
        }

        // verify the required parameter 'code' is set
        if (code == null) {
            throw new ApiException("Missing the required parameter 'code' when calling getReplacements(Async)");
        }

        return getReplacementsCall(terminology, code, _callback);

    }

    /**
     * Gets suggested replacements for a specified terminology and retired code. Active codes will return entries as well with an action of \&quot;active\&quot;.
     * 
     * @param terminology Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (required)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;&#39;C4654&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0000733&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;. (required)
     * @return List&lt;History&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
        <tr><td> 417 </td><td> Expectation failed </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public List<History> getReplacements(String terminology, String code) throws ApiException {
        ApiResponse<List<History>> localVarResp = getReplacementsWithHttpInfo(terminology, code);
        return localVarResp.getData();
    }

    /**
     * Gets suggested replacements for a specified terminology and retired code. Active codes will return entries as well with an action of \&quot;active\&quot;.
     * 
     * @param terminology Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (required)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;&#39;C4654&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0000733&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;. (required)
     * @return ApiResponse&lt;List&lt;History&gt;&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
        <tr><td> 417 </td><td> Expectation failed </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<List<History>> getReplacementsWithHttpInfo(String terminology, String code) throws ApiException {
        okhttp3.Call localVarCall = getReplacementsValidateBeforeCall(terminology, code, null);
        Type localVarReturnType = new TypeToken<List<History>>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Gets suggested replacements for a specified terminology and retired code. Active codes will return entries as well with an action of \&quot;active\&quot;. (asynchronously)
     * 
     * @param terminology Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (required)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;&#39;C4654&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0000733&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;. (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
        <tr><td> 417 </td><td> Expectation failed </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getReplacementsAsync(String terminology, String code, final ApiCallback<List<History>> _callback) throws ApiException {

        okhttp3.Call localVarCall = getReplacementsValidateBeforeCall(terminology, code, _callback);
        Type localVarReturnType = new TypeToken<List<History>>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for getReplacementsFromList
     * @param terminology Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (required)
     * @param _list Comma-separated list of codes, e.g. &lt;ul&gt;&lt;li&gt;&#39;C4654,C40117&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0000733,C3551741&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;. (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
        <tr><td> 417 </td><td> Expectation failed </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getReplacementsFromListCall(String terminology, String _list, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/v1/history/{terminology}/replacements"
            .replace("{" + "terminology" + "}", localVarApiClient.escapeString(terminology.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (_list != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("list", _list));
        }

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(basePath, localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call getReplacementsFromListValidateBeforeCall(String terminology, String _list, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'terminology' is set
        if (terminology == null) {
            throw new ApiException("Missing the required parameter 'terminology' when calling getReplacementsFromList(Async)");
        }

        // verify the required parameter '_list' is set
        if (_list == null) {
            throw new ApiException("Missing the required parameter '_list' when calling getReplacementsFromList(Async)");
        }

        return getReplacementsFromListCall(terminology, _list, _callback);

    }

    /**
     * Gets suggested replacements for a specified terminology and a comma-separated list of retired codes.  Active codes will return entries as well with an action of \&quot;active\&quot;.
     * 
     * @param terminology Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (required)
     * @param _list Comma-separated list of codes, e.g. &lt;ul&gt;&lt;li&gt;&#39;C4654,C40117&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0000733,C3551741&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;. (required)
     * @return List&lt;History&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
        <tr><td> 417 </td><td> Expectation failed </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public List<History> getReplacementsFromList(String terminology, String _list) throws ApiException {
        ApiResponse<List<History>> localVarResp = getReplacementsFromListWithHttpInfo(terminology, _list);
        return localVarResp.getData();
    }

    /**
     * Gets suggested replacements for a specified terminology and a comma-separated list of retired codes.  Active codes will return entries as well with an action of \&quot;active\&quot;.
     * 
     * @param terminology Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (required)
     * @param _list Comma-separated list of codes, e.g. &lt;ul&gt;&lt;li&gt;&#39;C4654,C40117&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0000733,C3551741&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;. (required)
     * @return ApiResponse&lt;List&lt;History&gt;&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
        <tr><td> 417 </td><td> Expectation failed </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<List<History>> getReplacementsFromListWithHttpInfo(String terminology, String _list) throws ApiException {
        okhttp3.Call localVarCall = getReplacementsFromListValidateBeforeCall(terminology, _list, null);
        Type localVarReturnType = new TypeToken<List<History>>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Gets suggested replacements for a specified terminology and a comma-separated list of retired codes.  Active codes will return entries as well with an action of \&quot;active\&quot;. (asynchronously)
     * 
     * @param terminology Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (required)
     * @param _list Comma-separated list of codes, e.g. &lt;ul&gt;&lt;li&gt;&#39;C4654,C40117&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0000733,C3551741&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;. (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 400 </td><td> Bad request </td><td>  -  </td></tr>
        <tr><td> 417 </td><td> Expectation failed </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getReplacementsFromListAsync(String terminology, String _list, final ApiCallback<List<History>> _callback) throws ApiException {

        okhttp3.Call localVarCall = getReplacementsFromListValidateBeforeCall(terminology, _list, _callback);
        Type localVarReturnType = new TypeToken<List<History>>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
