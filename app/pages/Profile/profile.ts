import { Component } from '@angular/core';
import { BarcodeScanner } from 'nativescript-barcodescanner';

import { ApiService } from '../../shared/api.service';
import { Page } from "ui/page";
import { Label } from "ui/label";

class RedeemRequest {
    constructor(public tokenHash: string, public redeemer: string) { };
}

@Component({
    selector: 'Profile',
    templateUrl: 'pages/Profile/profile.html',
    styleUrls: ['pages/Profile/profile.css'],
    providers: [ApiService]
})

export class ProfilePage {
    constructor(
        private barcodeScanner: BarcodeScanner,
        private myPage: Page,
        private api: ApiService
    ) { }

    public onTap() {
        this.barcodeScanner.scan({
            formats: "QR_CODE, EAN_13"
        }).then((result) => {
            // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
            let kontolabel: Label = <Label>this.myPage.getViewById<Label>("kontolabel");
            kontolabel.text = result.text;

            this.postCode(result.text);
        }, (errorMessage) => {
            console.log("No scan. " + errorMessage);
        }
            );
    }

    postCode(code: string) {
        let body = new RedeemRequest(code, '');
        this.api.post('/redeemToken', body)
            .then(response => {
                console.log('API POST: ' + body);
            })
            .catch(error => console.log(error));
    }

}