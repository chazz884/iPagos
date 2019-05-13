import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { View } from "tns-core-modules/ui/core/view";
import { TouchGestureEventData } from "tns-core-modules/ui/gestures";
import { RouterExtensions } from "nativescript-angular/router";
import { Color } from "tns-core-modules/color";
import { ModalComponent } from "./modal/modal.component";
import * as ApplicationSettings from "tns-core-modules/application-settings";
import { Switch } from "tns-core-modules/ui/switch";
import {LoadingIndicator} from "nativescript-loading-indicator";
let loader = new LoadingIndicator();

@Component({
    selector: "LoginRegister",
    moduleId: module.id,
    templateUrl: "./loginRegister.component.html"
})

export class LoginRegisterComponent implements OnInit {
    @ViewChild("item") angularItem: ElementRef;
    @ViewChild("btn") btnRef: ElementRef;
    @ViewChild("logo") logoRef: ElementRef;
    @ViewChild("label") label: ElementRef;
    @ViewChild("textField") textField: ElementRef;
    @ViewChild("label1") label1: ElementRef;
    @ViewChild("textField1") textField1: ElementRef;
    @ViewChild("label2") label2: ElementRef;
    @ViewChild("textField2") textField2: ElementRef;
    @ViewChild(ModalComponent) modal: ModalComponent;
    item: View;
    btnItem: View;
    logoItem: View;

    textFieldValue: string = "";
    isLogin = true;
    isRegister = false;
    formLogin:boolean;
    navigating = false;
    loginTxt = "L o g i n";
    email:string;
    password:string;
    alert:string;
    textAlert:string;
    nombre:string;

    constructor(private _page: Page, private routerExtensions: RouterExtensions) {
        const model = this;
        model.formLogin = true;
    }

    ngOnInit(): void {
        this._page.on('navigatingTo', (data) => {
            this.navigating = false;
            this.logoItem.translateY = 0;
        })
        this._page.actionBarHidden = true;
        this.btnItem = this.btnRef.nativeElement;
        this.item = this.angularItem.nativeElement;
        this.logoItem = this.logoRef.nativeElement;

        this.item.scaleX = 0;
        this.item.scaleY = 0;
        this.item.translateY = -70;
        this.btnItem.translateY = -70;
    }  

    onButtonTap(args) {
        const model = this;
        console.log('validando login')
        console.log(model.formLogin)

        if (model.formLogin) {

            loader.show({
                message:"Cargando"
            });
            console.log('entro login');
            if (model.email && model.password) {
                setTimeout(() => {
                    loader.hide();

                    model.navigating = true;

                    model.logoItem.animate({
                        translate: { x: 0, y: 200 },
                        duration: 400
                    }).then(() => {
                        model.routerExtensions.navigate(["/home"],{
                            transition:{
                                name:'fade',
                                curve:'easeInOut',
                                duration:300,
                            }
                        });
                    });
                    
                }, 1500);

            }else{
                loader.hide();
                model.alert = 'danger';
                model.textAlert = 'Completa todos los datos';
                model.openModal();
            }

        }else{
                    loader.hide();
            console.log('entro registro');
            console.log(model.nombre)
            console.log(model.email)
            if (model.nombre && model.email) {

                ApplicationSettings.setString('registroNombre',model.nombre);
                ApplicationSettings.setString('registroEmail',model.email);

                model.routerExtensions.navigate(["/registroTerminos"],{
                    transition:{
                        name:"slideLeft",
                        curve:"easeInOut",
                    }
                })

            }else{
                console.log('Completa los datos requeridos')
                console.log(model.nombre)
                console.log(model.email)
                model.alert = 'danger';
                model.textAlert = 'Completa todos los datos';
                model.openModal();
            }
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
        if (model.alert == 'primary'){
            model.setToLogin();
        }
    }
    
    onOpenModal() {
        console.log("opened modal");
    }

    onCloseModal() {
        console.log("closed modal");
    }

    onFocusBtn(args: TouchGestureEventData) {

        if (args.action == "down") {
            this.btnItem.scaleX = 0.9;
            this.btnItem.scaleY = 0.9;
        } else if (args.action == "up") {
            this.btnItem.scaleX = 1;
            this.btnItem.scaleY = 1;
        }
        
    }

    setToLogin() {
        const model = this;
        model.formLogin = true;
        model.item.animate({
            scale: { x: 0, y: 0 },
            duration: 300
        }).then(() => {
            model.isLogin = true;
            model.loginTxt = "L o g i n";
            model.btnItem.animate({
                translate: { x: 0, y: -70 },
                duration: 200
            })
        });
    }

    setToRegister() {
        const model = this;
        
        model.isLogin = false;
        model.formLogin = false;
        model.loginTxt = "C o n t i n u a r";

        // model.btnItem.animate({
        //     translate: { x: 0, y: -70 },
        //     duration: 200
        // }).then(() => {
            model.item.animate({
            scale: { x: 0, y: 0 },
                duration: 300
            }).then(() => {
                model.item.animate({ scale: { x: 1, y: 1 }, duration: 200 })
            });
        // });
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

    onFocus2() {
        console.log('entro tercera focus')
        const label2 = this.label2.nativeElement;
        const textField2 = this.textField2.nativeElement;

        // animate the label sliding up and less transparent.
        label2.animate({
            translate: { x: 0, y: - 25 },
            opacity: 1,
        }).then(() => { }, () => { });

        // set the border bottom color to green to indicate focus
        textField2.borderBottomColor = new Color('#ffffff');
    }

    onBlur2() {
        const label2 = this.label2.nativeElement;
        const textField2 = this.textField2.nativeElement;

        // if there is text in our input then don't move the label back to its initial position.
        if (!textField2.text) {
            label2.animate({
                translate: { x: 0, y: 0 },
                opacity: 0.4
            }).then(() => { }, () => { });
        }
        // reset border bottom color.
        textField2.borderBottomColor = new Color('#ffffff');
    } 
}
