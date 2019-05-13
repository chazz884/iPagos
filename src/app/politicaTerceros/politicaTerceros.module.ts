import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PoliticaTercerosRoutingModule } from "./politicaTerceros-routing.module";
import { PoliticaTercerosComponent } from "./politicaTerceros.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PoliticaTercerosRoutingModule
    ],
    declarations: [
        PoliticaTercerosComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PoliticaTercerosModule { }
