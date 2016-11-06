import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../shared/offer.service';
import { Offer } from '../../shared/offer';

@Component({
    selector: 'offers',
    templateUrl: 'pages/offers/detail.html',
    styleUrls: ['pages/offers/detail.css'],
    providers: [OfferService]
})
export class DetailPage implements OnInit, onNavigatingTo {

    constructor(private api: OfferService) { }

    public openDetail(title){
        
    }

   

public onNavigatingTo(args) {
    var page = args.object;
    
    var gotData=page.navigationContext;
    console.log(gotData.param1);
    console.log(gotData.param2);
}
exports.onNavigatingTo = onNavigatingTo;

    ngOnInit() {
    }

}