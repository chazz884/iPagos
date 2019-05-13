import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RecargasRoutingModule } from "./recargas-routing.module";
import { RecargasComponent } from "./recargas.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RecargasRoutingModule
    ],
    declarations: [
        RecargasComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RecargasModule { }
