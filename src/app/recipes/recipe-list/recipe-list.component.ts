import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tomato Soup', 'For a quick lunch', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaAqwmgdfK-OEQ8SQi9j0CGzNsEQemYwijzKqpCIlZj9No6xcE'),
    new Recipe('Pancakes', 'The best for breakfast', 'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/nalesniki_cienkie.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
