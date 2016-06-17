
import {Component, OnInit} from "angular2/core";
import {Recipe} from "../shared/recipe";
import {RouteParams} from "angular2/router";

@Component({
    templateUrl: 'templates/recipes/recipe-detail.tpl.html'

})

export class RecipeDetailComponent implements OnInit {

        recipe: Recipe;
        private _recipe

    constructor(private _routeParams: RouteParams) {}

        ngOnInit():any {
            let itemIndex = this._routeParams.get('recipeIndex');
        }
}
