import localVarRequest from 'request.ts';

export * from './award.ts';
export * from './awardCommonView.ts';
export * from './awardLabel.ts';
export * from './awardLabelCommonView.ts';
export * from './basics.ts';
export * from './basicsCommonView.ts';
export * from './basicsLabel.ts';
export * from './basicsLabelCommonView.ts';
export * from './categoryKey.ts';
export * from './categoryKeyCommonView.ts';
export * from './categoryProperty.ts';
export * from './categoryPropertyCommonView.ts';
export * from './certification.ts';
export * from './certificationCommonView.ts';
export * from './certificationLabel.ts';
export * from './certificationLabelCommonView.ts';
export * from './education.ts';
export * from './educationCommonView.ts';
export * from './educationLabel.ts';
export * from './educationLabelCommonView.ts';
export * from './generalLabel.ts';
export * from './generalLabelCommonView.ts';
export * from './interest.ts';
export * from './interestCommonView.ts';
export * from './interestLabel.ts';
export * from './interestLabelCommonView.ts';
export * from './language.ts';
export * from './languageCommonView.ts';
export * from './languageLabel.ts';
export * from './languageLabelCommonView.ts';
export * from './location.ts';
export * from './locationCommonView.ts';
export * from './locationLabel.ts';
export * from './locationLabelCommonView.ts';
export * from './modelAndView.ts';
export * from './profile.ts';
export * from './profileCommonView.ts';
export * from './profileLabel.ts';
export * from './profileLabelCommonView.ts';
export * from './project.ts';
export * from './projectCommonView.ts';
export * from './projectLabel.ts';
export * from './projectLabelCommonView.ts';
export * from './publication.ts';
export * from './publicationCommonView.ts';
export * from './publicationLabel.ts';
export * from './publicationLabelCommonView.ts';
export * from './reference.ts';
export * from './referenceCommonView.ts';
export * from './referenceLabel.ts';
export * from './referenceLabelCommonView.ts';
export * from './resume.ts';
export * from './resumeCommonView.ts';
export * from './settings.ts';
export * from './settingsCommonView.ts';
export * from './skill.ts';
export * from './skillCommonView.ts';
export * from './skillLabel.ts';
export * from './skillLabelCommonView.ts';
export * from './subscription.ts';
export * from './subscriptionCommonView.ts';
export * from './supportedLanguageDtoCommonView.ts';
export * from './themeLabel.ts';
export * from './themeLabelCommonView.ts';
export * from './translationResumeDto.ts';
export * from './user.ts';
export * from './userCommonView.ts';
export * from './view.ts';
export * from './volunteer.ts';
export * from './volunteerCommonView.ts';
export * from './volunteerLabel.ts';
export * from './volunteerLabelCommonView.ts';
export * from './widget.ts';
export * from './widgetCommonView.ts';
export * from './work.ts';
export * from './workCommonView.ts';
export * from './workLabel.ts';
export * from './workLabelCommonView.ts';

