System.register(['angular2/core', "./recipe.service"], function(exports_1, context_1) {
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
    var core_1, recipe_service_1;
    var RecipeListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            }],
        execute: function() {
            RecipeListComponent = (function () {
                function RecipeListComponent(_recipeService) {
                    this._recipeService = _recipeService;
                }
                RecipeListComponent.prototype.ngOnInit = function () {
                    this.recipes = this._recipeService.getAllRecipes();
                };
                RecipeListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-recipe-list',
                        template: "\n        <button class=\"btn\" (click)=\"onAddRecipe()\">Add Recipe</button>\n        <ul>\n            <li *ngFor=\"#item of recipes\">\n                <div class=\"img\">\n                    <img [src]=\"item.imageUrl\" alt=\"Recipe\">\n                </div>\n                <div class=\"text\">{{item.name}}</div>\n            </li>\n        </ul>\n\n"
                    }), 
                    __metadata('design:paramtypes', [recipe_service_1.RecipeService])
                ], RecipeListComponent);
                return RecipeListComponent;
            }());
            exports_1("RecipeListComponent", RecipeListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTtnQkFHSSw2QkFBb0IsY0FBNkI7b0JBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO2dCQUFHLENBQUM7Z0JBS3JELHNDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN2RCxDQUFDO2dCQTNCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSx5V0FXYjtxQkFFQSxDQUFDOzt1Q0FBQTtnQkFhRiwwQkFBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQscURBV0MsQ0FBQSIsImZpbGUiOiJyZWNpcGUtYm9vay9yZWNpcGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UmVjaXBlfSBmcm9tIFwiLi4vc2hhcmVkL3JlY2lwZVwiO1xuaW1wb3J0IHtSZWNpcGVTZXJ2aWNlfSBmcm9tIFwiLi9yZWNpcGUuc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktcmVjaXBlLWxpc3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiAoY2xpY2spPVwib25BZGRSZWNpcGUoKVwiPkFkZCBSZWNpcGU8L2J1dHRvbj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cIiNpdGVtIG9mIHJlY2lwZXNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XCJpdGVtLmltYWdlVXJsXCIgYWx0PVwiUmVjaXBlXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj57e2l0ZW0ubmFtZX19PC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuXG5gXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBSZWNpcGVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAgICAgcmVjaXBlczogUmVjaXBlW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZWNpcGVTZXJ2aWNlOiBSZWNpcGVTZXJ2aWNlKSB7fVxuICAgIFxuXG5cbiAgICBcbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgIHRoaXMucmVjaXBlcyA9IHRoaXMuX3JlY2lwZVNlcnZpY2UuZ2V0QWxsUmVjaXBlcygpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
