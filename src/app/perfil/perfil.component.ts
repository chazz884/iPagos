import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ModalComponent } from "./modal";
import { Color } from "tns-core-modules/color";
import { Switch } from "tns-core-modules/ui/switch";

@Component({
    selector: "Perfil",
    moduleId: module.id,
    templateUrl: "./perfil.component.html"
})
export class PerfilComponent implements OnInit {
    @ViewChild("label") label: ElementRef;
    @ViewChild("textField") textField: ElementRef;
    @ViewChild("label1") label1: ElementRef;
    @ViewChild("textField1") textField1: ElementRef;
    @ViewChild("label2") label2: ElementRef;
    @ViewChild("textField2") textField2: ElementRef;
    @ViewChild("label3") label3: ElementRef;
    @ViewChild("textField3") textField3: ElementRef;
    @ViewChild(ModalComponent) modal: ModalComponent;
    name:string;
    password:string;
    passwordConfirm:string;
    alert:string;
    textAlert:string;
    check:boolean;
    selectedIndex = 1;
    items: Array<string>;

    constructor() {
        this.items = [];
        for (var i = 0; i < 5; i++) {
            this.items.push("data item " + i);
        }
    }

    ngOnInit(): void {
        const model = this;
    }

    onTap() {
        alert("clicked an item");
    }
    
    openModal() {
        console.log('entro mostrar modal')
        const model = this;
        model.modal.show();
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

    onFocus() {
        const label = this.label.nativeElement;
        const textField = this.textField.nativeElement;

        // animate the label sliding up and less transparent.
        label.animate({
            translate: { x: 0, y: - 25 },
            opacity: 1,
        }).then(() => { }, () => { });

        // set the border bottom color to green to indicate focus
        textField.borderBottomColor = new Color('#a0a0a0');
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
        textField.borderBottomColor = new Color('#a0a0a0');
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
        textField1.borderBottomColor = new Color('#a0a0a0');
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
        textField1.borderBottomColor = new Color('#a0a0a0');
    } 

    onFocus2() {
        console.log('entro segunda focus')
        const label2 = this.label2.nativeElement;
        const textField2 = this.textField2.nativeElement;

        // animate the label sliding up and less transparent.
        label2.animate({
            translate: { x: 0, y: - 25 },
            opacity: 1,
        }).then(() => { }, () => { });

        // set the border bottom color to green to indicate focus
        textField2.borderBottomColor = new Color('#a0a0a0');
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
        textField2.borderBottomColor = new Color('#a0a0a0');
    } 

    onFocus3() {
        console.log('entro segunda focus')
        const label3 = this.label3.nativeElement;
        const textField3 = this.textField3.nativeElement;

        // animate the label sliding up and less transparent.
        label3.animate({
            translate: { x: 0, y: - 25 },
            opacity: 1,
        }).then(() => { }, () => { });

        // set the border bottom color to green to indicate focus
        textField3.borderBottomColor = new Color('#a0a0a0');
    }

    onBlur3() {
        const label3 = this.label3.nativeElement;
        const textField3 = this.textField3.nativeElement;

        // if there is text in our input then don't move the label back to its initial position.
        if (!textField3.text) {
            label3.animate({
                translate: { x: 0, y: 0 },
                opacity: 0.4
            }).then(() => { }, () => { });
        }
        // reset border bottom color.
        textField3.borderBottomColor = new Color('#a0a0a0');
    }   
    onFirstChecked(args) {
        let firstSwitch = <Switch>args.object;
        this.check = firstSwitch.checked;
    }   
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }   
}
