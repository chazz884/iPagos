import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RegistroTerminosRoutingModule } from "./registroTerminos-routing.module";
import { RegistroTerminosComponent } from "./registroTerminos.component";
import { ModalComponent } from "./modal";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RegistroTerminosRoutingModule
    ],
    declarations: [
        RegistroTerminosComponent,
        ModalComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RegistroTerminosModule { }
