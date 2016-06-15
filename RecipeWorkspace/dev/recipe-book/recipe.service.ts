import {Injectable} from "angular2/core";
import {Recipe} from "../shared/recipe";
import {RECIPES} from "../mock/recipes";


@Injectable()
export class RecipeService {

    getAllRecipes(){
        return RECIPES; //returns all recipes
    }

    getRecipe(index: number) {
        return RECIPES[index]; ///return index of specific recipe
    }

    getRecipeIndex(item: Recipe) {
        return RECIPES.indexOf(item); //returns index of specific recipe item
    }

    insertRecipe(item: Recipe) {
        RECIPES.push(item); //adds recipe by pushing to its array
    }

    deleteRecipe(index: number) {
        RECIPES.splice(index, 1); //deletes recipe, by splicing the index
    }

    updateRecipe(index: number, item: Recipe) {
        RECIPES[index] = item; //updates the recipe
    }

}