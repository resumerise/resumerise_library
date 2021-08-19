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


import { Resume } from './resume.ts';

export class TranslationResumeDto {
    'resume': Resume;
    'sourceLang'?: string;
    'targetLang': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resume",
            "baseName": "resume",
            "type": "Resume"
        },
        {
            "name": "sourceLang",
            "baseName": "sourceLang",
            "type": "string"
        },
        {
            "name": "targetLang",
            "baseName": "targetLang",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TranslationResumeDto.attributeTypeMap;
    }
}
