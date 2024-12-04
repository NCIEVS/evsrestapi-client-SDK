// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { History } from '../models/History';
import { RestException } from '../models/RestException';

/**
 * no description
 */
export class HistoryEndpointsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets suggested replacements for a specified terminology and retired code. Active codes will return entries as well with an action of \"active\".
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C4654\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0000733\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;.
     */
    public async getReplacements(terminology: string, code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("HistoryEndpointsApi", "getReplacements", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("HistoryEndpointsApi", "getReplacements", "code");
        }


        // Path Params
        const localVarPath = '/api/v1/history/{terminology}/{code}/replacements'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets suggested replacements for a specified terminology and a comma-separated list of retired codes.  Active codes will return entries as well with an action of \"active\".
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param list Comma-separated list of codes, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C4654,C40117\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0000733,C3551741\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;.
     */
    public async getReplacementsFromList(terminology: string, list: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("HistoryEndpointsApi", "getReplacementsFromList", "terminology");
        }


        // verify required parameter 'list' is not null or undefined
        if (list === null || list === undefined) {
            throw new RequiredError("HistoryEndpointsApi", "getReplacementsFromList", "list");
        }


        // Path Params
        const localVarPath = '/api/v1/history/{terminology}/replacements'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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

export class HistoryEndpointsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getReplacements
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getReplacementsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<History> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("417", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Expectation failed", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<History> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<History>", ""
            ) as Array<History>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<History> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<History>", ""
            ) as Array<History>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getReplacementsFromList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getReplacementsFromListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<History> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("417", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Expectation failed", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<History> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<History>", ""
            ) as Array<History>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<History> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<History>", ""
            ) as Array<History>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
