import { Component } from '@angular/core';
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { Page } from "ui/page";
import { Label } from "ui/label";
import {ModalDialogService, ModalDialogOptions} from "nativescript-angular/modal-dialog";
import {BrandModalView} from "./brandModal"
import {ProductModalView} from "./productModal"





@Component({
    selector: 'Sale',
    templateUrl: 'pages/sale/sale.html',
    styleUrls: ['pages/sale/sale.css']
})


export class SalePage {

    public brands: Array<string>;
    public products: Array<string>;

    constructor(private _modalService: ModalDialogService, private barcodeScanner: BarcodeScanner, private myPage: Page) {
     /*
        this.brands = [];
        this.products = [];

        for (var i = 0; i < brandList.length; i++) {
            this.brands.push(brandList[i]);
        }
        for (var i = 0; i < productList.length; i++) {
            this.products.push(productList[i]);
        }
        */
    }

    public createModelView(param) {

        var that = this;
        var currentDate = new Date()
        var options: ModalDialogOptions = { context: currentDate.toDateString(), fullscreen: false };
        // >> returning-result
        if(param == "product"){
            this._modalService.showModal(ProductModalView, options)
            .then((dateresult: Date) => {
                console.log("date result " + dateresult);
           
            })

        }else if(param =="brand"){
            this._modalService.showModal(ProductModalView, options)
            .then((dateresult: Date) => {
                console.log("date result " + dateresult);
           
            })

        }
        
    }


    public selectedBrandIndexChanged(picker) {
        console.log('picker selection: ' + picker.selectedIndex);
    }

    public selectedProductIndexChanged(picker) {
        console.log('picker selection: ' + picker.selectedIndex);
    }

    public onTap() {
        this.barcodeScanner.scan({
            formats: "QR_CODE, EAN_13"
        }).then((result) => {
            // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
            let kontolabel: Label = <Label>this.myPage.getViewById<Label>("kontolabel");
            kontolabel.text = result.text;
        }, (errorMessage) => {
            console.log("No scan. " + errorMessage);
        }
            );
    }
}