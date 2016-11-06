// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BarcodeScanner } from 'nativescript-barcodescanner';

import { ProfilePage } from "./pages/Profile/profile"
import { SalePage } from "./pages/sale/sale"

import { ProductModalView } from "./pages/sale/productModal"
import { BrandModalView } from "./pages/sale/brandModal"

@NgModule({
    declarations: [AppComponent, 
    ProfilePage, 
    SalePage,ProductModalView, BrandModalView],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
    providers: [BarcodeScanner],
    entryComponents: [ProductModalView, BrandModalView]
})

class AppComponentModule {}

import { AppModule } from "./app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);