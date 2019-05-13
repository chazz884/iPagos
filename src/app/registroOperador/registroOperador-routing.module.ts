import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { RegistroOperadorComponent } from "./registroOperador.component";

const routes: Routes = [
    { path: "", component: RegistroOperadorComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RegistroOperadorRoutingModule { }
