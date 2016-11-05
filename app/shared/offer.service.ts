import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Offer } from './Offer';

@Injectable()
export class OfferService extends ApiService {

    // GET: /offers
    fetchAll(): Promise<Offer[]> {
        return this.get<Offer[]>('/offers');
    }
}