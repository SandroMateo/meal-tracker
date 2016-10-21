import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-display',
  template: `
    <h4>Food: {{ food.name }} </h4>
    <p>Details: {{ food.details }} </p>
    <p>Calories: {{ food.calories }} </p>
  `
})

export class FoodDisplayComponent {
  @Input() food: Food;
  @Input() date: string;
}
