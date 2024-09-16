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

import { Qualifier } from '../models/Qualifier';
import { HttpFile } from '../http/http';

/**
* Represents a type/value property on a concept
*/
export class Property {
    /**
    * URI for this element in an rdf-based source file
    */
    'uri'?: string;
    /**
    * Used to indicate the total amount of data in cases where a limit is being applied
    */
    'ct'?: number;
    /**
    * Property type
    */
    'type'?: string;
    /**
    * Property value
    */
    'value'?: string;
    /**
    * Used by search calls to provide information for highlighting a view of results
    */
    'highlight'?: string;
    /**
    * Type/value qualifiers on the property
    */
    'qualifiers'?: Array<Qualifier>;
    /**
    * Property source
    */
    'source'?: string;

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
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "highlight",
            "baseName": "highlight",
            "type": "string",
            "format": ""
        },
        {
            "name": "qualifiers",
            "baseName": "qualifiers",
            "type": "Array<Qualifier>",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Property.attributeTypeMap;
    }

    public constructor() {
    }
}
