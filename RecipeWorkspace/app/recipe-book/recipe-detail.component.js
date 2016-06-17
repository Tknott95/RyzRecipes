System.register(["angular2/core", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, router_1;
    var RecipeDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RecipeDetailComponent = (function () {
                function RecipeDetailComponent(_routeParams) {
                    this._routeParams = _routeParams;
                }
                RecipeDetailComponent.prototype.ngOnInit = function () {
                    var itemIndex = this._routeParams.get('recipeIndex');
                };
                RecipeDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/recipes/recipe-detail.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], RecipeDetailComponent);
                return RecipeDetailComponent;
            }());
            exports_1("RecipeDetailComponent", RecipeDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBS0ksK0JBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQUU3Qyx3Q0FBUSxHQUFSO29CQUNJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDO2dCQWRUO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLDBDQUEwQztxQkFFMUQsQ0FBQzs7eUNBQUE7Z0JBWUYsNEJBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELHlEQVVDLENBQUEiLCJmaWxlIjoicmVjaXBlLWJvb2svcmVjaXBlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1JlY2lwZX0gZnJvbSBcIi4uL3NoYXJlZC9yZWNpcGVcIjtcbmltcG9ydCB7Um91dGVQYXJhbXN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvcmVjaXBlcy9yZWNpcGUtZGV0YWlsLnRwbC5odG1sJ1xuXG59KVxuXG5leHBvcnQgY2xhc3MgUmVjaXBlRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgICAgICByZWNpcGU6IFJlY2lwZTtcbiAgICAgICAgcHJpdmF0ZSBfcmVjaXBlXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHt9XG5cbiAgICAgICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICAgICAgbGV0IGl0ZW1JbmRleCA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgncmVjaXBlSW5kZXgnKTtcbiAgICAgICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
