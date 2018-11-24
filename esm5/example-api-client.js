import { __values } from 'tslib';
import { InjectionToken, Inject, Injectable, Optional, NgModule, SkipSelf, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

var BASE_PATH = new InjectionToken('basePath');
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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
TeamService.ctorParameters = function () { return [
    { type: HttpClient },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] }] },
    { type: Configuration, decorators: [{ type: Optional }] }
]; };
TeamService.ngInjectableDef = defineInjectable({ factory: function TeamService_Factory() { return new TeamService(inject(HttpClient), inject(BASE_PATH, 8), inject(Configuration, 8)); }, token: TeamService, providedIn: "root" });
var UserService = /** @class */ (function () {
    function UserService(httpClient, basePath, configuration) {
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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
UserService.ctorParameters = function () { return [
    { type: HttpClient },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] }] },
    { type: Configuration, decorators: [{ type: Optional }] }
]; };
UserService.ngInjectableDef = defineInjectable({ factory: function UserService_Factory() { return new UserService(inject(HttpClient), inject(BASE_PATH, 8), inject(Configuration, 8)); }, token: UserService, providedIn: "root" });
var APIS = [TeamService, UserService];
var TeamMember;
(function (TeamMember) {
    TeamMember.RoleEnum = {
        Member: (('member')),
        Captain: (('captain'))
    };
})(TeamMember || (TeamMember = {}));
var ApiModule = /** @class */ (function () {
    function ApiModule(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
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
ApiModule.ctorParameters = function () { return [
    { type: ApiModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: HttpClient, decorators: [{ type: Optional }] }
]; };

export { APIS, TeamService, UserService, TeamMember, BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule };
//# sourceMappingURL=example-api-client.js.map
