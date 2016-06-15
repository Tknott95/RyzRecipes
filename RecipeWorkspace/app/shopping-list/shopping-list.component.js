System.register(['angular2/core', "./shopping-list-edit.component", "../shared/shopping-list.service"], function(exports_1, context_1) {
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
    var core_1, shopping_list_edit_component_1, shopping_list_service_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_edit_component_1_1) {
                shopping_list_edit_component_1 = shopping_list_edit_component_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                    this.selectedItem = null;
                }
                ShoppingListComponent.prototype.ngOnInit = function () {
                    this.shoppingList = this._shoppingListService.getAllItems();
                };
                ShoppingListComponent.prototype.onAddItem = function () {
                    this.selectedItem = null;
                };
                ShoppingListComponent.prototype.onSelectItem = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Shopping List</h1>\n        <div><my-shopping-list-edit [ingredient]=\"selectedItem\"></my-shopping-list-edit></div>\n        <div class=\"list\">\n            <button class=\"btn\" (click)=\"onAddItem()\">Add new Item</button>\n            <ul>\n                <li *ngFor=\"#item of shoppingList\" (click)=\"onSelectItem(item)\">{{item.name}} {{item.amount}}</li>\n            </ul>\n        </div>\n\n           \n",
                        directives: [shopping_list_edit_component_1.ShoppingListEditComponent],
                        providers: [shopping_list_service_1.ShoppingListService]
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBS0ksK0JBQW9CLG9CQUF5QztvQkFBekMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFGN0QsaUJBQVksR0FBZSxJQUFJLENBQUM7Z0JBRWdDLENBQUM7Z0JBRWpFLHdDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2hFLENBQUM7Z0JBRUQseUNBQVMsR0FBVDtvQkFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCw0Q0FBWSxHQUFaLFVBQWEsSUFBZ0I7b0JBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixDQUFDO2dCQWpDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxpYkFXYjt3QkFDRyxVQUFVLEVBQUUsQ0FBQyx3REFBeUIsQ0FBQzt3QkFDdkMsU0FBUyxFQUFFLENBQUMsMkNBQW1CLENBQUM7cUJBQ25DLENBQUM7O3lDQUFBO2dCQW9CRiw0QkFBQztZQUFELENBbkJBLEFBbUJDLElBQUE7WUFuQkQseURBbUJDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RFZGl0Q29tcG9uZW50fSBmcm9tIFwiLi9zaG9wcGluZy1saXN0LWVkaXQuY29tcG9uZW50XCI7XG5pbXBvcnQge0luZ3JlZGllbnR9IGZyb20gXCIuLi9zaGFyZWQvaW5ncmVkaWVudFwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3Nob3BwaW5nLWxpc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDE+U2hvcHBpbmcgTGlzdDwvaDE+XG4gICAgICAgIDxkaXY+PG15LXNob3BwaW5nLWxpc3QtZWRpdCBbaW5ncmVkaWVudF09XCJzZWxlY3RlZEl0ZW1cIj48L215LXNob3BwaW5nLWxpc3QtZWRpdD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiAoY2xpY2spPVwib25BZGRJdGVtKClcIj5BZGQgbmV3IEl0ZW08L2J1dHRvbj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwiI2l0ZW0gb2Ygc2hvcHBpbmdMaXN0XCIgKGNsaWNrKT1cIm9uU2VsZWN0SXRlbShpdGVtKVwiPnt7aXRlbS5uYW1lfX0ge3tpdGVtLmFtb3VudH19PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgIFxuYCxcbiAgICBkaXJlY3RpdmVzOiBbU2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbU2hvcHBpbmdMaXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgc2hvcHBpbmdMaXN0OiBJbmdyZWRpZW50W107XG4gICAgc2VsZWN0ZWRJdGVtOiBJbmdyZWRpZW50ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgIHRoaXMuc2hvcHBpbmdMaXN0ID0gdGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5nZXRBbGxJdGVtcygpO1xuICAgIH1cblxuICAgIG9uQWRkSXRlbSgpe1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgfVxuXG4gICAgb25TZWxlY3RJdGVtKGl0ZW06IEluZ3JlZGllbnQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
