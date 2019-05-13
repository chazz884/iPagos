import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ComprarSaldoComponent } from "./comprarSaldo.component";

const routes: Routes = [
    { path: "", component: ComprarSaldoComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ComprarSaldoRoutingModule { }
