import { Component } from '@angular/core';
import { BarcodeScanner } from 'nativescript-barcodescanner';
import {Page} from "ui/page";
import {Label} from "ui/label";

@Component({
    selector: 'Profile',
    templateUrl: 'pages/Profile/profile.html',
    styleUrls: ['pages/Profile/profile.css']
})


export class ProfilePage {
    constructor(private barcodeScanner: BarcodeScanner,  private myPage: Page) {
        console.log('CONSTRUCTOR BEGIN');


        console.log('CONSTRUCTOR END');
    }

    public onTap() {
        this.barcodeScanner.scan({
            formats: "QR_CODE, EAN_13"
        }).then((result) => {
            // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
            let kontolabel:Label = <Label>this.myPage.getViewById<Label>("kontolabel");
            kontolabel.text = result.text;
        }, (errorMessage) => {
            console.log("No scan. " + errorMessage);
        }
            );
    }
}