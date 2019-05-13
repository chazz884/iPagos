import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PaquetesRoutingModule } from "./paquetes-routing.module";
import { PaquetesComponent } from "./paquetes.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PaquetesRoutingModule
    ],
    declarations: [
        PaquetesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PaquetesModule { }
