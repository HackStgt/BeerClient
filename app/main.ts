// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
class AppComponentModule {}

import { AppModule } from "./app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);