import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../shared/offer.service';
import { Offer } from '../../shared/offer';

@Component({
    selector: 'offers',
    templateUrl: 'pages/offers/offers.html',
    styleUrls: ['pages/offers/offers.css'],
    providers: []
})
export class OffersPage implements OnInit {

    public offers: Offer[] = [];

    constructor(private api: OfferService) { }

    ngOnInit() {
        let users = this.api.get<Offer[]>('/offers')
            .then(offers => this.offers = offers)
            .catch(error => console.log('ERROR: ' + error));
    }

}