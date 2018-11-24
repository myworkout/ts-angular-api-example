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
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetTeamInvitationsResponse } from '../model/getTeamInvitationsResponse';
import { GetTeamMembersResponse } from '../model/getTeamMembersResponse';
import { GetTeamsResponse } from '../model/getTeamsResponse';
import { UpdateTeamMembersInput } from '../model/updateTeamMembersInput';
import { UpdateTeamMembersResponse } from '../model/updateTeamMembersResponse';
import { Configuration } from '../configuration';
export declare class TeamService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    /**
     * Get list of invitations to a team
     *
     * @param teamId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getTeamInvitations(teamId: number, observe?: 'body', reportProgress?: boolean): Observable<GetTeamInvitationsResponse>;
    getTeamInvitations(teamId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetTeamInvitationsResponse>>;
    getTeamInvitations(teamId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetTeamInvitationsResponse>>;
    /**
     * Get list of members in teams
     *
     * @param teamId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getTeamMembers(teamId: number, observe?: 'body', reportProgress?: boolean): Observable<GetTeamMembersResponse>;
    getTeamMembers(teamId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetTeamMembersResponse>>;
    getTeamMembers(teamId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetTeamMembersResponse>>;
    /**
     * Get list of teams
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getTeams(observe?: 'body', reportProgress?: boolean): Observable<GetTeamsResponse>;
    getTeams(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetTeamsResponse>>;
    getTeams(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetTeamsResponse>>;
    /**
     * Update members of a team
     *
     * @param teamId
     * @param UpdateTeamMembersInput
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateTeamMembers(teamId: number, UpdateTeamMembersInput: UpdateTeamMembersInput, observe?: 'body', reportProgress?: boolean): Observable<UpdateTeamMembersResponse>;
    updateTeamMembers(teamId: number, UpdateTeamMembersInput: UpdateTeamMembersInput, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UpdateTeamMembersResponse>>;
    updateTeamMembers(teamId: number, UpdateTeamMembersInput: UpdateTeamMembersInput, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UpdateTeamMembersResponse>>;
}