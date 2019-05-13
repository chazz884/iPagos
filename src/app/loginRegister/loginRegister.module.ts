import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { LoginRegisterRoutingModule } from "./loginRegister-routing.module";
import { LoginRegisterComponent } from "./loginRegister.component";
import { ModalComponent } from "./modal";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        LoginRegisterRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        LoginRegisterComponent,
        ModalComponent
        
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginRegisterModule { }
