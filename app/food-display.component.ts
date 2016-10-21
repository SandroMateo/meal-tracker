import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-display',
  template: `
    <h2>Food: {{ food.name }} </h2>
    <p>Details: {{ food.details }} </p>
    <p>Calories: {{ food.calories }} </p>
    <p> Date Logged: {{ food.dateLogged }} <p>
  `
})

export class FoodDisplayComponent {
  @Input() food: Food;
}
