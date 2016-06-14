System.register(["../shared/recipe", "../shared/ingredient"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var recipe_1, ingredient_1;
    var RECIPES;
    return {
        setters:[
            function (recipe_1_1) {
                recipe_1 = recipe_1_1;
            },
            function (ingredient_1_1) {
                ingredient_1 = ingredient_1_1;
            }],
        execute: function() {
            exports_1("RECIPES", RECIPES = [
                new recipe_1.Recipe('Breakfast Burrito | GAINZ Edition', //title
                'A delicious protein packed breakfast burrito', //description
                'http://visitoceanside.org/wp-content/uploads/2013/05/Breakfast-Burrito.jpg', //link of image
                [
                    new ingredient_1.Ingredient('Red Potatoes', 1)
                ])
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svcmVjaXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBR1csT0FBTzs7Ozs7Ozs7OztZQUFQLHFCQUFBLE9BQU8sR0FBYTtnQkFDM0IsSUFBSSxlQUFNLENBQUMsbUNBQW1DLEVBQUUsT0FBTztnQkFDbEQsOENBQThDLEVBQUUsYUFBYTtnQkFDOUQsNEVBQTRFLEVBQUUsZUFBZTtnQkFDN0Y7b0JBQ0ksSUFBSSx1QkFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7aUJBQ3BDLENBR0o7YUFDSixDQUFBLENBQUEiLCJmaWxlIjoibW9jay9yZWNpcGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWNpcGV9IGZyb20gXCIuLi9zaGFyZWQvcmVjaXBlXCI7XG5pbXBvcnQge0luZ3JlZGllbnR9IGZyb20gXCIuLi9zaGFyZWQvaW5ncmVkaWVudFwiO1xuXG5leHBvcnQgbGV0IFJFQ0lQRVM6IFJlY2lwZVtdID0gW1xuICAgIG5ldyBSZWNpcGUoJ0JyZWFrZmFzdCBCdXJyaXRvIHwgR0FJTlogRWRpdGlvbicsIC8vdGl0bGVcbiAgICAgICAgICdBIGRlbGljaW91cyBwcm90ZWluIHBhY2tlZCBicmVha2Zhc3QgYnVycml0bycsIC8vZGVzY3JpcHRpb25cbiAgICAgICAgJ2h0dHA6Ly92aXNpdG9jZWFuc2lkZS5vcmcvd3AtY29udGVudC91cGxvYWRzLzIwMTMvMDUvQnJlYWtmYXN0LUJ1cnJpdG8uanBnJywgLy9saW5rIG9mIGltYWdlXG4gICAgICAgIFtcbiAgICAgICAgICAgIG5ldyBJbmdyZWRpZW50KCdSZWQgUG90YXRvZXMnLCAxKVxuICAgICAgICBdXG5cblxuICAgIClcbl0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
