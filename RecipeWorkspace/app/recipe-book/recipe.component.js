System.register(['angular2/core', "./recipe-list.component", "./recipe.service", "angular2/router", "./recipe-detail.component"], function(exports_1, context_1) {
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
    var core_1, recipe_list_component_1, recipe_service_1, router_1, recipe_detail_component_1;
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
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (recipe_detail_component_1_1) {
                recipe_detail_component_1 = recipe_detail_component_1_1;
            }],
        execute: function() {
            RecipesComponent = (function () {
                function RecipesComponent() {
                }
                RecipesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-recipes',
                        template: "\n        <div class=\"master list\">\n            <my-recipe-list></my-recipe-list>\n        </div>\n        <div class=\"detail\">\n            <router-outlet></router-outlet>\n        </div>\n\n\n\n\n     ",
                        providers: [recipe_service_1.RecipeService],
                        directives: [recipe_list_component_1.RecipeListComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/...', name: 'RecipeDetail', component: recipe_detail_component_1.RecipeDetailComponent, useAsDefault: true },
                        { path: '/editMode', name: 'RecipeEdit', component: recipe_detail_component_1.RecipeDetailComponent } //must change
                    ]), 
                    __metadata('design:paramtypes', [])
                ], RecipesComponent);
                return RecipesComponent;
            }());
            exports_1("RecipesComponent", RecipesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF6QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLGtOQVdSO3dCQUNGLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7d0JBQzFCLFVBQVUsRUFBRSxDQUFDLDJDQUFtQixFQUFFLDBCQUFpQixDQUFDO3FCQUN2RCxDQUFDO29CQUVELG9CQUFXLENBQUM7d0JBQ1QsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQzFGLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBQyxDQUFDLGFBQWE7cUJBQzFGLENBQUM7O29DQUFBO2dCQUlGLHVCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCwrQ0FFQyxDQUFBIiwiZmlsZSI6InJlY2lwZS1ib29rL3JlY2lwZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JlY2lwZUxpc3RDb21wb25lbnR9IGZyb20gXCIuL3JlY2lwZS1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZWNpcGVTZXJ2aWNlfSBmcm9tIFwiLi9yZWNpcGUuc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7UmVjaXBlRGV0YWlsQ29tcG9uZW50fSBmcm9tIFwiLi9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXJlY2lwZXMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXN0ZXIgbGlzdFwiPlxuICAgICAgICAgICAgPG15LXJlY2lwZS1saXN0PjwvbXktcmVjaXBlLWxpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuXG5cblxuXG4gICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbUmVjaXBlU2VydmljZV0sXG4gICAgZGlyZWN0aXZlczogW1JlY2lwZUxpc3RDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXVxufSlcblxuQFJvdXRlQ29uZmlnKFtcbiAgICB7cGF0aDogJy8uLi4nLCBuYW1lOiAnUmVjaXBlRGV0YWlsJywgY29tcG9uZW50OiBSZWNpcGVEZXRhaWxDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gICAge3BhdGg6ICcvZWRpdE1vZGUnLCBuYW1lOiAnUmVjaXBlRWRpdCcsIGNvbXBvbmVudDogUmVjaXBlRGV0YWlsQ29tcG9uZW50fSAvL211c3QgY2hhbmdlXG5dKVxuXG5leHBvcnQgY2xhc3MgUmVjaXBlc0NvbXBvbmVudCB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
