import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PinesRoutingModule } from "./pines-routing.module";
import { PinesComponent } from "./pines.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PinesRoutingModule
    ],
    declarations: [
        PinesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PinesModule { }