import * as fs from 'fs.ts';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Award } from './award.ts';
import { AwardCommonView } from './awardCommonView.ts';
import { AwardLabel } from './awardLabel.ts';
import { AwardLabelCommonView } from './awardLabelCommonView.ts';
import { Basics } from './basics.ts';
import { BasicsCommonView } from './basicsCommonView.ts';
import { BasicsLabel } from './basicsLabel.ts';
import { BasicsLabelCommonView } from './basicsLabelCommonView.ts';
import { CategoryKey } from './categoryKey.ts';
import { CategoryKeyCommonView } from './categoryKeyCommonView.ts';
import { CategoryProperty } from './categoryProperty.ts';
import { CategoryPropertyCommonView } from './categoryPropertyCommonView.ts';
import { Certification } from './certification.ts';
import { CertificationCommonView } from './certificationCommonView.ts';
import { CertificationLabel } from './certificationLabel.ts';
import { CertificationLabelCommonView } from './certificationLabelCommonView.ts';
import { Education } from './education.ts';
import { EducationCommonView } from './educationCommonView.ts';
import { EducationLabel } from './educationLabel.ts';
import { EducationLabelCommonView } from './educationLabelCommonView.ts';
import { GeneralLabel } from './generalLabel.ts';
import { GeneralLabelCommonView } from './generalLabelCommonView.ts';
import { Interest } from './interest.ts';
import { InterestCommonView } from './interestCommonView.ts';
import { InterestLabel } from './interestLabel.ts';
import { InterestLabelCommonView } from './interestLabelCommonView.ts';
import { Language } from './language.ts';
import { LanguageCommonView } from './languageCommonView.ts';
import { LanguageLabel } from './languageLabel.ts';
import { LanguageLabelCommonView } from './languageLabelCommonView.ts';
import { Location } from './location.ts';
import { LocationCommonView } from './locationCommonView.ts';
import { LocationLabel } from './locationLabel.ts';
import { LocationLabelCommonView } from './locationLabelCommonView.ts';
import { ModelAndView } from './modelAndView.ts';
import { Profile } from './profile.ts';
import { ProfileCommonView } from './profileCommonView.ts';
import { ProfileLabel } from './profileLabel.ts';
import { ProfileLabelCommonView } from './profileLabelCommonView.ts';
import { Project } from './project.ts';
import { ProjectCommonView } from './projectCommonView.ts';
import { ProjectLabel } from './projectLabel.ts';
import { ProjectLabelCommonView } from './projectLabelCommonView.ts';
import { Publication } from './publication.ts';
import { PublicationCommonView } from './publicationCommonView.ts';
import { PublicationLabel } from './publicationLabel.ts';
import { PublicationLabelCommonView } from './publicationLabelCommonView.ts';
import { Reference } from './reference.ts';
import { ReferenceCommonView } from './referenceCommonView.ts';
import { ReferenceLabel } from './referenceLabel.ts';
import { ReferenceLabelCommonView } from './referenceLabelCommonView.ts';
import { Resume } from './resume.ts';
import { ResumeCommonView } from './resumeCommonView.ts';
import { Settings } from './settings.ts';
import { SettingsCommonView } from './settingsCommonView.ts';
import { Skill } from './skill.ts';
import { SkillCommonView } from './skillCommonView.ts';
import { SkillLabel } from './skillLabel.ts';
import { SkillLabelCommonView } from './skillLabelCommonView.ts';
import { Subscription } from './subscription.ts';
import { SubscriptionCommonView } from './subscriptionCommonView.ts';
import { SupportedLanguageDtoCommonView } from './supportedLanguageDtoCommonView.ts';
import { ThemeLabel } from './themeLabel.ts';
import { ThemeLabelCommonView } from './themeLabelCommonView.ts';
import { TranslationResumeDto } from './translationResumeDto.ts';
import { User } from './user.ts';
import { UserCommonView } from './userCommonView.ts';
import { View } from './view.ts';
import { Volunteer } from './volunteer.ts';
import { VolunteerCommonView } from './volunteerCommonView.ts';
import { VolunteerLabel } from './volunteerLabel.ts';
import { VolunteerLabelCommonView } from './volunteerLabelCommonView.ts';
import { Widget } from './widget.ts';
import { WidgetCommonView } from './widgetCommonView.ts';
import { Work } from './work.ts';
import { WorkCommonView } from './workCommonView.ts';
import { WorkLabel } from './workLabel.ts';
import { WorkLabelCommonView } from './workLabelCommonView.ts';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ModelAndView.StatusEnum": ModelAndView.StatusEnum,
        "Resume.PrivacyModeEnum": Resume.PrivacyModeEnum,
        "Resume.SyncConflictStatusEnum": Resume.SyncConflictStatusEnum,
        "ResumeCommonView.PrivacyModeEnum": ResumeCommonView.PrivacyModeEnum,
        "ResumeCommonView.SyncConflictStatusEnum": ResumeCommonView.SyncConflictStatusEnum,
        "Subscription.StatusEnum": Subscription.StatusEnum,
        "SubscriptionCommonView.StatusEnum": SubscriptionCommonView.StatusEnum,
}

