import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PoliticaTercerosComponent } from "./politicaTerceros.component";

const routes: Routes = [
    { path: "", component: PoliticaTercerosComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PoliticaTercerosRoutingModule { }
