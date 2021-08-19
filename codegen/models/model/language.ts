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
export class Language {
    'created'?: Date;
    'fluency'?: string;
    'id'?: string;
    'language'?: string;
    'updated'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "fluency",
            "baseName": "fluency",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return Language.attributeTypeMap;
    }
}

