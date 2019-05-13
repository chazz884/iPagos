import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TerminosYcondicionesRoutingModule } from "./terminosYcondiciones-routing.module";
import { TerminosYcondicionesComponent } from "./terminosYcondiciones.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TerminosYcondicionesRoutingModule
    ],
    declarations: [
        TerminosYcondicionesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TerminosYcondicionesModule { }
