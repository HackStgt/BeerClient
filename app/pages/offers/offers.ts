import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../shared/offer.service';
import { Offer } from '../../shared/offer';
import { Router } from "@angular/router";
import frameModule = require("ui/frame");
var topmost = frameModule.topmost();

@Component({
    selector: 'offers',
    templateUrl: 'pages/offers/offers.html',
    styleUrls: ['pages/offers/offers.css'],
    providers: [OfferService]
})
export class OffersPage implements OnInit {

    public offers: Array<Offer> = [new Offer("Titel", "Kategorie", 200, 150), new Offer("Titel", "Kategorie", 200, 150), new Offer("Titel", "Kategorie", 200, 150), new Offer("Titel", "Kategorie", 200, 150),new Offer("Titel", "Kategorie", 200, 150), new Offer("Titel", "Kategorie", 200, 150), new Offer("Titel", "Kategorie", 200, 150), new Offer("Titel", "Kategorie", 200, 150), new Offer("Titel", "Kategorie", 200, 150), new Offer("Titel", "Kategorie", 200, 150), new Offer("Titel", "Kategorie", 200, 150)];

    constructor(private api: OfferService, private router: Router) { }

    public openDetail(title){
        var navigationEntry = {
        moduleName: "DetailPage",
        context: {info: title},
        animated: false
        };
        console.log(navigationEntry.context.info);
        console.log(title);
        topmost.navigate(navigationEntry);
    }

    ngOnInit() {
        this.api.get<Offer[]>('/offers')
            .then(offers => {
                console.info('API GET /offers: ' + offers);
                this.offers = offers;
            },
            error => console.log('API REJECTED: ' + error))
            .catch(error => console.error('API ERROR: ' + error));
    }

}