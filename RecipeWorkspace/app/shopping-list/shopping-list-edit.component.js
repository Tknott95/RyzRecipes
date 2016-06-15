System.register(['angular2/core', "../shared/shopping-list.service"], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1;
    var ShoppingListEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListEditComponent = (function () {
                function ShoppingListEditComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                }
                ShoppingListEditComponent.prototype.onSubmit = function (item) {
                    this.ingredient !== null ? this._shoppingListService.updateItem(this._shoppingListService.getIndexOfItem(this.ingredient), item) : this._shoppingListService.insertItem(item);
                };
                ShoppingListEditComponent.prototype.onDelete = function () {
                    this._shoppingListService.deleteItem(this.ingredient);
                    this.ingredient = null;
                };
                ShoppingListEditComponent = __decorate([
                    core_1.Component({
                        selector: 'my-shopping-list-edit',
                        template: "\n        <h1>{{ingredient === null ? 'Add' : 'Edit'}} Item</h1>\n        <form id=\"shopping-list-add\" (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n            <label for=\"item-name\">Name</label>\n            <input type=\"text\" id=\"item-name\" required value=\"{{ingredient?.name}}\" ngControl=\"name\">\n            <label for=\"item-amount\">Amount</label>\n            <input type=\"text\" id=\"item-amount\" required value=\"{{ingredient?.amount}}\" ngControl=\"amount\">\n              <button class=\"btn\" type=\"submit\"> {{ingredient === null ? 'Add' : 'Edit'}} </button>\n              <button class=\"btn danger\" *ngIf=\"ingredient !== null\" (click)=\"onDelete()\">Delete Item</button>\n        </form>\n        \n\n",
                        inputs: ['ingredient'],
                        styleUrls: ['src/css/shopping-list.css']
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListEditComponent);
                return ShoppingListEditComponent;
            }());
            exports_1("ShoppingListEditComponent", ShoppingListEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdCQTtnQkFHSSxtQ0FBb0Isb0JBQXlDO29CQUF6Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO2dCQUFHLENBQUM7Z0JBRWpFLDRDQUFRLEdBQVIsVUFBUyxJQUFnQjtvQkFDckIsSUFBSSxDQUFDLFVBQVUsS0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVqTCxDQUFDO2dCQUVELDRDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixDQUFDO2dCQWpDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLFFBQVEsRUFBRSxzdUJBWWI7d0JBQ0csTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDO3dCQUN0QixTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztxQkFFM0MsQ0FBQzs7NkNBQUE7Z0JBZ0JGLGdDQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCxpRUFjQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SW5ncmVkaWVudH0gZnJvbSBcIi4uL3NoYXJlZC9pbmdyZWRpZW50XCI7XG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvc2hvcHBpbmctbGlzdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktc2hvcHBpbmctbGlzdC1lZGl0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDE+e3tpbmdyZWRpZW50ID09PSBudWxsID8gJ0FkZCcgOiAnRWRpdCd9fSBJdGVtPC9oMT5cbiAgICAgICAgPGZvcm0gaWQ9XCJzaG9wcGluZy1saXN0LWFkZFwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmLnZhbHVlKVwiICNmPVwibmdGb3JtXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1uYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tbmFtZVwiIHJlcXVpcmVkIHZhbHVlPVwie3tpbmdyZWRpZW50Py5uYW1lfX1cIiBuZ0NvbnRyb2w9XCJuYW1lXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1hbW91bnRcIj5BbW91bnQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLWFtb3VudFwiIHJlcXVpcmVkIHZhbHVlPVwie3tpbmdyZWRpZW50Py5hbW91bnR9fVwiIG5nQ29udHJvbD1cImFtb3VudFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgdHlwZT1cInN1Ym1pdFwiPiB7e2luZ3JlZGllbnQgPT09IG51bGwgPyAnQWRkJyA6ICdFZGl0J319IDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGRhbmdlclwiICpuZ0lmPVwiaW5ncmVkaWVudCAhPT0gbnVsbFwiIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+RGVsZXRlIEl0ZW08L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICBcblxuYCxcbiAgICBpbnB1dHM6IFsnaW5ncmVkaWVudCddLFxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL3Nob3BwaW5nLWxpc3QuY3NzJ11cblxufSlcblxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdEVkaXRDb21wb25lbnQge1xuICAgIGluZ3JlZGllbnQ6IEluZ3JlZGllbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOiBTaG9wcGluZ0xpc3RTZXJ2aWNlKSB7fVxuXG4gICAgb25TdWJtaXQoaXRlbTogSW5ncmVkaWVudCl7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudCE9PSBudWxsID8gdGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS51cGRhdGVJdGVtKHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuZ2V0SW5kZXhPZkl0ZW0odGhpcy5pbmdyZWRpZW50KSwgaXRlbSkgOiB0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmluc2VydEl0ZW0oaXRlbSk7XG5cbiAgICB9XG5cbiAgICBvbkRlbGV0ZSgpe1xuICAgICAgICB0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmRlbGV0ZUl0ZW0odGhpcy5pbmdyZWRpZW50KTtcbiAgICAgICAgdGhpcy5pbmdyZWRpZW50ID0gbnVsbDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
