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



export class WorkLabel {
    'categoryTitle'?: string;
    'company'?: string;
    'highlights'?: string;
    'id'?: string;
    'position'?: string;
    'summary'?: string;
    'website'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "categoryTitle",
            "baseName": "categoryTitle",
            "type": "string"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "string"
        },
        {
            "name": "highlights",
            "baseName": "highlights",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "string"
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string"
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WorkLabel.attributeTypeMap;
    }
}

