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
                new recipe_1.Recipe('Breakfast Burritos', //title
                'A delicious protein packed breakfast burrito', //description
                'http://visitoceanside.org/wp-content/uploads/2013/05/Breakfast-Burrito.jpg', //link of image
                [
                    new ingredient_1.Ingredient('Red Potatoes', 5),
                    new ingredient_1.Ingredient('Turkey Bacon', 5),
                    new ingredient_1.Ingredient('Whole-Grain Tortilla', 10),
                    new ingredient_1.Ingredient('Egg Whites', 5),
                    new ingredient_1.Ingredient('Low-Fat green-chile', 3),
                ]), new recipe_1.Recipe('Protein Pancakes', //title
                'A protein packed pancake to give you all of your morning nutrients', //description
                'https://fitnessandfrozengrapes.files.wordpress.com/2012/07/img_1682.jpg', //link of image
                [
                    new ingredient_1.Ingredient('Red Potatoes', 5),
                    new ingredient_1.Ingredient('Turkey Bacon', 5),
                    new ingredient_1.Ingredient('Whole-Grain Tortilla', 10),
                    new ingredient_1.Ingredient('Egg Whites', 5),
                    new ingredient_1.Ingredient('Low-Fat green-chile', 3),
                ]),
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svcmVjaXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBR1csT0FBTzs7Ozs7Ozs7OztZQUFQLHFCQUFBLE9BQU8sR0FBYTtnQkFDM0IsSUFBSSxlQUFNLENBQUMsb0JBQW9CLEVBQUUsT0FBTztnQkFDbkMsOENBQThDLEVBQUUsYUFBYTtnQkFDOUQsNEVBQTRFLEVBQUUsZUFBZTtnQkFDN0Y7b0JBQ0ksSUFBSSx1QkFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7b0JBQ2pDLElBQUksdUJBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLHVCQUFVLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxDQUFDO29CQUMxQyxJQUFJLHVCQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztvQkFDL0IsSUFBSSx1QkFBVSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztpQkFDM0MsQ0FHSixFQUFDLElBQUksZUFBTSxDQUFDLGtCQUFrQixFQUFFLE9BQU87Z0JBQ25DLG9FQUFvRSxFQUFFLGFBQWE7Z0JBQ3BGLHlFQUF5RSxFQUFFLGVBQWU7Z0JBQzFGO29CQUNJLElBQUksdUJBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLHVCQUFVLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztvQkFDakMsSUFBSSx1QkFBVSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQztvQkFDMUMsSUFBSSx1QkFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7b0JBQy9CLElBQUksdUJBQVUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7aUJBQzNDLENBR0o7YUFHSixDQUFBLENBQUEiLCJmaWxlIjoibW9jay9yZWNpcGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWNpcGV9IGZyb20gXCIuLi9zaGFyZWQvcmVjaXBlXCI7XG5pbXBvcnQge0luZ3JlZGllbnR9IGZyb20gXCIuLi9zaGFyZWQvaW5ncmVkaWVudFwiO1xuXG5leHBvcnQgbGV0IFJFQ0lQRVM6IFJlY2lwZVtdID0gW1xuICAgIG5ldyBSZWNpcGUoJ0JyZWFrZmFzdCBCdXJyaXRvcycsIC8vdGl0bGVcbiAgICAgICAgICdBIGRlbGljaW91cyBwcm90ZWluIHBhY2tlZCBicmVha2Zhc3QgYnVycml0bycsIC8vZGVzY3JpcHRpb25cbiAgICAgICAgJ2h0dHA6Ly92aXNpdG9jZWFuc2lkZS5vcmcvd3AtY29udGVudC91cGxvYWRzLzIwMTMvMDUvQnJlYWtmYXN0LUJ1cnJpdG8uanBnJywgLy9saW5rIG9mIGltYWdlXG4gICAgICAgIFtcbiAgICAgICAgICAgIG5ldyBJbmdyZWRpZW50KCdSZWQgUG90YXRvZXMnLCA1KSxcbiAgICAgICAgICAgIG5ldyBJbmdyZWRpZW50KCdUdXJrZXkgQmFjb24nLCA1KSxcbiAgICAgICAgICAgIG5ldyBJbmdyZWRpZW50KCdXaG9sZS1HcmFpbiBUb3J0aWxsYScsIDEwKSxcbiAgICAgICAgICAgIG5ldyBJbmdyZWRpZW50KCdFZ2cgV2hpdGVzJywgNSksXG4gICAgICAgICAgICBuZXcgSW5ncmVkaWVudCgnTG93LUZhdCBncmVlbi1jaGlsZScsIDMpLFxuICAgICAgICBdXG5cblxuICAgICksbmV3IFJlY2lwZSgnUHJvdGVpbiBQYW5jYWtlcycsIC8vdGl0bGVcbiAgICAgICAgICdBIHByb3RlaW4gcGFja2VkIHBhbmNha2UgdG8gZ2l2ZSB5b3UgYWxsIG9mIHlvdXIgbW9ybmluZyBudXRyaWVudHMnLCAvL2Rlc2NyaXB0aW9uXG4gICAgICAgICdodHRwczovL2ZpdG5lc3NhbmRmcm96ZW5ncmFwZXMuZmlsZXMud29yZHByZXNzLmNvbS8yMDEyLzA3L2ltZ18xNjgyLmpwZycsIC8vbGluayBvZiBpbWFnZVxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgSW5ncmVkaWVudCgnUmVkIFBvdGF0b2VzJywgNSksXG4gICAgICAgICAgICBuZXcgSW5ncmVkaWVudCgnVHVya2V5IEJhY29uJywgNSksXG4gICAgICAgICAgICBuZXcgSW5ncmVkaWVudCgnV2hvbGUtR3JhaW4gVG9ydGlsbGEnLCAxMCksXG4gICAgICAgICAgICBuZXcgSW5ncmVkaWVudCgnRWdnIFdoaXRlcycsIDUpLFxuICAgICAgICAgICAgbmV3IEluZ3JlZGllbnQoJ0xvdy1GYXQgZ3JlZW4tY2hpbGUnLCAzKSxcbiAgICAgICAgXVxuXG5cbiAgICApLFxuXG5cbl0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
