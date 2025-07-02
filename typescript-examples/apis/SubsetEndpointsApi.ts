// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Concept } from '../models/Concept';
import { RestException } from '../models/RestException';

/**
 * no description
 */
export class SubsetEndpointsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get the subset for the specified terminology and code.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.
     * @param code Subset code, e.g. \&#39;C116978\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getSubset(terminology: string, code: string, include?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("SubsetEndpointsApi", "getSubset", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("SubsetEndpointsApi", "getSubset", "code");
        }



        // Path Params
        const localVarPath = '/api/v1/subset/{terminology}/{code}'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get subset members for the specified terminology and code. Concept subset endpoints will be deprecated in v2 in favor of top level subset endpoints.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code for a subset concept in the specified terminology, e.g. \&#39;C157225\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getSubsetMembers(terminology: string, code: string, fromRecord?: string, pageSize?: string, include?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("SubsetEndpointsApi", "getSubsetMembers", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("SubsetEndpointsApi", "getSubsetMembers", "code");
        }





        // Path Params
        const localVarPath = '/api/v1/subset/{terminology}/{code}/members'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromRecord !== undefined) {
            requestContext.setQueryParam("fromRecord", ObjectSerializer.serialize(fromRecord, "string", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "string", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all subsets (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public async getSubsets(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("SubsetEndpointsApi", "getSubsets", "terminology");
        }




        // Path Params
        const localVarPath = '/api/v1/subset/{terminology}'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "string", ""));
        }

        // Query Params
        if (list !== undefined) {
            requestContext.setQueryParam("list", ObjectSerializer.serialize(list, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class SubsetEndpointsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSubset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSubsetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Concept >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Concept = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Concept", ""
            ) as Concept;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Concept = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Concept", ""
            ) as Concept;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSubsetMembers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSubsetMembersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Concept> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("417", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Expectation failed", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Concept> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Concept>", ""
            ) as Array<Concept>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Concept> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Concept>", ""
            ) as Array<Concept>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSubsets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSubsetsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Concept> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Concept> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Concept>", ""
            ) as Array<Concept>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Concept> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Concept>", ""
            ) as Array<Concept>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
