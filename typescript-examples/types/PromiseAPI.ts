import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ApplicationVersion } from '../models/ApplicationVersion';
import { Association } from '../models/Association';
import { AssociationEntry } from '../models/AssociationEntry';
import { AssociationEntryResultList } from '../models/AssociationEntryResultList';
import { Concept } from '../models/Concept';
import { ConceptMap } from '../models/ConceptMap';
import { ConceptMapResultList } from '../models/ConceptMapResultList';
import { ConceptMinimal } from '../models/ConceptMinimal';
import { ConceptResultList } from '../models/ConceptResultList';
import { Definition } from '../models/Definition';
import { DisjointWith } from '../models/DisjointWith';
import { HierarchyNode } from '../models/HierarchyNode';
import { History } from '../models/History';
import { MapResultList } from '../models/MapResultList';
import { Path } from '../models/Path';
import { Paths } from '../models/Paths';
import { Property } from '../models/Property';
import { Qualifier } from '../models/Qualifier';
import { RestException } from '../models/RestException';
import { Role } from '../models/Role';
import { SearchCriteria } from '../models/SearchCriteria';
import { StatisticsEntry } from '../models/StatisticsEntry';
import { Synonym } from '../models/Synonym';
import { Terminology } from '../models/Terminology';
import { TerminologyMetadata } from '../models/TerminologyMetadata';
import { ObservableApplicationVersionEndpointApi } from './ObservableAPI';

