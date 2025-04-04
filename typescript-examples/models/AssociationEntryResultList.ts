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

import { AssociationEntry } from '../models/AssociationEntry';
import { SearchCriteria } from '../models/SearchCriteria';
import { HttpFile } from '../http/http';

export class AssociationEntryResultList {
    /**
    * URI for this element in an rdf-based source file
    */
    'uri'?: string;
    /**
    * Used to indicate the total amount of data in cases where a limit is being applied
    */
    'ct'?: number;
    /**
    * Total nubmer of results (if paging is not considered)
    */
    'total'?: number;
    /**
    * Total time taken to compute the result
    */
    'timeTaken'?: number;
    'parameters'?: SearchCriteria;
    'associationEntries'?: Array<AssociationEntry>;

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
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "timeTaken",
            "baseName": "timeTaken",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "SearchCriteria",
            "format": ""
        },
        {
            "name": "associationEntries",
            "baseName": "associationEntries",
            "type": "Array<AssociationEntry>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AssociationEntryResultList.attributeTypeMap;
    }

    public constructor() {
    }
}

