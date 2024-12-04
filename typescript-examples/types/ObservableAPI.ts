import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ApplicationVersionEndpointApiRequestFactory, ApplicationVersionEndpointApiResponseProcessor} from "../apis/ApplicationVersionEndpointApi";
export class ObservableApplicationVersionEndpointApi {
    private requestFactory: ApplicationVersionEndpointApiRequestFactory;
    private responseProcessor: ApplicationVersionEndpointApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationVersionEndpointApiRequestFactory,
        responseProcessor?: ApplicationVersionEndpointApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationVersionEndpointApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationVersionEndpointApiResponseProcessor();
    }

    /**
     * Get the application version information
     */
    public getApplicationVersionWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ApplicationVersion>> {
        const requestContextPromise = this.requestFactory.getApplicationVersion(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the application version information
     */
    public getApplicationVersion(_options?: Configuration): Observable<ApplicationVersion> {
        return this.getApplicationVersionWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ApplicationVersion>) => apiResponse.data));
    }

    /**
     * Rewrite the specified LexEVS URL to EVS Explore
     * @param url 
     */
    public rewriteUrlWithHttpInfo(url: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.rewriteUrl(url, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rewriteUrlWithHttpInfo(rsp)));
            }));
    }

    /**
     * Rewrite the specified LexEVS URL to EVS Explore
     * @param url 
     */
    public rewriteUrl(url: string, _options?: Configuration): Observable<string> {
        return this.rewriteUrlWithHttpInfo(url, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { ConceptEndpointsApiRequestFactory, ConceptEndpointsApiResponseProcessor} from "../apis/ConceptEndpointsApi";
export class ObservableConceptEndpointsApi {
    private requestFactory: ConceptEndpointsApiRequestFactory;
    private responseProcessor: ConceptEndpointsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConceptEndpointsApiRequestFactory,
        responseProcessor?: ConceptEndpointsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConceptEndpointsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConceptEndpointsApiResponseProcessor();
    }

    /**
     * Get the association entries for the specified terminology and code. Associations used to define subset membership are not resolved by this call
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param codeOrLabel Code/label in the specified terminology, e.g. \&#39;A5\&#39; or \&#39;Has_Salt_Form\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getAssociationEntriesWithHttpInfo(terminology: string, codeOrLabel: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<AssociationEntryResultList>> {
        const requestContextPromise = this.requestFactory.getAssociationEntries(terminology, codeOrLabel, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAssociationEntriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the association entries for the specified terminology and code. Associations used to define subset membership are not resolved by this call
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param codeOrLabel Code/label in the specified terminology, e.g. \&#39;A5\&#39; or \&#39;Has_Salt_Form\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getAssociationEntries(terminology: string, codeOrLabel: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<AssociationEntryResultList> {
        return this.getAssociationEntriesWithHttpInfo(terminology, codeOrLabel, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<AssociationEntryResultList>) => apiResponse.data));
    }

    /**
     * Get the associations for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getAssociations1WithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Array<Association>>> {
        const requestContextPromise = this.requestFactory.getAssociations1(terminology, code, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAssociations1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the associations for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getAssociations1(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Array<Association>> {
        return this.getAssociations1WithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Array<Association>>) => apiResponse.data));
    }

    /**
     * Get child concepts for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getChildrenWithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Array<Concept>>> {
        const requestContextPromise = this.requestFactory.getChildren(terminology, code, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChildrenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get child concepts for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getChildren(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Array<Concept>> {
        return this.getChildrenWithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Array<Concept>>) => apiResponse.data));
    }

    /**
     * Get the concept for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param limit If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), elements of the concept should be limited to that specified number of entries. Thus a user interface can quickly retrieve initial data for a concept (even with &lt;i&gt;include&#x3D;full&lt;/i&gt;) and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getConceptWithHttpInfo(terminology: string, code: string, limit?: number, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Concept>> {
        const requestContextPromise = this.requestFactory.getConcept(terminology, code, limit, include, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConceptWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the concept for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param limit If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), elements of the concept should be limited to that specified number of entries. Thus a user interface can quickly retrieve initial data for a concept (even with &lt;i&gt;include&#x3D;full&lt;/i&gt;) and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getConcept(terminology: string, code: string, limit?: number, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Concept> {
        return this.getConceptWithHttpInfo(terminology, code, limit, include, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Concept>) => apiResponse.data));
    }

    /**
     * Get concepts specified by list parameter
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param list List (comma-separated) of codes to return concepts for, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C2291,C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0010137,C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getConceptsWithHttpInfo(terminology: string, list: string, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Array<Concept>>> {
        const requestContextPromise = this.requestFactory.getConcepts(terminology, list, include, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConceptsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get concepts specified by list parameter
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param list List (comma-separated) of codes to return concepts for, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C2291,C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0010137,C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getConcepts(terminology: string, list: string, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Array<Concept>> {
        return this.getConceptsWithHttpInfo(terminology, list, include, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Array<Concept>>) => apiResponse.data));
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
    public getDescendantsWithHttpInfo(terminology: string, code: string, fromRecord?: number, pageSize?: number, maxLevel?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Array<Concept>>> {
        const requestContextPromise = this.requestFactory.getDescendants(terminology, code, fromRecord, pageSize, maxLevel, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDescendantsWithHttpInfo(rsp)));
            }));
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
    public getDescendants(terminology: string, code: string, fromRecord?: number, pageSize?: number, maxLevel?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Array<Concept>> {
        return this.getDescendantsWithHttpInfo(terminology, code, fromRecord, pageSize, maxLevel, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Array<Concept>>) => apiResponse.data));
    }

    /**
     * Get \"disjoint with\" info for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3910\&#39; for &lt;i&gt;ncit&lt;/i&gt;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getDisjointWithWithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Array<DisjointWith>>> {
        const requestContextPromise = this.requestFactory.getDisjointWith(terminology, code, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDisjointWithWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get \"disjoint with\" info for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3910\&#39; for &lt;i&gt;ncit&lt;/i&gt;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getDisjointWith(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Array<DisjointWith>> {
        return this.getDisjointWithWithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Array<DisjointWith>>) => apiResponse.data));
    }

    /**
     * Get history for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt; and &lt;i&gt;ncim&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getHistoryWithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Concept>> {
        const requestContextPromise = this.requestFactory.getHistory(terminology, code, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get history for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt; and &lt;i&gt;ncim&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getHistory(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Concept> {
        return this.getHistoryWithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Concept>) => apiResponse.data));
    }

    /**
     * Get inverse associations for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getInverseAssociationsWithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Array<Association>>> {
        const requestContextPromise = this.requestFactory.getInverseAssociations(terminology, code, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInverseAssociationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get inverse associations for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g.&lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getInverseAssociations(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Array<Association>> {
        return this.getInverseAssociationsWithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Array<Association>>) => apiResponse.data));
    }

    /**
     * Get inverse roles for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getInverseRolesWithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Array<Role>>> {
        const requestContextPromise = this.requestFactory.getInverseRoles(terminology, code, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInverseRolesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get inverse roles for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getInverseRoles(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Array<Role>> {
        return this.getInverseRolesWithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Array<Role>>) => apiResponse.data));
    }

    /**
     * Get maps for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getMapsWithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Array<ConceptMap>>> {
        const requestContextPromise = this.requestFactory.getMaps(terminology, code, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMapsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get maps for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getMaps(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Array<ConceptMap>> {
        return this.getMapsWithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Array<ConceptMap>>) => apiResponse.data));
    }

    /**
     * Get parent concepts for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getParentsWithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Array<Concept>>> {
        const requestContextPromise = this.requestFactory.getParents(terminology, code, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getParentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get parent concepts for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0025202\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getParents(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Array<Concept>> {
        return this.getParentsWithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Array<Concept>>) => apiResponse.data));
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
    public getPathsFromRootWithHttpInfo(terminology: string, code: string, include?: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Array<Array<Concept>>>> {
        const requestContextPromise = this.requestFactory.getPathsFromRoot(terminology, code, include, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPathsFromRootWithHttpInfo(rsp)));
            }));
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
    public getPathsFromRoot(terminology: string, code: string, include?: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Array<Array<Concept>>> {
        return this.getPathsFromRootWithHttpInfo(terminology, code, include, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Array<Array<Concept>>>) => apiResponse.data));
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
    public getPathsToAncestorWithHttpInfo(terminology: string, code: string, ancestorCode: string, include?: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Array<Array<Concept>>>> {
        const requestContextPromise = this.requestFactory.getPathsToAncestor(terminology, code, ancestorCode, include, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPathsToAncestorWithHttpInfo(rsp)));
            }));
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
    public getPathsToAncestor(terminology: string, code: string, ancestorCode: string, include?: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Array<Array<Concept>>> {
        return this.getPathsToAncestorWithHttpInfo(terminology, code, ancestorCode, include, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Array<Array<Concept>>>) => apiResponse.data));
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
    public getPathsToRootWithHttpInfo(terminology: string, code: string, include?: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Array<Array<Concept>>>> {
        const requestContextPromise = this.requestFactory.getPathsToRoot(terminology, code, include, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPathsToRootWithHttpInfo(rsp)));
            }));
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
    public getPathsToRoot(terminology: string, code: string, include?: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Array<Array<Concept>>> {
        return this.getPathsToRootWithHttpInfo(terminology, code, include, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Array<Array<Concept>>>) => apiResponse.data));
    }

    /**
     * Get roles for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getRoles1WithHttpInfo(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Array<Role>>> {
        const requestContextPromise = this.requestFactory.getRoles1(terminology, code, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRoles1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get roles for the specified terminology and code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getRoles1(terminology: string, code: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Array<Role>> {
        return this.getRoles1WithHttpInfo(terminology, code, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Array<Role>>) => apiResponse.data));
    }

    /**
     * Get root concepts for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getRootsWithHttpInfo(terminology: string, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Array<Concept>>> {
        const requestContextPromise = this.requestFactory.getRoots(terminology, include, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRootsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get root concepts for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getRoots(terminology: string, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Array<Concept>> {
        return this.getRootsWithHttpInfo(terminology, include, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Array<Concept>>) => apiResponse.data));
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
    public getSubsetMembers1WithHttpInfo(terminology: string, code: string, fromRecord?: number, pageSize?: number, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Array<Concept>>> {
        const requestContextPromise = this.requestFactory.getSubsetMembers1(terminology, code, fromRecord, pageSize, include, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubsetMembers1WithHttpInfo(rsp)));
            }));
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
    public getSubsetMembers1(terminology: string, code: string, fromRecord?: number, pageSize?: number, include?: string, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Array<Concept>> {
        return this.getSubsetMembers1WithHttpInfo(terminology, code, fromRecord, pageSize, include, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Array<Concept>>) => apiResponse.data));
    }

    /**
     * Get the entire subtree from the root node to the specified code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param limit If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), subtrees and siblings at each level will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubtreeWithHttpInfo(terminology: string, code: string, limit?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Array<HierarchyNode>>> {
        const requestContextPromise = this.requestFactory.getSubtree(terminology, code, limit, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubtreeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the entire subtree from the root node to the specified code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param limit If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), subtrees and siblings at each level will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubtree(terminology: string, code: string, limit?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Array<HierarchyNode>> {
        return this.getSubtreeWithHttpInfo(terminology, code, limit, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Array<HierarchyNode>>) => apiResponse.data));
    }

    /**
     * Get the entire subtree from the root node to the specified code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param limit If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), children will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubtreeChildrenWithHttpInfo(terminology: string, code: string, limit?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<Array<HierarchyNode>>> {
        const requestContextPromise = this.requestFactory.getSubtreeChildren(terminology, code, limit, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubtreeChildrenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the entire subtree from the root node to the specified code
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code in the specified terminology, e.g. \&#39;C3224\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param limit If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), children will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count.
     * @param xEVSRESTAPILicenseKey Required license information for restricted terminologies. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubtreeChildren(terminology: string, code: string, limit?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<Array<HierarchyNode>> {
        return this.getSubtreeChildrenWithHttpInfo(terminology, code, limit, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<Array<HierarchyNode>>) => apiResponse.data));
    }

}

import { HistoryEndpointsApiRequestFactory, HistoryEndpointsApiResponseProcessor} from "../apis/HistoryEndpointsApi";
export class ObservableHistoryEndpointsApi {
    private requestFactory: HistoryEndpointsApiRequestFactory;
    private responseProcessor: HistoryEndpointsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HistoryEndpointsApiRequestFactory,
        responseProcessor?: HistoryEndpointsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HistoryEndpointsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HistoryEndpointsApiResponseProcessor();
    }

    /**
     * Gets suggested replacements for a specified terminology and retired code. Active codes will return entries as well with an action of \"active\".
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C4654\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0000733\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;.
     */
    public getReplacementsWithHttpInfo(terminology: string, code: string, _options?: Configuration): Observable<HttpInfo<Array<History>>> {
        const requestContextPromise = this.requestFactory.getReplacements(terminology, code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReplacementsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets suggested replacements for a specified terminology and retired code. Active codes will return entries as well with an action of \"active\".
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param code Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C4654\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0000733\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;.
     */
    public getReplacements(terminology: string, code: string, _options?: Configuration): Observable<Array<History>> {
        return this.getReplacementsWithHttpInfo(terminology, code, _options).pipe(map((apiResponse: HttpInfo<Array<History>>) => apiResponse.data));
    }

    /**
     * Gets suggested replacements for a specified terminology and a comma-separated list of retired codes.  Active codes will return entries as well with an action of \"active\".
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param list Comma-separated list of codes, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C4654,C40117\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0000733,C3551741\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;.
     */
    public getReplacementsFromListWithHttpInfo(terminology: string, list: string, _options?: Configuration): Observable<HttpInfo<Array<History>>> {
        const requestContextPromise = this.requestFactory.getReplacementsFromList(terminology, list, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReplacementsFromListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets suggested replacements for a specified terminology and a comma-separated list of retired codes.  Active codes will return entries as well with an action of \"active\".
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param list Comma-separated list of codes, e.g. &lt;ul&gt;&lt;li&gt;\&#39;C4654,C40117\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;C0000733,C3551741\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;.
     */
    public getReplacementsFromList(terminology: string, list: string, _options?: Configuration): Observable<Array<History>> {
        return this.getReplacementsFromListWithHttpInfo(terminology, list, _options).pipe(map((apiResponse: HttpInfo<Array<History>>) => apiResponse.data));
    }

}

import { MapsetEndpointsApiRequestFactory, MapsetEndpointsApiResponseProcessor} from "../apis/MapsetEndpointsApi";
export class ObservableMapsetEndpointsApi {
    private requestFactory: MapsetEndpointsApiRequestFactory;
    private responseProcessor: MapsetEndpointsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MapsetEndpointsApiRequestFactory,
        responseProcessor?: MapsetEndpointsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MapsetEndpointsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MapsetEndpointsApiResponseProcessor();
    }

    /**
     * Get the mapset for the specified code (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * @param code Mapset code
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getMapsetByCodeWithHttpInfo(code: string, include?: string, _options?: Configuration): Observable<HttpInfo<Concept>> {
        const requestContextPromise = this.requestFactory.getMapsetByCode(code, include, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMapsetByCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the mapset for the specified code (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * @param code Mapset code
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getMapsetByCode(code: string, include?: string, _options?: Configuration): Observable<Concept> {
        return this.getMapsetByCodeWithHttpInfo(code, include, _options).pipe(map((apiResponse: HttpInfo<Concept>) => apiResponse.data));
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
    public getMapsetMappingsByCodeWithHttpInfo(code: string, term?: string, fromRecord?: number, pageSize?: number, sort?: string, ascending?: boolean, _options?: Configuration): Observable<HttpInfo<ConceptMapResultList>> {
        const requestContextPromise = this.requestFactory.getMapsetMappingsByCode(code, term, fromRecord, pageSize, sort, ascending, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMapsetMappingsByCodeWithHttpInfo(rsp)));
            }));
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
    public getMapsetMappingsByCode(code: string, term?: string, fromRecord?: number, pageSize?: number, sort?: string, ascending?: boolean, _options?: Configuration): Observable<ConceptMapResultList> {
        return this.getMapsetMappingsByCodeWithHttpInfo(code, term, fromRecord, pageSize, sort, ascending, _options).pipe(map((apiResponse: HttpInfo<ConceptMapResultList>) => apiResponse.data));
    }

    /**
     * Get all mapsets (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getMapsetsWithHttpInfo(include?: string, _options?: Configuration): Observable<HttpInfo<Array<Concept>>> {
        const requestContextPromise = this.requestFactory.getMapsets(include, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMapsetsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all mapsets (no terminology parameter is needed as mapsets connect codes in one terminology to another)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getMapsets(include?: string, _options?: Configuration): Observable<Array<Concept>> {
        return this.getMapsetsWithHttpInfo(include, _options).pipe(map((apiResponse: HttpInfo<Array<Concept>>) => apiResponse.data));
    }

}

import { MetadataEndpointsApiRequestFactory, MetadataEndpointsApiResponseProcessor} from "../apis/MetadataEndpointsApi";
export class ObservableMetadataEndpointsApi {
    private requestFactory: MetadataEndpointsApiRequestFactory;
    private responseProcessor: MetadataEndpointsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MetadataEndpointsApiRequestFactory,
        responseProcessor?: MetadataEndpointsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MetadataEndpointsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MetadataEndpointsApiResponseProcessor();
    }

    /**
     * Get the association for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Association code (or name), e.g. &lt;ul&gt;&lt;li&gt;\&#39;A10\&#39; or \&#39;Has_CDRH_Parent\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RB\&#39; or \&#39;has a broader relationship\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getAssociationWithHttpInfo(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Observable<HttpInfo<Concept>> {
        const requestContextPromise = this.requestFactory.getAssociation(terminology, codeOrName, include, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAssociationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the association for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Association code (or name), e.g. &lt;ul&gt;&lt;li&gt;\&#39;A10\&#39; or \&#39;Has_CDRH_Parent\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RB\&#39; or \&#39;has a broader relationship\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getAssociation(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Observable<Concept> {
        return this.getAssociationWithHttpInfo(terminology, codeOrName, include, _options).pipe(map((apiResponse: HttpInfo<Concept>) => apiResponse.data));
    }

    /**
     * Get all associations (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return associations for (or leave blank for all). If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getAssociationsWithHttpInfo(terminology: string, include?: string, list?: string, _options?: Configuration): Observable<HttpInfo<Array<Concept>>> {
        const requestContextPromise = this.requestFactory.getAssociations(terminology, include, list, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAssociationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all associations (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return associations for (or leave blank for all). If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getAssociations(terminology: string, include?: string, list?: string, _options?: Configuration): Observable<Array<Concept>> {
        return this.getAssociationsWithHttpInfo(terminology, include, list, _options).pipe(map((apiResponse: HttpInfo<Array<Concept>>) => apiResponse.data));
    }

    /**
     * Get all concept status values for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     */
    public getConceptStatusesWithHttpInfo(terminology: string, _options?: Configuration): Observable<HttpInfo<Array<string>>> {
        const requestContextPromise = this.requestFactory.getConceptStatuses(terminology, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConceptStatusesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all concept status values for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     */
    public getConceptStatuses(terminology: string, _options?: Configuration): Observable<Array<string>> {
        return this.getConceptStatusesWithHttpInfo(terminology, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Get all definition sources for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getDefinitionSourcesWithHttpInfo(terminology: string, _options?: Configuration): Observable<HttpInfo<Array<ConceptMinimal>>> {
        const requestContextPromise = this.requestFactory.getDefinitionSources(terminology, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDefinitionSourcesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all definition sources for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getDefinitionSources(terminology: string, _options?: Configuration): Observable<Array<ConceptMinimal>> {
        return this.getDefinitionSourcesWithHttpInfo(terminology, _options).pipe(map((apiResponse: HttpInfo<Array<ConceptMinimal>>) => apiResponse.data));
    }

    /**
     * Get the definition type for the specified terminology and code/name.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Definition type code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P325\&#39; or \&#39;DEFINITION\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;DEFINITION\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getDefinitionTypeWithHttpInfo(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Observable<HttpInfo<Concept>> {
        const requestContextPromise = this.requestFactory.getDefinitionType(terminology, codeOrName, include, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDefinitionTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the definition type for the specified terminology and code/name.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Definition type code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P325\&#39; or \&#39;DEFINITION\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;DEFINITION\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getDefinitionType(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Observable<Concept> {
        return this.getDefinitionTypeWithHttpInfo(terminology, codeOrName, include, _options).pipe(map((apiResponse: HttpInfo<Concept>) => apiResponse.data));
    }

    /**
     * Get all definition types (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return definition types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getDefinitionTypesWithHttpInfo(terminology: string, include?: string, list?: string, _options?: Configuration): Observable<HttpInfo<Array<Concept>>> {
        const requestContextPromise = this.requestFactory.getDefinitionTypes(terminology, include, list, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDefinitionTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all definition types (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return definition types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getDefinitionTypes(terminology: string, include?: string, list?: string, _options?: Configuration): Observable<Array<Concept>> {
        return this.getDefinitionTypesWithHttpInfo(terminology, include, list, _options).pipe(map((apiResponse: HttpInfo<Array<Concept>>) => apiResponse.data));
    }

    /**
     * Get all properties (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return properties for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getPropertiesWithHttpInfo(terminology: string, include?: string, list?: string, _options?: Configuration): Observable<HttpInfo<Array<Concept>>> {
        const requestContextPromise = this.requestFactory.getProperties(terminology, include, list, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPropertiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all properties (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return properties for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getProperties(terminology: string, include?: string, list?: string, _options?: Configuration): Observable<Array<Concept>> {
        return this.getPropertiesWithHttpInfo(terminology, include, list, _options).pipe(map((apiResponse: HttpInfo<Array<Concept>>) => apiResponse.data));
    }

    /**
     * Get the property for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Property code (or name), e.g. &lt;ul&gt;&lt;li&gt;\&#39;P216\&#39; or \&#39;BioCarta_ID\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;BioCarta_ID\&#39; or \&#39;\&#39;BioCarta ID\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getPropertyWithHttpInfo(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Observable<HttpInfo<Concept>> {
        const requestContextPromise = this.requestFactory.getProperty(terminology, codeOrName, include, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the property for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Property code (or name), e.g. &lt;ul&gt;&lt;li&gt;\&#39;P216\&#39; or \&#39;BioCarta_ID\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;BioCarta_ID\&#39; or \&#39;\&#39;BioCarta ID\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getProperty(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Observable<Concept> {
        return this.getPropertyWithHttpInfo(terminology, codeOrName, include, _options).pipe(map((apiResponse: HttpInfo<Concept>) => apiResponse.data));
    }

    /**
     * Get the qualifier for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Qualifier code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P390\&#39; or \&#39;go-source\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RG\&#39; or \&#39;Relationship group\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getQualifierWithHttpInfo(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Observable<HttpInfo<Concept>> {
        const requestContextPromise = this.requestFactory.getQualifier(terminology, codeOrName, include, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getQualifierWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the qualifier for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Qualifier code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P390\&#39; or \&#39;go-source\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RG\&#39; or \&#39;Relationship group\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getQualifier(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Observable<Concept> {
        return this.getQualifierWithHttpInfo(terminology, codeOrName, include, _options).pipe(map((apiResponse: HttpInfo<Concept>) => apiResponse.data));
    }

    /**
     * Get qualifier values for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Qualifier code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P390\&#39; or \&#39;go-source\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RG\&#39; or \&#39;Relationship group\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     */
    public getQualifierValuesWithHttpInfo(terminology: string, codeOrName: string, _options?: Configuration): Observable<HttpInfo<Array<string>>> {
        const requestContextPromise = this.requestFactory.getQualifierValues(terminology, codeOrName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getQualifierValuesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get qualifier values for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Qualifier code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P390\&#39; or \&#39;go-source\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;RG\&#39; or \&#39;Relationship group\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     */
    public getQualifierValues(terminology: string, codeOrName: string, _options?: Configuration): Observable<Array<string>> {
        return this.getQualifierValuesWithHttpInfo(terminology, codeOrName, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Get all qualifiers (properties on properties) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return qualifiers for (or leave blank for all)
     */
    public getQualifiersWithHttpInfo(terminology: string, include?: string, list?: string, _options?: Configuration): Observable<HttpInfo<Array<Concept>>> {
        const requestContextPromise = this.requestFactory.getQualifiers(terminology, include, list, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getQualifiersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all qualifiers (properties on properties) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return qualifiers for (or leave blank for all)
     */
    public getQualifiers(terminology: string, include?: string, list?: string, _options?: Configuration): Observable<Array<Concept>> {
        return this.getQualifiersWithHttpInfo(terminology, include, list, _options).pipe(map((apiResponse: HttpInfo<Array<Concept>>) => apiResponse.data));
    }

    /**
     * Get the role for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param codeOrName Role code (or name), e.g. \&#39;R123\&#39; or \&#39;Chemotherapy_Regimen_Has_Component\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getRoleWithHttpInfo(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Observable<HttpInfo<Concept>> {
        const requestContextPromise = this.requestFactory.getRole(terminology, codeOrName, include, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the role for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param codeOrName Role code (or name), e.g. \&#39;R123\&#39; or \&#39;Chemotherapy_Regimen_Has_Component\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getRole(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Observable<Concept> {
        return this.getRoleWithHttpInfo(terminology, codeOrName, include, _options).pipe(map((apiResponse: HttpInfo<Concept>) => apiResponse.data));
    }

    /**
     * Get all roles (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return roles for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getRolesWithHttpInfo(terminology: string, include?: string, list?: string, _options?: Configuration): Observable<HttpInfo<Array<Concept>>> {
        const requestContextPromise = this.requestFactory.getRoles(terminology, include, list, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRolesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all roles (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return roles for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getRoles(terminology: string, include?: string, list?: string, _options?: Configuration): Observable<Array<Concept>> {
        return this.getRolesWithHttpInfo(terminology, include, list, _options).pipe(map((apiResponse: HttpInfo<Array<Concept>>) => apiResponse.data));
    }

    /**
     * This endpoint is mostly for NCIm to make source overlap statistics available.
     * Get statistics for the source within the specified terminology.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.
     * @param source terminology source code, e.g. \&#39;LNC\&#39; for &lt;i&gt;ncim&lt;/i&gt;.
     */
    public getSourceStatsWithHttpInfo(terminology: string, source: string, _options?: Configuration): Observable<HttpInfo<{ [key: string]: Array<StatisticsEntry>; }>> {
        const requestContextPromise = this.requestFactory.getSourceStats(terminology, source, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSourceStatsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint is mostly for NCIm to make source overlap statistics available.
     * Get statistics for the source within the specified terminology.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.
     * @param source terminology source code, e.g. \&#39;LNC\&#39; for &lt;i&gt;ncim&lt;/i&gt;.
     */
    public getSourceStats(terminology: string, source: string, _options?: Configuration): Observable<{ [key: string]: Array<StatisticsEntry>; }> {
        return this.getSourceStatsWithHttpInfo(terminology, source, _options).pipe(map((apiResponse: HttpInfo<{ [key: string]: Array<StatisticsEntry>; }>) => apiResponse.data));
    }

    /**
     * This endpoint will be deprecated in v2 in favor of top level subset endpoints.
     * Get the subset for the specified terminology and code.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.
     * @param code Subset code, e.g. \&#39;C116978\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubset1WithHttpInfo(terminology: string, code: string, include?: string, _options?: Configuration): Observable<HttpInfo<Concept>> {
        const requestContextPromise = this.requestFactory.getSubset1(terminology, code, include, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubset1WithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint will be deprecated in v2 in favor of top level subset endpoints.
     * Get the subset for the specified terminology and code.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.
     * @param code Subset code, e.g. \&#39;C116978\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubset1(terminology: string, code: string, include?: string, _options?: Configuration): Observable<Concept> {
        return this.getSubset1WithHttpInfo(terminology, code, include, _options).pipe(map((apiResponse: HttpInfo<Concept>) => apiResponse.data));
    }

    /**
     * This endpoint will be deprecated in v2 in favor of top level subset endpoints.
     * Get all subsets (or those specified by list parameter) for the specified terminology.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getSubsets1WithHttpInfo(terminology: string, include?: string, list?: string, _options?: Configuration): Observable<HttpInfo<Array<Concept>>> {
        const requestContextPromise = this.requestFactory.getSubsets1(terminology, include, list, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubsets1WithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint will be deprecated in v2 in favor of top level subset endpoints.
     * Get all subsets (or those specified by list parameter) for the specified terminology.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getSubsets1(terminology: string, include?: string, list?: string, _options?: Configuration): Observable<Array<Concept>> {
        return this.getSubsets1WithHttpInfo(terminology, include, list, _options).pipe(map((apiResponse: HttpInfo<Array<Concept>>) => apiResponse.data));
    }

    /**
     * Get all synonym sources for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getSynonymSourcesWithHttpInfo(terminology: string, _options?: Configuration): Observable<HttpInfo<Array<ConceptMinimal>>> {
        const requestContextPromise = this.requestFactory.getSynonymSources(terminology, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSynonymSourcesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all synonym sources for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getSynonymSources(terminology: string, _options?: Configuration): Observable<Array<ConceptMinimal>> {
        return this.getSynonymSourcesWithHttpInfo(terminology, _options).pipe(map((apiResponse: HttpInfo<Array<ConceptMinimal>>) => apiResponse.data));
    }

    /**
     * Get the synonym type for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Synonym type code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P90\&#39; or \&#39;FULL_SYN\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;Preferred_Name\&#39; or \&#39;Preferred name\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSynonymTypeWithHttpInfo(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Observable<HttpInfo<Concept>> {
        const requestContextPromise = this.requestFactory.getSynonymType(terminology, codeOrName, include, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSynonymTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the synonym type for the specified terminology and code/name
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param codeOrName Synonym type code (or name), e.g.&lt;ul&gt;&lt;li&gt;\&#39;P90\&#39; or \&#39;FULL_SYN\&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;\&#39;Preferred_Name\&#39; or \&#39;Preferred name\&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSynonymType(terminology: string, codeOrName: string, include?: string, _options?: Configuration): Observable<Concept> {
        return this.getSynonymTypeWithHttpInfo(terminology, codeOrName, include, _options).pipe(map((apiResponse: HttpInfo<Concept>) => apiResponse.data));
    }

    /**
     * Get all synonym types (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return synonym types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getSynonymTypesWithHttpInfo(terminology: string, include?: string, list?: string, _options?: Configuration): Observable<HttpInfo<Array<Concept>>> {
        const requestContextPromise = this.requestFactory.getSynonymTypes(terminology, include, list, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSynonymTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all synonym types (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return synonym types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getSynonymTypes(terminology: string, include?: string, list?: string, _options?: Configuration): Observable<Array<Concept>> {
        return this.getSynonymTypesWithHttpInfo(terminology, include, list, _options).pipe(map((apiResponse: HttpInfo<Array<Concept>>) => apiResponse.data));
    }

    /**
     * Get all term types for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getTermTypesWithHttpInfo(terminology: string, _options?: Configuration): Observable<HttpInfo<Array<ConceptMinimal>>> {
        const requestContextPromise = this.requestFactory.getTermTypes(terminology, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTermTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all term types for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getTermTypes(terminology: string, _options?: Configuration): Observable<Array<ConceptMinimal>> {
        return this.getTermTypesWithHttpInfo(terminology, _options).pipe(map((apiResponse: HttpInfo<Array<ConceptMinimal>>) => apiResponse.data));
    }

    /**
     * Get all available terminologies
     * @param latest Return terminologies with matching &lt;i&gt;latest&lt;/i&gt; value. e.g. true or false
     * @param tag Return terminologies with matching tag. e.g. \&#39;monthly\&#39; or \&#39;weekly\&#39; for &lt;i&gt;ncit&lt;/i&gt;
     * @param terminology Return entries with matching terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getTerminologiesWithHttpInfo(latest?: boolean, tag?: string, terminology?: string, _options?: Configuration): Observable<HttpInfo<Array<Terminology>>> {
        const requestContextPromise = this.requestFactory.getTerminologies(latest, tag, terminology, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTerminologiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all available terminologies
     * @param latest Return terminologies with matching &lt;i&gt;latest&lt;/i&gt; value. e.g. true or false
     * @param tag Return terminologies with matching tag. e.g. \&#39;monthly\&#39; or \&#39;weekly\&#39; for &lt;i&gt;ncit&lt;/i&gt;
     * @param terminology Return entries with matching terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getTerminologies(latest?: boolean, tag?: string, terminology?: string, _options?: Configuration): Observable<Array<Terminology>> {
        return this.getTerminologiesWithHttpInfo(latest, tag, terminology, _options).pipe(map((apiResponse: HttpInfo<Array<Terminology>>) => apiResponse.data));
    }

    /**
     * Get welcome text for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getWelcomeTextWithHttpInfo(terminology: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.getWelcomeText(terminology, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWelcomeTextWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get welcome text for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39; or \&#39;ncim\&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;)
     */
    public getWelcomeText(terminology: string, _options?: Configuration): Observable<string> {
        return this.getWelcomeTextWithHttpInfo(terminology, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { SearchEndpointApiRequestFactory, SearchEndpointApiResponseProcessor} from "../apis/SearchEndpointApi";
export class ObservableSearchEndpointApi {
    private requestFactory: SearchEndpointApiRequestFactory;
    private responseProcessor: SearchEndpointApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchEndpointApiRequestFactory,
        responseProcessor?: SearchEndpointApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SearchEndpointApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SearchEndpointApiResponseProcessor();
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
    public getSparqlBindingsWithHttpInfo(terminology: string, body: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<HttpInfo<MapResultList>> {
        const requestContextPromise = this.requestFactory.getSparqlBindings(terminology, body, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSparqlBindingsWithHttpInfo(rsp)));
            }));
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
    public getSparqlBindings(terminology: string, body: string, fromRecord?: number, pageSize?: number, xEVSRESTAPILicenseKey?: string, _options?: Configuration): Observable<MapResultList> {
        return this.getSparqlBindingsWithHttpInfo(terminology, body, fromRecord, pageSize, xEVSRESTAPILicenseKey, _options).pipe(map((apiResponse: HttpInfo<MapResultList>) => apiResponse.data));
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
    public searchWithHttpInfo(xEVSRESTAPILicenseKey?: string, terminology?: string, term?: string, type?: string, sort?: string, ascending?: boolean, include?: string, fromRecord?: number, pageSize?: number, conceptStatus?: string, property?: string, value?: string, definitionSource?: string, definitionType?: string, synonymSource?: string, synonymType?: string, synonymTermType?: string, subset?: string, _options?: Configuration): Observable<HttpInfo<ConceptResultList>> {
        const requestContextPromise = this.requestFactory.search(xEVSRESTAPILicenseKey, terminology, term, type, sort, ascending, include, fromRecord, pageSize, conceptStatus, property, value, definitionSource, definitionType, synonymSource, synonymType, synonymTermType, subset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchWithHttpInfo(rsp)));
            }));
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
    public search(xEVSRESTAPILicenseKey?: string, terminology?: string, term?: string, type?: string, sort?: string, ascending?: boolean, include?: string, fromRecord?: number, pageSize?: number, conceptStatus?: string, property?: string, value?: string, definitionSource?: string, definitionType?: string, synonymSource?: string, synonymType?: string, synonymTermType?: string, subset?: string, _options?: Configuration): Observable<ConceptResultList> {
        return this.searchWithHttpInfo(xEVSRESTAPILicenseKey, terminology, term, type, sort, ascending, include, fromRecord, pageSize, conceptStatus, property, value, definitionSource, definitionType, synonymSource, synonymType, synonymTermType, subset, _options).pipe(map((apiResponse: HttpInfo<ConceptResultList>) => apiResponse.data));
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
    public searchSingleTerminologyWithHttpInfo(terminology: string, xEVSRESTAPILicenseKey?: string, term?: string, type?: string, sort?: string, ascending?: boolean, include?: string, fromRecord?: number, pageSize?: number, conceptStatus?: string, property?: string, value?: string, definitionSource?: string, definitionType?: string, synonymSource?: string, synonymType?: string, synonymTermType?: string, subset?: string, _options?: Configuration): Observable<HttpInfo<ConceptResultList>> {
        const requestContextPromise = this.requestFactory.searchSingleTerminology(terminology, xEVSRESTAPILicenseKey, term, type, sort, ascending, include, fromRecord, pageSize, conceptStatus, property, value, definitionSource, definitionType, synonymSource, synonymType, synonymTermType, subset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchSingleTerminologyWithHttpInfo(rsp)));
            }));
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
    public searchSingleTerminology(terminology: string, xEVSRESTAPILicenseKey?: string, term?: string, type?: string, sort?: string, ascending?: boolean, include?: string, fromRecord?: number, pageSize?: number, conceptStatus?: string, property?: string, value?: string, definitionSource?: string, definitionType?: string, synonymSource?: string, synonymType?: string, synonymTermType?: string, subset?: string, _options?: Configuration): Observable<ConceptResultList> {
        return this.searchSingleTerminologyWithHttpInfo(terminology, xEVSRESTAPILicenseKey, term, type, sort, ascending, include, fromRecord, pageSize, conceptStatus, property, value, definitionSource, definitionType, synonymSource, synonymType, synonymTermType, subset, _options).pipe(map((apiResponse: HttpInfo<ConceptResultList>) => apiResponse.data));
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
    public searchSingleTerminologySparqlWithHttpInfo(terminology: string, body: string, include?: string, xEVSRESTAPILicenseKey?: string, term?: string, type?: string, sort?: string, ascending?: boolean, fromRecord?: number, pageSize?: number, conceptStatus?: string, property?: string, value?: string, definitionSource?: string, definitionType?: string, synonymSource?: string, synonymType?: string, synonymTermType?: string, subset?: string, _options?: Configuration): Observable<HttpInfo<ConceptResultList>> {
        const requestContextPromise = this.requestFactory.searchSingleTerminologySparql(terminology, body, include, xEVSRESTAPILicenseKey, term, type, sort, ascending, fromRecord, pageSize, conceptStatus, property, value, definitionSource, definitionType, synonymSource, synonymType, synonymTermType, subset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchSingleTerminologySparqlWithHttpInfo(rsp)));
            }));
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
    public searchSingleTerminologySparql(terminology: string, body: string, include?: string, xEVSRESTAPILicenseKey?: string, term?: string, type?: string, sort?: string, ascending?: boolean, fromRecord?: number, pageSize?: number, conceptStatus?: string, property?: string, value?: string, definitionSource?: string, definitionType?: string, synonymSource?: string, synonymType?: string, synonymTermType?: string, subset?: string, _options?: Configuration): Observable<ConceptResultList> {
        return this.searchSingleTerminologySparqlWithHttpInfo(terminology, body, include, xEVSRESTAPILicenseKey, term, type, sort, ascending, fromRecord, pageSize, conceptStatus, property, value, definitionSource, definitionType, synonymSource, synonymType, synonymTermType, subset, _options).pipe(map((apiResponse: HttpInfo<ConceptResultList>) => apiResponse.data));
    }

}

import { SubsetEndpointsApiRequestFactory, SubsetEndpointsApiResponseProcessor} from "../apis/SubsetEndpointsApi";
export class ObservableSubsetEndpointsApi {
    private requestFactory: SubsetEndpointsApiRequestFactory;
    private responseProcessor: SubsetEndpointsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SubsetEndpointsApiRequestFactory,
        responseProcessor?: SubsetEndpointsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SubsetEndpointsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SubsetEndpointsApiResponseProcessor();
    }

    /**
     * Get the subset for the specified terminology and code.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.
     * @param code Subset code, e.g. \&#39;C116978\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubsetWithHttpInfo(terminology: string, code: string, include?: string, _options?: Configuration): Observable<HttpInfo<Concept>> {
        const requestContextPromise = this.requestFactory.getSubset(terminology, code, include, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubsetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the subset for the specified terminology and code.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.
     * @param code Subset code, e.g. \&#39;C116978\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubset(terminology: string, code: string, include?: string, _options?: Configuration): Observable<Concept> {
        return this.getSubsetWithHttpInfo(terminology, code, include, _options).pipe(map((apiResponse: HttpInfo<Concept>) => apiResponse.data));
    }

    /**
     * Get subset members for the specified terminology and code. Concept subset endpoints will be deprecated in v2 in favor of top level subset endpoints.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code for a subset concept in the specified terminology, e.g. \&#39;C157225\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubsetMembersWithHttpInfo(terminology: string, code: string, fromRecord?: string, pageSize?: string, include?: string, _options?: Configuration): Observable<HttpInfo<Array<Concept>>> {
        const requestContextPromise = this.requestFactory.getSubsetMembers(terminology, code, fromRecord, pageSize, include, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubsetMembersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get subset members for the specified terminology and code. Concept subset endpoints will be deprecated in v2 in favor of top level subset endpoints.
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;
     * @param code Code for a subset concept in the specified terminology, e.g. \&#39;C157225\&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param fromRecord Start index of the search results
     * @param pageSize Max number of results to return
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     */
    public getSubsetMembers(terminology: string, code: string, fromRecord?: string, pageSize?: string, include?: string, _options?: Configuration): Observable<Array<Concept>> {
        return this.getSubsetMembersWithHttpInfo(terminology, code, fromRecord, pageSize, include, _options).pipe(map((apiResponse: HttpInfo<Array<Concept>>) => apiResponse.data));
    }

    /**
     * Get all subsets (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getSubsetsWithHttpInfo(terminology: string, include?: string, list?: string, _options?: Configuration): Observable<HttpInfo<Array<Concept>>> {
        const requestContextPromise = this.requestFactory.getSubsets(terminology, include, list, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubsetsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all subsets (or those specified by list parameter) for the specified terminology
     * @param terminology Terminology, e.g. \&#39;ncit\&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;.
     * @param include Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;\&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md\&#39; target&#x3D;\&#39;_blank\&#39;&gt;See here for detailed information&lt;/a&gt;.
     * @param list List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
     */
    public getSubsets(terminology: string, include?: string, list?: string, _options?: Configuration): Observable<Array<Concept>> {
        return this.getSubsetsWithHttpInfo(terminology, include, list, _options).pipe(map((apiResponse: HttpInfo<Array<Concept>>) => apiResponse.data));
    }

}
