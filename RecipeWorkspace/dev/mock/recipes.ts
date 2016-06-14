import {Recipe} from "../shared/recipe";
import {Ingredient} from "../shared/ingredient";

export let RECIPES: Recipe[] = [
    new Recipe('Breakfast Burrito | GAINZ Edition', //title
         'A delicious protein packed breakfast burrito', //description
        'http://visitoceanside.org/wp-content/uploads/2013/05/Breakfast-Burrito.jpg', //link of image
        [
            new Ingredient('Red Potatoes', 1)
        ]


    )
]