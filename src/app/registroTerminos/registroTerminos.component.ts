import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { View } from "tns-core-modules/ui/core/view";
import { TouchGestureEventData } from "tns-core-modules/ui/gestures";
import { RouterExtensions } from "nativescript-angular/router";
import { Color } from "tns-core-modules/color";
import { ModalComponent } from "./modal/modal.component";
import * as ApplicationSettings from "tns-core-modules/application-settings";
import { Switch } from "tns-core-modules/ui/switch";

@Component({
    selector: "RegistroTerminos",
    moduleId: module.id,
    templateUrl: "./registroTerminos.component.html"
})
export class RegistroTerminosComponent implements OnInit {
    @ViewChild("btn") btnRef: ElementRef;
    @ViewChild(ModalComponent) modal: ModalComponent;

    textFieldValue: string = "";
    isLogin = false;
    navigating = false;
    loginTxt = "C o n t i n u a r";
    alert:string;
    textAlert:string;
    check:boolean;
    check2:boolean;
    check3:boolean;

    constructor(private _page: Page, private routerExtensions: RouterExtensions) {
        const model = this;
        model.check = false;
        model.check2 = false;
        model.check3 = false;
    }

    ngOnInit(): void {
        this._page.on('navigatingTo', (data) => {
            this.navigating = false;
        })
        this._page.actionBarHidden = true;
    }  

    onButtonTap(args) {
        const model = this;
        if (model.check) {
            console.log('Aceptando terminos y condiciones');
            ApplicationSettings.setBoolean('terminosYcondiciones',model.check);

            if (model.check2) {
                console.log('setea chek2')
                ApplicationSettings.setBoolean('politicaTerceros',model.check2);
            }else{
                ApplicationSettings.setBoolean('politicaTerceros',false);
            }
            if (model.check3) {
                console.log('setea chek3')
                ApplicationSettings.setBoolean('politicaVinculados',model.check3);
            }else{
                ApplicationSettings.setBoolean('politicaVinculados',false);
            }

            console.log('check1: '+ApplicationSettings.getBoolean('terminosYcondiciones'))
            console.log('check2: '+ApplicationSettings.getBoolean('politicaTerceros'))
            console.log('check3: '+ApplicationSettings.getBoolean('politicaVinculados'))

            model.routerExtensions.navigate(["/registroOperador"],{
                transition:{
                    name:"slideLeft",
                    curve:"easeInOut",
                }
            });

        }else{
            console.log('Debes aceptar términos y condiciones')
            model.alert = 'danger';
            model.textAlert = 'Debes aceptar términos y condiciones';
            model.openModal();

        }
        
    }



    onTap() {
        alert("clicked an item");
    }
    
    openModal() {
        this.modal.show();
    }

    closeModal() {
        const model = this;
        model.modal.hide();
    }
    
    onOpenModal() {
        console.log("opened modal");
    }

    onCloseModal() {
        console.log("closed modal");
    }

    onNavigationMap(url:string):void{
        const model = this;
        model.routerExtensions.navigate([url],{
            transition:{
                name:"curlUp"
            }
        })
    }

    onFirstChecked(args,tipo:string) {
        const model = this;
        console.log('args.object')
        console.log(args.object)
        console.log(tipo)
        if (tipo == "terminos") {
            console.log('entro terminos')
            let firstSwitch = <Switch>args.object;
            model.check = firstSwitch.checked;
        }
        if (tipo == "terceros") {
            console.log('entro terceros')
            let secondSwitch = <Switch>args.object;
            model.check2 = secondSwitch.checked;
        }
        if (tipo == "vinculados") {
            console.log('entro vinculados')
            let treeSwitch = <Switch>args.object;
            model.check3 = treeSwitch.checked;
        }
    }  

    irAtras(): void {
        this.routerExtensions.back();
    } 
}
