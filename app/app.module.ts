import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";

import { OffersPage } from "./pages/offers/offers";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [NativeScriptModule],
    declarations: [
        AppComponent,
        OffersPage,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
