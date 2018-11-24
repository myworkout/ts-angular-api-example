import { InjectionToken, Inject, Injectable, Optional, NgModule, SkipSelf, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const BASE_PATH = new InjectionToken('basePath');
/** @type {?} */
const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */

class Configuration {
    /**
     * @param {?=} configurationParameters
     */
    constructor(configurationParameters = {}) {
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {\@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {?} contentTypes - the array of content types that are available for selection
     * @return {?} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderContentType(contentTypes) {
        if (contentTypes.length === 0) {
            return undefined;
        }
        /** @type {?} */
        let type = contentTypes.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    }
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {\@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {?} accepts - the array of content types that are available for selection.
     * @return {?} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderAccept(accepts) {
        if (accepts.length === 0) {
            return undefined;
        }
        /** @type {?} */
        let type = accepts.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    }
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param {?} mime - MIME (Multipurpose Internet Mail Extensions)
     * @return {?} True if the given MIME is JSON, false otherwise.
     */
    isJsonMime(mime) {
        /** @type {?} */
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Myworkout API
 * Documentation for Myworkout API.
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
class TeamService {
    /**
     * @param {?} httpClient
     * @param {?} basePath
     * @param {?} configuration
     */
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8080';
        this.defaultHeaders = new HttpHeaders();
        this.configuration = new Configuration();
        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;
        }
        else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }
    /**
     * @private
     * @param {?} consumes string[] mime-types
     * @return {?} true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        /** @type {?} */
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} teamId
     * @param {?=} observe
     * @param {?=} reportProgress
     * @return {?}
     */
    getTeamInvitations(teamId, observe = 'body', reportProgress = false) {
        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling getTeamInvitations.');
        }
        /** @type {?} */
        let headers = this.defaultHeaders;
        // to determine the Accept header
        /** @type {?} */
        let httpHeaderAccepts = [
            'application/json'
        ];
        /** @type {?} */
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        /** @type {?} */
        return this.httpClient.get(`${this.configuration.basePath}/teams/${encodeURIComponent(String(teamId))}/invitations`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    /**
     * @param {?} teamId
     * @param {?=} observe
     * @param {?=} reportProgress
     * @return {?}
     */
    getTeamMembers(teamId, observe = 'body', reportProgress = false) {
        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling getTeamMembers.');
        }
        /** @type {?} */
        let headers = this.defaultHeaders;
        // to determine the Accept header
        /** @type {?} */
        let httpHeaderAccepts = [
            'application/json'
        ];
        /** @type {?} */
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        /** @type {?} */
        return this.httpClient.get(`${this.configuration.basePath}/teams/${encodeURIComponent(String(teamId))}/members`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    /**
     * @param {?=} observe
     * @param {?=} reportProgress
     * @return {?}
     */
    getTeams(observe = 'body', reportProgress = false) {
        /** @type {?} */
        let headers = this.defaultHeaders;
        // to determine the Accept header
        /** @type {?} */
        let httpHeaderAccepts = [
            'application/json'
        ];
        /** @type {?} */
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        /** @type {?} */
        return this.httpClient.get(`${this.configuration.basePath}/teams`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    /**
     * @param {?} teamId
     * @param {?} UpdateTeamMembersInput
     * @param {?=} observe
     * @param {?=} reportProgress
     * @return {?}
     */
    updateTeamMembers(teamId, UpdateTeamMembersInput, observe = 'body', reportProgress = false) {
        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling updateTeamMembers.');
        }
        if (UpdateTeamMembersInput === null || UpdateTeamMembersInput === undefined) {
            throw new Error('Required parameter UpdateTeamMembersInput was null or undefined when calling updateTeamMembers.');
        }
        /** @type {?} */
        let headers = this.defaultHeaders;
        // to determine the Accept header
        /** @type {?} */
        let httpHeaderAccepts = [
            'application/json'
        ];
        /** @type {?} */
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        /** @type {?} */
        const consumes = [
            'application/json'
        ];
        /** @type {?} */
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(`${this.configuration.basePath}/teams/${encodeURIComponent(String(teamId))}/members`, UpdateTeamMembersInput, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
TeamService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
TeamService.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] }] },
    { type: Configuration, decorators: [{ type: Optional }] }
];
/** @nocollapse */ TeamService.ngInjectableDef = defineInjectable({ factory: function TeamService_Factory() { return new TeamService(inject(HttpClient), inject(BASE_PATH, 8), inject(Configuration, 8)); }, token: TeamService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Myworkout API
 * Documentation for Myworkout API.
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
class UserService {
    /**
     * @param {?} httpClient
     * @param {?} basePath
     * @param {?} configuration
     */
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8080';
        this.defaultHeaders = new HttpHeaders();
        this.configuration = new Configuration();
        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;
        }
        else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }
    /**
     * @private
     * @param {?} consumes string[] mime-types
     * @return {?} true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        /** @type {?} */
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?=} observe
     * @param {?=} reportProgress
     * @return {?}
     */
    getUsers(observe = 'body', reportProgress = false) {
        /** @type {?} */
        let headers = this.defaultHeaders;
        // to determine the Accept header
        /** @type {?} */
        let httpHeaderAccepts = [
            'application/json'
        ];
        /** @type {?} */
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        /** @type {?} */
        return this.httpClient.get(`${this.configuration.basePath}/users`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
UserService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
UserService.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] }] },
    { type: Configuration, decorators: [{ type: Optional }] }
];
/** @nocollapse */ UserService.ngInjectableDef = defineInjectable({ factory: function UserService_Factory() { return new UserService(inject(HttpClient), inject(BASE_PATH, 8), inject(Configuration, 8)); }, token: UserService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const APIS = [TeamService, UserService];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Myworkout API
 * Documentation for Myworkout API.
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Myworkout API
 * Documentation for Myworkout API.
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Myworkout API
 * Documentation for Myworkout API.
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Myworkout API
 * Documentation for Myworkout API.
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
// WARNING: interface has both a type and a value, skipping emit
var TeamMember;
(function (TeamMember) {
    TeamMember.RoleEnum = {
        Member: (/** @type {?} */ ('member')),
        Captain: (/** @type {?} */ ('captain'))
    };
})(TeamMember || (TeamMember = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Myworkout API
 * Documentation for Myworkout API.
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Myworkout API
 * Documentation for Myworkout API.
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApiModule {
    /**
     * @param {?} parentModule
     * @param {?} http
     */
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    /**
     * @param {?} configurationFactory
     * @return {?}
     */
    static forRoot(configurationFactory) {
        return {
            ngModule: ApiModule,
            providers: [{ provide: Configuration, useFactory: configurationFactory }]
        };
    }
}
ApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [],
                exports: [],
                providers: [
                    TeamService,
                    UserService
                ]
            },] },
];
/** @nocollapse */
ApiModule.ctorParameters = () => [
    { type: ApiModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: HttpClient, decorators: [{ type: Optional }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { APIS, TeamService, UserService, TeamMember, BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule };
//# sourceMappingURL=example-api-client.js.map
