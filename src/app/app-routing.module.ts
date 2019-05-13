import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/loginRegister", pathMatch: "full" },
    { path: "loginRegister", loadChildren: "~/app/loginRegister/loginRegister.module#LoginRegisterModule" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "perfil", loadChildren: "~/app/perfil/perfil.module#PerfilModule" },
    { path: "registroOperador", loadChildren: "~/app/registroOperador/registroOperador.module#RegistroOperadorModule" },
    { path: "registroTerminos", loadChildren: "~/app/registroTerminos/registroTerminos.module#RegistroTerminosModule" },
    { path: "terminosYcondiciones", loadChildren: "~/app/terminosYcondiciones/terminosYcondiciones.module#TerminosYcondicionesModule" },
    { path: "politicaTerceros", loadChildren: "~/app/politicaTerceros/politicaTerceros.module#PoliticaTercerosModule" },
    { path: "politicaVinculados", loadChildren: "~/app/politicaVinculados/politicaVinculados.module#PoliticaVinculadosModule" },
    { path: "historial", loadChildren: "~/app/historial/historial.module#HistorialModule" },
    { path: "paquetes", loadChildren: "~/app/paquetes/paquetes.module#PaquetesModule" },
    { path: "pines", loadChildren: "~/app/pines/pines.module#PinesModule" },
    { path: "comprarSaldo", loadChildren: "~/app/comprarSaldo/comprarSaldo.module#ComprarSaldoModule" },
    { path: "recargas", loadChildren: "~/app/recargas/recargas.module#RecargasModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