let typeMap: {[index: string]: any} = {
    "Award": Award,
    "AwardCommonView": AwardCommonView,
    "AwardLabel": AwardLabel,
    "AwardLabelCommonView": AwardLabelCommonView,
    "Basics": Basics,
    "BasicsCommonView": BasicsCommonView,
    "BasicsLabel": BasicsLabel,
    "BasicsLabelCommonView": BasicsLabelCommonView,
    "CategoryKey": CategoryKey,
    "CategoryKeyCommonView": CategoryKeyCommonView,
    "CategoryProperty": CategoryProperty,
    "CategoryPropertyCommonView": CategoryPropertyCommonView,
    "Certification": Certification,
    "CertificationCommonView": CertificationCommonView,
    "CertificationLabel": CertificationLabel,
    "CertificationLabelCommonView": CertificationLabelCommonView,
    "Education": Education,
    "EducationCommonView": EducationCommonView,
    "EducationLabel": EducationLabel,
    "EducationLabelCommonView": EducationLabelCommonView,
    "GeneralLabel": GeneralLabel,
    "GeneralLabelCommonView": GeneralLabelCommonView,
    "Interest": Interest,
    "InterestCommonView": InterestCommonView,
    "InterestLabel": InterestLabel,
    "InterestLabelCommonView": InterestLabelCommonView,
    "Language": Language,
    "LanguageCommonView": LanguageCommonView,
    "LanguageLabel": LanguageLabel,
    "LanguageLabelCommonView": LanguageLabelCommonView,
    "Location": Location,
    "LocationCommonView": LocationCommonView,
    "LocationLabel": LocationLabel,
    "LocationLabelCommonView": LocationLabelCommonView,
    "ModelAndView": ModelAndView,
    "Profile": Profile,
    "ProfileCommonView": ProfileCommonView,
    "ProfileLabel": ProfileLabel,
    "ProfileLabelCommonView": ProfileLabelCommonView,
    "Project": Project,
    "ProjectCommonView": ProjectCommonView,
    "ProjectLabel": ProjectLabel,
    "ProjectLabelCommonView": ProjectLabelCommonView,
    "Publication": Publication,
    "PublicationCommonView": PublicationCommonView,
    "PublicationLabel": PublicationLabel,
    "PublicationLabelCommonView": PublicationLabelCommonView,
    "Reference": Reference,
    "ReferenceCommonView": ReferenceCommonView,
    "ReferenceLabel": ReferenceLabel,
    "ReferenceLabelCommonView": ReferenceLabelCommonView,
    "Resume": Resume,
    "ResumeCommonView": ResumeCommonView,
    "Settings": Settings,
    "SettingsCommonView": SettingsCommonView,
    "Skill": Skill,
    "SkillCommonView": SkillCommonView,
    "SkillLabel": SkillLabel,
    "SkillLabelCommonView": SkillLabelCommonView,
    "Subscription": Subscription,
    "SubscriptionCommonView": SubscriptionCommonView,
    "SupportedLanguageDtoCommonView": SupportedLanguageDtoCommonView,
    "ThemeLabel": ThemeLabel,
    "ThemeLabelCommonView": ThemeLabelCommonView,
    "TranslationResumeDto": TranslationResumeDto,
    "User": User,
    "UserCommonView": UserCommonView,
    "View": View,
    "Volunteer": Volunteer,
    "VolunteerCommonView": VolunteerCommonView,
    "VolunteerLabel": VolunteerLabel,
    "VolunteerLabelCommonView": VolunteerLabelCommonView,
    "Widget": Widget,
    "WidgetCommonView": WidgetCommonView,
    "Work": Work,
    "WorkCommonView": WorkCommonView,
    "WorkLabel": WorkLabel,
    "WorkLabelCommonView": WorkLabelCommonView,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '.ts';
    public password: string = '.ts';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '.ts';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '.ts';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '.ts';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '.ts';
    public password: string = '.ts';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
