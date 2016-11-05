import { Component } from '@angular/core';

import { Offer } from '../../shared/offer';

@Component({
    selector: 'offers',
    templateUrl: 'pages/offers/offers.html',
    styleUrls: ['pages/offers/offers.css']
})
export class OffersPage {

    public offers: Array<Offer>;

    constructor() {
        console.log('CONSTRUCTOR BEGIN');
        this.offers = new Array<Offer>();

        for (let i = 0; i < 10; i++) {
            let o = new Offer();
            this.offers.push(o);
        }

        console.log('CONSTRUCTOR END');
    }
}