import {Recipe} from "../shared/recipe";
import {Ingredient} from "../shared/ingredient";

export let RECIPES: Recipe[] = [
    new Recipe('Breakfast Burrito | GAINZ Edition', //title
         'A delicious protein packed breakfast burrito', //description
        'http://visitoceanside.org/wp-content/uploads/2013/05/Breakfast-Burrito.jpg', //link of image
        [
            new Ingredient('Red Potatoes', 5),
            new Ingredient('Turkey Bacon', 5),
            new Ingredient('Whole-Grain Tortilla', 10),
            new Ingredient('Egg Whites', 5),
            new Ingredient('Low-Fat green-chile', 3),
        ]


    ),new Recipe('Protein Pancakes', //title
         'A protein packed pancake to give you all of your morning nutrients', //description
        'https://fitnessandfrozengrapes.files.wordpress.com/2012/07/img_1682.jpg', //link of image
        [
            new Ingredient('Red Potatoes', 5),
            new Ingredient('Turkey Bacon', 5),
            new Ingredient('Whole-Grain Tortilla', 10),
            new Ingredient('Egg Whites', 5),
            new Ingredient('Low-Fat green-chile', 3),
        ]


    ),


]