import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TerminosYcondicionesComponent } from "./terminosYcondiciones.component";

const routes: Routes = [
    { path: "", component: TerminosYcondicionesComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TerminosYcondicionesRoutingModule { }
