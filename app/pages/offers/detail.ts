import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../shared/offer.service';
import { Offer } from '../../shared/offer';

@Component({
    selector: 'offers',
    templateUrl: 'pages/offers/detail.html',
    styleUrls: ['pages/offers/detail.css'],
    providers: [OfferService]
})
export class DetailPage implements OnInit {

    constructor(private api: OfferService) { }

    public openDetail(title){
        
    }

    ngOnInit() {
    }

}