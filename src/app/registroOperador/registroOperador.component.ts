import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { View } from "tns-core-modules/ui/core/view";
import { TouchGestureEventData } from "tns-core-modules/ui/gestures";
import { RouterExtensions } from "nativescript-angular/router";
import { Color } from "tns-core-modules/color";
import { ModalComponent } from "./modal/modal.component";
import * as ApplicationSettings from "tns-core-modules/application-settings";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";

let operadores = ["Seleccione operador", "Tigo", "Avantel", "Claro", "Movistar", "Exito", "Virgin","ETB"];

@Component({
    selector: "RegistroOperador",
    moduleId: module.id,
    templateUrl: "./registroOperador.component.html"
})
export class RegistroOperadorComponent implements OnInit {
    @ViewChild("label") label: ElementRef;
    @ViewChild("textField") textField: ElementRef;
    @ViewChild("label1") label1: ElementRef;
    @ViewChild("textField1") textField1: ElementRef;
    @ViewChild(ModalComponent) modal: ModalComponent;

    isLogin = false;
    navigating = false;
    loginTxt = "R e g i s t r a r";
    password:string;
    alert:string;
    textAlert:string;
    nombre:string;
    numero:number;
    boton:string;

    select = 0;
    operador: Array<string>;

    constructor(private _page: Page, private routerExtensions: RouterExtensions) {
        console.log("entro registro operador")
        const model = this;
        model.operador = [];
        for (var i = 0; i < 5; i++) {
            model.operador.push((operadores[i]));
        }
    }

    ngOnInit(): void {
        this._page.on('navigatingTo', (data) => {
            this.navigating = false;
        })
        this._page.actionBarHidden = true;
    } 
    onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
    }

    onButtonTap() {
        const model = this;
        console.log('validando registro operador psw')
        console.log(model.select);
        console.log(model.password);
        console.log(model.numero);

        if (model.select != 0) {
            if (model.numero && model.password) {
                console.log('registrando');

                model.alert = 'primary';
                model.textAlert = 'Registro exitoso';
                model.boton = 'Iniciar sesión';
                model.openModal(); 


            }else{
                console.log('Completa nombre y contraseña')
                model.alert = 'danger';
                model.textAlert = 'Completa nombre y contraseña';
                model.boton = 'OK';
                model.openModal(); 
            }
        }else{
            console.log('Elige operador')
            model.alert = 'danger';
            model.textAlert = 'Elige operador';
            model.boton = 'OK';
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
        if (model.boton === "Iniciar sesión") {

            model.routerExtensions.navigate(["/loginRegister"],{
                transition:{
                    name:"fade",
                    curve:"easeInOut",
                }
            })

        }
    }
    
    onOpenModal() {
        console.log("opened modal");
    }

    onCloseModal() {
        console.log("closed modal");
    }

    onFocus() {
        const label = this.label.nativeElement;
        const textField = this.textField.nativeElement;

        // animate the label sliding up and less transparent.
        label.animate({
            translate: { x: 0, y: - 25 },
            opacity: 1,
        }).then(() => { }, () => { });

        // set the border bottom color to green to indicate focus
        textField.borderBottomColor = new Color('#ffffff');
    }

    onBlur() {
        const label = this.label.nativeElement;
        const textField = this.textField.nativeElement;

        // if there is text in our input then don't move the label back to its initial position.
        if (!textField.text) {
            label.animate({
                translate: { x: 0, y: 0 },
                opacity: 0.4
            }).then(() => { }, () => { });
        }
        // reset border bottom color.
        textField.borderBottomColor = new Color('#ffffff');
    } 

    onFocus1() {
        console.log('entro segunda focus')
        const label1 = this.label1.nativeElement;
        const textField1 = this.textField1.nativeElement;

        // animate the label sliding up and less transparent.
        label1.animate({
            translate: { x: 0, y: - 25 },
            opacity: 1,
        }).then(() => { }, () => { });

        // set the border bottom color to green to indicate focus
        textField1.borderBottomColor = new Color('#ffffff');
    }

    onBlur1() {
        const label1 = this.label1.nativeElement;
        const textField1 = this.textField1.nativeElement;

        // if there is text in our input then don't move the label back to its initial position.
        if (!textField1.text) {
            label1.animate({
                translate: { x: 0, y: 0 },
                opacity: 0.4
            }).then(() => { }, () => { });
        }
        // reset border bottom color.
        textField1.borderBottomColor = new Color('#ffffff');
    } 

    irAtras(): void {
        this.routerExtensions.back();
    } 
}
