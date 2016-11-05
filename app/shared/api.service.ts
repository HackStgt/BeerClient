import { Injectable } from '@angular/core';
import { getFile, getImage, getJSON, getString, request } from "http";
import * as appSettings from "application-settings";

@Injectable()
export class ApiService {

    apiUrl: string;

    constructor() {
        this.apiUrl = appSettings.getString('apiUrl', 'http://192.168.2.91:8080');
    }

    get<T>(endpoint: string, init?: any) {
        return getJSON<T>(this.apiUrl + endpoint);
    }

}