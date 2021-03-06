/**
 * karmacv-ws
 * Restful web service for resumes of resumerise app.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: eltonmarku@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
* The resume class
*/
export class Skill {
    'created'?: Date;
    'id'?: string;
    'keywords'?: Array<string>;
    'level'?: string;
    'name'?: string;
    'updated'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "keywords",
            "baseName": "keywords",
            "type": "Array<string>"
        },
        {
            "name": "level",
            "baseName": "level",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return Skill.attributeTypeMap;
    }
}

