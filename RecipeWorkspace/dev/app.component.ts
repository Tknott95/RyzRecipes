import {Component} from 'angular2/core';
import {RecipesComponent} from "./recipe-book/recipe.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav>
                <ul>
                    <li><a>Recipes</a></li>
                    <li><a>Shopping List</a></li>
                </ul>
            </nav>
        </header>
        <div class="main">
            <my-recipe></my-recipe>
        </div>
        `,
    directives: [RecipesComponent]
})
export class AppComponent {

}
