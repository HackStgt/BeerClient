import {Component, OnInit, NgModule} from "@angular/core";
import {ModalDialogParams} from "nativescript-angular/modal-dialog";
import {DatePicker} from "ui/date-picker";
import {Page} from "ui/page";

var brandList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
    "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

// >> passing-parameters
@Component({
    selector: 'modal-view',
    styleUrls:['pages/sale/brandModal.css'],
    templateUrl:"pages/sale/brandModal.html",
    
})
export class BrandModalView implements OnInit{
    public brands:Array<String>;

    constructor(private params: ModalDialogParams, private page: Page) {
        for (var i = 0; i < brandList.length; i++) {
            this.brands.push(brandList[i]);
        }
    }

    public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + brandList[args.index]);
    }

    ngOnInit(){
      
    }

    public submit() {

            this.params.closeCallback("Hey");
    }
}