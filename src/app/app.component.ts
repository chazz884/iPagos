import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private router: Router, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
    salir():void{
        dialogs.confirm({
            title: "Salir",
            message: "¿Realmente deseas cerrar tu sesión?",
            okButtonText: "Salir",
            cancelButtonText: "Cancelar"
        }).then(result => {
            // result argument is boolean
            if(result){
                const sideDrawer = <RadSideDrawer>app.getRootView();
                sideDrawer.closeDrawer();
                // ApplicationSettings.setBoolean("authenticated", false);
                // ApplicationSettings.remove("usuario");
                // ApplicationSettings.remove("password");
                // ApplicationSettings.remove("rol");

                this.routerExtensions.navigate(["/loginRegister"],{
                    transition:{
                        name:"slideRight",
                        curve:'easeInOut'
                    },
                    clearHistory:true
                });
            }
            console.log("Dialog result: " + result);
            
        });
        
    }      
}
