import { Injectable } from '@angular/core';
import { getFile, getImage, getJSON, getString, request } from "http";

import { Config } from './config';

@Injectable()
export class ApiService {

    get<T>(endpoint: string, init?: any) {
        return getJSON<T>(Config.apiUrl + endpoint);
    }

    post(endpoint: string, body: any) {
        return request({
            url: Config.apiUrl + endpoint,
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            content: body
        });
    }

}