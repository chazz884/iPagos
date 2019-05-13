import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PoliticaVinculadosComponent } from "./politicaVinculados.component";

const routes: Routes = [
    { path: "", component: PoliticaVinculadosComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PoliticaVinculadosRoutingModule { }
