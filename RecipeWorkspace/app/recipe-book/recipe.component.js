System.register(['angular2/core', "./recipe-list.component", "./recipe.service"], function(exports_1, context_1) {
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
    var core_1, recipe_list_component_1, recipe_service_1;
    var RecipesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipe_list_component_1_1) {
                recipe_list_component_1 = recipe_list_component_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            }],
        execute: function() {
            RecipesComponent = (function () {
                function RecipesComponent() {
                }
                RecipesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-recipes',
                        template: "\n        <div class=\"master list\">\n            <my-recipe-list></my-recipe-list>\n        </div>\n        <div class=\"detail\">\n            Recipe Detail\n        </div>\n\n\n\n\n     ",
                        providers: [recipe_service_1.RecipeService],
                        directives: [recipe_list_component_1.RecipeListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RecipesComponent);
                return RecipesComponent;
            }());
            exports_1("RecipesComponent", RecipesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFwQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLGdNQVdSO3dCQUNGLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7d0JBQzFCLFVBQVUsRUFBRSxDQUFDLDJDQUFtQixDQUFDO3FCQUNwQyxDQUFDOztvQ0FBQTtnQkFJRix1QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsK0NBRUMsQ0FBQSIsImZpbGUiOiJyZWNpcGUtYm9vay9yZWNpcGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSZWNpcGVMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9yZWNpcGUtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVjaXBlU2VydmljZX0gZnJvbSBcIi4vcmVjaXBlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1yZWNpcGVzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFzdGVyIGxpc3RcIj5cbiAgICAgICAgICAgIDxteS1yZWNpcGUtbGlzdD48L215LXJlY2lwZS1saXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPlxuICAgICAgICAgICAgUmVjaXBlIERldGFpbFxuICAgICAgICA8L2Rpdj5cblxuXG5cblxuICAgICBgLFxuICAgIHByb3ZpZGVyczogW1JlY2lwZVNlcnZpY2VdLFxuICAgIGRpcmVjdGl2ZXM6IFtSZWNpcGVMaXN0Q29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFJlY2lwZXNDb21wb25lbnQge1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
