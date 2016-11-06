import { Injectable } from '@angular/core';
import { getFile, getImage, getJSON, getString, request } from "http";

import { Config } from './config';

@Injectable()
export abstract class ApiService {

    get<T>(endpoint: string, init?: any) {
        return getJSON<T>(Config.apiUrl + endpoint);
    }

}