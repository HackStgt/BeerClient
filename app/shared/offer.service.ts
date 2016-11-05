import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Offer } from './Offer';

@Injectable()
export class OfferService extends ApiService {

    // GET: /offers
    fetchAll(): Promise<Array<Offer>> {
        return this.get<Array<Offer>>('/offers');
    }
}