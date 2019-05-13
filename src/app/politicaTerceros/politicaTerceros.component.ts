import { Component, OnInit } from "@angular/core";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "politicaTerceros", loadChildren: "./politicaTerceros/politicaTerceros.module#PoliticaTercerosModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "PoliticaTerceros",
    moduleId: module.id,
    templateUrl: "./politicaTerceros.component.html"
})
export class PoliticaTercerosComponent implements OnInit {
    terceros:string;
    constructor() {
    }

    ngOnInit(): void {
        const model = this;
        model.terceros = "<p style='font-size:1.5em;'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eligendi, nulla quia? Temporibus laudantium quaerat natus excepturi hic animi pariatur omnis voluptatem rerum iste. Consectetur laborum itaque non maiores quaerat labore obcaecati consequuntur numquam ipsum, et nam quas blanditiis omnis debitis ratione illo tempore molestias amet minima eum aut, quod accusamus est architecto soluta! Illo molestias maxime non unde fuga impedit, nisi id. Explicabo minima, nostrum omnis quo nisi, reprehenderit vero cupiditate ratione voluptate mollitia doloribus? Ipsa, velit nostrum. Pariatur est nostrum qui earum sint dignissimos eius ut molestias ea minima alias ipsum, hic amet repellendus quibusdam eos, soluta? Recusandae iusto voluptates quaerat labore minima, atque beatae rerum, aliquam inventore exercitationem neque omnis totam doloremque suscipit facere eos ducimus tenetur odio nulla molestias est porro. Suscipit reprehenderit voluptate, voluptatibus delectus sequi possimus vitae aut quidem sit labore maiores nam! Ab minus, consequatur, enim maiores quia porro praesentium doloribus quibusdam adipisci. Corrupti quos repudiandae, debitis. Debitis ipsa voluptate libero rem assumenda quaerat reiciendis cumque fuga a nam velit itaque iusto illo magni perspiciatis, laborum distinctio odit, labore adipisci qui placeat! Amet tempore velit, dignissimos quasi exercitationem voluptatibus laudantium qui praesentium illo, adipisci. Voluptatum placeat, magni pariatur, ad atque reprehenderit distinctio aliquid!</p>"
    }
}
