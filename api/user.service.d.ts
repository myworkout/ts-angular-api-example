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
import { GetUsersResponse } from '../model/getUsersResponse';
import { Configuration } from '../configuration';
export declare class UserService {
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
     * Get list of registered users
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getUsers(observe?: 'body', reportProgress?: boolean): Observable<GetUsersResponse>;
    getUsers(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetUsersResponse>>;
    getUsers(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetUsersResponse>>;
}
