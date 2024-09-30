// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Concept } from '../models/Concept';
import { ConceptMinimal } from '../models/ConceptMinimal';
import { RestException } from '../models/RestException';
import { StatisticsEntry } from '../models/StatisticsEntry';
import { Terminology } from '../models/Terminology';

/**
 * no description
 */
export class MetadataEndpointsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get the association for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Association code (or name), e.g. &lt;ul&gt;&lt;li&gt;\&#39;A10\&#39; or \&#39;Has_CDRH_Parent\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RB\&#39; or \&#39;has a broader relationship\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getAssociation(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getAssociation", "terminology");
        }


        // verify required parameter 'codeOrName' is not null or undefined
        if (codeOrName === null || codeOrName === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getAssociation", "codeOrName");
        }



        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/association/{codeOrName}'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'codeOrName' + '}', encodeURIComponent(String(codeOrName)));

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
     * Get all associations (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return associations for (or leave blank for all). If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public async getAssociations(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getAssociations", "terminology");
        }




        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/associations'
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

    /**
     * Get all concept status values for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     */
    public async getConceptStatuses(terminology: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getConceptStatuses", "terminology");
        }


        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/conceptStatuses'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)));

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
     * Get all definition sources for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public async getDefinitionSources(terminology: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getDefinitionSources", "terminology");
        }


        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/definitionSources'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)));

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
     * Get the definition type for the specified terminology and code/name.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Definition type code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P325\&#39; or \&#39;DEFINITION\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;DEFINITION\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getDefinitionType(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getDefinitionType", "terminology");
        }


        // verify required parameter 'codeOrName' is not null or undefined
        if (codeOrName === null || codeOrName === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getDefinitionType", "codeOrName");
        }



        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/definitionType/{codeOrName}'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'codeOrName' + '}', encodeURIComponent(String(codeOrName)));

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
     * Get all definition types (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return definition types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public async getDefinitionTypes(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getDefinitionTypes", "terminology");
        }




        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/definitionTypes'
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

    /**
     * Get all properties (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return properties for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public async getProperties(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getProperties", "terminology");
        }




        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/properties'
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

    /**
     * Get the property for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Property code (or name), e.g. &lt;ul&gt;&lt;li&gt;\&#39;P216\&#39; or \&#39;BioCarta_ID\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;BioCarta_ID\&#39; or \&#39;\&#39;BioCarta ID\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getProperty(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getProperty", "terminology");
        }


        // verify required parameter 'codeOrName' is not null or undefined
        if (codeOrName === null || codeOrName === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getProperty", "codeOrName");
        }



        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/property/{codeOrName}'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'codeOrName' + '}', encodeURIComponent(String(codeOrName)));

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
     * Get the qualifier for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Qualifier code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P390\&#39; or \&#39;go-source\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RG\&#39; or \&#39;Relationship group\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getQualifier(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getQualifier", "terminology");
        }


        // verify required parameter 'codeOrName' is not null or undefined
        if (codeOrName === null || codeOrName === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getQualifier", "codeOrName");
        }



        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/qualifier/{codeOrName}'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'codeOrName' + '}', encodeURIComponent(String(codeOrName)));

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
     * Get qualifier values for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Qualifier code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P390\&#39; or \&#39;go-source\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RG\&#39; or \&#39;Relationship group\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     */
    public async getQualifierValues(terminology: string, codeOrName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getQualifierValues", "terminology");
        }


        // verify required parameter 'codeOrName' is not null or undefined
        if (codeOrName === null || codeOrName === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getQualifierValues", "codeOrName");
        }


        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/qualifier/{codeOrName}/values'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'codeOrName' + '}', encodeURIComponent(String(codeOrName)));

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
     * Get all qualifiers (properties on properties) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return qualifiers for (or leave blank for all)
     */
    public async getQualifiers(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getQualifiers", "terminology");
        }




        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/qualifiers'
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

    /**
     * Get the role for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param codeOrName Role code (or name), e.g. \&#39;R123\&#39; or \&#39;Chemotherapy_Regimen_Has_Component\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getRole(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getRole", "terminology");
        }


        // verify required parameter 'codeOrName' is not null or undefined
        if (codeOrName === null || codeOrName === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getRole", "codeOrName");
        }



        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/role/{codeOrName}'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'codeOrName' + '}', encodeURIComponent(String(codeOrName)));

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
     * Get all roles (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return roles for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public async getRoles(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getRoles", "terminology");
        }




        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/roles'
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

    /**
     * This endpoint is mostly for NCIm to make source overlap statistics available.
     * Get statistics for the source within the specified terminology.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.
     * @param source terminology source code, e.g. \&#39;LNC\&#39; for &lt;i&gt;ncim&lt;/i&gt;.
     */
    public async getSourceStats(terminology: string, source: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getSourceStats", "terminology");
        }


        // verify required parameter 'source' is not null or undefined
        if (source === null || source === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getSourceStats", "source");
        }


        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/stats/{source}'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'source' + '}', encodeURIComponent(String(source)));

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
     * This endpoint will be deprecated in v2 in favor of top level subset endpoints.
     * Get the subset for the specified terminology and code.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.
     * @param code Subset code, e.g. \&#39;C116978\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getSubset1(terminology: string, code: string, include?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getSubset1", "terminology");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getSubset1", "code");
        }



        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/subset/{code}'
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
     * This endpoint will be deprecated in v2 in favor of top level subset endpoints.
     * Get all subsets (or those specified by list parameter) for the specified terminology.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public async getSubsets1(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getSubsets1", "terminology");
        }




        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/subsets'
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

    /**
     * Get all synonym sources for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public async getSynonymSources(terminology: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getSynonymSources", "terminology");
        }


        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/synonymSources'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)));

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
     * Get the synonym type for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Synonym type code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P90\&#39; or \&#39;FULL_SYN\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;Preferred_Name\&#39; or \&#39;Preferred name\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getSynonymType(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getSynonymType", "terminology");
        }


        // verify required parameter 'codeOrName' is not null or undefined
        if (codeOrName === null || codeOrName === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getSynonymType", "codeOrName");
        }



        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/synonymType/{codeOrName}'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)))
            .replace('{' + 'codeOrName' + '}', encodeURIComponent(String(codeOrName)));

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
     * Get all synonym types (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return synonym types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public async getSynonymTypes(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getSynonymTypes", "terminology");
        }




        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/synonymTypes'
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

    /**
     * Get all term types for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public async getTermTypes(terminology: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getTermTypes", "terminology");
        }


        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/termTypes'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)));

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
     * Get all available terminologies
     * @param latest Return terminologies with matching &lt;i&gt;latest&lt;/i&gt; value. e.g. true or false
     * @param tag Return terminologies with matching tag. e.g. \&#39;monthly\&#39; or \&#39;weekly\&#39; for &lt;i&gt;ncit&lt;/i&gt;
     * @param terminology Return entries with matching terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public async getTerminologies(latest?: boolean, tag?: string, terminology?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/api/v1/metadata/terminologies';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (latest !== undefined) {
            requestContext.setQueryParam("latest", ObjectSerializer.serialize(latest, "boolean", ""));
        }

        // Query Params
        if (tag !== undefined) {
            requestContext.setQueryParam("tag", ObjectSerializer.serialize(tag, "string", ""));
        }

        // Query Params
        if (terminology !== undefined) {
            requestContext.setQueryParam("terminology", ObjectSerializer.serialize(terminology, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get welcome text for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public async getWelcomeText(terminology: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("MetadataEndpointsApi", "getWelcomeText", "terminology");
        }


        // Path Params
        const localVarPath = '/api/v1/metadata/{terminology}/welcomeText'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class MetadataEndpointsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAssociation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAssociationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Concept >> {
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
     * @params response Response returned by the server for a request to getAssociations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAssociationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Concept> >> {
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
     * @params response Response returned by the server for a request to getConceptStatuses
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConceptStatusesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<string> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDefinitionSources
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDefinitionSourcesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<ConceptMinimal> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ConceptMinimal> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ConceptMinimal>", ""
            ) as Array<ConceptMinimal>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ConceptMinimal> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ConceptMinimal>", ""
            ) as Array<ConceptMinimal>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDefinitionType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDefinitionTypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Concept >> {
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
     * @params response Response returned by the server for a request to getDefinitionTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDefinitionTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Concept> >> {
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
     * @params response Response returned by the server for a request to getProperties
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPropertiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Concept> >> {
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
     * @params response Response returned by the server for a request to getProperty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPropertyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Concept >> {
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
     * @params response Response returned by the server for a request to getQualifier
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getQualifierWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Concept >> {
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
     * @params response Response returned by the server for a request to getQualifierValues
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getQualifierValuesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<string> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getQualifiers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getQualifiersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Concept> >> {
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
     * @params response Response returned by the server for a request to getRole
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRoleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Concept >> {
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
     * @params response Response returned by the server for a request to getRoles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRolesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Concept> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
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
     * @params response Response returned by the server for a request to getSourceStats
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSourceStatsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<{ [key: string]: Array<StatisticsEntry>; } >> {
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
            const body: { [key: string]: Array<StatisticsEntry>; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: Array<StatisticsEntry>; }", ""
            ) as { [key: string]: Array<StatisticsEntry>; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: { [key: string]: Array<StatisticsEntry>; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: Array<StatisticsEntry>; }", ""
            ) as { [key: string]: Array<StatisticsEntry>; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSubset1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSubset1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Concept >> {
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
     * @params response Response returned by the server for a request to getSubsets1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSubsets1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Concept> >> {
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
     * @params response Response returned by the server for a request to getSynonymSources
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSynonymSourcesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<ConceptMinimal> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ConceptMinimal> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ConceptMinimal>", ""
            ) as Array<ConceptMinimal>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ConceptMinimal> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ConceptMinimal>", ""
            ) as Array<ConceptMinimal>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSynonymType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSynonymTypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Concept >> {
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
     * @params response Response returned by the server for a request to getSynonymTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSynonymTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Concept> >> {
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
     * @params response Response returned by the server for a request to getTermTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTermTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<ConceptMinimal> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ConceptMinimal> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ConceptMinimal>", ""
            ) as Array<ConceptMinimal>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ConceptMinimal> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ConceptMinimal>", ""
            ) as Array<ConceptMinimal>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTerminologies
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTerminologiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Terminology> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Terminology> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Terminology>", ""
            ) as Array<Terminology>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Terminology> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Terminology>", ""
            ) as Array<Terminology>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWelcomeText
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWelcomeTextWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RestException = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RestException", ""
            ) as RestException;
            throw new ApiException<RestException>(response.httpStatusCode, "Resource not found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
