import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PoliticaVinculadosRoutingModule } from "./politicaVinculados-routing.module";
import { PoliticaVinculadosComponent } from "./politicaVinculados.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PoliticaVinculadosRoutingModule
    ],
    declarations: [
        PoliticaVinculadosComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PoliticaVinculadosModule { }
