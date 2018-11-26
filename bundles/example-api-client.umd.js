(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
	typeof define === 'function' && define.amd ? define('example-api-client', ['exports', '@angular/core', '@angular/common/http'], factory) :
	(factory((global['example-api-client'] = {}),global.ng.core,global.ng.common.http));
}(this, (function (exports,core,http) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */









function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

var BASE_PATH = new core.InjectionToken('basePath');
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};
var Configuration = /** @class */ (function () {
    function Configuration(configurationParameters) {
        if (configurationParameters === void 0) { configurationParameters = {}; }
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    Configuration.prototype.selectHeaderContentType = function (contentTypes) {
        var _this = this;
        if (contentTypes.length === 0) {
            return undefined;
        }
        var type = contentTypes.find(function (x) { return _this.isJsonMime(x); });
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    };
    Configuration.prototype.selectHeaderAccept = function (accepts) {
        var _this = this;
        if (accepts.length === 0) {
            return undefined;
        }
        var type = accepts.find(function (x) { return _this.isJsonMime(x); });
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    };
    Configuration.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    return Configuration;
}());
var TeamService = /** @class */ (function () {
    function TeamService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8080/api';
        this.defaultHeaders = new http.HttpHeaders();
        this.configuration = new Configuration();
        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;
        }
        else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }
    TeamService.prototype.canConsumeForm = function (consumes) {
        var e_1, _a;
        var form = 'multipart/form-data';
        try {
            for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                var consume = consumes_1_1.value;
                if (form === consume) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    TeamService.prototype.getTeamInvitations = function (teamId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling getTeamInvitations.');
        }
        var headers = this.defaultHeaders;
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.configuration.basePath + "/teams/" + encodeURIComponent(String(teamId)) + "/invitations", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TeamService.prototype.getTeamMembers = function (teamId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling getTeamMembers.');
        }
        var headers = this.defaultHeaders;
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.configuration.basePath + "/teams/" + encodeURIComponent(String(teamId)) + "/members", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TeamService.prototype.getTeams = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.configuration.basePath + "/teams", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TeamService.prototype.updateTeamMembers = function (teamId, UpdateTeamMembersInput, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling updateTeamMembers.');
        }
        if (UpdateTeamMembersInput === null || UpdateTeamMembersInput === undefined) {
            throw new Error('Required parameter UpdateTeamMembersInput was null or undefined when calling updateTeamMembers.');
        }
        var headers = this.defaultHeaders;
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.configuration.basePath + "/teams/" + encodeURIComponent(String(teamId)) + "/members", UpdateTeamMembersInput, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    return TeamService;
}());
TeamService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
TeamService.ctorParameters = function () { return [
    { type: http.HttpClient },
    { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
    { type: Configuration, decorators: [{ type: core.Optional }] }
]; };
TeamService.ngInjectableDef = core.defineInjectable({ factory: function TeamService_Factory() { return new TeamService(core.inject(http.HttpClient), core.inject(BASE_PATH, 8), core.inject(Configuration, 8)); }, token: TeamService, providedIn: "root" });
var UserService = /** @class */ (function () {
    function UserService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8080/api';
        this.defaultHeaders = new http.HttpHeaders();
        this.configuration = new Configuration();
        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;
        }
        else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }
    UserService.prototype.canConsumeForm = function (consumes) {
        var e_2, _a;
        var form = 'multipart/form-data';
        try {
            for (var consumes_2 = __values(consumes), consumes_2_1 = consumes_2.next(); !consumes_2_1.done; consumes_2_1 = consumes_2.next()) {
                var consume = consumes_2_1.value;
                if (form === consume) {
                    return true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (consumes_2_1 && !consumes_2_1.done && (_a = consumes_2.return)) _a.call(consumes_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return false;
    };
    UserService.prototype.getUsers = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.configuration.basePath + "/users", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    return UserService;
}());
UserService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
UserService.ctorParameters = function () { return [
    { type: http.HttpClient },
    { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [BASE_PATH,] }] },
    { type: Configuration, decorators: [{ type: core.Optional }] }
]; };
UserService.ngInjectableDef = core.defineInjectable({ factory: function UserService_Factory() { return new UserService(core.inject(http.HttpClient), core.inject(BASE_PATH, 8), core.inject(Configuration, 8)); }, token: UserService, providedIn: "root" });
var APIS = [TeamService, UserService];
(function (TeamMember) {
    TeamMember.RoleEnum = {
        Member: (('member')),
        Captain: (('captain'))
    };
})(exports.TeamMember || (exports.TeamMember = {}));
var ApiModule = /** @class */ (function () {
    function ApiModule(parentModule, http$$1) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http$$1) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    ApiModule.forRoot = function (configurationFactory) {
        return {
            ngModule: ApiModule,
            providers: [{ provide: Configuration, useFactory: configurationFactory }]
        };
    };
    return ApiModule;
}());
ApiModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [],
                declarations: [],
                exports: [],
                providers: [
                    TeamService,
                    UserService
                ]
            },] },
];
ApiModule.ctorParameters = function () { return [
    { type: ApiModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] },
    { type: http.HttpClient, decorators: [{ type: core.Optional }] }
]; };

exports.APIS = APIS;
exports.TeamService = TeamService;
exports.UserService = UserService;
exports.BASE_PATH = BASE_PATH;
exports.COLLECTION_FORMATS = COLLECTION_FORMATS;
exports.Configuration = Configuration;
exports.ApiModule = ApiModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=example-api-client.umd.js.map
