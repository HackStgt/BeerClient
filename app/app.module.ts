import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";

import { OffersPage } from "./pages/offers/offers";
import { AppComponent } from "./app.component";

import { BarcodeScanner } from 'nativescript-barcodescanner';

import { ProfilePage } from "./pages/Profile/profile"
import { SalePage } from "./pages/sale/sale"

import { ProductModalView } from "./pages/sale/productModal"
import { BrandModalView } from "./pages/sale/brandModal"
@NgModule({
    imports: [NativeScriptModule],
    declarations: [
        AppComponent,
        OffersPage,
        ProfilePage, 
        SalePage,ProductModalView, BrandModalView
    ],
    bootstrap: [AppComponent],
    providers: [BarcodeScanner],
    entryComponents: [ProductModalView, BrandModalView]
})
export class AppModule { }
