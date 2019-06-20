import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Test description', 'https://kolorowyprzepisownik.pl/wp-content/uploads/2017/12/Najlepsze-przepisy-na-Sylwestra_imprez%C4%99.jpg'),
    new Recipe('Pancakes', 'The best for breakfast', 'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/nalesniki_cienkie.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
