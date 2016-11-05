import { Component } from '@angular/core';
import { BarcodeScanner } from 'nativescript-barcodescanner';

@Component({
    selector: 'Profile',
    templateUrl: 'pages/profile.html',
    styleUrls: ['pages/profile.css']
})

export class ProfilePage {


    constructor(private barcodeScanner: BarcodeScanner) {
        console.log('CONSTRUCTOR BEGIN');


        console.log('CONSTRUCTOR END');
    }

    public onTap() {
        this.barcodeScanner.scan({
            formats: "QR_CODE, EAN_13"
        }).then((result) => {
            // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
            alert({
                title: "Scan result",
                message: "Format: " + result.format + ",\nValue: " + result.text,
                okButtonText: "OK"
            });
        }, (errorMessage) => {
            console.log("No scan. " + errorMessage);
        }
            );
    }
}