import { ApplicationVersionEndpointApiRequestFactory, ApplicationVersionEndpointApiResponseProcessor} from "../apis/ApplicationVersionEndpointApi";
export class PromiseApplicationVersionEndpointApi {
    private api: ObservableApplicationVersionEndpointApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationVersionEndpointApiRequestFactory,
        responseProcessor?: ApplicationVersionEndpointApiResponseProcessor
    ) {
        this.api = new ObservableApplicationVersionEndpointApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the application version information
     */
    public getApplicationVersionWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ApplicationVersion>> {
        const result = this.api.getApplicationVersionWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get the application version information
     */
    public getApplicationVersion(_options?: Configuration): Promise<ApplicationVersion> {
        const result = this.api.getApplicationVersion(_options);
        return result.toPromise();
    }

    /**
     * Rewrite the specified LexEVS URL to EVS Explore
     * @param url 
     */
    public rewriteUrlWithHttpInfo(url: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.rewriteUrlWithHttpInfo(url, _options);
        return result.toPromise();
    }

    /**
     * Rewrite the specified LexEVS URL to EVS Explore
     * @param url 
     */
    public rewriteUrl(url: string, _options?: Configuration): Promise<string> {
        const result = this.api.rewriteUrl(url, _options);
        return result.toPromise();
    }


}



import { ObservableConceptEndpointsApi } from './ObservableAPI';

import { ConceptEndpointsApiRequestFactory, ConceptEndpointsApiResponseProcessor} from "../apis/ConceptEndpointsApi";
export class PromiseConceptEndpointsApi {
    private api: ObservableConceptEndpointsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConceptEndpointsApiRequestFactory,
        responseProcessor?: ConceptEndpointsApiResponseProcessor
    ) {
        this.api = new ObservableConceptEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the association entries for the specified terminology and code. Associations used to define subset membership are not resolved by this call
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param codeOrLabel Code/label in the specified terminology, e.g. \&#39;A5\&#39; or \&#39;Has_Salt_Form\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getAssociationEntriesWithHttpInfo(terminology: string, codeOrLabel: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<AssociationEntryResultList>> {
        const result = this.api.getAssociationEntriesWithHttpInfo(terminology, codeOrLabel, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get the association entries for the specified terminology and code. Associations used to define subset membership are not resolved by this call
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param codeOrLabel Code/label in the specified terminology, e.g. \&#39;A5\&#39; or \&#39;Has_Salt_Form\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getAssociationEntries(terminology: string, codeOrLabel: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<AssociationEntryResultList> {
        const result = this.api.getAssociationEntries(terminology, codeOrLabel, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get the associations for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getAssociations1WithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Array<Association>>> {
        const result = this.api.getAssociations1WithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get the associations for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getAssociations1(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Array<Association>> {
        const result = this.api.getAssociations1(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get child concepts for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getChildrenWithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        const result = this.api.getChildrenWithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get child concepts for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getChildren(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Array<Concept>> {
        const result = this.api.getChildren(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get the concept for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param limit If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), elements of the concept should be limited to that specified number of entries. Thus a user interface can quickly retrieve initial data for a concept (even with &lt;i&gt;include&#x3D;full&lt;/i&gt;) and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getConceptWithHttpInfo(terminology: string, code: string, limit?: number, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Concept>> {
        const result = this.api.getConceptWithHttpInfo(terminology, code, limit, include, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get the concept for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param limit If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), elements of the concept should be limited to that specified number of entries. Thus a user interface can quickly retrieve initial data for a concept (even with &lt;i&gt;include&#x3D;full&lt;/i&gt;) and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getConcept(terminology: string, code: string, limit?: number, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Concept> {
        const result = this.api.getConcept(terminology, code, limit, include, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get concepts specified by list parameter
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param list List (comma-separated) of codes to return concepts for, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C2291,C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0010137,C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getConceptsWithHttpInfo(terminology: string, list: string, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        const result = this.api.getConceptsWithHttpInfo(terminology, list, include, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get concepts specified by list parameter
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param list List (comma-separated) of codes to return concepts for, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C2291,C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0010137,C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getConcepts(terminology: string, list: string, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Array<Concept>> {
        const result = this.api.getConcepts(terminology, list, include, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
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
    public getDescendantsWithHttpInfo(terminology: string, code: string, fromRecord?: number, pageSize?: number, maxLevel?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        const result = this.api.getDescendantsWithHttpInfo(terminology, code, fromRecord, pageSize, maxLevel, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
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
    public getDescendants(terminology: string, code: string, fromRecord?: number, pageSize?: number, maxLevel?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Array<Concept>> {
        const result = this.api.getDescendants(terminology, code, fromRecord, pageSize, maxLevel, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get \"disjoint with\" info for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3910\&#39; for &lt;i&gt;ncit&lt;/i&gt;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getDisjointWithWithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Array<DisjointWith>>> {
        const result = this.api.getDisjointWithWithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get \"disjoint with\" info for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3910\&#39; for &lt;i&gt;ncit&lt;/i&gt;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getDisjointWith(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Array<DisjointWith>> {
        const result = this.api.getDisjointWith(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get history for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt; and &lt;i&gt;ncim&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getHistoryWithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Concept>> {
        const result = this.api.getHistoryWithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get history for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt; and &lt;i&gt;ncim&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getHistory(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Concept> {
        const result = this.api.getHistory(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get inverse associations for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getInverseAssociationsWithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Array<Association>>> {
        const result = this.api.getInverseAssociationsWithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get inverse associations for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getInverseAssociations(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Array<Association>> {
        const result = this.api.getInverseAssociations(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get inverse roles for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getInverseRolesWithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Array<Role>>> {
        const result = this.api.getInverseRolesWithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get inverse roles for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getInverseRoles(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Array<Role>> {
        const result = this.api.getInverseRoles(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get maps for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getMapsWithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Array<ConceptMap>>> {
        const result = this.api.getMapsWithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get maps for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getMaps(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Array<ConceptMap>> {
        const result = this.api.getMaps(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get parent concepts for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getParentsWithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        const result = this.api.getParentsWithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get parent concepts for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getParents(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Array<Concept>> {
        const result = this.api.getParents(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
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
    public getPathsFromRootWithHttpInfo(terminology: string, code: string, include?: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Array<Array<Concept>>>> {
        const result = this.api.getPathsFromRootWithHttpInfo(terminology, code, include, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
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
    public getPathsFromRoot(terminology: string, code: string, include?: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Array<Array<Concept>>> {
        const result = this.api.getPathsFromRoot(terminology, code, include, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
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
    public getPathsToAncestorWithHttpInfo(terminology: string, code: string, ancestorCode: string, include?: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Array<Array<Concept>>>> {
        const result = this.api.getPathsToAncestorWithHttpInfo(terminology, code, ancestorCode, include, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
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
    public getPathsToAncestor(terminology: string, code: string, ancestorCode: string, include?: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Array<Array<Concept>>> {
        const result = this.api.getPathsToAncestor(terminology, code, ancestorCode, include, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
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
    public getPathsToRootWithHttpInfo(terminology: string, code: string, include?: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Array<Array<Concept>>>> {
        const result = this.api.getPathsToRootWithHttpInfo(terminology, code, include, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
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
    public getPathsToRoot(terminology: string, code: string, include?: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Array<Array<Concept>>> {
        const result = this.api.getPathsToRoot(terminology, code, include, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get roles for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getRoles1WithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Array<Role>>> {
        const result = this.api.getRoles1WithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get roles for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getRoles1(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Array<Role>> {
        const result = this.api.getRoles1(terminology, code, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get root concepts for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getRootsWithHttpInfo(terminology: string, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        const result = this.api.getRootsWithHttpInfo(terminology, include, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get root concepts for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getRoots(terminology: string, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Array<Concept>> {
        const result = this.api.getRoots(terminology, include, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
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
    public getSubsetMembers1WithHttpInfo(terminology: string, code: string, fromRecord?: number, pageSize?: number, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        const result = this.api.getSubsetMembers1WithHttpInfo(terminology, code, fromRecord, pageSize, include, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
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
    public getSubsetMembers1(terminology: string, code: string, fromRecord?: number, pageSize?: number, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Array<Concept>> {
        const result = this.api.getSubsetMembers1(terminology, code, fromRecord, pageSize, include, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get the entire subtree from the root node to the specified code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param limit If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), subtrees and siblings at each level will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubtreeWithHttpInfo(terminology: string, code: string, limit?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Array<HierarchyNode>>> {
        const result = this.api.getSubtreeWithHttpInfo(terminology, code, limit, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get the entire subtree from the root node to the specified code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param limit If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), subtrees and siblings at each level will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubtree(terminology: string, code: string, limit?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Array<HierarchyNode>> {
        const result = this.api.getSubtree(terminology, code, limit, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get the entire subtree from the root node to the specified code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param limit If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), children will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubtreeChildrenWithHttpInfo(terminology: string, code: string, limit?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<Array<HierarchyNode>>> {
        const result = this.api.getSubtreeChildrenWithHttpInfo(terminology, code, limit, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Get the entire subtree from the root node to the specified code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param limit If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), children will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubtreeChildren(terminology: string, code: string, limit?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<Array<HierarchyNode>> {
        const result = this.api.getSubtreeChildren(terminology, code, limit, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }


}



import { ObservableHistoryEndpointsApi } from './ObservableAPI';

import { HistoryEndpointsApiRequestFactory, HistoryEndpointsApiResponseProcessor} from "../apis/HistoryEndpointsApi";
export class PromiseHistoryEndpointsApi {
    private api: ObservableHistoryEndpointsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HistoryEndpointsApiRequestFactory,
        responseProcessor?: HistoryEndpointsApiResponseProcessor
    ) {
        this.api = new ObservableHistoryEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets suggested replacements for a specified terminology and retired code. Active codes will return entries as well with an action of \"active\".
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C4654\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0000733\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;.
     */
    public getReplacementsWithHttpInfo(terminology: string, code: string, _options?: Configuration): Promise<HttpInfo<Array<History>>> {
        const result = this.api.getReplacementsWithHttpInfo(terminology, code, _options);
        return result.toPromise();
    }

    /**
     * Gets suggested replacements for a specified terminology and retired code. Active codes will return entries as well with an action of \"active\".
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C4654\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0000733\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;.
     */
    public getReplacements(terminology: string, code: string, _options?: Configuration): Promise<Array<History>> {
        const result = this.api.getReplacements(terminology, code, _options);
        return result.toPromise();
    }

    /**
     * Gets suggested replacements for a specified terminology and a comma-separated list of retired codes.  Active codes will return entries as well with an action of \"active\".
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param list Comma-separated list of codes, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C4654,C40117\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0000733,C3551741\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;.
     */
    public getReplacementsFromListWithHttpInfo(terminology: string, list: string, _options?: Configuration): Promise<HttpInfo<Array<History>>> {
        const result = this.api.getReplacementsFromListWithHttpInfo(terminology, list, _options);
        return result.toPromise();
    }

    /**
     * Gets suggested replacements for a specified terminology and a comma-separated list of retired codes.  Active codes will return entries as well with an action of \"active\".
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param list Comma-separated list of codes, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C4654,C40117\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0000733,C3551741\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;.
     */
    public getReplacementsFromList(terminology: string, list: string, _options?: Configuration): Promise<Array<History>> {
        const result = this.api.getReplacementsFromList(terminology, list, _options);
        return result.toPromise();
    }


}



import { ObservableMapsetEndpointsApi } from './ObservableAPI';

import { MapsetEndpointsApiRequestFactory, MapsetEndpointsApiResponseProcessor} from "../apis/MapsetEndpointsApi";
export class PromiseMapsetEndpointsApi {
    private api: ObservableMapsetEndpointsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MapsetEndpointsApiRequestFactory,
        responseProcessor?: MapsetEndpointsApiResponseProcessor
    ) {
        this.api = new ObservableMapsetEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the mapset for the specified code (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * @param code Mapset code
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getMapsetByCodeWithHttpInfo(code: string, include?: string, _options?: Configuration): Promise<HttpInfo<Concept>> {
        const result = this.api.getMapsetByCodeWithHttpInfo(code, include, _options);
        return result.toPromise();
    }

    /**
     * Get the mapset for the specified code (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * @param code Mapset code
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getMapsetByCode(code: string, include?: string, _options?: Configuration): Promise<Concept> {
        const result = this.api.getMapsetByCode(code, include, _options);
        return result.toPromise();
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
    public getMapsetMappingsByCodeWithHttpInfo(code: string, term?: string, fromRecord?: number, pageSize?: number, sort?: string, ascending?: boolean, _options?: Configuration): Promise<HttpInfo<ConceptMapResultList>> {
        const result = this.api.getMapsetMappingsByCodeWithHttpInfo(code, term, fromRecord, pageSize, sort, ascending, _options);
        return result.toPromise();
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
    public getMapsetMappingsByCode(code: string, term?: string, fromRecord?: number, pageSize?: number, sort?: string, ascending?: boolean, _options?: Configuration): Promise<ConceptMapResultList> {
        const result = this.api.getMapsetMappingsByCode(code, term, fromRecord, pageSize, sort, ascending, _options);
        return result.toPromise();
    }

    /**
     * Get all mapsets (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getMapsetsWithHttpInfo(include?: string, _options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        const result = this.api.getMapsetsWithHttpInfo(include, _options);
        return result.toPromise();
    }

    /**
     * Get all mapsets (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getMapsets(include?: string, _options?: Configuration): Promise<Array<Concept>> {
        const result = this.api.getMapsets(include, _options);
        return result.toPromise();
    }


}



import { ObservableMetadataEndpointsApi } from './ObservableAPI';

import { MetadataEndpointsApiRequestFactory, MetadataEndpointsApiResponseProcessor} from "../apis/MetadataEndpointsApi";
export class PromiseMetadataEndpointsApi {
    private api: ObservableMetadataEndpointsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetadataEndpointsApiRequestFactory,
        responseProcessor?: MetadataEndpointsApiResponseProcessor
    ) {
        this.api = new ObservableMetadataEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the association for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Association code (or name), e.g. &lt;ul&gt;&lt;li&gt;\&#39;A10\&#39; or \&#39;Has_CDRH_Parent\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RB\&#39; or \&#39;has a broader relationship\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getAssociationWithHttpInfo(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<HttpInfo<Concept>> {
        const result = this.api.getAssociationWithHttpInfo(terminology, codeOrName, include, _options);
        return result.toPromise();
    }

    /**
     * Get the association for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Association code (or name), e.g. &lt;ul&gt;&lt;li&gt;\&#39;A10\&#39; or \&#39;Has_CDRH_Parent\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RB\&#39; or \&#39;has a broader relationship\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getAssociation(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<Concept> {
        const result = this.api.getAssociation(terminology, codeOrName, include, _options);
        return result.toPromise();
    }

    /**
     * Get all associations (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return associations for (or leave blank for all). If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getAssociationsWithHttpInfo(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        const result = this.api.getAssociationsWithHttpInfo(terminology, include, list, _options);
        return result.toPromise();
    }

    /**
     * Get all associations (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return associations for (or leave blank for all). If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getAssociations(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<Array<Concept>> {
        const result = this.api.getAssociations(terminology, include, list, _options);
        return result.toPromise();
    }

    /**
     * Get all concept status values for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     */
    public getConceptStatusesWithHttpInfo(terminology: string, _options?: Configuration): Promise<HttpInfo<Array<string>>> {
        const result = this.api.getConceptStatusesWithHttpInfo(terminology, _options);
        return result.toPromise();
    }

    /**
     * Get all concept status values for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     */
    public getConceptStatuses(terminology: string, _options?: Configuration): Promise<Array<string>> {
        const result = this.api.getConceptStatuses(terminology, _options);
        return result.toPromise();
    }

    /**
     * Get all definition sources for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getDefinitionSourcesWithHttpInfo(terminology: string, _options?: Configuration): Promise<HttpInfo<Array<ConceptMinimal>>> {
        const result = this.api.getDefinitionSourcesWithHttpInfo(terminology, _options);
        return result.toPromise();
    }

    /**
     * Get all definition sources for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getDefinitionSources(terminology: string, _options?: Configuration): Promise<Array<ConceptMinimal>> {
        const result = this.api.getDefinitionSources(terminology, _options);
        return result.toPromise();
    }

    /**
     * Get the definition type for the specified terminology and code/name.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Definition type code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P325\&#39; or \&#39;DEFINITION\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;DEFINITION\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getDefinitionTypeWithHttpInfo(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<HttpInfo<Concept>> {
        const result = this.api.getDefinitionTypeWithHttpInfo(terminology, codeOrName, include, _options);
        return result.toPromise();
    }

    /**
     * Get the definition type for the specified terminology and code/name.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Definition type code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P325\&#39; or \&#39;DEFINITION\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;DEFINITION\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getDefinitionType(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<Concept> {
        const result = this.api.getDefinitionType(terminology, codeOrName, include, _options);
        return result.toPromise();
    }

    /**
     * Get all definition types (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return definition types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getDefinitionTypesWithHttpInfo(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        const result = this.api.getDefinitionTypesWithHttpInfo(terminology, include, list, _options);
        return result.toPromise();
    }

    /**
     * Get all definition types (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return definition types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getDefinitionTypes(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<Array<Concept>> {
        const result = this.api.getDefinitionTypes(terminology, include, list, _options);
        return result.toPromise();
    }

    /**
     * Get all properties (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return properties for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getPropertiesWithHttpInfo(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        const result = this.api.getPropertiesWithHttpInfo(terminology, include, list, _options);
        return result.toPromise();
    }

    /**
     * Get all properties (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return properties for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getProperties(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<Array<Concept>> {
        const result = this.api.getProperties(terminology, include, list, _options);
        return result.toPromise();
    }

    /**
     * Get the property for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Property code (or name), e.g. &lt;ul&gt;&lt;li&gt;\&#39;P216\&#39; or \&#39;BioCarta_ID\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;BioCarta_ID\&#39; or \&#39;\&#39;BioCarta ID\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getPropertyWithHttpInfo(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<HttpInfo<Concept>> {
        const result = this.api.getPropertyWithHttpInfo(terminology, codeOrName, include, _options);
        return result.toPromise();
    }

    /**
     * Get the property for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Property code (or name), e.g. &lt;ul&gt;&lt;li&gt;\&#39;P216\&#39; or \&#39;BioCarta_ID\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;BioCarta_ID\&#39; or \&#39;\&#39;BioCarta ID\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getProperty(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<Concept> {
        const result = this.api.getProperty(terminology, codeOrName, include, _options);
        return result.toPromise();
    }

    /**
     * Get the qualifier for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Qualifier code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P390\&#39; or \&#39;go-source\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RG\&#39; or \&#39;Relationship group\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getQualifierWithHttpInfo(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<HttpInfo<Concept>> {
        const result = this.api.getQualifierWithHttpInfo(terminology, codeOrName, include, _options);
        return result.toPromise();
    }

    /**
     * Get the qualifier for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Qualifier code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P390\&#39; or \&#39;go-source\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RG\&#39; or \&#39;Relationship group\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getQualifier(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<Concept> {
        const result = this.api.getQualifier(terminology, codeOrName, include, _options);
        return result.toPromise();
    }

    /**
     * Get qualifier values for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Qualifier code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P390\&#39; or \&#39;go-source\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RG\&#39; or \&#39;Relationship group\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     */
    public getQualifierValuesWithHttpInfo(terminology: string, codeOrName: string, _options?: Configuration): Promise<HttpInfo<Array<string>>> {
        const result = this.api.getQualifierValuesWithHttpInfo(terminology, codeOrName, _options);
        return result.toPromise();
    }

    /**
     * Get qualifier values for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Qualifier code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P390\&#39; or \&#39;go-source\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RG\&#39; or \&#39;Relationship group\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     */
    public getQualifierValues(terminology: string, codeOrName: string, _options?: Configuration): Promise<Array<string>> {
        const result = this.api.getQualifierValues(terminology, codeOrName, _options);
        return result.toPromise();
    }

    /**
     * Get all qualifiers (properties on properties) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return qualifiers for (or leave blank for all)
     */
    public getQualifiersWithHttpInfo(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        const result = this.api.getQualifiersWithHttpInfo(terminology, include, list, _options);
        return result.toPromise();
    }

    /**
     * Get all qualifiers (properties on properties) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return qualifiers for (or leave blank for all)
     */
    public getQualifiers(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<Array<Concept>> {
        const result = this.api.getQualifiers(terminology, include, list, _options);
        return result.toPromise();
    }

    /**
     * Get the role for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param codeOrName Role code (or name), e.g. \&#39;R123\&#39; or \&#39;Chemotherapy_Regimen_Has_Component\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getRoleWithHttpInfo(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<HttpInfo<Concept>> {
        const result = this.api.getRoleWithHttpInfo(terminology, codeOrName, include, _options);
        return result.toPromise();
    }

    /**
     * Get the role for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param codeOrName Role code (or name), e.g. \&#39;R123\&#39; or \&#39;Chemotherapy_Regimen_Has_Component\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getRole(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<Concept> {
        const result = this.api.getRole(terminology, codeOrName, include, _options);
        return result.toPromise();
    }

    /**
     * Get all roles (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return roles for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getRolesWithHttpInfo(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        const result = this.api.getRolesWithHttpInfo(terminology, include, list, _options);
        return result.toPromise();
    }

    /**
     * Get all roles (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return roles for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getRoles(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<Array<Concept>> {
        const result = this.api.getRoles(terminology, include, list, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is mostly for NCIm to make source overlap statistics available.
     * Get statistics for the source within the specified terminology.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.
     * @param source terminology source code, e.g. \&#39;LNC\&#39; for &lt;i&gt;ncim&lt;/i&gt;.
     */
    public getSourceStatsWithHttpInfo(terminology: string, source: string, _options?: Configuration): Promise<HttpInfo<{ [key: string]: Array<StatisticsEntry>; }>> {
        const result = this.api.getSourceStatsWithHttpInfo(terminology, source, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is mostly for NCIm to make source overlap statistics available.
     * Get statistics for the source within the specified terminology.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.
     * @param source terminology source code, e.g. \&#39;LNC\&#39; for &lt;i&gt;ncim&lt;/i&gt;.
     */
    public getSourceStats(terminology: string, source: string, _options?: Configuration): Promise<{ [key: string]: Array<StatisticsEntry>; }> {
        const result = this.api.getSourceStats(terminology, source, _options);
        return result.toPromise();
    }

    /**
     * This endpoint will be deprecated in v2 in favor of top level subset endpoints.
     * Get the subset for the specified terminology and code.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.
     * @param code Subset code, e.g. \&#39;C116978\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubset1WithHttpInfo(terminology: string, code: string, include?: string, _options?: Configuration): Promise<HttpInfo<Concept>> {
        const result = this.api.getSubset1WithHttpInfo(terminology, code, include, _options);
        return result.toPromise();
    }

    /**
     * This endpoint will be deprecated in v2 in favor of top level subset endpoints.
     * Get the subset for the specified terminology and code.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.
     * @param code Subset code, e.g. \&#39;C116978\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubset1(terminology: string, code: string, include?: string, _options?: Configuration): Promise<Concept> {
        const result = this.api.getSubset1(terminology, code, include, _options);
        return result.toPromise();
    }

    /**
     * This endpoint will be deprecated in v2 in favor of top level subset endpoints.
     * Get all subsets (or those specified by list parameter) for the specified terminology.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getSubsets1WithHttpInfo(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        const result = this.api.getSubsets1WithHttpInfo(terminology, include, list, _options);
        return result.toPromise();
    }

    /**
     * This endpoint will be deprecated in v2 in favor of top level subset endpoints.
     * Get all subsets (or those specified by list parameter) for the specified terminology.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getSubsets1(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<Array<Concept>> {
        const result = this.api.getSubsets1(terminology, include, list, _options);
        return result.toPromise();
    }

    /**
     * Get all synonym sources for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getSynonymSourcesWithHttpInfo(terminology: string, _options?: Configuration): Promise<HttpInfo<Array<ConceptMinimal>>> {
        const result = this.api.getSynonymSourcesWithHttpInfo(terminology, _options);
        return result.toPromise();
    }

    /**
     * Get all synonym sources for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getSynonymSources(terminology: string, _options?: Configuration): Promise<Array<ConceptMinimal>> {
        const result = this.api.getSynonymSources(terminology, _options);
        return result.toPromise();
    }

    /**
     * Get the synonym type for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Synonym type code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P90\&#39; or \&#39;FULL_SYN\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;Preferred_Name\&#39; or \&#39;Preferred name\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSynonymTypeWithHttpInfo(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<HttpInfo<Concept>> {
        const result = this.api.getSynonymTypeWithHttpInfo(terminology, codeOrName, include, _options);
        return result.toPromise();
    }

    /**
     * Get the synonym type for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Synonym type code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P90\&#39; or \&#39;FULL_SYN\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;Preferred_Name\&#39; or \&#39;Preferred name\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSynonymType(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Promise<Concept> {
        const result = this.api.getSynonymType(terminology, codeOrName, include, _options);
        return result.toPromise();
    }

    /**
     * Get all synonym types (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return synonym types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getSynonymTypesWithHttpInfo(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        const result = this.api.getSynonymTypesWithHttpInfo(terminology, include, list, _options);
        return result.toPromise();
    }

    /**
     * Get all synonym types (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return synonym types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getSynonymTypes(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<Array<Concept>> {
        const result = this.api.getSynonymTypes(terminology, include, list, _options);
        return result.toPromise();
    }

    /**
     * Get all term types for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getTermTypesWithHttpInfo(terminology: string, _options?: Configuration): Promise<HttpInfo<Array<ConceptMinimal>>> {
        const result = this.api.getTermTypesWithHttpInfo(terminology, _options);
        return result.toPromise();
    }

    /**
     * Get all term types for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getTermTypes(terminology: string, _options?: Configuration): Promise<Array<ConceptMinimal>> {
        const result = this.api.getTermTypes(terminology, _options);
        return result.toPromise();
    }

    /**
     * Get all available terminologies
     * @param latest Return terminologies with matching &lt;i&gt;latest&lt;/i&gt; value. e.g. true or false
     * @param tag Return terminologies with matching tag. e.g. \&#39;monthly\&#39; or \&#39;weekly\&#39; for &lt;i&gt;ncit&lt;/i&gt;
     * @param terminology Return entries with matching terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getTerminologiesWithHttpInfo(latest?: boolean, tag?: string, terminology?: string, _options?: Configuration): Promise<HttpInfo<Array<Terminology>>> {
        const result = this.api.getTerminologiesWithHttpInfo(latest, tag, terminology, _options);
        return result.toPromise();
    }

    /**
     * Get all available terminologies
     * @param latest Return terminologies with matching &lt;i&gt;latest&lt;/i&gt; value. e.g. true or false
     * @param tag Return terminologies with matching tag. e.g. \&#39;monthly\&#39; or \&#39;weekly\&#39; for &lt;i&gt;ncit&lt;/i&gt;
     * @param terminology Return entries with matching terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getTerminologies(latest?: boolean, tag?: string, terminology?: string, _options?: Configuration): Promise<Array<Terminology>> {
        const result = this.api.getTerminologies(latest, tag, terminology, _options);
        return result.toPromise();
    }

    /**
     * Get welcome text for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getWelcomeTextWithHttpInfo(terminology: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.getWelcomeTextWithHttpInfo(terminology, _options);
        return result.toPromise();
    }

    /**
     * Get welcome text for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getWelcomeText(terminology: string, _options?: Configuration): Promise<string> {
        const result = this.api.getWelcomeText(terminology, _options);
        return result.toPromise();
    }


}



import { ObservableSearchEndpointApi } from './ObservableAPI';

import { SearchEndpointApiRequestFactory, SearchEndpointApiResponseProcessor} from "../apis/SearchEndpointApi";
export class PromiseSearchEndpointApi {
    private api: ObservableSearchEndpointApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchEndpointApiRequestFactory,
        responseProcessor?: SearchEndpointApiResponseProcessor
    ) {
        this.api = new ObservableSearchEndpointApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Perform a SPARQL query for a specified terminology.
     * Get SPARQL query results
     * @param terminology Single terminology to search, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param body SPARQL query to execute on the graph for the specified terminology. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/SPARQL.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for more information and examples of using SPARQL with EVSRESTAPI&lt;/a&gt;.
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSparqlBindingsWithHttpInfo(terminology: string, body: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<HttpInfo<MapResultList>> {
        const result = this.api.getSparqlBindingsWithHttpInfo(terminology, body, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
    }

    /**
     * Perform a SPARQL query for a specified terminology.
     * Get SPARQL query results
     * @param terminology Single terminology to search, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param body SPARQL query to execute on the graph for the specified terminology. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/SPARQL.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for more information and examples of using SPARQL with EVSRESTAPI&lt;/a&gt;.
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSparqlBindings(terminology: string, body: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Promise<MapResultList> {
        const result = this.api.getSparqlBindings(terminology, body, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options);
        return result.toPromise();
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
    public searchWithHttpInfo(xEVSRESTAPILicenseKey?: string, terminology?: string, term?: string, type?: string, sort?: string, ascending?: boolean, include?: string, fromRecord?: number, pageSize?: number, conceptStatus?: string, property?: string, value?: string, definitionSource?: string, definitionType?: string, synonymSource?: string, synonymType?: string, synonymTermType?: string, subset?: string, _options?: Configuration): Promise<HttpInfo<ConceptResultList>> {
        const result = this.api.searchWithHttpInfo(xEVSRESTAPILicenseKey, terminology, term, type, sort, ascending, include, fromRecord, pageSize, conceptStatus, property, value, definitionSource, definitionType, synonymSource, synonymType, synonymTermType, subset, _options);
        return result.toPromise();
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
    public search(xEVSRESTAPILicenseKey?: string, terminology?: string, term?: string, type?: string, sort?: string, ascending?: boolean, include?: string, fromRecord?: number, pageSize?: number, conceptStatus?: string, property?: string, value?: string, definitionSource?: string, definitionType?: string, synonymSource?: string, synonymType?: string, synonymTermType?: string, subset?: string, _options?: Configuration): Promise<ConceptResultList> {
        const result = this.api.search(xEVSRESTAPILicenseKey, terminology, term, type, sort, ascending, include, fromRecord, pageSize, conceptStatus, property, value, definitionSource, definitionType, synonymSource, synonymType, synonymTermType, subset, _options);
        return result.toPromise();
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
    public searchSingleTerminologyWithHttpInfo(terminology: string, xEVSRESTAPILicenseKey?: string, term?: string, type?: string, sort?: string, ascending?: boolean, include?: string, fromRecord?: number, pageSize?: number, conceptStatus?: string, property?: string, value?: string, definitionSource?: string, definitionType?: string, synonymSource?: string, synonymType?: string, synonymTermType?: string, subset?: string, _options?: Configuration): Promise<HttpInfo<ConceptResultList>> {
        const result = this.api.searchSingleTerminologyWithHttpInfo(terminology, xEVSRESTAPILicenseKey, term, type, sort, ascending, include, fromRecord, pageSize, conceptStatus, property, value, definitionSource, definitionType, synonymSource, synonymType, synonymTermType, subset, _options);
        return result.toPromise();
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
    public searchSingleTerminology(terminology: string, xEVSRESTAPILicenseKey?: string, term?: string, type?: string, sort?: string, ascending?: boolean, include?: string, fromRecord?: number, pageSize?: number, conceptStatus?: string, property?: string, value?: string, definitionSource?: string, definitionType?: string, synonymSource?: string, synonymType?: string, synonymTermType?: string, subset?: string, _options?: Configuration): Promise<ConceptResultList> {
        const result = this.api.searchSingleTerminology(terminology, xEVSRESTAPILicenseKey, term, type, sort, ascending, include, fromRecord, pageSize, conceptStatus, property, value, definitionSource, definitionType, synonymSource, synonymType, synonymTermType, subset, _options);
        return result.toPromise();
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
    public searchSingleTerminologySparqlWithHttpInfo(terminology: string, body: string, include?: string, xEVSRESTAPILicenseKey?: string, term?: string, type?: string, sort?: string, ascending?: boolean, fromRecord?: number, pageSize?: number, conceptStatus?: string, property?: string, value?: string, definitionSource?: string, definitionType?: string, synonymSource?: string, synonymType?: string, synonymTermType?: string, subset?: string, _options?: Configuration): Promise<HttpInfo<ConceptResultList>> {
        const result = this.api.searchSingleTerminologySparqlWithHttpInfo(terminology, body, include, xEVSRESTAPILicenseKey, term, type, sort, ascending, fromRecord, pageSize, conceptStatus, property, value, definitionSource, definitionType, synonymSource, synonymType, synonymTermType, subset, _options);
        return result.toPromise();
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
    public searchSingleTerminologySparql(terminology: string, body: string, include?: string, xEVSRESTAPILicenseKey?: string, term?: string, type?: string, sort?: string, ascending?: boolean, fromRecord?: number, pageSize?: number, conceptStatus?: string, property?: string, value?: string, definitionSource?: string, definitionType?: string, synonymSource?: string, synonymType?: string, synonymTermType?: string, subset?: string, _options?: Configuration): Promise<ConceptResultList> {
        const result = this.api.searchSingleTerminologySparql(terminology, body, include, xEVSRESTAPILicenseKey, term, type, sort, ascending, fromRecord, pageSize, conceptStatus, property, value, definitionSource, definitionType, synonymSource, synonymType, synonymTermType, subset, _options);
        return result.toPromise();
    }


}



import { ObservableSubsetEndpointsApi } from './ObservableAPI';

import { SubsetEndpointsApiRequestFactory, SubsetEndpointsApiResponseProcessor} from "../apis/SubsetEndpointsApi";
export class PromiseSubsetEndpointsApi {
    private api: ObservableSubsetEndpointsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SubsetEndpointsApiRequestFactory,
        responseProcessor?: SubsetEndpointsApiResponseProcessor
    ) {
        this.api = new ObservableSubsetEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the subset for the specified terminology and code.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.
     * @param code Subset code, e.g. \&#39;C116978\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubsetWithHttpInfo(terminology: string, code: string, include?: string, _options?: Configuration): Promise<HttpInfo<Concept>> {
        const result = this.api.getSubsetWithHttpInfo(terminology, code, include, _options);
        return result.toPromise();
    }

    /**
     * Get the subset for the specified terminology and code.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.
     * @param code Subset code, e.g. \&#39;C116978\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubset(terminology: string, code: string, include?: string, _options?: Configuration): Promise<Concept> {
        const result = this.api.getSubset(terminology, code, include, _options);
        return result.toPromise();
    }

    /**
     * Get subset members for the specified terminology and code. Concept subset endpoints will be deprecated in v2 in favor of top level subset endpoints.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code for a subset concept in the specified terminology, e.g. \&#39;C157225\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubsetMembersWithHttpInfo(terminology: string, code: string, fromRecord?: string, pageSize?: string, include?: string, _options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        const result = this.api.getSubsetMembersWithHttpInfo(terminology, code, fromRecord, pageSize, include, _options);
        return result.toPromise();
    }

    /**
     * Get subset members for the specified terminology and code. Concept subset endpoints will be deprecated in v2 in favor of top level subset endpoints.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code for a subset concept in the specified terminology, e.g. \&#39;C157225\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubsetMembers(terminology: string, code: string, fromRecord?: string, pageSize?: string, include?: string, _options?: Configuration): Promise<Array<Concept>> {
        const result = this.api.getSubsetMembers(terminology, code, fromRecord, pageSize, include, _options);
        return result.toPromise();
    }

    /**
     * Get all subsets (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getSubsetsWithHttpInfo(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        const result = this.api.getSubsetsWithHttpInfo(terminology, include, list, _options);
        return result.toPromise();
    }

    /**
     * Get all subsets (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getSubsets(terminology: string, include?: string, list?: string, _options?: Configuration): Promise<Array<Concept>> {
        const result = this.api.getSubsets(terminology, include, list, _options);
        return result.toPromise();
    }


}



