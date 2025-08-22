// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Concept } from '../models/Concept';
import { MappingResultList } from '../models/MappingResultList';
import { RestException } from '../models/RestException';

/**
 * no description
 */
export class MapsetEndpointsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get the mapset for the specified code (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * @param code Mapset code
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getMapsetByCode(code: string, include?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("MapsetEndpointsApi", "getMapsetByCode", "code");
        }



        // Path Params
        const localVarPath = '/api/v1/mapset/{code}'
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
     * Get the maps for the mapset specified by the code (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * @param code Mapset code
     * @param term The term, phrase, or code to be searched, e.g. \&#39;melanoma\&#39;
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param sort The search parameter to sort results by
     * @param ascending Sort ascending (if true) or descending (if false)
     */
    public async getMapsetMappingsByCode(code: string, term?: string, fromRecord?: number, pageSize?: number, sort?: string, ascending?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("MapsetEndpointsApi", "getMapsetMappingsByCode", "code");
        }







        // Path Params
        const localVarPath = '/api/v1/mapset/{code}/maps'
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (term !== undefined) {
            requestContext.setQueryParam("term", ObjectSerializer.serialize(term, "string", ""));
        }

        // Query Params
        if (fromRecord !== undefined) {
            requestContext.setQueryParam("fromRecord", ObjectSerializer.serialize(fromRecord, "number", "int32"));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
        }

        // Query Params
        if (ascending !== undefined) {
            requestContext.setQueryParam("ascending", ObjectSerializer.serialize(ascending, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all mapsets (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getMapsets(include?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/api/v1/mapset';

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

}

export class MapsetEndpointsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMapsetByCode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMapsetByCodeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Concept >> {
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
     * @params response Response returned by the server for a request to getMapsetMappingsByCode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMapsetMappingsByCodeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MappingResultList >> {
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
            const body: MappingResultList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MappingResultList", ""
            ) as MappingResultList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MappingResultList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MappingResultList", ""
            ) as MappingResultList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMapsets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMapsetsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Concept> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
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
