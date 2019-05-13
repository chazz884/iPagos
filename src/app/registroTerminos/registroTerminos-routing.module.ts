import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { RegistroTerminosComponent } from "./registroTerminos.component";

const routes: Routes = [
    { path: "", component: RegistroTerminosComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RegistroTerminosRoutingModule { }
