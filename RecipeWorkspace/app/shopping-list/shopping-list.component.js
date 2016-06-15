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
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Shopping List</h1>\n        <div><my-shopping-list-edit></my-shopping-list-edit></div>\n        <div class=\"list\">\n            <button class=\"btn\">Add new Item</button>\n            <ul>\n                <li *ngFor=\"#item of shoppingList\">{{item.name}} {{item.amount}}</li>\n            </ul>\n        </div>\n\n           \n",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBS0ksK0JBQW9CLG9CQUF5QztvQkFBekMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFGN0QsaUJBQVksR0FBZSxJQUFJLENBQUM7Z0JBRWdDLENBQUM7Z0JBckJyRTtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSw0VkFXYjt3QkFDRyxVQUFVLEVBQUUsQ0FBQyx3REFBeUIsQ0FBQzt3QkFDdkMsU0FBUyxFQUFFLENBQUMsMkNBQW1CLENBQUM7cUJBQ25DLENBQUM7O3lDQUFBO2dCQVFGLDRCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCx5REFPQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Nob3BwaW5nTGlzdEVkaXRDb21wb25lbnR9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3QtZWRpdC5jb21wb25lbnRcIjtcbmltcG9ydCB7SW5ncmVkaWVudH0gZnJvbSBcIi4uL3NoYXJlZC9pbmdyZWRpZW50XCI7XG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvc2hvcHBpbmctbGlzdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMT5TaG9wcGluZyBMaXN0PC9oMT5cbiAgICAgICAgPGRpdj48bXktc2hvcHBpbmctbGlzdC1lZGl0PjwvbXktc2hvcHBpbmctbGlzdC1lZGl0PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiPkFkZCBuZXcgSXRlbTwvYnV0dG9uPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCIjaXRlbSBvZiBzaG9wcGluZ0xpc3RcIj57e2l0ZW0ubmFtZX19IHt7aXRlbS5hbW91bnR9fTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICBcbmAsXG4gICAgZGlyZWN0aXZlczogW1Nob3BwaW5nTGlzdEVkaXRDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1Nob3BwaW5nTGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudCB7XG5cbiAgICBzaG9wcGluZ0xpc3Q6IEluZ3JlZGllbnRbXTtcbiAgICBzZWxlY3RlZEl0ZW06IEluZ3JlZGllbnQgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZSkge31cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
