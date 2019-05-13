import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { RegistroOperadorRoutingModule } from "./registroOperador-routing.module";
import { RegistroOperadorComponent } from "./registroOperador.component";
import { ModalComponent } from "./modal";
import { DropDownModule } from "nativescript-drop-down/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RegistroOperadorRoutingModule,
        DropDownModule,
        NativeScriptFormsModule
    ],
    declarations: [
        RegistroOperadorComponent,
        ModalComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RegistroOperadorModule { }
