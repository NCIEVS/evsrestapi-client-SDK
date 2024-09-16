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
* Represents a map from a concept to concepts in other terminologies
*/
export class ConceptMap {
    /**
    * URI for this element in an rdf-based source file
    */
    'uri'?: string;
    /**
    * Used to indicate the total amount of data in cases where a limit is being applied
    */
    'ct'?: number;
    'mapsetCode'?: string;
    /**
    * Terminology of the source code, e.g. \'ncit\'
    */
    'source'?: string;
    /**
    * Preferred name of the source code
    */
    'sourceName'?: string;
    /**
    * Term type of the source code
    */
    'sourceTermType'?: string;
    /**
    * Source code of the map (the thing being mapped \'from\')
    */
    'sourceCode'?: string;
    /**
    * Human-readable label for the terminology of the source code, e.g. \'NCI Thesaurus\'
    */
    'sourceTerminology'?: string;
    /**
    * Terminology version of the source code
    */
    'sourceTerminologyVersion'?: string;
    /**
    * Indicates whether the source code terminology/version is currently loaded
    */
    'sourceLoaded'?: boolean;
    'type'?: string;
    'rank'?: string;
    'group'?: string;
    'rule'?: string;
    /**
    * Terminology of the target code, e.g. \'ncit\'
    */
    'target'?: string;
    'targetName'?: string;
    'targetTermType'?: string;
    /**
    * Target code of the map (the thing being mapped \'to\')
    */
    'targetCode'?: string;
    /**
    * Human-readable label for the terminology of the target code, e.g. \'NCI Thesaurus\'
    */
    'targetTerminology'?: string;
    /**
    * Terminology version of the target code
    */
    'targetTerminologyVersion'?: string;
    /**
    * Indicates whether the target terminology/version is currently loaded
    */
    'targetLoaded'?: boolean;
    'sortKey'?: string;
    'targetTermGroup'?: string;

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
            "name": "mapsetCode",
            "baseName": "mapsetCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceName",
            "baseName": "sourceName",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceTermType",
            "baseName": "sourceTermType",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceCode",
            "baseName": "sourceCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceTerminology",
            "baseName": "sourceTerminology",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceTerminologyVersion",
            "baseName": "sourceTerminologyVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceLoaded",
            "baseName": "sourceLoaded",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "rank",
            "baseName": "rank",
            "type": "string",
            "format": ""
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "string",
            "format": ""
        },
        {
            "name": "rule",
            "baseName": "rule",
            "type": "string",
            "format": ""
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetName",
            "baseName": "targetName",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetTermType",
            "baseName": "targetTermType",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetCode",
            "baseName": "targetCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetTerminology",
            "baseName": "targetTerminology",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetTerminologyVersion",
            "baseName": "targetTerminologyVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetLoaded",
            "baseName": "targetLoaded",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sortKey",
            "baseName": "sortKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetTermGroup",
            "baseName": "targetTermGroup",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConceptMap.attributeTypeMap;
    }

    public constructor() {
    }
}
