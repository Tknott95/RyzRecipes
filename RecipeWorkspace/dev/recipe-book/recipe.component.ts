import {Component} from 'angular2/core';
import {RecipeListComponent} from "./recipe-list.component";
import {RecipeService} from "./recipe.service";

@Component({
    selector: 'my-recipes',
    template: `
        <div class="master list">
            <my-recipe-list></my-recipe-list>
        </div>
        <div class="detail">
            Recipe Detail
        </div>




     `,
    providers: [RecipeService],
    directives: [RecipeListComponent]
})

export class RecipesComponent {

}