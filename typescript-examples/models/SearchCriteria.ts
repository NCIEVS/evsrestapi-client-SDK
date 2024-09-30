/**
 * NCI EVS Rest API
 * Endpoints to support searching, metadata, and content retrieval for EVS terminologies. To learn more about how to interact with this api, see the <a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK\">Github evsrestapi-client-SDK project.</a>
 *
 * OpenAPI spec version: 1.7.2.RELEASE
 * Contact: NCIAppSupport@nih.gov
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Criteria for a search or find operation
*/
export class SearchCriteria {
    /**
    * URI for this element in an rdf-based source file
    */
    'uri'?: string;
    /**
    * Used to indicate the total amount of data in cases where a limit is being applied
    */
    'ct'?: number;
    /**
    * Search term, e.g. \'heart\', or \'C3224\'
    */
    'term'?: string;
    /**
    * The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy
    */
    'type'?: string;
    /**
    * Include parameter value, e.g. \'minimal\', \'summary\', \'synonyms,properties,children\'
    */
    'include'?: string;
    /**
    * Sort field
    */
    'sort'?: string;
    /**
    * Indicates whether sort is ascending (true), descending (false), or not specified (null)
    */
    'ascending'?: boolean;
    /**
    * Start index of the search results
    */
    'fromRecord'?: number;
    /**
    * Max number of results to return
    */
    'pageSize'?: number;
    /**
    * Comma-separated list of concept status values to restrict search results by
    */
    'conceptStatus'?: Array<string>;
    /**
    * Comma-separated list of properties to restrict search results by
    */
    'property'?: Array<string>;
    /**
    * A property value to restrict search results by
    */
    'value'?: string;
    /**
    * Comma-separated list of synonym sources to restrict search results by
    */
    'synonymSource'?: Array<string>;
    /**
    * Comma-separated list of synonym types to restrict search results by
    */
    'synonymType'?: Array<string>;
    /**
    * Comma-separated list of definition sources to restrict search results by
    */
    'definitionSource'?: Array<string>;
    /**
    * Comma-separated list of definition types to restrict search results by
    */
    'definitionType'?: Array<string>;
    /**
    * Comma-separated list of synonym term types to restrict search results by
    */
    'synonymTermType'?: Array<string>;
    /**
    * Comma-separated list of subsets to restrict search results by, e.g. \'C157225\'
    */
    'subset'?: Array<string>;
    /**
    * Comma-separated list of concept codes to restrict search results by, e.g. \'C157225\'
    */
    'codeList'?: Array<string>;
    /**
    * Comma-separated list of terminologies to search
    */
    'terminology'?: Array<string>;
    /**
    * SPARQL query, only available as an output parameter
    */
    'sparql'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string",
            "format": ""
        },
        {
            "name": "ct",
            "baseName": "ct",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "term",
            "baseName": "term",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "include",
            "baseName": "include",
            "type": "string",
            "format": ""
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "string",
            "format": ""
        },
        {
            "name": "ascending",
            "baseName": "ascending",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fromRecord",
            "baseName": "fromRecord",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "conceptStatus",
            "baseName": "conceptStatus",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "property",
            "baseName": "property",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "synonymSource",
            "baseName": "synonymSource",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "synonymType",
            "baseName": "synonymType",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "definitionSource",
            "baseName": "definitionSource",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "definitionType",
            "baseName": "definitionType",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "synonymTermType",
            "baseName": "synonymTermType",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "subset",
            "baseName": "subset",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "codeList",
            "baseName": "codeList",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "terminology",
            "baseName": "terminology",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sparql",
            "baseName": "sparql",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SearchCriteria.attributeTypeMap;
    }

    public constructor() {
    }
}

