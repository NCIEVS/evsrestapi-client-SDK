// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ConceptResultList } from '../models/ConceptResultList';
import { MapResultList } from '../models/MapResultList';
import { RestException } from '../models/RestException';

/**
 * no description
 */
export class SearchEndpointApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Perform a SPARQL query for a specified terminology.
     * Get SPARQL query results
     * @param terminology Single terminology to search, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param body SPARQL query to execute on the graph for the specified terminology. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/SPARQL.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for more information and examples of using SPARQL with EVSRESTAPI&lt;/a&gt;.
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public async getSparqlBindings(terminology: string, body: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("SearchEndpointApi", "getSparqlBindings", "terminology");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("SearchEndpointApi", "getSparqlBindings", "body");
        }





        // Path Params
        const localVarPath = '/api/v1/sparql/{terminology}'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "text/plain"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "string", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use cases for search range from very simple term searches, use of paging parameters, additional filters, searches properties, roles, and associations, and so on.  To further explore the range of search options, take a look at the <a href=\'https://github.com/NCIEVS/evsrestapi-client-SDK\' target=\'_blank\'>Github client SDK library created for the NCI EVS Rest API</a>.
     * Get concept search results
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param terminology Comma-separated list of terminologies to search, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param term The term, phrase, or code to be searched, e.g. \&#39;melanoma\&#39;
     * @param type The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy.
     * @param sort The search parameter to sort results by
     * @param ascending Sort ascending (if true) or descending (if false)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param conceptStatus Comma-separated list of concept status values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/conceptStatuses\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @param property Comma-separated list of properties to restrict search results by (see also &lt;i&gt;value&lt;/i&gt;). e.g.&lt;ul&gt;&lt;li&gt;\&#39;P106,P322\&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;COLOR,SHAPE\&#39; for &lt;i&gt;terminology&#x3D;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/properties\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus properties&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/properties\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus properties&lt;/a&gt;.&lt;/p&gt; The properties can be specified as code or name. NOTE: This feature works with &lt;i&gt;value&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching the &lt;i&gt;value&lt;/i&gt; parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term.
     * @param value A property value to restrict search results by.  NOTE: This feature works with &lt;i&gt;property&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching this parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term.
     * @param definitionSource Comma-separated list of definition sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/definitionSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/definitionSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @param definitionType Comma-separated list of definition types to restrict search results by, e.g. \&#39;DEFINITION,ALT_DEFINITION\&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/definitionTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @param synonymSource Comma-separated list of synonym sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/synonymSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/synonymSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @param synonymType Comma-separated list of synonym types to restrict search results by, e.g. \&#39;FULL_SYN\&#39;. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/synonymTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @param synonymTermType Comma-separated list of synonym term type values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/termTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/termTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @param subset Comma-separated list of subsets to restrict search results by, e.g. \&#39;C157225\&#39;. The value \&#39;*\&#39; can also be used to return results that participate in at least one subset. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;
     */
    public async search(xEVSRESTAPILicenseKey?: string, terminology?: string, term?: string, type?: string, sort?: string, ascending?: boolean, include?: string, fromRecord?: number, pageSize?: number, conceptStatus?: string, property?: string, value?: string, definitionSource?: string, definitionType?: string, synonymSource?: string, synonymType?: string, synonymTermType?: string, subset?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



















        // Path Params
        const localVarPath = '/api/v1/concept/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (terminology !== undefined) {
            requestContext.setQueryParam("terminology", ObjectSerializer.serialize(terminology, "string", ""));
        }

        // Query Params
        if (term !== undefined) {
            requestContext.setQueryParam("term", ObjectSerializer.serialize(term, "string", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "string", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
        }

        // Query Params
        if (ascending !== undefined) {
            requestContext.setQueryParam("ascending", ObjectSerializer.serialize(ascending, "boolean", ""));
        }

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

        // Query Params
        if (conceptStatus !== undefined) {
            requestContext.setQueryParam("conceptStatus", ObjectSerializer.serialize(conceptStatus, "string", ""));
        }

        // Query Params
        if (property !== undefined) {
            requestContext.setQueryParam("property", ObjectSerializer.serialize(property, "string", ""));
        }

        // Query Params
        if (value !== undefined) {
            requestContext.setQueryParam("value", ObjectSerializer.serialize(value, "string", ""));
        }

        // Query Params
        if (definitionSource !== undefined) {
            requestContext.setQueryParam("definitionSource", ObjectSerializer.serialize(definitionSource, "string", ""));
        }

        // Query Params
        if (definitionType !== undefined) {
            requestContext.setQueryParam("definitionType", ObjectSerializer.serialize(definitionType, "string", ""));
        }

        // Query Params
        if (synonymSource !== undefined) {
            requestContext.setQueryParam("synonymSource", ObjectSerializer.serialize(synonymSource, "string", ""));
        }

        // Query Params
        if (synonymType !== undefined) {
            requestContext.setQueryParam("synonymType", ObjectSerializer.serialize(synonymType, "string", ""));
        }

        // Query Params
        if (synonymTermType !== undefined) {
            requestContext.setQueryParam("synonymTermType", ObjectSerializer.serialize(synonymTermType, "string", ""));
        }

        // Query Params
        if (subset !== undefined) {
            requestContext.setQueryParam("subset", ObjectSerializer.serialize(subset, "string", ""));
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
     * Use cases for search range from very simple term searches, use of paging parameters, additional filters, searches properties, roles, and associations, and so on.  To further explore the range of search options, take a look at the <a href=\'https://github.com/NCIEVS/evsrestapi-client-SDK\' target=\'_blank\'>Github client SDK library created for the NCI EVS Rest API</a>.
     * Get concept search results for a specified terminology
     * @param terminology Single terminology to search, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param term The term, phrase, or code to be searched, e.g. \&#39;melanoma\&#39;
     * @param type The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy.
     * @param sort The search parameter to sort results by
     * @param ascending Sort ascending (if true) or descending (if false)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param conceptStatus Comma-separated list of concept status values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/conceptStatuses\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @param property Comma-separated list of properties to restrict search results by (see also &lt;i&gt;value&lt;/i&gt;). e.g.&lt;ul&gt;&lt;li&gt;\&#39;P106,P322\&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;COLOR,SHAPE\&#39; for &lt;i&gt;terminology&#x3D;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/properties\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus properties&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/properties\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus properties&lt;/a&gt;.&lt;/p&gt; The properties can be specified as code or name. NOTE: This feature works with &lt;i&gt;value&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching the &lt;i&gt;value&lt;/i&gt; parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term.
     * @param value A property value to restrict search results by.  NOTE: This feature works with &lt;i&gt;property&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching this parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term.
     * @param definitionSource Comma-separated list of definition sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/definitionSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/definitionSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @param definitionType Comma-separated list of definition types to restrict search results by, e.g. \&#39;DEFINITION,ALT_DEFINITION\&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/definitionTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @param synonymSource Comma-separated list of synonym sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/synonymSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/synonymSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @param synonymType Comma-separated list of synonym types to restrict search results by, e.g. \&#39;FULL_SYN\&#39;. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/synonymTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @param synonymTermType Comma-separated list of synonym term type values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/termTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/termTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @param subset Comma-separated list of subsets to restrict search results by, e.g. \&#39;C157225\&#39;. The value \&#39;*\&#39; can also be used to return results that participate in at least one subset. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;
     */
    public async searchSingleTerminology(terminology: string, xEVSRESTAPILicenseKey?: string, term?: string, type?: string, sort?: string, ascending?: boolean, include?: string, fromRecord?: number, pageSize?: number, conceptStatus?: string, property?: string, value?: string, definitionSource?: string, definitionType?: string, synonymSource?: string, synonymType?: string, synonymTermType?: string, subset?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("SearchEndpointApi", "searchSingleTerminology", "terminology");
        }



















        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/search'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (term !== undefined) {
            requestContext.setQueryParam("term", ObjectSerializer.serialize(term, "string", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "string", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
        }

        // Query Params
        if (ascending !== undefined) {
            requestContext.setQueryParam("ascending", ObjectSerializer.serialize(ascending, "boolean", ""));
        }

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

        // Query Params
        if (conceptStatus !== undefined) {
            requestContext.setQueryParam("conceptStatus", ObjectSerializer.serialize(conceptStatus, "string", ""));
        }

        // Query Params
        if (property !== undefined) {
            requestContext.setQueryParam("property", ObjectSerializer.serialize(property, "string", ""));
        }

        // Query Params
        if (value !== undefined) {
            requestContext.setQueryParam("value", ObjectSerializer.serialize(value, "string", ""));
        }

        // Query Params
        if (definitionSource !== undefined) {
            requestContext.setQueryParam("definitionSource", ObjectSerializer.serialize(definitionSource, "string", ""));
        }

        // Query Params
        if (definitionType !== undefined) {
            requestContext.setQueryParam("definitionType", ObjectSerializer.serialize(definitionType, "string", ""));
        }

        // Query Params
        if (synonymSource !== undefined) {
            requestContext.setQueryParam("synonymSource", ObjectSerializer.serialize(synonymSource, "string", ""));
        }

        // Query Params
        if (synonymType !== undefined) {
            requestContext.setQueryParam("synonymType", ObjectSerializer.serialize(synonymType, "string", ""));
        }

        // Query Params
        if (synonymTermType !== undefined) {
            requestContext.setQueryParam("synonymTermType", ObjectSerializer.serialize(synonymTermType, "string", ""));
        }

        // Query Params
        if (subset !== undefined) {
            requestContext.setQueryParam("subset", ObjectSerializer.serialize(subset, "string", ""));
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
     * Use cases for search range from very simple term searches, use of paging parameters, additional filters, searches properties, roles, and associations, and so on.  To further explore the range of search options, take a look at the <a href=\'https://github.com/NCIEVS/evsrestapi-client-SDK\' target=\'_blank\'>Github client SDK library created for the NCI EVS Rest API</a>.
     * Get concept search results for a specified terminology
     * @param terminology Single terminology to search, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param body SPARQL query that returns ?code identifying a valid code in the specified terminology. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/SPARQL.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for more information and examples of using SPARQL with EVSRESTAPI&lt;/a&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param term The term, phrase, or code to be searched, e.g. \&#39;melanoma\&#39;
     * @param type The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy.
     * @param sort The search parameter to sort results by
     * @param ascending Sort ascending (if true) or descending (if false)
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param conceptStatus Comma-separated list of concept status values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/conceptStatuses\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @param property Comma-separated list of properties to restrict search results by (see also &lt;i&gt;value&lt;/i&gt;). e.g.&lt;ul&gt;&lt;li&gt;\&#39;P106,P322\&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;COLOR,SHAPE\&#39; for &lt;i&gt;terminology&#x3D;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/properties\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus properties&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/properties\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus properties&lt;/a&gt;.&lt;/p&gt; The properties can be specified as code or name. NOTE: This feature works with &lt;i&gt;value&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching the &lt;i&gt;value&lt;/i&gt; parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term.
     * @param value A property value to restrict search results by.  NOTE: This feature works with &lt;i&gt;property&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching this parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term.
     * @param definitionSource Comma-separated list of definition sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/definitionSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/definitionSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @param definitionType Comma-separated list of definition types to restrict search results by, e.g. \&#39;DEFINITION,ALT_DEFINITION\&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/definitionTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @param synonymSource Comma-separated list of synonym sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/synonymSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/synonymSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @param synonymType Comma-separated list of synonym types to restrict search results by, e.g. \&#39;FULL_SYN\&#39;. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/synonymTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @param synonymTermType Comma-separated list of synonym term type values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/termTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/termTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @param subset Comma-separated list of subsets to restrict search results by, e.g. \&#39;C157225\&#39;. The value \&#39;*\&#39; can also be used to return results that participate in at least one subset. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;
     */
    public async searchSingleTerminologySparql(terminology: string, body: string, include?: string, xEVSRESTAPILicenseKey?: string, term?: string, type?: string, sort?: string, ascending?: boolean, fromRecord?: number, pageSize?: number, conceptStatus?: string, property?: string, value?: string, definitionSource?: string, definitionType?: string, synonymSource?: string, synonymType?: string, synonymTermType?: string, subset?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'terminology' is not null or undefined
        if (terminology === null || terminology === undefined) {
            throw new RequiredError("SearchEndpointApi", "searchSingleTerminologySparql", "terminology");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("SearchEndpointApi", "searchSingleTerminologySparql", "body");
        }



















        // Path Params
        const localVarPath = '/api/v1/concept/{terminology}/search'
            .replace('{' + 'terminology' + '}', encodeURIComponent(String(terminology)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "string", ""));
        }

        // Query Params
        if (term !== undefined) {
            requestContext.setQueryParam("term", ObjectSerializer.serialize(term, "string", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "string", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
        }

        // Query Params
        if (ascending !== undefined) {
            requestContext.setQueryParam("ascending", ObjectSerializer.serialize(ascending, "boolean", ""));
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
        if (conceptStatus !== undefined) {
            requestContext.setQueryParam("conceptStatus", ObjectSerializer.serialize(conceptStatus, "string", ""));
        }

        // Query Params
        if (property !== undefined) {
            requestContext.setQueryParam("property", ObjectSerializer.serialize(property, "string", ""));
        }

        // Query Params
        if (value !== undefined) {
            requestContext.setQueryParam("value", ObjectSerializer.serialize(value, "string", ""));
        }

        // Query Params
        if (definitionSource !== undefined) {
            requestContext.setQueryParam("definitionSource", ObjectSerializer.serialize(definitionSource, "string", ""));
        }

        // Query Params
        if (definitionType !== undefined) {
            requestContext.setQueryParam("definitionType", ObjectSerializer.serialize(definitionType, "string", ""));
        }

        // Query Params
        if (synonymSource !== undefined) {
            requestContext.setQueryParam("synonymSource", ObjectSerializer.serialize(synonymSource, "string", ""));
        }

        // Query Params
        if (synonymType !== undefined) {
            requestContext.setQueryParam("synonymType", ObjectSerializer.serialize(synonymType, "string", ""));
        }

        // Query Params
        if (synonymTermType !== undefined) {
            requestContext.setQueryParam("synonymTermType", ObjectSerializer.serialize(synonymTermType, "string", ""));
        }

        // Query Params
        if (subset !== undefined) {
            requestContext.setQueryParam("subset", ObjectSerializer.serialize(subset, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-EVSRESTAPI-License-Key", ObjectSerializer.serialize(xEVSRESTAPILicenseKey, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "text/plain"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "string", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class SearchEndpointApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSparqlBindings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSparqlBindingsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MapResultList >> {
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
            const body: MapResultList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MapResultList", ""
            ) as MapResultList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MapResultList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MapResultList", ""
            ) as MapResultList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to search
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConceptResultList >> {
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
            const body: ConceptResultList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConceptResultList", ""
            ) as ConceptResultList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConceptResultList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConceptResultList", ""
            ) as ConceptResultList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchSingleTerminology
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchSingleTerminologyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConceptResultList >> {
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
            const body: ConceptResultList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConceptResultList", ""
            ) as ConceptResultList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConceptResultList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConceptResultList", ""
            ) as ConceptResultList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchSingleTerminologySparql
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchSingleTerminologySparqlWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConceptResultList >> {
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
            const body: ConceptResultList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConceptResultList", ""
            ) as ConceptResultList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConceptResultList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConceptResultList", ""
            ) as ConceptResultList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
