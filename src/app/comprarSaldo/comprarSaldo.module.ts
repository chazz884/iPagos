import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ComprarSaldoRoutingModule } from "./comprarSaldo-routing.module";
import { ComprarSaldoComponent } from "./comprarSaldo.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ComprarSaldoRoutingModule
    ],
    declarations: [
        ComprarSaldoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ComprarSaldoModule { }
