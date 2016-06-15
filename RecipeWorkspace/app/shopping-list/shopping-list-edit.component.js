System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ShoppingListEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListEditComponent = (function () {
                function ShoppingListEditComponent() {
                }
                ShoppingListEditComponent = __decorate([
                    core_1.Component({
                        selector: 'my-shopping-list-edit',
                        template: "\n        <h1>{{ingredient === null ? 'Add' : 'Edit'}} Item</h1>\n        <form id=\"shopping-list-add\" (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n            <label for=\"item-name\">Name</label>\n            <input type=\"text\" id=\"item-name\" required value=\"{{ingredient?.name}}\" ngControl=\"name\">\n            <label for=\"item-amount\">Amount</label>\n            <input type=\"text\" id=\"item-amount\" required value=\"{{ingredient?.amount}}\" ngControl=\"amount\">\n              <button class=\"btn\" type=\"submit\"> {{ingredient === null ? 'Add' : 'Edit'}} </button>\n              <button class=\"btn danger\" *ngIf=\"ingredient !== null\" (click)=\"onDelete()\">Delete Item</button>\n        </form>\n        \n\n",
                        inputs: ['ingredient'],
                        styleUrls: ['src/css/shopping-list.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListEditComponent);
                return ShoppingListEditComponent;
            }());
            exports_1("ShoppingListEditComponent", ShoppingListEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFBQTtnQkFFQSxDQUFDO2dCQXRCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLFFBQVEsRUFBRSxzdUJBWWI7d0JBQ0csTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDO3dCQUN0QixTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztxQkFFM0MsQ0FBQzs7NkNBQUE7Z0JBSUYsZ0NBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELGlFQUVDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tIFwiLi4vc2hhcmVkL2luZ3JlZGllbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1zaG9wcGluZy1saXN0LWVkaXQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMT57e2luZ3JlZGllbnQgPT09IG51bGwgPyAnQWRkJyA6ICdFZGl0J319IEl0ZW08L2gxPlxuICAgICAgICA8Zm9ybSBpZD1cInNob3BwaW5nLWxpc3QtYWRkXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KGYudmFsdWUpXCIgI2Y9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1uYW1lXCIgcmVxdWlyZWQgdmFsdWU9XCJ7e2luZ3JlZGllbnQ/Lm5hbWV9fVwiIG5nQ29udHJvbD1cIm5hbWVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLWFtb3VudFwiPkFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tYW1vdW50XCIgcmVxdWlyZWQgdmFsdWU9XCJ7e2luZ3JlZGllbnQ/LmFtb3VudH19XCIgbmdDb250cm9sPVwiYW1vdW50XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiB0eXBlPVwic3VibWl0XCI+IHt7aW5ncmVkaWVudCA9PT0gbnVsbCA/ICdBZGQnIDogJ0VkaXQnfX0gPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gZGFuZ2VyXCIgKm5nSWY9XCJpbmdyZWRpZW50ICE9PSBudWxsXCIgKGNsaWNrKT1cIm9uRGVsZXRlKClcIj5EZWxldGUgSXRlbTwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIFxuXG5gLFxuICAgIGlucHV0czogWydpbmdyZWRpZW50J10sXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3Mvc2hvcHBpbmctbGlzdC5jc3MnXVxuXG59KVxuXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudCB7XG4gICAgaW5ncmVkaWVudDogSW5ncmVkaWVudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
