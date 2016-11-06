import {Component, OnInit, NgModule} from "@angular/core";
import {ModalDialogParams} from "nativescript-angular/modal-dialog";
import {DatePicker} from "ui/date-picker";
import {Page} from "ui/page";


var productList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
    "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

// >> passing-parameters
@Component({
    selector: 'modal-view',
    styleUrls:['pages/sale/productModal.css'],
    templateUrl:"pages/sale/productModal.html",
    
})
export class ProductModalView implements OnInit{
    public currentdate:Date;

    constructor(private params: ModalDialogParams, private page: Page) {
        this.currentdate= new Date(params.context);
    }

    ngOnInit(){
   
    }

    public submit() {
            this.params.closeCallback("na?");
    }
}