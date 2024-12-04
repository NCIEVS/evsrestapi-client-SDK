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

import { ObservableApplicationVersionEndpointApi } from "./ObservableAPI";
import { ApplicationVersionEndpointApiRequestFactory, ApplicationVersionEndpointApiResponseProcessor} from "../apis/ApplicationVersionEndpointApi";

export interface ApplicationVersionEndpointApiGetApplicationVersionRequest {
}

export interface ApplicationVersionEndpointApiRewriteUrlRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationVersionEndpointApirewriteUrl
     */
    url: string
}

export class ObjectApplicationVersionEndpointApi {
    private api: ObservableApplicationVersionEndpointApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationVersionEndpointApiRequestFactory, responseProcessor?: ApplicationVersionEndpointApiResponseProcessor) {
        this.api = new ObservableApplicationVersionEndpointApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the application version information
     * @param param the request object
     */
    public getApplicationVersionWithHttpInfo(param: ApplicationVersionEndpointApiGetApplicationVersionRequest = {}, options?: Configuration): Promise<HttpInfo<ApplicationVersion>> {
        return this.api.getApplicationVersionWithHttpInfo( options).toPromise();
    }

    /**
     * Get the application version information
     * @param param the request object
     */
    public getApplicationVersion(param: ApplicationVersionEndpointApiGetApplicationVersionRequest = {}, options?: Configuration): Promise<ApplicationVersion> {
        return this.api.getApplicationVersion( options).toPromise();
    }

    /**
     * Rewrite the specified LexEVS URL to EVS Explore
     * @param param the request object
     */
    public rewriteUrlWithHttpInfo(param: ApplicationVersionEndpointApiRewriteUrlRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.rewriteUrlWithHttpInfo(param.url,  options).toPromise();
    }

    /**
     * Rewrite the specified LexEVS URL to EVS Explore
     * @param param the request object
     */
    public rewriteUrl(param: ApplicationVersionEndpointApiRewriteUrlRequest, options?: Configuration): Promise<string> {
        return this.api.rewriteUrl(param.url,  options).toPromise();
    }

}

import { ObservableConceptEndpointsApi } from "./ObservableAPI";
import { ConceptEndpointsApiRequestFactory, ConceptEndpointsApiResponseProcessor} from "../apis/ConceptEndpointsApi";

