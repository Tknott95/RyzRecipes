System.register(["angular2/core", "../mock/recipes"], function(exports_1, context_1) {
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
    var core_1, recipes_1;
    var RecipeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipes_1_1) {
                recipes_1 = recipes_1_1;
            }],
        execute: function() {
            RecipeService = (function () {
                function RecipeService() {
                }
                RecipeService.prototype.getAllRecipes = function () {
                    return recipes_1.RECIPES; //returns all recipes
                };
                RecipeService.prototype.getRecipe = function (index) {
                    return recipes_1.RECIPES[index]; ///return index of specific recipe
                };
                RecipeService.prototype.getRecipeIndex = function (item) {
                    return recipes_1.RECIPES.indexOf(item); //returns index of specific recipe item
                };
                RecipeService.prototype.insertRecipe = function (item) {
                    recipes_1.RECIPES.push(item); //adds recipe by pushing to its array
                };
                RecipeService.prototype.deleteRecipe = function (index) {
                    recipes_1.RECIPES.splice(index, 1); //deletes recipe, by splicing the index
                };
                RecipeService.prototype.updateRecipe = function (index, item) {
                    recipes_1.RECIPES[index] = item; //updates the recipe
                };
                RecipeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RecipeService);
                return RecipeService;
            }());
            exports_1("RecipeService", RecipeService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7Z0JBMEJBLENBQUM7Z0JBeEJHLHFDQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLGlCQUFPLENBQUMsQ0FBQyxxQkFBcUI7Z0JBQ3pDLENBQUM7Z0JBRUQsaUNBQVMsR0FBVCxVQUFVLEtBQWE7b0JBQ25CLE1BQU0sQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsa0NBQWtDO2dCQUM3RCxDQUFDO2dCQUVELHNDQUFjLEdBQWQsVUFBZSxJQUFZO29CQUN2QixNQUFNLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7Z0JBQ3pFLENBQUM7Z0JBRUQsb0NBQVksR0FBWixVQUFhLElBQVk7b0JBQ3JCLGlCQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMscUNBQXFDO2dCQUM3RCxDQUFDO2dCQUVELG9DQUFZLEdBQVosVUFBYSxLQUFhO29CQUN0QixpQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7Z0JBQ3JFLENBQUM7Z0JBRUQsb0NBQVksR0FBWixVQUFhLEtBQWEsRUFBRSxJQUFZO29CQUNwQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLG9CQUFvQjtnQkFDL0MsQ0FBQztnQkF6Qkw7b0JBQUMsaUJBQVUsRUFBRTs7aUNBQUE7Z0JBMkJiLG9CQUFDO1lBQUQsQ0ExQkEsQUEwQkMsSUFBQTtZQTFCRCx5Q0EwQkMsQ0FBQSIsImZpbGUiOiJyZWNpcGUtYm9vay9yZWNpcGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7UmVjaXBlfSBmcm9tIFwiLi4vc2hhcmVkL3JlY2lwZVwiO1xuaW1wb3J0IHtSRUNJUEVTfSBmcm9tIFwiLi4vbW9jay9yZWNpcGVzXCI7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlY2lwZVNlcnZpY2Uge1xuXG4gICAgZ2V0QWxsUmVjaXBlcygpe1xuICAgICAgICByZXR1cm4gUkVDSVBFUzsgLy9yZXR1cm5zIGFsbCByZWNpcGVzXG4gICAgfVxuXG4gICAgZ2V0UmVjaXBlKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIFJFQ0lQRVNbaW5kZXhdOyAvLy9yZXR1cm4gaW5kZXggb2Ygc3BlY2lmaWMgcmVjaXBlXG4gICAgfVxuXG4gICAgZ2V0UmVjaXBlSW5kZXgoaXRlbTogUmVjaXBlKSB7XG4gICAgICAgIHJldHVybiBSRUNJUEVTLmluZGV4T2YoaXRlbSk7IC8vcmV0dXJucyBpbmRleCBvZiBzcGVjaWZpYyByZWNpcGUgaXRlbVxuICAgIH1cblxuICAgIGluc2VydFJlY2lwZShpdGVtOiBSZWNpcGUpIHtcbiAgICAgICAgUkVDSVBFUy5wdXNoKGl0ZW0pOyAvL2FkZHMgcmVjaXBlIGJ5IHB1c2hpbmcgdG8gaXRzIGFycmF5XG4gICAgfVxuXG4gICAgZGVsZXRlUmVjaXBlKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgUkVDSVBFUy5zcGxpY2UoaW5kZXgsIDEpOyAvL2RlbGV0ZXMgcmVjaXBlLCBieSBzcGxpY2luZyB0aGUgaW5kZXhcbiAgICB9XG5cbiAgICB1cGRhdGVSZWNpcGUoaW5kZXg6IG51bWJlciwgaXRlbTogUmVjaXBlKSB7XG4gICAgICAgIFJFQ0lQRVNbaW5kZXhdID0gaXRlbTsgLy91cGRhdGVzIHRoZSByZWNpcGVcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
