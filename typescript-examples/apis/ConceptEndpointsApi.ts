// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Association } from '../models/Association';
import { AssociationEntryResultList } from '../models/AssociationEntryResultList';
import { Concept } from '../models/Concept';
import { ConceptMap } from '../models/ConceptMap';
import { DisjointWith } from '../models/DisjointWith';
import { HierarchyNode } from '../models/HierarchyNode';
import { RestException } from '../models/RestException';
import { Role } from '../models/Role';

/**
 * no description
 */
export class ConceptEndpointsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get the association entries for the specified terminology and code. Associations used to define subset membership are not resolved by this call
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param codeOrLabel Code/label in the specified terminology, e.g. \&#39;A5\&#39; or \&#39;Has_Salt_Form\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getAssociationEntries(terminology: string, codeOrLabel: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getAssociationEntries", "terminology");
        }


        // verify required parameter 'codeOrLabel' is not null or undefined
        if (codeOrLabel === null || codeOrLabel === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getAssociationEntries", "codeOrLabel");
        }





        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/associations/{codeOrLabel}'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'codeOrLabel' + '}', encodeURIComponent(String(codeOrLabel)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromRecord !== undefined) {
            requestContext.setQueryParam("fromRecord", ObjectSerializer.serialize(fromRecord, "number", "int32"));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the associations for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getAssociations1(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getAssociations1", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getAssociations1", "code");
        }



        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/{code}/associations'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get child concepts for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getChildren(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getChildren", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getChildren", "code");
        }



        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/{code}/children'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the concept for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param limit If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), elements of the concept should be limited to that specified number of entries. Thus a user interface can quickly retrieve initial data for a concept (even with &lt;i&gt;include&#x3D;full&lt;/i&gt;) and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getConcept(terminology: string, code: string, limit?: number, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getConcept", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getConcept", "code");
        }





        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/{code}'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get concepts specified by list parameter
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param list List (comma-separated) of codes to return concepts for, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C2291,C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0010137,C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getConcepts(terminology: string, list: string, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getConcepts", "terminology");
        }


        // verify required parameter 'list' is not null or undefined
        if (list === null || list === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getConcepts", "list");
        }




        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}'
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

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get descendant concepts for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param maxLevel Max level of results to return
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getDescendants(terminology: string, code: string, fromRecord?: number, pageSize?: number, maxLevel?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getDescendants", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getDescendants", "code");
        }






        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/{code}/descendants'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromRecord !== undefined) {
            requestContext.setQueryParam("fromRecord", ObjectSerializer.serialize(fromRecord, "number", "int32"));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }

        // Query Params
        if (maxLevel !== undefined) {
            requestContext.setQueryParam("maxLevel", ObjectSerializer.serialize(maxLevel, "number", "int32"));
        }

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get \"disjoint with\" info for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3910\&#39; for &lt;i&gt;ncit&lt;/i&gt;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getDisjointWith(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getDisjointWith", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getDisjointWith", "code");
        }



        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/{code}/disjointWith'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get history for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt; and &lt;i&gt;ncim&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getHistory(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getHistory", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getHistory", "code");
        }



        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/{code}/history'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get inverse associations for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getInverseAssociations(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getInverseAssociations", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getInverseAssociations", "code");
        }



        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/{code}/inverseAssociations'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get inverse roles for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getInverseRoles(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getInverseRoles", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getInverseRoles", "code");
        }



        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/{code}/inverseRoles'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get maps for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getMaps(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getMaps", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getMaps", "code");
        }



        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/{code}/maps'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get parent concepts for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getParents(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getParents", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getParents", "code");
        }



        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/{code}/parents'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get paths from the hierarchy root to the specified concept.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than \&#39;minimal\&#39; may produce very large payload results. 
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getPathsFromRoot(terminology: string, code: string, include?: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getPathsFromRoot", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getPathsFromRoot", "code");
        }






        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/{code}/pathsFromRoot'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "string", ""));
        }

        // Query Params
        if (fromRecord !== undefined) {
            requestContext.setQueryParam("fromRecord", ObjectSerializer.serialize(fromRecord, "number", "int32"));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get paths from the specified code to the specified ancestor code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param ancestorCode Ancestor code of the other specified code, e.g. \&#39;C2991\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than \&#39;minimal\&#39; may produce very large payload results. 
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getPathsToAncestor(terminology: string, code: string, ancestorCode: string, include?: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getPathsToAncestor", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getPathsToAncestor", "code");
        }


        // verify required parameter 'ancestorCode' is not null or undefined
        if (ancestorCode === null || ancestorCode === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getPathsToAncestor", "ancestorCode");
        }






        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/{code}/pathsToAncestor/{ancestorCode}'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'ancestorCode' + '}', encodeURIComponent(String(ancestorCode)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "string", ""));
        }

        // Query Params
        if (fromRecord !== undefined) {
            requestContext.setQueryParam("fromRecord", ObjectSerializer.serialize(fromRecord, "number", "int32"));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get paths to the hierarchy root from the specified code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than \&#39;minimal\&#39; may produce very large payload results. 
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getPathsToRoot(terminology: string, code: string, include?: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getPathsToRoot", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getPathsToRoot", "code");
        }






        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/{code}/pathsToRoot'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "string", ""));
        }

        // Query Params
        if (fromRecord !== undefined) {
            requestContext.setQueryParam("fromRecord", ObjectSerializer.serialize(fromRecord, "number", "int32"));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get roles for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getRoles1(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getRoles1", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getRoles1", "code");
        }



        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/{code}/roles'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get root concepts for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getRoots(terminology: string, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getRoots", "terminology");
        }




        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/roots'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint will be deprecated in v2 in favor of a top level subset member endpoint.
     * Get subset members for the specified terminology and code.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code for a subset concept in the specified terminology, e.g. \&#39;C157225\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getSubsetMembers1(terminology: string, code: string, fromRecord?: number, pageSize?: number, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getSubsetMembers1", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getSubsetMembers1", "code");
        }






        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/subsetMembers/{code}'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromRecord !== undefined) {
            requestContext.setQueryParam("fromRecord", ObjectSerializer.serialize(fromRecord, "number", "int32"));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the entire subtree from the root node to the specified code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param limit If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), subtrees and siblings at each level will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getSubtree(terminology: string, code: string, limit?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getSubtree", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getSubtree", "code");
        }




        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/{code}/subtree'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the entire subtree from the root node to the specified code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param limit If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), children will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getSubtreeChildren(terminology: string, code: string, limit?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getSubtreeChildren", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ConceptEndpointsApi", "getSubtreeChildren", "code");
        }




        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/{code}/subtree/children'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ConceptEndpointsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAssociationEntries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAssociationEntriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssociationEntryResultList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("417", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Expectation failed", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssociationEntryResultList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssociationEntryResultList", ""
            ) as AssociationEntryResultList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AssociationEntryResultList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssociationEntryResultList", ""
            ) as AssociationEntryResultList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAssociations1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAssociations1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Association> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Association> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Association>", ""
            ) as Array<Association>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Association> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Association>", ""
            ) as Array<Association>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChildren
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChildrenWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Concept> >> {
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConcept
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConceptWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Concept >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("417", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Expectation failed", body, response.headers);
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
     * @params response Response returned by the server for a request to getConcepts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConceptsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Concept> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("417", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Expectation failed", body, response.headers);
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
     * @params response Response returned by the server for a request to getDescendants
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDescendantsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Concept> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("417", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Expectation failed", body, response.headers);
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
     * @params response Response returned by the server for a request to getDisjointWith
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDisjointWithWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<DisjointWith> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<DisjointWith> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DisjointWith>", ""
            ) as Array<DisjointWith>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<DisjointWith> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DisjointWith>", ""
            ) as Array<DisjointWith>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getHistoryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Concept >> {
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
     * @params response Response returned by the server for a request to getInverseAssociations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInverseAssociationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Association> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Association> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Association>", ""
            ) as Array<Association>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Association> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Association>", ""
            ) as Array<Association>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInverseRoles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInverseRolesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Role> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Role> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Role>", ""
            ) as Array<Role>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Role> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Role>", ""
            ) as Array<Role>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMaps
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMapsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<ConceptMap> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ConceptMap> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ConceptMap>", ""
            ) as Array<ConceptMap>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ConceptMap> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ConceptMap>", ""
            ) as Array<ConceptMap>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getParents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getParentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Concept> >> {
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPathsFromRoot
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPathsFromRootWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Array<Concept>> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("417", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Expectation failed", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Array<Concept>> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Array<Concept>>", ""
            ) as Array<Array<Concept>>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Array<Concept>> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Array<Concept>>", ""
            ) as Array<Array<Concept>>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPathsToAncestor
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPathsToAncestorWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Array<Concept>> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("417", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Expectation failed", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Array<Concept>> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Array<Concept>>", ""
            ) as Array<Array<Concept>>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Array<Concept>> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Array<Concept>>", ""
            ) as Array<Array<Concept>>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPathsToRoot
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPathsToRootWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Array<Concept>> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("417", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Expectation failed", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Array<Concept>> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Array<Concept>>", ""
            ) as Array<Array<Concept>>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Array<Concept>> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Array<Concept>>", ""
            ) as Array<Array<Concept>>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRoles1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRoles1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Role> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Role> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Role>", ""
            ) as Array<Role>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Role> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Role>", ""
            ) as Array<Role>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRoots
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRootsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Concept> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("417", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Expectation failed", body, response.headers);
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
     * @params response Response returned by the server for a request to getSubsetMembers1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSubsetMembers1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Concept> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("417", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Expectation failed", body, response.headers);
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
     * @params response Response returned by the server for a request to getSubtree
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSubtreeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<HierarchyNode> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<HierarchyNode> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<HierarchyNode>", ""
            ) as Array<HierarchyNode>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<HierarchyNode> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<HierarchyNode>", ""
            ) as Array<HierarchyNode>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSubtreeChildren
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSubtreeChildrenWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<HierarchyNode> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<HierarchyNode> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<HierarchyNode>", ""
            ) as Array<HierarchyNode>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<HierarchyNode> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<HierarchyNode>", ""
            ) as Array<HierarchyNode>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
