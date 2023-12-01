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

import gov.nih.nci.evs.api.invoker.ApiCallback;
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.ApiResponse;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.Pair;
import gov.nih.nci.evs.api.invoker.ProgressRequestBody;
import gov.nih.nci.evs.api.invoker.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import gov.nih.nci.evs.api.model.Concept;
import gov.nih.nci.evs.api.model.ConceptMapResultList;
import gov.nih.nci.evs.api.model.RestException;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.ws.rs.core.GenericType;

public class MapsetEndpointsApi {
    private ApiClient localVarApiClient;
    private int localHostIndex;
    private String localCustomBaseUrl;

    public MapsetEndpointsApi() {
        this(Configuration.getDefaultApiClient());
    }

    public MapsetEndpointsApi(ApiClient apiClient) {
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
     * Build call for getMapsetByCode
     * @param code Mapset code (required)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 404 </td><td> Resource not found </td><td>  -  </td></tr>
        <tr><td> 417 </td><td> Expectation failed </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getMapsetByCodeCall(String code, String include, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/api/v1/mapset/{code}"
            .replace("{" + "code" + "}", localVarApiClient.escapeString(code.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (include != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("include", include));
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
    private okhttp3.Call getMapsetByCodeValidateBeforeCall(String code, String include, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'code' is set
        if (code == null) {
            throw new ApiException("Missing the required parameter 'code' when calling getMapsetByCode(Async)");
        }

        return getMapsetByCodeCall(code, include, _callback);

    }

    /**
     * Get the mapset for the specified code (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * 
     * @param code Mapset code (required)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. (optional)
     * @return Concept
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 404 </td><td> Resource not found </td><td>  -  </td></tr>
        <tr><td> 417 </td><td> Expectation failed </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public Concept getMapsetByCode(String code, String include) throws ApiException {
        ApiResponse<Concept> localVarResp = getMapsetByCodeWithHttpInfo(code, include);
        return localVarResp.getData();
    }

    /**
     * Get the mapset for the specified code (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * 
     * @param code Mapset code (required)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. (optional)
     * @return ApiResponse&lt;Concept&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 404 </td><td> Resource not found </td><td>  -  </td></tr>
        <tr><td> 417 </td><td> Expectation failed </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Concept> getMapsetByCodeWithHttpInfo(String code, String include) throws ApiException {
        okhttp3.Call localVarCall = getMapsetByCodeValidateBeforeCall(code, include, null);
        Type localVarReturnType = new TypeToken<Concept>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get the mapset for the specified code (no terminology parameter is needed as mapsets connect codes in one terminology to another) (asynchronously)
     * 
     * @param code Mapset code (required)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 404 </td><td> Resource not found </td><td>  -  </td></tr>
        <tr><td> 417 </td><td> Expectation failed </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getMapsetByCodeAsync(String code, String include, final ApiCallback<Concept> _callback) throws ApiException {

        okhttp3.Call localVarCall = getMapsetByCodeValidateBeforeCall(code, include, _callback);
        Type localVarReturnType = new TypeToken<Concept>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for getMapsetMappingsByCode
     * @param code Mapset code (required)
     * @param fromRecord Start index of the search results (optional)
     * @param pageSize Max number of results to return (optional)
     * @param term  (optional)
     * @param ascending Sort ascending (if true) or descending (if false) (optional)
     * @param sort The search parameter to sort results by (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 404 </td><td> Resource not found </td><td>  -  </td></tr>
        <tr><td> 417 </td><td> Expectation failed </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getMapsetMappingsByCodeCall(String code, Integer fromRecord, Integer pageSize, String term, Boolean ascending, String sort, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/api/v1/mapset/{code}/maps"
            .replace("{" + "code" + "}", localVarApiClient.escapeString(code.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (fromRecord != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("fromRecord", fromRecord));
        }

        if (pageSize != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("pageSize", pageSize));
        }

        if (term != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("term", term));
        }

        if (ascending != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("ascending", ascending));
        }

        if (sort != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("sort", sort));
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
    private okhttp3.Call getMapsetMappingsByCodeValidateBeforeCall(String code, Integer fromRecord, Integer pageSize, String term, Boolean ascending, String sort, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'code' is set
        if (code == null) {
            throw new ApiException("Missing the required parameter 'code' when calling getMapsetMappingsByCode(Async)");
        }

        return getMapsetMappingsByCodeCall(code, fromRecord, pageSize, term, ascending, sort, _callback);

    }

    /**
     * Get the maps for the mapset specified by the code (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * 
     * @param code Mapset code (required)
     * @param fromRecord Start index of the search results (optional)
     * @param pageSize Max number of results to return (optional)
     * @param term  (optional)
     * @param ascending Sort ascending (if true) or descending (if false) (optional)
     * @param sort The search parameter to sort results by (optional)
     * @return ConceptMapResultList
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 404 </td><td> Resource not found </td><td>  -  </td></tr>
        <tr><td> 417 </td><td> Expectation failed </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public ConceptMapResultList getMapsetMappingsByCode(String code, Integer fromRecord, Integer pageSize, String term, Boolean ascending, String sort) throws ApiException {
        ApiResponse<ConceptMapResultList> localVarResp = getMapsetMappingsByCodeWithHttpInfo(code, fromRecord, pageSize, term, ascending, sort);
        return localVarResp.getData();
    }

    /**
     * Get the maps for the mapset specified by the code (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * 
     * @param code Mapset code (required)
     * @param fromRecord Start index of the search results (optional)
     * @param pageSize Max number of results to return (optional)
     * @param term  (optional)
     * @param ascending Sort ascending (if true) or descending (if false) (optional)
     * @param sort The search parameter to sort results by (optional)
     * @return ApiResponse&lt;ConceptMapResultList&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 404 </td><td> Resource not found </td><td>  -  </td></tr>
        <tr><td> 417 </td><td> Expectation failed </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<ConceptMapResultList> getMapsetMappingsByCodeWithHttpInfo(String code, Integer fromRecord, Integer pageSize, String term, Boolean ascending, String sort) throws ApiException {
        okhttp3.Call localVarCall = getMapsetMappingsByCodeValidateBeforeCall(code, fromRecord, pageSize, term, ascending, sort, null);
        Type localVarReturnType = new TypeToken<ConceptMapResultList>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get the maps for the mapset specified by the code (no terminology parameter is needed as mapsets connect codes in one terminology to another) (asynchronously)
     * 
     * @param code Mapset code (required)
     * @param fromRecord Start index of the search results (optional)
     * @param pageSize Max number of results to return (optional)
     * @param term  (optional)
     * @param ascending Sort ascending (if true) or descending (if false) (optional)
     * @param sort The search parameter to sort results by (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 404 </td><td> Resource not found </td><td>  -  </td></tr>
        <tr><td> 417 </td><td> Expectation failed </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getMapsetMappingsByCodeAsync(String code, Integer fromRecord, Integer pageSize, String term, Boolean ascending, String sort, final ApiCallback<ConceptMapResultList> _callback) throws ApiException {

        okhttp3.Call localVarCall = getMapsetMappingsByCodeValidateBeforeCall(code, fromRecord, pageSize, term, ascending, sort, _callback);
        Type localVarReturnType = new TypeToken<ConceptMapResultList>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for getMapsets
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getMapsetsCall(String include, final ApiCallback _callback) throws ApiException {
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
        String localVarPath = "/api/v1/mapset";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (include != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("include", include));
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
    private okhttp3.Call getMapsetsValidateBeforeCall(String include, final ApiCallback _callback) throws ApiException {
        return getMapsetsCall(include, _callback);

    }

    /**
     * Get all mapsets (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * 
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. (optional)
     * @return List&lt;Concept&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public List<Concept> getMapsets(String include) throws ApiException {
        ApiResponse<List<Concept>> localVarResp = getMapsetsWithHttpInfo(include);
        return localVarResp.getData();
    }

    /**
     * Get all mapsets (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * 
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. (optional)
     * @return ApiResponse&lt;List&lt;Concept&gt;&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<List<Concept>> getMapsetsWithHttpInfo(String include) throws ApiException {
        okhttp3.Call localVarCall = getMapsetsValidateBeforeCall(include, null);
        Type localVarReturnType = new TypeToken<List<Concept>>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get all mapsets (no terminology parameter is needed as mapsets connect codes in one terminology to another) (asynchronously)
     * 
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Successfully retrieved the requested information </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getMapsetsAsync(String include, final ApiCallback<List<Concept>> _callback) throws ApiException {

        okhttp3.Call localVarCall = getMapsetsValidateBeforeCall(include, _callback);
        Type localVarReturnType = new TypeToken<List<Concept>>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
