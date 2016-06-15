import {Component} from 'angular2/core';
import {ShoppingListEditComponent} from "./shopping-list-edit.component";
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "../shared/shopping-list.service";

@Component({
    template: `
        <h1>Shopping List</h1>
        <div><my-shopping-list-edit></my-shopping-list-edit></div>
        <div class="list">
            <button class="btn">Add new Item</button>
            <ul>
                <li *ngFor="#item of shoppingList">{{item.name}} {{item.amount}}</li>
            </ul>
        </div>

           
`,
    directives: [ShoppingListEditComponent],
    providers: [ShoppingListService]
})
export class ShoppingListComponent {

    shoppingList: Ingredient[];
    selectedItem: Ingredient = null;

    constructor(private _shoppingListService: ShoppingListService) {}

}