export interface ConceptEndpointsApiGetAssociationEntriesRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;
     * @type string
     * @memberof ConceptEndpointsApigetAssociationEntries
     */
    terminology: string
    /**
     * Code/label in the specified terminology, e.g. \&#39;A5\&#39; or \&#39;Has_Salt_Form\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetAssociationEntries
     */
    codeOrLabel: string
    /**
     * Start index of the search results
     * @type number
     * @memberof ConceptEndpointsApigetAssociationEntries
     */
    fromRecord?: number
    /**
     * Max number of results to return
     * @type number
     * @memberof ConceptEndpointsApigetAssociationEntries
     */
    pageSize?: number
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetAssociationEntries
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetAssociations1Request {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof ConceptEndpointsApigetAssociations1
     */
    terminology: string
    /**
     * Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @type string
     * @memberof ConceptEndpointsApigetAssociations1
     */
    code: string
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetAssociations1
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetChildrenRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof ConceptEndpointsApigetChildren
     */
    terminology: string
    /**
     * Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @type string
     * @memberof ConceptEndpointsApigetChildren
     */
    code: string
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetChildren
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetConceptRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof ConceptEndpointsApigetConcept
     */
    terminology: string
    /**
     * Code in the specified terminology, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @type string
     * @memberof ConceptEndpointsApigetConcept
     */
    code: string
    /**
     * If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), elements of the concept should be limited to that specified number of entries. Thus a user interface can quickly retrieve initial data for a concept (even with &lt;i&gt;include&#x3D;full&lt;/i&gt;) and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @type number
     * @memberof ConceptEndpointsApigetConcept
     */
    limit?: number
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetConcept
     */
    include?: string
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetConcept
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetConceptsRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof ConceptEndpointsApigetConcepts
     */
    terminology: string
    /**
     * List (comma-separated) of codes to return concepts for, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C2291,C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0010137,C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @type string
     * @memberof ConceptEndpointsApigetConcepts
     */
    list: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetConcepts
     */
    include?: string
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetConcepts
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetDescendantsRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;\&#39;
     * @type string
     * @memberof ConceptEndpointsApigetDescendants
     */
    terminology: string
    /**
     * Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetDescendants
     */
    code: string
    /**
     * Start index of the search results
     * @type number
     * @memberof ConceptEndpointsApigetDescendants
     */
    fromRecord?: number
    /**
     * Max number of results to return
     * @type number
     * @memberof ConceptEndpointsApigetDescendants
     */
    pageSize?: number
    /**
     * Max level of results to return
     * @type number
     * @memberof ConceptEndpointsApigetDescendants
     */
    maxLevel?: number
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetDescendants
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetDisjointWithRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;
     * @type string
     * @memberof ConceptEndpointsApigetDisjointWith
     */
    terminology: string
    /**
     * Code in the specified terminology, e.g. \&#39;C3910\&#39; for &lt;i&gt;ncit&lt;/i&gt;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetDisjointWith
     */
    code: string
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetDisjointWith
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetHistoryRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;
     * @type string
     * @memberof ConceptEndpointsApigetHistory
     */
    terminology: string
    /**
     * Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt; and &lt;i&gt;ncim&lt;/i&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetHistory
     */
    code: string
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetHistory
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetInverseAssociationsRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof ConceptEndpointsApigetInverseAssociations
     */
    terminology: string
    /**
     * Code in the specified terminology, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @type string
     * @memberof ConceptEndpointsApigetInverseAssociations
     */
    code: string
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetInverseAssociations
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetInverseRolesRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;
     * @type string
     * @memberof ConceptEndpointsApigetInverseRoles
     */
    terminology: string
    /**
     * Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetInverseRoles
     */
    code: string
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetInverseRoles
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetMapsRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;
     * @type string
     * @memberof ConceptEndpointsApigetMaps
     */
    terminology: string
    /**
     * Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetMaps
     */
    code: string
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetMaps
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetParentsRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof ConceptEndpointsApigetParents
     */
    terminology: string
    /**
     * Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @type string
     * @memberof ConceptEndpointsApigetParents
     */
    code: string
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetParents
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetPathsFromRootRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;
     * @type string
     * @memberof ConceptEndpointsApigetPathsFromRoot
     */
    terminology: string
    /**
     * Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetPathsFromRoot
     */
    code: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than \&#39;minimal\&#39; may produce very large payload results. 
     * @type string
     * @memberof ConceptEndpointsApigetPathsFromRoot
     */
    include?: string
    /**
     * Start index of the search results
     * @type number
     * @memberof ConceptEndpointsApigetPathsFromRoot
     */
    fromRecord?: number
    /**
     * Max number of results to return
     * @type number
     * @memberof ConceptEndpointsApigetPathsFromRoot
     */
    pageSize?: number
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetPathsFromRoot
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetPathsToAncestorRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;
     * @type string
     * @memberof ConceptEndpointsApigetPathsToAncestor
     */
    terminology: string
    /**
     * Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetPathsToAncestor
     */
    code: string
    /**
     * Ancestor code of the other specified code, e.g. \&#39;C2991\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetPathsToAncestor
     */
    ancestorCode: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than \&#39;minimal\&#39; may produce very large payload results. 
     * @type string
     * @memberof ConceptEndpointsApigetPathsToAncestor
     */
    include?: string
    /**
     * Start index of the search results
     * @type number
     * @memberof ConceptEndpointsApigetPathsToAncestor
     */
    fromRecord?: number
    /**
     * Max number of results to return
     * @type number
     * @memberof ConceptEndpointsApigetPathsToAncestor
     */
    pageSize?: number
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetPathsToAncestor
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetPathsToRootRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;
     * @type string
     * @memberof ConceptEndpointsApigetPathsToRoot
     */
    terminology: string
    /**
     * Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetPathsToRoot
     */
    code: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than \&#39;minimal\&#39; may produce very large payload results. 
     * @type string
     * @memberof ConceptEndpointsApigetPathsToRoot
     */
    include?: string
    /**
     * Start index of the search results
     * @type number
     * @memberof ConceptEndpointsApigetPathsToRoot
     */
    fromRecord?: number
    /**
     * Max number of results to return
     * @type number
     * @memberof ConceptEndpointsApigetPathsToRoot
     */
    pageSize?: number
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetPathsToRoot
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetRoles1Request {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;
     * @type string
     * @memberof ConceptEndpointsApigetRoles1
     */
    terminology: string
    /**
     * Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetRoles1
     */
    code: string
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetRoles1
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetRootsRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetRoots
     */
    terminology: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetRoots
     */
    include?: string
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetRoots
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetSubsetMembers1Request {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;
     * @type string
     * @memberof ConceptEndpointsApigetSubsetMembers1
     */
    terminology: string
    /**
     * Code for a subset concept in the specified terminology, e.g. \&#39;C157225\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetSubsetMembers1
     */
    code: string
    /**
     * Start index of the search results
     * @type number
     * @memberof ConceptEndpointsApigetSubsetMembers1
     */
    fromRecord?: number
    /**
     * Max number of results to return
     * @type number
     * @memberof ConceptEndpointsApigetSubsetMembers1
     */
    pageSize?: number
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetSubsetMembers1
     */
    include?: string
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetSubsetMembers1
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetSubtreeRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;
     * @type string
     * @memberof ConceptEndpointsApigetSubtree
     */
    terminology: string
    /**
     * Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetSubtree
     */
    code: string
    /**
     * If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), subtrees and siblings at each level will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @type number
     * @memberof ConceptEndpointsApigetSubtree
     */
    limit?: number
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetSubtree
     */
    xEVSRESTAPILicenseKey?: string
}

export interface ConceptEndpointsApiGetSubtreeChildrenRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;
     * @type string
     * @memberof ConceptEndpointsApigetSubtreeChildren
     */
    terminology: string
    /**
     * Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetSubtreeChildren
     */
    code: string
    /**
     * If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), children will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @type number
     * @memberof ConceptEndpointsApigetSubtreeChildren
     */
    limit?: number
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof ConceptEndpointsApigetSubtreeChildren
     */
    xEVSRESTAPILicenseKey?: string
}

export class ObjectConceptEndpointsApi {
    private api: ObservableConceptEndpointsApi

    public constructor(configuration: Configuration, requestFactory?: ConceptEndpointsApiRequestFactory, responseProcessor?: ConceptEndpointsApiResponseProcessor) {
        this.api = new ObservableConceptEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the association entries for the specified terminology and code. Associations used to define subset membership are not resolved by this call
     * @param param the request object
     */
    public getAssociationEntriesWithHttpInfo(param: ConceptEndpointsApiGetAssociationEntriesRequest, options?: Configuration): Promise<HttpInfo<AssociationEntryResultList>> {
        return this.api.getAssociationEntriesWithHttpInfo(param.terminology, param.codeOrLabel, param.fromRecord, param.pageSize, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get the association entries for the specified terminology and code. Associations used to define subset membership are not resolved by this call
     * @param param the request object
     */
    public getAssociationEntries(param: ConceptEndpointsApiGetAssociationEntriesRequest, options?: Configuration): Promise<AssociationEntryResultList> {
        return this.api.getAssociationEntries(param.terminology, param.codeOrLabel, param.fromRecord, param.pageSize, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get the associations for the specified terminology and code
     * @param param the request object
     */
    public getAssociations1WithHttpInfo(param: ConceptEndpointsApiGetAssociations1Request, options?: Configuration): Promise<HttpInfo<Array<Association>>> {
        return this.api.getAssociations1WithHttpInfo(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get the associations for the specified terminology and code
     * @param param the request object
     */
    public getAssociations1(param: ConceptEndpointsApiGetAssociations1Request, options?: Configuration): Promise<Array<Association>> {
        return this.api.getAssociations1(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get child concepts for the specified terminology and code
     * @param param the request object
     */
    public getChildrenWithHttpInfo(param: ConceptEndpointsApiGetChildrenRequest, options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        return this.api.getChildrenWithHttpInfo(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get child concepts for the specified terminology and code
     * @param param the request object
     */
    public getChildren(param: ConceptEndpointsApiGetChildrenRequest, options?: Configuration): Promise<Array<Concept>> {
        return this.api.getChildren(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get the concept for the specified terminology and code
     * @param param the request object
     */
    public getConceptWithHttpInfo(param: ConceptEndpointsApiGetConceptRequest, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getConceptWithHttpInfo(param.terminology, param.code, param.limit, param.include, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get the concept for the specified terminology and code
     * @param param the request object
     */
    public getConcept(param: ConceptEndpointsApiGetConceptRequest, options?: Configuration): Promise<Concept> {
        return this.api.getConcept(param.terminology, param.code, param.limit, param.include, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get concepts specified by list parameter
     * @param param the request object
     */
    public getConceptsWithHttpInfo(param: ConceptEndpointsApiGetConceptsRequest, options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        return this.api.getConceptsWithHttpInfo(param.terminology, param.list, param.include, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get concepts specified by list parameter
     * @param param the request object
     */
    public getConcepts(param: ConceptEndpointsApiGetConceptsRequest, options?: Configuration): Promise<Array<Concept>> {
        return this.api.getConcepts(param.terminology, param.list, param.include, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get descendant concepts for the specified terminology and code
     * @param param the request object
     */
    public getDescendantsWithHttpInfo(param: ConceptEndpointsApiGetDescendantsRequest, options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        return this.api.getDescendantsWithHttpInfo(param.terminology, param.code, param.fromRecord, param.pageSize, param.maxLevel, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get descendant concepts for the specified terminology and code
     * @param param the request object
     */
    public getDescendants(param: ConceptEndpointsApiGetDescendantsRequest, options?: Configuration): Promise<Array<Concept>> {
        return this.api.getDescendants(param.terminology, param.code, param.fromRecord, param.pageSize, param.maxLevel, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get \"disjoint with\" info for the specified terminology and code
     * @param param the request object
     */
    public getDisjointWithWithHttpInfo(param: ConceptEndpointsApiGetDisjointWithRequest, options?: Configuration): Promise<HttpInfo<Array<DisjointWith>>> {
        return this.api.getDisjointWithWithHttpInfo(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get \"disjoint with\" info for the specified terminology and code
     * @param param the request object
     */
    public getDisjointWith(param: ConceptEndpointsApiGetDisjointWithRequest, options?: Configuration): Promise<Array<DisjointWith>> {
        return this.api.getDisjointWith(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get history for the specified terminology and code
     * @param param the request object
     */
    public getHistoryWithHttpInfo(param: ConceptEndpointsApiGetHistoryRequest, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getHistoryWithHttpInfo(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get history for the specified terminology and code
     * @param param the request object
     */
    public getHistory(param: ConceptEndpointsApiGetHistoryRequest, options?: Configuration): Promise<Concept> {
        return this.api.getHistory(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get inverse associations for the specified terminology and code
     * @param param the request object
     */
    public getInverseAssociationsWithHttpInfo(param: ConceptEndpointsApiGetInverseAssociationsRequest, options?: Configuration): Promise<HttpInfo<Array<Association>>> {
        return this.api.getInverseAssociationsWithHttpInfo(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get inverse associations for the specified terminology and code
     * @param param the request object
     */
    public getInverseAssociations(param: ConceptEndpointsApiGetInverseAssociationsRequest, options?: Configuration): Promise<Array<Association>> {
        return this.api.getInverseAssociations(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get inverse roles for the specified terminology and code
     * @param param the request object
     */
    public getInverseRolesWithHttpInfo(param: ConceptEndpointsApiGetInverseRolesRequest, options?: Configuration): Promise<HttpInfo<Array<Role>>> {
        return this.api.getInverseRolesWithHttpInfo(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get inverse roles for the specified terminology and code
     * @param param the request object
     */
    public getInverseRoles(param: ConceptEndpointsApiGetInverseRolesRequest, options?: Configuration): Promise<Array<Role>> {
        return this.api.getInverseRoles(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get maps for the specified terminology and code
     * @param param the request object
     */
    public getMapsWithHttpInfo(param: ConceptEndpointsApiGetMapsRequest, options?: Configuration): Promise<HttpInfo<Array<ConceptMap>>> {
        return this.api.getMapsWithHttpInfo(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get maps for the specified terminology and code
     * @param param the request object
     */
    public getMaps(param: ConceptEndpointsApiGetMapsRequest, options?: Configuration): Promise<Array<ConceptMap>> {
        return this.api.getMaps(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get parent concepts for the specified terminology and code
     * @param param the request object
     */
    public getParentsWithHttpInfo(param: ConceptEndpointsApiGetParentsRequest, options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        return this.api.getParentsWithHttpInfo(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get parent concepts for the specified terminology and code
     * @param param the request object
     */
    public getParents(param: ConceptEndpointsApiGetParentsRequest, options?: Configuration): Promise<Array<Concept>> {
        return this.api.getParents(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get paths from the hierarchy root to the specified concept.
     * @param param the request object
     */
    public getPathsFromRootWithHttpInfo(param: ConceptEndpointsApiGetPathsFromRootRequest, options?: Configuration): Promise<HttpInfo<Array<Array<Concept>>>> {
        return this.api.getPathsFromRootWithHttpInfo(param.terminology, param.code, param.include, param.fromRecord, param.pageSize, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get paths from the hierarchy root to the specified concept.
     * @param param the request object
     */
    public getPathsFromRoot(param: ConceptEndpointsApiGetPathsFromRootRequest, options?: Configuration): Promise<Array<Array<Concept>>> {
        return this.api.getPathsFromRoot(param.terminology, param.code, param.include, param.fromRecord, param.pageSize, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get paths from the specified code to the specified ancestor code
     * @param param the request object
     */
    public getPathsToAncestorWithHttpInfo(param: ConceptEndpointsApiGetPathsToAncestorRequest, options?: Configuration): Promise<HttpInfo<Array<Array<Concept>>>> {
        return this.api.getPathsToAncestorWithHttpInfo(param.terminology, param.code, param.ancestorCode, param.include, param.fromRecord, param.pageSize, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get paths from the specified code to the specified ancestor code
     * @param param the request object
     */
    public getPathsToAncestor(param: ConceptEndpointsApiGetPathsToAncestorRequest, options?: Configuration): Promise<Array<Array<Concept>>> {
        return this.api.getPathsToAncestor(param.terminology, param.code, param.ancestorCode, param.include, param.fromRecord, param.pageSize, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get paths to the hierarchy root from the specified code
     * @param param the request object
     */
    public getPathsToRootWithHttpInfo(param: ConceptEndpointsApiGetPathsToRootRequest, options?: Configuration): Promise<HttpInfo<Array<Array<Concept>>>> {
        return this.api.getPathsToRootWithHttpInfo(param.terminology, param.code, param.include, param.fromRecord, param.pageSize, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get paths to the hierarchy root from the specified code
     * @param param the request object
     */
    public getPathsToRoot(param: ConceptEndpointsApiGetPathsToRootRequest, options?: Configuration): Promise<Array<Array<Concept>>> {
        return this.api.getPathsToRoot(param.terminology, param.code, param.include, param.fromRecord, param.pageSize, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get roles for the specified terminology and code
     * @param param the request object
     */
    public getRoles1WithHttpInfo(param: ConceptEndpointsApiGetRoles1Request, options?: Configuration): Promise<HttpInfo<Array<Role>>> {
        return this.api.getRoles1WithHttpInfo(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get roles for the specified terminology and code
     * @param param the request object
     */
    public getRoles1(param: ConceptEndpointsApiGetRoles1Request, options?: Configuration): Promise<Array<Role>> {
        return this.api.getRoles1(param.terminology, param.code, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get root concepts for the specified terminology
     * @param param the request object
     */
    public getRootsWithHttpInfo(param: ConceptEndpointsApiGetRootsRequest, options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        return this.api.getRootsWithHttpInfo(param.terminology, param.include, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get root concepts for the specified terminology
     * @param param the request object
     */
    public getRoots(param: ConceptEndpointsApiGetRootsRequest, options?: Configuration): Promise<Array<Concept>> {
        return this.api.getRoots(param.terminology, param.include, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * This endpoint will be deprecated in v2 in favor of a top level subset member endpoint.
     * Get subset members for the specified terminology and code.
     * @param param the request object
     */
    public getSubsetMembers1WithHttpInfo(param: ConceptEndpointsApiGetSubsetMembers1Request, options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        return this.api.getSubsetMembers1WithHttpInfo(param.terminology, param.code, param.fromRecord, param.pageSize, param.include, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * This endpoint will be deprecated in v2 in favor of a top level subset member endpoint.
     * Get subset members for the specified terminology and code.
     * @param param the request object
     */
    public getSubsetMembers1(param: ConceptEndpointsApiGetSubsetMembers1Request, options?: Configuration): Promise<Array<Concept>> {
        return this.api.getSubsetMembers1(param.terminology, param.code, param.fromRecord, param.pageSize, param.include, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get the entire subtree from the root node to the specified code
     * @param param the request object
     */
    public getSubtreeWithHttpInfo(param: ConceptEndpointsApiGetSubtreeRequest, options?: Configuration): Promise<HttpInfo<Array<HierarchyNode>>> {
        return this.api.getSubtreeWithHttpInfo(param.terminology, param.code, param.limit, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get the entire subtree from the root node to the specified code
     * @param param the request object
     */
    public getSubtree(param: ConceptEndpointsApiGetSubtreeRequest, options?: Configuration): Promise<Array<HierarchyNode>> {
        return this.api.getSubtree(param.terminology, param.code, param.limit, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get the entire subtree from the root node to the specified code
     * @param param the request object
     */
    public getSubtreeChildrenWithHttpInfo(param: ConceptEndpointsApiGetSubtreeChildrenRequest, options?: Configuration): Promise<HttpInfo<Array<HierarchyNode>>> {
        return this.api.getSubtreeChildrenWithHttpInfo(param.terminology, param.code, param.limit, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Get the entire subtree from the root node to the specified code
     * @param param the request object
     */
    public getSubtreeChildren(param: ConceptEndpointsApiGetSubtreeChildrenRequest, options?: Configuration): Promise<Array<HierarchyNode>> {
        return this.api.getSubtreeChildren(param.terminology, param.code, param.limit, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

}

import { ObservableHistoryEndpointsApi } from "./ObservableAPI";
import { HistoryEndpointsApiRequestFactory, HistoryEndpointsApiResponseProcessor} from "../apis/HistoryEndpointsApi";

export interface HistoryEndpointsApiGetReplacementsRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof HistoryEndpointsApigetReplacements
     */
    terminology: string
    /**
     * Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C4654\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0000733\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;.
     * @type string
     * @memberof HistoryEndpointsApigetReplacements
     */
    code: string
}

export interface HistoryEndpointsApiGetReplacementsFromListRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof HistoryEndpointsApigetReplacementsFromList
     */
    terminology: string
    /**
     * Comma-separated list of codes, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C4654,C40117\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0000733,C3551741\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;.
     * @type string
     * @memberof HistoryEndpointsApigetReplacementsFromList
     */
    list: string
}

export class ObjectHistoryEndpointsApi {
    private api: ObservableHistoryEndpointsApi

    public constructor(configuration: Configuration, requestFactory?: HistoryEndpointsApiRequestFactory, responseProcessor?: HistoryEndpointsApiResponseProcessor) {
        this.api = new ObservableHistoryEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets suggested replacements for a specified terminology and retired code. Active codes will return entries as well with an action of \"active\".
     * @param param the request object
     */
    public getReplacementsWithHttpInfo(param: HistoryEndpointsApiGetReplacementsRequest, options?: Configuration): Promise<HttpInfo<Array<History>>> {
        return this.api.getReplacementsWithHttpInfo(param.terminology, param.code,  options).toPromise();
    }

    /**
     * Gets suggested replacements for a specified terminology and retired code. Active codes will return entries as well with an action of \"active\".
     * @param param the request object
     */
    public getReplacements(param: HistoryEndpointsApiGetReplacementsRequest, options?: Configuration): Promise<Array<History>> {
        return this.api.getReplacements(param.terminology, param.code,  options).toPromise();
    }

    /**
     * Gets suggested replacements for a specified terminology and a comma-separated list of retired codes.  Active codes will return entries as well with an action of \"active\".
     * @param param the request object
     */
    public getReplacementsFromListWithHttpInfo(param: HistoryEndpointsApiGetReplacementsFromListRequest, options?: Configuration): Promise<HttpInfo<Array<History>>> {
        return this.api.getReplacementsFromListWithHttpInfo(param.terminology, param.list,  options).toPromise();
    }

    /**
     * Gets suggested replacements for a specified terminology and a comma-separated list of retired codes.  Active codes will return entries as well with an action of \"active\".
     * @param param the request object
     */
    public getReplacementsFromList(param: HistoryEndpointsApiGetReplacementsFromListRequest, options?: Configuration): Promise<Array<History>> {
        return this.api.getReplacementsFromList(param.terminology, param.list,  options).toPromise();
    }

}

import { ObservableMapsetEndpointsApi } from "./ObservableAPI";
import { MapsetEndpointsApiRequestFactory, MapsetEndpointsApiResponseProcessor} from "../apis/MapsetEndpointsApi";

export interface MapsetEndpointsApiGetMapsetByCodeRequest {
    /**
     * Mapset code
     * @type string
     * @memberof MapsetEndpointsApigetMapsetByCode
     */
    code: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof MapsetEndpointsApigetMapsetByCode
     */
    include?: string
}

export interface MapsetEndpointsApiGetMapsetMappingsByCodeRequest {
    /**
     * Mapset code
     * @type string
     * @memberof MapsetEndpointsApigetMapsetMappingsByCode
     */
    code: string
    /**
     * The term, phrase, or code to be searched, e.g. \&#39;melanoma\&#39;
     * @type string
     * @memberof MapsetEndpointsApigetMapsetMappingsByCode
     */
    term?: string
    /**
     * Start index of the search results
     * @type number
     * @memberof MapsetEndpointsApigetMapsetMappingsByCode
     */
    fromRecord?: number
    /**
     * Max number of results to return
     * @type number
     * @memberof MapsetEndpointsApigetMapsetMappingsByCode
     */
    pageSize?: number
    /**
     * The search parameter to sort results by
     * @type string
     * @memberof MapsetEndpointsApigetMapsetMappingsByCode
     */
    sort?: string
    /**
     * Sort ascending (if true) or descending (if false)
     * @type boolean
     * @memberof MapsetEndpointsApigetMapsetMappingsByCode
     */
    ascending?: boolean
}

export interface MapsetEndpointsApiGetMapsetsRequest {
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof MapsetEndpointsApigetMapsets
     */
    include?: string
}

export class ObjectMapsetEndpointsApi {
    private api: ObservableMapsetEndpointsApi

    public constructor(configuration: Configuration, requestFactory?: MapsetEndpointsApiRequestFactory, responseProcessor?: MapsetEndpointsApiResponseProcessor) {
        this.api = new ObservableMapsetEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the mapset for the specified code (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * @param param the request object
     */
    public getMapsetByCodeWithHttpInfo(param: MapsetEndpointsApiGetMapsetByCodeRequest, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getMapsetByCodeWithHttpInfo(param.code, param.include,  options).toPromise();
    }

    /**
     * Get the mapset for the specified code (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * @param param the request object
     */
    public getMapsetByCode(param: MapsetEndpointsApiGetMapsetByCodeRequest, options?: Configuration): Promise<Concept> {
        return this.api.getMapsetByCode(param.code, param.include,  options).toPromise();
    }

    /**
     * Get the maps for the mapset specified by the code (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * @param param the request object
     */
    public getMapsetMappingsByCodeWithHttpInfo(param: MapsetEndpointsApiGetMapsetMappingsByCodeRequest, options?: Configuration): Promise<HttpInfo<ConceptMapResultList>> {
        return this.api.getMapsetMappingsByCodeWithHttpInfo(param.code, param.term, param.fromRecord, param.pageSize, param.sort, param.ascending,  options).toPromise();
    }

    /**
     * Get the maps for the mapset specified by the code (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * @param param the request object
     */
    public getMapsetMappingsByCode(param: MapsetEndpointsApiGetMapsetMappingsByCodeRequest, options?: Configuration): Promise<ConceptMapResultList> {
        return this.api.getMapsetMappingsByCode(param.code, param.term, param.fromRecord, param.pageSize, param.sort, param.ascending,  options).toPromise();
    }

    /**
     * Get all mapsets (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * @param param the request object
     */
    public getMapsetsWithHttpInfo(param: MapsetEndpointsApiGetMapsetsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        return this.api.getMapsetsWithHttpInfo(param.include,  options).toPromise();
    }

    /**
     * Get all mapsets (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * @param param the request object
     */
    public getMapsets(param: MapsetEndpointsApiGetMapsetsRequest = {}, options?: Configuration): Promise<Array<Concept>> {
        return this.api.getMapsets(param.include,  options).toPromise();
    }

}

import { ObservableMetadataEndpointsApi } from "./ObservableAPI";
import { MetadataEndpointsApiRequestFactory, MetadataEndpointsApiResponseProcessor} from "../apis/MetadataEndpointsApi";

export interface MetadataEndpointsApiGetAssociationRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof MetadataEndpointsApigetAssociation
     */
    terminology: string
    /**
     * Association code (or name), e.g. &lt;ul&gt;&lt;li&gt;\&#39;A10\&#39; or \&#39;Has_CDRH_Parent\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RB\&#39; or \&#39;has a broader relationship\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @type string
     * @memberof MetadataEndpointsApigetAssociation
     */
    codeOrName: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetAssociation
     */
    include?: string
}

export interface MetadataEndpointsApiGetAssociationsRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof MetadataEndpointsApigetAssociations
     */
    terminology: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetAssociations
     */
    include?: string
    /**
     * List of codes or labels to return associations for (or leave blank for all). If invalid values are passed, the result will simply include no entries for those invalid values.
     * @type string
     * @memberof MetadataEndpointsApigetAssociations
     */
    list?: string
}

export interface MetadataEndpointsApiGetConceptStatusesRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetConceptStatuses
     */
    terminology: string
}

export interface MetadataEndpointsApiGetDefinitionSourcesRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof MetadataEndpointsApigetDefinitionSources
     */
    terminology: string
}

export interface MetadataEndpointsApiGetDefinitionTypeRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof MetadataEndpointsApigetDefinitionType
     */
    terminology: string
    /**
     * Definition type code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P325\&#39; or \&#39;DEFINITION\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;DEFINITION\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @type string
     * @memberof MetadataEndpointsApigetDefinitionType
     */
    codeOrName: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetDefinitionType
     */
    include?: string
}

export interface MetadataEndpointsApiGetDefinitionTypesRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof MetadataEndpointsApigetDefinitionTypes
     */
    terminology: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetDefinitionTypes
     */
    include?: string
    /**
     * List of codes or labels to return definition types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     * @type string
     * @memberof MetadataEndpointsApigetDefinitionTypes
     */
    list?: string
}

export interface MetadataEndpointsApiGetPropertiesRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof MetadataEndpointsApigetProperties
     */
    terminology: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetProperties
     */
    include?: string
    /**
     * List of codes or labels to return properties for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     * @type string
     * @memberof MetadataEndpointsApigetProperties
     */
    list?: string
}

export interface MetadataEndpointsApiGetPropertyRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof MetadataEndpointsApigetProperty
     */
    terminology: string
    /**
     * Property code (or name), e.g. &lt;ul&gt;&lt;li&gt;\&#39;P216\&#39; or \&#39;BioCarta_ID\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;BioCarta_ID\&#39; or \&#39;\&#39;BioCarta ID\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @type string
     * @memberof MetadataEndpointsApigetProperty
     */
    codeOrName: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetProperty
     */
    include?: string
}

export interface MetadataEndpointsApiGetQualifierRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof MetadataEndpointsApigetQualifier
     */
    terminology: string
    /**
     * Qualifier code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P390\&#39; or \&#39;go-source\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RG\&#39; or \&#39;Relationship group\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @type string
     * @memberof MetadataEndpointsApigetQualifier
     */
    codeOrName: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetQualifier
     */
    include?: string
}

export interface MetadataEndpointsApiGetQualifierValuesRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof MetadataEndpointsApigetQualifierValues
     */
    terminology: string
    /**
     * Qualifier code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P390\&#39; or \&#39;go-source\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RG\&#39; or \&#39;Relationship group\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @type string
     * @memberof MetadataEndpointsApigetQualifierValues
     */
    codeOrName: string
}

export interface MetadataEndpointsApiGetQualifiersRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof MetadataEndpointsApigetQualifiers
     */
    terminology: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetQualifiers
     */
    include?: string
    /**
     * List of codes or labels to return qualifiers for (or leave blank for all)
     * @type string
     * @memberof MetadataEndpointsApigetQualifiers
     */
    list?: string
}

export interface MetadataEndpointsApiGetRoleRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;
     * @type string
     * @memberof MetadataEndpointsApigetRole
     */
    terminology: string
    /**
     * Role code (or name), e.g. \&#39;R123\&#39; or \&#39;Chemotherapy_Regimen_Has_Component\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetRole
     */
    codeOrName: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetRole
     */
    include?: string
}

export interface MetadataEndpointsApiGetRolesRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetRoles
     */
    terminology: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetRoles
     */
    include?: string
    /**
     * List of codes or labels to return roles for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     * @type string
     * @memberof MetadataEndpointsApigetRoles
     */
    list?: string
}

export interface MetadataEndpointsApiGetSourceStatsRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;.
     * @type string
     * @memberof MetadataEndpointsApigetSourceStats
     */
    terminology: string
    /**
     * terminology source code, e.g. \&#39;LNC\&#39; for &lt;i&gt;ncim&lt;/i&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetSourceStats
     */
    source: string
}

export interface MetadataEndpointsApiGetSubset1Request {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;.
     * @type string
     * @memberof MetadataEndpointsApigetSubset1
     */
    terminology: string
    /**
     * Subset code, e.g. \&#39;C116978\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetSubset1
     */
    code: string
    /**
     * Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetSubset1
     */
    include?: string
}

export interface MetadataEndpointsApiGetSubsets1Request {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetSubsets1
     */
    terminology: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetSubsets1
     */
    include?: string
    /**
     * List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     * @type string
     * @memberof MetadataEndpointsApigetSubsets1
     */
    list?: string
}

export interface MetadataEndpointsApiGetSynonymSourcesRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof MetadataEndpointsApigetSynonymSources
     */
    terminology: string
}

export interface MetadataEndpointsApiGetSynonymTypeRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof MetadataEndpointsApigetSynonymType
     */
    terminology: string
    /**
     * Synonym type code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P90\&#39; or \&#39;FULL_SYN\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;Preferred_Name\&#39; or \&#39;Preferred name\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @type string
     * @memberof MetadataEndpointsApigetSynonymType
     */
    codeOrName: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetSynonymType
     */
    include?: string
}

export interface MetadataEndpointsApiGetSynonymTypesRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof MetadataEndpointsApigetSynonymTypes
     */
    terminology: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof MetadataEndpointsApigetSynonymTypes
     */
    include?: string
    /**
     * List of codes or labels to return synonym types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     * @type string
     * @memberof MetadataEndpointsApigetSynonymTypes
     */
    list?: string
}

export interface MetadataEndpointsApiGetTermTypesRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof MetadataEndpointsApigetTermTypes
     */
    terminology: string
}

export interface MetadataEndpointsApiGetTerminologiesRequest {
    /**
     * Return terminologies with matching &lt;i&gt;latest&lt;/i&gt; value. e.g. true or false
     * @type boolean
     * @memberof MetadataEndpointsApigetTerminologies
     */
    latest?: boolean
    /**
     * Return terminologies with matching tag. e.g. \&#39;monthly\&#39; or \&#39;weekly\&#39; for &lt;i&gt;ncit&lt;/i&gt;
     * @type string
     * @memberof MetadataEndpointsApigetTerminologies
     */
    tag?: string
    /**
     * Return entries with matching terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof MetadataEndpointsApigetTerminologies
     */
    terminology?: string
}

export interface MetadataEndpointsApiGetWelcomeTextRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof MetadataEndpointsApigetWelcomeText
     */
    terminology: string
}

export class ObjectMetadataEndpointsApi {
    private api: ObservableMetadataEndpointsApi

    public constructor(configuration: Configuration, requestFactory?: MetadataEndpointsApiRequestFactory, responseProcessor?: MetadataEndpointsApiResponseProcessor) {
        this.api = new ObservableMetadataEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the association for the specified terminology and code/name
     * @param param the request object
     */
    public getAssociationWithHttpInfo(param: MetadataEndpointsApiGetAssociationRequest, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getAssociationWithHttpInfo(param.terminology, param.codeOrName, param.include,  options).toPromise();
    }

    /**
     * Get the association for the specified terminology and code/name
     * @param param the request object
     */
    public getAssociation(param: MetadataEndpointsApiGetAssociationRequest, options?: Configuration): Promise<Concept> {
        return this.api.getAssociation(param.terminology, param.codeOrName, param.include,  options).toPromise();
    }

    /**
     * Get all associations (or those specified by list parameter) for the specified terminology
     * @param param the request object
     */
    public getAssociationsWithHttpInfo(param: MetadataEndpointsApiGetAssociationsRequest, options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        return this.api.getAssociationsWithHttpInfo(param.terminology, param.include, param.list,  options).toPromise();
    }

    /**
     * Get all associations (or those specified by list parameter) for the specified terminology
     * @param param the request object
     */
    public getAssociations(param: MetadataEndpointsApiGetAssociationsRequest, options?: Configuration): Promise<Array<Concept>> {
        return this.api.getAssociations(param.terminology, param.include, param.list,  options).toPromise();
    }

    /**
     * Get all concept status values for the specified terminology
     * @param param the request object
     */
    public getConceptStatusesWithHttpInfo(param: MetadataEndpointsApiGetConceptStatusesRequest, options?: Configuration): Promise<HttpInfo<Array<string>>> {
        return this.api.getConceptStatusesWithHttpInfo(param.terminology,  options).toPromise();
    }

    /**
     * Get all concept status values for the specified terminology
     * @param param the request object
     */
    public getConceptStatuses(param: MetadataEndpointsApiGetConceptStatusesRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.getConceptStatuses(param.terminology,  options).toPromise();
    }

    /**
     * Get all definition sources for the specified terminology
     * @param param the request object
     */
    public getDefinitionSourcesWithHttpInfo(param: MetadataEndpointsApiGetDefinitionSourcesRequest, options?: Configuration): Promise<HttpInfo<Array<ConceptMinimal>>> {
        return this.api.getDefinitionSourcesWithHttpInfo(param.terminology,  options).toPromise();
    }

    /**
     * Get all definition sources for the specified terminology
     * @param param the request object
     */
    public getDefinitionSources(param: MetadataEndpointsApiGetDefinitionSourcesRequest, options?: Configuration): Promise<Array<ConceptMinimal>> {
        return this.api.getDefinitionSources(param.terminology,  options).toPromise();
    }

    /**
     * Get the definition type for the specified terminology and code/name.
     * @param param the request object
     */
    public getDefinitionTypeWithHttpInfo(param: MetadataEndpointsApiGetDefinitionTypeRequest, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getDefinitionTypeWithHttpInfo(param.terminology, param.codeOrName, param.include,  options).toPromise();
    }

    /**
     * Get the definition type for the specified terminology and code/name.
     * @param param the request object
     */
    public getDefinitionType(param: MetadataEndpointsApiGetDefinitionTypeRequest, options?: Configuration): Promise<Concept> {
        return this.api.getDefinitionType(param.terminology, param.codeOrName, param.include,  options).toPromise();
    }

    /**
     * Get all definition types (or those specified by list parameter) for the specified terminology
     * @param param the request object
     */
    public getDefinitionTypesWithHttpInfo(param: MetadataEndpointsApiGetDefinitionTypesRequest, options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        return this.api.getDefinitionTypesWithHttpInfo(param.terminology, param.include, param.list,  options).toPromise();
    }

    /**
     * Get all definition types (or those specified by list parameter) for the specified terminology
     * @param param the request object
     */
    public getDefinitionTypes(param: MetadataEndpointsApiGetDefinitionTypesRequest, options?: Configuration): Promise<Array<Concept>> {
        return this.api.getDefinitionTypes(param.terminology, param.include, param.list,  options).toPromise();
    }

    /**
     * Get all properties (or those specified by list parameter) for the specified terminology
     * @param param the request object
     */
    public getPropertiesWithHttpInfo(param: MetadataEndpointsApiGetPropertiesRequest, options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        return this.api.getPropertiesWithHttpInfo(param.terminology, param.include, param.list,  options).toPromise();
    }

    /**
     * Get all properties (or those specified by list parameter) for the specified terminology
     * @param param the request object
     */
    public getProperties(param: MetadataEndpointsApiGetPropertiesRequest, options?: Configuration): Promise<Array<Concept>> {
        return this.api.getProperties(param.terminology, param.include, param.list,  options).toPromise();
    }

    /**
     * Get the property for the specified terminology and code/name
     * @param param the request object
     */
    public getPropertyWithHttpInfo(param: MetadataEndpointsApiGetPropertyRequest, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getPropertyWithHttpInfo(param.terminology, param.codeOrName, param.include,  options).toPromise();
    }

    /**
     * Get the property for the specified terminology and code/name
     * @param param the request object
     */
    public getProperty(param: MetadataEndpointsApiGetPropertyRequest, options?: Configuration): Promise<Concept> {
        return this.api.getProperty(param.terminology, param.codeOrName, param.include,  options).toPromise();
    }

    /**
     * Get the qualifier for the specified terminology and code/name
     * @param param the request object
     */
    public getQualifierWithHttpInfo(param: MetadataEndpointsApiGetQualifierRequest, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getQualifierWithHttpInfo(param.terminology, param.codeOrName, param.include,  options).toPromise();
    }

    /**
     * Get the qualifier for the specified terminology and code/name
     * @param param the request object
     */
    public getQualifier(param: MetadataEndpointsApiGetQualifierRequest, options?: Configuration): Promise<Concept> {
        return this.api.getQualifier(param.terminology, param.codeOrName, param.include,  options).toPromise();
    }

    /**
     * Get qualifier values for the specified terminology and code/name
     * @param param the request object
     */
    public getQualifierValuesWithHttpInfo(param: MetadataEndpointsApiGetQualifierValuesRequest, options?: Configuration): Promise<HttpInfo<Array<string>>> {
        return this.api.getQualifierValuesWithHttpInfo(param.terminology, param.codeOrName,  options).toPromise();
    }

    /**
     * Get qualifier values for the specified terminology and code/name
     * @param param the request object
     */
    public getQualifierValues(param: MetadataEndpointsApiGetQualifierValuesRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.getQualifierValues(param.terminology, param.codeOrName,  options).toPromise();
    }

    /**
     * Get all qualifiers (properties on properties) for the specified terminology
     * @param param the request object
     */
    public getQualifiersWithHttpInfo(param: MetadataEndpointsApiGetQualifiersRequest, options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        return this.api.getQualifiersWithHttpInfo(param.terminology, param.include, param.list,  options).toPromise();
    }

    /**
     * Get all qualifiers (properties on properties) for the specified terminology
     * @param param the request object
     */
    public getQualifiers(param: MetadataEndpointsApiGetQualifiersRequest, options?: Configuration): Promise<Array<Concept>> {
        return this.api.getQualifiers(param.terminology, param.include, param.list,  options).toPromise();
    }

    /**
     * Get the role for the specified terminology and code/name
     * @param param the request object
     */
    public getRoleWithHttpInfo(param: MetadataEndpointsApiGetRoleRequest, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getRoleWithHttpInfo(param.terminology, param.codeOrName, param.include,  options).toPromise();
    }

    /**
     * Get the role for the specified terminology and code/name
     * @param param the request object
     */
    public getRole(param: MetadataEndpointsApiGetRoleRequest, options?: Configuration): Promise<Concept> {
        return this.api.getRole(param.terminology, param.codeOrName, param.include,  options).toPromise();
    }

    /**
     * Get all roles (or those specified by list parameter) for the specified terminology
     * @param param the request object
     */
    public getRolesWithHttpInfo(param: MetadataEndpointsApiGetRolesRequest, options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        return this.api.getRolesWithHttpInfo(param.terminology, param.include, param.list,  options).toPromise();
    }

    /**
     * Get all roles (or those specified by list parameter) for the specified terminology
     * @param param the request object
     */
    public getRoles(param: MetadataEndpointsApiGetRolesRequest, options?: Configuration): Promise<Array<Concept>> {
        return this.api.getRoles(param.terminology, param.include, param.list,  options).toPromise();
    }

    /**
     * This endpoint is mostly for NCIm to make source overlap statistics available.
     * Get statistics for the source within the specified terminology.
     * @param param the request object
     */
    public getSourceStatsWithHttpInfo(param: MetadataEndpointsApiGetSourceStatsRequest, options?: Configuration): Promise<HttpInfo<{ [key: string]: Array<StatisticsEntry>; }>> {
        return this.api.getSourceStatsWithHttpInfo(param.terminology, param.source,  options).toPromise();
    }

    /**
     * This endpoint is mostly for NCIm to make source overlap statistics available.
     * Get statistics for the source within the specified terminology.
     * @param param the request object
     */
    public getSourceStats(param: MetadataEndpointsApiGetSourceStatsRequest, options?: Configuration): Promise<{ [key: string]: Array<StatisticsEntry>; }> {
        return this.api.getSourceStats(param.terminology, param.source,  options).toPromise();
    }

    /**
     * This endpoint will be deprecated in v2 in favor of top level subset endpoints.
     * Get the subset for the specified terminology and code.
     * @param param the request object
     */
    public getSubset1WithHttpInfo(param: MetadataEndpointsApiGetSubset1Request, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getSubset1WithHttpInfo(param.terminology, param.code, param.include,  options).toPromise();
    }

    /**
     * This endpoint will be deprecated in v2 in favor of top level subset endpoints.
     * Get the subset for the specified terminology and code.
     * @param param the request object
     */
    public getSubset1(param: MetadataEndpointsApiGetSubset1Request, options?: Configuration): Promise<Concept> {
        return this.api.getSubset1(param.terminology, param.code, param.include,  options).toPromise();
    }

    /**
     * This endpoint will be deprecated in v2 in favor of top level subset endpoints.
     * Get all subsets (or those specified by list parameter) for the specified terminology.
     * @param param the request object
     */
    public getSubsets1WithHttpInfo(param: MetadataEndpointsApiGetSubsets1Request, options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        return this.api.getSubsets1WithHttpInfo(param.terminology, param.include, param.list,  options).toPromise();
    }

    /**
     * This endpoint will be deprecated in v2 in favor of top level subset endpoints.
     * Get all subsets (or those specified by list parameter) for the specified terminology.
     * @param param the request object
     */
    public getSubsets1(param: MetadataEndpointsApiGetSubsets1Request, options?: Configuration): Promise<Array<Concept>> {
        return this.api.getSubsets1(param.terminology, param.include, param.list,  options).toPromise();
    }

    /**
     * Get all synonym sources for the specified terminology
     * @param param the request object
     */
    public getSynonymSourcesWithHttpInfo(param: MetadataEndpointsApiGetSynonymSourcesRequest, options?: Configuration): Promise<HttpInfo<Array<ConceptMinimal>>> {
        return this.api.getSynonymSourcesWithHttpInfo(param.terminology,  options).toPromise();
    }

    /**
     * Get all synonym sources for the specified terminology
     * @param param the request object
     */
    public getSynonymSources(param: MetadataEndpointsApiGetSynonymSourcesRequest, options?: Configuration): Promise<Array<ConceptMinimal>> {
        return this.api.getSynonymSources(param.terminology,  options).toPromise();
    }

    /**
     * Get the synonym type for the specified terminology and code/name
     * @param param the request object
     */
    public getSynonymTypeWithHttpInfo(param: MetadataEndpointsApiGetSynonymTypeRequest, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getSynonymTypeWithHttpInfo(param.terminology, param.codeOrName, param.include,  options).toPromise();
    }

    /**
     * Get the synonym type for the specified terminology and code/name
     * @param param the request object
     */
    public getSynonymType(param: MetadataEndpointsApiGetSynonymTypeRequest, options?: Configuration): Promise<Concept> {
        return this.api.getSynonymType(param.terminology, param.codeOrName, param.include,  options).toPromise();
    }

    /**
     * Get all synonym types (or those specified by list parameter) for the specified terminology
     * @param param the request object
     */
    public getSynonymTypesWithHttpInfo(param: MetadataEndpointsApiGetSynonymTypesRequest, options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        return this.api.getSynonymTypesWithHttpInfo(param.terminology, param.include, param.list,  options).toPromise();
    }

    /**
     * Get all synonym types (or those specified by list parameter) for the specified terminology
     * @param param the request object
     */
    public getSynonymTypes(param: MetadataEndpointsApiGetSynonymTypesRequest, options?: Configuration): Promise<Array<Concept>> {
        return this.api.getSynonymTypes(param.terminology, param.include, param.list,  options).toPromise();
    }

    /**
     * Get all term types for the specified terminology
     * @param param the request object
     */
    public getTermTypesWithHttpInfo(param: MetadataEndpointsApiGetTermTypesRequest, options?: Configuration): Promise<HttpInfo<Array<ConceptMinimal>>> {
        return this.api.getTermTypesWithHttpInfo(param.terminology,  options).toPromise();
    }

    /**
     * Get all term types for the specified terminology
     * @param param the request object
     */
    public getTermTypes(param: MetadataEndpointsApiGetTermTypesRequest, options?: Configuration): Promise<Array<ConceptMinimal>> {
        return this.api.getTermTypes(param.terminology,  options).toPromise();
    }

    /**
     * Get all available terminologies
     * @param param the request object
     */
    public getTerminologiesWithHttpInfo(param: MetadataEndpointsApiGetTerminologiesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Terminology>>> {
        return this.api.getTerminologiesWithHttpInfo(param.latest, param.tag, param.terminology,  options).toPromise();
    }

    /**
     * Get all available terminologies
     * @param param the request object
     */
    public getTerminologies(param: MetadataEndpointsApiGetTerminologiesRequest = {}, options?: Configuration): Promise<Array<Terminology>> {
        return this.api.getTerminologies(param.latest, param.tag, param.terminology,  options).toPromise();
    }

    /**
     * Get welcome text for the specified terminology
     * @param param the request object
     */
    public getWelcomeTextWithHttpInfo(param: MetadataEndpointsApiGetWelcomeTextRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.getWelcomeTextWithHttpInfo(param.terminology,  options).toPromise();
    }

    /**
     * Get welcome text for the specified terminology
     * @param param the request object
     */
    public getWelcomeText(param: MetadataEndpointsApiGetWelcomeTextRequest, options?: Configuration): Promise<string> {
        return this.api.getWelcomeText(param.terminology,  options).toPromise();
    }

}

import { ObservableSearchEndpointApi } from "./ObservableAPI";
import { SearchEndpointApiRequestFactory, SearchEndpointApiResponseProcessor} from "../apis/SearchEndpointApi";

export interface SearchEndpointApiGetSparqlBindingsRequest {
    /**
     * Single terminology to search, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof SearchEndpointApigetSparqlBindings
     */
    terminology: string
    /**
     * SPARQL query to execute on the graph for the specified terminology. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/SPARQL.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for more information and examples of using SPARQL with EVSRESTAPI&lt;/a&gt;.
     * @type string
     * @memberof SearchEndpointApigetSparqlBindings
     */
    body: string
    /**
     * Start index of the search results
     * @type number
     * @memberof SearchEndpointApigetSparqlBindings
     */
    fromRecord?: number
    /**
     * Max number of results to return
     * @type number
     * @memberof SearchEndpointApigetSparqlBindings
     */
    pageSize?: number
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof SearchEndpointApigetSparqlBindings
     */
    xEVSRESTAPILicenseKey?: string
}

export interface SearchEndpointApiSearchRequest {
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof SearchEndpointApisearch
     */
    xEVSRESTAPILicenseKey?: string
    /**
     * Comma-separated list of terminologies to search, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof SearchEndpointApisearch
     */
    terminology?: string
    /**
     * The term, phrase, or code to be searched, e.g. \&#39;melanoma\&#39;
     * @type string
     * @memberof SearchEndpointApisearch
     */
    term?: string
    /**
     * The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy.
     * @type string
     * @memberof SearchEndpointApisearch
     */
    type?: string
    /**
     * The search parameter to sort results by
     * @type string
     * @memberof SearchEndpointApisearch
     */
    sort?: string
    /**
     * Sort ascending (if true) or descending (if false)
     * @type boolean
     * @memberof SearchEndpointApisearch
     */
    ascending?: boolean
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof SearchEndpointApisearch
     */
    include?: string
    /**
     * Start index of the search results
     * @type number
     * @memberof SearchEndpointApisearch
     */
    fromRecord?: number
    /**
     * Max number of results to return
     * @type number
     * @memberof SearchEndpointApisearch
     */
    pageSize?: number
    /**
     * Comma-separated list of concept status values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/conceptStatuses\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearch
     */
    conceptStatus?: string
    /**
     * Comma-separated list of properties to restrict search results by (see also &lt;i&gt;value&lt;/i&gt;). e.g.&lt;ul&gt;&lt;li&gt;\&#39;P106,P322\&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;COLOR,SHAPE\&#39; for &lt;i&gt;terminology&#x3D;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/properties\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus properties&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/properties\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus properties&lt;/a&gt;.&lt;/p&gt; The properties can be specified as code or name. NOTE: This feature works with &lt;i&gt;value&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching the &lt;i&gt;value&lt;/i&gt; parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term.
     * @type string
     * @memberof SearchEndpointApisearch
     */
    property?: string
    /**
     * A property value to restrict search results by.  NOTE: This feature works with &lt;i&gt;property&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching this parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term.
     * @type string
     * @memberof SearchEndpointApisearch
     */
    value?: string
    /**
     * Comma-separated list of definition sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/definitionSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/definitionSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearch
     */
    definitionSource?: string
    /**
     * Comma-separated list of definition types to restrict search results by, e.g. \&#39;DEFINITION,ALT_DEFINITION\&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/definitionTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearch
     */
    definitionType?: string
    /**
     * Comma-separated list of synonym sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/synonymSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/synonymSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearch
     */
    synonymSource?: string
    /**
     * Comma-separated list of synonym types to restrict search results by, e.g. \&#39;FULL_SYN\&#39;. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/synonymTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearch
     */
    synonymType?: string
    /**
     * Comma-separated list of synonym term type values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/termTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/termTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearch
     */
    synonymTermType?: string
    /**
     * Comma-separated list of subsets to restrict search results by, e.g. \&#39;C157225\&#39;. The value \&#39;*\&#39; can also be used to return results that participate in at least one subset. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;
     * @type string
     * @memberof SearchEndpointApisearch
     */
    subset?: string
}

export interface SearchEndpointApiSearchSingleTerminologyRequest {
    /**
     * Single terminology to search, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    terminology: string
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    xEVSRESTAPILicenseKey?: string
    /**
     * The term, phrase, or code to be searched, e.g. \&#39;melanoma\&#39;
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    term?: string
    /**
     * The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy.
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    type?: string
    /**
     * The search parameter to sort results by
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    sort?: string
    /**
     * Sort ascending (if true) or descending (if false)
     * @type boolean
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    ascending?: boolean
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    include?: string
    /**
     * Start index of the search results
     * @type number
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    fromRecord?: number
    /**
     * Max number of results to return
     * @type number
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    pageSize?: number
    /**
     * Comma-separated list of concept status values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/conceptStatuses\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    conceptStatus?: string
    /**
     * Comma-separated list of properties to restrict search results by (see also &lt;i&gt;value&lt;/i&gt;). e.g.&lt;ul&gt;&lt;li&gt;\&#39;P106,P322\&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;COLOR,SHAPE\&#39; for &lt;i&gt;terminology&#x3D;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/properties\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus properties&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/properties\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus properties&lt;/a&gt;.&lt;/p&gt; The properties can be specified as code or name. NOTE: This feature works with &lt;i&gt;value&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching the &lt;i&gt;value&lt;/i&gt; parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term.
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    property?: string
    /**
     * A property value to restrict search results by.  NOTE: This feature works with &lt;i&gt;property&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching this parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term.
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    value?: string
    /**
     * Comma-separated list of definition sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/definitionSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/definitionSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    definitionSource?: string
    /**
     * Comma-separated list of definition types to restrict search results by, e.g. \&#39;DEFINITION,ALT_DEFINITION\&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/definitionTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    definitionType?: string
    /**
     * Comma-separated list of synonym sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/synonymSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/synonymSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    synonymSource?: string
    /**
     * Comma-separated list of synonym types to restrict search results by, e.g. \&#39;FULL_SYN\&#39;. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/synonymTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    synonymType?: string
    /**
     * Comma-separated list of synonym term type values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/termTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/termTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    synonymTermType?: string
    /**
     * Comma-separated list of subsets to restrict search results by, e.g. \&#39;C157225\&#39;. The value \&#39;*\&#39; can also be used to return results that participate in at least one subset. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminology
     */
    subset?: string
}

export interface SearchEndpointApiSearchSingleTerminologySparqlRequest {
    /**
     * Single terminology to search, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    terminology: string
    /**
     * SPARQL query that returns ?code identifying a valid code in the specified terminology. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/SPARQL.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for more information and examples of using SPARQL with EVSRESTAPI&lt;/a&gt;.
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    body: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    include?: string
    /**
     * Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    xEVSRESTAPILicenseKey?: string
    /**
     * The term, phrase, or code to be searched, e.g. \&#39;melanoma\&#39;
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    term?: string
    /**
     * The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy.
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    type?: string
    /**
     * The search parameter to sort results by
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    sort?: string
    /**
     * Sort ascending (if true) or descending (if false)
     * @type boolean
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    ascending?: boolean
    /**
     * Start index of the search results
     * @type number
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    fromRecord?: number
    /**
     * Max number of results to return
     * @type number
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    pageSize?: number
    /**
     * Comma-separated list of concept status values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/conceptStatuses\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    conceptStatus?: string
    /**
     * Comma-separated list of properties to restrict search results by (see also &lt;i&gt;value&lt;/i&gt;). e.g.&lt;ul&gt;&lt;li&gt;\&#39;P106,P322\&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;COLOR,SHAPE\&#39; for &lt;i&gt;terminology&#x3D;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/properties\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus properties&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/properties\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus properties&lt;/a&gt;.&lt;/p&gt; The properties can be specified as code or name. NOTE: This feature works with &lt;i&gt;value&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching the &lt;i&gt;value&lt;/i&gt; parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term.
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    property?: string
    /**
     * A property value to restrict search results by.  NOTE: This feature works with &lt;i&gt;property&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching this parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term.
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    value?: string
    /**
     * Comma-separated list of definition sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/definitionSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/definitionSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    definitionSource?: string
    /**
     * Comma-separated list of definition types to restrict search results by, e.g. \&#39;DEFINITION,ALT_DEFINITION\&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/definitionTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    definitionType?: string
    /**
     * Comma-separated list of synonym sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/synonymSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/synonymSources\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    synonymSource?: string
    /**
     * Comma-separated list of synonym types to restrict search results by, e.g. \&#39;FULL_SYN\&#39;. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/synonymTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    synonymType?: string
    /**
     * Comma-separated list of synonym term type values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncit/termTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;\&#39;/api/v1/metadata/ncim/termTypes\&#39; target&#x3D;\&#39;_blank\&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt;
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    synonymTermType?: string
    /**
     * Comma-separated list of subsets to restrict search results by, e.g. \&#39;C157225\&#39;. The value \&#39;*\&#39; can also be used to return results that participate in at least one subset. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;
     * @type string
     * @memberof SearchEndpointApisearchSingleTerminologySparql
     */
    subset?: string
}

export class ObjectSearchEndpointApi {
    private api: ObservableSearchEndpointApi

    public constructor(configuration: Configuration, requestFactory?: SearchEndpointApiRequestFactory, responseProcessor?: SearchEndpointApiResponseProcessor) {
        this.api = new ObservableSearchEndpointApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Perform a SPARQL query for a specified terminology.
     * Get SPARQL query results
     * @param param the request object
     */
    public getSparqlBindingsWithHttpInfo(param: SearchEndpointApiGetSparqlBindingsRequest, options?: Configuration): Promise<HttpInfo<MapResultList>> {
        return this.api.getSparqlBindingsWithHttpInfo(param.terminology, param.body, param.fromRecord, param.pageSize, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Perform a SPARQL query for a specified terminology.
     * Get SPARQL query results
     * @param param the request object
     */
    public getSparqlBindings(param: SearchEndpointApiGetSparqlBindingsRequest, options?: Configuration): Promise<MapResultList> {
        return this.api.getSparqlBindings(param.terminology, param.body, param.fromRecord, param.pageSize, param.xEVSRESTAPILicenseKey,  options).toPromise();
    }

    /**
     * Use cases for search range from very simple term searches, use of paging parameters, additional filters, searches properties, roles, and associations, and so on.  To further explore the range of search options, take a look at the <a href=\'https://github.com/NCIEVS/evsrestapi-client-SDK\' target=\'_blank\'>Github client SDK library created for the NCI EVS Rest API</a>.
     * Get concept search results
     * @param param the request object
     */
    public searchWithHttpInfo(param: SearchEndpointApiSearchRequest = {}, options?: Configuration): Promise<HttpInfo<ConceptResultList>> {
        return this.api.searchWithHttpInfo(param.xEVSRESTAPILicenseKey, param.terminology, param.term, param.type, param.sort, param.ascending, param.include, param.fromRecord, param.pageSize, param.conceptStatus, param.property, param.value, param.definitionSource, param.definitionType, param.synonymSource, param.synonymType, param.synonymTermType, param.subset,  options).toPromise();
    }

    /**
     * Use cases for search range from very simple term searches, use of paging parameters, additional filters, searches properties, roles, and associations, and so on.  To further explore the range of search options, take a look at the <a href=\'https://github.com/NCIEVS/evsrestapi-client-SDK\' target=\'_blank\'>Github client SDK library created for the NCI EVS Rest API</a>.
     * Get concept search results
     * @param param the request object
     */
    public search(param: SearchEndpointApiSearchRequest = {}, options?: Configuration): Promise<ConceptResultList> {
        return this.api.search(param.xEVSRESTAPILicenseKey, param.terminology, param.term, param.type, param.sort, param.ascending, param.include, param.fromRecord, param.pageSize, param.conceptStatus, param.property, param.value, param.definitionSource, param.definitionType, param.synonymSource, param.synonymType, param.synonymTermType, param.subset,  options).toPromise();
    }

    /**
     * Use cases for search range from very simple term searches, use of paging parameters, additional filters, searches properties, roles, and associations, and so on.  To further explore the range of search options, take a look at the <a href=\'https://github.com/NCIEVS/evsrestapi-client-SDK\' target=\'_blank\'>Github client SDK library created for the NCI EVS Rest API</a>.
     * Get concept search results for a specified terminology
     * @param param the request object
     */
    public searchSingleTerminologyWithHttpInfo(param: SearchEndpointApiSearchSingleTerminologyRequest, options?: Configuration): Promise<HttpInfo<ConceptResultList>> {
        return this.api.searchSingleTerminologyWithHttpInfo(param.terminology, param.xEVSRESTAPILicenseKey, param.term, param.type, param.sort, param.ascending, param.include, param.fromRecord, param.pageSize, param.conceptStatus, param.property, param.value, param.definitionSource, param.definitionType, param.synonymSource, param.synonymType, param.synonymTermType, param.subset,  options).toPromise();
    }

    /**
     * Use cases for search range from very simple term searches, use of paging parameters, additional filters, searches properties, roles, and associations, and so on.  To further explore the range of search options, take a look at the <a href=\'https://github.com/NCIEVS/evsrestapi-client-SDK\' target=\'_blank\'>Github client SDK library created for the NCI EVS Rest API</a>.
     * Get concept search results for a specified terminology
     * @param param the request object
     */
    public searchSingleTerminology(param: SearchEndpointApiSearchSingleTerminologyRequest, options?: Configuration): Promise<ConceptResultList> {
        return this.api.searchSingleTerminology(param.terminology, param.xEVSRESTAPILicenseKey, param.term, param.type, param.sort, param.ascending, param.include, param.fromRecord, param.pageSize, param.conceptStatus, param.property, param.value, param.definitionSource, param.definitionType, param.synonymSource, param.synonymType, param.synonymTermType, param.subset,  options).toPromise();
    }

    /**
     * Use cases for search range from very simple term searches, use of paging parameters, additional filters, searches properties, roles, and associations, and so on.  To further explore the range of search options, take a look at the <a href=\'https://github.com/NCIEVS/evsrestapi-client-SDK\' target=\'_blank\'>Github client SDK library created for the NCI EVS Rest API</a>.
     * Get concept search results for a specified terminology
     * @param param the request object
     */
    public searchSingleTerminologySparqlWithHttpInfo(param: SearchEndpointApiSearchSingleTerminologySparqlRequest, options?: Configuration): Promise<HttpInfo<ConceptResultList>> {
        return this.api.searchSingleTerminologySparqlWithHttpInfo(param.terminology, param.body, param.include, param.xEVSRESTAPILicenseKey, param.term, param.type, param.sort, param.ascending, param.fromRecord, param.pageSize, param.conceptStatus, param.property, param.value, param.definitionSource, param.definitionType, param.synonymSource, param.synonymType, param.synonymTermType, param.subset,  options).toPromise();
    }

    /**
     * Use cases for search range from very simple term searches, use of paging parameters, additional filters, searches properties, roles, and associations, and so on.  To further explore the range of search options, take a look at the <a href=\'https://github.com/NCIEVS/evsrestapi-client-SDK\' target=\'_blank\'>Github client SDK library created for the NCI EVS Rest API</a>.
     * Get concept search results for a specified terminology
     * @param param the request object
     */
    public searchSingleTerminologySparql(param: SearchEndpointApiSearchSingleTerminologySparqlRequest, options?: Configuration): Promise<ConceptResultList> {
        return this.api.searchSingleTerminologySparql(param.terminology, param.body, param.include, param.xEVSRESTAPILicenseKey, param.term, param.type, param.sort, param.ascending, param.fromRecord, param.pageSize, param.conceptStatus, param.property, param.value, param.definitionSource, param.definitionType, param.synonymSource, param.synonymType, param.synonymTermType, param.subset,  options).toPromise();
    }

}

import { ObservableSubsetEndpointsApi } from "./ObservableAPI";
import { SubsetEndpointsApiRequestFactory, SubsetEndpointsApiResponseProcessor} from "../apis/SubsetEndpointsApi";

export interface SubsetEndpointsApiGetSubsetRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;.
     * @type string
     * @memberof SubsetEndpointsApigetSubset
     */
    terminology: string
    /**
     * Subset code, e.g. \&#39;C116978\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof SubsetEndpointsApigetSubset
     */
    code: string
    /**
     * Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof SubsetEndpointsApigetSubset
     */
    include?: string
}

export interface SubsetEndpointsApiGetSubsetMembersRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;
     * @type string
     * @memberof SubsetEndpointsApigetSubsetMembers
     */
    terminology: string
    /**
     * Code for a subset concept in the specified terminology, e.g. \&#39;C157225\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof SubsetEndpointsApigetSubsetMembers
     */
    code: string
    /**
     * Start index of the search results
     * @type string
     * @memberof SubsetEndpointsApigetSubsetMembers
     */
    fromRecord?: string
    /**
     * Max number of results to return
     * @type string
     * @memberof SubsetEndpointsApigetSubsetMembers
     */
    pageSize?: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof SubsetEndpointsApigetSubsetMembers
     */
    include?: string
}

export interface SubsetEndpointsApiGetSubsetsRequest {
    /**
     * Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @type string
     * @memberof SubsetEndpointsApigetSubsets
     */
    terminology: string
    /**
     * Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @type string
     * @memberof SubsetEndpointsApigetSubsets
     */
    include?: string
    /**
     * List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     * @type string
     * @memberof SubsetEndpointsApigetSubsets
     */
    list?: string
}

export class ObjectSubsetEndpointsApi {
    private api: ObservableSubsetEndpointsApi

    public constructor(configuration: Configuration, requestFactory?: SubsetEndpointsApiRequestFactory, responseProcessor?: SubsetEndpointsApiResponseProcessor) {
        this.api = new ObservableSubsetEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the subset for the specified terminology and code.
     * @param param the request object
     */
    public getSubsetWithHttpInfo(param: SubsetEndpointsApiGetSubsetRequest, options?: Configuration): Promise<HttpInfo<Concept>> {
        return this.api.getSubsetWithHttpInfo(param.terminology, param.code, param.include,  options).toPromise();
    }

    /**
     * Get the subset for the specified terminology and code.
     * @param param the request object
     */
    public getSubset(param: SubsetEndpointsApiGetSubsetRequest, options?: Configuration): Promise<Concept> {
        return this.api.getSubset(param.terminology, param.code, param.include,  options).toPromise();
    }

    /**
     * Get subset members for the specified terminology and code. Concept subset endpoints will be deprecated in v2 in favor of top level subset endpoints.
     * @param param the request object
     */
    public getSubsetMembersWithHttpInfo(param: SubsetEndpointsApiGetSubsetMembersRequest, options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        return this.api.getSubsetMembersWithHttpInfo(param.terminology, param.code, param.fromRecord, param.pageSize, param.include,  options).toPromise();
    }

    /**
     * Get subset members for the specified terminology and code. Concept subset endpoints will be deprecated in v2 in favor of top level subset endpoints.
     * @param param the request object
     */
    public getSubsetMembers(param: SubsetEndpointsApiGetSubsetMembersRequest, options?: Configuration): Promise<Array<Concept>> {
        return this.api.getSubsetMembers(param.terminology, param.code, param.fromRecord, param.pageSize, param.include,  options).toPromise();
    }

    /**
     * Get all subsets (or those specified by list parameter) for the specified terminology
     * @param param the request object
     */
    public getSubsetsWithHttpInfo(param: SubsetEndpointsApiGetSubsetsRequest, options?: Configuration): Promise<HttpInfo<Array<Concept>>> {
        return this.api.getSubsetsWithHttpInfo(param.terminology, param.include, param.list,  options).toPromise();
    }

    /**
     * Get all subsets (or those specified by list parameter) for the specified terminology
     * @param param the request object
     */
    public getSubsets(param: SubsetEndpointsApiGetSubsetsRequest, options?: Configuration): Promise<Array<Concept>> {
        return this.api.getSubsets(param.terminology, param.include, param.list,  options).toPromise();
    }

}
