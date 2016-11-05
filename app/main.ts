// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BarcodeScanner } from 'nativescript-barcodescanner';

import { ProfilePage } from "./pages/profile"

@NgModule({
    declarations: [AppComponent, ProfilePage],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
    providers: [BarcodeScanner]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);